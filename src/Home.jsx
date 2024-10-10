import React from "react";
import Banner from "./Banner";
import CategoryList from "./CategoryList";
import Featuredjob from "./Featuredjob";

export default function Home() {
  return (
    <div>
      <Banner />
      <CategoryList />
      <Featuredjob />
      This is Home
    </div>
  );
}
