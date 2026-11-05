export function asset(path) {
  if (typeof window !== "undefined" && window.__ASSETS__ && window.__ASSETS__[path]) {
    return window.__ASSETS__[path];
  }
  // caminho relativo: funciona na raiz do site e também ao abrir o index.html direto do computador
  return path.replace(/^\//, "");
}
export function toObjectUrl(src) {
  if (!src.startsWith("data:")) return src;
  const comma = src.indexOf(",");
  const mime = src.slice(5, src.indexOf(";"));
  const bin = atob(src.slice(comma + 1));
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return URL.createObjectURL(new Blob([bytes], { type: mime }));
}
