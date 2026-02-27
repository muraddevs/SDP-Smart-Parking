const KEY = "ai-park-role";

export function getRole() {
  return localStorage.getItem(KEY) || "guest";
}

export function setRole(role) {
  localStorage.setItem(KEY, role);
}

export function logout() {
  localStorage.removeItem(KEY);
}

export function isAdmin() {
  return getRole() === "admin";
}