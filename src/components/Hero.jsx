"use client";

import React, { useState } from "react";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full bg-secondary  ">
      <div className="flex justify-center">
        <section className="bg-white text-center flex flex-col gap-8 p-6 rounded-2xl">
          <h1 className="text-3xl">Navigate Your Career Path with Ease</h1>
          <div className="w-10/12 mx-auto">
            Welcome to MyJobHunt – Your personal dashboard for organizing job
            applications, tracking progress, and landing your dream job. Let's
            simplify your job search and turn opportunities into offers
          </div>
          <Link href="/signup">
            <Button className="w-40 flex mx-auto">Let's get started</Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Hero;
