const aboutDescription = document.querySelector(".about__description");
const aboutPage1 = document.querySelector(".about__page1");
const aboutPage2 = document.querySelector(".about__page2");
const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
let pageState = true;

const handleChangeDesc = () => {
  if (pageState) {
    aboutPage1.classList.add("hide");
    aboutPage2.classList.remove("hide");
    dot1.classList.remove("dotOn");
    dot2.classList.add("dotOn");
    pageState = false;
  } else {
    aboutPage2.classList.add("hide");
    aboutPage1.classList.remove("hide");
    dot2.classList.remove("dotOn");
    dot1.classList.add("dotOn");
    pageState = true;
  }
}

aboutDescription.addEventListener("click", handleChangeDesc)
