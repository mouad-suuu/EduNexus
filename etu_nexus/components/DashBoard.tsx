"use client";

import React from "react";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export const DashBoard = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-center min-h-screen">
      {session ? (
        <>
          <h1>Welcome back</h1>
        </>
      ) : (
        <>
          <h1 className="flex font-bold text-red-500 text-3xl">
            Not logged in
          </h1>
          <div className="px-4 py-2">
            <Button variant="outline" onClick={() => signIn("google")}>
              sign with google
            </Button>
            <Button variant="outline" onClick={() => signIn("github")}>
              Sign in with github
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
export default DashBoard;
