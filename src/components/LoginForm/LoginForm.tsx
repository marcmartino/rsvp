import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { AUTHORIZE_USER, useApiLazyHook } from "../../queries/constants";
import { palette } from "../../utils/styles";
import "./LoginForm.css";

interface Props {
  onSubmit: (values: { name: string; zip: string }) => void;
  submitting: boolean;
}

export const LoginForm: FC<Props> = ({ onSubmit, submitting }) => {
  const { t } = useTranslation();
  const [{ name, zip }, setFormVals] = useState({ name: "", zip: "" });
  //   const [authorizeUser, { data: authData, error, loading }] =
  //     useApiLazyHook(AUTHORIZE_USER);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ name, zip });
        }}
        style={{
          display: "flex",
          height: "40vh",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <header>
          <h1 style={{ color: palette.cta, marginTop: "5vh" }}>
            {t("loginPage.title")}
          </h1>
        </header>
        <div>
          <div>
            <input
              placeholder={t("loginPage.nameInput")}
              className="inputField"
              type="text"
              inputMode="text"
              onChange={(e) =>
                setFormVals(({ zip }) => ({ zip, name: e.target.value }))
              }
            />
          </div>
          <div>
            <input
              placeholder={t("loginPage.zipInput")}
              className="inputField"
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              onChange={(e) =>
                setFormVals(({ name }) => ({ name, zip: e.target.value }))
              }
            />
          </div>
        </div>
        <input
          disabled={submitting}
          style={{
            backgroundColor: palette.cta,
            height: "8vh",
            borderWidth: 0,
            width: "100vw",
            color: palette.background,
            fontSize: "1.5em",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          type="submit"
          title="str"
          value={t("loginPage.submitButton") as string}
          // value={t("loginPage.submitButton")}
        />
      </form>
    </div>
  );
};
