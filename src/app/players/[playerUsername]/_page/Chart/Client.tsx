"use client";

import * as React from "react";
import {
  UserRatingHistoryEntry,
  UserRatingHistory,
  UserRatingPoint,
} from "@/modules/lichess-api";
import Box from "@mui/material/Box";
import { LinePlot } from "@mui/x-charts/LineChart";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import { ChartsTooltip } from "@mui/x-charts/ChartsTooltip";
import { ChartsGrid } from "@mui/x-charts/ChartsGrid";
import {
  ResponsiveChartContainer,
  ResponsiveChartContainerProps,
} from "@mui/x-charts/ResponsiveChartContainer";
import Slider from "@mui/material/Slider";

export default function ChartUI({
  ratingEntries,
}: {
  ratingEntries: UserRatingHistoryEntry[];
}) {
  const minDate = getOldestRatingDate(ratingEntries);
  const maxDate = new Date();

  const [rangeDates, setRangeDates] = React.useState([
    getOldestRatingDate(ratingEntries),
    new Date(),
  ] as const);

  const [startDate, endDate] = rangeDates;

  const daysTimestamps = React.useMemo(
    () => getDaysTimestamps({ from: startDate, to: endDate }),
    [startDate, endDate]
  );

  const series: ResponsiveChartContainerProps["series"] = ratingEntries.map(
    (entry) => ({
      type: "line",
      data: getFilledRatings({
        history: entry.points,
        timestamps: daysTimestamps,
      }),
      label: entry.name,
      connectNulls: true,
    })
  );

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 700,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <ResponsiveChartContainer
        height={300}
        series={series}
        xAxis={[
          {
            data: daysTimestamps,
            valueFormatter: (value) => new Date(value).toLocaleDateString(),
          },
        ]}
      >
        <LinePlot />
        <ChartsXAxis position="bottom" />
        <ChartsYAxis position="right" disableTicks />
        <ChartsTooltip />
        <ChartsGrid />
      </ResponsiveChartContainer>

      <Box
        sx={{
          py: 2,
          px: 6,
        }}
      >
        <Slider
          min={minDate.getTime()}
          max={maxDate.getTime()}
          marks={[
            {
              value: startDate.getTime(),
              label: startDate.toLocaleDateString(),
            },
            { value: endDate.getTime(), label: endDate.toLocaleDateString() },
          ]}
          value={[startDate.getTime(), endDate.getTime()]}
          onChange={(event, newValue) => {
            newValue = newValue as number[];
            const start = new Date(newValue[0]);
            const end = new Date(newValue[1]);
            setRangeDates([start, end]);
          }}
          disableSwap
          valueLabelDisplay="off"
        />
      </Box>
    </Box>
  );
}

type FilledRating = number | null;

function getFilledRatings({
  history,
  timestamps,
}: {
  history: UserRatingHistory;
  timestamps: number[];
}) {
  const filledHistory: FilledRating[] = [];

  for (const targetTimestamp of timestamps) {
    const closestRating = findClosestRating({ history, targetTimestamp });
    filledHistory.push(closestRating);
  }

  return filledHistory;
}

function findClosestRating({
  history,
  targetTimestamp,
}: {
  history: UserRatingHistory;
  targetTimestamp: number;
}): FilledRating {
  let closestRating: FilledRating = null;

  for (const point of history) {
    const pointTimestamp = getRatingPointTimestamp(point);
    if (pointTimestamp <= targetTimestamp) {
      closestRating = point[3];
    } else {
      break; // Because the history is sorted, we can break early
    }
  }

  return closestRating;
}

function chooseSpreadedRatings({
  filledRatings,
  maxNumOfRatings,
}: {
  filledRatings: FilledRating[];
  maxNumOfRatings: number;
}) {
  const spreadedRatings: FilledRating[] = [];
  const spreadFactor = Math.ceil(filledRatings.length / maxNumOfRatings);

  // Add first rating
  spreadedRatings.push(filledRatings[0]);

  for (let i = 1; i < filledRatings.length - 1; i += spreadFactor) {
    spreadedRatings.push(filledRatings[i]);
  }

  // Add last rating
  spreadedRatings.push(filledRatings[filledRatings.length - 1]);

  // Remove two ratings from the middle
  spreadedRatings.splice(Math.floor(spreadedRatings.length / 2), 1);
  spreadedRatings.splice(Math.floor(spreadedRatings.length / 2), 1);
  return spreadedRatings;
}

function getRatingPointTimestamp(point: UserRatingPoint) {
  return new Date(point[0], point[1], point[2]).getTime();
}

function getDaysTimestamps({ from, to }: { from: Date; to: Date }): number[] {
  const timestamps: number[] = [];
  const current = new Date(from);

  while (current <= to) {
    timestamps.push(current.getTime());
    current.setDate(current.getDate() + 1);
  }

  return timestamps;
}

function getOldestRatingDate(ratingEntries: UserRatingHistoryEntry[]) {
  return ratingEntries.reduce((oldestDate, entry) => {
    if (entry.points.length === 0) {
      return oldestDate;
    }

    const oldestPoint = entry.points[0];
    const oldestPointDate = new Date(
      oldestPoint[0],
      oldestPoint[1],
      oldestPoint[2]
    );
    return oldestPointDate < oldestDate ? oldestPointDate : oldestDate;
  }, new Date());
}
