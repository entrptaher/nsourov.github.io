window.sr = ScrollReveal();

sr.reveal(".fa", { duration: 2000 }, 100);
sr.reveal(".mail", { easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' });
sr.reveal(
  ".card",
  {
    duration: 1000,
    opacity: 0,
    scale: 0.9,
    viewFactor: 0.2,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  },
  200
);
