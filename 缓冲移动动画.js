/**
 * 缓冲移动动画，移动到指定位置
 * @date 2021-11-11
 * @param {any} obj  // 动画对象
 * @param {any} target // 移动到 相对于父元素 target 距离
 * @param {any} direction=false // 默认 x 轴移动，true 为 y 轴
 * @param {any} callback  // 回调函数
 * @returns {any}
 */
function animate(obj, target, direction = false, callback) {
    if (obj.timeId) {
      return;
    }
    // direction 默认 false 为 x 轴
    if (direction === true) {
      obj.timeId = setInterval(function () {
        let step = (target - obj.offsetTop) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetTop == target) {
          clearInterval(obj.timeId);
          obj.timeId = null;
          if (callback) {
            callback();
          }
        }
        obj.style.top = obj.offsetTop + step + "px";
      }, 15);
    } else {
      obj.timeId = setInterval(function () {
        let step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
          clearInterval(obj.timeId);
          obj.timeId = null;
          if (callback) {
            callback();
          }
        }
        obj.style.left = obj.offsetLeft + step + "px";
      }, 15);
    }
  }