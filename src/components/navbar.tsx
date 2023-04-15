import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";

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
            <div className="flex items-center justify-center">
              <Input placeholder="Search" className="w-96" />
            </div>
            <div className="flex items-center justify-end">
              {session ? (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar className="transition-all hover:ring-1 hover:ring-zinc-700">
                      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                      {/* @ts-ignore */}
                      <AvatarImage src={session.user.image} />
                      <AvatarFallback>
                        {session.user.name?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>My Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => void signOut()}>
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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
