import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { AuthData } from "../../queries/constants";
import { ReceptionInfo } from "../ReceptionInfo/ReceptionInfo";
import { WeddingInfo } from "../WeddingInfo/WeddingInfo";

interface Props {
  auth: AuthData;
}

export const Dashboard: FC<Props> = ({ auth }) => {
  const { t } = useTranslation();
  console.log(auth);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{t("userGreeting", { name: auth.displayName })}</p>

      {auth.weddingAccess && <WeddingInfo auth={auth} />}
      {auth.receptionAccess && <ReceptionInfo auth={auth} />}
      {/* {auth.weddingAcceptedCount &&
        (auth.weddingAcceptedCount ? (
          <button>
            {t("dashboard.updateWeddingRsvpButton", {
              accepted: auth.weddingAcceptedCount,
              declined: auth.weddingDeclinedCount,
            })}
          </button>
        ) : (
          <button>{t("dashboard.setWeddingRsvpButton")}</button>
        ))} */}
    </div>
  );
};
