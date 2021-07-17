import React, { ComponentProps, FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { pingApi } from "../../queries/pingApi";
import { getUniquesFromRange, randomImages } from "../../utils/randomImage";
import { palette } from "../../utils/styles";
import { EnterButton } from "../EnterButton/EnterButton";
import { LoginForm } from "../LoginForm/LoginForm";

type Props = ComponentProps<typeof LoginForm>;

export const LoginPage: FC<Props> = ({ ...loginFormProps }) => {
  const { t } = useTranslation();
  const [hasClicked, setHasClicked] = useState(false);
  useEffect(() => {
    pingApi();
  }, []);

  const images = randomImages(2)("wide");

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
          style={{
            height: "30vh",
            backgroundImage: `url('${images[0]}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {hasClicked ? (
          <div style={{ height: "40vh" }}>
            <LoginForm {...loginFormProps} />
          </div>
        ) : (
          <a
            href="#"
            onClick={() => setHasClicked(true)}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              // textDecoration: "none",
              textDecoration: "none",
              color: palette.cta,
              backgroundColor: palette.background,
              // borderWidth: `0 0 2vh`,
              // borderBottomColor: palette.primary,
              height: "40vh",
              // borderStyle: "solid",
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
              <p style={{ textAlign: "left", lineHeight: "1em" }}>
                {t("welcome.date")}
                <br />
                {t("welcome.location")}
              </p>
              <h1 style={{ lineHeight: "1.1em" }}>{t("welcome.line1")}</h1>
              <h1 style={{ lineHeight: "1.1em" }}>{t("welcome.line2")}</h1>
            </div>

            <EnterButton
              onPress={() => setHasClicked(true)}
              label={t("welcome.enterButton")}
            />
          </a>
        )}
        <div
          style={{
            height: "30vh",
            backgroundImage: `url('${images[1]}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </div>
  );
};
