import { Type, OutputOf, void as v } from "io-ts";
import * as E from "fp-ts/Either";
import { useState } from "react";
import { authorizeUserDecoder, rsvpBody } from "./decoders";

const API_URL =
  process.env["NODE_ENV"] !== "production"
    ? "//localhost:3000/"
    : "https://wrsvp-api.herokuapp.com/";

export const PING_URL = API_URL;

type Method = "GET" | "POST" | "PUT" | "DELETE";

type ApiRoute<I, O> = {
  method: Method;
  url: string;
  input: I;
  decoder: Type<O>;
};

export const useApiLazyHook = <R extends ApiRoute<any, any>>(
  api: R
): [
  (bodyData: R["input"]) => void,
  {
    data?: OutputOf<R["decoder"]> | undefined;
    loading: boolean;
    error?: string | undefined;
  }
] => {
  const [fetchData, setFetchData] = useState<{
    data?: OutputOf<R["decoder"]>;
    loading: boolean;
    error?: string;
  }>({ data: undefined, loading: false, error: undefined });

  return [
    (bodyData: R["input"]): void => {
      setFetchData({ data: undefined, loading: true, error: undefined });
      fetch(api.url, {
        method: api.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      })
        .then((d) => d.json())
        .then((r) => api.decoder.decode(r))
        .then(
          E.matchW(
            (e) =>
              setFetchData({
                data: undefined,
                loading: false,
                error: e[0].message || "Failed to parse api response",
              }),
            (data) => setFetchData({ data, loading: false, error: undefined })
          )
        );
    },
    fetchData,
  ];
};

export const AUTHORIZE_USER: ApiRoute<
  { name: string; zip: string },
  OutputOf<typeof authorizeUserDecoder>
> = {
  method: "POST",
  url: `${API_URL}authorizeUser`,
  input: { name: "", zip: "" },
  decoder: authorizeUserDecoder,
};

export type AuthData = OutputOf<typeof authorizeUserDecoder>;

export const RSVP_USER: ApiRoute<
  OutputOf<typeof rsvpBody>,
  OutputOf<typeof v>
> = {
  method: "POST",
  url: `${API_URL}rsvp`,
  input: { name: "", zip: "" },
  decoder: v,
};
