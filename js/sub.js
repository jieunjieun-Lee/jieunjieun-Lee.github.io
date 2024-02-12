$(function(){
	init();
})
function init() {
    pageScroll(".con-box");
    korLink();
    skLink();
    detailKor();
    detailPru();
    detailSK();
}

function pageScroll(selector){
    var old = 0   
    var numPage = $(selector).length;  
    var pageNext  = 0 ;
    var pagePrev  = 0 ;
    var isPlaying = 0 ;
    var direction  = 0 ;   

    $(selector).each(function(i){
        $(".nav").append("<li></li>");
    })
    var cnt  =  0
    $(".nav li").on("click",function(){
        cnt  = $(this).index();
        showPage(cnt+1)
    })

    showPage(1);
    function showPage(current){	   		  
            if(old == current || isPlaying == 1 ) return false;	   		     
            isPlaying = 1;
            
            var h  = (current -1 ) * $(".con-box").height();

            $("#webContent").stop().animate({top:-h},500,function(){
                isPlaying = 0	   		     
            })	  	   		      		     
            old = current
            $(".nav li").removeClass("on");
            $(".nav li").eq(current-1).addClass("on");

            pagePrev  = (current-1) < 1 ? 1: current-1;
            pageNext = (current+1) > numPage ? numPage:current+1;
        }

        $("html,body").on("mousewheel DOMMousewheel",function(e){
            e.stopPropagation();	   		  	
            if(e.originalEvent.detail){
                direction = e.originalEvent.detail/3;			
            }else{
                direction = e.originalEvent.wheelDelta / 120;	
            }    		  	
            
            if(direction == -1){
                showPage(pageNext)
            }else if(direction == 1){
                showPage(pagePrev)
            }	   		  
        })
}

var Menu = {  
    el: {
        ham: $('.menu'),
        menuTop: $('.menu-top'),
        menuMiddle: $('.menu-middle'),
        menuBottom: $('.menu-bottom')
    },

    init: function() {
        Menu.bindUIactions();
    },

    bindUIactions: function() {
    Menu.el.ham
        .on(
            'click',
        function(event) {
            Menu.activateMenu(event);
                $('#nav').toggleClass('on');
            event.preventDefault();
            }
        );
    },

    activateMenu: function() {
        Menu.el.menuTop.toggleClass('menu-top-click');
        Menu.el.menuMiddle.toggleClass('menu-middle-click');
        Menu.el.menuBottom.toggleClass('menu-bottom-click');
    }
};

Menu.init();


function korLink(){
    var $kormobile = $('.kor-air .web-simple .right .kor-mobile li');

    $('.kor-air .web-simple .left ul li:last-child a').on('click', function(){
        window.open('./project/koreanairmobile/index.html', '', 'width=480, height=850, left=0, top=0');
    })

    $('.kor-air .web-simple .right .site-list li:nth-child(3) a').on('click', function(){
        window.open('./project/koreanairmobile/index.html', '', 'width=480, height=850, left=0, top=0');
    })

    $kormobile.eq(0).on('click', function(){
        window.open('./project/koreanairmobile/index.html', '', 'width=480, height=850, left=0, top=0');
    })
    $kormobile.eq(1).on('click', function(){
        window.open('./project/koreanairmobile/introduce.html', '', 'width=480, height=850, left=0, top=0');
    })
    $kormobile.eq(2).on('click', function(){
        window.open('./project/koreanairmobile/pay.html', '', 'width=480, height=850, left=0, top=0');
    })
    $kormobile.eq(3).on('click', function(){
        window.open('./project/koreanairmobile/baggage.html', '', 'width=480, height=850, left=0, top=0');
    })
}


function skLink(){
    var $skimgpc = $('.sk .web-simple .left ul li:nth-child(1)');
    var $skimgtb = $('.sk .web-simple .left ul li:nth-child(2)');
    var $skimgmb = $('.sk .web-simple .left ul li:nth-child(3)');
    var $skrespc = $('.sk .web-simple .right .sk-res li:nth-child(1) a');
    var $skrestb = $('.sk .web-simple .right .sk-res li:nth-child(2) a');
    var $skresmb = $('.sk .web-simple .right .sk-res li:nth-child(3) a');

    $skimgpc.on('click', function(){
        window.open('./project/skresponsive/index.html', '', 'width=1920, height=850, left=0, top=0');
    })
    $skimgtb.on('click', function(){
        window.open('./project/skresponsive/index.html', '', 'width=800, height=850, left=0, top=0');
    })
    $skimgmb.on('click', function(){
        window.open('./project/skresponsive/index.html', '', 'width=480, height=850, left=0, top=0');
    })

    $skrespc.on('click', function(){
        window.open('./project/skresponsive/index.html', '', 'width=1920, height=850, left=0, top=0');
    })
    $skrestb.on('click', function(){
        window.open('./project/skresponsive/index.html', '', 'width=800, height=850, left=0, top=0');
    })
    $skresmb.on('click', function(){
        window.open('./project/skresponsive/index.html', '', 'width=480, height=850, left=0, top=0');
    })
}


function detailKor(){
    var $btnli = $('.kor-wire .btn ul li');
    var $wireli = $('.kor-wire .wire-img ul li');
    var $mkbtnli = $('.kor-mkup .btn ul li');
    var $mkimgli = $('.kor-mkup .mkup-img div ul li');
    var current = 0;

    $('.kor-visual .info .left ul li a').eq(2).on('click', function(){
        window.open('./project/koreanairmobile/index.html', '', 'width=480, height=850, left=0, top=0');
    })
    $('.kor-visual .info .right ul li:last-child a').on('click', function(){
        window.open('./project/koreanairmobile/index.html', '', 'width=480, height=850, left=0, top=0');
    })

    $btnli.on('click', function(){
        current = $(this).index();
        $wireli.stop().hide();
        $wireli.eq(current).show();
        $btnli.removeClass('on');
        $btnli.eq(current).addClass('on');
    })

    $mkbtnli.on('click', function(){
        current = $(this).index();
        $mkimgli.stop().hide();
        $mkimgli.eq(current).show();
        $mkbtnli.removeClass('on');
        $mkbtnli.eq(current).addClass('on');
    })
}


function detailPru(){
    var $prubtn = $('.pru-wire .btn ul li');
    var $pruwireli = $('.pru-wire .wire-img ul li');
    var $mkbtnli = $('.pru-mkup .btn ul li');
    var $mkimgli = $('.pru-mkup .mkup-img div ul li');
    var current = 0;

    $prubtn.on('click', function(){
        current = $(this).index();
        $pruwireli.stop().hide();
        $pruwireli.eq(current).show();
        $prubtn.removeClass('on');
        $prubtn.eq(current).addClass('on');
    })

    $mkbtnli.on('click', function(){
        current = $(this).index();
        $mkimgli.stop().hide();
        $mkimgli.eq(current).show();
        $mkbtnli.removeClass('on');
        $mkbtnli.eq(current).addClass('on')
    })
}


function detailSK(){
    $('.sk-visual .info .left ul li a').eq(1).on('click', function(){
        window.open('./project/skresponsive/index.html', '', 'width=1920, height=850, left=0, top=0');
    })
    $('.sk-visual .info .left ul li a').eq(2).on('click', function(){
        window.open('./project/skresponsive/index.html', '', 'width=800, height=850, left=0, top=0');
    })
    $('.sk-visual .info .left ul li a').eq(3).on('click', function(){
        window.open('./project/skresponsive/index.html', '', 'width=480, height=850, left=0, top=0');
    })

    $('.sk-visual .info .right ul li:nth-child(1) a').on('click', function(){
        window.open('./project/skresponsive/index.html', '', 'width=1920, height=850, left=0, top=0');
    })
    $('.sk-visual .info .right ul li:nth-child(2) a').on('click', function(){
        window.open('./project/skresponsive/index.html', '', 'width=800, height=850, left=0, top=0');
    })
    $('.sk-visual .info .right ul li:nth-child(3) a').on('click', function(){
        window.open('./project/skresponsive/index.html', '', 'width=480, height=850, left=0, top=0');
    })
}