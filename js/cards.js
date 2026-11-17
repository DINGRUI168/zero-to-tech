import { animate, stagger } from "animejs";

export function initCardsAnim() {
  animate(".card", {
    opacity: [0, 1],
    translateY: [24, 0],
    delay: stagger(120),
    duration: 700,
    ease: "outBack",
  });
}

/*
 * 这行代码从 Anime.js 中导入 animate 和 stagger：
 *
 * import { animate, stagger } from "https://cdn.jsdelivr.net/npm/animejs@4/+esm";
 *
 * Anime.js 是一个用于制作动画的 JavaScript 第三方库。
 * animate 和 stagger 是这个库导出的函数，导入后就可以在代码中使用。
 *
 * 1. animate：为元素创建动画。
 *    例如，可以改变元素的位置、透明度或颜色。
 *
 * 2. stagger：为一组元素设置依次变化的值。
 *    常用它让多个元素的动画错开时间开始。
 *
 * 示例：
 *
 * animate(".box", {
 *   opacity: [0, 1],    // 从透明逐渐变为不透明
 *   delay: stagger(200) // 每个元素比前一个晚 200 毫秒开始
 * });
 *
 * 如果页面上有三个 .box 元素：
 * 第一个立即开始动画，第二个延迟 200 毫秒，
 * 第三个延迟 400 毫秒。
 *
 * import 后面的 { animate, stagger } 表示从模块中导入
 * 这两个“具名导出”。注意函数名 stagger 的末尾有 r。
 */

/*
 * 模块地址：
 * https://cdn.jsdelivr.net/npm/animejs@4/+esm
 *
 * 各部分的含义：
 *
 * https://           使用 HTTPS 协议访问网络资源
 * cdn.jsdelivr.net   jsDelivr 的 CDN 服务器地址
 * /npm/              从 npm 软件包来源获取
 * animejs            第三方库的包名
 * @4                 使用 Anime.js 的第 4 主版本
 * /+esm              请求适合 ES 模块导入的版本
 *
 * @4 指定的是第 4 主版本，并没有固定到某个具体的小版本。
 * 如果希望每次使用完全相同的版本，可以填写具体版本号。
 */