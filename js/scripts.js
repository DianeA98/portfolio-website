console.log("Thanks for discovering my portfolio website.");
function menuToggle(){
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle'){
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}