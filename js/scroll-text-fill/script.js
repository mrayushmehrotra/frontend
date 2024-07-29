var txt = document.querySelectorAll("#page2 h1");

clutter = "";

txt.forEach((e) => {
  var clutter = "";
  varh1 = e.textContent;
  var splittedTxt = varh1.split("");

  splittedTxt.forEach(function (elem) {
    clutter += `<span>${elem}</span>`;
  });
  e.innerHTML = clutter;
  console.log(clutter);
});

gsap.to("#page2 span", {
  color: "wheat",
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 40%",
    end: "top 10%",
    scrub: true,
  },
});

// var splitTxt = txt.split("");

// var clutter = "";
// splitTxt.forEach((e) => {
//   clutter += `<span>${e}</span>`;
//   console.log(clutter);
// });

// document.querySelector("#first").innerHTML = clutter;

// gsap.to("#page2 span", {
//   color: "red",
//   stagger: 0.5,
//   scrollTrigger: {
//     trigger: "#page2",
//     scroller: "body",
//     markers: true,
//     start: "top 50%",
//     end: " top 10%",
//     scrub: true,
//   },
// });
