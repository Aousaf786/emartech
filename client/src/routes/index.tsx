import React, { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { GlobalLoader } from "@/components/common";
import PrivateRoutes from "./privateRoutes";
import PublicRoutes from "./publicRoutes";
import SupplierListing from "@/pages/Supplier-Listing";
import BuyerSelection from "@/pages/BuyerSelection";
import SupplierDetails from "@/pages/Supplier-Details";
import SuperAdminLogin from "@/pages/SuperAdmin/login";
import SuperAdminForgotPassword from "@/pages/SuperAdmin/forgetPassword";
import SuperAdminResetPasswordSuccess from "@/pages/SuperAdmin/resetPasswordSuccess";
import SuperAdminResetPassword from "@/pages/SuperAdmin/resetPassword";
import SuperAdminEmailVerification from "@/pages/SuperAdmin/emailVerification";

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
const AddtoCart = lazy(() => import("@/pages/AddToCart/index"));
// const Layout = lazy(() => import("../containers/layout"));

// SUPPLIER SCREENS
const HomePage = lazy(() => import("@/pages/home"));
const SupplierDashboard = lazy(
  () => import("@/pages/supplier/supplierDashboard")
);


const ManageInventory = lazy(() => import("@/pages/supplier/manage-inventory"));

const ShippingQueue = lazy(() => import("@/pages/supplier/shipping-queue"));
const ShipmentSummary = lazy(() => import("@/pages/supplier/shipment-summary"));
const StoreReview = lazy(() => import("@/pages/supplier/store-review"));
const PaymentDashboard = lazy(() => import("@/pages/supplier/payment-dashboard"));
const ManageOrders = lazy(() => import("@/pages/supplier/manage-orders"));
const ManageReturns = lazy(() => import("@/pages/supplier/manage-returns"));
const ManageClaims = lazy(() => import("@/pages/supplier/manage-claims"));
const AddProduct = lazy(() => import("@/pages/supplier/add-product"));
const ExistingProduct = lazy(() => import("@/pages/supplier/existing-product"));
const AddNewProduct = lazy(() => import("@/pages/supplier/add-new-product"));

const TermsAndConditions = lazy(() => import("@/pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const ProjectSubmission = lazy(() => import("@/pages/Project-Submission"));
const ChatBox = lazy(() => import("@/pages/supplier/chat-box"));
const SubmissionCongrats = lazy(
  () => import("@/pages/Project-Submission/congrats")
);

// executor - dashboard
const ExecutorDashboard = lazy(() => import("@/pages/executor/Executor-Dashboard"));
const OrderDetails = lazy(() => import("@/pages/executor/order-details"));
const Orders = lazy(() => import("@/pages/executor/orders"));
const Contracts = lazy(() => import("@/pages/executor/Contracts"));
const ContractsDetails = lazy(() => import("@/pages/executor/Contracts-details"));
const Projects = lazy(() => import("@/pages/executor/Projects"));
const SalesDashboard = lazy(() => import("@/pages/executor/SalesDashboard"));
const ExecutorProjectDetails = lazy(() => import("@/pages/executor/Executor-Project-Details"));
const SuperAdmin = lazy(() => import("@/pages/super-admin/super-admin"));


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
          <Route path="/supplierListing" element={<SupplierListing />} />
          <Route path="/buyerSelection" element={<BuyerSelection />} />
          <Route path="/supplierDetails/:id" element={<SupplierDetails />} />
          <Route path="/add-to-cart" element={<AddtoCart />} />
          <Route path="/checkout" element={<AddtoCart />} />
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
            <Route path="store-review" element={<StoreReview />} />
            <Route path="payments" element={<PaymentDashboard />} />
            <Route path="manage-orders" element={<ManageOrders />} />
            <Route path="manage-returns" element={<ManageReturns />} />
            <Route path="manage-claims" element={<ManageClaims />} />
            <Route path="chat-box" element={<ChatBox />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="existing-product" element={<ExistingProduct />} />
            <Route path="add-new-product" element={<AddNewProduct />} />


            {/* executor-dashboard  */}
            <Route path="executor" element={<ExecutorDashboard />} />
            <Route path="order-details" element={<OrderDetails />} />
            <Route path="order" element={<Orders />} />
            <Route path="contracts" element={<Contracts />} />
            <Route path="contracts-details" element={<ContractsDetails />} />
            <Route path="projects" element={<Projects />} />
            <Route path="sales" element={<SalesDashboard />} />
            <Route path="executor-project-details" element={<ExecutorProjectDetails />} />
            {/* supper admin */}
            <Route path="super-admin" element={<SuperAdmin />} />

          </Route>

          <Route path="/super-admin" element={<PublicRoutes />}>
            <Route path="login" element={<SuperAdminLogin />} />
            <Route path="forgotPassword" element={<SuperAdminForgotPassword />} />
            <Route path="resetPassword" element={<SuperAdminResetPassword />} />
            <Route
              path="emailVerification/:email"
              element={<SuperAdminEmailVerification />}
            />
            <Route
              path="resetPasswordSuccess"
              element={<SuperAdminResetPasswordSuccess />}
            />
          </Route>
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
