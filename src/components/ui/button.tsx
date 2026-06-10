
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "accent" | "light" | "outline";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  return (
    <a className={`button button-${variant}`} href={href}>
      {children}
    </a>
  );
}
