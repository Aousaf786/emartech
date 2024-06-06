import { FC } from "react";
import { Box, Container, Grid, styled } from "@mui/material";
import { Footer, Header } from "@/components/landingPageComp";
import CommentIcon from "../../assets/images/fi-rr-comment-user.svg";
import FileIcon from "../../assets/images/fi-rr-file-check.svg";
import { useNavigate } from "react-router-dom";
import CallMadeIcon from "@mui/icons-material/CallMade";

const BuyerSelectionMainDiv = styled(Box)(({ theme }: any) => ({
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
  "& .selectionMainBoxe": {
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& img": {
      width: "32px",
      height: "32px",
    },
    "& .auth-heading": {
      textAlign: "center",
      color: "black",
      fontWeight: "400",
      marginBottom: "5rem",
    },
  },
}));

const BuyerSelection: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <BuyerSelectionMainDiv>
        <Container maxWidth="md">
          <Box className="selectionMainBoxe">
            <h1 className="auth-heading">Are you looking for a?</h1>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "#F8F8F8",
                    cursor: "pointer",
                    "& .imgaePaddingBox": {
                      backgroundColor: "#39C64E",
                    },
                    "& .auth-heading": {
                      marginBottom: "0rem !important",
                      color: "rgba(0, 0, 0, 0.75) !important",
                      textAlign: "start !important",
                      fontWeight: "500 !important",
                    },
                    "& .subHeading": {
                      color: "rgba(0, 0, 0, 0.5)",
                      fontWeight: "500 !important",
                      fontSize: "20px",
                      margin: "unset",
                    },
                    "& .arrowDiv": {
                      "& p": {
                        margin: "unset",
                        color: "rgba(39, 174, 96, 1)",
                        fontWeight: "500 !important",
                        fontSize: "12px",
                      },
                      "& svg": {
                        width: "15px",
                        height: "15px",
                        color: "rgba(39, 174, 96, 1)",
                      },
                    },
                    "& .resultText": {
                      margin: "unset",
                      color: "rgba(0, 0, 0, 0.35)",
                      fontWeight: "500 !important",
                      fontSize: "12px",
                    },
                    "&:hover": {
                      transition: "0.5s",
                      backgroundColor: "#39C64E",
                      "& .imgaePaddingBox": {
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      },
                      "& .auth-heading": {
                        color: "white !important",
                      },
                      "& .subHeading": {
                        color: "white",
                      },
                      "& .arrowDiv": {
                        "& p": {
                          color: "white",
                        },
                        "& svg": {
                          color: "white",
                        },
                      },
                      "& .resultText": {
                        color: "white",
                      },
                    },
                  }}
                  padding="28px"
                  borderRadius={"12px"}
                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    gap={"15px"}
                    paddingBottom={"0.5rem"}
                  >
                    <Box
                      sx={{
                        minWidth: "64px",
                        width: "64px ",
                        height: "64px ",
                        padding: "11px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      className="imgaePaddingBox"
                    >
                      <img src={CommentIcon} alt="comment icon" />
                    </Box>
                    <Box>
                      <h1 className="auth-heading">Profiles</h1>
                      <p className="subHeading">
                        Project
                        <br />
                        executors
                      </p>
                    </Box>
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={"15px"}>
                    <Box
                      sx={{
                        minWidth: "64px",
                        width: "64px ",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                      className="arrowDiv"
                    >
                      <CallMadeIcon />
                      <p>2756</p>
                    </Box>
                    <p className="resultText">Result Available</p>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "#F8F8F8",
                    cursor: "pointer",
                    "& .imgaePaddingBox": {
                      backgroundColor: "#39C64E",
                    },
                    "& .auth-heading": {
                      marginBottom: "0rem !important",
                      color: "rgba(0, 0, 0, 0.75) !important",
                      textAlign: "start !important",
                      fontWeight: "500 !important",
                    },
                    "& .subHeading": {
                      color: "rgba(0, 0, 0, 0.5)",
                      fontWeight: "500 !important",
                      fontSize: "20px",
                      margin: "unset",
                    },
                    "& .arrowDiv": {
                      "& p": {
                        margin: "unset",
                        color: "rgba(39, 174, 96, 1)",
                        fontWeight: "500 !important",
                        fontSize: "12px",
                      },
                      "& svg": {
                        width: "15px",
                        height: "15px",
                        color: "rgba(39, 174, 96, 1)",
                      },
                    },
                    "& .resultText": {
                      margin: "unset",
                      color: "rgba(0, 0, 0, 0.35)",
                      fontWeight: "500 !important",
                      fontSize: "12px",
                    },
                    "&:hover": {
                      transition: "0.5s",
                      backgroundColor: "#39C64E",
                      "& .imgaePaddingBox": {
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      },
                      "& .auth-heading": {
                        color: "white !important",
                      },
                      "& .subHeading": {
                        color: "white",
                      },
                      "& .arrowDiv": {
                        "& p": {
                          color: "white",
                        },
                        "& svg": {
                          color: "white",
                        },
                      },
                      "& .resultText": {
                        color: "white",
                      },
                    },
                  }}
                  padding="28px"
                  borderRadius={"12px"}
                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    gap={"15px"}
                    paddingBottom={"0.5rem"}
                  >
                    <Box
                      sx={{
                        minWidth: "64px",
                        width: "64px ",
                        height: "64px ",
                        padding: "11px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      className="imgaePaddingBox"
                    >
                      <img src={FileIcon} alt="file icon" />
                    </Box>
                    <Box>
                      <h1 className="auth-heading">Projects</h1>
                      <p className="subHeading">
                        To bid, win
                        <br />
                        the contact
                      </p>
                    </Box>
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={"15px"}>
                    <Box
                      sx={{
                        minWidth: "64px",
                        width: "64px ",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                      className="arrowDiv"
                    >
                      <CallMadeIcon />
                      <p>4756</p>
                    </Box>
                    <p className="resultText">Result Available</p>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </BuyerSelectionMainDiv>
      <Footer />
    </>
  );
};

export default BuyerSelection;
