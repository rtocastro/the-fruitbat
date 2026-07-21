const careLabels = {
  sunlight: "Sunlight",
  watering: "Watering",
  soil: "Soil",
  temperature: "Temperature",
  container: "Container",
  difficulty: "Difficulty",
};

export default function PlantQuickCare({ quickCare = {} }) {
  const quickCareEntries = Object.entries(quickCare).filter(
    ([, value]) => Boolean(value)
  );

  if (quickCareEntries.length === 0) {
    return null;
  }

  return (
    <section className="quick-care-section" id="quick-care">
      <div className="quick-care-heading">
        <p className="eyebrow">Quick care</p>

        <h2>The information you are most likely checking outside.</h2>

        <p>
          Use this as a quick reference rather than a rigid schedule.
          Conditions around the plant still matter.
        </p>
      </div>

      <div className="quick-care-grid">
        {quickCareEntries.map(([key, value]) => (
          <article className="quick-care-card" key={key}>
            <span className="quick-care-label">
              {careLabels[key] ?? key}
            </span>

            <p>{value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}