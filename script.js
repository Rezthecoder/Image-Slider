(function() {
  const pics = ["1", "2", "3", "4"];

  const buttons = document.querySelectorAll(".btn");
  const img = document.querySelector(".img-container");
  let counter = 0;
  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      if (button.classList.contains("btn-left")) {
        counter--;
        if (counter < 0) {
          counter = pics.length - 1;
        }
        img.style.background = `url(img/${pics[counter]}.jpg)`;
      }
      if (button.classList.contains("btn-right")) {
        counter++;
        if (counter > pics.length - 1) {
          counter = 0;
        }
        img.style.background = `url(img/${pics[counter]}.jpg)`;
      }
    });
  });
})();
