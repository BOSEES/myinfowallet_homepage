const introImage = document.querySelector(".technology__img__container");
const introCard = document.querySelector(".intro__card__container");
let imageFlag = true;
let cardFlag = true;


const OnIntroImage = () => {
  if (window.pageYOffset >= introImage.getBoundingClientRect().top && introImage) {
    document.querySelector(".technology__img").classList.remove("hide");
    window.removeEventListener("scroll", OnIntroImage);
  }
}

const OnIntroCard = () => {
  if (window.pageYOffset >= introCard.getBoundingClientRect().top && cardFlag) {
    document.querySelector(".intro__card").classList.remove("hide");
    window.removeEventListener("scroll", OnIntroCard);
  }
}

window.addEventListener("scroll", OnIntroImage);
window.addEventListener("scroll", OnIntroCard);