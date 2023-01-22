import emailInstance from './axiosInstance/emailInstance';


// export const GetEmailDataAsJSON = async<TResult = unknown>(
//     url: string,
//     config: AxiosRequestConfig = {}
// ): Promise<TResult> => {
//     const response = await emailInstance.get<TResult>(url, {
//         ...config,
//         headers: {
//             'Content-Type': 'application/json',
//             ...config.headers,
//         },
//     });
//     return response.data;