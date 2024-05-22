import { FC } from "react";
import { Box, Container, Grid, styled } from "@mui/material";
import { Footer, Header } from "@/components/landingPageComp";
import ProposalSubmissionForm from "@/components/ProposalSubmission";

const ProposalSubmissionMain = styled(Box)(({ theme }: any) => ({
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

const ProposalSubmission: FC = () => {
  return (
    <>
      <Header />
      <ProposalSubmissionMain>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12}>
              <h1 className="auth-heading">
                Add <span className="headingSpanColor">Details</span>
              </h1>
              <p className="para-text">
                Please check all the details before submitting your Bid!
              </p>
              <ProposalSubmissionForm />
            </Grid>
          </Grid>
        </Container>
      </ProposalSubmissionMain>
      <Footer />
    </>
  );
};

export default ProposalSubmission;
