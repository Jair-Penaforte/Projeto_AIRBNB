import React from "react";
import Item from "../components/item";

const Home = () => {
  return (
    <section>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] mx-auto max-w-7xl items-center justify-between p-8 gap-8">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </section>
  );
};

export default Home;
