// gsap.to("#page2 img", {
//   width: "100%",
//   scrollTrigger: {
//     trigger: "#page2",
//     scroller: "body",
//     markers: true,
//     start: "top 0",
//     end: "top -100%",
//     scrub: 2,
//     pin: true,
//   },
// });

gsap.to("#page2 h1", {
  transform: "translateX(-135%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0",
    end: "top -100% ",
    markers: true,
    scrub: 2,
    pin: true,
  },
});
