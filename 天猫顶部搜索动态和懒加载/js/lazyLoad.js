window.onload = function() {
    var imgObject = document.getElementsByTagName('img'); // 遍历全部img对象
    var imgNum = imgObject.length; // img数量
    var index = 0; // 存储加载到的位置

    lazyLoad();

    // 判断显示图片
    function lazyLoad() {
        var viewHeight = document.documentElement.clientHeight; //可见区域高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
        // 循环全部图片，如果距离顶部高度小于等于可视区域高度+滚动条距离顶部高度的图片就显示
        for (var i = index; i < imgNum; i++) {
            if (imgObject[i].offsetTop > viewHeight + scrollTop) break;
            // 判断为空才赋值，避免重复赋值
            if (imgObject[i].getAttribute("src") == "") imgObject[i].src = imgObject[i].getAttribute("data-src");
            index = i + 1; // 用于下次加载从上一次最后一个开始
        }
    }
    /**
     * [封装的节流函数]
     * @param  {[type]} method [要执行的函数]
     * @param  {[type]} delay  [延迟时间]
     * @param  {[type]} time   [间隔多少毫秒需要触发一次事件]
     */
    function throttle(method, delay, time) {
        var timer, // 定时器
            args = arguments,
            startTime; // 开始时间
        return function() {
            var _self = this,
                curTime = new Date();
            if (!startTime) startTime = curTime;
            if (timer) clearTimeout(timer);
            if (curTime - startTime >= time) { // 如果当前时间减去开始时间达到设置的间隔时间就触发函数
                method.apply(_self, args);
                startTime = curTime;
            } else {
                timer = setTimeout(function() {
                    method.apply(_self, args);
                }, delay);
            }
        };
    }
    // 监听滚动事件
    window.addEventListener('scroll', throttle(lazyLoad, 500, 1000));

};