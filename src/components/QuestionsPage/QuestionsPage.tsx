import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { AuthData } from "../../queries/constants";
import "./QuestionsPage.css";

interface Props {
  auth: AuthData;
}

export const QuestionsPage: FC<Props> = ({ auth }) => {
  const { t } = useTranslation();

  return (
    <div className="questionPage">
      <h1 className="questionPageTitle">{t("questionsPage.title")}</h1>
      <div className="questions">
        <div className="question">{t("questionPage.question2")}</div>
        <div className="answer">{t("questionPage.answer2")}</div>

        <div className="question">{t("questionPage.question3")}</div>
        <div className="answer">{t("questionPage.answer3")}</div>

        <div className="question">{t("questionPage.question4")}</div>
        <div className="answer">
          {t(
            auth.weddingAccess && !auth.receptionAccess
              ? "questionPage.answer4c"
              : !auth.weddingAccess && auth.receptionAccess
              ? "questionPage.answer4b"
              : "questionPage.answer4"
          )}
        </div>

        {auth.weddingAccess && (
          <>
            <div className="question">{t("questionPage.question1")}</div>
            <div className="answer">{t("questionPage.answer1")}</div>
            <div className="question">{t("questionPage.question8")}</div>
            <div className="answer">{t("questionPage.answer8")}</div>
            <div className="question">{t("questionPage.question9")}</div>
            <div className="answer">{t("questionPage.answer9")}</div>

            <div className="question">{t("questionPage.question11")}</div>
            <div className="answer">{t("questionPage.answer11")}</div>

            <div className="question">{t("questionPage.question6")}</div>
            <div className="answer">{t("questionPage.answer6")}</div>
          </>
        )}

        <div className="question">{t("questionPage.question5")}</div>
        <div className="answer">{t("questionPage.answer5")}</div>

        <div className="question">{t("questionPage.question7")}</div>
        <div className="answer">{t("questionPage.answer7")}</div>

        {auth.receptionAccess && (
          <>
            <div className="question">{t("questionPage.question10")}</div>
            <div className="answer">{t("questionPage.answer10")}</div>
          </>
        )}

        <div className="question">{t("questionPage.question12")}</div>
        <div className="answer">
          {t(
            auth.recordName === "Dad Martino"
              ? "questionPage.answer12b"
              : "questionPage.answer12"
          )}
        </div>

        <div className="question">{t("questionPage.question13")}</div>
        <div className="answer">{t("questionPage.answer13")}</div>

        <div className="question">{t("questionPage.question14")}</div>
        <div className="answer">{t("questionPage.answer14")}</div>

        <div className="question">{t("questionPage.question15")}</div>
        <div className="answer">
          <ul>
            {t("questionPage.answer15")
              .split(",")
              .map((a) => {
                const splitA = a.split("|");
                return splitA.length === 1 ? (
                  <li>{splitA[0]}</li>
                ) : (
                  <li>
                    <a href={splitA[1]} referrerPolicy="no-referrer">
                      {splitA[0]}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className="question">{t("questionPage.question16")}</div>
        <div className="answer">
          <ul>
            {t("questionPage.answer16")
              .split(",")
              .map((a) => {
                const splitA = a.split("|");
                return splitA.length === 1 ? (
                  <li>{splitA[0]}</li>
                ) : (
                  <li>
                    <a href={splitA[1]} referrerPolicy="no-referrer">
                      {splitA[0]}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
