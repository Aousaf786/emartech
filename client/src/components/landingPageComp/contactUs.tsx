import { FC, useState } from "react";
import { Box, Button, Container, TextField, styled } from "@mui/material";

import { StyledBox } from "./ourServices";
import { StyledBackgroundBox } from "../../styles";

const StyledBackgroundBoxContact = styled(StyledBackgroundBox)({
  minHeight: "48vh",
  "@media(min-width: 480px)": {
    minHeight: "75vh",
  },
  "@media(min-width: 768px)": {
    minHeight: "90vh",
  },
  "@media(min-width: 900px)": {},
  "@media(min-width: 1080px)": {},
  "@media(min-width: 1260px)": {
    minHeight: "100vh",
  },
  "@media(min-width: 1800px)": {},
});

export const StyledBoxContact = styled(StyledBox)({
  ".flex-center.align-start": {
    alignItems: "flex-start",
  },
  ".reverse-child": {
    display: "flex",
    flexDirection: "column",
    ".content-holder": {
      order: "2",
    },
    ".para-text-holder": {
      order: "1",
    },
  },
  ".para-text-holder .para-text.margin-0": {
    marginTop: "0",
    marginBottom: "0",
    "&.mb-30": {
      marginBottom: "30px",
    },
    "&.opacity-50": {
      opacity: "50%",
    },
  },
  ".content-holder": {
    ".MuiTextField-root,.MuiInputBase-root": {
      margin: "0",
      borderRadius: "0",
    },
    ".MuiInputBase-root": {
      marginBottom: "15px",
    },
  },
  ".auth-btn.para-text": {
    margin: "0",
    width: "unset",
  },
  ".auth-btn": {
    padding: "13px 25px",
  },
  "@media(max-width: 767px)": {
    "&.flex-center": {
      marginLeft: "0",
      marginRight: "0",
    },
    ".reverse-child": {
      ".content-holder": {
        maxWidth: "100%",
        width: "100%",
      },
    },
  },
  "@media(min-width: 480px)": {},
  "@media(min-width: 768px)": {
    ".auth-btn": {
      padding: "10px 60px",
    },
    ".reverse-child": {
      flexDirection: "row",
      ".content-holder": {
        order: "1",
      },
      ".para-text-holder": {
        order: "2",
      },
    },
  },
  "@media(min-width: 900px)": {},
  "@media(min-width: 1080px)": {},
  "@media(min-width: 1260px)": {
    ".auth-btn": {
      padding: "15px 40px",
    },
  },
  "@media(min-width: 1800px)": {
    ".auth-btn": {
      padding: "15px 40px",
    },
  },
});

export const ContactUs: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <StyledBoxContact className="flex-center">
      <StyledBackgroundBoxContact
        backgroundImageUrl={"url('Rectangle 1363.jpg')"}
        className="content-box"
      >
        <form onSubmit={handleSubmit}>
          <h4 className="sub-heading-text">
            <span className="line-span-holder">
              <span className="line-span" />
              <span className="line-span" />
            </span>
            CONTACT US
          </h4>

          <Box className="flex-center" sx={{ marginBottom: "30px" }}>
            <Box className="content-holder">
              <h1 className="heading-text">Request A Quote For Your Work</h1>
            </Box>
            <Box className="para-text-holder">
              <p className="para-text">
                Get your construction project off the ground with Emartech's
                tailored solutions. Contact us today to request a personalized
                quote, and let our expert team assist you in achieving your
                project goals efficiently and effectively. Build smarter with
                Emartech.
              </p>
            </Box>
          </Box>

          <Box className="flex-center align-start reverse-child">
            <Box className="content-holder">
              <TextField
                label="Your Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Your Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Your Message"
                variant="outlined"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                fullWidth
                multiline
                rows={4}
                margin="normal"
              />
              <Button
                className="para-text white-color auth-btn radius-0"
                variant="contained"
                type="submit"
              >
                Send Now
              </Button>
            </Box>
            <Box className="para-text-holder">
              <Box
                className="para-text margin-0 mb-30"
                sx={{ display: "flex", alignItems: "flex-start" }}
              >
                <img src="Phone.png" />
                <Container>
                  <h4 className="para-text margin-0">OUR PHONE</h4>
                  <p className="para-text margin-0 opacity-50">
                    +966 11 232 7775
                  </p>
                  {/* <p className="para-text margin-0 opacity-50">
                    +971 456 7890 - Fax
                  </p> */}
                </Container>
              </Box>
              <Box
                className="para-text margin-0 mb-30"
                sx={{ display: "flex", alignItems: "flex-start" }}
              >
                <img src="Email.png" />
                <Container>
                  <h4 className="para-text margin-0">OUR EMAIL</h4>
                  <p className="para-text margin-0 opacity-50">
                    Admin@Emarahtech.com
                  </p>
                  {/* <p className="para-text margin-0 opacity-50">
                    info@gmail.com
                  </p> */}
                </Container>
              </Box>
              <Box
                className="para-text margin-0 mb-30"
                sx={{ display: "flex", alignItems: "flex-start" }}
              >
                <img src="Location on.png" />
                <Container>
                  <h4 className="para-text margin-0">OUR LOCATION</h4>
                  <p className="para-text margin-0 opacity-50">
                    2533 Street Al Imam Saoud Bin Faisal, Hiteen district 13512,
                    Riyadh
                  </p>
                </Container>
              </Box>
            </Box>
          </Box>
        </form>
      </StyledBackgroundBoxContact>
    </StyledBoxContact>
  );
};
