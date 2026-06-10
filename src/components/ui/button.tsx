
type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "accent" | "light" | "outline";
};

function Button({ href, children, variant = "primary" }: ButtonProps) {
  return (
    <a className={`button button-${variant}`} href={href}>
      {children}
    </a>
  );
}