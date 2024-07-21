import { APP_NAME } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";

const IMAGE_DIMENSIONS = {
  width: 1024,
  height: 1024,
};

interface LogoProps {
  size?: "small" | "medium" | "large";
}

export default function Logo({ size = "medium" }: LogoProps) {
  return (
    <Link
      href={`/`}
      style={{
        display: "block",
        position: "relative",
        ...getDimensions(size),
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <Image
        src={"/images/Logo/Logo.png"}
        alt={`${APP_NAME} Logo`}
        fill={true}
        style={{
          objectFit: "contain",
        }}
        priority
        sizes={getSizesFromLargestDimensions()}
      />
    </Link>
  );
}

function getDimensions(size: "small" | "medium" | "large") {
  switch (size) {
    case "small":
      return {
        width: IMAGE_DIMENSIONS.width / 16,
        height: IMAGE_DIMENSIONS.height / 16,
      };

    case "medium":
      return {
        width: IMAGE_DIMENSIONS.width / 12,
        height: IMAGE_DIMENSIONS.height / 12,
      };

    case "large":
      return {
        width: IMAGE_DIMENSIONS.width / 8,
        height: IMAGE_DIMENSIONS.height / 8,
      };
  }
}

function getSizesFromLargestDimensions() {
  const { width, height } = getDimensions("large");
  return `${width}x${height}`;
}
