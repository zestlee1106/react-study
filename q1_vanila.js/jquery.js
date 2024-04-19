const $wrapper = $(".wrapper");
const $items = $wrapper.find(".item");
console.log("font-size: x-large; color: #bada55;", "");

/**
 * 두번째 넣어주는 인자값이 e.target 으로 접근해서 걸러줬던 그것임.
 * wrapper 에 click 이벤트를 걸어줬지만 실제 item 에 이벤트가 걸려야 콜백함수가 실행되게끔 함
 * siblings 는 현재 클릭된 요소의 형제 요소를 찾는 함수임
 * jquery 는 메소드 체이닝을 지원한다
 */
$wrapper.on("click", ".item", function (e) {
  e.stopPropagation();
  $(this).toggleClass("open").siblings().removeClass("open");
});

$("body").on("click", () => {
  $items.removeClass("open");
});
