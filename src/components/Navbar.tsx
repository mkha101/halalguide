/* eslint-disable */

import React from "react";
import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";
import router, { useRouter } from "next/router";

function Navbar() {
  const user = useUser();

  const handleRefresh = () => {
    router.reload();
  };

  return (
    <div className="h-15 flex w-full flex-col items-center justify-between text-center text-black sm:w-full sm:flex-row  sm:flex-row">
      <Link href="/" onClick={handleRefresh}>
        <h1 className="hidden cursor-pointer text-2xl font-bold transition ease-in-out hover:text-blue-600 sm:block">
          HalalNearMe
        </h1>
        <h1 className="cursor-pointer text-2xl font-bold transition ease-in-out hover:text-blue-600 sm:hidden">
          HNM
        </h1>
      </Link>
      <ul className="flex flex-row  items-center gap-8 text-base font-semibold sm:gap-10">
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
