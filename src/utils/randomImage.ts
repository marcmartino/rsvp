import shuffle from "lodash/fp/shuffle";
import range from "lodash/fp/range";
import flow from "lodash/fp/flow";
import take from "lodash/fp/take";
import map from "lodash/fp/map";
import { pipe } from "fp-ts/function";

type ImgShape = "tall" | "wide";

const imageTypeData: Record<
  ImgShape,
  { folderName: string; itemCount: number }
> = {
  tall: { folderName: "2-3", itemCount: 75 },
  wide: { folderName: "3-4", itemCount: 44 },
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
        // "image-set(" +
        `${process.env.PUBLIC_URL}/bgImages/${imageTypeData[imgShape].folderName}/small/${imgNum}.jpg 500w,` +
        `${process.env.PUBLIC_URL}/bgImages/${imageTypeData[imgShape].folderName}/${imgNum}.jpg 1200w`
      // + ")"
    )
  );
