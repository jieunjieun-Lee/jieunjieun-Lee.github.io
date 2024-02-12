$(function(){
    mainInit();
})
function mainInit(){
    topBtn();
}

function topBtn(){
    var $topbtn = $('#footer p.top');
    var h = $('#visual').height();
    var top = 0;

    $topbtn.hide();

    $(window).on('scroll', function(){
        top = $(window).scrollTop();
        if( top > h ){
            $topbtn.show();
        }else{
            $topbtn.hide();
        }
    })
}