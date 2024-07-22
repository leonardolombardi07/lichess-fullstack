"use client";

import BulletIcon from "@mui/icons-material/FormatListBulleted";
import BlitzIcon from "@mui/icons-material/LocalFireDepartment";
import RapidIcon from "@mui/icons-material/Speed";
import ClassicalIcon from "@mui/icons-material/EmojiEvents";
import Chess960Icon from "@mui/icons-material/Extension";
import CrazyhouseIcon from "@mui/icons-material/Casino";
import AntichessIcon from "@mui/icons-material/ChangeHistory";
import AtomicIcon from "@mui/icons-material/Whatshot";
import HordeIcon from "@mui/icons-material/Groups";
import KingOfTheHillIcon from "@mui/icons-material/EmojiFlags";
import RacingKingsIcon from "@mui/icons-material/EmojiEvents";
import ThreeCheckIcon from "@mui/icons-material/CheckCircle";
import CorrespondenceIcon from "@mui/icons-material/MarkEmailRead";
import UltraBulletIcon from "@mui/icons-material/SpeedSharp";
import { PerfType } from "@/modules/lichess-api";
import GoBackIcon from "@mui/icons-material/ArrowBack";
import { SvgIconProps } from "@mui/material/SvgIcon";

interface PerfTypeIconProps extends SvgIconProps {
  perfType: PerfType;
}

function PerfTypeIcon({ perfType, ...rest }: PerfTypeIconProps) {
  switch (perfType) {
    case "bullet":
      return <BulletIcon {...rest} />;
    case "rapid":
      return <RapidIcon {...rest} />;
    case "blitz":
      return <BlitzIcon {...rest} />;
    case "classical":
      return <ClassicalIcon {...rest} />;
    case "chess960":
      return <Chess960Icon {...rest} />;
    case "crazyhouse":
      return <CrazyhouseIcon {...rest} />;
    case "antichess":
      return <AntichessIcon {...rest} />;
    case "atomic":
      return <AtomicIcon {...rest} />;
    case "horde":
      return <HordeIcon {...rest} />;
    case "kingOfTheHill":
      return <KingOfTheHillIcon {...rest} />;
    case "racingKings":
      return <RacingKingsIcon {...rest} />;
    case "threeCheck":
      return <ThreeCheckIcon {...rest} />;
    case "ultraBullet":
      return <UltraBulletIcon {...rest} />;
    case "correspondence":
      return <CorrespondenceIcon {...rest} />;

    default: {
      const exhaustiveCheck: never = perfType;

      if (process.env.NODE_ENV === "development") {
        console.error(`Unhandled perfType: ${exhaustiveCheck}`);
      }

      return null;
    }
  }
}

export {
  BulletIcon,
  BlitzIcon,
  RapidIcon,
  ClassicalIcon,
  Chess960Icon,
  CrazyhouseIcon,
  AntichessIcon,
  AtomicIcon,
  HordeIcon,
  KingOfTheHillIcon,
  RacingKingsIcon,
  ThreeCheckIcon,
  PerfTypeIcon,
  GoBackIcon,
};
