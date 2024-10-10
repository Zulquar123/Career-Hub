import React from "react";

export default function ({ categorie }) {
  const { id, category_name, availability, logo } = categorie;
  return (
    <div className=" flex flex-col gap-6 rounded-xl border-4 border-black p-4">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <h1 className="font-bold text-black">{category_name}</h1>
        <p>{availability}</p>
      </div>
    </div>
  );
}
