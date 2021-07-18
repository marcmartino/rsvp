import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AUTHORIZE_USER, useApiLazyHook } from "../../queries/constants";
import { palette } from "../../utils/styles";
import "./LoginForm.css";
import { Wave } from "react-css-spinners";

interface Props {
  onSubmit: (values: { name: string; zip: string }) => void;
  submitting: boolean;
  error?: string;
}

export const LoginForm: FC<Props> = ({ onSubmit, submitting, error }) => {
  const { t } = useTranslation();
  const [{ name, zip }, setFormVals] = useState({ name: "", zip: "" });
  //   const [authorizeUser, { data: authData, error, loading }] =
  //     useApiLazyHook(AUTHORIZE_USER);

  console.log({ submitting });
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
          <h1 style={{ color: palette.cta }}>{t("loginPage.title")}</h1>
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

        {error && (
          <span style={{ color: palette.error, padding: "0 5vw" }}>
            {error}
          </span>
        )}
        <button
          disabled={submitting || !name || !zip}
          style={{ backgroundColor: palette.cta, color: palette.background }}
          className="loginButton"
          onClick={() => onSubmit({ name, zip })}
        >
          {t("loginPage.submitButton") as string}
          {submitting && (
            <Wave
              style={{ marginLeft: 7.5 }}
              size={25}
              color={palette.background}
              thickness={3}
            />
          )}
        </button>
      </form>
    </div>
  );
};
