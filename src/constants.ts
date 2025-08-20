export const API = process.env.NEXT_PUBLIC_API_URL ?? "localhost";
export const KEY = process.env.NEXT_PUBLIC_API_KEY ?? "sample_key";

export const DEFAULT_FETCH_OPTIONS: RequestInit = {
  method: "GET",
};

export const HTTP_ERROR_MESSAGES: Record<string, string> = {
  "401": "UNAUTHORIZED - Make sure that the provided api key is valid.",
  "404": "Domain not found",
};
