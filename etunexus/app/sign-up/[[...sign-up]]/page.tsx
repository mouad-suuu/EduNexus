import React from "react";
import { SignUp } from "@clerk/nextjs";

const Singup = () => {
  return (
    <div className="flex justify-center mt-24">
      <SignUp />
    </div>
  );
};

export default Singup;
