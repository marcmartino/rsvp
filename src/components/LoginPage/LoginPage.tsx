import React, { ComponentProps, FC, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { pingApi } from "../../queries/pingApi";
import { getUniquesFromRange, randomImages } from "../../utils/randomImage";
import { palette } from "../../utils/styles";
import { EnterButton } from "../EnterButton/EnterButton";
import { LoginForm } from "../LoginForm/LoginForm";
import "./LoginPage.css";
import { Button } from "../Button/Button";
import { useWindowSize } from "../../utils/useWindowSize";
import { useWeddingCountdown } from "./useWeddingCountdown";

type Props = ComponentProps<typeof LoginForm>;

export const LoginPage: FC<Props> = ({ ...loginFormProps }) => {
  const { t, i18n } = useTranslation();
  const [hasClicked, setHasClicked] = useState(false);
  const countdown = useWeddingCountdown();

  useEffect(() => {
    pingApi();
  }, []);

  const images = useMemo(() => randomImages(2)("wide"), [
    // width,
  ]);

  return (
    <div>
      <div
        className="splashEnter"
        style={{ backgroundColor: palette.background }}
      >
        <img
          sizes="(max-width: 500px) 500px, 1200w"
          srcSet={images[0]}
          className="topImage"
          style={{
            height: "30vh",
            width: "100vw",
            objectFit: "cover",
          }}
        />
        {hasClicked ? (
          <div className="loginPageContent">
            <LoginForm {...loginFormProps} />
          </div>
        ) : (
          <a
            className="loginPageContent"
            href="#"
            onClick={() => setHasClicked(true)}
            style={{
              color: palette.cta,
              backgroundColor: palette.background,
            }}
          >
            <div />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "80%",
              }}
            >
              <h1 className="welcomeLine" style={{ lineHeight: "1.1em" }}>
                {t("welcome.line1")}
              </h1>
              <h1 className="welcomeLine" style={{ lineHeight: "1.1em" }}>
                {t("welcome.line2")}
              </h1>

              <p
                className="dateLocation"
                style={{
                  lineHeight: "1em",
                  color: palette.primary,
                  fontWeight: "bold",
                  width: "70%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <span>{t("welcome.date")}</span>
                <span>{t("welcome.location")}</span>
              </p>
              <h2 style={{ color: palette.tertiary, marginTop: 10 }}>
                {countdown}
              </h2>
            </div>

            <Button
              color="primary"
              onPress={() => setHasClicked(true)}
              label={t("welcome.enterButton")}
            />
          </a>
        )}
        <img
          className="backgroundImage"
          sizes="(max-width: 500px) 500px, 100vw"
          srcSet={images[1]}
          style={{}}
        />
        <div className="languageBtn">
          <Button
            onPress={() =>
              i18n.changeLanguage(i18n.language === "en" ? "kr" : "en")
            }
            color="secondary"
            label={t("languageSwitch")}
          />
        </div>
      </div>
    </div>
  );
};
