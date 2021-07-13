import React, { FC } from "react";
import { useTranslation } from "react-i18next";

interface Props {}

export const BgTiles: FC<Props> = ({}) => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        zIndex: -1,
        position: "absolute",
        left: 0,
        top: 0,
        width: "100vw",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <Tile width={49} />
      <div style={{ width: "49%", flexDirection: "row", flexWrap: "wrap" }}>
        <Tile width={50} />
        <Tile width={50} />
        <Tile width={50} />
        <Tile width={50} />
      </div>
    </div>
  );
};

type TileSize = "square" | "tall" | "wide";
type TileProps = {
  size?: TileSize;
  height?: number;
  width: number;
};

export const Tile: FC<TileProps> = ({ size = "square", width, height }) => {
  const imgData: Record<TileSize, { folderName: string; maxNum: number }> = {
    square: { folderName: "square", maxNum: 9 },
    tall: { folderName: "3-2", maxNum: 6 },
    wide: { folderName: "4-3", maxNum: 5 },
  };
  const randomSrc = `/bgImages/${imgData[size].folderName}/${Math.ceil(
    Math.random() * imgData[size].maxNum
  )}.jpg`;
  return (
    <img
      src={randomSrc}
      style={{ width: `${width}%`, filter: "saturate(0.5) contrast(0.5)" }}
    />
  );
};
