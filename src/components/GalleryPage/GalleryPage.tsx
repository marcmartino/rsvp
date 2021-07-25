import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { palette } from "../../utils/styles";

interface Props {}

export const GalleryPage: FC<Props> = ({}) => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        backgroundColor: palette.background,
        padding: 10,
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: palette.cta }}>{t("galleryPage.comingSoon")}</h2>
      <div style={{ padding: 10, color: palette.error }}>
        {t("galleryPage.instruction")}
      </div>
    </div>
  );
};
