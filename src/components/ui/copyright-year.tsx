
"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getYear() {
  return new Date().getFullYear();
}

function getServerYear() {
  return 2026;
}

export default function CopyrightYear() {
  const year = useSyncExternalStore(
    subscribe,
    getYear,
    getServerYear
  );

  return (
    <>
      From Ideas to Applications. © {year} MeiNova.
    </>
  );
}
