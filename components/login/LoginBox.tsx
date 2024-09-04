"use client";

import {useEffect, useState} from "react";
import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {DEFAULT_EMAIL, DEFAULT_PASSWORD} from "@services/constants/constant";

export default function LogInBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {data: session, status} = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  const handleSubmit = async (e: {preventDefault: () => void}) => {
    e.preventDefault();
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result && result.error) {
        console.error(result.error);
        alert(result.error);
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    status === "unauthenticated" && (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[30vh]">
        <div className="flex flex-col items-center justify-center">
          <Image src="/images/login.png" alt="check-list" width={170} height={170} />
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-md shadow-md w-80 lg:w-96 lg:h-96 "
        >
          <h3 className="text-xl font-bold text-darkBlueOne">Let's manage your tasks</h3>
          <div className="mb-4 mt-3 font-medium">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder={DEFAULT_EMAIL}
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
          </div>
          <div className="mb-4 font-medium">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder={DEFAULT_PASSWORD}
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
            Sign In
          </button>
        </form>
      </div>
    )
  );
}
