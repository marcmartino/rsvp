import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { AuthData } from "../../queries/constants";

interface Props {
  auth: AuthData;
}

export const Dashboard: FC<Props> = ({ auth }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{t("userGreeting", { name: auth.displayName })}</p>

      {auth.weddingAcceptedCount &&
        (auth.weddingAcceptedCount ? (
          <button>
            {t("dashboard.updateWeddingRsvpButton", {
              accepted: auth.weddingAcceptedCount,
              declined: auth.weddingDeclinedCount,
            })}
          </button>
        ) : (
          <button>{t("dashboard.setWeddingRsvpButton")}</button>
        ))}
    </div>
  );
};
