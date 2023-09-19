import { API } from "../service/http-common";
import { AxiosRequestConfig } from "axios";

interface HandleInsertActionProps {
  url: string;
  data?: object;
  token?: string;
  type?: string;
}

export const handleInsertAction = ({
  url,
  data,
  token,
  type = "application/json",
}: HandleInsertActionProps) => {
  return new Promise(async (resolve, reject) => {
    try {
      const config: AxiosRequestConfig = {
        method: "POST",
        url,
        data,
        headers: {
          "Content-Type": type,
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await API(config);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

interface HandleFetchActionProps {
  url: string;
  token?: string;
}

export const handleFetchAction = ({ url, token }: HandleFetchActionProps) => {
  return new Promise(async (resolve, reject) => {
    try {
      const config: AxiosRequestConfig = {
        method: "GET",
        url,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await API(config);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
