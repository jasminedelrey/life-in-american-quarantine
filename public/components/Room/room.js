window.onload = function(){

    var click = 0;
    var pre = document.getElementById('pre');
    console.log(location.href)
    let container = document.getElementById('container');
    let scrollCompleted = 0;
    var showButton;

    // for moving left and right in Zoom room container //
    document.getElementById('right').onclick = function clickedLeft() {
        console.log('left is clicked.')
        container.scrollLeft += 30;
    };
    document.getElementById('left').onclick = function clickedRight() {
        console.log('right is clicked.')
        container.scrollLeft -= 30;
    };
    document.getElementById('ukelele').onclick = function goToHobby() {
        location.href = "//localhost:3000/components/Stories/Hobbies/hobbies.html"
    }
    document.getElementById('journal').onclick = function goToReflection() {
        location.href = "//localhost:3000/components/Stories/Reflection/reflection.html"
    }
    document.getElementById('phone').onclick = function goToDigitalHabits() {
        location.href = "//localhost:3000/components/Stories/DigitalHabits/digitalhabits.html"
    }
    document.getElementById('video-icon').onclick = function videoOff() {
        var video = document.getElementById('video-icon');
        var off_video = document.getElementById('off-video-icon');
        var disabled = document.getElementById('disabled-text');
        disabled.classList.remove('hidden');
        video.classList.add('hidden');
        off_video.classList.remove('hidden');
        StopWebCam();
    }
    document.getElementById('off-video-icon').onclick = function videoOff() {
        var video = document.getElementById('video-icon');
        var off_video = document.getElementById('off-video-icon');
        var disabled = document.getElementById('disabled-text');
        disabled.classList.add('hidden');
        video.classList.remove('hidden');
        off_video.classList.add('hidden');
        start();
    }

    //------Adapted from https://dev.to/stackfindover/how-to-integrate-webcam-using-javascript-3fji ----//
    // Activate Webcam // 
    var StopWebCam = function () {
        var stream = video.srcObject;
        var tracks = stream.getTracks();

        for (var i = 0; i < tracks.length; i++) {
            var track = tracks[i];
            track.stop();
        }
        video.srcObject = null;
    }

    var start = function () {
        var video = document.getElementById("video"),
            vendorURL = window.URL || window.webkitURL;

        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                    video.srcObject = stream;
                }).catch(function (error) {
                    console.log("Something went wrong");
                });
        }
    }

    // Continuation of instructional screen for multiple messages //
    document.getElementById('next-button').onclick = function changeText() {
        hide();
        click++;
        console.log(click);
        var text;
        var message_div = document.getElementById('text-here');
        var button_text = document.getElementById('next-button');
        var interval_here;
        var index_here;
        message_div.innerHTML = "";

        if (init == true) {
            console.log ("it's true and the button is clicked.");
        }
        if (click == 1) {
            text = 'The selves that we projected through these virtual windows became the main selves that we presented to the outside world.';
            index_here = 0;
            interval_here = setInterval(function typewriterr(){
                if (index_here >= text.length) {
                    clearInterval(interval_here);
                }
                else {
                    $('#text-here').append(text[index_here]);
                    index_here++;
                }
            }, 20);
            showButton = setInterval(reveal, 15000);

        }
        if (click == 2) {
            text = 'I invite you to observe a window similar to those that we housed our selves in during quarantine. Click on the objects in the room to learn more about what people did in their quarantine.'
            index_here = 0;
            interval_here = setInterval(function typewriterr(){
                if (index_here >= text.length) {
                    clearInterval(interval_here);
                }
                else {
                    $('#text-here').append(text[index_here]);
                    index_here++;
                }
            }, 20);
            button_text.innerHTML = 'Enter';
            showButton = setInterval(reveal, 7000);
        }

        if (click == 3) {
            pre.classList.add('hidden');
            localStorage.setItem('first-load', 'done');
            console.log("Cache load" + cache_load);
        }
    }


//-------Make time tick!----------//
let time_bar = document.getElementById('time');
let hour = 1;
let minute = 0;
let second = 0;
let initialh = "01"
let initialm = "00"
let initials = "00"
let init_t = initialh + ":" + initialm + " PM | X8394G";

time_bar.innerHTML = init_t;

var interval_time;
interval_time = setInterval(changeTime, 1000);

function changeTime() {
    if (second == 59) {
        if (minute == 59) { 
            hour++;
            minute = 0;
            second = 0;
            time_bar.innerHTML = formatTime(hour, minute, second);
        }
        else { 
            minute++;
            second = 0;
            time_bar.innerHTML = formatTime(hour, minute, second);
        }
        second = 0;
    }
    else {
        second++;
        time_bar.innerHTML = formatTime(hour, minute, second);
    }
}

function formatTime(hour, minute, second){
    var finalh = hour.toString();
    var finalm = minute.toString();
    var finals = second.toString();

    if (hour < 10) {
        finalh = "0" + finalh;
    }
    if (minute < 10) {
        finalm = "0" + finalm;
    }
    if(second < 10) {
        finals = "0" + finals;
    }

    return finalh + ":" + finalm + " PM | X8394G";
}

function slide(direction){
    let container = document.getElementById('container');
    
    scrollCompleted = 0;
    let slideVar = setInterval(function(){
        if(direction == 'left'){
            container.scrollLeft -= 10;
        } else {
            container.scrollLeft += 10;
        }
        scrollCompleted += 10;
        if(scrollCompleted >= 100){
            window.clearInterval(slideVar);
        }
    }, 50);
}

// Instructional screen before entry to Zoom room //
let str1 = 'As quarantine’s isolation forced us to adapt to a remote lifestyle, video conferencing windows acted as our main way to talk to, laugh with, and spend time with anyone and anything outside the four corners of our place of isolation.';
let interval;
let index = 0;
var init = false;
const cache_load = localStorage.getItem('first-load');
console.log("Cache load" + cache_load);

if (cache_load == "null") {
    console.log('i am in cache load function');
    if (init == false) {
        interval = setInterval(typewriter, 20);
        init = true;
    }
    showButton = setInterval(reveal, 5000);
}

else {
    pre.classList.add('hidden');
}

function typewriter() {
  if (index >= str1.length) {
    clearInterval(interval);
  } else {
    $('#text-here').append(str1[index]);
    index++;
  }
}

function reveal() {
    var nbutton = document.getElementById('next-message');
    nbutton.classList.remove('hidden');
}

function hide() {
    var nbutton = document.getElementById('next-message');
    nbutton.classList.add('hidden');
}

    
    }

