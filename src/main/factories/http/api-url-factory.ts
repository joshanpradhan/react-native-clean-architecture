import { BASE_URL } from "@main/constants/baseUrl";
export const makeApiUrl = (path: string): string => `${BASE_URL}${path}`;
