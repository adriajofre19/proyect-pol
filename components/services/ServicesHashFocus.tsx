"use client";

import { useEffect } from "react";

function focusHashTarget() {
  if (typeof window === "undefined") return;
  const hash = window.location.hash;
  if (!hash) return;

  const id = hash.slice(1);
  const target = document.getElementById(id);
  if (!target) return;

  // Ensure keyboard/screen-reader users land on the target section.
  target.focus({ preventScroll: true });
}

export function ServicesHashFocus() {
  useEffect(() => {
    focusHashTarget();
    const onHashChange = () => focusHashTarget();
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return null;
}
