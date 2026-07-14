import { useEffect } from "react";
import { useLocation } from "react-router";

import { defaultMeta, siteMeta } from "../data/siteMeta";
import { getPlantBySlug } from "../data/plants";

function updateMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  if (selector.includes("property")) {
    element.setAttribute("property", selector.match(/"(.*)"/)[1]);
  } else {
    element.setAttribute("name", selector.match(/"(.*)"/)[1]);
  }

  element.setAttribute(attribute, value);
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
          title: `${plant.commonName} | The Fruitbat`,
          description: plant.summary,
        };
      }
    }

    document.title = meta.title;

    updateMeta(
      'meta[name="description"]',
      "content",
      meta.description
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
      'meta[name="twitter:title"]',
      "content",
      meta.title
    );

    updateMeta(
      'meta[name="twitter:description"]',
      "content",
      meta.description
    );
  }, [pathname]);

  return null;
}