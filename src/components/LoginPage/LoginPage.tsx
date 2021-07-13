import React, { ComponentProps, FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { pingApi } from "../../queries/pingApi";
import { LoginForm } from "../LoginForm/LoginForm";

type Props = ComponentProps<typeof LoginForm>;

export const LoginPage: FC<Props> = ({ ...loginFormProps }) => {
  const { t } = useTranslation();
  const [hasClicked, setHasClicked] = useState(false);
  useEffect(() => {
    pingApi();
  }, []);

  return (
    <div
      style={{
        minHeight: "75vh",
        backgroundImage: `url(${process.env.PUBLIC_URL}/geoflowers.png)`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        padding: "15vh 20px",
      }}
    >
      {hasClicked ? (
        <>
          <header>
            <h1>{t("loginPage.title")}</h1>
          </header>
          <LoginForm {...loginFormProps} />
        </>
      ) : (
        <div>
          <h1>{t("welcome.line1")}</h1>
          <h1>{t("welcome.line2")}</h1>
          <h1>{t("welcome.line3")}</h1>
          <p>{t("welcome.subheading1")}</p>
          <p>{t("welcome.subheading2")}</p>
          <button onClick={() => setHasClicked(true)}>
            {t("welcome.enterButton")}
          </button>
        </div>
      )}
    </div>
  );
};
