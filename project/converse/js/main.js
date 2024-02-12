$(function(){
    mainInit();
})
function mainInit(){
    newColor();
}
function newColor(){
    var $colorli = $('.main .new-color .color li');
    var $selectli = $('.main .new-color .select-color li');
    var current = 0;

    $colorli.on('click', function(){
        current = $(this).index();
        $selectli.fadeOut();
        $selectli.eq(current).stop().fadeIn();
        $colorli.removeClass('on');
        $(this).addClass('on');
    })
}