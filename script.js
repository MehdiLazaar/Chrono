// Varaibles
var sp,start_Button, stop_Button, t,ms,mn,s,h;
// Fonction to initialize variables when the page loads
window.onload = function(){
    sp = document.getElementsByTagName('span');
    start_Button = document.getElementById('Start');
    stop_Button = document.getElementById('Stop');
    t;
    ms= mn = s = h = 0;
}
function upload_Chrono(){
    ms += 1;
    if(ms == 10){
        ms = 1;
        s += 1;
    }
    if(s == 60){
        s = 0;
        mn += 1;
    }
    if(mn == 60){
        mn = 0;
        h += 1;
    }
    /**
     *Insert values in spans
     the [0] able us to select the first span
     the [1] able us to select the second span
     the [2] able us to select the third span .. etc
     */
    sp[0].innerHTML = h + 'h';
    sp[1].innerHTML = mn + 'mn';
    sp[2].innerHTML = s + 's';
    sp[3].innerHTML = ms + 'ms';
}
// Function for the Start button
function start(){
    //Every 100 milliseconds the upload_Chrono function is called
    t = setInterval(upload_Chrono,100);
    start_Button.disabled = true;
    stop_Button.disabled = false;
}
// Function for the Stop button
function stop(){
    // delete the interval
    clearInterval(t);
    start_Button.disabled = false;
    stop_Button.disabled = true;
}
// Function for the Reset button
function reset(){
    clearInterval(t);
    ms = mn = s = h = 0;
    sp[0].innerHTML = h + 'h';
    sp[1].innerHTML = mn + 'mn';
    sp[2].innerHTML = s + 's';
    sp[3].innerHTML = ms + 'ms';
    start_Button.disabled = false;
    stop_Button.disabled = true;
}