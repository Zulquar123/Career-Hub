import React from "react";
import { NavLink } from "react-router-dom";
import user from "./assets/images/user.png";

export default function Banner() {
  return (
    <div className="bg-white">
      <div className="mx-60 p-5 flex">
        <div>
          <pre className="text-[#1A1919] font-bold text-6xl man font-manrope tracking-[-0.01em]">
            One Step <br />
            Closer To Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Dream Job
            </span>
          </pre>
          <p className="mt-10">
            Explore thousands of job opportunities with all the
            <br /> information you need. Its your future. Come find it. Manage
            all
            <br /> your job application from start to finish.
          </p>
          <div className=" mt-10 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block rounded p-3 text-white">
            <NavLink>Get Started</NavLink>
          </div>
        </div>

        <div>
          <img src={user} alt="" />
        </div>
      </div>
    </div>
  );
}
