import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router";
import { plants } from "../data/plants";

const categoryDescriptions = {
    Dragonfruit:
        "Fruiting cactus varieties, trellising guidance, pollination, pruning, and seasonal care.",
    "Fruit Trees":
        "Long-term edible trees for yards, patios, shared spaces, and neighborhood projects.",
    Citrus:
        "Lemons, limes, mandarins, oranges, and other productive warm-climate plants.",
    Herbs:
        "Useful, approachable plants for containers, balconies, gardens, and windowsills.",
    Vegetables:
        "Annual edible plants that can provide relatively fast and practical growing experience.",
    Flowers:
        "Pollinator-friendly plants, edible flowers, and colorful additions to growing spaces.",
};

function getSeasonalStatusLabel(status) {
    const labels = {
        great: "Great time to plant",
        good: "Can grow now",
        established: "Established plants",
        varies: "Growing season varies",
    };

    return labels[status] ?? "Can grow now";
}

const growingZones = [
    "1a", "1b",
    "2a", "2b",
    "3a", "3b",
    "4a", "4b",
    "5a", "5b",
    "6a", "6b",
    "7a", "7b",
    "8a", "8b",
    "9a", "9b",
    "10a", "10b",
    "11a", "11b",
    "12a", "12b",
    "13a", "13b",
];

export default function Plants() {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortOption, setSortOption] = useState("alphabetical");
    const [selectedZone, setSelectedZone] = useState(() => {
        return localStorage.getItem("fruitbat-growing-zone") || "10a";
    });
    const [whenFilter, setWhenFilter] = useState("all");

    const currentMonth = new Date().getMonth() + 1;

    const availableCategories = useMemo(() => {
        const categories = [...new Set(plants.map((plant) => plant.category))];

        return ["All", ...categories.sort((a, b) => a.localeCompare(b))];
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "fruitbat-growing-zone",
            selectedZone
        );
    }, [selectedZone]);

    const visiblePlants = useMemo(() => {
        const normalizedSearch = searchTerm.trim().toLowerCase();

        const filteredPlants = plants.filter((plant) => {
            const matchesCategory =
                selectedCategory === "All" ||
                plant.category === selectedCategory;

            const zoneData =
                plant.seasonalGrowing?.[selectedZone];

            const hasZoneTimingData =
                Boolean(zoneData?.months);

            const matchesGrowNow =
                whenFilter !== "now" ||
                !hasZoneTimingData ||
                zoneData.months.includes(currentMonth);

            const searchableContent = [
                plant.commonName,
                plant.shortName,
                plant.scientificName,
                plant.category,
                plant.summary,
                ...(plant.tags ?? []),
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();

            const matchesSearch =
                !normalizedSearch ||
                searchableContent.includes(normalizedSearch);

            return matchesCategory && matchesSearch && matchesGrowNow;
        });

        return [...filteredPlants].sort((plantA, plantB) => {
            if (sortOption === "recent") {
                return plants.indexOf(plantB) - plants.indexOf(plantA);
            }

            if (sortOption === "beginner") {
                const difficultyOrder = {
                    Beginner: 1,
                    "Beginner friendly": 1,
                    Easy: 1,
                    Moderate: 2,
                    Intermediate: 2,
                    Advanced: 3,
                };

                const difficultyDifference =
                    (difficultyOrder[plantA.difficulty] ?? 99) -
                    (difficultyOrder[plantB.difficulty] ?? 99);

                if (difficultyDifference !== 0) {
                    return difficultyDifference;
                }
            }

            return plantA.commonName.localeCompare(plantB.commonName);
        });
    }, [
        searchTerm,
        selectedCategory,
        sortOption,
        selectedZone,
        whenFilter,
        currentMonth,
    ]);

    const clearPlantFilters = () => {
        setSearchTerm("");
        setSelectedCategory("All");
        setSelectedZone("10a");
        setWhenFilter("all");
        setSortOption("alphabetical");
    };

    return (
        <main>
            <section className="plants-hero">
                <div className="plants-hero-copy">
                    <p className="eyebrow">Plant library</p>

                    <h1>
                        Meet the plants.
                        <span> Learn how they grow.</span>
                    </h1>

                    <p className="plants-hero-description">
                        Explore approachable plant profiles with quick-care
                        information, practical growing guidance, printable resources,
                        and future community knowledge.
                    </p>

                    <a href="#plant-library" className="button button-primary">
                        Browse Plant Profiles
                    </a>
                </div>

                <div className="plants-hero-art" aria-hidden="true">
                    <div className="plant-library-pot">
                        <span className="plant-library-stem stem-left" />
                        <span className="plant-library-stem stem-center" />
                        <span className="plant-library-stem stem-right" />

                        <span className="plant-library-leaf plant-leaf-one">♡</span>
                        <span className="plant-library-leaf plant-leaf-two">○</span>
                        <span className="plant-library-leaf plant-leaf-three">♡</span>
                    </div>

                    <span className="plant-library-dot plant-dot-one">●</span>
                    <span className="plant-library-dot plant-dot-two">●</span>
                </div>
            </section>

            <section className="plants-intro">
                <p className="section-kicker">A library designed to grow</p>

                <h2>
                    Plant information should be easy to find while your hands are
                    already in the soil.
                </h2>

                <p>
                    Each profile is designed for phones first, making it useful for
                    QR-code plant labels, quick garden checks, and people learning
                    as they grow.
                </p>
            </section>

            <section className="plant-library-section" id="plant-library">
                <div className="plant-library-heading">
                    <div className="plant-library-controls">
                        <div className="plant-search-field">
                            <label htmlFor="plant-search">Search the library</label>

                            <div className="plant-search-input-wrap">
                                <span aria-hidden="true">⌕</span>

                                <input
                                    id="plant-search"
                                    type="search"
                                    placeholder="Search tomatoes, peppers, dragonfruit..."
                                    value={searchTerm}
                                    onChange={(event) => setSearchTerm(event.target.value)}
                                />
                            </div>
                        </div>

                        <div className="plant-zone-field">
                            <label htmlFor="plant-zone">
                                Growing zone
                            </label>

                            <select
                                id="plant-zone"
                                value={selectedZone}
                                onChange={(event) =>
                                    setSelectedZone(event.target.value)
                                }
                            >
                                {growingZones.map((zone) => (
                                    <option key={zone} value={zone}>
                                        Zone {zone}
                                        {zone === "10a" ? " — Fruitbat default" : ""}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="plant-when-field">
                            <label htmlFor="plant-when">
                                When
                            </label>

                            <select
                                id="plant-when"
                                value={whenFilter}
                                onChange={(event) =>
                                    setWhenFilter(event.target.value)
                                }
                            >
                                <option value="all">
                                    Any time
                                </option>

                                <option value="now">
                                    Grow now
                                </option>
                            </select>
                        </div>

                        <div className="plant-sort-field">
                            <label htmlFor="plant-sort">Sort profiles</label>

                            <select
                                id="plant-sort"
                                value={sortOption}
                                onChange={(event) => setSortOption(event.target.value)}
                            >
                                <option value="alphabetical">Alphabetical A–Z</option>
                                <option value="recent">Recently added</option>
                                <option value="beginner">Beginner friendly</option>
                            </select>
                        </div>
                    </div>


                    {whenFilter === "now" && (
                        <p className="plant-season-disclaimer">
                            <strong>About Grow Now:</strong>{" "}
                            This is an approximate planting guide based on your selected USDA
                            hardiness zone and the current month. Local frost dates, heat,
                            elevation, and microclimates can shift planting times.
                        </p>
                    )}



                    <div
                        className="plant-category-filters"
                        aria-label="Filter plants by category"
                    >
                        {availableCategories.map((category) => (
                            <button
                                type="button"
                                className={`plant-category-filter ${selectedCategory === category ? "is-active" : ""
                                    }`}
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                aria-pressed={selectedCategory === category}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="plant-results-summary" aria-live="polite">
                        <div>
                            {whenFilter === "now" && (
                                <p className="plant-season-summary">
                                    Growing now in Zone {selectedZone} ·{" "}
                                    {new Date().toLocaleString("en-US", {
                                        month: "long",
                                    })}
                                </p>
                            )}

                            <p>
                                Showing <strong>{visiblePlants.length}</strong>{" "}
                                {visiblePlants.length === 1
                                    ? "plant profile"
                                    : "plant profiles"}
                            </p>
                        </div>

                        {(searchTerm ||
                            selectedCategory !== "All" ||
                            selectedZone !== "10a" ||
                            whenFilter !== "all" ||
                            sortOption !== "alphabetical") && (
                                <button
                                    type="button"
                                    onClick={clearPlantFilters}
                                >
                                    Clear filters
                                </button>
                            )}
                    </div>

                    <p className="eyebrow">Available profiles</p>

                    <h2>Start with what is growing now.</h2>

                    <p>
                        Browse the plants currently growing in The Fruitbat library.
                        Search by name, category, or growing keyword, and check back as
                        new profiles and guides are added.
                    </p>
                </div>



                <div className="plant-profile-grid">
                    {visiblePlants.map((plant) => (
                        <article
                            className={`plant-profile-card plant-accent-${plant.accent}`}
                            key={plant.id}
                        >
                            <div className="plant-profile-card-top">
                                <div className="plant-profile-identity">
                                    <span className="plant-profile-symbol">
                                        {plant.symbol}
                                    </span>

                                    <div>
                                        <p className="plant-profile-category">
                                            {plant.category}
                                        </p>

                                        {whenFilter === "now" && (
                                            plant.seasonalGrowing?.[selectedZone]?.months?.includes(
                                                currentMonth
                                            ) ? (
                                                <span
                                                    className={`plant-season-status plant-season-status-${plant.seasonalGrowing[selectedZone].status ?? "good"
                                                        }`}
                                                >
                                                    {getSeasonalStatusLabel(
                                                        plant.seasonalGrowing[selectedZone].status
                                                    )}
                                                    {" · "}
                                                    Zone {selectedZone}
                                                </span>
                                            ) : !plant.seasonalGrowing?.[selectedZone] ? (
                                                <span className="plant-season-status plant-season-status-unknown">
                                                    Timing data coming soon · Zone {selectedZone}
                                                </span>
                                            ) : null
                                        )}

                                        <p className="plant-profile-scientific">
                                            {plant.scientificName}
                                        </p>
                                    </div>
                                </div>

                                <span className="plant-profile-journal-number">
                                    No. {String(visiblePlants.indexOf(plant) + 1).padStart(2, "0")}
                                </span>
                            </div>

                            <div className="plant-profile-card-content">
                                <h3>{plant.commonName}</h3>

                                <p>{plant.summary}</p>
                            </div>

                            <div className="plant-profile-notes">
                                <div>
                                    <span>Difficulty</span>
                                    <p>{plant.difficulty}</p>
                                </div>

                                <div>
                                    <span>Category</span>
                                    <p>{plant.category}</p>
                                </div>

                                <div>
                                    <span>Guide</span>
                                    <p>{plant.pdfPath ? "PDF available" : plant.status}</p>
                                </div>
                            </div>

                            <div className="plant-profile-tags-preview">
                                {plant.tags.slice(0, 3).map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>

                            <Link
                                to={`/plants/${plant.slug}`}
                                className="plant-profile-link"
                            >
                                Open field guide →
                            </Link>
                        </article>
                    ))}

                    {visiblePlants.length === 0 && (
                        <div className="plant-empty-results">
                            <span aria-hidden="true">○</span>

                            <h3>No plant profiles found.</h3>

                            <p>
                                Try a different plant name, category, or growing keyword.
                            </p>

                            <button
                                type="button"
                                className="button button-secondary"
                                onClick={clearPlantFilters}
                            >
                                Clear Search and Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <section className="plant-category-section">
                <div className="plant-category-heading">
                    <p className="eyebrow">Explore by plant type</p>
                    <h2>The library can keep growing without changing how you use it.</h2>
                </div>

                <div className="plant-category-grid">
                    {Object.keys(categoryDescriptions).map((category, index) => {
                        const hasProfiles = plants.some(
                            (plant) => plant.category === category
                        );

                        return (
                            <button
                                type="button"
                                className={`plant-category-card ${hasProfiles ? "is-clickable" : "is-disabled"
                                    }`}
                                key={category}
                                disabled={!hasProfiles}
                                onClick={() => {
                                    if (!hasProfiles) return;

                                    setSelectedCategory(category);

                                    window.setTimeout(() => {
                                        document
                                            .getElementById("plant-library")
                                            ?.scrollIntoView({
                                                behavior: "smooth",
                                                block: "start",
                                            });
                                    }, 0);
                                }}
                            >
                                <span className="plant-category-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3>{category}</h3>

                                <p>
                                    {categoryDescriptions[category] ??
                                        "More plant profiles and growing information will be added here."}
                                </p>

                                <span className="plant-category-status">
                                    {hasProfiles
                                        ? "Explore profiles →"
                                        : "Library growing"}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </section>

            <section className="plant-qr-explanation">
                <div className="plant-qr-explanation-copy">
                    <p className="eyebrow">Built for QR labels</p>

                    <h2>
                        A physical plant label can lead to information that keeps
                        improving.
                    </h2>

                    <p>
                        Every QR code attached to a plant points to a permanent web page.
                        As guides improve over time, every existing QR code automatically
                        shows the newest information without needing to replace stickers.
                    </p>
                </div>

                <div className="plant-url-example">
                    <span className="plant-url-heart">♡</span>

                    <p className="plant-url-label">Permanent plant address</p>

                    <code>thefruitbat.org/plants/your-plant-name</code>

                    <p>
                        Each plant gets its own permanent address for quick care,
                        complete guidance, downloads, future updates, and QR labels.
                    </p>
                </div>
            </section>

            <section className="plants-contribution-section">
                <div>
                    <p className="eyebrow">Knowledge that improves over time</p>

                    <h2>
                        A useful plant guide is never truly finished.
                    </h2>

                    <p>
                        Guides can be refined through observation, seasonal experience,
                        trusted references, and feedback from local growers.
                    </p>
                </div>

                <Link to="/contact" className="button button-secondary">
                    Suggest a Plant
                </Link>
            </section>

            <section className="plants-cta">
                <p className="eyebrow">Not sure what to grow?</p>

                <h2>Start with your space, sunlight, and experience level.</h2>

                <div className="plants-cta-actions">
                    <Link to="/start-growing" className="button button-light">
                        Find Your Starting Point
                    </Link>

                    <Link to="/resources" className="plants-cta-link">
                        Browse resources →
                    </Link>
                </div>
            </section>
        </main>
    );
}