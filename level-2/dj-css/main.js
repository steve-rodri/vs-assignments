let boxes = document.querySelectorAll(".box");

Array.from(boxes).forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.firstElementChild.play();
  });

  box.addEventListener("mouseleave", () => {
    box.firstElementChild.pause();
  });
});
