
export default function Skeleton() {
  return (
    <div
      className="person-skeleton"
      role="status"
      aria-busy="true"
      aria-live="polite"
    >
      <span className="sr-only">
        Loading person details...
      </span>

      <div className="skeleton-heading" />
      <div className="skeleton-row" />
      <div className="skeleton-row" />
      <div className="skeleton-row" />
    </div>
  );
}
