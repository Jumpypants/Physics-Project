var level = 0;

function displayLevel() {
  switch (level) {
    case 0:
      displayLevel0();
      break;
    case 1:
      displayLevel1();
      break;
    case 2:
      displayLevel2();
      break;
    case 3:
      displayLevel3();
      break;
    case 4:
      displayLevel4();
      break;
  }
}

function displayLevel0() {
  document.getElementById("topPanel").innerHTML = "";

  const hrDiagram = document.createElement("img");
  hrDiagram.src = "images/spectro.png";

  // set the image to completely fill the top panel in height without stretching
  hrDiagram.style.height = "100%";
  hrDiagram.style.width = "auto";

  // center the image in the top panel
  hrDiagram.style.display = "block";
  hrDiagram.style.marginLeft = "auto";
  hrDiagram.style.marginRight = "auto";

  document.getElementById("topPanel").appendChild(hrDiagram);

  const text = document.getElementById("infoText");
  text.innerHTML = "<strong>Dr. Crick Branchez</strong>Hey you, uh... can you help me find my uh... my f-friend John Hydrogen? He's l-lost in space s-somewhere. Just um... click on something.";

  // Play the audio file
  const audio = new Audio("audio/one.mp3");
  audio.play();
}

function displayLevel1() {
  document.getElementById("topPanel").innerHTML = "";

  const hrDiagram = document.createElement("img");
  hrDiagram.src = "images/hr-0.png";

  // set the image to completely fill the top panel in height without stretching
  hrDiagram.style.height = "100%";
  hrDiagram.style.width = "auto";

  // center the image in the top panel
  hrDiagram.style.display = "block";
  hrDiagram.style.marginLeft = "auto";
  hrDiagram.style.marginRight = "auto";

  document.getElementById("topPanel").appendChild(hrDiagram);

  const text = document.getElementById("infoText");
  text.innerHTML = "<strong>Dr. Crick Branchez</strong>John Hydrogen is on an uh... orange star from the main sequence. It's one of these four, and uh... i d-don't know which one it is. F-Figure it out. Try to look c-closely at the clusters in the HR diagram";

  // Play the audio file
  const audio = new Audio("audio/two.mp3");
  audio.play();
}

function displayLevel2() {
  document.getElementById("topPanel").innerHTML = "";

  const hrDiagram = document.createElement("img");
  hrDiagram.src = "images/spec-1.png";

  // set the image to completely fill the top panel in height without stretching
  hrDiagram.style.height = "100%";
  hrDiagram.style.width = "auto";

  // center the image in the top panel
  hrDiagram.style.display = "block";
  hrDiagram.style.marginLeft = "auto";
  hrDiagram.style.marginRight = "auto";

  document.getElementById("topPanel").appendChild(hrDiagram);

  const text = document.getElementById("infoText");
  text.innerHTML = "<strong>Dr. Crick Branchez</strong>Good boy. That's c-correct. uh... oh no, John Hydrogen just left uh... this star. He's de-definately on a supergiant s-star now. Which one is a supergiant here? T-Try matching the blocked wavelengths to uh... the spectrums. Remember, elements that are present in the star will have their spectral lines uh... blocked out. Look for the ones that are m-missing.";

  // Play the audio file
  const audio = new Audio("audio/three.mp3");
  audio.play();
}

function displayLevel3() {
  document.getElementById("topPanel").innerHTML = "";

  const hrDiagram = document.createElement("img");
  hrDiagram.src = "images/spec-2.png";

  // set the image to completely fill the top panel in height without stretching
  hrDiagram.style.height = "100%";
  hrDiagram.style.width = "auto";

  // center the image in the top panel
  hrDiagram.style.display = "block";
  hrDiagram.style.marginLeft = "auto";
  hrDiagram.style.marginRight = "auto";

  document.getElementById("topPanel").appendChild(hrDiagram);

  const text = document.getElementById("infoText");
  text.innerHTML = "<strong>Dr. Crick Branchez</strong>Yes, that's f-yes that's correct uh.. good. I've tracked the spectroscopic em-emmission of John um... Hydrogen's home star. Fu-Figure out which it is. Use what y-you learned about spectral lines and HR diagrams.";

  // Play the audio file
  const audio = new Audio("audio/four.mp3");
  audio.play();
}

function displayLevel4() {
  document.getElementById("topPanel").innerHTML = "";

  const hrDiagram = document.createElement("img");
  hrDiagram.src = "images/medals.png";

  // set the image to completely fill the top panel in height without stretching
  hrDiagram.style.height = "100%";
  hrDiagram.style.width = "auto";

  // center the image in the top panel
  hrDiagram.style.display = "block";
  hrDiagram.style.marginLeft = "auto";
  hrDiagram.style.marginRight = "auto";

  document.getElementById("topPanel").appendChild(hrDiagram);

  const text = document.getElementById("infoText");
  text.innerHTML = "<strong>Dr. Crick Branchez</strong>Y-Yeah, that's it. That's uh... John's house. Good job here's your f-first place um... medal. And the second place medal. You get all the f- all the uh... medals.";

  // Play the audio file
  const audio = new Audio("audio/five.mp3");
  audio.play();
}

function checkAnswer(answer) {
  switch (level) {
    case 0:
      level = 1;
      displayLevel();
      break;
    case 1:
      if (answer === "D") {
        level = 2;
        displayLevel();
      } else {
        alert("Incorrect! Try again.");
      }
      break;
    case 2:
      if (answer === "B") {
        level = 3;
        displayLevel();
      } else {
        alert("Incorrect! Try again.");
      }
      break;
    case 3:
      if (answer === "B") {
        level = 4;
        displayLevel();
      } else {
        alert("Incorrect! Try again.");
      }
      break;
  }
}

displayLevel();