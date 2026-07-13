import { useEffect } from "react";
import { useLocation } from "react-router";
import { defaultMeta, siteMeta } from "../data/siteMeta";

function updateMetaTag(selector, attribute, value) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
}

export default function MetaManager() {
  const { pathname } = useLocation();
  const pageMeta = siteMeta[pathname] ?? defaultMeta;

  useEffect(() => {
    document.title = pageMeta.title;

    updateMetaTag(
      'meta[name="description"]',
      "content",
      pageMeta.description
    );

    updateMetaTag(
      'meta[property="og:title"]',
      "content",
      pageMeta.title
    );

    updateMetaTag(
      'meta[property="og:description"]',
      "content",
      pageMeta.description
    );

    updateMetaTag(
      'meta[name="twitter:title"]',
      "content",
      pageMeta.title
    );

    updateMetaTag(
      'meta[name="twitter:description"]',
      "content",
      pageMeta.description
    );
  }, [pageMeta]);

  return null;
}