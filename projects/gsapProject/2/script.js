gsap.from("#page1 #circle", {
  scale: 0,
  delay: 1,
  duation: 2,
  rotate: 360,
});

gsap.from("#page2 #circle", {
  scale: 0,
  duation: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #circle",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: 5,
  },
});
gsap.from("#page3 #circle", {
  scale: 0,
  delay: 1,
  duation: 2,
  rotate: 360,
});
