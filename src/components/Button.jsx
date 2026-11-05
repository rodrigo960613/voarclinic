import { Icon } from "./Icon";
export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  external = false,
  type = "button",
  disabled = false,
  className = ""
}) {
  const cls = `btn btn--${variant} btn--${size} ${className}`.trim();
  const content = <>
      {children}
      {icon && <Icon name={icon} size={18} />}
    </>;
  if (href) {
    return <a
      className={cls}
      href={href}
      onClick={onClick}
      {...external ? { target: "_blank", rel: "noopener noreferrer" } : {}}
    >
        {content}
      </a>;
  }
  return <button className={cls} type={type} onClick={onClick} disabled={disabled}>
      {content}
    </button>;
}
