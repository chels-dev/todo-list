export const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl bg-white ${className}`}>{children}</div>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);