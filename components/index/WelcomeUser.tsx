"use client";

import {TEST_USER} from "@services/constants/constant";
import Image from "next/image";

export default function WelcomeUser() {
  return (
    <div className="w-full px-7 lg:px-64 xl:px-96">
      <div className="flex justify-center items-center space-x-2 lg:space-x-10 bg-ligtBlueOne px-5 -mt-2 md:mt-0 rounded-lg">
        <div className="flex flex-col text-welcomeWhite">
          <h2 className="text-2xl font-medium">Hi, {TEST_USER.name}</h2>
          <p className="text-sm font-medium xl:text-md">Let's manage your time!</p>
        </div>
        <Image src="/images/check-list.png" alt="check-list" width={110} height={110} />
      </div>
    </div>
  );
}
