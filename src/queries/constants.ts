const API_URL =
  process.env["NODE_ENV"] !== "production"
    ? "//localhost:3000"
    : "https://wrsvp-api.herokuapp.com/";

type Method = "GET" | "POST" | "PUT" | "DELETE";

type ApiRoute<T> = { method: Method; url: string; body: T };

export const AUTHORIZE_USER: ApiRoute<{ name: string; zip: string }> = {
  method: "POST",
  url: `${API_URL}/authorizeUser`,
  body: {
    name: "",
    zip: "",
  },
};
