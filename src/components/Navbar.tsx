import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="h-15 flex w-full flex-row items-center justify-between bg-[#ffffff]  text-black">
      <h1 className="cursor-pointer text-2xl font-bold transition ease-in-out hover:text-blue-600">
        HalalGuide
      </h1>
      <ul className="flex flex-row   gap-10 text-base font-semibold">
        <Link href="/">
          {" "}
          <li className="">Home</li>
        </Link>
        <li className="">Sign In</li>
        <li className="">Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
