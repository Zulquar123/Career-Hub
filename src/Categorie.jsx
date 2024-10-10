import React from "react";

export default function ({ categorie }) {
  const { id, category_name, availability, logo } = categorie;
  return (
    <div className="bg-white border-2 border-black p-5">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <h1>{category_name}</h1>
        <p>{availability}</p>
      </div>
    </div>
  );
}
