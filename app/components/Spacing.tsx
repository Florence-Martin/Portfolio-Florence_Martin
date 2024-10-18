import { cn } from "@/lib/utils";

export type SpacingProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

export const Spacing = ({ size = "md" }: SpacingProps) => {
  return (
    <div
      className={cn({
        "h-4": size === "xs",
        "h-8": size === "sm",
        "h-16": size === "md",
        "h-24": size === "lg",
        "h-32": size === "xl",
      })}
    />
  );
};
