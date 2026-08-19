"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * Returns false on the server and during the client's first hydration pass
 * (so it always matches the server-rendered HTML), then true immediately
 * after. Gate any UI that depends on localStorage-persisted state (auth,
 * progress) behind this so the client's first paint matches the server's
 * and React never has to reconcile a hydration mismatch.
 *
 * Uses useSyncExternalStore (rather than a useEffect + setState) — the
 * React-recommended pattern for this exact "is this the client, post-
 * hydration?" check.
 */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
