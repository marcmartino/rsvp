import { Type, OutputOf, void as v } from "io-ts";
import * as E from "fp-ts/Either";
import { useState } from "react";
import { authorizeUserDecoder, rsvpBody } from "./decoders";
import { useTranslation } from "react-i18next";

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
  (bodyData: R["input"]) => Promise<void>,
  {
    data?: OutputOf<R["decoder"]> | undefined;
    loading: boolean;
    error?: string | undefined;
  }
] => {
  const { t } = useTranslation();
  const [fetchData, setFetchData] = useState<{
    data?: OutputOf<R["decoder"]>;
    loading: boolean;
    error?: string;
  }>({ data: undefined, loading: false, error: undefined });

  return [
    (bodyData: R["input"]): Promise<void> => {
      setFetchData({ data: undefined, loading: true, error: undefined });
      return fetch(api.url, {
        method: api.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      })
        .then((d) => {
          if (d.status === 200) {
            return d.json();
          }
          return new Error(t("noInviteeFound"));
        })
        .then((r) => api.decoder.decode(r))
        .then(
          E.matchW(
            (e) =>
              setFetchData({
                data: undefined,
                loading: false,
                error: e[0].message || t("noInviteeFound"),
              }),
            (data) => setFetchData({ data, loading: false, error: undefined })
          )
        )
        .catch((e) =>
          setFetchData(() => ({ error: e.toString(), loading: false }))
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
