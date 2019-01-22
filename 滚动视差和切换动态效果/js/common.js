$(function() {
    // 点击素材按钮弹出素材列表
    $('.meterialButton').click(function() {
        animatePanel('.control-button', '-60px', '.meterial-panel', '120px');
    });
    // 点击素材列表的关闭按钮
    $('.meterial-panel .closeBtn').click(function() {
        animatePanel('.meterial-panel', '-120px', '.control-button', '60px');
    });
    /**
     * [底部操作栏和弹出框交互函数]
     * @param  {[type]} fName   [收起的className]
     * @param  {[type]} fHeight [收起的高度]
     * @param  {[type]} sName   [打开的className]
     * @param  {[type]} sHeight [打开的高度]
     */
    function animatePanel(fName, fHeight, sName, sHeight) {
        $(fName).slideUp(300);
        $('.footer').animate({'bottom': fHeight}, 300);
        var timer = setTimeout(function() {
            $(sName).slideDown(500);
            $('.footer').animate({'bottom': 0, 'height': sHeight}, 500);
            timer = null;
        }, 500);
    }
});