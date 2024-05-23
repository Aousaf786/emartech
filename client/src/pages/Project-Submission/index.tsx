import { FC } from "react";
import ProjectSubmissionForm from "@/components/ProjectSubmission";
import { Box, Container, Grid, styled } from "@mui/material";
import { Footer, Header } from "@/components/landingPageComp";

const ProjectSubmissionMain = styled(Box)(({ theme }: any) => ({
  paddingBottom: "5rem",
  paddingTop: "230px",
  "@media (max-width:900px)": {
    paddingTop: "200px",
  },
  "@media (max-width:805px)": {
    paddingTop: "280px",
  },
  "@media (max-width:765px)": {
    paddingTop: "110px",
  },
  "& .auth-heading": {
    fontWeight: "700",
  },
  "& .headingSpanColor": {
    color: theme.palette.common.headingLinesGreen,
  },
}));

const ProjectSubmission: FC = () => {
  return (
    <>
      <Header />
      <ProjectSubmissionMain>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} lg={8}>
              <h1 className="auth-heading">
                Post your Project & meet with{" "}
                <span className="headingSpanColor">the Best</span>
              </h1>
              <p className="para-text">
                Please check all the details before Posting your project. Enter
                each and every detail in a possible way. You can attach word
                files and others as well. Best of Luck!
              </p>
              <ProjectSubmissionForm />
            </Grid>
            <Grid item xs={12} lg={4}></Grid>
          </Grid>
        </Container>
      </ProjectSubmissionMain>
      <Footer />
    </>
  );
};

export default ProjectSubmission;
