import { AUTHORIZE_USER } from "./constants";

export const getAuth = async (name: string, zip: string) => {
  console.log(AUTHORIZE_USER.url);
  return fetch(AUTHORIZE_USER.url, {
    method: AUTHORIZE_USER.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, zip }),
  }).then((d) => d.json());
};
