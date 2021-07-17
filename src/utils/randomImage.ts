import shuffle from "lodash/fp/shuffle";
import range from "lodash/fp/range";
import flow from "lodash/fp/flow";
import take from "lodash/fp/take";
import map from "lodash/fp/map";
import { pipe } from "fp-ts/function";

type ImgShape = "square" | "tall" | "wide";

const imageTypeData: Record<
  ImgShape,
  { folderName: string; itemCount: number }
> = {
  square: { folderName: "square", itemCount: 9 },
  tall: { folderName: "3-2", itemCount: 5 },
  wide: { folderName: "4-3", itemCount: 6 },
};

export const getUniquesFromRange = (rangeMax: number) => (
  numOfUniqs: number
): number[] =>
  pipe(
    numOfUniqs,
    () => range(1, rangeMax),
    // @ts-ignore
    shuffle,
    take(numOfUniqs)
  );

export const randomImages = (imageCount = 1) => (
  imgShape: ImgShape
): string[] =>
  pipe(
    imageCount,
    getUniquesFromRange(imageTypeData[imgShape].itemCount),
    map(
      (imgNum) =>
        `${process.env.PUBLIC_URL}/bgImages/${imageTypeData[imgShape].folderName}/${imgNum}.jpg`
    )
  );
