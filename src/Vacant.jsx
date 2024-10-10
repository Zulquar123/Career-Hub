import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";

export default function Vacant({ job }) {
  const style =
    "font-bold rounded px-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white ";
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  return (
    <div className="flex flex-col gap-4 border-4 rounded m-3 border-black p-5">
      <div>
        <img src={logo} alt="" />
      </div>

      <div>
        <h1 className="font-bold text-black text-xl">{job_title}</h1>
        <p className="text-[#757575] font-bold">{company_name}</p>
      </div>

      <div className="flex gap-3">
        <NavLink className={style}>{job_type}</NavLink>
        <NavLink className={style}>{remote_or_onsite}</NavLink>
      </div>

      <div>
        <p>
          <MdOutlineLocationOn className="inline" />
          {location} <AiOutlineDollarCircle className="inline" />
          {salary}
        </p>
      </div>

      <div>
        <NavLink className="bg-gradient-to-r from-cyan-500 to-blue-900 text-white rounded px-3 py-2 font-bold">
          View Details
        </NavLink>
      </div>
    </div>
  );
}
