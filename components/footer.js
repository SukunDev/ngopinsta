import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="mt-16 dark:bg-white/5">
      <div className="container grid grid-cols-1 gap-2 px-2 pt-6 mx-auto font-light sm:px-0 sm:grid-cols-5">
        <div className="flex flex-col col-span-1 text-gray-800 sm:col-span-2 dark:text-gray-100">
          <h3 className="text-lg font-medium">
            {process.env.NEXT_PUBLIC_APP_TITLE}
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 sm:text-base">
            {process.env.NEXT_PUBLIC_APP_DESCRIPTION}
          </p>
        </div>
        <div className="flex flex-col text-gray-800 dark:text-gray-100">
          <h3 className="text-base font-medium sm:text-lg">Tool</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-300 sm:text-base">
            <li>
              <Link
                className="transition duration-300 hover:text-blue-500"
                href={"/"}
              >
                Instagram Downloader
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-300 hover:text-blue-500"
                href={"/grabber"}
              >
                Instagram Grabber
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-gray-800 dark:text-gray-100">
          <h3 className="text-base font-medium sm:text-lg">Support</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-300 sm:text-base">
            <li>
              <Link
                className="transition duration-300 hover:text-blue-500"
                href={"/contact"}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-300 hover:text-blue-500"
                href={"/blog"}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-gray-800 dark:text-gray-100">
          <h3 className="text-base font-medium sm:text-lg">Legal</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-300 sm:text-base">
            <li>
              <Link
                className="transition duration-300 hover:text-blue-500"
                href={"/terms"}
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-300 hover:text-blue-500"
                href={"/privacy"}
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-6 pb-2 font-light text-center">
        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
          We are not affiliated with Instagram or Meta.
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-300">
          © 2023{" "}
          <Link
            className="transition duration-300 hover:text-blue-500"
            href={"/"}
          >
            {process.env.NEXT_PUBLIC_APP_TITLE}
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
