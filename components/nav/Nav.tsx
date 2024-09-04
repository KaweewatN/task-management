"use client";

import {Avatar, AvatarFallback, AvatarImage} from "../shadui/avatar";
import {signOut} from "next-auth/react";

import {PiSignOutBold} from "react-icons/pi";

export default function Nav({className}: {className?: string}) {
  return (
    <nav className={className}>
      <ul className="flex justify-between items-center py-2 px-4 md:shadow-lg">
        <li>
          <Avatar className="cursor-pointer">
            <AvatarImage src="images/user_image.jpg" />
            <AvatarFallback>Bruno</AvatarFallback>
          </Avatar>
        </li>
        <li>
          <button
            onClick={() => signOut({callbackUrl: "/login"})}
            className="w-full flex items-center justify-center text-2xl bg-white border-[1.5px] border-lightPink text-red-600 hover:bg-red-600 hover:text-white p-1 rounded-lg"
          >
            <PiSignOutBold className="inline-block" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
