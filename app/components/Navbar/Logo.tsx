"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      className="px-4 py-2 bg-taupe rounded-full cursor-pointer"
      onClick={() => router.push("/")}
    >
      <h2 className="text-soft-cream text-3xl">
        Wander<span className="text-sandy-brown font-bold">Nest</span>
      </h2>
    </div>
  );
};

export default Logo;
