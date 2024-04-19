import "./style.css";

const navElem = document.querySelector("#nav");
const navItems = Array.from(navElem.children);
const contentsElem = document.querySelector("#contents");
const contentItems = Array.from(contentsElem.children);
const offsetTops = contentItems.map((elem) => {
  const [ofs, clh] = [elem.offsetTop, elem.clientHeight];
  // 이전 것이 새로운 것보다 더 많이 보이는지를 위한 계산
  return [ofs - clh / 2, ofs + clh / 2];
});

window.addEventListener("scroll", (e) => {
  const { scrollTop } = e.target.scrollingElement;
  const targetIndex = offsetTops.findIndex(([from, to]) => {
    return scrollTop >= from && scrollTop < to;
  });
  Array.from(navElem.children).forEach((c, i) => {
    if (i !== targetIndex) {
      c.classList.remove("on");
    } else {
      c.classList.add("on");
    }
  });

  // offsetTops.forEach((area, idx) => {
  //   if (area[0] < scrollTop && scrollTop < area[1]) {
  //     navItems.forEach((e) => {
  //       e.classList.remove("on");
  //     });
  //     navItems[idx].classList.add("on");
  //   }
  // });
});

navElem.addEventListener("click", (e) => {
  const targetElem = e.target;
  if (targetElem.tagName === "BUTTON") {
    const targetIndex = navItems.indexOf(targetElem.parentElement);
    contentItems[targetIndex].scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }
});
