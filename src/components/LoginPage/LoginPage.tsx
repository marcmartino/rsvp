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
  const { t } = useTranslation();
  const [hasClicked, setHasClicked] = useState(false);
  const countdown = useWeddingCountdown();

  useEffect(() => {
    pingApi();
  }, []);

  const images = useMemo(() => randomImages(2)("wide"), [
    // width,
  ]);
  console.log(images);

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
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <p
                className="dateLocation"
                style={{
                  textAlign: "left",
                  lineHeight: "1em",
                  color: palette.primary,
                  fontWeight: "bold",
                }}
              >
                {t("welcome.date")}
                <br />
                {t("welcome.location")}
              </p>
              <h1 style={{ lineHeight: "1.1em" }}>{t("welcome.line1")}</h1>
              <h1 style={{ lineHeight: "1.1em" }}>{t("welcome.line2")}</h1>

              <h2 style={{ color: palette.tertiary }}>{countdown}</h2>
            </div>

            <Button
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
      </div>
    </div>
  );
};
