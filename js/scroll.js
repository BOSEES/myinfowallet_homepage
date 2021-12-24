const navbar = document.querySelector(".navbar");
const item1 = document.querySelector(".item1__description");
const item2 = document.querySelector(".item2__description");

const handleScrollEvent = () => {
  if (window.pageYOffset > 250) {
    onChengeNavbar(1);
  } else {
    onChengeNavbar(0);
  }

}

window.addEventListener("scroll", handleScrollEvent);

const onChengeNavbar = (flag) => {
  if (flag) {
    navbar.classList.add("on");
  } else {
    navbar.classList.remove("on");
  }
}

const onChangeItemDesctiption = () => {
  
}