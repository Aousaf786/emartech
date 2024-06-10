import { Link, Typography } from "@mui/material";
import { AuthenticationWrapper } from "./index";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { maskEmailAddress } from "mask-email-address";
import mailIcon from "@/assets/mail-icon.svg";

const SuperAdminEmailVerification: FC = () => {
  const { email } = useParams();
  const maskedEmail = maskEmailAddress(email as string);
  return (
    <AuthenticationWrapper backgroundImageUrl="../../../src/assets/signup.png">
      <Typography className="auth-heading">
        <img src={mailIcon} className="g-icon" />
      </Typography>
      <Typography className="auth-heading">Success!!</Typography>
      <Typography className="auth-heading">
        Please check your email ({maskedEmail}) for creating a new password.
      </Typography>
      <Typography
        className="input-label text-center"
        variant="body1"
        gutterBottom
      >
        Can’t get email?{"  "}
        <Link className="link sign-up">Resubmit</Link>
      </Typography>
    </AuthenticationWrapper>
  );
};

export default SuperAdminEmailVerification;
