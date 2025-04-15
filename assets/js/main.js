const lenis = new Lenis({
  autoRaf: true,
});
// Split text animation
const text = SplitType.create("#title", { types: "words" });

// Common animation properties
const fadeUp = {
  opacity: 0,
  y: 50,
  ease: "power2.out",
};

const headingAnimation = {
  opacity: 0,
  scale: 0.7,
  duration: 0.05,
};

const headerElements = {
  opacity: 0,
  stagger: 0.1,
  delay: 0.4,
};
// icon links
gsap.from(".icon-link", headerElements);
gsap.from(".nav-item", headerElements);
gsap.from("#nav-btn", headerElements);

// Hero section animations
gsap.from("h1 .word", {
  ...fadeUp,
  duration: 0.7,
  stagger: 0.07,
  ease: "back.out(1.7)",
  delay: 0.4,
});

gsap.from("#sub-title, #hero-button, #service-btn", {
  ...fadeUp,
  duration: 0.95,
  delay: 0.6,
  stagger: 0.1,
});

// Map and footer
const simpleFadeUp = {
  opacity: 0,
  y: 100,
  duration: 0.3,
};

gsap.from("#footer", {
  ...simpleFadeUp,
  scrollTrigger: {
    trigger: "#footer",
    start: "top bottom",
    end: "top 80%",
    scrub: true,
  },
});
