function hacerVisible() {
  let button = document.querySelector(".mas");
  let intereses = document.querySelector("#intereses");
  button.onclick = () => {
    intereses.style.display = "block";
    button.style.display = "none";
  };
}
hacerVisible();