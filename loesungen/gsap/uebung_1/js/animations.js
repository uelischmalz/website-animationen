gsap.to("#greenBox", {
  duration: 2,
  scale: 1.2,
  x: 500
});

gsap.to("#redBox", { /* mit gsap.from umkehren */
  duration: 2,
  x: 500,
  backgroundColor: "#FFFF00",
  rotation: 360,
  opacity: 1

});

gsap.fromTo("#blueBox", {

  width: "0px"
},{
  duration: 4,
  ease: "elastic",
  width: "50%",
  onComplete: fertig
});

function fertig(){
  alert("Fertig!");
}
