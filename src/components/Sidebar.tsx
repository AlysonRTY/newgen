"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Bird, User, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/ducks", label: "Ducks", icon: Bird },
  { href: "/about", label: "About Me", icon: User },
  { href: "/projects", label: "Projects", icon: Briefcase },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-background">
      <div className="flex h-16 items-center justify-center border-b">
        <h1 className="text-xl font-bold">My App</h1>
      </div>
      <nav className="flex flex-col gap-2 p-4">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Button
              asChild
              key={link.href}
              variant={isActive ? "secondary" : "ghost"}
              className="justify-start"
            >
              <Link href={link.href}>
                <link.icon className="mr-2 h-4 w-4" />
                {link.label}
              </Link>
            </Button>
          );
        })}
      </nav>
      <div className="mt-auto p-4 border-t">
        <ThemeToggle />
      </div>
    </div>
  );
}
