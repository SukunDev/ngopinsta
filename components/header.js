import Link from "next/link";
import React from "react";
import DarkMode from "./darkMode";
import Image from "next/image";

export default function Header() {
  return (
    <header className="container px-4 py-2 mx-auto text-white">
      <div className="flex items-center justify-between">
        <Link className="block" href={"/"}>
          <Image
            src={"/NgopInsta.png"}
            width={150}
            height={175}
            alt="NgopInsta"
          ></Image>
        </Link>
        <nav className="flex items-center gap-4 font-light">
          <Link className="hidden sm:block" href={"/"}>
            Home
          </Link>
          <Link className="hidden sm:block" href={"/grabber"}>
            Instagram Grabber
          </Link>
          <DarkMode />
        </nav>
      </div>
    </header>
  );
}
