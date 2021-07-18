import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { AuthData } from "../../queries/constants";
import { mapsLink } from "../../utils/mapLink";

interface Props {
  auth: AuthData;
}

export const WeddingInfo: FC<Props> = ({ auth }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("weddingInfo.title")}</h2>
      <div>{t("welcome.date")}</div>
      <div>{t("weddingInfo.weddingLocation")}</div>
      <div>{t("weddingInfo.time")}</div>
      <button>{t("moreInfo")}</button>
      <div>
        <a target="_blank" rel="noreferrer" href={mapsLink(t("weddingVenue.lat"), t("weddingVenue.long")}>
          Google Maps
        </a>
        <div>
          <iframe
            src="https://snazzymaps.com/embed/325290"
            width="800px"
            height="600px"
            title="Wedding Venue Map"
            style={{ border: "none", maxWidth: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};
