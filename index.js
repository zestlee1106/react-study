/**
 * 1. item 하나하나에 클릭 이벤트를 걸어 준다.
 * toggle 은 요소에 클래스가 있으면 제거하고 없으면 추가하는 메소드이다. (DOMTokenList.toggle)
 * 이렇게 하면 등록된 이벤트 리스너가 너무 많음. 이벤트 리스너가 너무 많으면 성능 상 문제가 생길 수 있음.
 * 또한 아이템이 추가될 때 똑같이 이벤트 리스너를 등록해줘야 함.
 */
// const items = document.querySelectorAll(".item");
// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("open");

//     items.forEach((el) => {
//       if (el !== item) {
//         el.classList.remove("open");
//       }
//     });
//   });
// });

/**
 * 2. wrapper 에 클릭 이벤트를 걸어 줌
 * 이벤트 리스너가 wrapper 하나에만 걸려있음
 * 이벤트 리스너는 가급적 최소한으로만 걸어주는 것이 좋음
 * 이렇게 될 경우 이벤트 버블링, 캡처링을 잘 이해할 필요가 있음
 *
 * wrapper 에만 이벤트 리스너를 걸어줬는데 잘 동작하는 이유는, item 이 wrapper 의 하위에 있기 때문임
 * item 을 클릭해서 이벤트가 버블링 되어 wrapper 클래스에 전파가 된 것임
 * 이벤트가 걸린 것은 wrapper 이지만, 실제 이벤트를 받은 타겟은 item 임
 */
const wrapper = document.querySelector(".wrapper");
const items = document.querySelectorAll(".item");
wrapper.addEventListener("click", (e) => {
  const targetElem = e.target;

  // wrapper 에서 open 을 넣어준 뒤 body 에서 바로 삭제가 되어버리기 때문에
  // wrapper 에서 이벤트가 걸렸을 때 버블링 전파를 막는다
  e.stopPropagation();

  if (!targetElem.classList.contains("item")) {
    return;
  }

  targetElem.classList.toggle("open");

  items.forEach((el) => {
    if (el !== targetElem) {
      el.classList.remove("open");
    }
  });
});

/**
 * context 이 아닌 외부를 클릭했을 때 open 을 지워 줌
 * wrapper 가 body 의 하위에 있는 요소이기 때문에 wrapper 에 걸어 준 이벤트 리스너가 먼저 실행되고 그 다음 실행됨 (버블링)
 */
document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("context")) {
    return;
  }

  items.forEach((elem) => {
    elem.classList.remove("open");
  });
});
