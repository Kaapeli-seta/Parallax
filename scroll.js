window.addEventListener("scroll", function (event) {
  let top = this.scrollY;

  let layers = document.querySelectorAll("[data-type='parallax']");
  let layer, speed, yPos;
  for (let i = 0; i < layers.length; i++) {
    layer = layers[i];
    speed = layer.getAttribute("data-speed");
    yPos = -((top * speed) / 100);
    layer.setAttribute(
      "style",
      "transform: translate3d(0px, " + yPos + "px, 0px)"
    );
  }
});
