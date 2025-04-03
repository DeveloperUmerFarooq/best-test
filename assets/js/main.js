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

gsap.from("#sub-title, #hero-button", {
  ...fadeUp,
  duration: 0.95,
  delay: 0.6,
  stagger: 0.1,
});

// About section timeline
const aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#about-section",
    scrub: 2,
    start: "top 90%",
    end: "top -40%",
  },
});

aboutTl
  .from("#about-text", { x: 10, y: 50, opacity: 0, scale: 0 })
  .from("#about-top-text", { y: -50, opacity: 0, duraction: 1 })
  .from("#about-side-text", { x: 10, opacity: 0, duration: 1 })
  .from("#about-img", { scale: 0, duration: 1 })
  .from("#about-below-text", { opacity: 0, y: 100, duration: 1 })
  .from("#about-btn-1", { x: -10, duration: 1 })
  .from("#about-btn-2", { x: 10, duration: 1 }, "-=1");

// About heading
gsap.from("#about-heading", {
  ...headingAnimation,
  scrollTrigger: {
    trigger: "#about-heading",
    start: "top 90%",
    end: "center 80%",
    scrub: 2,
  },
});

//faq section
// faq heading
gsap.from("#faq-heading", {
  ...headingAnimation,
  scrollTrigger: {
    trigger: "#faq-section",
    start: "top 90%",
    end: "center 90%",
    scrub: 2,
  },
});

// Why Us section
gsap.from("#why-us-heading", {
  ...headingAnimation,
  scrollTrigger: {
    trigger: "#why-us",
    start: "top bottom",
    end: "top center",
    scrub: 2,
  },
});

// Map and footer
const simpleFadeUp = {
  opacity: 0,
  y: 100,
  duration: 0.3,
};

gsap.from("#map", {
  ...simpleFadeUp,
  scrollTrigger: {
    trigger: "#map-section",
    start: "top bottom",
    end: "top 70%",
    scrub: true,
    toggleActions: "play none none reverse",
  },
});

gsap.from("#footer", {
  ...simpleFadeUp,
  scrollTrigger: {
    trigger: "#footer",
    start: "top bottom",
    end: "top 80%",
    scrub: true,
    toggleActions: "play none none reverse",
  },
});
