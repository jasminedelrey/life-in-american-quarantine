var room_button = document.getElementById('room-button');
room_button.addEventListener('click', goToRoom);

function goToRoom() {
    location.href = "//localhost:3000/components/Room/index.html"
}