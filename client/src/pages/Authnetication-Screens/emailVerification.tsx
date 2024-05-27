import { Link, Typography } from "@mui/material";
import { AuthenticationWrapper } from "./index";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { maskEmailAddress } from "mask-email-address";
import mailIcon from "@/assets/mail-icon.svg";

const EmailVerification: FC = () => {
  const { email } = useParams();
  const maskedEmail = maskEmailAddress(email as string);
  return (
    <AuthenticationWrapper backgroundImageUrl="../../../src/assets/signup.png">
      <Typography className="auth-heading">
        <img src={mailIcon} className="g-icon" />
      </Typography>
      <Typography className="auth-heading">Check Your Inbox!</Typography>
      <Typography className="auth-heading">
        We’ve sent you a reset password link to {maskedEmail}
      </Typography>
      <Typography
        className="input-label text-center"
        variant="body1"
        gutterBottom
      >
        <Link className="link sign-up">Need help?</Link>
      </Typography>
    </AuthenticationWrapper>
  );
};

export default EmailVerification;
