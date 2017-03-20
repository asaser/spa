var click = 0;
function clicked() {  
    document.getElementById('message').innerHTML = "Kliknąłeś już: " + click;
    click += 1;
}
