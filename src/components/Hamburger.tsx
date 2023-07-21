import Link from "next/link";
import React from "react";
import { useUser, UserButton } from "@clerk/nextjs";

export default function Hamburger() {
  const user = useUser();

  return (
    <div>
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
      </ul>
    </div>
  );
}
