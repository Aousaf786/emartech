import React, { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import PrivateRoutes from "./privateRoutes";
import PublicRoutes from "./publicRoutes";
import { GlobalLoader } from "@/components/common";

const ProjectListing = lazy(() => import("@/pages/Project-Listing"));
const ProjectDetails = lazy(() => import("@/pages/Project-Details"));
const ProposalSubmission = lazy(() => import("@/pages/Proposal-Submission"));

// Misc
const Login = lazy(() => import("@/pages/Authnetication-Screens/login"));
const SignUp = lazy(() => import("@/pages/Authnetication-Screens/singup"));
const ForgotPassword = lazy(
  () => import("@/pages/Authnetication-Screens/forgetPassword")
);
const EmailVerification = lazy(
  () => import("@/pages/Authnetication-Screens/emailVerification")
);
const ResetPassword = lazy(
  () => import("@/pages/Authnetication-Screens/resetPassword")
);
const ResetPasswordSuccess = lazy(
  () => import("@/pages/Authnetication-Screens/resetPasswordSuccess")
);
const LandingPage = lazy(() => import("@/pages/landingPage"));
const ProductListing = lazy(() => import("@/pages/Product-Listing"));
const ProductDetailPage = lazy(() => import("../pages/productdetailPage"));
// const Layout = lazy(() => import("../containers/layout"));

// SUPPLIER SCREENS
const HomePage = lazy(() => import("@/pages/home"));
const SupplierDashboard = lazy(
  () => import("@/pages/supplier/supplierDashboard")
);

const ManageInventory = lazy(() => import("@/pages/supplier/manage-inventory"));

const ShippingQueue = lazy(() => import("@/pages/supplier/shipping-queue"));
const ShipmentSummary = lazy(() => import("@/pages/supplier/shipment-summary"));

const TermsAndConditions = lazy(() => import("@/pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const ProjectSubmission = lazy(() => import("@/pages/Project-Submission"));
const SubmissionCongrats = lazy(
  () => import("@/pages/Project-Submission/congrats")
);

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<GlobalLoader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/productListing" element={<ProductListing />} />
          <Route path="/product-detail" element={<ProductDetailPage />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/projectSubmission" element={<ProjectSubmission />} />
          <Route path="/congrats" element={<SubmissionCongrats />} />

          <Route path="/projectListing" element={<ProjectListing />} />
          <Route path="/projectDetails/:id" element={<ProjectDetails />} />
          <Route
            path="/projectDetails/:id/proposalSubmission"
            element={<ProposalSubmission />}
          />

          {/* PUBLIC ROUTES FOR AUTH */}
          <Route path="/auth" element={<PublicRoutes />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forgotPassword" element={<ForgotPassword />} />
            <Route
              path="emailVerification/:email"
              element={<EmailVerification />}
            />
            <Route path="resetPassword" element={<ResetPassword />} />
            <Route
              path="resetPasswordSuccess"
              element={<ResetPasswordSuccess />}
            />
          </Route>

          {/* PRIVATE ROUTES */}
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="home" element={<HomePage />} />
            <Route path="supplier" element={<SupplierDashboard />} />
            <Route path="manage-inventory" element={<ManageInventory />} />
            <Route path="shipping-queue" element={<ShippingQueue />} />

            <Route path="shipment-summary" element={<ShipmentSummary />} />
          </Route>
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
