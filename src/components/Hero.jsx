"use client";

import React, { useState } from "react";
import Button from "./Button";
import Registration from "./Registration";
import Login from "./Login";

const Hero = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="w-full bg-secondary  ">
        {!clicked ? (
                  <div className="mt-64 flex justify-center">
                  <section className="bg-white text-center flex flex-col gap-8 p-6 rounded-2xl">
                    <h1 className="text-3xl">Navigate Your Career Path with Ease</h1>
                    <div className="w-10/12 mx-auto">
                      Welcome to MyJobHunt – Your personal dashboard for organizing job
                      applications, tracking progress, and landing your dream job. Let's
                      simplify your job search and turn opportunities into offers
                    </div>
                    <Button onClick={() => {setClicked(true)}} className="w-40 flex mx-auto">Let's get started</Button>
                  </section>
                </div>
        ) : (
            <Registration/>
        )
        
        }
    
    </div>
  );
};

export default Hero;
