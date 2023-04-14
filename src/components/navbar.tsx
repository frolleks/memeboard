import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 z-10 w-full bg-zinc-900">
      <div className="border-b border-zinc-700">
        <div className="mx-auto max-w-7xl px-2">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center justify-start">
              <Link href="/">
                <p className="font-semibold">memeboard</p>
              </Link>
            </div>
            <div className="flex justify-end">
              {session ? (
                <Button onClick={() => void signOut()}>Sign Out</Button>
              ) : (
                <Button onClick={() => void signIn()}>Sign In</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
