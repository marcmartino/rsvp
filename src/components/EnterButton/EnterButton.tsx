import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { palette } from "../../utils/styles";
interface Props {
  onPress: () => void;
  label: string;
}

export const EnterButton: FC<Props> = ({ onPress, label }) => {
  return (
    <button
      onClick={onPress}
      style={{
        // borderRadius: "50%",
        borderWidth: 0,
        borderColor: palette.secondary,
        backgroundColor: palette.primary,
        height: "8vh",
        // padding: "10px",
        width: "100%",
        color: palette.background,
        fontSize: "1.5em",
        fontWeight: "bold",
        borderStyle: "solid",
      }}
    >
      {label}
    </button>
  );
};
