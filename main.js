Fancybox.bind('[data-fancybox]', {});

if (document.querySelector(".end-count")) {
    let counterItem = document.querySelectorAll(".counter-item");
    let valueDisplays = document.querySelectorAll(".counter-span");
    let duration = 20;
    let counterStatus = Array(counterItem.length).fill(false);
  
    window.addEventListener("scroll", () => {
        counterItem.forEach((item, index) => {
        let position = item.offsetTop - 600;
        if (window.scrollY > position) {
          counterStatus[index] = true;
        }
      });
    });
  
    valueDisplays.forEach((valueDisplays, index) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplays.getAttribute("data-val"));
      let remainder = 0;
      let counter = setInterval(function () {
        if (counterStatus[index] == true) {
          if (endValue < 100) {
            startValue += 1;
          } else if (endValue > 100 && endValue < 500) {
            startValue += 5;
            remainder = endValue % 5;
            endValue = endValue - remainder;
          }
          valueDisplays.textContent = startValue;
          if (startValue == endValue) {
            clearInterval(counter);
            valueDisplays.textContent =
              valueDisplays.getAttribute("data-val") + "+";
          }
        }
      }, duration);
    });
  }
  
let scrollButton = document.querySelector(".page-scroll-button");
window.addEventListener("scroll", function () {
    if (this.scrollY > 300) {
      scrollButton.classList.remove("d-none");
    } else {
      scrollButton.classList.add("d-none");
    }
  });
  
  scrollButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
