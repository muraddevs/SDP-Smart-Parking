// =============================
// YEAR (footer)
// =============================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();


// =============================
// SCROLL REVEAL ANIMATION
// =============================
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => io.observe(el));
}


// =============================
// SIMPLE "AUTH" (localStorage)
// =============================
const STORAGE_KEY = "aiParkingUser";

function getUser() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); }
  catch { return null; }
}

function setUser(user) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

function requireUserOrRedirect() {
  const user = getUser();
  if (!user) {
    // если нет профиля — отправляем на регистрацию
    window.location.href = "register.html";
  }
}


// =============================
// REGISTER PAGE: save user -> go to vehicle page
// =============================
const registerForm = document.querySelector("#registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = registerForm.querySelector('input[name="fullName"]').value.trim();
    const email = registerForm.querySelector('input[name="email"]').value.trim();

    if (!fullName || !email) {
      alert("Please fill Full Name and Email.");
      return;
    }

    setUser({ fullName, email, createdAt: new Date().toISOString() });

    // переходим на регистрацию авто
    window.location.href = "register-vehicle.html";
  });
}


// =============================
// REGISTER VEHICLE PAGE: block if no profile
// =============================
if (window.location.pathname.endsWith("register-vehicle.html")) {
  requireUserOrRedirect();
}


// =============================
// PROFILE PAGE: show user data + logout
// =============================
const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const logoutBtn = document.getElementById("logoutBtn");

if (profileName && profileEmail) {
  const user = getUser();
  if (user) {
    profileName.textContent = user.fullName;
    profileEmail.textContent = user.email;
  } else {
    profileName.textContent = "Guest";
    profileEmail.textContent = "Not logged in";
  }
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    window.location.href = "index.html";
  });
}

// =============================
// ADMIN: LOGS TABLE (mock now, API later)
// =============================
const btnLoadLogs = document.getElementById("btnLoadLogs");
const logsBody = document.getElementById("logsBody");

if (btnLoadLogs && logsBody) {
  btnLoadLogs.addEventListener("click", async () => {
    // позже заменишь на реальный endpoint
    // const res = await fetch("http://localhost:8080/api/admin/logs");
    // const data = await res.json();

    const data = [
      { plate: "90-AB-123", action: "ENTER", gate: "Gate A", time: "2026-02-24 10:12" },
      { plate: "10-ZZ-777", action: "EXIT", gate: "Gate A", time: "2026-02-24 10:26" },
      { plate: "99-KK-909", action: "ENTER", gate: "Gate B", time: "2026-02-24 11:03" },
    ];

    logsBody.innerHTML = data.map((row, i) => `
      <tr>
        <td>${i + 1}</td>
        <td>${row.plate}</td>
        <td>${row.action}</td>
        <td>${row.gate}</td>
        <td>${row.time}</td>
      </tr>
    `).join("");
  });
}