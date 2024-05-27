import { Error } from "@/types/general";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export function isBadRequest(error: Error): error is FetchBaseQueryError {
  return error !== undefined && "data" in error && error.status === 400;
}

export function isUnexpectedError(error: Error): error is FetchBaseQueryError {
  return error !== undefined && "data" in error && error.status >= 500;
}
