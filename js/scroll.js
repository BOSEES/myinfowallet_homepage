const navbar = document.querySelector(".navbar");
const item1 = document.querySelector(".item1__description");
const item2 = document.querySelector(".item2__description");
const handleScrollEvent = () => {
  if (window.pageYOffset > 250) {
    onChengeNavbar(1);
  } else {
    onChengeNavbar(0);
  }

  if (window.pageYOffset > item1.getBoundingClientRect().top) {
    onChangeItemDesctiption(1, document.querySelector(".item1__text"));
  } else {
    onChangeItemDesctiption(0, document.querySelector(".item1__text"));
  }

  if (window.pageYOffset > item2.getBoundingClientRect().top + 1000) {
    onChangeItemDesctiption(1, document.querySelector(".item2__text"));
  } else {
    onChangeItemDesctiption(0, document.querySelector(".item2__text"));
  }

}

const onChengeNavbar = (flag) => {
  if (flag) {
    navbar.classList.add("on");
  } else {
    navbar.classList.remove("on");
  }
}

const onChangeItemDesctiption = (flag, element) => {
  if (flag) {
    element.classList.add("textOn");
  } else {
    element.classList.remove("textOn");   
  }
}

const toFitScroll = (callback) => {
  let tick = false;

  return () => {
    if (tick) {
      return
    }
    tick = true;
    return requestAnimationFrame(() => {
      tick = false;
      return callback();
    })
  }
}

window.addEventListener("scroll", toFitScroll(handleScrollEvent), { pasive: true });