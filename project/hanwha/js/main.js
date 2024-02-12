$(function(){
    $(document).on('click', 'a[href="#"]', function(e) {
        e.preventDefault();
    })
    mainInit();
})
function mainInit(){
    mainVisual();
    management();
    newsContent();
}

function mainVisual(){
    var num = [1,2,3];
    var $pagingli = $('#visual .paging ul li');
    var $visualli = $('#visual .main-visual .visual-bg ul li');
    var $txtli = $('#visual .main-visual .txt ul li');
    var $nem = $('#visual .main-visual .txt .n-paging em');
    var $nspan = $('#visual .main-visual .txt .n-paging span');
    var current = 0, old = 0, timer = 0, interval = 4000, size = 0;
    size = $pagingli.length;

    $nspan.last().css({width:0}).animate({width:'180px'}, interval, function(){
        $nspan.last().css({width:0});
    });

    timer = setInterval( hanwhali , interval )
    function hanwhali(){
        current++;
        if( current > size-1 ){
            current = 0;
        }
        mainBanner();
        $nspan.last().css({width:0}).animate({width:'180px'}, interval, function(){
            $nspan.last().css({width:0});
        });
        $pagingli.removeClass('on');
        $pagingli.eq(current).addClass('on');
        old = current;
    }

    $pagingli.on('click', function(){
        current = $(this).index();
        if( current != old ){
            mainBanner();
        }
        $pagingli.removeClass('on');
        $pagingli.eq(current).addClass('on');
        clearInterval(timer);
        old = current;
    })

    function mainBanner(){
        $visualli.eq(current).css({backgroundPositionX:'1720px'}).animate({backgroundPositionX:0}, 400);
        $visualli.eq(old).css({backgroundPositionX:0}).animate({backgroundPositionX:'-1720px'}, 400);
        $txtli.eq(current).css({opacity:0}).animate({opacity:1}, 300);
        $txtli.eq(old).css({opacity:1}).animate({opacity:0}, 300);
        $nem.text('0'+num[current]);
    }
}
// mainVisual

function management(){
    var $txtli = $('.main .management .ma-area .ma-txt ul li');
    var $imgli = $('.main .management .ma-area .ma-img ul li');
    var $prev = $('.main .management .prev');
    var $next = $('.main .management .next');
    var current = 0, size = $imgli.length, old = 0;

    $prev.on('click', function(){
        current--;
        if( current < 0 ){
            current = size-1;
        }
        maBanner();
    })
    $next.on('click', function(){
        current++;
        if( current > size-1 ){
            current = 0;
        }
        maBanner();
    })

    function maBanner(){
        $txtli.eq(current).css({opacity:0}).animate({opacity:1}, 200);
        $txtli.eq(old).css({opacity:1}).animate({opacity:0}, 200);
        $imgli.stop().hide();
        $imgli.eq(current).stop().show();
        old = current;
    }
}
// management

function newsContent(){
    var $bigimgli = $('.main .news .news-top .big-img ul li');
    var $txtli = $('.main .news .news-top .news-txt ul li');
    var $smallul = $('.main .news .news-bottom .small-img ul');
    var $smimgli = $('.main .news .news-bottom .small-img ul li');
    var $prev = $('.main .news .news-bottom .small-img .prev');
    var $next = $('.main .news .news-bottom .small-img .next');
    var current = 0, w = 0, size = 0, ww = '';
    w = $smimgli.width() + 30;
    ww = w * 2;
    size = $smimgli.length;

    $prev.hide();
    $prev.on('click', function(){
        $smallul.animate({marginLeft:'+='+ww}, 400, function(){
            $prev.hide();
            $next.show();
        })
    })
    $next.on('click', function(){
        $smallul.animate({marginLeft:'-='+ww}, 400, function(){
            $next.hide();
            $prev.show();
        });
    })

    $smimgli.on('click', function(){
        current = $(this).index();
        $bigimgli.stop().fadeOut();
        $bigimgli.eq(current).stop().fadeIn();
        $txtli.hide();
        $txtli.eq(current).show();
        $smimgli.removeClass('on');
        $smimgli.eq(current).addClass('on');
    })
}
// newsContent