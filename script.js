const toggler = document.querySelector(".toggler"),
  close = document.querySelector(".close"),
  nav = document.querySelector("nav");

toggler.addEventListener("click", function () {
  nav.classList.add("open");
});

close.addEventListener("click", function () {
  nav.classList.remove("open");
});

document.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    nav.classList.remove("open");
  }
});
