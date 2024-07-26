"use client";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { OTPInput } from "./input";

export function LoginForm() {
  const [username, setUsername] = useState("admin");
  const [OTP, setOTP] = useState("");
  const [password, setPassword] = useState("admin");
  function handleSubmit() {
    signIn("credentials", {
      otp: OTP,
    });
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your OTP below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="otp">One Time Password</Label>
          <OTPInput otp={OTP} setOTP={setOTP} />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSubmit}>
          Sign in
        </Button>
      </CardFooter>
    </Card>
  );
}
