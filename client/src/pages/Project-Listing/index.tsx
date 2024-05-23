import { FC, useState } from "react";
import { Header } from "../../components/landingPageComp/header";
import { Footer } from "../../components/landingPageComp/footer";
import { Box, Button, Container, Grid, TextField, styled } from "@mui/material";
import BreadCrumbs from "../../components/common/breadcrumbs";
import ProjectListingFilters from "../../components/projectListingComp/filter";
import JobSearch from "../../components/projectListingComp/jobSearch";
import ListProjectWithHeader from "@/components/projectListingComp/projectList";

const MainDiv = styled(Box)(({ theme }: any) => ({
  marginTop: "168px",
  "@media (max-width:768px)": {
    marginTop: "64px",
  },
  "& .listingFilterGrid": {
    marginTop: "26px",
    marginBottom: "5rem",
  },
  "& .auth-heading": {
    fontWeight: "700",
  },
  "& .headingSpanColor": {
    color: theme.palette.common.headingLinesGreen,
  },
  "& .emailUpdates": {
    boxShadow: "0px 0.95px 1.89px 0px rgba(0, 0, 0, 0.03)",
    border: "0.95px solid rgba(20, 20, 20, 0.05)",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    borderRadius: "7.5px",
    "& .sub-heading-text": {
      fontWeight: "700",
      padding: "0rem 0px 0.5rem 0px",
      "& span": {
        fontSize: "25px",
        paddingRight: "10px",
      },
    },
    "& .para-text": {
      fontSize: "14px",
      color: "rgba(20, 20, 20, 0.8)",
    },
    "& .MuiInputBase-formControl": {
      margin: "unset",
      border: "0.95px solid rgba(20, 20, 20, 0.2)",
      boxShadow: "0px 0.95px 1.89px 0px rgba(0, 0, 0, 0.03)",
      borderRadius: "3.78px",
      "& input": {
        fontSize: "14px",
        color: "#555555",
        padding: "16px 16px 16px 16px",
      },
    },
    "& fieldset": {
      border: "none",
      outline: "none",
    },
    "& button": {
      borderRadius: "3.78px",
      margin: "unset",
      backgroundColor: theme.palette.common.headingLinesGreen,
      border: "none",
      boxShadow: "none",
      fontSize: "15px",
      "&:hover": {
        backgroundColor: theme.palette.common.headingLinesGreen,
        border: "none",
        boxShadow: "none",
      },
    },
  },
  "& .paginationContainerComp": {
    paddingTop: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .Mui-selected": {
      backgroundColor: theme.palette.common.headingLinesGreen,
      color: "white",
    },
  },
}));

const ProjectListing: FC = () => {
  return (
    <>
      <Header />
      <MainDiv>
        <BreadCrumbs
          data={[
            { link: "/projectListing", text: "Home" },
            { link: "/projectListing", text: "Projects" },
          ]}
        />
        <Container maxWidth="xl" sx={{ marginTop: "4rem" }}>
          <h1 className="auth-heading">
            Find your <span className="headingSpanColor"> new contract </span>
            today
          </h1>
          <p className="para-text">Thousands of jobs are waiting for you.</p>
          <JobSearch />
          <Grid
            container
            columnSpacing={{ xs: 2, sm: 3, md: 5 }}
            rowSpacing={5}
            className="listingFilterGrid"
            justifyContent={"center"}
          >
            <Grid item xs={12} sm={5} md={3} lg={3}>
              <ProjectListingFilters />
            </Grid>
            <Grid item xs={12} sm={7} md={6} lg={6}>
              <ListProjectWithHeader />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Box className="emailUpdates">
                <h4 className="sub-heading-text">
                  <span>📨</span>Email Updates
                </h4>
                <p className="para-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
                <TextField
                  id="jobTitle"
                  name="jobTitle"
                  variant="outlined"
                  size="small"
                  error={false}
                  InputProps={{ placeholder: "name@mail.com" }}
                />
                <Button type="button" variant="contained">
                  Subcribe
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </MainDiv>
      <Footer />
    </>
  );
};

export default ProjectListing;
