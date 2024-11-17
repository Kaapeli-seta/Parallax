const spaceI = document.querySelector("#spaceI");
const l1 = document.querySelector(".layer1");
const l2 = document.querySelector(".layer2");
mouse = document.querySelector("#mouse");
const mouseCenter = document.querySelector("#mouse-center");

// ikkunan keskipiste

document.addEventListener("mousemove", (evt) => {
  let cx = window.innerWidth / 2;
  let cy = window.innerWidth / 2;

  clientX = evt.clientX;
  clientY = evt.clientY;

  let mouseloc = `Yläkulmasta ${clientX}px ja ${clientY}px`;

  let mc_x = cx - clientX;
  let mc_y = cy - clientY;

  let centerloc = `Keskeltä ${mc_x}px ja ${mc_y}px`;
  mouse.innerHTML = mouseloc;
  mouseCenter.innerHTML = centerloc;

  l1.style.transform =
    "translateX(" + mc_x / 50 + "%) translateY(" + mc_y / 50 + "%)";
  l2.style.transform =
    "translateX(" + mc_x / 200 + "%) translateY(" + mc_y / 200 + "%)";
});
