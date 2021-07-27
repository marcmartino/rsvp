import React, { FC } from "react";

interface Props {
  maxNum: number;
  onChange: (value: number) => void;
  value?: number;
}

export const Dropdown: FC<Props> = ({ maxNum, onChange, value }) => {
  return (
    <select onChange={(e) => onChange(Number(e.target.value))}>
      <option key={0} value={0}>
        0
      </option>
      {[...Array(maxNum)].map((_, i) => {
        return (
          <option selected={value === i + 1} key={i} value={i + 1}>
            {i + 1}
          </option>
        );
      })}
    </select>
  );
};
