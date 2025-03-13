console.clear();
//슬라이드 박스
function slideBox__init() {
  let slideIndex = 0;
  setInterval(function () {
    $(".slide-box").attr("data-index", ++slideIndex % 3);
  }, 3000);
}
slideBox__init();
//탭박스

function tabBox__init() {
  $(".tab-title > ul > li").click(function () {
    console.log("실행");
    let $this = $(this);
    let $thisIndex = $this.index();

    const $tabBox = $this.closest(".tab-box");
    const $tabContent = $tabBox.find(".tab-content");

    $this.siblings(".active").removeClass("active");
    $this.addClass("active");

    $tabContent.find("> ul > li").removeClass("active");
    $tabContent.find("> ul > li").eq($thisIndex).addClass("active");
  });
}
tabBox__init();
