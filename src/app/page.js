import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "@/configs/next-auth";
import User from "@/components/user";

export default async function Home() {
  const session = await getServerSession(authOptions);
  // console.log(session)
  const user = session?.user;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {user ? <User user={user} /> : <Link href="/signin">Login </Link>}
    </main>
  );
}
