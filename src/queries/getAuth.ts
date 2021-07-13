import { useEffect } from "react";
import { AUTHORIZE_USER, useApiLazyHook } from "./constants";

const STORAGE_KEY = "RSVP_AUTH";

export const useAuth = () => {
  const apiTuple = useApiLazyHook(AUTHORIZE_USER);

  const [authorizeUser, { data, error }] = apiTuple;

  useEffect(() => {
    const prevCreds = window.localStorage.getItem(STORAGE_KEY);
    prevCreds && authorizeUser(JSON.stringify(prevCreds) as any);
  }, []);

  return {
    signIn: (d: Parameters<typeof authorizeUser>[0]) => {
      /* signin function */
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(d));
      authorizeUser(d);
    },
    signOut: () => {
      /* signout function */
      window.localStorage.removeItem(STORAGE_KEY);
      window.location.reload();
    },
    results: apiTuple[1],
  };
};
