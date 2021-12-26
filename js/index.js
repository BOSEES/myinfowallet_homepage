const visionDescription = document.querySelector(".vision__description");
const visionPage1 = document.querySelector(".vision__page1");
const visionPage2 = document.querySelector(".vision__page2");
const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
let pageState = true;

const handleChangeDesc = () => {
  if (pageState) {
    visionPage1.classList.add("hide");
    visionPage2.classList.remove("hide");
    dot1.classList.remove("dotOn");
    dot2.classList.add("dotOn");
    pageState = false;
  } else {
    visionPage2.classList.add("hide");
    visionPage1.classList.remove("hide");
    dot2.classList.remove("dotOn");
    dot1.classList.add("dotOn");
    pageState = true;
  }
}

visionDescription.addEventListener("click", handleChangeDesc);
