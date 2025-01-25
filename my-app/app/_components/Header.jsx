"use client";

import { Sparkles } from "lucide-react";
import { Button } from "../../components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">LogoAI</span>
            </Link>
          </div>
          <div>
            <Button size="lg" className="font-semibold">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
