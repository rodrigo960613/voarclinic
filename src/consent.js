const NAME = "voar_mapa_ok";
const DAYS = 180;
function readCookie() {
  try {
    return document.cookie.split("; ").some((c) => c === `${NAME}=1`);
  } catch {
    return false;
  }
}
function readLocal() {
  try {
    return localStorage.getItem(NAME) === "1";
  } catch {
    return false;
  }
}
export function hasMapConsent() {
  return readCookie() || readLocal();
}
export function setMapConsent(on) {
  try {
    const maxAge = on ? DAYS * 24 * 60 * 60 : 0;
    const secure = location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${NAME}=${on ? "1" : ""}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`;
  } catch {
  }
  try {
    if (on) localStorage.setItem(NAME, "1");
    else localStorage.removeItem(NAME);
  } catch {
  }
}
