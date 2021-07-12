import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { getAuth } from "../../queries/getAuth";

interface Props {}

export const LoginForm: FC<Props> = () => {
  const { t } = useTranslation();
  const [{ name, zip }, setFormVals] = useState({ name: "", zip: "" });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        getAuth(name, zip)
          .then((e) => {
            console.log("submit", e);
          })
          .catch((err) => {
            console.error(err);
          });
      }}
    >
      <div>
        {t("loginPage.nameInput")}
        <input
          type="text"
          onChange={(e) =>
            setFormVals(({ zip }) => ({ zip, name: e.target.value }))
          }
        />
      </div>
      <div>
        {t("loginPage.zipInput")}
        <input
          type="text"
          onChange={(e) =>
            setFormVals(({ name }) => ({ name, zip: e.target.value }))
          }
        />
      </div>
      <input type="submit" title={t("loginPage.subitButton")} />
    </form>
  );
};
