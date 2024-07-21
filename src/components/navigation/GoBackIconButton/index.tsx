"use client";

import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Link from "next/link";
import { GoBackIcon } from "@/components/icons";
import { useRouter } from "next/navigation";
import { IconProps } from "@mui/material/Icon";

interface GoBackIconProps extends IconButtonProps {
  fontSize?: IconProps["fontSize"];
  href?: string;
}

export default function GoBackIconButton({
  fontSize = "medium",
  href,
  ...rest
}: GoBackIconProps) {
  const router = useRouter();

  if (href) {
    return (
      <IconButton component={Link} href={href} {...rest}>
        <GoBackIcon fontSize={fontSize} />
      </IconButton>
    );
  }

  return (
    <IconButton onClick={() => router.back()}>
      <GoBackIcon fontSize={fontSize} />
    </IconButton>
  );
}
