export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="BPC-157 Stack"
    >
      {/* Vial icon */}
      <rect x="2" y="4" width="10" height="18" rx="2" fill="#f59e0b" />
      <rect x="2" y="14" width="10" height="8" rx="0" fill="#d97706" />
      <rect x="1" y="2" width="12" height="4" rx="1.5" fill="#fbbf24" />
      <rect x="4" y="22" width="6" height="3" rx="1" fill="#d97706" />
      {/* Liquid bubbles */}
      <circle cx="6" cy="18" r="1" fill="#fef3c7" opacity="0.8" />
      <circle cx="9" cy="16" r="0.75" fill="#fef3c7" opacity="0.6" />

      {/* Text: BPC */}
      <text x="18" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="18" fill="#111827" letterSpacing="-0.5">BPC</text>
      {/* Text: -157 in amber */}
      <text x="53" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="18" fill="#f59e0b" letterSpacing="-0.5">-157</text>
      {/* Text: Stack smaller */}
      <text x="98" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="13" fill="#6b7280" letterSpacing="1">STACK</text>
    </svg>
  );
}
