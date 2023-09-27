Fancybox.bind("[data-fancybox]", {});

let scrollButton = document.querySelector(".page-scroll-button");
let generalHeader = document.querySelector(".general-header");
let generalHeaderTop = document.querySelector(".general-header .top");
let mobileNavbar = document.querySelector(".mobile-navbar");

window.addEventListener("scroll", function () {
  if (this.scrollY > 300) {
    scrollButton.classList.remove("d-none");
    generalHeader.classList.add("fixed-top");
    generalHeaderTop.classList.add("d-none");
    mobileNavbar.classList.add("fixed-top");
  } else {
    scrollButton.classList.add("d-none");
    generalHeader.classList.remove("fixed-top");
    generalHeaderTop.classList.remove("d-none");
    mobileNavbar.classList.remove("fixed-top");
  }
});

scrollButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

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


let contactDropdown = document.querySelector(".contact-dropdown");
let addressMenu = document.querySelector(".contact-dropdown .address-menu");
let addressButtons = document.querySelectorAll(".contact-dropdown .address-menu button");
let activeAddressSpan = document.querySelector(".contact-dropdown .active-button span");
let addressRows = document.querySelectorAll(".address-row");

activeAddressSpan.innerHTML = addressButtons[0].innerHTML;
addressRows[0].classList.remove("d-none");
addressButtons[0].classList.add('d-none')

contactDropdown.addEventListener("mousemove", function () {
  addressMenu.classList.remove("d-none");
});
contactDropdown.addEventListener("mouseleave", function () {
  addressMenu.classList.add("d-none");
});

addressButtons.forEach((button) => {
  button.addEventListener("click", function () {
    let id = button.getAttribute('data-id');
    activeAddressSpan.innerHTML = button.innerHTML;
    for(let i = 0; i < addressButtons.length; i++){
      addressButtons[i].classList.remove('d-none');
    }
    button.classList.add('d-none')
    for(let i = 0; i < addressRows.length; i++){
      addressRows[i].classList.add('d-none');
    }
    // let activeRow = Array.from(addressRows).find((row) => row.getAttribute('data-id') == id);
    let activeRow = document.querySelector(`.address-row[data-id="${id}"]`)
    activeRow.classList.remove('d-none');
    
  });
});



let pageLinksWrapper = document.querySelectorAll('.page-navigation');
let sections = document.querySelectorAll('section');
let mainSections = Array.from(sections).filter((section) => section.getAttribute('data-scroll') === 'true');

pageLinksWrapper.forEach((wrapper) => {
    let links = wrapper.querySelectorAll('a');
    links.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            let position = mainSections[index].offsetTop - 110;
            window.scrollTo(0, position);
            for(let i = 0; i < links.length; i++){
                links[i].classList.remove('active')
            }
            link.classList.add('active')
        })
    })
})