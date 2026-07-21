export default function PlantGuideSection({ plant }) {
  const guideDescription =
    plant.guideDescription ??
    `The printable guide for ${plant.commonName} includes practical
    starting and care information that can be used in the garden,
    greenhouse, or alongside your seed collection.`;

  return (
    <section className="profile-download-section">
      <div className="profile-download-copy">
        <p className="eyebrow">Printable guide</p>

        <h2>Take the growing guide with you.</h2>

        <p>{guideDescription}</p>

        <p>
          The original guide will remain available while expanded,
          more accessible Fruitbat resources continue to be developed.
        </p>
      </div>

      {plant.pdfPath ? (
        <div className="profile-download-actions">
          <a
            href={plant.pdfPath}
            target="_blank"
            rel="noreferrer"
            className="button button-secondary"
          >
            Open Printable Guide
          </a>

          <a
            href={plant.pdfPath}
            download
            className="profile-download-direct"
          >
            Download PDF →
          </a>
        </div>
      ) : (
        <span className="profile-download-status">
          Printable guide in development
        </span>
      )}
    </section>
  );
}