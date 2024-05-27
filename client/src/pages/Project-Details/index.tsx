import { FC, useState } from "react";
import { Header } from "../../components/landingPageComp/header";
import { Footer } from "../../components/landingPageComp/footer";
import { Box, Button, Container, Grid, styled } from "@mui/material";
import BreadCrumbs from "../../components/common/breadcrumbs";
import Frame171 from "../../assets/images/Frame17.png";
import PinDropOutlined from "@mui/icons-material/PinDropOutlined";
import AccessTimeOutlined from "@mui/icons-material/AccessTimeOutlined";
import PaymentsOutlined from "@mui/icons-material/PaymentsOutlined";
import UpdateSharp from "@mui/icons-material/UpdateSharp";
import ReactStars from "react-rating-stars-component";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import { useNavigate } from "react-router-dom";

const ProjectDetailsMainDiv = styled(Box)(({ theme }: any) => ({
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
  "& .projectDescriptionBox": {
    width: "100%",
    marginTop: "3rem",
    paddingBottom: "3rem",
    "& span": {
      color: theme.palette.common.headingLinesGreen,
      textDecoration: "underline",
      cursor: "pointer",
    },
    "& .projectTitleImg": {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingBottom: "2rem",
      "& h2": {
        color: "rgba(20, 20, 20, 1)",
        margin: "unset",
        fontWeight: "700",
      },
      "& .projectImageDiv": {
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        "& img": {
          width: "55px",
          height: "55px",
        },
        "& h4": {
          margin: "unset",
          color: "rgba(20, 20, 20, 1)",
        },
      },
    },
  },
  "& .dependenciesContainer": {
    paddingBottom: "3rem",
    "& .iconDetails": {
      paddingTop: "2rem",
      paddingBottom: "2rem",
      width: "100%",
      "& .icondetailinner": {
        display: "flex",
        gap: "0.5rem",
        "& svg": {
          marginTop: "0px",
          width: "17px",
          height: "21px",
        },
        "& .title": {
          color: "#141414",
          fontSize: "14px",
          fontWeight: " 700",
          marginBottom: "unset",
        },
        "& .subText": {
          color: "rgba(20, 20, 20, 0.7)",
          fontSize: "16px",
          fontWeight: " 400",
          margin: "unset",
        },
      },
    },
  },
  "& .projectDescriptionTags": {
    "& h2": {
      color: "rgba(20, 20, 20, 1)",
      margin: "unset",
      fontWeight: "700",
      paddingBottom: "2rem",
    },
    "& .skillBoxContainer": {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "1rem",
      paddingBottom: "3rem",
      "& .skillTagDiv": {
        background: "#F6F6F6",
        width: "fit-content",
        padding: "10px 20px 10px 20px",
        borderRadius: "100px",
        color: "#ADADAD",
      },
    },
  },
  "& .projectInformation": {
    paddingBottom: "3rem",
    "& h2": {
      color: "rgba(20, 20, 20, 1)",
      margin: "unset",
      fontWeight: "700",
      paddingBottom: "2rem",
    },
    "& p": {
      fontSIze: "14px",
      fontWeight: "500",
      color: "rgba(20, 20, 20, 1)",
      margin: "unset",
      paddingBottom: "1rem",
      "& span": {
        color: " rgba(20, 20, 20, 0.7)",
        fontWeight: "400",
        margin: "unset",
      },
    },
  },
  "& .customerHistory": {
    paddingBottom: "3rem",
    "& .headdingDiv": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingBottom: "3rem",
      "& h2": {
        color: "rgba(20, 20, 20, 1)",
        margin: "unset",
        fontWeight: "700",
      },
      "& .starsContainer": {
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        "& span": {
          pointerEvents: "none",
        },
        "& p": {
          margin: "unset",
          fontSize: "20px",
          fontWeight: "700",
        },
      },
    },
    "& .feedBackMain": {
      paddingBottom: "3rem",
      "& .feedbackImgContainner": {
        display: "flex",
        alignItems: "center",
        gap: "0.8rem",
        paddingBottom: "1rem",
        "& img": {
          width: "64px",
          height: "64px",
          borderRadius: "50%",
        },
        "& .title": {
          color: "#141414",
          fontSize: "16px",
          fontWeight: " 700",
          marginBottom: "unset",
        },
        "& .subtitletexts": {
          fontSize: "13px",
          color: "#000000",
          margin: "unset",
        },
      },
      "& p": {
        fontSize: "13px",
        color: "#000000",
        margin: "unset",
      },
    },
  },
  "& .footerBtns": {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    justifyContent: "end",
    "& button": {
      width: "180px",
      "& svg": {
        margin: "unset",
      },
    },
    "& .submitBtn": {
      backgroundColor: theme.palette.common.headingLinesGreen,
      borderColor: theme.palette.common.headingLinesGreen,
    },
  },
}));

const ProjectDetails: FC = () => {
  const navigate = useNavigate();
  const [readMore, setReadMore] = useState(false);

  const description =
    "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text as much as i like it.";
  const skills = [
    "executor",
    "Project executor",
    "building",
    "Company",
    "UAE",
    "Construction",
    "Building",
    "Construction",
    "UAE",
  ];
  return (
    <>
      <Header />
      <ProjectDetailsMainDiv>
        <BreadCrumbs
          data={[
            { link: "/projectDetails/1", text: "Home" },
            { link: "/projectDetails/1", text: "Projects" },
          ]}
        />
        <Container maxWidth="xl" sx={{ marginTop: "4rem" }}>
          <h1 className="auth-heading">
            Project <span className="headingSpanColor"> Details </span>
          </h1>
          <p className="para-text">
            Please check all the details before submitting your Bid!
          </p>
          <Box className="projectDescriptionBox">
            <Box className="projectTitleImg">
              <h2>Need Project Executor</h2>
              <Box className="projectImageDiv">
                <img src={Frame171} alt="project image" />
                <h4>Hunar company</h4>
              </Box>
            </Box>
            <p className="para-text">
              {description.length >= 397 && !readMore
                ? description.slice(0, 397) + "..."
                : description}{" "}
              {description.length >= 397 && (
                <span onClick={() => setReadMore(!readMore)}>
                  {readMore ? "see less" : "see more"}
                </span>
              )}
            </p>
          </Box>
          <Grid className="dependenciesContainer" container spacing={3}>
            <Grid item xs={6} md={3}>
              <Box
                className="iconDetails"
                sx={{ borderRight: "1px solid  rgba(0, 0, 0, 0.7)" }}
              >
                <Box className="icondetailinner">
                  <PinDropOutlined />
                  <Box>
                    <p className="title">Location</p>
                    <p className="subText">Sharjah, UAE</p>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box
                className="iconDetails"
                sx={{
                  borderRight: "1px solid  rgba(0, 0, 0, 0.7)",
                  "@media (max-width:900px)": {
                    border: "none !important",
                  },
                }}
              >
                <Box className="icondetailinner">
                  <AccessTimeOutlined />
                  <Box>
                    <p className="title">Duration</p>
                    <p className="subText">2 Months</p>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box
                className="iconDetails"
                sx={{ borderRight: "1px solid  rgba(0, 0, 0, 0.7)" }}
              >
                <Box className="icondetailinner">
                  <PaymentsOutlined />
                  <Box>
                    <p className="title">Budget</p>
                    <p className="subText">50k-55k AED</p>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box className="iconDetails">
                <Box className="icondetailinner">
                  <UpdateSharp />
                  <Box>
                    <p className="title">Posted Time</p>
                    <p className="subText">29 min ago</p>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box className="projectDescriptionTags">
            <h2>Selected Tags</h2>
            <Box className="skillBoxContainer">
              {skills?.length &&
                skills?.map((item: any, index: number) => (
                  <Box key={item + index} className="skillTagDiv">
                    {item}
                  </Box>
                ))}
            </Box>
          </Box>
          <Box className="projectInformation">
            <h2>Information</h2>
            <Grid container>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <p>
                  Recruiter: <span>27 minutes ago online</span>
                </p>
                <p>
                  Viewed proposals: <span>2</span>
                </p>
                <p>
                  Submitted proposals: <span>10</span>
                </p>
                <p>
                  Previous jobs: <span>40</span>
                </p>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <p>
                  Spend on Emartech: <span>AED 90K</span>
                </p>
                <p>
                  Status: <span>Verified</span>
                </p>
                <p>
                  Closed Date: <span>20 May, 2024</span>
                </p>
              </Grid>
            </Grid>
          </Box>
          <Box className="customerHistory">
            <Box className="headdingDiv">
              <h2>Client’s History</h2>
              <Box className="starsContainer">
                <ReactStars
                  count={5}
                  // onChange={ratingChanged}
                  size={34}
                  activeColor="#F1BB11"
                  value={5}
                />
                <p>4.9 (40)</p>
              </Box>
            </Box>
            {["", "", "", ""].map((item) => (
              <Box className="feedBackMain">
                <Box className="feedbackImgContainner">
                  <img src={Frame171} alt="bidder image" />
                  <Box>
                    <p className="title">Arslan Waheed</p>
                    <p className="subtitletexts">10-09-2001</p>
                  </Box>
                </Box>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </Box>
            ))}
          </Box>
          <Box className="footerBtns">
            <Button
              startIcon={<FavoriteBorderOutlined />}
              type="button"
              variant="outlined"
              color="inherit"
            >
              Save Job
            </Button>
            <Button
              startIcon={
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.66699 16.333H8.34532L19.7145 4.96381C20.2015 4.47562 20.475 3.81421 20.475 3.12464C20.475 2.43508 20.2015 1.77367 19.7145 1.28548C19.2192 0.812055 18.5605 0.547852 17.8753 0.547852C17.1902 0.547852 16.5314 0.812055 16.0362 1.28548L4.66699 12.6546V16.333ZM6.33366 13.3446L17.2145 2.46381C17.3925 2.29377 17.6292 2.19889 17.8753 2.19889C18.1215 2.19889 18.3582 2.29377 18.5362 2.46381C18.7111 2.63924 18.8094 2.87689 18.8094 3.12464C18.8094 3.3724 18.7111 3.61005 18.5362 3.78548L7.65533 14.6663H6.33366V13.3446Z"
                    fill="white"
                  />
                  <path
                    d="M20.1842 6.85167L18.8333 8.2025V13.8333H13.8333V18.8333H2.16667V3C2.16667 2.77899 2.25446 2.56702 2.41074 2.41074C2.56702 2.25446 2.77899 2.16667 3 2.16667H12.7983L14.1492 0.815833C14.2708 0.70302 14.3991 0.597555 14.5333 0.5L3 0.5C2.33696 0.5 1.70107 0.763392 1.23223 1.23223C0.763392 1.70107 0.5 2.33696 0.5 3L0.5 20.5H15.845L20.5 15.845V6.4675C20.4022 6.60155 20.2968 6.72982 20.1842 6.85167ZM15.5 18.4883V15.5H18.4883L15.5 18.4883Z"
                    fill="white"
                  />
                </svg>
              }
              onClick={() => navigate("/projectDetails/3/proposalSubmission")}
              type="button"
              variant="contained"
              className="submitBtn"
            >
              Apply Now
            </Button>
          </Box>
        </Container>
      </ProjectDetailsMainDiv>
      <Footer />
    </>
  );
};

export default ProjectDetails;
