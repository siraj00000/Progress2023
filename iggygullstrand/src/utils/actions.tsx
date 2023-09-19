import { TopbarTitleTypes } from "../types/index.types";

export function getToken(): string | null {
  return sessionStorage.getItem("tirformtoken");
}

export const saveAuthSession = () => {
  sessionStorage.setItem("triformtoken", "temp");
  document.location.href = "/";
};

export const matchTopbarElement = (pathname: string, data: TopbarTitleTypes[]) => {
  for (let index = 0; index < data.length; index++) {
    const { path, title } = data[index];
    if (path === pathname) {
      return title;
    }
  }
};

export const handleLogout = () => {
  sessionStorage.removeItem("triformtoken");
  document.location.href = "/";
}

export function generateRandomData(min: number, max: number, length: number) {
  return [...Array(length)].map(() => Math.floor(Math.random() * (max - min + 1)) + min);
}