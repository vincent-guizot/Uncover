import Image from "next/image";
import React from "react";
import UNCVRDProduction from "@/assets/images/logo.png";

export default function Banner() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-stone-900">
      <div className="w-full">
        <div className="w-full p-3 banner-bg">
          <div className="h-full flex items-center justify-center">
            <Image
              width={512}
              height={0}
              src="/assets/images/logo_tr.png"
              alt="Logo"
            />
          </div>
        </div>
        {/* <h1 className="banner-bodytext text-center text-3xl py-5">
          "Uncovering Visuals from your Vision."
        </h1> */}
      </div>
    </div>
  );
}
