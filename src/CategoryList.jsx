import React, { useEffect, useState } from "react";
import Categorie from "./Categorie";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json").then((res) =>
      res.json().then((data) => setCategories(data))
    );
  }, []);
  return (
    <div className="bg-white">
      <div>
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-[#1A1919] text-5xl font-bild">
            Job Category List
          </h1>
          <p className="mt-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>

        <div className="flex gap-10  m-60 p-5">
          {categories.map((categorie, index) => (
            <Categorie key={index} categorie={categorie} />
          ))}
        </div>
      </div>
    </div>
  );
}
