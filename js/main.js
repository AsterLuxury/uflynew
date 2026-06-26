/* ═══════════════════════════════════════════════════
   UFLY TRAVEL — Main Application
   Nav, Theme, Cursor, Tilt, Magnetic, Hamburger
   ═══════════════════════════════════════════════════ */
(function() {
  'use strict';

  const UflyApp = {};

  /* ─── Sticky Nav with Hide/Show ─── */
  UflyApp.initNav = function() {
    const nav = document.getElementById('navbar');
    if (!nav) return;

    let lastScroll = 0;
    let isHidden = false;

    window.addEventListener('scroll', () => {
      const current = window.scrollY;
      
      // Add scrolled class
      if (current > 50) {
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
      }

      // Hide on scroll down, show on scroll up (past threshold)
      if (current > 200) {
        if (current > lastScroll && !isHidden) {
          nav.classList.add('nav-hidden');
          isHidden = true;
        } else if (current < lastScroll && isHidden) {
          nav.classList.remove('nav-hidden');
          isHidden = false;
        }
      } else {
        nav.classList.remove('nav-hidden');
        isHidden = false;
      }

      lastScroll = current;
    }, { passive: true });
  };

  /* ─── Theme Toggle ─── */
  UflyApp.initTheme = function() {
    const toggle = document.getElementById('themeToggle');
    const icon = document.getElementById('themeIcon');
    if (!toggle || !icon) return;

    // Check system preference and saved
    const saved = localStorage.getItem('ufly-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (saved === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      icon.textContent = '☀️';
    } else if (saved === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      icon.textContent = '🌙';
    } else if (!prefersDark) {
      document.documentElement.setAttribute('data-theme', 'light');
      icon.textContent = '☀️';
    }

    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      icon.textContent = next === 'dark' ? '🌙' : '☀️';
      localStorage.setItem('ufly-theme', next);
    });
  };

  /* ─── Hamburger Menu ─── */
  UflyApp.initHamburger = function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  };

  /* ─── Custom Cursor (Desktop only) ─── */
  UflyApp.initCursor = function() {
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;

    // Only on hover devices
    const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasHover) {
      dot.style.display = 'none';
      ring.style.display = 'none';
      return;
    }

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let isVisible = true;
    let hoveredEl = null;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
      dot.style.opacity = '1';

      if (!hoveredEl) {
        ring.style.opacity = '0.5';
      }
    });

    document.addEventListener('mouseleave', () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      dot.style.opacity = '1';
      ring.style.opacity = '0.5';
    });

    // Smooth ring follow
    function animateRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    // Interactive elements
    const interactives = document.querySelectorAll('a, button, .service-card, .partner-logo-card, .gallery-item');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => {
        ring.classList.add('hover');
        dot.classList.add('hover');
        hoveredEl = el;
      });
      el.addEventListener('mouseleave', () => {
        ring.classList.remove('hover');
        dot.classList.remove('hover');
        hoveredEl = null;
      });
    });
  };

  /* ─── 3D Tilt Cards ─── */
  UflyApp.initTilt = function() {
    const cards = document.querySelectorAll('[data-tilt]');
    if (!cards.length) return;

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      });
    });
  };

  /* ─── Magnetic Buttons ─── */
  UflyApp.initMagnetic = function() {
    const elements = document.querySelectorAll('[data-magnetic]');
    if (!elements.length) return;

    elements.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const strength = 0.3;
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0, 0)';
      });
    });
  };

  /* ─── Back to Top ─── */
  UflyApp.initBackToTop = function() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  /* ─── Smooth Scroll for Nav Links ─── */
  UflyApp.initSmoothScroll = function() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  };

  /* ─── Init Everything ─── */
  UflyApp.init = function() {
    this.initNav();
    this.initTheme();
    this.initHamburger();
    this.initCursor();
    this.initTilt();
    this.initMagnetic();
    this.initBackToTop();
    this.initSmoothScroll();
  };

  window.UflyApp = UflyApp;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => UflyApp.init());
  } else {
    UflyApp.init();
  }
})();
