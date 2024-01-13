import React from 'react'

function Clock() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="#FF8F6B"
        fillRule="evenodd"
        d="M8 16c-4.416 0-8-3.576-8-8 0-4.416 3.584-8 8-8 4.424 0 8 3.584 8 8 0 4.424-3.576 8-8 8zm2.552-5.032a.594.594 0 00.824-.208.602.602 0 00-.208-.824L8.32 8.24V4.544a.6.6 0 10-1.2 0v4.04c0 .208.112.4.296.512l3.136 1.872z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default Clock
