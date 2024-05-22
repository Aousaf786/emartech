import { FC } from "react";
import { Box } from "@mui/material";
import {
  AboutUs,
  ContactUs,
  Dashboard,
  Footer,
  OurPartners,
  OurServices,
  Testimonial,
} from "../components/landingPageComp";
import React from "react";

export const LandingPage: FC = () => {
  return (
    <Box>
      <Dashboard />
      <AboutUs />
      <OurServices />
      <OurPartners />
      <Testimonial />
      <ContactUs />
      <Footer />
    </Box>
  );
};
