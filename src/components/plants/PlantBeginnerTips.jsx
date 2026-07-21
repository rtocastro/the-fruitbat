export default function PlantBeginnerTips({
  beginnerTips = [],
}) {
  if (beginnerTips.length === 0) {
    return null;
  }

  return (
    <section className="profile-beginner-section">
      <div className="profile-beginner-copy">
        <p className="eyebrow">Before you begin</p>

        <h2>A few things worth remembering.</h2>
      </div>

      <div className="profile-beginner-list">
        {beginnerTips.map((tip, index) => (
          <article key={`${tip}-${index}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{tip}</p>
          </article>
        ))}
      </div>
    </section>
  );
}