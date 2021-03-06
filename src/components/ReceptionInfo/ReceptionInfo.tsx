import axios from "axios";
import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  API_URL,
  AuthData,
  RSVP_USER,
  useApiLazyHook,
} from "../../queries/constants";
import { mapsLink } from "../../utils/mapLink";
import { palette } from "../../utils/styles";
import { Button } from "../Button/Button";
import { PageName } from "../Dashboard/Dashboard";
import { ReceptionRsvpForm } from "../ReceptionRsvpForm/ReceptionRsvpForm";

interface Props {
  auth: AuthData;
  refetchAuth: () => Promise<void> | void;
  navigate: (
    pageName: Extract<PageName, "info" | "reception-rsvp" | "questions">
  ) => void;
}

export const ReceptionInfo: FC<Props> = ({ refetchAuth, auth, navigate }) => {
  const { t } = useTranslation();
  const [showRsvpForm, setShowRsvpForm] = useState(false);
  const [rsvpUser, { loading: savingRsvp }] = useApiLazyHook(RSVP_USER);

  return (
    <div
      style={{
        backgroundColor: palette.background,
        width: "100%",
        padding: "10px 0 0",
      }}
    >
      <h2 style={{ marginBottom: 10 }}>{t("receptionInfo.title")}</h2>
      {showRsvpForm ? (
        <ReceptionRsvpForm
          onRsvpLinkClick={() => navigate("questions")}
          onSubmit={async (receptionData) => {
            const rsvpData = {
              name: auth.recordName,
              zip: auth.zip,
              reception: receptionData,
            };
            console.log("rsvping");
            await Promise.all([
              axios.post(`${API_URL}rsvp`, rsvpData),
              rsvpUser(rsvpData),
            ]);
            console.log("rsvp done");
            return Promise.resolve(refetchAuth).then(() => [
              setShowRsvpForm(false),
              navigate("info"),
            ]);
          }}
          auth={auth}
          onCancel={() => [setShowRsvpForm(false), navigate("info")]}
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
            }}
          >
            <div className="text">
              <div>{t("receptionInfo.location")}</div>
              <div>{t("receptionInfo.address.line1")}</div>
              <div>{t("receptionInfo.address.line2")}</div>
            </div>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href={mapsLink(
                  t("receptionVenue.lat"),
                  t("receptionVenue.long")
                )}
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
              padding: "0 10px",
              marginBottom: 15,
            }}
          >
            <div>{t("welcome.date")}</div>
            <div>{t("receptionInfo.time")}</div>
          </div>
          {auth?.receptionAcceptedCount !== undefined &&
          auth?.receptionDeclinedCount !== undefined ? (
            <div>
              {t("receptionRsvp.set")}
              <Button
                label={t("updateRsvp")}
                color="secondary"
                onPress={() => [
                  setShowRsvpForm(true),
                  navigate("reception-rsvp"),
                ]}
              />
            </div>
          ) : (
            <Button
              label={t("setRsvp")}
              color={"primary"}
              onPress={() => [
                setShowRsvpForm(true),
                navigate("reception-rsvp"),
              ]}
            />
          )}
        </>
      )}
    </div>
  );
};
