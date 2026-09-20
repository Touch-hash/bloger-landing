let menuBtn = document.querySelectorAll(".menu");
let ulOne = document.querySelector(".one");
let ulTwo = document.querySelector(".two");
let ulThree = document.querySelector(".three");
let ulOneToggle = document.querySelector(".one-toggle");
let ulTwoToggle = document.querySelector(".two-toggle");
let ulThreeToggle = document.querySelector(".three-toggle");
let btnProduct = document.querySelector(".btnProduct");
let btnCompany = document.querySelector(".btnCompany");
let btnConnect = document.querySelector(".btnConnect");
let btnProductToggle = document.querySelector(".btnProduct-toggle");
let btnCompanyToggle = document.querySelector(".btnCompany-toggle");
let btnConnectToggle = document.querySelector(".btnConnect-toggle");
let toggleBtn = document.querySelector(".toggle");
let toggleIcone = document.querySelector(".toggle i");
let toggleUl = document.querySelector(".ulTwo");
let toggleMenu = document.querySelector(".toggle-menu");

menuBtn.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("product")) {
      ulOne?.classList.toggle("hidden");
      ulOneToggle?.classList.toggle("hidden");
      arrow(ulOne, ulOneToggle, btnProduct, btnProductToggle);
    } else if (element.classList.contains("Company")) {
      ulTwo?.classList.toggle("hidden");
      ulTwoToggle?.classList.toggle("hidden");
      arrow(ulTwo, ulTwoToggle, btnCompany, btnCompanyToggle);
    } else if (element.classList.contains("connect")) {
      ulThree?.classList.toggle("hidden");
      ulThreeToggle?.classList.toggle("hidden");
      arrow(ulThree, ulThreeToggle, btnConnect, btnConnectToggle);
    }
  });
});
function arrow(eleOne, eleTwo, btnElement, btnElementToggle) {
  if (
    eleOne.classList.contains("hidden") ||
    eleTwo?.classList.contains("hidden")
  ) {
    btnElement?.classList.add("arrow-bottom");
    btnElement?.classList.remove("arrow-top");
    btnElementToggle?.classList.add("arrow-bottom");
    btnElementToggle?.classList.remove("arrow-top");
  } else {
    btnElement?.classList.add("arrow-top");
    btnElement?.classList.remove("arrow-bottom");
    btnElementToggle?.classList.add("arrow-top");
    btnElementToggle?.classList.remove("arrow-bottom");
  }
}

toggleBtn.addEventListener("click", () => {
  if (toggleIcone.classList.contains("fa-bars")) {
    toggleIcone.classList.remove("fa-bars");
    toggleIcone.classList.add("fa-xmark");
    toggleMenu.classList.add("active");
  } else if (toggleIcone.classList.contains("fa-xmark")) {
    toggleIcone.classList.add("fa-bars");
    toggleIcone.classList.remove("fa-xmark");
    toggleMenu.classList.remove("active");
  }
});
