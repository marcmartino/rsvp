import React, { FC } from "react";

interface Props {}

export const Page: FC<Props> = ({ children }) => {
  return (
    <div>
      <h1>Page</h1>
      {children}
    </div>
  );
};
