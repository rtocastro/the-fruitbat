import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.replace("#", ""));

      const scrollToElement = () => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          return true;
        }

        return false;
      };

      /*
        React Router changes the route before the new page has
        necessarily finished rendering. Try immediately, then
        briefly retry after the page mounts.
      */
      if (!scrollToElement()) {
        const firstRetry = window.setTimeout(scrollToElement, 100);
        const secondRetry = window.setTimeout(scrollToElement, 350);

        return () => {
          window.clearTimeout(firstRetry);
          window.clearTimeout(secondRetry);
        };
      }

      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname, hash]);

  return null;
}