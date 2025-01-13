import React from "react";
import { Section } from "./Section";
import { buttonVariants } from "@/components/ui/button";
import { GitHubIcon } from "./icons/GitHubIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { ModeToggle } from "./ModeToggle";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 py-4 bg-background shadow-md z-50">
      <Section className="flex items-baseline">
        <Link
          href="https://cvflorence-martin.vercel.app"
          target="_blank"
          className="text-lg font-bold text-primary"
          aria-label="CV"
        >
          Florence_Martin-CV
        </Link>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/Florence-Martin"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
            aria-label="GitHub"
          >
            <GitHubIcon size={12} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/florence-martin-922b3861/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={12} className="text-foreground" />
          </Link>
          <ModeToggle />
        </ul>
      </Section>
    </header>
  );
};

export default Header;
