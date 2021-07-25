import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { AuthData, RSVP_USER, useApiLazyHook } from "../../queries/constants";
import { mapsLink } from "../../utils/mapLink";
import { palette } from "../../utils/styles";
import { Button } from "../Button/Button";
import { PageName } from "../Dashboard/Dashboard";
import {
  WeddingFormData,
  WeddingRsvpForm,
} from "../WeddingRsvpForm/WeddingRsvpForm";

interface Props {
  auth: AuthData;
  refetchAuth: () => Promise<void> | void;
  navigate: (
    pageName: Extract<PageName, "info" | "wedding-rsvp" | "questions">
  ) => void;
}

export const WeddingInfo: FC<Props> = ({ auth, refetchAuth, navigate }) => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);
  const [showRsvpForm, setShowRsvpForm] = useState(false);
  const [rsvpUser, { loading: savingRsvp }] = useApiLazyHook(RSVP_USER);

  return (
    <div
      style={{
        backgroundColor: palette.secondBackground,
        width: "100%",
        padding: "5px 0 0",
      }}
    >
      <h2>{t("weddingInfo.title")}</h2>

      {showRsvpForm ? (
        <WeddingRsvpForm
          auth={auth}
          onCancel={() => [setShowRsvpForm(false), navigate("info")]}
          onSubmit={(weddingData) => {
            return rsvpUser({
              name: auth.recordName,
              zip: auth.zip,
              wedding: weddingData,
            })
              .then(refetchAuth)
              .then(() => [setShowRsvpForm(false), navigate("info")]);
          }}
          onRsvpLinkClick={() => navigate("questions")}
          saving={savingRsvp}
        />
      ) : (
        <>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 15,
              width: "100%",
            }}
          >
            <div className="text">
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
              justifyContent: "space-between",
              marginBottom: 15,
              padding: "0 10px",
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
          auth?.weddingDeclinedCount !== undefined ? (
            <div>
              {t("weddingRsvp.set")}
              <Button
                label={t("updateRsvp")}
                color="secondary"
                onPress={() => [
                  setShowRsvpForm(true),
                  navigate("wedding-rsvp"),
                ]}
              />
            </div>
          ) : (
            <Button
              label={t("setRsvp")}
              color={"primary"}
              onPress={() => [setShowRsvpForm(true), navigate("wedding-rsvp")]}
            />
          )}
        </>
      )}
    </div>
  );
};
