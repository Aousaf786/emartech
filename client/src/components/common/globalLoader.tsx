import React from "react";

// Misc
import LoadingIcon from "@/constants/svgs/ThreeDots";

export const GlobalLoader: React.FC = () => (
  <div className="main-page-loader">
    <LoadingIcon color={"#003366"} />
  </div>
);
