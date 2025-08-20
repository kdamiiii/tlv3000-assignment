import { HTTP_ERROR_MESSAGES } from "@/constants";

export const getErrorMessageByStatusCode = (code: string) => {
  return HTTP_ERROR_MESSAGES[code] ?? "An error has Occurred";
};
