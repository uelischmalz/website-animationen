/* Animation festlegen */
let animation = gsap.to("#svgHomeIcon", {
  /* Dauer */
  duration: 10,
  /* Horizontale Verschiebung */
  x: "70vw",
  /* Zielfarbe */
  fill: "#091469",
  /* Zielrotation: 2 ganze Drehungen */
  rotation: 720,
  /* Easing */
  ease: "linear"
});

/* Alle Steuerungsbuttons in Variablen speichern */
let pauseBtn = document.querySelector("#pause");
let resumeBtn = document.querySelector("#resume");
let reverseBtn = document.querySelector("#reverse");
let restartBtn = document.querySelector("#restart");
let killBtn = document.querySelector("#kill");
let seekBtn = document.querySelector("#seek");
let progressBtn = document.querySelector("#progress");
let timeScaleFastBtn = document.querySelector("#timeScaleFast");
let timeScaleSlowBtn = document.querySelector("#timeScaleSlow");


/* Für jeden Steuerungsbutton die entsprechende Funktion gemäss Dokumentation hinterlegen */
pauseBtn.addEventListener('click', function(){
  animation.pause();
});

resumeBtn.addEventListener('click', function(){
  animation.resume();
});

reverseBtn.addEventListener('click', function(){
  animation.reverse();
});

restartBtn.addEventListener('click', function(){
  animation.restart();
});

killBtn.addEventListener('click', function(){
  animation.kill();
});

seekBtn.addEventListener('click', function(){
  animation.seek(3);
});

progressBtn.addEventListener('click', function(){
  animation.progress(0.5);
});

timeScaleFastBtn.addEventListener('click', function(){
  animation.timeScale(2);
});

timeScaleSlowBtn.addEventListener('click', function(){
  animation.timeScale(0.5);
});
