$(function(){
	init();
})
function init() {
    aa();
    htcsSkill();
    javaJqSkill();
    phoIlluSkill();
}

function aa(){
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
            Menu.el.ham.on('click',function(event) {
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
}


function htcsSkill(){
    // progressbar.js@1.0.0 version is used
    // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
    var bar = new ProgressBar.Circle(skill1, {
        color: '#386055',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
        autoStyleContainer: false
        },
        from: { color: '#386055', width: 4 },
        to: { color: '#386055', width: 4 },
        // Set default step function for all animate calls
        step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);
    
        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value+'%');
        }
    
        }
    });
    bar.text.style.fontFamily = 'Noto Sans KR';
    bar.text.style.fontSize = '20px';
    
    bar.animate(0.9);  // Number from 0.0 to 1.0
}


function javaJqSkill(){
    // progressbar.js@1.0.0 version is used
    // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
    var bar = new ProgressBar.Circle(skill2, {
        color: '#386055',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
        autoStyleContainer: false
        },
        from: { color: '#386055', width: 4 },
        to: { color: '#386055', width: 4 },
        // Set default step function for all animate calls
        step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);
    
        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value+'%');
        }
    
        }
    });
    bar.text.style.fontFamily = 'Noto Sans KR';
    bar.text.style.fontSize = '20px';
    
    bar.animate(0.6);  // Number from 0.0 to 1.0
}


function phoIlluSkill(){
    // progressbar.js@1.0.0 version is used
    // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
    var bar = new ProgressBar.Circle(skill3, {
        color: '#386055',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
        autoStyleContainer: false
        },
        from: { color: '#386055', width: 4 },
        to: { color: '#386055', width: 4 },
        // Set default step function for all animate calls
        step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);
    
        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value+'%');
        }
    
        }
    });
    bar.text.style.fontFamily = 'Noto Sans KR';
    bar.text.style.fontSize = '20px';
    
    bar.animate(0.4);  // Number from 0.0 to 1.0
}

