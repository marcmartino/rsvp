import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { LoginForm } from "../LoginForm/LoginForm";

interface Props {}

export const LoginPage: FC<Props> = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <header>
        <h1>{t("loginPage.title")}</h1>
      </header>
      <LoginForm />
    </div>
  );
};
