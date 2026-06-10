import { trustItems } from "../data/ecosystem";

export function TrustBar() {
  return (
    <div className="trust-list" aria-label="Credenciais">
      {trustItems.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
