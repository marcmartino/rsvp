import React, { FC } from "react";
import { Wave } from "react-css-spinners";
import { palette } from "../../utils/styles";

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
      disabled={!!disabled}
      onClick={onPress}
      style={{
        backgroundColor: disabled ? palette.disabled : buttonColors[color],
        color: palette.background,
        width: "100%",
        height: "8vh",
        borderWidth: 0,
        fontSize: "1.2em",
        fontWeight: "bold",
        cursor: "pointer",
        // display: "flex",
        // justifyContent: "center",
      }}
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
