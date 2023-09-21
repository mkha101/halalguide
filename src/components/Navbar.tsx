/* eslint-disable */

import React, { useCallback, useState } from "react";
import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";
import { AiOutlineMenu } from "react-icons/ai";

import router, { useRouter } from "next/router";
import MenuItem from "./MenuItem";

function Navbar() {
  const user = useUser();

  const handleRefresh = () => {
    router.reload();
  };
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="h-15 flex w-full items-center justify-between text-center text-slate-400 sm:w-full  ">
      <Link href="/" onClick={handleRefresh}>
        <h1 className="hidden cursor-pointer text-2xl font-bold transition ease-in-out  hover:text-blue-600 sm:block">
          HalalNearMe
        </h1>
        <h1 className="cursor-pointer text-2xl font-bold transition ease-in-out hover:text-blue-600 sm:hidden">
          HNM
        </h1>
      </Link>
      <ul className=" hidden flex-row items-center gap-8 text-base font-semibold sm:flex sm:gap-10">
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
      <div className="block sm:hidden">
        {" "}
        <div
          onClick={toggleOpen}
          className="sm flex cursor-pointer flex-row items-center gap-3 rounded-full border-[1px] border-none bg-black p-4 transition hover:shadow-md md:px-2 md:py-1"
        >
          <AiOutlineMenu />
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute 
            right-0 
            top-24
            z-10
            w-[40vw]
            overflow-hidden 
            rounded-xl 
            bg-white 
            text-sm 
            shadow-md 
            md:w-3/4
          "
        >
          <div className="flex cursor-pointer flex-col text-black">
            <>
              <MenuItem onClick={() => router.push("/")} label="Home" />
              <MenuItem
                onClick={() => router.push("/signin")}
                label="Sign-in"
              />
              <MenuItem
                onClick={() => router.push("/contact")}
                label="Contact"
              />
            </>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
