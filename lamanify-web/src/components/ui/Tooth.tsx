import React from 'react';

export const Tooth = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M4.2 10c0-3 .5-6 2.8-6 1.8 0 3.2 1.5 5 2.6 1.8-1.1 3.2-2.6 5-2.6 2.3 0 2.8 3 2.8 6 0 5.4-2.8 12-7.8 12-5 0-7.8-6.6-7.8-12z" />
    <path d="M12 4v4" />
    <path d="M12 16v6" />
  </svg>
);
