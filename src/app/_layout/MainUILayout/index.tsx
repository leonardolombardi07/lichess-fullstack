"use client";

import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import Logo from "@/components/elements/Logo";
import { NavigationItem } from "./NavigationItem";
import ThemeModeSwitch from "./ThemeModeSwitch";

const OPENED_DRAWER_WIDTH = 240;
const CLOSED_DRAWER_WIDTH = 65;

interface MainUILayoutProps {
  children: React.ReactNode;
}

export default function MainUILayout({ children }: MainUILayoutProps) {
  const [isDrawerOpen, setIsDraw] = React.useState(false);

  function openDrawer() {
    setIsDraw(true);
  }

  function closeDrawer() {
    setIsDraw(false);
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Header isDrawerOpen={isDrawerOpen} openDrawer={openDrawer} />
      <Drawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
      <PageContent>{children}</PageContent>
    </Box>
  );
}

interface HeaderProps {
  isDrawerOpen: boolean;
  openDrawer: () => void;
}

function Header({ isDrawerOpen, openDrawer }: HeaderProps) {
  return (
    <StyledAppBar position="fixed" isDrawerOpen={isDrawerOpen}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton
          color="inherit"
          onClick={openDrawer}
          edge="start"
          sx={{
            ...(isDrawerOpen && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>

        <Box>
          <Logo size="small" />
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <ThemeModeSwitch />
      </Toolbar>
    </StyledAppBar>
  );
}

interface DrawerProps {
  isDrawerOpen: boolean;
  closeDrawer: () => void;
}

function Drawer({ isDrawerOpen, closeDrawer }: DrawerProps) {
  return (
    <StyledDrawerContainer variant={"permanent"} open={isDrawerOpen}>
      <Toolbar
        disableGutters // Needed to prevent padding changes on different screen sizes
        sx={{
          px: 1,
          py: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <IconButton onClick={closeDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>

      <Divider />

      <List disablePadding>
        <NavigationItem
          text="Home"
          icon={<HomeIcon />}
          isDrawerOpen={isDrawerOpen}
          href="/players"
          closeDrawer={closeDrawer}
        />
      </List>
    </StyledDrawerContainer>
  );
}

interface PageContentProps {
  children: React.ReactNode;
}

function PageContent({ children }: PageContentProps) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: {
          xs: "100vw",
          sm: `calc(100vw - ${CLOSED_DRAWER_WIDTH}px)`,
        },
        overflow: "auto",
      }}
    >
      <Toolbar />
      {children}
    </Box>
  );
}

interface StyledAppBarProps extends MuiAppBarProps {
  isDrawerOpen: boolean;
}

const StyledAppBar = styled(MuiAppBar)<StyledAppBarProps>(
  ({ theme, isDrawerOpen }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(isDrawerOpen && {
      marginLeft: OPENED_DRAWER_WIDTH,
      width: `calc(100% - ${OPENED_DRAWER_WIDTH}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  })
);

const StyledDrawerContainer = styled(MuiDrawer)(({ theme, open }) => ({
  width: OPENED_DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedDrawerMixin(theme),
    "& .MuiDrawer-paper": openedDrawerMixin(theme),
  }),
  ...(!open && {
    ...closedDrawerMixin(theme),
    "& .MuiDrawer-paper": closedDrawerMixin(theme),
  }),
}));

const openedDrawerMixin = (theme: Theme): CSSObject => ({
  width: OPENED_DRAWER_WIDTH,

  overflowX: "hidden",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedDrawerMixin = (theme: Theme): CSSObject => ({
  [theme.breakpoints.only("xs")]: {
    width: 0,
  },
  width: CLOSED_DRAWER_WIDTH,

  overflowX: "hidden",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
});
