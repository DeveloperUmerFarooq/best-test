const lenis = new Lenis({
  autoRaf: true,
});
// Split text animation
const text = SplitType.create(".title", { types: "words" });

//fade up
const fadeUp = {
  autoAlpha: 0,
  y: 50,
  ease: "power2.out",
};

//fade left
const headerElements = {
  opacity: 0,
  x:-10,
  stagger: 0.1,
  delay: 0.4,
};

//fade left elements
gsap.from(".icon-link", headerElements);
gsap.from(".nav-item,.contact-card", headerElements);

//fade up elements
gsap.from("h1 .word", {
  ...fadeUp,
  duration: 0.7,
  stagger: 0.07,
  ease: "back.out(1.7)",
  delay: 0.4,
});

gsap.from(".sub-title, .hero-button", {
  ...fadeUp,
  duration: 0.95,
  delay: 0.6,
  stagger: 0.1,
});