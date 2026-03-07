/* ===========================
   PORTFOLIO JS — BTS SIO SISR
   =========================== */

// --- LOADER ---
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 1800);
});

// --- NAV SCROLL EFFECT ---
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// --- SCROLL REVEAL ---
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.skill-card, .project-card, .veille-card, .about__info-item').forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});

// --- SMOOTH NAV LINKS ---
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// --- SKILL BARS ANIMATION ON HOVER ---
document.querySelectorAll('.skill-card').forEach((card) => {
  card.addEventListener('mouseenter', () => {
    const bar = card.querySelector('.level-bar');
    if (bar) {
      bar.style.setProperty('--w', bar.style.getPropertyValue('--w'));
    }
  });
});

// --- TYPED TERMINAL EFFECT (optional, activates on load) ---
function typeLine(element, text, delay = 0) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        element.textContent += text[i];
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          resolve();
        }
      }, 30);
    }, delay);
  });
}

// --- ACTIVE NAV LINK HIGHLIGHT ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.style.color = 'var(--accent)';
          }
        });
      }
    });
  },
  { threshold: 0.3 }
);

sections.forEach((section) => sectionObserver.observe(section));

// --- KONAMI CODE EASTER EGG ---
let konamiCode = [];
const konami = [38,38,40,40,37,39,37,39,66,65];
document.addEventListener('keydown', (e) => {
  konamiCode.push(e.keyCode);
  konamiCode = konamiCode.slice(-10);
  if (JSON.stringify(konamiCode) === JSON.stringify(konami)) {
    document.body.style.filter = 'hue-rotate(180deg)';
    setTimeout(() => document.body.style.filter = '', 2000);
    console.log('%c🎉 root@portfolio:~# Access granted', 'color: #00ff88; font-size: 16px; font-weight: bold;');
  }
});

// --- CONSOLE MESSAGE ---
console.log('%cAlex Moreau — BTS SIO SISR', 'color: #00ff88; font-size: 20px; font-weight: bold; font-family: monospace;');
console.log('%c📡 Infrastructure • Systèmes • Réseaux', 'color: #00aaff; font-size: 14px; font-family: monospace;');
console.log('%c→ github.com/alexmoreau', 'color: #7070a0; font-size: 12px; font-family: monospace;');
