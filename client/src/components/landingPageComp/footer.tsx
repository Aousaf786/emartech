import { FC, useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

import { StyledBoxContact } from "./contactUs";
import { StyledBackgroundBox } from "../../styles";
import EmartechWhiteLogo from "@/assets/emartech-logo-white.svg";

const StyledBoxFooter = styled(StyledBoxContact)({
  margin: "0 !important",
  ".content-holder": {
    ".MuiFormLabel-root": {
      color: "#fff",
    },
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
    },
  },
});

const FooterBox = styled(StyledBackgroundBox)({
  margin: "0",
  "&.content-box": {
    display: "block",
  },
  ".sub-heading-text": {
    margin: "10px 0 30px 0",
  },
  "@media(min-width: 768px)": {},
});

const GradientBox = styled(Box)(() => ({
  background: "linear-gradient(to bottom, black, green)",
}));

export const Footer: FC = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    // Here you can implement the logic to submit the email (e.g., send it to your backend)
    console.log("Email submitted:", email);
    // Clear the email field after submission
    setEmail("");
  };
  return (
    <GradientBox>
      <FooterBox className="content-box no-background">
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <img src={EmartechWhiteLogo} />
            <p className="para-text white-color">
              Emartech revolutionizes construction with real-time project and
              supplier insights, a materials and services marketplace, and
              comprehensive support for informed decision-making and project
              success.
            </p>
          </Grid>

          <Grid item xs={12} sm={6} md={3} lg={3}>
            <h4 className="sub-heading-text">
              <span className="line-span-holder">
                <span className="line-span white" />
                <span className="line-span white" />
              </span>
              INFORMATION
            </h4>
            <p className="para-text white-color">ABOUT US</p>
            <p className="para-text white-color">PRIVACY POLICY</p>
            <p className="para-text white-color">FAQ’S</p>
          </Grid>

          <Grid item xs={12} sm={6} md={3} lg={3}>
            <h4 className="sub-heading-text">
              <span className="line-span-holder">
                <span className="line-span white" />
                <span className="line-span white" />
              </span>
              CONTACTS INFO
            </h4>

            <p className="para-text white-color">
              2533 Street Al Imam Saoud Bin Faisal, Hiteen district 13512,
              Riyadh
            </p>
            <p className="para-text white-color">+966 11 232 7775 - Office</p>
            <p className="para-text white-color">Admin@Emarahtech.com</p>
            <Box>
              <img src="Vector.png" style={{ margin: "0 15px 0 0" }} />
              <img src="Vector (1).png" style={{ margin: "0 15px 0 0" }} />
              <img src="Vector (2).png" style={{ margin: "0 15px 0 0" }} />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3} lg={3}>
            <StyledBoxFooter>
              <h4 className="sub-heading-text">
                <span className="line-span-holder">
                  <span className="line-span white" />
                  <span className="line-span white" />
                </span>
                NEWSLETTER
              </h4>
              <p className="para-text white-color">
                ENTER YOUR EMAIL TO RECEIVE DAILY NEWS.
              </p>
              <Box className="content-holder">
                <TextField
                  label="Enter your email"
                  variant="outlined"
                  value={email}
                  onChange={handleEmailChange}
                  fullWidth
                  margin="normal"
                />
                <Button
                  className="para-text white-color auth-btn radius-0"
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Subscribe
                </Button>
              </Box>
            </StyledBoxFooter>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <p className="para-text white-color">
            All rights reserved@ Emartech 2024
          </p>
        </Box>
      </FooterBox>
    </GradientBox>
  );
};
