const items = document.querySelectorAll("details");

document.body.addEventListener("click", (e) => {
  // 클래스를 따로 지정하지 않았기 때문에 nodeName 으로 태그 이름을 가져옴
  if (e.target.nodeName !== "SUMMARY" && e.target.nodeName !== "p") {
    items.forEach((item) => {
      item.removeAttribute("open");
    });
  }

  // 현재 details 로 items 를 묶어줬기 때문에, 상위 요소가 현재 클릭된 요소랑 다를 경우 open 을 지워줌
  items.forEach((item) => {
    if (item !== e.target.parentElement) {
      item.removeAttribute("open");
    }
  });
});
