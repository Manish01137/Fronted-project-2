const cursor = document.getElementById("cursor");
const cursorImg = document.getElementById("cursor-img");
const images = cursorImg.querySelectorAll("img");

let index = 0;

 
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursorImg.style.left = e.clientX - 125 + "px"; // center align (250px / 2)
    cursorImg.style.top = e.clientY - 125 + "px";
});

 
setInterval(() => {
    images.forEach((img, i) => {
        img.style.opacity = "0";
    });

    images[index].style.opacity = "1";
    index = (index + 1) % images.length;
}, 1000);
 
 
 
 // chatgpt ne bola hai karne ko
 let indexx = 0;
const imgs = document.querySelectorAll(".mainimg");

// Show first image at start
imgs[indexx].classList.add("active");

setInterval(() => {
  imgs[indexx].classList.remove("active");  // hide current
  indexx = (indexx + 1) % imgs.length;       // move to next
  imgs[indexx].classList.add("active");     // show next
}, 1000); // every 2 seconds

 // chatgpt ne bola hai khatam karn ko

//sheriyans

Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./0.mp4", "./2.mp4", "./3.mp4"],
});

gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});

let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
  style: 4,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});
// sheryian code over here

let imagess = document.querySelectorAll(".images img");

sections.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onEnter: () => activateImage(index),
    onEnterBack: () => activateImage(index),
  });
});

function activateImage(index) {
  imagess.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}
 
// sheriyans wave form

let sectionss = document.querySelectorAll(".fleftelm");

Shery.imageEffect(".images", {
  style: 4, // 4 = wave/distort scroll style
  config: {
    a: { value: 2.5, range: [0, 30] }, // wave amplitude
    b: { value: -0.94, range: [-1, 1] },
    aspect: { value: 1.6 },
    gooey: true,
  },
  slideStyle: (setScroll) => {
    sectionss.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onUpdate: (self) => {
          setScroll(index + self.progress);
        },
      });
    });
  },
});



// chatgpt second time bola hai start karne ko 
// let indexxx = 0;
// const imgss = document.querySelectorAll(".mainimg");

// // First image appears initially
// imgss[indexxx].classList.add("animate-in");

// setInterval(() => {
//   const current = imgss[indexxx];
//   current.classList.remove("animate-in");
//   current.classList.add("animate-out");

//   indexxx = (indexxx + 1) % imgss.length;
//   const next = imgss[indexxx];
//   next.classList.remove("animate-out");
//   next.classList.add("animate-in");

//   // Clean up after animation ends
//   setTimeout(() => {
//     current.classList.remove("animate-out");
//   }, 1000);
// }, 3000);

// chatgpt second time bola hai end karne ko
