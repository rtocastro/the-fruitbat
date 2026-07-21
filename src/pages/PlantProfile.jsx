import { Link, useParams } from "react-router";
import PlantBeginnerTips from "../components/plants/PlantBeginnerTips";
import PlantCareSections from "../components/plants/PlantCareSections";
import PlantGuideSection from "../components/plants/PlantGuideSection";
import PlantProfileCTA from "../components/plants/PlantProfileCTA";
import PlantProfileHero from "../components/plants/PlantProfileHero";
import PlantQuickCare from "../components/plants/PlantQuickCare";
import PlantTags from "../components/plants/PlantTags";
import { getPlantBySlug } from "../data/plants";

export default function PlantProfile() {
  const { slug } = useParams();
  const plant = getPlantBySlug(slug);

  if (!plant) {
    return (
      <main className="plant-profile-not-found">
        <section>
          <p className="eyebrow">Plant not found</p>

          <h1>This plant has not taken root in the library yet.</h1>

          <p>
            The address may be incorrect, or the plant profile may
            still be growing.
          </p>

          <Link to="/plants" className="button button-primary">
            Return to Plant Library
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main>
      <PlantProfileHero plant={plant} />

      <PlantQuickCare quickCare={plant.quickCare} />

      <PlantCareSections careSections={plant.careSections} />

      <PlantBeginnerTips beginnerTips={plant.beginnerTips} />

      <PlantGuideSection plant={plant} />

      <PlantTags tags={plant.tags} />

      <PlantProfileCTA plant={plant} />
    </main>
  );
}