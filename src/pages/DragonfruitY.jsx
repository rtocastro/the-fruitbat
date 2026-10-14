
import { Link } from "react-router";

const GUIDE_URL = "/guides/dragonfruit-y-field-dex.pdf";

const firstWeek = [
    {
        number: "01",
        title: "Find a gentle spot",
        description:
            "A bright window or mild grow light is ideal. Avoid suddenly moving your seedling into strong afternoon sun.",
    },
    {
        number: "02",
        title: "Keep your dragon warm",
        description:
            "Aim for roughly 65–85°F (18–29°C). Protect your seedling from chilly nights and frost.",
    },
    {
        number: "03",
        title: "Water by feel",
        description:
            "Check the soil before watering. Water when the upper portion begins drying, and let excess water drain away.",
    },
    {
        number: "04",
        title: "Let it settle",
        description:
            "Keep your seedling in its current cup unless there's a problem. Skip fertilizer during its first week.",
    },
];

const seasons = [
    {
        title: "First winter",
        period: "Late November – February",
        description:
            "Keep your seedling warm, bright, and sheltered. Check moisture carefully as growth slows.",
    },
    {
        title: "Spring",
        period: "March – May",
        description:
            "Gradually introduce morning sunlight. Repot into a slightly larger container if the roots fill the cup.",
    },
    {
        title: "Summer",
        period: "June – September",
        description:
            "Increase light gradually, protect young growth from scorching sun, and provide support as stems lengthen.",
    },
    {
        title: "Autumn",
        period: "October – November",
        description:
            "Reduce watering as growth slows and prepare a sheltered location before colder nights arrive.",
    },
];

const conditions = [
    {
        symptom: "Aerial roots",
        explanation:
            "Usually normal. Dragon fruit naturally produce roots along their stems to help them climb.",
    },
    {
        symptom: "Pale or bleached patches",
        explanation:
            "Check for sudden strong sunlight, root stress, or watering problems.",
    },
    {
        symptom: "Long, thin growth",
        explanation:
            "Often indicates insufficient light. Increase brightness gradually.",
    },
    {
        symptom: "Wrinkled stems",
        explanation:
            "Check soil moisture and root health. Both dehydration and damaged roots can cause wrinkling.",
    },
    {
        symptom: "Soft, dark, or mushy stems",
        explanation:
            "Possible rot warning. Inspect drainage and roots promptly.",
    },
];

export default function DragonfruitY() {
    return (
        <main className="dragonfruit-y-page">
            <section className="dfy-hero">
                <div className="dfy-shell">
                    <p className="dfy-eyebrow">
                        THE FRUITBAT FIELD DEX // Y-001
                    </p>

                    <div className="dfy-hero-grid">
                        <div>
                            <h1>
                                DRAGONFRUIT <span>Y</span>
                            </h1>

                            <p className="dfy-tagline">
                                Your little dragon starts here.
                            </p>

                            <p className="dfy-intro">
                                Meet Dragonfruit Y: a community grow-along
                                following numbered yellow dragon fruit
                                seedlings, shared through The Fruitbat.
                                Every seedling has its own story.
                            </p>

                            <div className="dfy-actions">
                                <a
                                    className="button button-primary"
                                    href={GUIDE_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Open the Field Dex ↗
                                </a>

                                <Link
                                    className="button button-secondary"
                                    to="/events/crfg-november-2026"
                                >
                                    November 21 Event
                                </Link>
                            </div>
                        </div>

                        <div className="dfy-specimen" aria-label="Dragonfruit Y specimen information">
                            <span className="dfy-specimen-label">
                                FIELD FILE Y-001
                            </span>
                            <div className="dfy-specimen-letter">Y</div>
                            <strong>SPECIMEN PROFILE</strong>
                            <p>Yellow dragon fruit seedling</p>
                            <small>Origin recorded · Traits unknown</small>
                        </div>
                    </div>
                </div>
            </section>

            <div className="dfy-shell">
                <section className="dfy-section">
                    <p className="dfy-eyebrow">01 // ORIGIN STORY</p>
                    <h2>Every dragon starts somewhere.</h2>
                    <p>
                        Dragonfruit Y began with seeds saved from a
                        store-bought yellow dragon fruit resembling
                        Ecuador Palora. The exact variety is unverified.
                        Dragonfruit Y is our community project name,
                        not a registered cultivar.
                    </p>
                    <p>
                        Seed-grown plants can vary from one another.
                        Their eventual fruit characteristics and
                        self-fertility are not guaranteed, and it may
                        take years before a seedling produces fruit.
                    </p>

                    <div className="dfy-note">
                        <strong>THE EXPERIMENT</strong>
                        <p>
                            Give each seedling a number, follow its
                            development, and discover what happens when
                            different growers raise little dragons in
                            different environments.
                        </p>
                    </div>
                </section>

                <section className="dfy-section">
                    <p className="dfy-eyebrow">02 // STARTER QUEST</p>
                    <h2>Your first seven days.</h2>
                    <p>
                        Starting November 21, give your little dragon
                        time to adjust to its new home.
                    </p>

                    <div className="dfy-grid">
                        {firstWeek.map((step) => (
                            <article className="dfy-card" key={step.number}>
                                <span className="dfy-number">
                                    {step.number}
                                </span>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="dfy-section">
                    <p className="dfy-eyebrow">03 // SEASONAL EVOLUTION</p>
                    <h2>A year with your dragon.</h2>

                    <div className="dfy-grid">
                        {seasons.map((season) => (
                            <article className="dfy-card" key={season.title}>
                                <h3>{season.title}</h3>
                                <strong>{season.period}</strong>
                                <p>{season.description}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="dfy-section">
                    <p className="dfy-eyebrow">04 // CONDITION SCANNER</p>
                    <h2>Read your dragon.</h2>
                    <p>
                        Small changes are normal. Check these clues
                        before making major adjustments.
                    </p>

                    <div className="dfy-condition-list">
                        {conditions.map((item) => (
                            <article
                                className="dfy-condition"
                                key={item.symptom}
                            >
                                <h3>{item.symptom}</h3>
                                <p>{item.explanation}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="dfy-section">
                    <p className="dfy-eyebrow">05 // COMMUNITY LINK</p>
                    <h2>Grow together.</h2>
                    <p>
                        Every Dragonfruit Y seedling is a little
                        different. You can help the community learn
                        by documenting your plant's progress.
                    </p>

                    <div className="dfy-note">
                        <strong>#DragonfruitY</strong>
                        <p>
                            Use this hashtag for community updates.
                            If your cup has a number, add it to the
                            hashtag, like for example, #DragonfruitY014
                            for specimen Y014.
                        </p>
                    </div>

                    <div className="dfy-grid">
                        {[
                            ["First week", "Show its new home."],
                            ["Spring", "Share new growth."],
                            ["Six months", "How tall is it?"],
                            ["Someday", "A flower or fruit!"],
                        ].map(([title, description]) => (
                            <article className="dfy-card" key={title}>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </article>
                        ))}
                    </div>

                    <p className="dfy-privacy">
                        Participation is optional. Only share
                        information you're comfortable making public.
                    </p>
                </section>

                <section className="dfy-download">
                    <p className="dfy-eyebrow">FREE PRINTABLE RESOURCE</p>
                    <h2>Take the Field Dex with you.</h2>
                    <p>
                        Download the five-page Dragonfruit Y Field Dex
                        for first-week care, seasonal guidance,
                        troubleshooting, and your community journal.
                    </p>

                    <a
                        href={GUIDE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button button-primary"
                    >
                        Open Dragonfruit Y Field Dex ↗
                    </a>
                </section>

                <nav className="dfy-bottom-nav">
                    <Link to="/projects">← All Projects</Link>
                    <Link to="/events/crfg-november-2026">
                        CRFG Event →
                    </Link>
                </nav>
            </div>
        </main>
    );
}
