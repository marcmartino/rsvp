import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { palette } from "../../utils/styles";

interface Props {}

export const VisitingVegasPage: FC<Props> = ({}) => {
  const { t } = useTranslation();

  return (
    <div
      className="visitingVegasPage"
      style={{
        backgroundColor: palette.background,
        width: "100%",
        // padding: "10px 0 0",
        textAlign: "left",
      }}
    >
      <h1
        style={{
          marginBottom: 10,
          padding: 10,
          backgroundColor: palette.secondBackground,
          color: palette.background,
        }}
      >
        {t("visitingVegas.title")}
      </h1>
      <div style={{ padding: 10 }}>
        <div
          className="question"
          style={{ fontWeight: "bold", color: palette.cta }}
        >
          {t("visitingVegas.placesToEat")}
        </div>
        <div className="answer" style={{ marginBottom: 10 }}>
          <ul>
            {t("visitingVegas.placesToEatList")
              .split(",")
              .map((a) => {
                const splitA = a.split("|");
                return splitA.length === 1 ? (
                  <li>{splitA[0]}</li>
                ) : (
                  <li>
                    <a
                      href={splitA[1]}
                      referrerPolicy="no-referrer"
                      target="_blank"
                    >
                      {splitA[0]}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>

        <div
          className="question"
          style={{ fontWeight: "bold", color: palette.cta }}
        >
          {t("questionPage.question16")}
        </div>
        <div className="answer" style={{ marginBottom: 10 }}>
          <ul>
            {t("questionPage.answer16")
              .split(",")
              .map((a) => {
                const splitA = a.split("|");
                return splitA.length === 1 ? (
                  <li>{splitA[0]}</li>
                ) : (
                  <li>
                    <a
                      href={splitA[1]}
                      referrerPolicy="no-referrer"
                      target="_blank"
                    >
                      {splitA[0]}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>

        <div
          className="question"
          style={{ fontWeight: "bold", color: palette.cta }}
        >
          {t("questionPage.question5")}
        </div>
        <div className="answer" style={{ marginBottom: 10 }}>
          {t("questionPage.answer5")}
        </div>

        <div
          className="question"
          style={{ fontWeight: "bold", color: palette.cta }}
        >
          {t("questionPage.question14")}
        </div>
        <div className="answer" style={{ marginBottom: 10 }}>
          {t("questionPage.answer14")}
        </div>
      </div>
    </div>
  );
};
