

const app = new PIXI.Application({ resizeTo: window});
const view = document.querySelector('.desktop-container');
view.appendChild(app.view);

let item = document.querySelector('.box1');
let linkEntry = document.getElementById('link-room');

let firstbutton = PIXI.Texture.from('images/sprite-test.png')
let textureButtonDown = PIXI.Texture.from('images/right-arrow.png')

const bg = PIXI.Sprite.from("images/abstract-wallpaper.jpg");
bg.anchor.set(0.5);
bg.x = app.screen.width;
bg.y = app.screen.height;
app.stage.addChild(bg);

// Creating the dock bar //
var graphics = new PIXI.Graphics();
graphics.beginFill(0xFFFFFF, 0.5);
graphics.drawRoundedRect(0,0,350,100);
graphics.lineStyle(10, 0xFFFFFF)
graphics.x = app.stage.width/2 + 680;
graphics.y = 990;
app.stage.addChild(graphics);

//attach the dragstart event handler
// item.addEventListener('dragstart', dragEnter);
// item.addEventListener('dragover', dragOver);
// item.addEventListener('dragLeave', dragLeave);
// item.addEventListener('drop', drop);

// function dragEnter(e) {
//     e.preventDefault();
//     e.target.classList.add('drag-over');
// }

// function dragOver(e) {
//     e.preventDefault();
//     e.target.classList.add('drag-over');
// }

// function dragLeave(e) {
//     e.target.classList.remove('drag-over');
// }

// function drop(e) {
//     e.target.classList.remove('drag-over');

//     //get draggable element
//     const id = e.dataTransfer.getData('text/plain');
//     const draggable = document.getElementById(id);

//     //add it to the drop target
//     e.target.appendChild(draggable);

//     //display the draggable element
//     draggable.classList.remove('hide');
// }

//handling the dragstart
// function dragStart(e) {
//     console.log('drag starts...')
//     e.dataTransfer.setData('text/plain', e.target.id);
//     setTimeout(() => {
//         e.target.classList.add('hide');
//     }, 0);
// }

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
let ticker = PIXI.Ticker.shared;

localStorage.setItem('first-load', null);
console.log(localStorage.getItem('first-load'));

const sprite = PIXI.Sprite.from('images/news-circle.png');
const spotify = PIXI.Sprite.from('images/Spotify_Icon_RGB_Green.png');
const chrome = PIXI.Sprite.from('images/chrome.png');
const trash = PIXI.Sprite.from('images/trash-icon.png');
const folder = PIXI.Sprite.from('images/folder-icon.png');
const folder1 = PIXI.Sprite.from('images/folder-icon.png');
const folder2 = PIXI.Sprite.from('images/folder-icon.png');
let popup = new PIXI.Graphics();
popup.beginFill(0x00FF00);
popup.lineStyle({color:  0xffffff, width: 4, alignment: 0});
popup.drawRect(0,0,208,208);
popup.endFill();
// view.appendChild(sprite);

// // Opt-in to interactivity
sprite.interactive = true;

// Set the initial position 
sprite.anchor.set(0.5);

//move sprite to center of screen
// app.screen.width / 2

//creating folders on desktop

console.log("Width" + app.stage.width);
console.log("Height" + app.stage.height);

spotify.width = 70;
spotify.height = 70;
spotify.x = app.stage.width/2 + 140;
spotify.y = 1005;
app.stage.addChild(spotify);

chrome.width = 80;
chrome.height = 80;
chrome.x = app.stage.width/2 + 220;
chrome.y = 1000;
app.stage.addChild(chrome);

trash.width = 80;
trash.height = 80;
trash.x = app.stage.width/2 + 395;
trash.y = 1000;
app.stage.addChild(trash);

sprite.width = 80;
sprite.height = 80;
sprite.x = app.stage.width/2 + 350;
sprite.y = 970;
sprite.vy = 0;
app.stage.addChild(sprite);

folder.width = 90;
folder.height = 90;
folder.x = 30;
folder.y = 50;
app.stage.addChild(folder);

folder1.width = 90;
folder1.height = 90;
folder1.x = 30;
folder1.y = 150;
app.stage.addChild(folder1);

folder2.width = 90;
folder2.height = 90;
folder2.x = 30;
folder2.y = 250;
app.stage.addChild(folder2);

//-------Make time tick!----------//
let time_bar = document.getElementById('desktop-time');
let hour = 1;
let minute = 0;
let second = 0;
let initialh = "01"
let initialm = "00"
let initials = "00"
let init_t = initialh + ":" + initialm + ":" + initials;

time_bar.innerHTML = init_t;

var interval;
interval = setInterval(changeTime, 1000);

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

    return finalh + ":" + finalm + ":" + finals;
}

// Making News App bounce like notification
sprite.canRotate = true;
let canRotate = true;

app.animationUpdate = function(delta) {
    sprite.y += sprite.vy;
    sprite.vy += 0.1;
    if (sprite.y > 1035) {
        sprite.vy *= -0.9;
        sprite.y += sprite.vy;
    }
}

app.ticker.add(app.animationUpdate);
let selectedTarget;

if (sprite.on('click', () => {
    sprite.y = 1035;
    app.ticker.remove(app.animationUpdate);
    const popup1 = PIXI.Texture.from('images/blackscreen.jpg') //popupvideo1
    const popup2 = PIXI.Texture.from('images/popupwindow1.png') 
    const popup3 = PIXI.Texture.from('images/blackscreen.jpg') //popupvideo2
    const popup4 = PIXI.Sprite.from('images/popupwindow2.png')
    const popup5 = PIXI.Texture.from('images/blackscreen.jpg') //popupvideo3
    const popup6 = PIXI.Texture.from('images/popupwindow3.png')
    const popup7 = PIXI.Texture.from('images/blackscreen.jpg') //popupvideo4
    const popup8 = PIXI.Texture.from('images/popupwindow4.png')
    const popup9 = PIXI.Texture.from('images/blackscreen.jpg') //popupvideo5

    const tpopup1 = PIXI.Texture.from('images/blackscreen.jpg') //popupvideo1
    const tpopup2 = PIXI.Texture.from('images/popupwindow1.png')
    const tpopup3 = PIXI.Texture.from('images/blackscreen.jpg') //popupvideo2
    const tpopup4 = PIXI.Sprite.from('images/popupwindow2.png')
    const tpopup5 = PIXI.Texture.from('images/blackscreen.jpg') //popupvideo3
    const tpopup6 = PIXI.Texture.from('images/popupwindow3.png')
    const tpopup7 = PIXI.Texture.from('images/blackscreen.jpg') //popupvideo4
    const tpopup8 = PIXI.Texture.from('images/popupwindow4.png')
    const tpopup9 = PIXI.Texture.from('images/blackscreen.jpg') //popupvideo5

    app.stage.interactive = true;
    app.stage.hitArea = app.renderer.screen;
    app.animationUpdate = function() {
        app.stage.addChild(popupSprite);
    }


    setTimeout (function(){
        const popupSprite = new PIXI.Sprite(popup1);
        popupSprite.interactive = true;
        popupSprite.width = 700;
        popupSprite.height = 450;
        popupSprite.x = app.screen.width/2 - 300;
        popupSprite.y = 20;
        app.stage.addChild(popupSprite);
    }, 1000);
    setTimeout (function(){
        const popupSprite2 = new PIXI.Sprite(popup2);
        popupSprite2.interactive = true;
        popupSprite2.width = 700;
        popupSprite2.height = 450;
        popupSprite2.x = 800;
        popupSprite2.y = 600;
        app.stage.addChild(popupSprite2);
    }, 7000);
    setTimeout (function(){
        const popupSprite3 = new PIXI.Sprite(popup3);
        popupSprite3.interactive = true;
        popupSprite3.width = 700;
        popupSprite3.height = 450;
        const max_w = app.screen.width - popupSprite3.width;
        const min_w = popupSprite3.width;
        const max_h = app.screen.height - popupSprite3.height;
        const min_h = popupSprite3.height;
        popupSprite3.x = app.screen.width/2 + 300;
        popupSprite3.y = 500;
        app.stage.addChild(popupSprite3);
    }, 9000);
    setTimeout (function(){
        // const popupSprite4 = new PIXI.Sprite(popup4);
        popup4.interactive = true;
        popup4.width = 700;
        popup4.height = 450;
        const max_w = app.screen.width - popup4.width;
        const min_w = popup4.width;
        const max_h = app.screen.height - popup4.height;
        const min_h = popup4.height;
        popup4.x = 1200;
        popup4.y = 90;
        app.stage.addChild(popup4);
    }, 10000);
    setTimeout (function(){
        const popupSprite5 = new PIXI.Sprite(popup5);
        popupSprite5.interactive = true;
        popupSprite5.width = 700;
        popupSprite5.height = 450;
        const max_w = app.screen.width - popupSprite5.width;
        const min_w = popupSprite5.width;
        const max_h = app.screen.height - popupSprite5.height;
        const min_h = popupSprite5.height;
        popupSprite5.x = 1000;
        popupSprite5.y = app.screen.width/2 + 300;
        app.stage.addChild(popupSprite5);
    }, 11000);
    setTimeout (function(){
        const popupSprite6 = new PIXI.Sprite(popup6);
        popupSprite6.interactive = true;
        popupSprite6.width = 700;
        popupSprite6.height = 450;
        const max_w = app.screen.width - popupSprite6.width;
        const min_w = popupSprite6.width;
        const max_h = app.screen.height - popupSprite6.height;
        const min_h = popupSprite6.height;
        popupSprite6.x = 30;
        popupSprite6.y = 500;
        app.stage.addChild(popupSprite6);
    }, 11500);
    setTimeout (function(){
        const popupSprite7 = new PIXI.Sprite(popup7);
        popupSprite7.interactive = true;
        popupSprite7.width = 700;
        popupSprite7.height = 450;
        const max_w = app.screen.width - popupSprite7.width;
        const min_w = popupSprite7.width;
        const max_h = app.screen.height - popupSprite7.height;
        const min_h = popupSprite7.height;
        popupSprite7.x = 10;
        popupSprite7.y = 400;
        app.stage.addChild(popupSprite7);
    }, 11700);
    setTimeout (function(){
        const popupSprite8 = new PIXI.Sprite(popup8);
        popupSprite8.interactive = true;
        popupSprite8.width = 700;
        popupSprite8.height = 450;
        const max_w = app.screen.width - popupSprite8.width;
        const min_w = popupSprite8.width;
        const max_h = app.screen.height - popupSprite8.height;
        const min_h = popupSprite8.height;
        popupSprite8.x = 10;
        popupSprite8.y = 10;
        app.stage.addChild(popupSprite8);
    }, 11800);
    setTimeout (function(){
        const popupSprite9 = new PIXI.Sprite(popup9);
        popupSprite9.interactive = true;
        popupSprite9.width = 700;
        popupSprite9.height = 450;
        const max_w = app.screen.width - popupSprite9.width;
        const min_w = popupSprite9.width;
        const max_h = app.screen.height - popupSprite9.height;
        const min_h = popupSprite9.height;
        popupSprite9.x = app.screen.width/2;
        popupSprite9.y = app.screen.height/2;
        app.stage.addChild(popupSprite9);
    }, 11900);



    setTimeout (function(){
        // app.ticker.add(app.animationUpdate);
        // app.screen.width
        const tpopupSprite = new PIXI.Sprite(tpopup1);
        tpopupSprite.interactive = true;
        tpopupSprite.width = 700;
        tpopupSprite.height = 450;
        tpopupSprite.x = 1200;
        tpopupSprite.y = 800;
        // last_popup_x = popupSprite.x;
        // last_popup_y = popupSprite.y;
        app.stage.addChild(tpopupSprite);
    }, 12000);
    setTimeout (function(){
        const tpopupSprite2 = new PIXI.Sprite(tpopup2);
        tpopupSprite2.interactive = true;
        tpopupSprite2.width = 700;
        tpopupSprite2.height = 450;
        tpopupSprite2.x = app.screen.width/2 + 300;
        tpopupSprite2.y = 500;
        app.stage.addChild(tpopupSprite2);
    }, 12500);
    setTimeout (function(){
        const tpopupSprite3 = new PIXI.Sprite(tpopup3);
        tpopupSprite3.interactive = true;
        tpopupSprite3.width = 700;
        tpopupSprite3.height = 450;
        tpopupSprite3.x = 100;
        tpopupSprite3.y = 900;
        app.stage.addChild(tpopupSprite3);
    }, 13000);
    setTimeout (function(){
        // const popupSprite4 = new PIXI.Sprite(popup4);
        tpopup4.interactive = true;
        tpopup4.width = 700;
        tpopup4.height = 450;
        tpopup4.x = 400;
        tpopup4.y = 300;
        app.stage.addChild(tpopup4);
    }, 13500);
    setTimeout (function(){
        const tpopupSprite5 = new PIXI.Sprite(tpopup5);
        tpopupSprite5.interactive = true;
        tpopupSprite5.width = 700;
        tpopupSprite5.height = 450;
        tpopupSprite5.x = 1200;
        tpopupSprite5.y = 500;
        app.stage.addChild(tpopupSprite5);
    }, 14000);
    setTimeout (function(){
        const tpopupSprite6 = new PIXI.Sprite(tpopup6);
        tpopupSprite6.interactive = true;
        tpopupSprite6.width = 700;
        tpopupSprite6.height = 450;
        tpopupSprite6.x = 1200;
        tpopupSprite6.y = 400;
        app.stage.addChild(tpopupSprite6);
    }, 14500);
    setTimeout (function(){
        const tpopupSprite7 = new PIXI.Sprite(tpopup7);
        tpopupSprite7.interactive = true;
        tpopupSprite7.width = 700;
        tpopupSprite7.height = 450;
        tpopupSprite7.x = 5;
        tpopupSprite7.y = 470;
        app.stage.addChild(tpopupSprite7);
    }, 15000);
    setTimeout (function(){
        const tpopupSprite8 = new PIXI.Sprite(tpopup8);
        tpopupSprite8.interactive = true;
        tpopupSprite8.width = 700;
        tpopupSprite8.height = 450;
        tpopupSprite8.x = 10;
        tpopupSprite8.y = 800;
        app.stage.addChild(tpopupSprite8);
    }, 15500);
    setTimeout (function(){
        const tpopupSprite9 = new PIXI.Sprite(tpopup9);
        tpopupSprite9.interactive = true;
        tpopupSprite9.width = 700;
        tpopupSprite9.height = 450;
        tpopupSprite9.x = app.screen.width/2;
        tpopupSprite9.y = app.screen.height/2 - 300;
        app.stage.addChild(tpopupSprite9);
    }, 16000);

    setTimeout (function(){
        const zoom_notif = document.getElementById('zoom-call');
        zoom_notif.classList.remove('hidden');
        zoom_notif.classList.add('loader-cursor');

        const room = document.getElementById('enter-call');
        room.addEventListener('click', toRoom);

        function toRoom() {
            room.classList.add('hidden');
            const load = document.getElementById('loader');
            load.classList.remove('hidden');
            const message = document.getElementById('message');
            message.innerHTML = "Anonymous will let you in soon."
            var rTime = Array(2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000);
            setTimeout(function(){
                location.href="components/Room/index.html"
            }, rTime[Math.floor(Math.random()*rTime.length)]);
    }

    }, 25000)

}));

