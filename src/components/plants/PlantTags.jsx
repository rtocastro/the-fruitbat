export default function PlantTags({ tags = [] }) {
  const uniqueTags = [...new Set(tags.filter(Boolean))];

  if (uniqueTags.length === 0) {
    return null;
  }

  return (
    <section className="profile-tags-section">
      <p className="eyebrow">Related topics</p>

      <div className="profile-tags-list">
        {uniqueTags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </section>
  );
}