anychart.onDocumentReady(function() {

    //Create word cloud for responses through https://www.anychart.com/ 
    var data = [
        {"x": "feel completely alone", "value": 32, "sometimes": 50, "rarely": 12, "never": 4},
        {"x": "dream about post-COVID life", "value": 30, "sometimes": 46, "rarely": 19, "never": 3},
        {"x": "feel completely bored", "value": 43, "sometimes": 35, "rarely": 18, "never": 3},
        {"x": "feel overwhelmed", "value": 54, "sometimes": 31, "rarely": 12, "never": 1},
        {"x": "feel it difficult to keep in touch with my friends", "value": 53, "sometimes": 38, "rarely": 6, "never": 1},
        {"x": "feel unable to make new friends", "value": 69, "sometimes": 23, "rarely": 4, "never": 2},
        {"x": "would doomscroll", "value": 44, "sometimes": 30, "rarely": 18, "never": 6},
        {"x": "would spend time with people outside of my home", "value": 6, "sometimes": 30, "rarely": 52, "never": 10}
    ];

    var chart = anychart.tagCloud(data);
    var tooltip = chart.tooltip();
    var formatter = "Out of 165 responses, respondents answered \n Often: {%value}% \n Sometimes: {%sometimes}% \n Rarely: {%rarely}% \n Never: {%never}%"
    tooltip.format(formatter);
    chart.angles([0]);
    chart.width('100%');

    chart.container('rate-container');
    chart.draw();

});

var room_button = document.getElementById('room-button');
room_button.addEventListener('click', goToRoom);

function goToRoom() {
    location.href = "//localhost:3000/components/Room/index.html"
}