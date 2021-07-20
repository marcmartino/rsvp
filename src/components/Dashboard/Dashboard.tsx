import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { AuthData } from "../../queries/constants";
import { palette } from "../../utils/styles";
import { Button } from "../Button/Button";
import { ReceptionInfo } from "../ReceptionInfo/ReceptionInfo";
import { WeddingInfo } from "../WeddingInfo/WeddingInfo";

interface Props {
  auth: AuthData;
  signout: () => void;
}

export const Dashboard: FC<Props> = ({ auth, signout }) => {
  const { t } = useTranslation();
  console.log(auth);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: palette.background,
        flex: 1,
      }}
    >
      <h1>{t("userGreeting", { name: auth.displayName })}</h1>

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
      <Button onPress={() => signout()} label={t("logout")} />
    </div>
  );
};