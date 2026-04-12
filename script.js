/* ============================================================
   Amanuel Berhe — Portfolio Scripts
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Navbar: scroll-triggered background ---------- */
  const navbar = document.getElementById('navbar');
  if (navbar && !navbar.classList.contains('navbar--solid')) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Mobile hamburger ---------- */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
      // Animate spans
      const spans = hamburger.querySelectorAll('span');
      if (open) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity  = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity  = '';
        spans[2].style.transform = '';
      }
    });
  }

  /* ---------- Scroll Reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => observer.observe(el));
  }

  /* ---------- Skill bar animation ---------- */
  const skillBars = document.querySelectorAll('.skill-bar__fill[data-width]');
  if (skillBars.length) {
    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fill = entry.target;
            const pct  = fill.getAttribute('data-width');
            // Trigger after a short stagger
            setTimeout(() => {
              fill.style.width = pct + '%';
              fill.classList.add('animate');
            }, 100);
            barObserver.unobserve(fill);
          }
        });
      },
      { threshold: 0.3 }
    );
    skillBars.forEach((bar) => barObserver.observe(bar));
  }

  /* ---------- Contact form demo ---------- */
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('.form-submit');

      // Simple required-field check
      let valid = true;
      contactForm.querySelectorAll('[required]').forEach((input) => {
        if (!input.value.trim()) {
          input.style.borderColor = '#ef4444';
          valid = false;
        } else {
          input.style.borderColor = '';
        }
      });

      if (!valid) return;

      // Simulate submission
      btn.textContent = 'Sending…';
      btn.disabled = true;

      setTimeout(() => {
        contactForm.querySelectorAll('.form-control').forEach((el) => {
          if (el.tagName === 'SELECT') el.selectedIndex = 0;
          else el.value = '';
        });
        btn.textContent = 'Send Message';
        btn.disabled = false;
        formSuccess.classList.add('show');
        setTimeout(() => formSuccess.classList.remove('show'), 5000);
      }, 1200);
    });

    // Live validation: restore border on input
    contactForm.querySelectorAll('[required]').forEach((input) => {
      input.addEventListener('input', () => {
        input.style.borderColor = '';
      });
    });
  }

  /* ---------- Active nav link based on current page ---------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__links a, .navbar__mobile a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

})();
