export function EyeOpen({ className }: { className?: string }) {
  return (
    <span className={`anticon ${className}`.trim()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        fill="none"
        viewBox="0 0 21 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13.483 10a2.98 2.98 0 01-2.983 2.983A2.98 2.98 0 017.517 10 2.98 2.98 0 0110.5 7.017 2.98 2.98 0 0113.483 10z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M10.5 16.892c2.942 0 5.683-1.734 7.592-4.734.75-1.175.75-3.15 0-4.325-1.909-3-4.65-4.733-7.592-4.733-2.942 0-5.683 1.733-7.592 4.733-.75 1.175-.75 3.15 0 4.325 1.909 3 4.65 4.734 7.592 4.734z"
        />
      </svg>
    </span>
  )
}

EyeOpen.defaultProps = {
  className: ''
}
