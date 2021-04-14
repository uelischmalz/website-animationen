/* Timeline erstellen*/
let tl = gsap.timeline({
  /* ScrollTrigger hinzufügen */
  scrollTrigger: {
    /* Trigger-Element definieren */
    trigger: "#container",
    /* Startposition definieren:
    1. Wert: Wie weit muss man scrollen, bis es beginnt?
    2. Wert: Wie weit soll die Animation beim Start bereits sein?*/
    start: "0px 0px",
    /* Scrubbing aktivieren */
    scrub: true
  }
});


/* Animation zur Timeline hinzufügen */
tl.to("#box", {
  y: 2000,
  x: 1500,
  rotation: 1080
})
