import React from "react";
import { SignIn } from "@clerk/nextjs";
const Singin = () => {
  return (
    <div className="flex justify-center mt-24">
      <SignIn />
    </div>
  );
};

export default Singin;
