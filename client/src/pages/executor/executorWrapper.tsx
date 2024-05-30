import { AppBarComponent, Sidebar, drawerWidth } from "@/components/common";

import CatalogIcon from "@/assets/svgIcons/catalog.svg";
import DashboardIcon from "@/assets/svgIcons/dashboard.svg";
import InventoryIcon from "@/assets/svgIcons/inventory.svg";
import OrdersIcon from "@/assets/svgIcons/orders.svg";
import PerformanceIcon from "@/assets/svgIcons/performance.svg";
import { styled } from "@mui/material";
import { FC, useState } from "react";
import "../../components/supplierStyle.scss";

const dummyList = [
  {
    to: "/executor",
    icon: DashboardIcon,
    title: "Dashboard",
  },
  {
    to: "/executor",
    icon: InventoryIcon,
    title: "Projects",
    // subBtn: [
    //   {
    //     title: "All Inventory",
    //     to: "/manage-inventory"
    //   },
    //   {
    //     title: "Shipments",
    //     to: "/shipping-queue"
    //   },
    //   {
    //     title: "Analytics",
    //     to: "/inventory-analytics"
    //   },
    // ],
  },
  {
    to: "/executor",
    icon: CatalogIcon,
    title: "Sales",
    // subBtn: [
    //   {
    //     title: "Add Product",
    //     to: "/add-product"
    //   },
    //   {
    //     title: "Selling Application",
    //     to: "/view-selling-application"
    //   }
    // ],
  },
  {
    to: "/order",
    icon: OrdersIcon,
    title: "Orders",
    // subBtn: [
    //   {
    //     title: "Manage Orders",
    //     to: "/manage-orders"
    //   },
    //   {
    //     title: "Manage Returns",
    //     to: "/manage-returns"
    //   },
    //   {
    //     title: "Manage Claim",
    //     to: "/manage-claims"
    //   }
    // ],
  },
  // {
  //   to: "/login",
  //   icon: ShipmentIcon,
  //   title: "Shipments",
  // },
  {
    to: "/contracts",
    icon: PerformanceIcon,
    title: "Contracts",
    // subBtn: [
    //   {
    //     title: "Store Analytic",
    //     to: "/login"
    //   },
    //   {
    //     title: "Store Review",
    //     to: "/store-review"
    //   }
    // ],
  },

];


export const ExecutorWrapper: FC<any> = ({ children }) => {
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