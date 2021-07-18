import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { AuthData } from "../../queries/constants";

interface Props {
  auth: AuthData;
}

export const ReceptionInfo: FC<Props> = ({ auth }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h3>{t("receptionInfo.title")}</h3>
      <div>{t("welcome.date")}</div>
      <div>{t("receptionInfo.location")}</div>
      <div>{t("receptionInfo.time")}</div>
      <button>{t("moreInfo")}</button>
    </div>
  );
};
