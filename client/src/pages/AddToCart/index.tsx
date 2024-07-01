import { FC } from "react";
import { Box, Button, Container, Grid, TextField, styled } from "@mui/material";
import { Footer, Header } from "@/components/landingPageComp";
import SimpleProduct from "../../assets/images/simple-product.png";
import DeleteIcon from "@mui/icons-material/Delete";

const AddToCartMain = styled(Box)(({ theme }: any) => ({
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
}));

const AddtoCart: FC = () => {
  return (
    <>
      <Header />
      <AddToCartMain>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} lg={8}>
              <Box
                sx={{
                  border: "1px solid #000000",
                  padding: "1rem",
                  width: "100%",
                }}
              >
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    sx={{
                      "& img": {
                        width: "100%",
                        objectFit: "cover",
                      },
                    }}
                  >
                    <img src={SimpleProduct} />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={8}
                    sx={{
                      "& h1": {
                        fontSize: "24px",
                        fontWeight: " 500",
                        color: "black",
                        paddingBottom: "2rem",
                      },
                    }}
                  >
                    <h1>
                      13mm Hammer Drilling Machine Multi Functional Electric
                      Drill Machine Drill Screw Driver Option Reverse Forward
                      Slow Fast
                    </h1>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingBottom: "5rem",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1.5rem",
                          "& .quantity": {
                            fontSize: "15.03px",
                            fontWeight: "400",
                            color: "#999999",
                          },
                          "& p": {
                            margin: "unset",
                          },
                          "& .quantitNumbery": {
                            fontSize: "15.03px",
                            fontWeight: "400",
                            color: "black",
                          },
                        }}
                      >
                        <p className="quantity">Quantity</p>
                        <Button
                          sx={{
                            minWidth: "28px",
                            width: "28px",
                            height: "28px",
                            background: " rgba(217, 217, 217, 1)",
                            fontSize: "15.03px",
                            fontWeight: "400",
                            color: "rgba(0, 0, 0, 0.5)",
                            border: "none",
                            padding: "0px",
                            "&:hover": {
                              background: " rgba(217, 217, 217, 1)",
                            },
                            margin: "unset",
                          }}
                        >
                          -
                        </Button>
                        <p className="quantitNumbery">2</p>
                        <Button
                          sx={{
                            minWidth: "28px",
                            width: "28px",
                            height: "28px",
                            background: " rgba(217, 217, 217, 1)",
                            fontSize: "15.03px",
                            fontWeight: "400",
                            color: "rgba(0, 0, 0, 0.5)",
                            border: "none",
                            padding: "0px",
                            "&:hover": {
                              background: " rgba(217, 217, 217, 1)",
                            },
                            margin: "unset",
                          }}
                        >
                          +
                        </Button>
                      </Box>
                      <DeleteIcon
                        sx={{
                          color: "black",
                          cursor: "pointer",
                          fontSize: "25px",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <h1>Total Item</h1>
                      <h1>AED 30.00</h1>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              lg={4}
              sx={{
                "& h2": {
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "black",
                },
                "& .specialInstructions": {
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "black",
                  marginBottom: "1rem",
                },
              }}
            >
              <h2>Order Notes</h2>
              <TextField
                type="text"
                multiline
                rows={5}
                sx={{
                  "& .MuiOutlinedInput-root ": {
                    margin: "unset",
                    borderRadius: "20px",
                    border: "1px solid rgba(0, 0, 0, 1)",
                    marginBottom: "1rem",
                  },
                }}
              />
              <p className="specialInstructions">
                PLEASE LEAVE SPECIAL INSTRUCTIONS ABOVE
              </p>
              <hr style={{ borderColor: "black", opacity: "0.5" }} />
              <Box
                sx={{
                  paddingTop: "2rem",
                  paddingBottom: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  "& h1": {
                    fontSize: "24px",
                    fontWeight: " 500",
                    color: "black",
                    margin: "unset",
                  },
                }}
              >
                <h1>Subtotal</h1>
                <h1>AED 30.00</h1>
              </Box>
              <p className="specialInstructions">
                Taxes and shipping calculated at checkout
              </p>
              <Box
                sx={{
                  paddingTop: "3rem",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Button
                  sx={{
                    width: "80%",
                    fontSize: "15.02px",
                    fontWeight: "600",
                    color: "white",
                    background: "#38C64E",
                    borderRadius: "0px",
                    border: "none",
                    "&:hover": {
                      background: "#38C64E",
                    },
                  }}
                >
                  Continue Shopping
                </Button>
                <Button
                  sx={{
                    width: "80%",
                    fontSize: "15.02px",
                    fontWeight: "600",
                    color: "white",
                    background: "#38C64E",
                    borderRadius: "0px",
                    border: "none",
                    "&:hover": {
                      background: "#38C64E",
                    },
                  }}
                >
                  Checkout
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </AddToCartMain>
      <Footer />
    </>
  );
};

export default AddtoCart;
