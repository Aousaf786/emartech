import { CssBaseline, ThemeProvider } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/mainStyle.scss";
import { UserRoute } from "./authorization/user";
import { AuthProvider } from "./contextProviders/authentication";
import {
  EmailVerification,
  ForgotPassword,
  Login,
  ResetPassword,
  ResetPasswordSuccess,
  Signup,
} from "./pages/Authnetication-Screens/index";
import ProductListing from "./pages/Product-Listing";
import { HomePage } from "./pages/home";
import { LandingPage } from "./pages/landingPage";
import { ProductdetailPage } from "./pages/productdetailPage";
import AddProduct from "./pages/supplier/add-product";
import ExistingProduct from "./pages/supplier/existing-product";
import InventoryAnalytics from "./pages/supplier/inventory-analytics";
import ManageClaims from "./pages/supplier/manage-claims";
import ManageInventory from "./pages/supplier/manage-inventory";
import ManageOrders from "./pages/supplier/manage-orders";
import ManageReturns from "./pages/supplier/manage-returns";
import ShipmentSummary from "./pages/supplier/shipment-summary";
import ShippingQueue from "./pages/supplier/shipping-queue";
import { SupplierDashboard } from "./pages/supplier/supplierDashboard";
import { baseTheme } from "./theme";


export const App = () => {
  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <CssBaseline />
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route
              path="/emailVerification/:email"
              element={<EmailVerification />}
            />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route
              path="/resetPasswordSuccess"
              element={<ResetPasswordSuccess />}
            />
            <Route path="/productListing" element={<ProductListing />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<UserRoute><HomePage /></UserRoute>} />
            <Route path="/supplier" element={<SupplierDashboard />} />
            <Route path="/product-detail" element={<ProductdetailPage />} />
            <Route path="/manage-inventory" element={<ManageInventory />} />
            <Route path="/shipping-queue" element={<ShippingQueue />} />
            <Route path="/shipment-summary" element={<ShipmentSummary />} />
            <Route path="/inventory-analytics" element={<InventoryAnalytics />} />
            <Route path="/manage-orders" element={<ManageOrders />} />
            <Route path="/manage-returns" element={<ManageReturns />} />
            <Route path="/manage-claims" element={<ManageClaims />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/existing-product" element={<ExistingProduct />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};
