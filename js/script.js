/* ===== ANIMATION 1: TYPING EFFECT ===== */
const roles = [
  "Future Software Engineer",
  "Web Developer",
  "Computer Science Student",
  "Technology Enthusiast",
  "Graphic Designer"
];

let roleIndex = 0, charIndex = 0, deleting = false;
const typingEl = document.getElementById("typing");

function typeEffect() {
  if (!typingEl) return; // stops errors on pages without the typing element
  const current = roles[roleIndex];
  typingEl.textContent = deleting
    ? current.substring(0, charIndex--)
    : current.substring(0, charIndex++);

  if (!deleting && charIndex === current.length + 1) {
    deleting = true;
    setTimeout(typeEffect, 1500);
    return;
  }
  if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }
  setTimeout(typeEffect, deleting ? 60 : 120);
}
typeEffect();

/* ===== ANIMATION 4: SCROLL REVEAL ===== */
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.2 });
reveals.forEach(el => observer.observe(el));