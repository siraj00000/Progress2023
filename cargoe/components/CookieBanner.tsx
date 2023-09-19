import React, { memo } from "react";
import Link from "next/link";
import { AcceptCookieButton, RejectCookieButton } from "./CookieEventButton";

const CookieBanner = async () => {
  return (
    <article className="fixed bottom-0 z-50 w-full p-5 bg-light box-shadow">
      <h1 className="text-24 leading-24 font-nunito700 text-secondary mb-5">
        We value your privacy
      </h1>
      <aside className="grid lg:grid-cols-3 grid-cols-1">
        <p className="col-span-2 text-16 leading-24 font-nunito400 text-secondary">
          We use cookies to enhance your browsing experience, serve personalized
          ads or content, and analyze our traffic. By clicking {"Accept All"},
          you consent to our use of cookies
          <Link
            href={"https://cargoe.io/privacy-policy/"}
            className="ml-5 underline text-primary"
          >
            Cookie Policy
          </Link>
        </p>
        <div className="flex items-center justify-end gap-5 col-span-1">
          <RejectCookieButton />
          <AcceptCookieButton />
        </div>
      </aside>
    </article>
  );
};

export default memo(CookieBanner);
