import { clinic } from "../data/clinic";
export function Butterfly({ className, size = 28 }) {
  return <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
      <g fill="currentColor">
        <path d="M12 12C9.500 5 4 3 2.800 6.400 1.900 9.300 6.500 12.600 12 12z" />
        <path d="M12 12c-4.200.9-7 2.600-6.300 5.600.8 3 5.100 1.600 6.300-5.600z" />
        <path d="M12 12c2.500-7 8-9 9.200-5.600.9 2.900-3.700 6.200-9.200 5.600z" opacity=".86" />
        <path d="M12 12c4.200.9 7 2.600 6.300 5.600-.8 3-5.100 1.600-6.300-5.600z" opacity=".86" />
      </g>
      <path
    d="M12 11.500c-.4-2-1.200-3.200-2.400-4M12 11.500c.4-2 1.200-3.200 2.400-4"
    fill="none"
    stroke="currentColor"
    strokeWidth=".8"
    strokeLinecap="round"
  />
    </svg>;
}
export function Logo({ light = false }) {
  return <span className={`logo${light ? " logo--light" : ""}`}>
      <span className="logo__badge"><Butterfly className="logo__mark" size={26} /></span>
      <span className="logo__text">
        <span className="logo__name">{clinic.name}</span>
        <span className="logo__tag">{clinic.tagline}</span>
      </span>
    </span>;
}
