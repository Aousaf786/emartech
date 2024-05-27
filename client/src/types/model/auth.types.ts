import { User } from "./user.types";

// export interface IAuth {
//   user: User;
//   token?: string;
//   // is_admin: boolean;
// }

export type IAuth = User;
export interface IEmailActivation {
  activation_key: string;
}

export interface IForgotPassword {
  email: string;
}

// export interface IResetPassword {
//   token: string;
//   password: string;
//   confirm_password: string;
// }

export interface ILoginUser {
  email: string;
  password: string;
  // remember: boolean;
}

export interface IRegisterUser {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}
