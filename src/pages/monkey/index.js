import React from "react";

import SingeScene from "../../components/teteDeSinge/singeScene";
import Link from "next/link";

const Monkey = () => {
  return (
    <div className="container">
      <h2>Monkey</h2>
      <Link href={"/"}>back to the home page</Link>
      <div className="containerCanvas">
        <SingeScene />
      </div>
    </div>
  );
};

export default Monkey;
