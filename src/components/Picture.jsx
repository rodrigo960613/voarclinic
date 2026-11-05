import { asset } from "../assets";
export function Picture({ src, alt, width, height, eager = false, className, position }) {
  return <picture>
      <source srcSet={asset(`${src}.webp`)} type="image/webp" />
      <img
    src={asset(`${src}.jpg`)}
    alt={alt}
    width={width}
    height={height}
    loading={eager ? "eager" : "lazy"}
    decoding="async"
    className={className}
    style={position ? { objectPosition: position } : void 0}
  />
    </picture>;
}
