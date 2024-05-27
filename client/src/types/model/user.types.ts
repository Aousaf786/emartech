export interface User {
  id: number;
  firstName: string | null;
  lastName: string | null;
  email: string;
  country: string;
  countryCode: number;
  phoneNumber: string;
  role: string;
}

// export interface IPersonalInfo {
//   first_name: string;
//   last_name: string;
//   email: string;
//   user_id?: number | string;
// }

// export interface IChangePassword {
//   old_password: string;
//   new_password: string;
//   confirm_password: string;
// }

// export interface ITableUser {
//   id: string | number;
//   first_name: string;
//   last_name: string;
//   email: string;
//   image: string | null;
//   avatar?: JSX.Element;
//   is_active: boolean;
//   status?: JSX.Element;
// }
