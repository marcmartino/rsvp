import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { getAuth } from "../../queries/getAuth";

interface Props {}

export const LoginForm: FC<Props> = () => {
  const { t } = useTranslation();
  const [{ name, zip }, setFormVals] = useState({ name: "", zip: "" });
  const [authData, setAuthData] = useState<{
    displayName?: string;
    soName?: string;
  }>({});
  return (
    <div>
      {authData.displayName && (
        <h1>
          {authData.soName
            ? t("coupleGreeting", {
                name: authData.displayName,
                soName: authData.soName,
              })
            : t("userGreeting", { name: authData.displayName })}
        </h1>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getAuth(name, zip)
            .then((e) => {
              console.log("submit", e);
              setAuthData(e);
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
    </div>
  );
};
