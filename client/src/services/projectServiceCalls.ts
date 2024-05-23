import { serviceCalls } from "./serviceCalls";

export const createProjectService = (payload: any, cb: any) => {
  try {
    serviceCalls.postWithFormData(
      "/auth/projects",
      payload,
      (err: any, response: any) => {
        if (err) {
          cb(err);
        } else {
          cb(null, response);
        }
      }
    );
  } catch (err) {
    console.log(
      "🚀 ~ file: projectServiceCalls.ts:15 ~ createProjectService ~ err:",
      err
    );
  }
};
