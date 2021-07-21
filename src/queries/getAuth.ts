import { useEffect, useState } from "react";
import { AUTHORIZE_USER, useApiLazyHook } from "./constants";

const STORAGE_KEY = "RSVP_AUTH";

export const useAuth = () => {
  const apiTuple = useApiLazyHook(AUTHORIZE_USER);

  const [authorizeUser, { data, error, loading }] = apiTuple;
  const [userData, setUserData] = useState<
    undefined | Parameters<typeof authorizeUser>[0]
  >();

  useEffect(() => {
    const prevCreds = window.localStorage.getItem(STORAGE_KEY);
    if (prevCreds) {
      try {
        const parsedCreds = JSON.parse(prevCreds) as Parameters<
          typeof authorizeUser
        >[0];
        parsedCreds.name &&
          authorizeUser(parsedCreds).then(() => setUserData(parsedCreds));
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    if (data && !error && !loading && userData) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    }
  }, [data, error, loading, userData]);

  return {
    signIn: (d: Parameters<typeof authorizeUser>[0]) => {
      /* signin function */
      setUserData({ name: d.name.trim(), zip: d.zip.trim() });

      return authorizeUser({ name: d.name.trim(), zip: d.zip.trim() }).catch(
        () => {
          return "error loging in";
        }
      );
    },
    signOut: () => {
      /* signout function */
      window.localStorage.removeItem(STORAGE_KEY);
      setUserData(undefined);
      window.location.reload();
    },
    results: apiTuple[1],
  };
};
