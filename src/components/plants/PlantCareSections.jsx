export default function PlantCareSections({
  careSections = [],
}) {
  if (careSections.length === 0) {
    return null;
  }

  return (
    <section className="profile-care-section">
      <div className="profile-care-intro">
        <p className="eyebrow">Complete care</p>

        <h2>Learn the plant one part at a time.</h2>

        <p>
          This guide will continue expanding as printable materials,
          videos, photos, and updated local experience are added.
        </p>
      </div>

      <div className="profile-care-list">
        {careSections.map((section, index) => (
          <article
            className="profile-care-item"
            key={section.id ?? `${section.title}-${index}`}
          >
            <div className="profile-care-item-top">
              <span className="profile-care-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="profile-care-symbol">
                {section.symbol ?? "○"}
              </span>
            </div>

            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
}