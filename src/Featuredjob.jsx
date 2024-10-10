import React, { useEffect, useState } from "react";
import Vacant from "./Vacant";
import { NavLink } from "react-router-dom";

export default function Featuredjob() {
  const [Vacancy, setVacancy] = useState([]);
  const [VacancyLength, setVacancyLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json").then((res) =>
      res.json().then((data) => setVacancy(data))
    );
  }, []);
  return (
    <div className="bg-white ">
      <div className="flex flex-col gap-2 items-center ">
        <h1 className="text-[#1A1919] text-5xl font-bold ">Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 mt-10  mx-60 p-5">
        {Vacancy.slice(0, VacancyLength).map((job, index) => (
          <Vacant job={job} key={index} />
        ))}
      </div>

      <div className="flex justify-center items-center">
        <NavLink
          className="text-xl font-bold text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 p-3 rounded "
          onClick={() => setVacancyLength(Vacancy.length)}
        >
          See All Jobs ➡️
        </NavLink>
      </div>
    </div>
  );
}
