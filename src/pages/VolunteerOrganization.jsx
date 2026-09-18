import { useState } from "react";
import {
    addDoc,
    collection,
    serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebase";
import { Link, useParams } from "react-router";

import {
    getVolunteerOrganizationBySlug,
} from "../data/volunteerOrganizations";

const initialFormState = {
    name: "",
    email: "",
    phone: "",
    interests: [],
    availability: "",
    experience: "",
    notes: "",
    consentToShare: false,
};

export default function VolunteerOrganization() {
    const { slug } = useParams();

    const organization =
        getVolunteerOrganizationBySlug(slug);

    const [formData, setFormData] = useState(initialFormState);
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");

    if (!organization) {
        return (
            <main>
                <section className="volunteer-form-not-found">
                    <p className="eyebrow">Volunteer</p>

                    <h1>
                        We couldn't find that
                        <span> organization.</span>
                    </h1>

                    <p>
                        The volunteer opportunity may have moved, changed,
                        or may no longer be accepting responses.
                    </p>

                    <Link
                        to="/volunteer"
                        className="button button-primary"
                    >
                        Browse Volunteer Opportunities
                    </Link>
                </section>
            </main>
        );
    }

    function handleChange(event) {
        const { name, value, type, checked } = event.target;

        if (type === "checkbox" && name === "consentToShare") {
            setFormData((current) => ({
                ...current,
                consentToShare: checked,
            }));

            return;
        }

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    }

    function handleInterestChange(interest) {
        setFormData((current) => {
            const alreadySelected =
                current.interests.includes(interest);

            return {
                ...current,
                interests: alreadySelected
                    ? current.interests.filter(
                        (item) => item !== interest
                    )
                    : [...current.interests, interest],
            };
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (isSubmitting) {
            return;
        }

        if (!formData.consentToShare) {
            setSubmitError(
                "Please confirm that your information may be shared with the organization."
            );
            return;
        }

        try {
            setIsSubmitting(true);
            setSubmitError("");

            await addDoc(
                collection(db, "volunteerSubmissions"),
                {
                    organizationId: organization.id,
                    organizationName: organization.name,

                    volunteer: {
                        name: formData.name.trim(),
                        email: formData.email.trim(),
                        phone: formData.phone.trim(),
                    },

                    interests: formData.interests,
                    availability: formData.availability.trim(),
                    experience: formData.experience,
                    notes: formData.notes.trim(),

                    consentToShare: true,

                    status: "new",

                    submittedAt: serverTimestamp(),
                }
            );

            setSubmitted(true);

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } catch (error) {
            console.error(
                "Volunteer submission failed:",
                error
            );

            setSubmitError(
                "We couldn't send your volunteer interest right now. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    if (submitted) {
        return (
            <main>
                <section className="volunteer-success">
                    <div className="volunteer-success-symbol">
                        ♡
                    </div>

                    <p className="eyebrow">
                        Volunteer interest sent
                    </p>

                    <h1>
                        Thanks for offering
                        <span> a hand.</span>
                    </h1>

                    <p>
                        Your volunteer interest for{" "}
                        <strong>{organization.name}</strong> has been
                        received.
                    </p>

                    <p className="volunteer-success-note">
                        Once the volunteer system is connected, the
                        organization will be able to review your information
                        and follow up about opportunities to help.
                    </p>

                    <div className="volunteer-success-actions">
                        <Link
                            to="/volunteer"
                            className="button button-primary"
                        >
                            Volunteer Home
                        </Link>

                        <Link
                            to="/events"
                            className="button button-secondary"
                        >
                            Explore Events
                        </Link>
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main>
            {/* =====================================================
          ORGANIZATION HERO
          ===================================================== */}

            <section className="volunteer-form-hero">
                <div className="volunteer-form-hero-copy">
                    <Link
                        to="/volunteer"
                        className="volunteer-back-link"
                    >
                        ← Volunteer opportunities
                    </Link>

                    <p className="eyebrow">
                        {organization.type}
                    </p>

                    <h1>
                        Volunteer with
                        <span> {organization.name}.</span>
                    </h1>

                    <p className="volunteer-form-hero-description">
                        {organization.volunteerIntro}
                    </p>

                    <div className="volunteer-form-location">
                        <span>●</span>

                        {organization.city}, {organization.state}
                    </div>
                </div>

                <div
                    className="volunteer-form-hero-art"
                    aria-hidden="true"
                >
                    <div className="volunteer-form-art-main">
                        <span>♡</span>

                        <strong>
                            EXTRA
                            <br />
                            HANDS
                        </strong>
                    </div>

                    <div className="volunteer-form-art-small volunteer-form-art-small-one">
                        HELP
                    </div>

                    <div className="volunteer-form-art-small volunteer-form-art-small-two">
                        GROW
                    </div>
                </div>
            </section>

            {/* =====================================================
          EXPECTATIONS
          ===================================================== */}

            <section className="volunteer-form-intro">
                <div>
                    <p className="eyebrow">
                        Before you sign up
                    </p>

                    <h2>
                        Tell us what works for you.
                    </h2>
                </div>

                <div className="volunteer-form-intro-copy">
                    <p>
                        This isn't a job application. The goal is simply to
                        understand how you'd like to participate and give the
                        organization enough information to follow up.
                    </p>

                    <p>
                        Opportunities can change depending on current
                        projects, events, weather, and what needs attention.
                    </p>
                </div>
            </section>

            {/* =====================================================
          FORM
          ===================================================== */}

            <section className="volunteer-form-section">
                <div className="volunteer-form-heading">
                    <p className="eyebrow">
                        Volunteer interest form
                    </p>

                    <h2>
                        I'd like to help.
                    </h2>

                    <p>
                        You're contacting{" "}
                        <strong>{organization.name}</strong>.
                    </p>
                </div>

                <form
                    className="volunteer-interest-form"
                    onSubmit={handleSubmit}
                >
                    {/* CONTACT */}

                    <fieldset>
                        <legend>
                            <span>01</span>
                            About you
                        </legend>

                        <div className="volunteer-field">
                            <label htmlFor="volunteer-name">
                                Name
                            </label>

                            <input
                                id="volunteer-name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                autoComplete="name"
                                required
                            />
                        </div>

                        <div className="volunteer-field-row">
                            <div className="volunteer-field">
                                <label htmlFor="volunteer-email">
                                    Email
                                </label>

                                <input
                                    id="volunteer-email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    required
                                />
                            </div>

                            <div className="volunteer-field">
                                <label htmlFor="volunteer-phone">
                                    Phone / text
                                    <span> Optional</span>
                                </label>

                                <input
                                    id="volunteer-phone"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    autoComplete="tel"
                                />
                            </div>
                        </div>
                    </fieldset>

                    {/* INTERESTS */}

                    <fieldset>
                        <legend>
                            <span>02</span>
                            How would you like to help?
                        </legend>

                        <p className="volunteer-field-help">
                            Pick as many as you'd like.
                        </p>

                        <div className="volunteer-interest-options">
                            {organization.interestOptions.map(
                                (interest) => {
                                    const checked =
                                        formData.interests.includes(interest);

                                    return (
                                        <label
                                            className={`volunteer-interest-option ${checked
                                                ? "volunteer-interest-option-selected"
                                                : ""
                                                }`}
                                            key={interest}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={checked}
                                                onChange={() =>
                                                    handleInterestChange(interest)
                                                }
                                            />

                                            <span className="volunteer-checkbox">
                                                {checked ? "✓" : ""}
                                            </span>

                                            <strong>{interest}</strong>
                                        </label>
                                    );
                                }
                            )}
                        </div>
                    </fieldset>

                    {/* AVAILABILITY */}

                    <fieldset>
                        <legend>
                            <span>03</span>
                            Availability
                        </legend>

                        <div className="volunteer-field">
                            <label htmlFor="volunteer-availability">
                                When are you generally available?
                            </label>

                            <textarea
                                id="volunteer-availability"
                                name="availability"
                                value={formData.availability}
                                onChange={handleChange}
                                rows="4"
                                placeholder="For example: Saturday mornings, some weekday afternoons, once or twice a month..."
                                required
                            />
                        </div>

                        <div className="volunteer-field">
                            <label htmlFor="volunteer-experience">
                                Gardening experience
                            </label>

                            <select
                                id="volunteer-experience"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                required
                            >
                                <option value="">
                                    Choose one
                                </option>

                                <option value="new">
                                    I'm completely new
                                </option>

                                <option value="beginner">
                                    I know a little
                                </option>

                                <option value="comfortable">
                                    I'm comfortable in a garden
                                </option>

                                <option value="experienced">
                                    I have lots of experience
                                </option>

                                <option value="other-skills">
                                    My useful skills are mostly outside gardening
                                </option>
                            </select>
                        </div>
                    </fieldset>

                    {/* NOTES */}

                    <fieldset>
                        <legend>
                            <span>04</span>
                            Anything else?
                        </legend>

                        <div className="volunteer-field">
                            <label htmlFor="volunteer-notes">
                                Notes
                                <span> Optional</span>
                            </label>

                            <textarea
                                id="volunteer-notes"
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                rows="5"
                                placeholder="Skills, accessibility needs, questions, things you'd especially like to learn, or anything else you'd like the organization to know."
                            />
                        </div>
                    </fieldset>

                    {/* CONSENT */}

                    <div className="volunteer-consent">
                        <label>
                            <input
                                type="checkbox"
                                name="consentToShare"
                                checked={formData.consentToShare}
                                onChange={handleChange}
                                required
                            />

                            <span className="volunteer-checkbox">
                                {formData.consentToShare ? "✓" : ""}
                            </span>

                            <span>
                                I understand that the information I submit may
                                be shared with{" "}
                                <strong>{organization.name}</strong> so they
                                can contact me about volunteering.
                            </span>
                        </label>
                    </div>

                    <div className="volunteer-submit-area">
                        <button
                            type="submit"
                            className="button button-primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting
                                ? "Sending..."
                                : "Send Volunteer Interest"}
                        </button>

                        {submitError && (
                            <p
                                className="volunteer-submit-error"
                                role="alert"
                            >
                                {submitError}
                            </p>
                        )}

                        <p>
                            The Fruitbat does not publish your volunteer
                            contact information.
                        </p>
                    </div>
                </form>
            </section>

            {/* =====================================================
          FOOTNOTE
          ===================================================== */}

            <section className="volunteer-form-footer-note">
                <span>♡</span>

                <div>
                    <p className="eyebrow">
                        Not sure where you fit?
                    </p>

                    <h2>
                        That's completely okay.
                    </h2>

                    <p>
                        Choose "Wherever I'm needed" or tell us a little
                        about yourself. Community projects need more than
                        experienced gardeners.
                    </p>
                </div>
            </section>
        </main>
    );
}