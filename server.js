const express = require('express');
const app = new express();
const path = require('path');

//For folder references
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(request, response) {
    response.sendFile('public/components/Desktop/desktop.html', {root: '.'});
});


app.listen(process.env.PORT || 5000, () => {
    console.log(`Running on server now.`)
});

// app.listen(3000, () => {
//     console.log(`Running on: http://localhost:${3000}`)
// });
//hello