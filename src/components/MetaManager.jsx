import { useEffect } from "react";
import { useLocation } from "react-router";

import { defaultMeta, siteMeta } from "../data/siteMeta";
import { getPlantBySlug } from "../data/plants";

const SITE_URL = "https://thefruitbat.org";
const DEFAULT_SOCIAL_IMAGE =
  `${SITE_URL}/fruitbat-social-preview.jpg`;

function updateMeta(selector, attributeName, value) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");

    if (selector.includes("property")) {
      const propertyMatch = selector.match(
        /property=["']([^"']+)["']/
      );

      if (propertyMatch) {
        element.setAttribute("property", propertyMatch[1]);
      }
    } else {
      const nameMatch = selector.match(
        /name=["']([^"']+)["']/
      );

      if (nameMatch) {
        element.setAttribute("name", nameMatch[1]);
      }
    }

    document.head.appendChild(element);
  }

  element.setAttribute(attributeName, value);
}

function updateCanonical(url) {
  let canonical = document.head.querySelector(
    'link[rel="canonical"]'
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

export default function MetaManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    let meta = siteMeta[pathname] ?? defaultMeta;

    if (pathname.startsWith("/plants/")) {
      const slug = pathname.split("/")[2];
      const plant = getPlantBySlug(slug);

      if (plant) {
        meta = {
          ...defaultMeta,
          title: `${plant.commonName} | The Fruitbat`,
          description: plant.summary,
        };
      }
    }

    const canonicalUrl =
      pathname === "/"
        ? SITE_URL
        : `${SITE_URL}${pathname.replace(/\/+$/, "")}`;

    const socialImage =
      meta.image ?? DEFAULT_SOCIAL_IMAGE;

    document.title = meta.title;

    updateMeta(
      'meta[name="description"]',
      "content",
      meta.description
    );

    updateMeta(
      'meta[property="og:type"]',
      "content",
      "website"
    );

    updateMeta(
      'meta[property="og:site_name"]',
      "content",
      "The Fruitbat"
    );

    updateMeta(
      'meta[property="og:title"]',
      "content",
      meta.title
    );

    updateMeta(
      'meta[property="og:description"]',
      "content",
      meta.description
    );

    updateMeta(
      'meta[property="og:url"]',
      "content",
      canonicalUrl
    );

    updateMeta(
      'meta[property="og:image"]',
      "content",
      socialImage
    );

    updateMeta(
      'meta[name="twitter:card"]',
      "content",
      "summary_large_image"
    );

    updateMeta(
      'meta[name="twitter:title"]',
      "content",
      meta.title
    );

    updateMeta(
      'meta[name="twitter:description"]',
      "content",
      meta.description
    );

    updateMeta(
      'meta[name="twitter:image"]',
      "content",
      socialImage
    );

    updateCanonical(canonicalUrl);
  }, [pathname]);

  return null;
}