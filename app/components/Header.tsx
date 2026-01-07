"use client";
import React from "react";
import { Section } from "./Section";
import { buttonVariants } from "@/components/ui/button";
import { GitHubIcon } from "./icons/GitHubIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import Image from "next/image";
// import { ModeToggle } from "./ModeToggle";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 py-2 bg-background shadow-sm z-50">
      <Section className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/assets/images/FloM.png"
            alt="Photo de Florence Martin"
            className="rounded-full w-16 max-md:w-12"
            width={64}
            height={64}
            priority
          />
        </div>
        <ul className="flex items-center gap-3">
          <Link
            href="https://cv-fm-po-florencemartins-projects.vercel.app/"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "text-xs font-normal text-muted-foreground hover:text-foreground max-md:hidden")}
            aria-label="CV"
          >
            CV
          </Link>
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
          {/* <ModeToggle /> */}
        </ul>
      </Section>
    </header>
  );
};

export default Header;
