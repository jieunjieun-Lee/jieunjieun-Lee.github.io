$(function(){
    $(document).on('click', 'a[href="#"]', function(e) {
        e.preventDefault();
    })
    mainInit();
    subInit();
})
function mainInit(){
    mainMenu();
    mainVisual();
    ftMenu();
}
function subInit(){
    payContent();
}

function mainMenu(){
    var $allmenu = $('#header .hd-bottom .all-menu');
    var $nav = $('#nav');
    var $gnblip = $('#nav .gnb > li p.menu-title');
    var $mainul = $('#nav .gnb > li .main-menu');
    var $plusmenu = $('#nav .gnb > li .main-menu > li p.plus-menu');
    var $plusul = $('#nav .gnb > li .main-menu > li ul');

    $allmenu.on('click', function(){
        $nav.toggleClass('on');
    })

    $gnblip.on('click', function(){
        $mainul.stop().slideUp();
        $(this).next().stop().slideToggle();
    })

    $plusmenu.on('click', function(){
        $plusul.stop().slideUp();
        $(this).next().stop().slideToggle();
    })
}
// mainMenu

function mainVisual(){
    var $mainbgli = $('#mainVisual .main-visual li');
    var $maintxtli = $('#mainVisual .visual-txt ul li');
    var $mainPrev = $('#mainVisual .prev');
    var $mainNext = $('#mainVisual .next');

    var current = 0, old = 0, size = 0;
    size = $mainbgli.length;

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

    function mainBanner( start, end ){
        $mainbgli.eq(current).css({left:start}).animate({left:0}, 400);
        $mainbgli.eq(old).css({left:0}).animate({left:end}, 400);
        $maintxtli.eq(current).css({opacity:0}).animate({opacity:1}, 300);
        $maintxtli.eq(old).css({opacity:1}).animate({opacity:0}, 300);
        old = current;
    }
}
// mainVisual

function ftMenu(){
    var $ruletitle = $('#footer .ft-top .rule > li .ft-plus');
    var $ruleul = $('#footer .ft-top .rule > li ul');

    $ruletitle.on('click', function(){
        $ruleul.stop().slideUp();
        $(this).next().stop().slideToggle();
    })
}
// ftMenu


function payContent(){
    var $payh3 = $('.pay .pay-sec h3');
    var $paytxt = $('.pay .pay-sec .txt');

    $payh3.on('click', function(){
        $paytxt.stop().slideUp();
        $(this).next().stop().slideToggle();
    })
}
// payContent