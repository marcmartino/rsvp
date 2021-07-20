import React, { FC } from "react";
import { Wave } from "react-css-spinners";
import { palette } from "../../utils/styles";
import "./Button.css";

interface Props {
  label: string;
  onPress: () => void;
  color?: "primary" | "secondary" | "cancel";
  loading?: boolean;
  disabled?: boolean;
}
const buttonColors = {
  primary: palette.cta,
  secondary: palette.primary,
  cancel: palette.error,
} as const;

export const Button: FC<Props> = ({
  label,
  onPress,
  color = "secondary",
  loading,
  disabled,
}) => {
  return (
    <button
      className={["rsvpButton", color].join(" ")}
      disabled={!!disabled}
      onClick={onPress}
    >
      {label}
      {loading && (
        <Wave
          style={{ marginLeft: 7.5 }}
          size={25}
          color={palette.background}
          thickness={3}
        />
      )}
    </button>
  );
};
