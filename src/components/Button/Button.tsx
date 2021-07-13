import React, { FC } from "react";

interface Props {
  label: string;
  onPress: () => void;
  color?: "primary" | "secondary" | "cancel";
}

export const Button: FC<Props> = ({ label, onPress, color = "secondary" }) => {
  return (
    <button
      onClick={onPress}
      style={{
        backgroundColor: "burlywood",
      }}
    >
      {label}
    </button>
  );
};
