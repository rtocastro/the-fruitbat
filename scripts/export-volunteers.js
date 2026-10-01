import { cert, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");

const serviceAccountPath = path.join(
  projectRoot,
  "serviceAccountKey.json"
);

const serviceAccount = JSON.parse(
  fs.readFileSync(serviceAccountPath, "utf8")
);

const app = initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore(app);

function escapeCsv(value) {
  if (value === null || value === undefined) {
    return "";
  }

  const stringValue = String(value);

  return `"${stringValue.replace(/"/g, '""')}"`;
}

async function exportVolunteers() {
  console.log(
    "🦇 Reading Fruitbat volunteer submissions..."
  );

  const snapshot = await db
    .collection("volunteerSubmissions")
    .orderBy("submittedAt", "desc")
    .get();

  if (snapshot.empty) {
    console.log("No volunteer submissions found.");
    return;
  }

  const headers = [
    "Name",
    "Email",
    "Phone",
    "Organization",
    "Organization ID",
    "Interests",
    "Availability",
    "Experience",
    "Notes",
    "Status",
    "Submitted",
  ];

  const rows = snapshot.docs.map((doc) => {
    const data = doc.data();

    const submittedAt = data.submittedAt?.toDate
      ? data.submittedAt.toDate().toLocaleString()
      : "";

    return [
      data.volunteer?.name ?? "",
      data.volunteer?.email ?? "",
      data.volunteer?.phone ?? "",
      data.organizationName ?? "",
      data.organizationId ?? "",
      Array.isArray(data.interests)
        ? data.interests.join("; ")
        : "",
      data.availability ?? "",
      data.experience ?? "",
      data.notes ?? "",
      data.status ?? "",
      submittedAt,
    ];
  });

  const csv = [
    headers.map(escapeCsv).join(","),
    ...rows.map((row) =>
      row.map(escapeCsv).join(",")
    ),
  ].join("\n");

  const exportDirectory = path.join(
    projectRoot,
    "private-exports"
  );

  fs.mkdirSync(exportDirectory, {
    recursive: true,
  });

  const date = new Date()
    .toISOString()
    .slice(0, 10);

  const outputPath = path.join(
    exportDirectory,
    `fruitbat-volunteers-${date}.csv`
  );

  fs.writeFileSync(outputPath, csv, "utf8");

  console.log(
    `✅ Exported ${snapshot.size} volunteer submission(s).`
  );

  console.log(`📄 ${outputPath}`);
}

exportVolunteers().catch((error) => {
  console.error("❌ Volunteer export failed:");
  console.error(error);
  process.exitCode = 1;
});