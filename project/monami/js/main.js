$(function(){
    mainInit();
})
function mainInit(){
    visual();
    monamiType();
    monamiCollabo();
    monamiVideo();
    familySite();
    paging();
}
function visual(){
    var arrColor = ['#333', '#cd252d', '#2f47a9'];
    var $colorli = $('#visual .color li');
    var $circlespan = $('#visual .circle span');
    var $visualimgli = $('#visual .visual-img li');
    var current = 0, old = 0;

    $colorli.eq(current).children('strong').css({color:arrColor[current]});

    $colorli.on('click', function(){
        current = $(this).index();
        if( current != old ){
            $visualimgli.eq(current).fadeIn(300);
            $visualimgli.eq(old).fadeOut(300);
            $colorli.children('strong').removeClass('on').css({color:'#777'});
            $colorli.eq(current).children('strong').addClass('on').css({color:arrColor[current]});
            $colorli.eq(current).children('span').last().animate({width:'210px'}, 700);
            $colorli.eq(old).children('span').last().css({width:0});
            $circlespan.eq(current).css({top:'500px'}).animate({top:0}, 500);
            $circlespan.eq(old).animate({top:'-500px'}, 600);
        }
        old = current;
    })
}
// visual

function monamiType(){
    var $selectli = $('.main .type .select ul li');
    var $explainli = $('.main .type .explain ul li');
    var current = 0;

    $selectli.on('click', function(){
        current = $(this).index();
        $explainli.css({opacity:0}).eq(current).css({opacity:1});
        $selectli.removeClass('on');
        $selectli.eq(current).addClass('on');
    })
}
// monamiType

function monamiCollabo(){
    var arrStrong = ['한국의 그림', '활명수', '국립고궁박물관', '해리포터', '롯데', '스타벅스', '독립운동가'];
    var arrScroll = [0, 96, 192, 288, 384, 480, 576];
    var $selectimgli = $('.main .collabo .select-co ul li');
    var $coh3 = $('.main .collabo .co-txt h3');
    var $prev = $('.main .collabo .co-txt .prev');
    var $next = $('.main .collabo .co-txt .next');
    var $coimgul = $('.main .collabo .co-txt .co-img ul');
    var $coimgli = $('.main .collabo .co-txt .co-img ul li');
    var $scrollem = $('.main .collabo .co-txt .co-img em');
    var current = 0, old = 0, last = '', size = 0, w = 0, first = '';
    size = $coimgli.length;
    w = $coimgli.width() + 55;

    last = $('.main .collabo .co-txt .co-img ul li').last();
    $coimgul.prepend(last).css({marginLeft:'-=' + w});

    $prev.on('click', function(){
        current--;
        if( current < 0 ){
            current = size-1;
        }
        coBanner();
        $coimgul.animate({marginLeft:'+=' + w}, 400, function(){
            last = $('.main .collabo .co-txt .co-img ul li').last();
            $coimgul.prepend(last).css({marginLeft:'-=' + w});
        })
        $scrollem.animate({marginLeft:arrScroll[current]}, 300);
        old = current;
    })

    $next.on('click', function(){
        current++;
        if( current > size-1 ){
            current = 0;
        }
        coBanner();
        $coimgul.animate({marginLeft:'-=' + w}, 400, function(){
            first = $('.main .collabo .co-txt .co-img ul li').first();
            $coimgul.append(first).css({marginLeft:'+=' + w});
        })
        $scrollem.animate({marginLeft:arrScroll[current]}, 300);
        old = current;
    })

    function coBanner(){
        $selectimgli.eq(current).css({opacity:0}).animate({opacity:1}, 300);
        $selectimgli.eq(old).css({opacity:1}).animate({opacity:0}, 300);
        $coh3.html('153 X'+'<br>'+arrStrong[current]);
        $coimgli.removeClass('on');
        $coimgli.eq(current).addClass('on');
    }
}
// monamiCollabo

function monamiVideo(){
    var $videoli = $('.main .video .vdselect ul li');
    var $vdwrap = $('.main .video .video-wrap');
    var $vdwrapul = $('.main .video .video-wrap ul');
    var $vdwrapli = $('.main .video .video-wrap ul li');
    var current = 0;

    $videoli.on('click', function(){
        current = $(this).index();
        $vdwrap.show();
        $vdwrapli.hide().eq(current).show();
    })

    $vdwrapul.on('click', function(){
        $vdwrap.hide();
    })
}
// monamiVideo

function familySite(){
    var $fsite = $('#footer .ft-top .family-site p');
    var $flistul = $('#footer .ft-top .family-site ul');

    $fsite.on('click', function(){
        $flistul.stop().slideToggle();
    })
}
// familySite

function paging(){
    var arrh = [];
    arrh[0] = $('#visual').height();
    arrh[1] = $('.main .main-sec').eq(0).height();
    arrh[2] = $('.main .main-sec').eq(1).height();
    arrh[3] = $('.main .main-sec').eq(2).height();

    var $pageli = $('#wrap .paging ul li');
    var current = 0, top = 0, size = '';
    size = $pageli.length;

    $pageli.on('click', function(){
        current = $(this).index();
        $('html, body').animate({scrollTop: (current * arrh[current])}, 800);
        $pageli.removeClass('on');
        $pageli.eq(current).addClass('on');
        return false;
    })

    $(window).on('scroll', function(){
        top = $(window).scrollTop();
        for( var i = 0; i < size; i++ ){
            if( top >= (arrh[i] * i) && top < arrh[i] * (i+1) ){
                $pageli.removeClass('on');
                $pageli.eq(i).addClass('on');
            }
        }
    })
}
// paging