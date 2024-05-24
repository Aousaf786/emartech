import { AppBarComponent, Sidebar, drawerWidth } from "@/components/common";

import CatalogIcon from "@/assets/svgIcons/catalog.svg";
import DashboardIcon from "@/assets/svgIcons/dashboard.svg";
import InventoryIcon from "@/assets/svgIcons/inventory.svg";
import OrdersIcon from "@/assets/svgIcons/orders.svg";
import PaymentsIcon from "@/assets/svgIcons/payments.svg";
import PerformanceIcon from "@/assets/svgIcons/performance.svg";
import ShipmentIcon from "@/assets/svgIcons/shipment.svg";
import { styled } from "@mui/material";
import { FC, useState } from "react";
import "../../components/supplierComponent/supplierStyle.scss";

const dummyList = [
  {
    to: "/supplier",
    icon: DashboardIcon,
    title: "Dashboard",
  },
  {
    icon: InventoryIcon,
    title: "Inventory",
    subBtn: [
      {
        title: "All Inventory",
        to: "/manage-inventory"
      },
      {
        title: "Shipments",
        to: "/shipping-queue"
      },
      {
        title: "Analytics",
        to: "/login"
      },
    ],
  },
  {
    icon: CatalogIcon,
    title: "Catalog",
    subBtn: [
      {
        title: "Add Product",
        to: "/login"
      },
      {
        title: "Selling Application",
        to: "/login"
      }
    ],
  },
  {
    icon: OrdersIcon,
    title: "Orders",
    subBtn: [
      {
        title: "Manage Orders",
        to: "/login"
      },
      {
        title: "Manage Returns",
        to: "/login"
      },
      {
        title: "Manage Claim",
        to: "/login"
      }
    ],
  },
  {
    to: "/login",
    icon: ShipmentIcon,
    title: "Shipments",
  },
  {
    icon: PerformanceIcon,
    title: "Performance",
    subBtn: [
      {
        title: "Store Analytic",
        to: "/login"
      },
      {
        title: "Store Review",
        to: "/login"
      }
    ],
  },
  {
    to: "/login",
    icon: PaymentsIcon,
    title: "Payments",
  },
];


export const SupplierWrapper: FC<any> = ({ children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <Sidebar isDrawerOpen={open} setIsDrawerOpen={setOpen} dummyList={dummyList} />
      <AppBarComponent isDrawerOpen={open} />
      <Main open={open}>
        {children}
      </Main>zsx´EZ€@@
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