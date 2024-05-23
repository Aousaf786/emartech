import { FC } from "react";
import { Box, Button, Container, styled } from "@mui/material";
import { Footer, Header } from "@/components/landingPageComp";
import CongratsIcon from "../../assets/images/congrats-icon.svg";
import { useNavigate } from "react-router-dom";

const SubmissionCongratsMain = styled(Box)(({ theme }: any) => ({
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
  "& .iconMainBox": {
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    "& img": {
      width: "220px",
      height: "220px",
    },
    "& .congratsHeading": {
      color: theme.palette.common.headingLinesGreen,
      fontWeight: "700",
      paddingBottom: "1rem",
    },
    "& .auth-heading": {
      textAlign: "center",
    },
    "& .submitBtn": {
      backgroundColor: theme.palette.common.headingLinesGreen,
      borderColor: theme.palette.common.headingLinesGreen,
      width: "fit-content",
      paddingLeft: "20px",
      paddingRight: "20px",
      margin: "unset",
      "& .spanText": {
        fontSize: "30px",
        lineHeight: 0,
        paddingLeft: "0.5rem",
        marginTop: "-3px",
      },
    },
  },
}));

const SubmissionCongrats: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <SubmissionCongratsMain>
        <Container maxWidth="lg">
          <Box className="iconMainBox">
            <img src={CongratsIcon} />
            <Box>
              <h1 className="auth-heading congratsHeading">Congrats!</h1>
              <h1 className="auth-heading">
                Your request is under review, it will be posted soon
              </h1>
            </Box>
            <Button
              onClick={() => navigate("/home")}
              type="button"
              variant="contained"
              className="submitBtn"
            >
              Go Back to the Homepage{" "}
              <span className="spanText">&#129170;</span>
            </Button>
          </Box>
        </Container>
      </SubmissionCongratsMain>
      <Footer />
    </>
  );
};

export default SubmissionCongrats;
