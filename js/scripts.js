console.log("Thanks for discovering my portfolio website.");
function menuToggle(){
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle'){
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}

/*var content = 'Hello, my name is Diane Adote and I design/code beautiful things for the web.';

var ele = '<span>' + content.split('').join('</span><span>') + '</span>';

$(ele).hide().appendTo('#hero h1').each(function (i) {
    $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});*/