window.addEventListener("load", function () {
  let ul = this.document.querySelector(".swiper-wrapper");
  let swiper = this.document.querySelector(".swiper");
  let pagination = this.document.querySelector(".swiper-pagination");
  let imgNum = ul.querySelectorAll("li").length;
  let btn_prev = this.document.querySelector(".button-prev");
  let btn_next = this.document.querySelector(".button-next");
  // 复制第一张图片到最后实现无缝切换
  let firstLiNode = ul.querySelectorAll("li")[0];
  let firstAppend = firstLiNode.cloneNode(true);
  ul.appendChild(firstAppend);

  let circles = pagination.children;
  let moveTimes = 0;
  let current = 0;

  // 根据轮播图片个数动态生成小圆点，并为每个小圆点设定点击事件跳转对应图
  for (let i = 0; i < imgNum; i++) {
    let a = this.document.createElement("a");
    a.setAttribute("href", "javascript:;");
    a.setAttribute("data-index", i);
    pagination.appendChild(a);
    a.addEventListener("click", function () {
      moveTimes = this.getAttribute("data-index");
      current = moveTimes;
      let moveX = -swiper.offsetWidth * moveTimes;
      animate(ul, moveX);
      addCurrent(moveTimes);
    });
  }
  //
  circles[current].className = "circlehover";

  let flag = true;
  btn_next.addEventListener("click", function () {
    if (flag) {
      flag = false;
      if (moveTimes == imgNum) {
        moveTimes = 0;
        ul.style.left = "0px";
      }
      if (current == 3) {
        current = -1;
      }
      moveTimes++;
      current++;
      let moveX = -swiper.offsetWidth * moveTimes;
      animate(ul, moveX, false, function () {
        flag = true;
      });
      addCurrent(current);
    }
  });
  flag = true;
  btn_prev.addEventListener("click", function () {
    if ((flag = true)) {
      flag = false;
      if (moveTimes == 0) {
        moveTimes = 4;
        ul.style.left = -swiper.offsetWidth * moveTimes + "px";
      }
      if (current == 0) {
        current = 4;
      }
      moveTimes--;
      current--;
      let moveX = -swiper.offsetWidth * moveTimes;
      animate(ul, moveX, false, function () {
        flag = true;
      });
      addCurrent(current);
    }
  });
  let timeId = this.setInterval(function () {
    btn_next.click();
  }, 1500);
  function addCurrent(current) {
    // console.log(circles[0]);
    for (let circle of circles) {
      circle.className = "";
    }
    circles[current].className = "circlehover";
  }
});
