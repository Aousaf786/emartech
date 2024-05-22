import { serviceCalls } from "./serviceCalls";

export const proposalService = (payload: any, cb: any) => {
  try {
    serviceCalls.postWithFormData(
      "/auth/proposal",
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
      "🚀 ~ file: proposalServiceCalls.ts:15 ~ createProposalService ~ err:",
      err
    );
  }
};
