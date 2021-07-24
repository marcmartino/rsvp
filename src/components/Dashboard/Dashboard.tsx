import React, { FC, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { AuthData } from "../../queries/constants";
import { randomImages } from "../../utils/randomImage";
import { palette } from "../../utils/styles";
import { useWindowSize } from "../../utils/useWindowSize";
import { Button } from "../Button/Button";
import { GalleryPage } from "../GalleryPage/GalleryPage";
import { NavMenu } from "../NavMenu/NavMenu";
import { QuestionsPage } from "../QuestionsPage/QuestionsPage";
import { ReceptionInfo } from "../ReceptionInfo/ReceptionInfo";
import { WeddingInfo } from "../WeddingInfo/WeddingInfo";
import "./Dashboard.css";

interface Props {
  auth: AuthData;
  signout: () => void;
  refetchAuth: () => void | Promise<void>;
}

export type PageName =
  | "info"
  | "wedding-rsvp"
  | "reception-rsvp"
  | "questions"
  | "gallery";

export const Dashboard: FC<Props> = ({ auth, signout, refetchAuth }) => {
  const { t } = useTranslation();
  const { width: screenWidth } = useWindowSize();
  const [pageName, setPageName] = useState<PageName>("info");
  console.log(auth);

  const width: boolean = (screenWidth || 0) > 500;

  const bgImage = useMemo(
    () => randomImages(1)(width ? "wide" : "tall", screenWidth || 0),
    [width]
  );

  return (
    <div
      style={{
        justifyContent: "space-between",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 className="greeting">
        <div> </div>
        {t("userGreeting", { name: auth.displayName })}
        <NavMenu currentPageName={pageName} navigate={setPageName} />
      </h1>
      <div
        className="dashboard"
        style={{
          ...(bgImage ? { backgroundImage: `url(${bgImage[0]})` } : {}),
        }}
      >
        <div className="bottomDashboard">
          {pageName === "gallery" && (
            <div style={{ marginTop: 10, marginBottom: 10 }}>
              <GalleryPage />
            </div>
          )}
          {pageName === "questions" && (
            <div
              style={{ marginTop: 10, marginBottom: 10 }}
              className="questionsPageContainer"
            >
              <QuestionsPage auth={auth} />
            </div>
          )}

          {(pageName === "info" || pageName === "wedding-rsvp") &&
            auth.weddingAccess && (
              <div
                className="weddingInfoContainer"
                style={{ marginTop: 10, marginBottom: 10 }}
              >
                <WeddingInfo
                  refetchAuth={refetchAuth}
                  auth={auth}
                  navigate={setPageName}
                />
              </div>
            )}
          {(pageName === "info" || pageName === "reception-rsvp") &&
            auth.receptionAccess && (
              <div
                className="receptionInfoContainer"
                style={{ marginTop: 10, marginBottom: 10 }}
              >
                <ReceptionInfo
                  refetchAuth={refetchAuth}
                  auth={auth}
                  navigate={setPageName}
                />
              </div>
            )}

          <Button
            color="cancel"
            onPress={() => signout()}
            label={t("logout")}
          />
        </div>
      </div>
    </div>
  );
};
