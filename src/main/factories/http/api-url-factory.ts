const BASE_URL = "https://reqres.in";
export const makeApiUrl = (path: string): string => `${BASE_URL}${path}`;
