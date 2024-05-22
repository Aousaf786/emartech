import { FC } from "react";
import {
  Box,
  Card as MuiCard,
  CardContent,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import { StyledBackgroundBox } from "../../styles";
import ServicesLogo from "@/assets/Group 2.svg";

const CardHeaderStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const StyledBox = styled(Box)({
  margin: "25px 15px 20px",
  ".flex-center": {
    display: "block",
  },
  "@media(min-width: 480px)": {
    margin: "40px 25px 20px",
  },
  "@media(min-width: 768px)": {
    margin: "40px 40px 20px",
    ".flex-center": {
      display: "flex",
      alignItems: "center",
    },
    ".para-text-holder,.heading-text": {
      flex: "1",
    },
    ".para-text-holder .para-text": {
      marginLeft: "auto",
    },
  },
  "@media(min-width: 900px)": {
    ".para-text-holder .para-text": {
      maxWidth: "390px",
    },
  },
  "@media(min-width: 1080px)": {
    ".para-text-holder .para-text": {
      maxWidth: "450px",
    },
  },
  "@media(min-width: 1260px)": {
    ".para-text-holder .para-text": {
      maxWidth: "500px",
    },
  },
  "@media(min-width: 1800px)": {
    ".para-text-holder .para-text": {
      maxWidth: "650px",
    },
  },
});

const StyledTypography = styled(Typography)({
  "&.para-text": {
    textAlign: "justify",
    marginBottom: 0,
    marginTop: 5,
  },
});

// Styling the Card component with hover effects
const Card = styled(MuiCard)({
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)", // Scales up the card
    boxShadow: "0 4px 20px rgba(0,0,0,0.25)", // Increases shadow
  },
});

const servicesData = [
  {
    title: "Construction Material Marketplace",
    description: `Emartech's hub for construction materials offers a wide selection from trusted suppliers. You can easily find, compare, and purchase materials, ensuring transparency, competitive pricing, and timely delivery for your projects`,
  },
  {
    title: "Construction Material Marketplace",
    description: `Emartech connects promoters with reliable contractors and service providers through our marketplace. With detailed profiles, reviews, and ratings, promoters can make informed decisions to streamline operations and maintain quality standards.`,
  },
  {
    title: "Projector Executor Dashboard",
    description: `Emartech's dashboard provides real-time project insights, allowing you to track milestones, monitor resources, and receive instant notifications on potential delays. Streamlining project management, our dashboard empowers you to drive success with confidence`,
  },
  {
    title: "Supplier Dashboard",
    description: `Emartech's Supplier Dashboard offers you tools for order management, inventory tracking, and performance analytics. By partnering with Emartech, you can efficiently manage operations and expand your reach in the construction industry.`,
  },
  {
    title: "Bidding Service",
    description: `Emartech offers a streamlined bidding service for contractors and suppliers, providing a platform for competitive project proposals. Through our intuitive system, contractors and suppliers can submit bids for projects, showcasing their expertise and competitive pricing. Promoters benefit from a transparent and efficient process, ensuring they receive the best value and quality for their projects.`,
  },
  {
    title: "Customer Assistance",
    description: `Emartech provides clients with comprehensive assistance for their various projects. Clients receive clear insights into prices, quotas, and the current project phase, ensuring transparency and informed decision-making. With Emartech's support, clients can navigate the complexities of their projects confidently, from planning to completion, while staying informed every step of the way.`,
  },
];

export const OurServices: FC = () => {
  return (
    <StyledBox>
      <StyledBackgroundBox className="content-box no-background">
        <h4 className="sub-heading-text">
          <span className="line-span-holder">
            <span className="line-span" />
            <span className="line-span" />
          </span>
          OUR SERVICES
        </h4>
        <Box className="flex-center">
          <Box className="content-holder">
            <h1 className="heading-text">Build Everything You Need</h1>
          </Box>
          <Box className="para-text-holder">
            <p className="para-text">
              Emartech offers a marketplace for construction materials services,
              providing transparent pricing, timely delivery, and quality
              contractor connections. Our dashboards offer real-time project and
              supplier insights, and our bidding service ensures competitive
              proposals. Comprehensive customer assistance ensures informed
              decision-making and project success.
            </p>
          </Box>
        </Box>
        {/* <Grid container spacing={1} style={{ marginTop: "20px" }}> */}
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {servicesData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ padding: 2 }}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  borderRadius: 0,
                  boxShadow: 10,
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    borderBottom: 10,
                    borderColor: "#39C64E",
                    p: 3,
                  }}
                >
                  <Box sx={CardHeaderStyle}>
                    <Typography
                      variant="h6"
                      className="sub-heading-text black-color"
                    >
                      {item.title}
                    </Typography>
                    <img src={ServicesLogo} alt="Icon" style={{ width: 30 }} />
                  </Box>
                  <StyledTypography className="para-text">
                    {item.description}
                  </StyledTypography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* </Grid> */}
      </StyledBackgroundBox>
    </StyledBox>
  );
};
