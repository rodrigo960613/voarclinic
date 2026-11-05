const paths = {
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  external: <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />,
  message: <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-5A8.5 8.5 0 1 1 21 11.5z" />,
  instagram: <>
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r=".6" />
    </>,
  phone: <path d="M5 4h3.5l1.7 4.5-2.3 1.5a11 11 0 0 0 5.6 5.6L15 13.3l4.5 1.7V18.5a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 3 6.2 2 2 0 0 1 5 4z" />,
  mail: <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.5 7.5l8.5 6 8.5-6" />
    </>,
  pin: <>
      <path d="M12 21s-7-6.1-7-11.2a7 7 0 0 1 14 0C19 14.900 12 21 12 21z" />
      <circle cx="12" cy="9.8" r="2.4" />
    </>,
  clock: <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </>,
  sprout: <>
      <path d="M12 21v-9" />
      <path d="M12 12c0-4 3-6.200 7.500-6 0 4-3 6.200-7.500 6z" />
      <path d="M12 15.500c0-3-2.200-5-6.500-4.800 0 3 2.200 5 6.500 4.800z" />
    </>,
  bulb: <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.500 10.900c.7.600 1 1.300 1 2.100h5c0-.8.300-1.500 1-2.100A6 6 0 0 0 12 3z" />
    </>,
  book: <>
      <path d="M4 5.500A2.500 2.500 0 0 1 6.500 3H19v15.500H6.500A2.500 2.500 0 0 0 4 21z" />
      <path d="M8.500 7.500H15M8.500 11H13" />
    </>,
  users: <>
      <circle cx="9" cy="8" r="3.200" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <circle cx="17.200" cy="9" r="2.400" />
      <path d="M16.500 14.300A5 5 0 0 1 21 19.500" />
    </>,
  focus: <>
      <circle cx="12" cy="12" r="7.500" />
      <circle cx="12" cy="12" r="2.800" />
      <path d="M12 2.500v3M12 18.500v3M2.500 12h3M18.500 12h3" />
    </>,
  brain: <>
      <path d="M9.500 4A3 3 0 0 0 6.500 7a3 3 0 0 0-2 5 3.200 3.200 0 0 0 2 5.200A3 3 0 0 0 11.500 18.500V5.500A2 2 0 0 0 9.500 4z" />
      <path d="M14.500 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3.200 3.200 0 0 1-2 5.200 3 3 0 0 1-5 1.300V5.500a2 2 0 0 1 2-1.500z" />
    </>,
  clipboard: <>
      <rect x="5.500" y="4.500" width="13" height="16.500" rx="2.500" />
      <path d="M9 4.500V3.500h6v1M9 11h6M9 15h4" />
    </>,
  calendar: <>
      <rect x="3.500" y="5" width="17" height="15.500" rx="2.500" />
      <path d="M3.500 10h17M8 3v4M16 3v4" />
    </>
};
export function Icon({ name, size = 20, className, strokeWidth = 1.7 }) {
  return <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
      {paths[name]}
    </svg>;
}
