import React, { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { AuthData } from "../../queries/constants";
import { randomImages } from "../../utils/randomImage";
import { palette } from "../../utils/styles";
import { useWindowSize } from "../../utils/useWindowSize";
import { Button } from "../Button/Button";
import { ReceptionInfo } from "../ReceptionInfo/ReceptionInfo";
import { WeddingInfo } from "../WeddingInfo/WeddingInfo";

interface Props {
  auth: AuthData;
  signout: () => void;
  refetchAuth: () => void | Promise<void>;
}

export const Dashboard: FC<Props> = ({ auth, signout, refetchAuth }) => {
  const { t } = useTranslation();
  const { width: screenWidth } = useWindowSize();
  console.log(auth);

  const width: boolean = (screenWidth || 0) > 500;

  const bgImage = useMemo(() => randomImages(1)("tall", screenWidth || 0), [
    width,
  ]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: palette.background,

        backgroundPosition: "center",
        backgroundSize: "cover",
        flex: 1,
        minHeight: "100vh",

        ...(bgImage ? { backgroundImage: `url(${bgImage[0]})` } : {}),
      }}
    >
      <h1>{t("userGreeting", { name: auth.displayName })}</h1>

      {auth.weddingAccess && (
        <div style={{ marginTop: 10, marginBottom: 10 }}>
          <WeddingInfo refetchAuth={refetchAuth} auth={auth} />
        </div>
      )}
      {auth.receptionAccess && (
        <div style={{ marginTop: 10, marginBottom: 10 }}>
          <ReceptionInfo refetchAuth={refetchAuth} auth={auth} />
        </div>
      )}
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
      <Button color="cancel" onPress={() => signout()} label={t("logout")} />
    </div>
  );
};
