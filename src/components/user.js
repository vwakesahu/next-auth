"use client";
import React from "react";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

const User = ({ user }) => {
  return (
    <div>
      <h1>Welcome {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <Button onClick={() => signOut()}>
        <span className="text-sm">Sign Out</span>
      </Button>
    </div>
  );
};

export default User;
