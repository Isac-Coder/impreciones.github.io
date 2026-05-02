/* ════════════════════════════════
   NAHI PRINTS – main.js
   ════════════════════════════════ */

// ── Scroll Reveal ──────────────────────────────────────────
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// ── Formulario de contacto ─────────────────────────────────
const btnSend = document.querySelector('.btn-send');
if (btnSend) {
  btnSend.addEventListener('click', () => {
    alert('¡Mensaje recibido! Te contactamos pronto 💕');
  });
}
