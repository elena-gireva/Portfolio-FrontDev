let page_preloader = document.getElementById("page");

let resume = document.querySelector("#resume");

setTimeout(function() {
  page_preloader.style.display = "none";
  document.body.style.backgroundColor = "#95d2f2";

  document.body.style.backgroundImage = 'url("image/background3.webp")';
  resume.classList.remove("visibleContent");
}, 1800);

