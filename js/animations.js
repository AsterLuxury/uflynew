/* ═══════════════════════════════════════════════════
   UFLY TRAVEL — Animations Engine
   Scroll reveals, counter-up, marquee, video handling
   ═══════════════════════════════════════════════════ */
(function() {
  'use strict';

  const UflyAnim = {};

  /* ─── Scroll Reveal with IntersectionObserver ─── */
  UflyAnim.initReveals = function() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  };

  /* ─── Counter Animation ─── */
  UflyAnim.initCounters = function() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'), 10);
          const duration = 2000;
          const start = performance.now();

          function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(ease * target);

            // Remove the plus span from counting, preserve it in innerHTML
            const plusSpan = el.querySelector('.plus');
            const text = current.toLocaleString();
            if (plusSpan) {
              el.replaceChild(document.createTextNode(text), el.firstChild);
            } else {
              el.textContent = text;
            }

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              // Ensure final value with plus
              const finalPlus = el.querySelector('.plus');
              if (finalPlus) {
                el.replaceChild(document.createTextNode(target.toLocaleString()), el.firstChild);
              } else {
                el.textContent = target.toLocaleString();
              }
            }
          }
          requestAnimationFrame(update);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
  };

  /* ─── Marquee ─── */
  UflyAnim.initMarquee = function() {
    const track = document.getElementById('marqueeTrack');
    if (!track) return;

    // Ensure the track loops seamlessly by cloning if needed
    const spans = track.querySelectorAll('span');
    if (spans.length < 2) {
      // Already have 2 spans from HTML, good
    }
  };

  /* ─── Video Player Optimizations ─── */
  UflyAnim.initVideos = function() {
    document.querySelectorAll('video').forEach(v => {
      // Ensure muted autoplay works
      v.muted = true;
      v.playsInline = true;
      
      // Handle visibility - pause when offscreen
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      }, { threshold: 0 });

      observer.observe(v);
    });
  };

  /* ─── Progress Bar ─── */
  UflyAnim.initProgress = function() {
    const bar = document.getElementById('progressBar');
    if (!bar) return;

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = progress + '%';
    }, { passive: true });
  };

  /* ─── Init ─── */
  UflyAnim.init = function() {
    this.initReveals();
    this.initCounters();
    this.initMarquee();
    this.initVideos();
    this.initProgress();
  };

  // Export
  window.UflyAnim = UflyAnim;
  
  // Auto-init after DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => UflyAnim.init());
  } else {
    UflyAnim.init();
  }
})();
