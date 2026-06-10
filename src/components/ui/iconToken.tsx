
type IconTokenProps = {
  label: string;
};

export function IconToken({ label }: IconTokenProps) {
  return (
    <span className="icon" aria-hidden="true">
      {label}
    </span>
  );
}
