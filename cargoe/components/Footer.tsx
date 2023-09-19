"use client";
import Image from "next/image";
import React from "react";
import CargoLogoFooter from "@/public/CargoLogoFooter.svg";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const navigationLink = [
  {
    name: "Cargo",
    links: [
      {
        name: "Blog",
        link: "/",
      },
      {
        name: "About Us",
        link: "/about-us",
      },
      {
        name: "Brand",
        link: "/",
      },
      {
        name: "Support",
        link: "/",
      },
      {
        name: "Terms",
        link: "https://cargoe.io/terms-of-use/",
      },
      {
        name: "Privacy",
        link: "https://cargoe.io/privacy-policy/",
      },
    ],
  },
  {
    name: "Discover",
    links: [
      { name: "Shop", link: "/" },
      { name: "Fundraisers", link: "/" },
      { name: "Accounts", link: "/" },
    ],
  },
  {
    name: "Learn",
    links: [
      { name: "Pricing", link: "/" },
      { name: "Features", link: "/" },
      { name: "Account Types", link: "/" },
      { name: "Sell resources", link: "/" },
      { name: "Fundraise", link: "/" },
    ],
  },
  {
    name: "Cummunity",
    links: [
      { name: "Facebook", link: "/" },
      { name: "Instagram", link: "/" },
      { name: "Twitter", link: "/" },
      { name: "Pinterest", link: "/" },
      { name: "Invite", link: "/" },
    ],
  },
  {
    name: "Account",
    links: [
      { name: "Sign Up", link: "/" },
      { name: "Login", link: "/" },
      { name: "Dashboard", link: "/" },
      { name: "Purchases", link: "/" },
      { name: "Account", link: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-14 sm:px-6 lg:space-y-16 lg:px-8">
        <aside className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <section>
            <div className="text-teal-600">
              <Image
                src={CargoLogoFooter}
                alt="Logo"
                className="w-auto h-auto object-contain"
                priority
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </section>

          {/* Navigation Links List */}
          <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-5">
            {navigationLink.map((nav, navIndex) => (
              <div key={navIndex}>
                <p className="text16 text-light">{nav.name}</p>
                <ul className="mt-6 space-y-4 text14 text-activeTab font-nunito700">
                  {nav.links.map((subNav, subNavIndex) => (
                    <li key={subNavIndex}>
                      <Link href={subNav.link}>{subNav.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </aside>

        <aside className="flex items-center justify-between max-md:flex-col-reverse gap-5">
          <p className="text12 text-greenish">
            Copyright ©2023 Cargoe. All Rights Reserved.
          </p>
          <p className="flex items-center gap-2 text-12 font-nunito700 text-light">
            <EnvelopeIcon className="h-5 w-5 text-accent" aria-hidden="true" />
            Subscribe to our newsletter
          </p>
          <div className="flex items-center space-x-1 text12 font-nunito700 text-greenish">
            <Link href="https://cargoe.io/privacy-policy/">Privacy</Link>
            <span>/</span>
            <Link href="https://cargoe.io/terms-of-use/">Terms</Link>
            <span>/</span>
            <Link href="/">Our Blog</Link>
            <span>/</span>
            <Link href="/">Music</Link>
            <span>/</span>
            <Link href="/">Return</Link>
            <span>/</span>
            <Link href="/">FAQs</Link>
          </div>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
