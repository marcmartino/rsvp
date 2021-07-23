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

type Props = ComponentProps<typeof LoginForm>;

export const LoginPage: FC<Props> = ({ ...loginFormProps }) => {
  const { t } = useTranslation();
  const [hasClicked, setHasClicked] = useState(false);
  const { width: screenWidth } = useWindowSize();

  useEffect(() => {
    pingApi();
  }, []);

  const width: boolean | undefined = screenWidth
    ? screenWidth > 500
    : undefined;

  const images = useMemo(
    () => screenWidth && randomImages(2)("wide", screenWidth),
    [width]
  );

  return (
    <div
    // style={{
    //   minHeight: "75vh",
    //   backgroundImage: `url(${process.env.PUBLIC_URL}/geoflowers.png)`,
    //   backgroundPosition: "center",
    //   backgroundSize: "contain",
    //   backgroundRepeat: "no-repeat",
    //   padding: "15vh 20px",
    // }}
    >
      <div
        className="splashEnter"
        style={{ backgroundColor: palette.background }}
      >
        <div
          className="topImage"
          style={{
            height: "30vh",
            backgroundImage: `url('${images ? images[0] : ""}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
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
                style={{ textAlign: "left", lineHeight: "1em" }}
              >
                {t("welcome.date")}
                <br />
                {t("welcome.location")}
              </p>
              <h1 style={{ lineHeight: "1.1em" }}>{t("welcome.line1")}</h1>
              <h1 style={{ lineHeight: "1.1em" }}>{t("welcome.line2")}</h1>
            </div>

            {/* <EnterButton
              onPress={() => setHasClicked(true)}
              label={t("welcome.enterButton")}
            /> */}
            <Button
              onPress={() => setHasClicked(true)}
              label={t("welcome.enterButton")}
            />
          </a>
        )}
        <div
          className="backgroundImage"
          style={{
            backgroundImage: `url('${images ? images[1] : ""}')`,
          }}
        />
      </div>
    </div>
  );
};
