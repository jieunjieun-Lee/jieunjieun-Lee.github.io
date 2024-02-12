$(function(){
    $(document).on('click', 'a[href="#"]', function(e) {
        e.preventDefault();
    })
    mainInit();
})
function mainInit(){
    mainVisual();
    mainMenu();
    lowestBanner();
}

function mainMenu(){
    var $header = $('#header');
    var $gnbli = $('#nav .gnb > li');
    var $menutitle = $('#nav .gnb > li p.menu-title');
    var $menuul = $('#nav .gnb > li .main-menu');
    var $menubg = $('#header .nav-bg');
    var current = 0;

    $menutitle.on('click', function(){
        current = $(this).parent('li').index();
        $menuul.hide();
        $(this).next().show();
        $menubg.show();
        $gnbli.removeClass('on');
        $gnbli.eq(current).addClass('on');
    })

    $header.on('mouseleave', function(){
        $menuul.hide();
        $menubg.hide();
        $gnbli.removeClass('on');
    })
}
// mainMenu

function mainVisual(){
    var $mainbgli = $('#mainVisual .main-visual li');
    var $maintxtli = $('#mainVisual .visual-txt ul li');
    var $mainpagingli = $('#mainVisual .paging ul li');
    var $mainpagingi = $('#mainVisual .paging i');
    var $mainPrev = $('#mainVisual .prev');
    var $mainNext = $('#mainVisual .next');

    var current = 0, timer = 0, interval = 4000, old = 0, size = 0, isplay = true;
    size = $mainbgli.length;

    timer = setInterval( planeli, interval )
    function planeli(){
        current++;
        if( current > size-1 ){
            current = 0;
        }
        mainBanner( '100%', '-100%' );
    }

    $mainpagingli.on('click', function(){
        current = $(this).index();
        if( current != old ){
            mainBanner( '100%', '-100%' );
        }
    })

    $mainPrev.on('click', function(){
        current--;
        if( current < 0 ){
            current = size-1;
        }
        mainBanner( '-100%', '100%' );
    })
    $mainNext.on('click', function(){
        current++;
        if( current > size-1 ){
            current = 0;
        }
        mainBanner( '100%', '-100%' );
    })

    $mainpagingi.on('click', function(){
        if( isplay ){
            clearInterval(timer);
            $mainpagingi.removeClass();
            $mainpagingi.addClass('xi-play-circle-o');
            $mainpagingli.removeClass('on');
        } else {
            timer = setInterval( planeli, interval );
            $mainpagingi.removeClass();
            $mainpagingi.addClass('xi-pause-circle-o');
            $mainpagingli.eq(current).addClass('on');
        }
        isplay = !isplay;
    })

    function mainBanner( start, end ){
        $mainbgli.eq(current).css({left:start}).animate({left:0}, 400);
        $mainbgli.eq(old).css({left:0}).animate({left:end}, 400);
        $maintxtli.eq(current).css({opacity:0}).animate({opacity:1}, 300);
        $maintxtli.eq(old).css({opacity:1}).animate({opacity:0}, 300);
        if( isplay ){
            $mainpagingli.removeClass('on');
            $mainpagingli.eq(current).addClass('on');
            clearInterval(timer);
            timer = setInterval( planeli, interval );
        }
        old = current;
    }
}
// mainVisual

function lowestBanner(){
    var $lowestul = $('.main .lowest .mask ul');
    var $lowestli = $('.main .lowest .mask ul li');
    var $lowestPrev = $('.main .lowest .prev');
    var $lowestNext = $('.main .lowest .next');

    var first = '', last = '', current = 0, old = 0, size = 0;
    size = $lowestli.length;
    var w = $lowestli.width() + 30;

    last = $('.main .lowest .mask ul li').last();
    $lowestul.prepend(last);
    $lowestul.css({marginLeft:'-=' + w});
    
    $lowestPrev.on('click', function(){
        current--;
        if( current < 0 ){
            current = size-1;
        }
        $lowestul.animate({marginLeft:'+=' + w}, 400, function(){
            last = $('.main .lowest .mask ul li').last();
            $lowestul.prepend(last);
            $lowestul.css({marginLeft:'-=' + w});
        });
    })
    $lowestNext.on('click', function(){
        current++;
        if( current > size-1 ){
            current = 0;
        }
        $lowestul.animate({marginLeft:'-=' + w}, 400, function(){
            first = $('.main .lowest .mask ul li').first();
            $lowestul.append(first);
            $lowestul.css({marginLeft:'+=' + w});
        });
    })
}
// lowestBanner