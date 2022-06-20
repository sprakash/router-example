import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ClothingList = () => {
  const [list, setList] = useState(["top", "skirt", "hat", "belt"]);
  return (
    <div>
      List of Clothing
      {list &&
        list.map((item, index) => {
          return (
            <Link key={index} to={`/list/${item}`}>
              <div>{item}</div>
            </Link>
          );
        })}
      <Outlet />
    </div>
  );
};

export default ClothingList;
