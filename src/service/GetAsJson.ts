import { BASEURL } from "../constants";


export const getDataAsJSON = async (url: string, params: Record<string, string> = {}) => {
    const requestURL = new URL(`${BASEURL}${url}`);
    Object.keys(params).forEach((param) => requestURL.searchParams.append(param, params[param]));
    const result = await fetch(requestURL, { method: 'GET', headers: {} });
    return result.json();
};