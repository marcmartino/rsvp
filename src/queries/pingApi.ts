import { PING_URL } from "./constants";

export const pingApi = () => fetch(PING_URL);
