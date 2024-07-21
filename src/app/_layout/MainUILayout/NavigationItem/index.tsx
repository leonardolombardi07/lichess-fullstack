"use client";

import * as React from "react";
import { Theme } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { SxProps } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface SharedNavigationItemProps {
  text: string;
  icon: React.ReactNode;
  isDrawerOpen: boolean;
  closeDrawer: () => void;
  buttonSx?: SxProps<Theme>;
}

// Leo: if it is not a parent, it is a tree item (even if it has no children)
type NavigationItemProps =
  | InternalNavigationTreeParentItemProps
  | NavigationTreeItemProps;

function NavigationItem({
  text,
  icon,
  isDrawerOpen,
  href,
  onClick,
  endIcon,
  buttonSx,
  closeDrawer,
}: NavigationItemProps) {
  const pathname = usePathname();
  const router = useRouter();

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  function handleClick() {
    if (typeof onClick === "function") {
      return onClick();
    }

    router.push(href);
    if (isXs) closeDrawer();
  }

  return (
    <Tooltip placement="right" disableHoverListener={isDrawerOpen} title={text}>
      <ListItem
        component={href ? Link : "div"}
        href={href}
        disablePadding
        sx={{ display: "block", color: "inherit" }}
        onClick={handleClick}
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: isDrawerOpen ? "initial" : "center",
            px: 2.5,
            ...buttonSx,
          }}
          selected={pathname === href}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: isDrawerOpen ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText primary={text} sx={{ opacity: isDrawerOpen ? 1 : 0 }} />

          {endIcon}
        </ListItemButton>
      </ListItem>
    </Tooltip>
  );
}

interface InternalNavigationTreeParentItemProps
  extends SharedNavigationItemProps {
  onClick: () => void;
  href?: never;
  endIcon: React.ReactNode;
}

interface NavigationTreeParentItemProps extends SharedNavigationItemProps {
  children: React.ReactNode;
}

function NavigationTreeParentItem({
  children,
  ...props
}: NavigationTreeParentItemProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const collapseIconSx: SxProps<Theme> = {
    color: (t) =>
      t.palette.mode === "dark" ? "inherit" : t.palette.text.secondary,
  };

  return (
    <React.Fragment>
      <NavigationItem
        {...props}
        onClick={() => setIsExpanded(!isExpanded)}
        endIcon={
          isExpanded ? (
            <ExpandLess sx={collapseIconSx} />
          ) : (
            <ExpandMore sx={collapseIconSx} />
          )
        }
      />

      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </React.Fragment>
  );
}

interface NavigationTreeItemProps extends SharedNavigationItemProps {
  href: string;
  endIcon?: never;
  onClick?: never;
}

function NavigationTreeItem(props: NavigationTreeItemProps) {
  return (
    <NavigationItem
      {...props}
      buttonSx={{
        pl: 4,
      }}
    />
  );
}

export { NavigationItem, NavigationTreeParentItem, NavigationTreeItem };
