
type IconTokenProps = {
  label: string;
};

function IconToken({ label }: IconTokenProps) {
  return (
    <span className="icon" aria-hidden="true">
      {label}
    </span>
  );
}
