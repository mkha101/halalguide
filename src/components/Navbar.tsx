import React from "react";
import Link from "next/link";
import { SignIn, useUser, UserButton } from "@clerk/nextjs";

function Navbar() {
  const user = useUser();

  return (
    <div className="h-15 flex w-full flex-col items-center justify-between text-black sm:w-full  sm:flex-row">
      <a href="/">
        <h1 className="cursor-pointer text-2xl font-bold transition ease-in-out hover:text-blue-600">
          HalalFinder
        </h1>
      </a>
      <ul className="flex flex-row   gap-8 text-base font-semibold sm:gap-10">
        <Link href="/">
          {" "}
          <li className="">Home</li>
        </Link>
        {user.isSignedIn ? (
          <Link href="/history">
            {" "}
            <li className="">History</li>
          </Link>
        ) : (
          <Link href="/signin">
            <li className="">Sign In</li>
          </Link>
        )}
        <Link href="/contact">
          {" "}
          <li className="">Contact</li>
        </Link>{" "}
        <UserButton afterSignOutUrl="/" />
      </ul>
    </div>
  );
}

export default Navbar;
