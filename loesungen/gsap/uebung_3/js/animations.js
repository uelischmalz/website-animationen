/* Timeline erstellen */
let tl = gsap.timeline({
  /* Standardwerte für alle enthaltenen Animationen festlegen */
  defaults: {
              duration: 1
            },
  /* Timeline Special Properties */
  repeat: 5,
  yoyo: true
});

/* Element zur Timeline hinzufügen */
tl.to("#graph1", {
  /* Dauer */
  /*duration: 1,*/
  /* Zielhöhe */
  height: "100%",
  /* Zielfarbe */
  backgroundColor: "#CD5C5C",
}, 0); /* Positionsparameter */

/* Element zur Timeline hinzufügen */
tl.to("#graph2", {
  /* Dauer */
  /*duration: 1,*/
  /* Zielhöhe */
  height: "75%",
  /* Zielfarbe */
  backgroundColor: "#CD5C5C",
}, 2); /* Positionsparameter */

/* Element zur Timeline hinzufügen */
tl.to("#graph3", {
  /* Dauer */
  /*duration: 1,*/
  /* Zielhöhe */
  height: "20%",
  /* Zielfarbe */
  backgroundColor: "#CD5C5C",
}, 3); /* Positionsparameter */

/* Element zur Timeline hinzufügen */
tl.to("#graph4", {
  /* Dauer */
  /*duration: 1,*/
  /* Zielhöhe */
  height: "100%",
  /* Zielfarbe */
  backgroundColor: "#CD5C5C",
}, 0); /* Positionsparameter */

/* Element zur Timeline hinzufügen */
tl.to("#graph5", {
  /* Dauer */
  /*duration: 1,*/
  /* Zielhöhe */
  height: "80%",
  /* Zielfarbe */
  backgroundColor: "#CD5C5C",
}, 1); /* Positionsparameter */


/* Ab hier genau gleich wie in Übung 2, einfach überall tl anstelle von animation */

let pauseBtn = document.querySelector("#pause");
let resumeBtn = document.querySelector("#resume");
let reverseBtn = document.querySelector("#reverse");
let restartBtn = document.querySelector("#restart");
let killBtn = document.querySelector("#kill");
let seekBtn = document.querySelector("#seek");
let progressBtn = document.querySelector("#progress");
let timeScaleFastBtn = document.querySelector("#timeScaleFast");
let timeScaleSlowBtn = document.querySelector("#timeScaleSlow");


pauseBtn.addEventListener('click', function(){
  tl.pause();
});

resumeBtn.addEventListener('click', function(){
  tl.resume();
});

reverseBtn.addEventListener('click', function(){
  tl.reverse();
});

restartBtn.addEventListener('click', function(){
  tl.restart();
});

killBtn.addEventListener('click', function(){
  tl.kill();
});

seekBtn.addEventListener('click', function(){
  tl.seek(3);
});

progressBtn.addEventListener('click', function(){
  tl.progress(0.5);
});

timeScaleFastBtn.addEventListener('click', function(){
  tl.timeScale(2);
});

timeScaleSlowBtn.addEventListener('click', function(){
  tl.timeScale(0.5);
});
