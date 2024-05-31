import { FC, useState } from "react";
import { Header } from "../../components/landingPageComp/header";
import { Footer } from "../../components/landingPageComp/footer";
import { Box, Button, Container, Grid, styled } from "@mui/material";
import BreadCrumbs from "../../components/common/breadcrumbs";
import UserDetailsHeroImg from "../../assets/images/userDetailsHeroImg.png";
import UserImg from "../../assets/images/Ellipse.png";
import Frame171 from "../../assets/images/Rectangle4771.png";
import { UserFeedbackSlider } from "./SliderDetails";

const SupplierDetailsMainDiv = styled(Box)(({ theme }: any) => ({
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
    fontSize: "25px",
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
}));

const SupplierDetails: FC = () => {
  return (
    <>
      <Header />
      <SupplierDetailsMainDiv>
        <BreadCrumbs
          data={[
            { link: "/supplierDetails/1", text: "Home" },
            { link: "/supplierDetails/1", text: "Base Profile" },
          ]}
        />
        <Container maxWidth="xl" sx={{ marginTop: "1rem" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
              <Box
                sx={{
                  width: "100%",
                  border: "1.13px solid #E0DFDC",
                  borderRadius: "6.76px",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    "& .heroImg": {
                      width: "100%",
                      objectFit: "cover",
                      height: "17rem",
                      borderTopLeftRadius: "6.76px",
                      borderTopRightRadius: "6.76px",
                      mt: "-1px",
                    },
                  }}
                >
                  <img className="heroImg" src={UserDetailsHeroImg} />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "-20%",
                      left: "2rem",
                      zIndex: "1",
                      border: "4.51px solid #FFFFFF",
                      borderRadius: "50%",
                      height: "200px",
                      width: "200px",
                      img: {
                        borderRadius: "50%",
                        width: "100%",
                        height: "100%",
                      },
                    }}
                  >
                    <img src={UserImg} />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                    gap: "1rem",
                    paddingRight: "1.5rem",
                    paddingTop: "10px",
                  }}
                >
                  <Button
                    variant="outlined"
                    startIcon={
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_835_3798)">
                          <path
                            d="M12.4375 0.619397L4.30951 8.7474C3.99907 9.05616 3.75296 9.42344 3.58543 9.82796C3.4179 10.2325 3.33227 10.6662 3.33351 11.1041V11.9994C3.33351 12.1762 3.40375 12.3458 3.52877 12.4708C3.6538 12.5958 3.82336 12.6661 4.00018 12.6661H4.89551C5.33335 12.6673 5.76709 12.5817 6.17161 12.4141C6.57614 12.2466 6.94341 12.0005 7.25218 11.6901L15.3802 3.56206C15.7698 3.17151 15.9886 2.64238 15.9886 2.09073C15.9886 1.53908 15.7698 1.00995 15.3802 0.619397C14.984 0.24066 14.457 0.0292969 13.9088 0.0292969C13.3607 0.0292969 12.8337 0.24066 12.4375 0.619397ZM14.4375 2.6194L6.30951 10.7474C5.93359 11.121 5.42551 11.3313 4.89551 11.3327H4.66684V11.1041C4.66823 10.5741 4.87855 10.066 5.25218 9.69006L13.3802 1.56206C13.5226 1.42603 13.7119 1.35013 13.9088 1.35013C14.1058 1.35013 14.2951 1.42603 14.4375 1.56206C14.5775 1.70241 14.6561 1.89252 14.6561 2.09073C14.6561 2.28894 14.5775 2.47905 14.4375 2.6194Z"
                            fill="black"
                          />
                          <path
                            d="M15.3333 5.986C15.1565 5.986 14.987 6.05624 14.8619 6.18126C14.7369 6.30629 14.6667 6.47586 14.6667 6.65267V10H12C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12V14.6667H3.33333C2.8029 14.6667 2.29419 14.456 1.91912 14.0809C1.54405 13.7058 1.33333 13.1971 1.33333 12.6667V3.33333C1.33333 2.8029 1.54405 2.29419 1.91912 1.91912C2.29419 1.54405 2.8029 1.33333 3.33333 1.33333H9.36133C9.53815 1.33333 9.70771 1.2631 9.83274 1.13807C9.95776 1.01305 10.028 0.843478 10.028 0.666667C10.028 0.489856 9.95776 0.320286 9.83274 0.195262C9.70771 0.0702379 9.53815 0 9.36133 0L3.33333 0C2.4496 0.00105857 1.60237 0.352588 0.97748 0.97748C0.352588 1.60237 0.00105857 2.4496 0 3.33333L0 12.6667C0.00105857 13.5504 0.352588 14.3976 0.97748 15.0225C1.60237 15.6474 2.4496 15.9989 3.33333 16H10.8953C11.3333 16.0013 11.7671 15.9156 12.1718 15.7481C12.5764 15.5806 12.9438 15.3345 13.2527 15.024L15.0233 13.252C15.3338 12.9432 15.58 12.576 15.7477 12.1715C15.9153 11.767 16.0011 11.3332 16 10.8953V6.65267C16 6.47586 15.9298 6.30629 15.8047 6.18126C15.6797 6.05624 15.5101 5.986 15.3333 5.986ZM12.31 14.0813C12.042 14.3487 11.7031 14.5337 11.3333 14.6147V12C11.3333 11.8232 11.4036 11.6536 11.5286 11.5286C11.6536 11.4036 11.8232 11.3333 12 11.3333H14.6167C14.5342 11.7023 14.3493 12.0406 14.0833 12.3093L12.31 14.0813Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_835_3798">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    }
                    sx={{
                      border: "1px solid #000000",
                      fontSize: "15px",
                      fontWeight: "600",
                      width: "188px",
                      borderRadius: "18.19px",
                      paddingTop: "0.3rem",
                      paddingBottom: "0.3rem",
                      color: "black",
                      "&:hover": {
                        border: "1px solid #000000",
                      },
                    }}
                  >
                    Edit Profile
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      border: "1px solid #39C64E",
                      fontSize: "15px",
                      fontWeight: "600",
                      width: "188px",
                      borderRadius: "18.19px",
                      paddingTop: "0.3rem",
                      paddingBottom: "0.3rem",
                      color: "#39C64E",
                      "&:hover": {
                        border: "1px solid #39C64E",
                      },
                    }}
                  >
                    Send a message
                  </Button>
                </Box>
                <Box
                  sx={{
                    padding: "3rem",
                    "& p": {
                      color: "#181818",
                      margin: "unset",
                    },
                    "& .descriptionText": {
                      width: "50%",
                      paddingTop: "1.5rem",
                      "@media (max-width:800px)": {
                        width: "100%",
                      },
                    },
                  }}
                >
                  <h1 className="auth-heading">Courtney Henry</h1>
                  <p>Project Executor</p>
                  <p className="descriptionText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    dapibus eros eu vehicula interdum.
                  </p>
                  <Grid
                    container
                    spacing={2}
                    sx={{ marginTop: "1rem", paddingBottom: "2rem" }}
                  >
                    <Grid item xs={6} sm={3}>
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          paddingTop: "3rem",
                          border: "0.94px solid #E6E6E6",
                          borderRadius: "4.69px",
                          paddingBottom: "1rem",
                          "& h1": {
                            fontWeight: "700",
                            color: "#39C64E",
                            fontSize: "50px",
                          },
                          "& p": {
                            color: "#1A1A1A",
                            fontSize: "17px",
                            paddingTop: "10px",
                            textAlign: "center",
                          },
                        }}
                      >
                        <h1>68</h1>
                        <p>
                          Completed
                          <br />
                          Projects
                        </p>
                      </Box>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          paddingTop: "3rem",
                          border: "0.94px solid #E6E6E6",
                          borderRadius: "4.69px",
                          paddingBottom: "1rem",
                          "& h1": {
                            fontWeight: "700",
                            color: "#39C64E",
                            fontSize: "50px",
                          },
                          "& p": {
                            color: "#1A1A1A",
                            fontSize: "17px",
                            paddingTop: "10px",
                            textAlign: "center",
                          },
                        }}
                      >
                        <h1>9</h1>
                        <p>
                          Ongoing
                          <br />
                          Projects
                        </p>
                      </Box>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          paddingTop: "3rem",
                          border: "0.94px solid #E6E6E6",
                          borderRadius: "4.69px",
                          paddingBottom: "1rem",
                          "& h1": {
                            fontWeight: "700",
                            color: "#39C64E",
                            fontSize: "50px",
                          },
                          "& p": {
                            color: "#1A1A1A",
                            fontSize: "17px",
                            paddingTop: "10px",
                            textAlign: "center",
                          },
                        }}
                      >
                        <h1>16</h1>
                        <p>Recommendations</p>
                      </Box>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          paddingTop: "3rem",
                          border: "0.94px solid #E6E6E6",
                          borderRadius: "4.69px",
                          paddingBottom: "1rem",
                          "& h1": {
                            fontWeight: "700",
                            color: "#39C64E",
                            fontSize: "50px",
                          },
                          "& p": {
                            color: "#1A1A1A",
                            fontSize: "17px",
                            paddingTop: "10px",
                            textAlign: "center",
                          },
                        }}
                      >
                        <h1>5</h1>
                        <p>Rating</p>
                      </Box>
                    </Grid>
                  </Grid>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        border: "1px solid #39C64E",
                        background: "#39C64E",
                        fontSize: "15px",
                        fontWeight: "600",
                        width: "210px",
                        borderRadius: "18.19px",
                        paddingTop: "0.3rem",
                        paddingBottom: "0.3rem",
                        color: "white",
                        "&:hover": {
                          border: "1px solid #39C64E",
                          background: "#39C64E",
                        },
                      }}
                    >
                      Send a message
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        border: "1px solid #000000",
                        fontSize: "15px",
                        fontWeight: "600",
                        width: "80px",
                        borderRadius: "18.19px",
                        paddingTop: "0.3rem",
                        paddingBottom: "0.3rem",
                        color: "black",
                        "&:hover": {
                          border: "1px solid #000000",
                        },
                      }}
                    >
                      More
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        justifyContent: "space-between",
                        paddingRight: "10px",
                        paddingLeft: "4px",
                        display: "flex",
                        alignItems: "center",
                        border: "1px solid #1F2732",
                        background: "#1F2732",
                        fontSize: "15px",
                        fontWeight: "600",
                        width: "110px",
                        borderRadius: "18.19px",
                        paddingTop: "0.3rem",
                        paddingBottom: "0.3rem",
                        color: "white",
                        "&:hover": {
                          border: "1px solid #1F2732",
                          background: "#1F2732",
                        },
                      }}
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="14.2269"
                          cy="13.5506"
                          r="13.5193"
                          fill="white"
                        />
                        <path
                          d="M12.655 19.3502C12.0945 19.3502 11.534 19.1204 11.0915 18.6281L8.17093 15.4115C7.31542 14.4597 7.31542 12.8842 8.17093 11.9324C9.02645 10.9805 10.4425 10.9805 11.298 11.9324L12.714 13.5078L17.4636 8.65015C18.3486 7.73113 19.7646 7.79677 20.5906 8.78144C21.4167 9.7661 21.3577 11.3416 20.4726 12.2606L14.189 18.7266C13.717 19.1204 13.186 19.3502 12.655 19.3502Z"
                          fill="#1F2732"
                        />
                      </svg>
                      Verified
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  width: "100%",
                  borderTopRightRadius: "5.55px",
                  borderTopLeftRadius: "5.55px",
                  border: "0.93px solid #E0DFDC",
                  padding: "1.5rem",
                  "& .otherText": {
                    color: "#181818",
                    fontSize: "16px",
                    fontWeight: "500",
                    margin: "unset",
                  },
                }}
              >
                <p className="otherText">Other</p>
                <Box
                  sx={{
                    display: "flex",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    borderBottom: "0.93px solid #EBEBEB",
                    gap: "0.5rem",
                    "& img": {
                      width: "51.38px",
                      height: "51.38px",
                      borderRadius: "50%",
                    },
                    "& .titleTxt": {
                      fontSize: "12.95px",
                      fontWeight: "400",
                      color: "#181818",
                      margin: "unset",
                    },
                    "& .subtitleTxt": {
                      fontSize: "9.25px",
                      fontWeight: "500",
                      color: "#181818",
                      margin: "unset",
                    },
                  }}
                >
                  <img src={UserImg} />
                  <Box sx={{ paddingTop: "9px" }}>
                    <p className="titleTxt">Marie Clark</p>
                    <p className="subtitleTxt">User information</p>
                    <Button
                      variant="outlined"
                      sx={{
                        border: "1px solid #666666",
                        fontSize: "12.95px",
                        fontWeight: "600",
                        width: "152.09px",
                        borderRadius: "18.19px",
                        paddingTop: "0.3rem",
                        paddingBottom: "0.3rem",
                        color: "#666666",
                        "&:hover": {
                          border: "1px solid #666666",
                        },
                      }}
                    >
                      Send a message
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    borderBottom: "0.93px solid #EBEBEB",
                    gap: "0.5rem",
                    "& img": {
                      width: "51.38px",
                      height: "51.38px",
                      borderRadius: "50%",
                    },
                    "& .titleTxt": {
                      fontSize: "12.95px",
                      fontWeight: "400",
                      color: "#181818",
                      margin: "unset",
                    },
                    "& .subtitleTxt": {
                      fontSize: "9.25px",
                      fontWeight: "500",
                      color: "#181818",
                      margin: "unset",
                    },
                  }}
                >
                  <img src={UserImg} />
                  <Box sx={{ paddingTop: "9px" }}>
                    <p className="titleTxt">Marie Clark</p>
                    <p className="subtitleTxt">User information</p>
                    <Button
                      variant="outlined"
                      sx={{
                        border: "1px solid #666666",
                        fontSize: "12.95px",
                        fontWeight: "600",
                        width: "152.09px",
                        borderRadius: "18.19px",
                        paddingTop: "0.3rem",
                        paddingBottom: "0.3rem",
                        color: "#666666",
                        "&:hover": {
                          border: "1px solid #666666",
                        },
                      }}
                    >
                      Send a message
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    borderBottom: "0.93px solid #EBEBEB",
                    gap: "0.5rem",
                    "& img": {
                      width: "51.38px",
                      height: "51.38px",
                      borderRadius: "50%",
                    },
                    "& .titleTxt": {
                      fontSize: "12.95px",
                      fontWeight: "400",
                      color: "#181818",
                      margin: "unset",
                    },
                    "& .subtitleTxt": {
                      fontSize: "9.25px",
                      fontWeight: "500",
                      color: "#181818",
                      margin: "unset",
                    },
                  }}
                >
                  <img src={UserImg} />
                  <Box sx={{ paddingTop: "9px" }}>
                    <p className="titleTxt">Marie Clark</p>
                    <p className="subtitleTxt">User information</p>
                    <Button
                      variant="outlined"
                      sx={{
                        border: "1px solid #666666",
                        fontSize: "12.95px",
                        fontWeight: "600",
                        width: "152.09px",
                        borderRadius: "18.19px",
                        paddingTop: "0.3rem",
                        paddingBottom: "0.3rem",
                        color: "#666666",
                        "&:hover": {
                          border: "1px solid #666666",
                        },
                      }}
                    >
                      Send a message
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    borderBottom: "0.93px solid #EBEBEB",
                    gap: "0.5rem",
                    "& img": {
                      width: "51.38px",
                      height: "51.38px",
                      borderRadius: "50%",
                    },
                    "& .titleTxt": {
                      fontSize: "12.95px",
                      fontWeight: "400",
                      color: "#181818",
                      margin: "unset",
                    },
                    "& .subtitleTxt": {
                      fontSize: "9.25px",
                      fontWeight: "500",
                      color: "#181818",
                      margin: "unset",
                    },
                  }}
                >
                  <img src={UserImg} />
                  <Box sx={{ paddingTop: "9px" }}>
                    <p className="titleTxt">Marie Clark</p>
                    <p className="subtitleTxt">User information</p>
                    <Button
                      variant="outlined"
                      sx={{
                        border: "1px solid #666666",
                        fontSize: "12.95px",
                        fontWeight: "600",
                        width: "152.09px",
                        borderRadius: "18.19px",
                        paddingTop: "0.3rem",
                        paddingBottom: "0.3rem",
                        color: "#666666",
                        "&:hover": {
                          border: "1px solid #666666",
                        },
                      }}
                    >
                      Send a message
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    borderBottom: "0.93px solid #EBEBEB",
                    gap: "0.5rem",
                    "& img": {
                      width: "51.38px",
                      height: "51.38px",
                      borderRadius: "50%",
                    },
                    "& .titleTxt": {
                      fontSize: "12.95px",
                      fontWeight: "400",
                      color: "#181818",
                      margin: "unset",
                    },
                    "& .subtitleTxt": {
                      fontSize: "9.25px",
                      fontWeight: "500",
                      color: "#181818",
                      margin: "unset",
                    },
                  }}
                >
                  <img src={UserImg} />
                  <Box sx={{ paddingTop: "9px" }}>
                    <p className="titleTxt">Marie Clark</p>
                    <p className="subtitleTxt">User information</p>
                    <Button
                      variant="outlined"
                      sx={{
                        border: "1px solid #666666",
                        fontSize: "12.95px",
                        fontWeight: "600",
                        width: "152.09px",
                        borderRadius: "18.19px",
                        paddingTop: "0.3rem",
                        paddingBottom: "0.3rem",
                        color: "#666666",
                        "&:hover": {
                          border: "1px solid #666666",
                        },
                      }}
                    >
                      Send a message
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    borderBottom: "0.93px solid #EBEBEB",
                    gap: "0.5rem",
                    "& img": {
                      width: "51.38px",
                      height: "51.38px",
                      borderRadius: "50%",
                    },
                    "& .titleTxt": {
                      fontSize: "12.95px",
                      fontWeight: "400",
                      color: "#181818",
                      margin: "unset",
                    },
                    "& .subtitleTxt": {
                      fontSize: "9.25px",
                      fontWeight: "500",
                      color: "#181818",
                      margin: "unset",
                    },
                  }}
                >
                  <img src={UserImg} />
                  <Box sx={{ paddingTop: "9px" }}>
                    <p className="titleTxt">Marie Clark</p>
                    <p className="subtitleTxt">User information</p>
                    <Button
                      variant="outlined"
                      sx={{
                        border: "1px solid #666666",
                        fontSize: "12.95px",
                        fontWeight: "600",
                        width: "152.09px",
                        borderRadius: "18.19px",
                        paddingTop: "0.3rem",
                        paddingBottom: "0.3rem",
                        color: "#666666",
                        "&:hover": {
                          border: "1px solid #666666",
                        },
                      }}
                    >
                      Send a message
                    </Button>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  borderBottomRightRadius: "5.55px",
                  borderBottomLeftRadius: "5.55px",
                  border: "0.93px solid #E0DFDC",
                  borderTop: "none",
                }}
              >
                <Button
                  variant="text"
                  sx={{
                    border: "none",
                    fontSize: "12.95px",
                    fontWeight: "600",
                    borderRadius: "18.19px",
                    paddingTop: "0.3rem",
                    paddingBottom: "0.3rem",
                    color: "#666666",
                    "& svg": {
                      marginLeft: "5px",
                    },
                  }}
                >
                  Expand
                  <svg
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.776877 1.60252L0.777073 0.205078L6.01068 3.43365L7.30868 4.33858L8.60668 3.43365L13.568 0.205078L13.5684 1.60252L13.568 2.99996L7.30868 7.21667L0.777073 2.99996L0.776877 1.60252Z"
                      fill="#949494"
                    />
                  </svg>
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              width: "100%",
              marginTop: "3rem",
              border: "1.13px solid #E0DFDC",
              borderRadius: "6.76px",
              padding: "1.5rem",
              marginBottom: "3rem",
              "& h1": {
                paddingLeft: "1.5rem",
                paddingBottom: "1.5rem",
                margin: "unset",
                borderBottom: "1px solid #E0DFDC",
              },
            }}
          >
            <h1 className="auth-heading">Work Experience</h1>
            <Box
              sx={{
                paddingLeft: "1.5rem",
                paddingBottom: "1.5rem",
                paddingTop: "48px",
              }}
            >
              {["", "", "", ""].map((item) => (
                <Box className="feedBackMain">
                  <Box
                    className="feedbackImgContainner"
                    sx={{
                      "& img": {
                        borderRadius: "0px !important",
                      },
                    }}
                  >
                    <img src={Frame171} alt="bidder image" />
                    <Box>
                      <p className="title">Alestra Counstruction</p>
                      <p className="subtitletexts">10-09-2003</p>
                    </Box>
                  </Box>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </Box>
              ))}
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="outlined"
                  sx={{
                    border: "1px solid #000000",
                    fontSize: "15px",
                    fontWeight: "600",
                    borderRadius: "8px",
                    color: "black",
                    width: "300px",
                    "&:hover": {
                      border: "1px solid #000000",
                    },
                  }}
                >
                  Load More Projects
                </Button>
              </Box>
            </Box>
          </Box>

          <UserFeedbackSlider />

          <Box
            sx={{
              width: "100%",
              marginTop: "3rem",
              border: "1.13px solid #E0DFDC",
              borderRadius: "6.76px",
              padding: "1.5rem",
              marginBottom: "3rem",
              "& h1": {
                paddingLeft: "1.5rem",
                paddingBottom: "1.5rem",
                margin: "unset",
                borderBottom: "1px solid #E0DFDC",
              },
            }}
          >
            <h1 className="auth-heading">Recommendation</h1>
            <Box
              sx={{
                paddingLeft: "1.5rem",
                paddingBottom: "1.5rem",
                paddingTop: "48px",
              }}
            >
              {["", "", "", ""].map((item) => (
                <Box className="feedBackMain">
                  <Box
                    className="feedbackImgContainner"
                    sx={{
                      "& img": {},
                    }}
                  >
                    <img src={UserImg} alt="bidder image" />
                    <Box>
                      <p className="title">Zubair Khan</p>
                      <p className="subtitletexts">10-09-2003</p>
                    </Box>
                  </Box>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </Box>
              ))}
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="outlined"
                  sx={{
                    border: "1px solid #000000",
                    fontSize: "15px",
                    fontWeight: "600",
                    borderRadius: "8px",
                    color: "black",
                    width: "300px",
                    "&:hover": {
                      border: "1px solid #000000",
                    },
                  }}
                >
                  Load More
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </SupplierDetailsMainDiv>
      <Footer />
    </>
  );
};

export default SupplierDetails;
