"use client";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

export const AcceptCookieButton = () => {
  const { refresh } = useRouter();
  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);

    const cookie = `permission=allowed; expires=${expirationDate.toUTCString()};`;
    document.cookie = cookie;

    refresh();
  };
  return (
    <button
      onClick={onClick}
      className="bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded"
    >
      Accept All
    </button>
  );
};

export const RejectCookieButton = () => {
  const { refresh } = useRouter();

  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);

    const cookie = `permission=denied; expires=${expirationDate.toUTCString()};`;
    document.cookie = cookie;

    refresh();
  };
  return (
    <button
      onClick={onClick}
      className="bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded"
    >
      Reject All
    </button>
  );
};
