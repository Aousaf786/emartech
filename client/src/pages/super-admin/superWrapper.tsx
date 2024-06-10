import { AppBarComponent, Sidebar, drawerWidth } from "@/components/common";

import DashboardIcon from "@/assets/svgIcons/dashboard.svg";
import { styled } from "@mui/material";
import { FC, useState } from "react";
import "../../components/supplierStyle.scss";

const dummyList = [
  {
    to: "/super-admin",
    icon: DashboardIcon,
    title: "Dashboard",
  },


];


export const SuperWrapper: FC<any> = ({ children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <Sidebar isDrawerOpen={open} setIsDrawerOpen={setOpen} dummyList={dummyList} />
      <AppBarComponent isDrawerOpen={open} />
      <Main open={open}>
        {children}
      </Main>
    </div>
  );
};


const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: `${drawerWidth}px`,
  }),
}));