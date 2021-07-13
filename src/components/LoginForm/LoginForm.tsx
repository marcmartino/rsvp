import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { AUTHORIZE_USER, useApiLazyHook } from "../../queries/constants";

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
        {submitting ? " loading" : ""}
      </form>
    </div>
  );
};
