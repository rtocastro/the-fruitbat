export default function FeedMeFruitEmbed() {
  return (
    <div className="feed-me-fruit-embed">
      <div className="feed-me-fruit-frame">
        <iframe
          src="https://scratch.mit.edu/projects/675089522/embed"
          title="Play Feed Me Fruit, a Fruitbat gardening game"
          allowTransparency="true"
          frameBorder="0"
          scrolling="no"
          allowFullScreen
          loading="lazy"
        />
      </div>

      <p className="feed-me-fruit-note">
        Feed Me Fruit is hosted through Scratch and may take a moment
        to load.
      </p>

      <a
        href="https://scratch.mit.edu/projects/675089522/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-link"
      >
        Open Feed Me Fruit on Scratch →
      </a>
    </div>
  );
}