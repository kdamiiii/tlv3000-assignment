export const API = process.env.NEXT_PUBLIC_API_URL ?? "localhost";
export const KEY = process.env.NEXT_PUBLIC_API_KEY ?? "sample_key";

export const DEFAULT_FETCH_OPTIONS: RequestInit = {
  method: "GET",
};
