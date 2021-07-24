import differenceInDays from "date-fns/differenceInDays";
import differenceInHours from "date-fns/differenceInHours";
import differenceInMinutes from "date-fns/differenceInMinutes";
import isValid from "date-fns/isValid";
import parseISO from "date-fns/parseISO";
import fromUnixTime from "date-fns/fromUnixTime";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type TimeDifference = { d: number } | { h: number } | { m: number };

export const calcTimeDifference = (
  date: Date,
  comparisonDate: Date
): TimeDifference => {
  console.log(date, comparisonDate);
  const days = differenceInDays(comparisonDate, date);
  const hours = differenceInHours(comparisonDate, date);
  const minutes = differenceInMinutes(comparisonDate, date);

  if (days > 0) {
    return { d: days };
  } else if (hours > 0) {
    return { h: hours };
  } else if (minutes > 0) {
    return { m: minutes };
  } else {
    return { m: 0 };
  }
};

// Sat Oct 23 2021 17:00:00 GMT+0000
const WEDDING_START_TIMESTAMP = 1635008400;

const WEDDING_END_TIMESTAMP = 1635010200;

export const useWeddingCountdown = (): string | undefined => {
  const [timeDifference, setTimeDifference] = useState<
    TimeDifference | undefined
  >(undefined);
  const { t } = useTranslation();

  const currentTimestamp = Date.now() / 1000;

  const weddingStatus: "in-future" | "in-progress" | "in-past" =
    WEDDING_START_TIMESTAMP > currentTimestamp
      ? "in-future"
      : WEDDING_END_TIMESTAMP < currentTimestamp
      ? "in-past"
      : "in-progress";

  const [start, end] =
    weddingStatus === "in-future"
      ? [fromUnixTime(currentTimestamp), fromUnixTime(WEDDING_END_TIMESTAMP)]
      : [fromUnixTime(WEDDING_START_TIMESTAMP), fromUnixTime(currentTimestamp)];

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined;

    weddingStatus !== "in-progress" &&
      setTimeDifference(calcTimeDifference(start, end));

    intervalId = setInterval(() => {
      setTimeDifference(calcTimeDifference(start, end));
    }, 10000);

    // @ts-ignore
    return () => clearInterval(intervalId);
  }, []);

  return weddingStatus === "in-progress"
    ? t("timeDifference.inProgress")
    : weddingStatus === "in-future"
    ? t(
        timeDifference?.hasOwnProperty("d")
          ? "timeDifference.upcomingDays"
          : timeDifference?.hasOwnProperty("h")
          ? "timeDifference.upcomingHours"
          : "timeDifference.upcomingMinutes",
        // @ts-ignore
        timeDifference
      )
    : t(
        timeDifference?.hasOwnProperty("d")
          ? "timeDifference.pastDays"
          : timeDifference?.hasOwnProperty("h")
          ? "timeDifference.pastHours"
          : "timeDifference.pastMinutes)",
        // @ts-ignore
        timeDifference
      );
};
