const lenis = new Lenis({
  autoRaf: true,
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
document.addEventListener("DOMContentLoaded", () => {
  // Split text animation
  const text = SplitType.create(".title", { types: "words" });

  //fade up
  const fadeUp = {
    autoAlpha: 0,
    y: 50,
    ease: "power2.out",
  };
  //fade right
  const fadeRight = {
    autoAlpha: 0,
    x: 50,
    ease: "power2.out",
  };
  //fade left
  const fadeLeft = {
    autoAlpha: 0,
    ease: "power2.out",
  };
  //fade left delayed
  const headerElements = {
    ...fadeLeft,
    delay: 0.5,
    stagger: 0.1,
  };

  //fade left elements
  gsap.from(".icon-link", headerElements);
  gsap.from(".nav-item", headerElements);

  //Hero text
  gsap.from("h1 .word", {
    ...fadeUp,
    duration: 0.7,
    stagger: 0.07,
    ease: "back.out(1.7)",
    delay: 0.4,
  });

  gsap.from(".hero-image", {
    scale: 0.8,
    ...fadeLeft,
    delay: 0.5,
  });

  gsap.from(".sub-title, .hero-button,.contact-card", {
    ...fadeUp,
    duration: 0.95,
    delay: 0.6,
    stagger: 0.1,
  });

  gsap.utils.toArray(".card:not(.service-card,.team-card)").forEach((card) => {
    gsap.from(card, {
      scale: 0.7,
      autoAlpha: 0,
      x: 40,
      ease: "power4.out",
      scrollTrigger: {
        trigger: card,
        scrub: true,
        start: "top bottom",
        end: "center bottom",
      },
    });
  });

  gsap.utils.toArray(".accordion-item").forEach((item) => {
    gsap.from(item, {
      scale: 0.5,
      x: 40,
      autoAlpha: 0,
      ease: "power4.out",
      scrollTrigger: {
        trigger: item,
        scrub: true,
        start: "top bottom",
        end: "bottom 70%",
      },
    });
  });

  gsap.utils.toArray(".fade-up").forEach((el) => {
    gsap.from(el, {
      ...fadeUp,
      scrollTrigger: {
        trigger: el,
        scrub: true,
        start: "top bottom",
        end: "bottom 70%",
      },
    });
  });

  gsap.utils.toArray(".fade-right").forEach((el) => {
    gsap.from(el, {
      ...fadeRight,
      scrollTrigger: {
        trigger: el,
        scrub: true,
        start: "top bottom",
        end: "bottom 75%",
      },
    });
  });

  gsap.utils.toArray(".fade-left").forEach((el) => {
    gsap.from(el, {
      ...fadeLeft,
      x: -50,
      scrollTrigger: {
        trigger: el,
        scrub: true,
        start: "top bottom",
        end: "bottom 70%",
      },
    });
  });

  gsap.to("#rotate", {
    rotate: 0,
    scrollTrigger: {
      trigger: "#story-section",
      scrub: true,
      start: "top bottom",
      end: "bottom 45%",
    },
  });
});

document.querySelectorAll(".stat").forEach((stat) => {
  let target = stat.getAttribute("data-target");
  let obj = { val: 0 };

  ScrollTrigger.create({
    trigger: stat,
    start: "top bottom",
    end: "bottom 20%",
    onEnter: () => {
      obj.val = 0;
      gsap.to(obj, {
        val: target,
        duration: 1,
        ease: "power2.out",
        onUpdate: () => {
          stat.textContent = formatK(obj.val);
        },
      });
    },
    onLeaveBack: () => {
      obj.val = 0;
    },
  });
});

function formatK(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0/, "") + "k";
  }
  return Math.floor(num);
}

