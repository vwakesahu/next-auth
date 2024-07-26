import { getServerSession } from "next-auth";
import { authOptions } from "@/configs/next-auth";
import { LoginForm } from "@/components/login-form";
import { redirect } from "next/navigation";

export default async function SignIn() {
  // const session = await getServerSession(authOptions);
  // if (session) {
  //   return redirect("/");
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginForm />
    </main>
  );
}
