import React, { FC } from "react";

interface Props {}

export const LabelledInput: FC<Props> = ({}) => {
  return (
    <div>
      <span>input label</span>
      <input type="text" />
    </div>
  );
};
