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
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ProductListing from "./pages/Product-Listing";
import ProjectSubmission from "./pages/Project-Submission";
import SubmissionCongrats from "./pages/Project-Submission/congrats";
import TermsAndConditions from "./pages/TermsAndConditions";
import { HomePage } from "./pages/home";
import { LandingPage } from "./pages/landingPage";
import { ProductdetailPage } from "./pages/productdetailPage";
import ManageInventory from "./pages/supplier/manage-inventory";
import ShipmentSummary from "./pages/supplier/shipment-summary";
import ShippingQueue from "./pages/supplier/shipping-queue";
import { SupplierDashboard } from "./pages/supplier/supplierDashboard";
import { baseTheme } from "./theme";
import ProjectListing from "./pages/Project-Listing";
import ProjectDetails from "./pages/Project-Details";
import ProposalSubmission from "./pages/Proposal-Submission";


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
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/projectSubmission" element={<ProjectSubmission />} />
            <Route path="/congrats" element={<SubmissionCongrats />} />
            <Route path="/projectListing" element={<ProjectListing />} />
            <Route path="/projectDetails/:id" element={<ProjectDetails />} />
            <Route path="/projectDetails/:id/proposalSubmission" element={<ProposalSubmission />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};
