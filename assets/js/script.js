

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".project-card").forEach(card => {
  const title = card.querySelector(".title-tab");

  gsap.set(title, {
    y: 28.5,
  });

  card.addEventListener("mouseenter", () => {
    gsap.to(title, {
      y: -5,
      duration: 0.35,
      ease: "power2.out",
      borderTopLeftRadius: "12px",
      borderTopRightRadius: "12px"
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(title, {
      y: 28.5,
      borderTopLeftRadius: "0px",
      borderTopRightRadius: "0px",
      borderBottomLeftRadius: "12px",
      borderBottomRightRadius: "12px",
      duration: 0.3,
      ease: "power2.inOut"
    });
  });
});


document.querySelectorAll(".project-card").forEach(card => {
  const overlay = card.querySelector(".image-overlay");
  const image = card.querySelector(".image-wrap img");

  gsap.set(overlay, { opacity: 0 });
  gsap.set(image, { filter: "blur(0px)" });

  card.addEventListener("mouseenter", () => {
    gsap.to(overlay, {
      opacity: 1,
      duration: 0.25,
      ease: "power2.out"
    });

    gsap.to(image, {
      filter: "blur(4px)",
      duration: 0.25,
      ease: "power2.out"
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.25,
      ease: "power2.inOut"
    });

    gsap.to(image, {
      filter: "blur(0px)",
      duration: 0.25,
      ease: "power2.inOut"
    });
  });
});

document.querySelectorAll(".project-card").forEach(card => {
  const overlay = card.querySelector(".image-overlay");
  const btn = overlay.querySelector("a");
  const icon = btn.querySelector("i");

  // Initial states
  gsap.set(overlay, { autoAlpha: 0 });
  gsap.set(btn, { x: 0, y: 0 });
  gsap.set(icon, { y: 12, rotate: -45, opacity: 0 });

  card.addEventListener("mouseenter", () => {
    gsap.to(overlay, {
      autoAlpha: 1,
      duration: 0.35,
      ease: "power2.out"
    });

    gsap.to(icon, {
      y: 0,
      rotate: 0,
      opacity: 1,
      duration: 0.45,
      ease: "power3.out"
    });
  });

  // card.addEventListener("mousemove", (e) => {
  //     const rect = card.getBoundingClientRect();
  //     const x = e.clientX - rect.left - rect.width / 2;
  //     const y = e.clientY - rect.top - rect.height / 2;

  //     gsap.to(btn, {
  //         x: x * 0.05,
  //         y: y * 0.05,
  //         duration: 0.3,
  //         ease: "power2.out"
  //     });
  // });

  card.addEventListener("mouseleave", () => {
    gsap.to(overlay, {
      autoAlpha: 0,
      duration: 0.3,
      ease: "power2.inOut"
    });

    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.35,
      ease: "power2.inOut"
    });

    gsap.to(icon, {
      y: 12,
      rotate: -45,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut"
    });
  });
});

// document.querySelectorAll(".section2 .project-card").forEach((card, index) => {
//     gsap.to(card, {
//         y: -8,
//         duration: 10 + Math.random(), // different speed
//         ease: "sine.inOut",
//         repeat: -1,
//         yoyo: true,
//         delay: index * 0.25 // offset start
//     });
// });

gsap.utils.toArray(".skill-pill").forEach((pill, i) => {
  gsap.to(pill, {
    y: gsap.utils.random(-20, 20),
    x: gsap.utils.random(-15, 15),
    duration: gsap.utils.random(3, 6),
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: i * 0.3
  });
});

// SECTION 4
let scrollTween = gsap.to(".about-track", {
  x: "-200%",
  transformStyle: "preserve-3d",
  ease: "none",
  scrollTrigger: {
    trigger: ".about-section",
    scroller: "body",
    start: "top top",
    end: "top -303%",
    scrub: 2,
    pin: true,
    anticipatePin: 1,
  }
});

// PANEL 1 IMAGE DESKTOP

const wrapper = document.querySelector('.about-img-wrapper');
const defaultImg = document.querySelector('.img-default');
const hoverImg = document.querySelector('.img-hover');
const caption = document.querySelector('.about-caption');

// Initial state
gsap.set(hoverImg, { opacity: 0, scale: 1.1 });
gsap.set(defaultImg, { opacity: 1, scale: 1 });

wrapper.addEventListener("mouseenter", () => {
  gsap.to(defaultImg, {
    opacity: 0,
    scale: 1.1,
    duration: 0.6,
    ease: "power2.out"
  });

  gsap.to(hoverImg, {
    opacity: 1,
    scale: 1,
    duration: 0.6,
    ease: "power2.out"
  });

  gsap.to(caption, {
    opacity: 0,
    y: 10,
    duration: 0.2,
    onComplete: () => {
      caption.textContent = "Yoo, It's Me!";
      gsap.to(caption, {
        opacity: 1,
        y: 0,
        duration: 0.3
      });
    }
  });
});

wrapper.addEventListener("mouseleave", () => {
  gsap.to(defaultImg, {
    opacity: 1,
    scale: 1,
    duration: 0.6,
    ease: "power2.out"
  });

  gsap.to(hoverImg, {
    opacity: 0,
    scale: 1.1,
    duration: 0.6,
    ease: "power2.out"
  });

  gsap.to(caption, {
    opacity: 0,
    y: 10,
    duration: 0.2,
    onComplete: () => {
      caption.textContent = "Hover Me";
      gsap.to(caption, {
        opacity: 1,
        y: 0,
        duration: 0.3
      });
    }
  });
});

// PANEL 1 IMAGE MOBILE
const mobileWrapper = document.querySelector('.mobile-img-wrapper');
const mobileDefault = document.querySelector('.mobile-img-wrapper .img-default');
const mobileHover = document.querySelector('.mobile-img-wrapper .img-hover');
const mobileCaption = document.querySelector('.mobile-caption');

let toggled = false;

// Initial state
gsap.set(mobileHover, { opacity: 0, scale: 1.1 });
gsap.set(mobileDefault, { opacity: 1, scale: 1 });

mobileWrapper.addEventListener("click", () => {

    toggled = !toggled;

    if (toggled) {
        // Show real image
        gsap.to(mobileDefault, { opacity: 0, scale: 1.1, duration: 0.5 });
        gsap.to(mobileHover, { opacity: 1, scale: 1, duration: 0.5 });

        gsap.to(mobileCaption, {
            opacity: 0,
            y: 10,
            duration: 0.2,
            onComplete: () => {
                mobileCaption.textContent = "Yoo, It's Me!";
                gsap.to(mobileCaption, { opacity: 1, y: 0, duration: 0.3 });
            }
        });

    } else {
        // Back to spiderman
        gsap.to(mobileDefault, { opacity: 1, scale: 1, duration: 0.5 });
        gsap.to(mobileHover, { opacity: 0, scale: 1.1, duration: 0.5 });

        gsap.to(mobileCaption, {
            opacity: 0,
            y: 10,
            duration: 0.2,
            onComplete: () => {
                mobileCaption.textContent = "Tap Me";
                gsap.to(mobileCaption, { opacity: 1, y: 0, duration: 0.3 });
            }
        });
    }
});


// SECTION 5

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    start: "top 75%",
    toggleActions: "play none none reverse"
  }
});

/* Section fade */
tl.from(".section5", {
  opacity: 0,
  duration: 0.8
});

/* Pentagon pop */
tl.from(".pentagon-shape", {
  scale: 0.7,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)"
});

/* Text reveal */
tl.from(".pentagon-shape > *", {
  y: 20,
  opacity: 0,
  stagger: 0.15
}, "-=0.5");


// SECTION 3
gsap.from(".skill-item", {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 20%",
  },
  opacity: 0,
  y: 300,
  scale: 1,
  duration: 1.3,
  stagger: 0.15,
  ease: "power4.out"
});

Draggable.create(".skill-item", {
  inertia: true,
  bounds: "#skills",
  edgeResistance: 0.65,
  onPress() {
    gsap.killTweensOf(this.target);
  },
  onRelease() {
    gsap.to(this.target, {
      y: "-=12",
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }
});

const dock = document.querySelector("#tools");
const items = document.querySelectorAll(".dock-item");

items.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {

    // Reset everything first (soft reset)
    gsap.to(items, {
      scale: 1,
      y: 0,
      duration: 0.2,
      ease: "power3.out"
    });

    // Active item
    gsap.to(item, {
      scale: 1.8,
      y: -18,
      duration: 0.25,
      ease: "power3.out"
    });

    // Left neighbor
    if (items[index - 1]) {
      gsap.to(items[index - 1], {
        scale: 1.3,
        y: -10,
        duration: 0.25,
        ease: "power3.out"
      });
    }

    // Right neighbor
    if (items[index + 1]) {
      gsap.to(items[index + 1], {
        scale: 1.3,
        y: -10,
        duration: 0.25,
        ease: "power3.out"
      });
    }
  });
});

// 🔥 Reset ONLY when cursor leaves the dock area
dock.addEventListener("mouseleave", () => {
  gsap.to(items, {
    scale: 1,
    y: 0,
    duration: 0.3,
    ease: "power3.out"
  });
});


// SECTION 1
const greetings = [
  "வணக்கம் !",
  "Hello !",
  "Hola !",
  "Bonjour !",
  "Ciao !",
  "こんにちは !",
  "안녕하세요 !",
  "你好 !",
  "Hallo !",
  "Olá !",
  "Привет !",
  "नमस्ते !",
  "مرحبا !"

];

function isComplexScript(text) {
  return /[\u0B80-\u0BFF\u0900-\u097F]/.test(text);
  // Tamil + Devanagari
}


function breakTheText(text) {
  const h1 = document.getElementById("greetingText");
  h1.innerHTML = "";

  if (isComplexScript(text)) {
    // Animate whole word (no splitting)
    h1.innerHTML = `<span class="word d-inline-block">${text}</span>`;
    return "word";
  }

  const letters = text.split("");
  const halfValue = Math.ceil(letters.length / 2);
  let clutter = "";

  letters.forEach((letter, idx) => {
    clutter += `<span class="${idx < halfValue ? "a" : "b"} d-inline-block">${letter}</span>`;
  });

  h1.innerHTML = clutter;
  return "letters";
}

function animateWordIn() {
  gsap.from("#greetingText .word", {
    y: 18,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out"
  });
}

function animateText(type) {
  if (type === "word") {
    gsap.from("#greetingText .word", {
      y: 18,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    });
  } else {
    gsap.from("#greetingText .a", {
      y: 18,
      opacity: 0,
      duration: 0.6,
      stagger: 0.04,
      ease: "power2.out"
    });

    gsap.from("#greetingText .b", {
      y: 18,
      opacity: 0,
      duration: 0.6,
      stagger: -0.04,
      ease: "power2.out"
    });
  }
}


function animateOut(type, callback) {
  const tl = gsap.timeline({ onComplete: callback });

  if (type === "word") {
    tl.to("#greetingText .word", {
      y: -18,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in"
    });
  } else {
    tl.to("#greetingText .a", {
      y: -18,
      opacity: 0,
      duration: 0.5,
      stagger: 0.06,
      ease: "power2.in"
    });

    tl.to("#greetingText .b", {
      y: -18,
      opacity: 0,
      duration: 0.5,
      stagger: -0.06,
      ease: "power2.in"
    }, "<");
  }
}

let index = 0;

function playGreeting() {
  const type = breakTheText(greetings[index]); // 🔥 CAPTURE TYPE

  animateText(type);

  index = (index + 1) % greetings.length;

  gsap.delayedCall(1.4, () => {
    animateOut(type, playGreeting);
  });
}

playGreeting();



let showColon = true;

function updateIndiaTime() {
  const timeEl = document.getElementById("indiaTime");

  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  const colon = showColon ? ":" : " ";
  showColon = !showColon;

  timeEl.textContent = `${hours}${colon}${minutes} ${ampm}`;
}

updateIndiaTime();
setInterval(updateIndiaTime, 1000);



const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
[...tooltipTriggerList].forEach(el => {
  new bootstrap.Tooltip(el);
});

gsap.set("#dragHint", { opacity: 0 });

ScrollTrigger.create({
  trigger: ".section3",
  start: "top 1%",
  once: true,
  onEnter: () => {

    // 👇 timeline for clean sequence
    const tl = gsap.timeline();

    tl.to("#dragHint", {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    })

      // ⏳ wait 5 seconds
      .to("#dragHint", {
        opacity: 1,
        duration: 1
      })

      // 👋 fade out
      .to("#dragHint", {
        opacity: 0,
        y: -10,
        duration: 0.6,
        ease: "power2.in",
        onComplete: () => {
          document.getElementById("dragHint").style.display = "none";
        }
      });

  }
});


// X Y LOCATION TRACKER
// document.addEventListener('mousemove', function(e) {
//     const section = document.querySelector('.track');
//     const rect = section.getBoundingClientRect();
//     const left = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1);
//     const top = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1);
//     console.log(`left: ${left}% | top: ${top}%`);
// });

//  DESKTOP VERSION STARTS 

// CONSTELLATION ANIMATION
document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(ScrollTrigger);

  // Initial state
  gsap.set(".star", {
    scale: 0,
    opacity: 0,
    transformOrigin: "center"
  });

  gsap.set(".line", {
    scaleX: 0,
    transformOrigin: "left center"
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".constellation-section",
      containerAnimation: scrollTween,
      start: "35% 80%",
      toggleActions: "play none none none"
    }
  });

  // ⭐ Star A
  tl.to(".star-a", {
    scale: 1,
    opacity: 1,
    duration: 0.4,
    ease: "back.out(2)"
  })

    // ✨ Line A → B
    .to(".line-ab", {
      scaleX: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.1")

    // ⭐ Star B
    .to(".star-b", {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: "back.out(2)"
    }, "-=0.4")

    // ✨ Line B → C
    .to(".line-bc", {
      scaleX: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.1")

    // ⭐ Star C
    .to(".star-c", {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: "back.out(2)"
    }, "-=0.4")

    // ✨ Line C → D
    .to(".line-cd", {
      scaleX: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.1")

    // ⭐ Star D
    .to(".star-d", {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: "back.out(2)"
    }, "-=0.4")

    // ✨ Line D → E
    .to(".line-de", {
      scaleX: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.1")

    // ⭐ Star E
    .to(".star-e", {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: "back.out(2)"
    }, "-=0.4");

});

// SPARK ANIMATION
gsap.to(".star", {
  boxShadow: "0 0 8px rgba(255,255,255,0.8)",
  duration: 1.5,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

gsap.set(".star", {
  opacity: 1
});


// ✨ RADAR / SPARK EFFECT
gsap.utils.toArray(".star").forEach(star => {

  function createRipple() {

    let ripple = document.createElement("div");

    Object.assign(ripple.style, {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "12px",   // SAME as star size
      height: "12px",
      borderRadius: "50%",
      border: "2px solid rgba(255,255,255,0.6)",
      transform: "translate(-50%, -50%) scale(1)",
      pointerEvents: "none"
    });

    star.appendChild(ripple);

    gsap.to(ripple, {
      scale: 4,              // expand outward
      opacity: 0,            // fade out
      duration: 1.5,
      ease: "power1.out",
      onComplete: () => {
        ripple.remove();
        gsap.delayedCall(Math.random() * 1.5 + 0.5, createRipple);
      }
    });
  }

  createRipple();
});

// STAR HOVER ANIMATION
document.querySelectorAll(".star").forEach(star => {

  const popup = star.querySelector(".star-popup");

  star.addEventListener("mouseenter", () => {

    gsap.killTweensOf(popup);

    gsap.to(popup, {
      opacity: 1,
      scale: 1,
      y: -10,
      duration: 0.4,
      ease: "power3.out"
    });

  });

  star.addEventListener("mouseleave", () => {

    gsap.killTweensOf(popup);

    gsap.to(popup, {
      opacity: 0,
      scale: 0.8,
      y: 0,
      duration: 0.3,
      ease: "power2.in"
    });

  });

});

const cursor = document.querySelector(".demo-cursor");
const star = document.querySelector(".demo-star");

const t1 = gsap.timeline({ repeat: -1, repeatDelay: 1 });

// move cursor to star
t1.to(cursor, {
  top: 45,
  left: 47,
  duration: 0.8,
  ease: "power2.out"
})

  // star pulse (radar effect)
  .to(star, {
    scale: 1.4,
    boxShadow: "0 0 20px rgba(255,255,255,0.9), 0 0 0 10px rgba(255,255,255,0.1)",
    duration: 0.3,
    ease: "power2.out"
  }, "-=0.2")

  // return star to normal
  .to(star, {
    scale: 1,
    boxShadow: "0 0 8px rgba(255,255,255,0.5), 0 0 0 0 rgba(255,255,255,0)",
    duration: 0.3
  })

  // move cursor back
  .to(cursor, {
    top: 70,
    left: 70,
    duration: 0.8,
    ease: "power2.in"
  });

//  DESKTOP VERSION ENDS

// MOBILE VERSION STARTS

// CONSTELLATION ENTRY
document.addEventListener("DOMContentLoaded", () => {

  // Initial state
  gsap.set(".star-mobile", {
    scale: 0,
    opacity: 0,
    transformOrigin: "center"
  });

  const tlMobile = gsap.timeline({
    scrollTrigger: {
      trigger: ".constellation-section",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  tlMobile
    .to(".star-a-mobile", { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" })
    .to(".star-b-mobile", { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" }, "-=0.2")
    .to(".star-c-mobile", { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" }, "-=0.2")
    .to(".star-d-mobile", { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" }, "-=0.2")
    .to(".star-e-mobile", { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" }, "-=0.2");

});

// SPARK / GLOW EFFECT
gsap.to(".star-mobile", {
  boxShadow: "0 0 8px rgba(255,255,255,0.8)",
  duration: 1.5,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

// RIPPLE EFFECT 
gsap.utils.toArray(".star-mobile").forEach(star => {

  function createRipple() {

    let ripple = document.createElement("div");

    Object.assign(ripple.style, {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      border: "2px solid rgba(255,255,255,0.6)",
      transform: "translate(-50%, -50%) scale(1)",
      pointerEvents: "none"
    });

    star.appendChild(ripple);

    gsap.to(ripple, {
      scale: 4,
      opacity: 0,
      duration: 1.5,
      ease: "power1.out",
      onComplete: () => {
        ripple.remove();
        gsap.delayedCall(Math.random() * 1.5 + 0.5, createRipple);
      }
    });
  }

  createRipple();
});

// CLICK EFFECT
document.querySelectorAll(".star-mobile").forEach(star => {

  const popup = star.querySelector(".star-popup-mobile");

  star.addEventListener("click", () => {

    const isOpen = star.classList.contains("active");

    // close all
    document.querySelectorAll(".star-mobile").forEach(s => {
      s.classList.remove("active");
      gsap.to(s.querySelector(".star-popup-mobile"), {
        opacity: 0,
        scale: 0.8,
        y: 0,
        duration: 0.3
      });
    });

    // open clicked
    if (!isOpen) {
      star.classList.add("active");

      gsap.to(popup, {
        opacity: 1,
        scale: 1,
        y: -10,
        duration: 0.4,
        ease: "power3.out"
      });
    }

  });

});

// STAR HOVER ANIMATION MOBILE 
const cursorMobile = document.querySelector(".demo-cursor-mobile");
const starMobile = document.querySelector(".demo-star-mobile");

const t2 = gsap.timeline({ repeat: -1, repeatDelay: 1 });

// move cursor to star
t2.to(cursorMobile, {
  top: 24,
  left: 24,
  duration: 0.8,
  ease: "power2.out"
})

  // star pulse (radar effect)
  .to(starMobile, {
    scale: 1.4,
    boxShadow: "0 0 20px rgba(255,255,255,0.9), 0 0 0 10px rgba(255,255,255,0.1)",
    duration: 0.3,
    ease: "power2.out"
  }, "-=0.2")

  // return star to normal
  .to(starMobile, {
    scale: 1,
    boxShadow: "0 0 8px rgba(255,255,255,0.5), 0 0 0 0 rgba(255,255,255,0)",
    duration: 0.3
  })

  // move cursor back
  .to(cursorMobile, {
    top: 47,
    left: 40,
    duration: 0.8,
    ease: "power2.in"
  });

// MOBILE VERSION ENDS

// SECTION 7
const btn = document.querySelector(".ultra-btn");
const glow = btn.querySelector(".glow");
const icon = btn.querySelector(".icon");

// Initial glow setup
gsap.set(glow, {
  scale: 0,
  background: "radial-gradient(circle, rgba(106,92,255,0.6), transparent 60%)",
  xPercent: -50,
  yPercent: -50
});

// 🎬 ENTRY ANIMATION
gsap.from(btn, {
  opacity: 0,
  y: 40,
  duration: 0.8,
  ease: "power3.out"
});

// 🧲 + 🧊 + 🌈 INTERACTION
btn.addEventListener("mousemove", (e) => {
  const rect = btn.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const moveX = (x - centerX) * 0.25;
  const moveY = (y - centerY) * 0.25;

  // Magnetic movement
  gsap.to(btn, {
    x: moveX,
    y: moveY,
    duration: 0.3,
    ease: "power2.out"
  });

  // 3D Tilt
  gsap.to(btn, {
    rotationY: (x - centerX) / 10,
    rotationX: -(y - centerY) / 10,
    transformPerspective: 500,
    duration: 0.3
  });

  // Glow follow
  gsap.to(glow, {
    x: x,
    y: y,
    scale: 1,
    duration: 0.2
  });
});

// Hover enter
btn.addEventListener("mouseenter", () => {
  gsap.to(btn, {
    scale: 1.08,
    boxShadow: "0 25px 60px rgba(47,22,100,0.7)",
    duration: 0.4
  });

  gsap.to(icon, {
    rotation: 25,
    scale: 1.3,
    duration: 0.4,
    ease: "back.out(2)"
  });
});

// Hover leave (RESET EVERYTHING SMOOTHLY)
btn.addEventListener("mouseleave", () => {
  gsap.to(btn, {
    x: 0,
    y: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    duration: 0.5,
    ease: "power3.out"
  });

  gsap.to(glow, {
    scale: 0,
    duration: 0.3
  });

  gsap.to(icon, {
    rotation: 0,
    scale: 1,
    duration: 0.3
  });
});

// 💥 ADVANCED RIPPLE BURST
btn.addEventListener("click", (e) => {
  const ripple = document.createElement("span");

  ripple.style.position = "absolute";
  ripple.style.width = "30px";
  ripple.style.height = "30px";
  ripple.style.borderRadius = "50%";
  ripple.style.background = "rgba(255,255,255,0.5)";
  ripple.style.pointerEvents = "none";

  btn.appendChild(ripple);

  const rect = btn.getBoundingClientRect();
  ripple.style.left = `${e.clientX - rect.left}px`;
  ripple.style.top = `${e.clientY - rect.top}px`;

  gsap.fromTo(ripple,
    { scale: 0, opacity: 1 },
    {
      scale: 10,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      onComplete: () => ripple.remove()
    }
  );
});


// ------------------------------------------------------------------------------------

// KEY DISABLE CODES
document.addEventListener('contextmenu',
function(event){
    event.preventDefault();
})

document.addEventListener("keydown", function (e) {

    const key = e.key.toLowerCase();

    // F12
    if (key === "f12") {
        e.preventDefault();
        return false;
    }

    // Ctrl + U (View Source)
    if (e.ctrlKey && key === "u") {
        e.preventDefault();
        return false;
    }

    // Ctrl + I
    if (e.ctrlKey && key === "i") {
        e.preventDefault();
        return false;
    }

    // Ctrl + Shift + I (DevTools)
    if (e.ctrlKey && e.shiftKey && key === "i") {
        e.preventDefault();
        return false;
    }

    // Ctrl + Shift + J (Console)
    if (e.ctrlKey && e.shiftKey && key === "j") {
        e.preventDefault();
        return false;
    }

    // Ctrl + Shift + C (Inspect)
    if (e.ctrlKey && e.shiftKey && key === "c") {
        e.preventDefault();
        return false;
    }

});