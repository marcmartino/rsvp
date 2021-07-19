import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { AuthData } from "../../queries/constants";
import { mapsLink } from "../../utils/mapLink";
import { palette } from "../../utils/styles";
import { Button } from "../Button/Button";

interface Props {
  auth: AuthData;
}

export const WeddingInfo: FC<Props> = ({ auth }) => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = React.useState(false);

  return (
    <div
      style={{
        backgroundColor: palette.secondBackground,
        width: "90%",
        padding: "5px 0 0",
      }}
    >
      <h2>{t("weddingInfo.title")}</h2>

      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 15,
        }}
      >
        <div>
          <div>{t("weddingInfo.weddingLocation")}</div>
          <div>{t("weddingVenue.address")}</div>
        </div>

        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href={mapsLink(t("weddingVenue.lat"), t("weddingVenue.long"))}
            style={{
              backgroundColor: palette.background,
              padding: 10,
              marginLeft: 10,
              borderRadius: "50%",
              borderWidth: 3,
              borderColor: palette.tertiary,
              borderStyle: "solid",
              //   boxShadow: "2px 2px 4px rgba(0,0,0,.5)",
            }}
          >
            {t("clickForMap")}
          </a>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginBottom: 15,
        }}
      >
        <div>{t("welcome.date")}</div>
        <div>{t("weddingInfo.time")}</div>
      </div>

      {!showMore && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <a
            href="#"
            style={{
              padding: "10px 10px 10px 0",
              color: palette.primary,
            }}
            onClick={() => setShowMore(true)}
          >
            {t("moreInfo")}
          </a>
        </div>
      )}

      {showMore && (
        <div className="hiddenDescription" style={{ margin: "10px 0" }}>
          <p
            style={{
              padding: "10px 10px",
              margin: "0 10px",
              backgroundColor: palette.background,
              borderLeftWidth: 3,
              borderLeftStyle: "solid",
              borderLeftColor: palette.tertiary,
              textAlign: "left",
            }}
          >
            {t("weddingDescriptionText")}
          </p>
        </div>
      )}

      {auth?.weddingAcceptedCount !== undefined &&
      auth?.weddingDeclinedCount ? (
        <div>
          {t("weddingRsvp.set")}
          <button>{t("updateRsvp")}</button>
        </div>
      ) : (
        // <button
        //   style={{
        //     width: "100%",
        //     backgroundColor: palette.cta,
        //     color: palette.background,
        //     borderWidth: 0,
        //     padding: "10px 0",
        //     fontSize: "1.5em",
        //   }}
        // >
        //   {t("setRsvp")}
        // </button>
        <Button label={t("setRsvp")} color={"primary"} onPress={() => void 0} />
      )}
    </div>
  );
};
