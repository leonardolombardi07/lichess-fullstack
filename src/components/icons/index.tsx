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

function PerfTypeIcon({ perfType }: { perfType: PerfType }) {
  switch (perfType) {
    case "bullet":
      return <BulletIcon />;
    case "rapid":
      return <RapidIcon />;
    case "blitz":
      return <BlitzIcon />;
    case "classical":
      return <ClassicalIcon />;
    case "chess960":
      return <Chess960Icon />;
    case "crazyhouse":
      return <CrazyhouseIcon />;
    case "antichess":
      return <AntichessIcon />;
    case "atomic":
      return <AtomicIcon />;
    case "horde":
      return <HordeIcon />;
    case "kingOfTheHill":
      return <KingOfTheHillIcon />;
    case "racingKings":
      return <RacingKingsIcon />;
    case "threeCheck":
      return <ThreeCheckIcon />;
    case "ultraBullet":
      return <UltraBulletIcon />;
    case "correspondence":
      return <CorrespondenceIcon />;

    default:
      return null;
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
