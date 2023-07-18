import React from "react";
import Link from "next/link";
import { SignIn, SignInButton, useUser, SignOutButton } from "@clerk/nextjs";

function Navbar() {
  const user = useUser();
  return (
    <div className="h-15 flex w-full flex-row items-center justify-between  text-black">
      <a href="/">
        <h1 className="cursor-pointer text-2xl font-bold transition ease-in-out hover:text-blue-600">
          HalalFinder
        </h1>
      </a>

      <ul className="flex flex-row   gap-10 text-base font-semibold">
        <Link href="/">
          {" "}
          <li className="">Home</li>
        </Link>
        {user.isSignedIn ? (
          <SignOutButton>
            <span className="cursor-pointer transition ease-in-out hover:text-blue-600">
              Sign Out
            </span>
          </SignOutButton>
        ) : (
          <SignInButton>
            <span className="cursor-pointer transition ease-in-out hover:text-blue-600">
              Sign In
            </span>
          </SignInButton>
        )}
        <Link href="/contact">
          {" "}
          <li className="">Contact</li>
        </Link>{" "}
      </ul>
    </div>
  );
}

export default Navbar;
