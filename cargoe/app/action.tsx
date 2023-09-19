"use client";
import Cookies from "js-cookie";
export const hasPermission = async () => {
  const hasCookiePermission = Cookies.get("permission");
  return Boolean(hasCookiePermission);
};

export const handleAcceptPermission = () => {
  Cookies.set("permission", "allowed");
};

export const handleRejectPermission = () => {
  Cookies.set("permission", "denied");
};
