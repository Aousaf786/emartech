import { useEffect } from "react";
import { toast } from "react-toastify";
import { IAPIError } from "@/types/general";
import { isBadRequest, isUnexpectedError } from "@/utils/utility-functions";

function useHandleApiResponse(
  error: Error | any,
  isSuccess?: boolean,
  successMessage?: string
): null {
  useEffect(() => {
    if (isSuccess && successMessage) {
      toast.success(successMessage);
    }
  }, [isSuccess, successMessage]);

  useEffect(() => {
    if (error && !isBadRequest(error) && !isUnexpectedError(error)) {
      toast.error((error as IAPIError).data.message);
    }

    if (isUnexpectedError(error)) {
      toast.error("unexpected_error_occurred");
    }
  }, [error]);

  return null;
}

export default useHandleApiResponse;
