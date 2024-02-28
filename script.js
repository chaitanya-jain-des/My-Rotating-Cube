const myCube = document.querySelector(".cube");

function followMouse(event, cube) {
  const x = event.clientX;
  const y = event.clientY;

  cube.style.left = `${x}px`;
  cube.style.top = `${y}px`;
}

window.addEventListener("mousemove" ,(event) => {
  followMouse(event, myCube);
});
