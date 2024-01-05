export function EyeClose({ className }: { className?: string }) {
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
          d="M12.608 7.892l-4.216 4.216a2.98 2.98 0 114.217-4.217z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.35 4.808c-1.458-1.1-3.125-1.7-4.85-1.7-2.942 0-5.683 1.734-7.592 4.734-.75 1.175-.75 3.15 0 4.325a11.938 11.938 0 002.259 2.641M7.517 16.275c.95.4 1.958.617 2.983.617 2.942 0 5.683-1.734 7.592-4.734.75-1.175.75-3.15 0-4.325a13.504 13.504 0 00-.884-1.225M13.425 10.584a2.97 2.97 0 01-2.35 2.35M8.392 12.108l-6.225 6.225M18.833 1.667L12.608 7.89"
        />
      </svg>
    </span>
  )
}

EyeClose.defaultProps = {
  className: ''
}
