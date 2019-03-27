const express = require('express');
const hbs = require('hbs');

var app = express();
const fs = require('fs');



//heroku stuff

const port = process.env.PORT || 8080;

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('message', (text) => {
    return text.toUpperCase();
})

app.get('/', (request, response) => {
    response.send({
        name: 'Your Name',
        school: [
            'BCIT',
            'SFU',
            'UVIC'
        ]
    })
});


app.get('/info', (request, response) => {
    response.render('about.hbs', {
        title: 'About page',
        // year:  new Date().getFullYear()
        welcome: 'Hello!'
    });
});

app.get('/404', (request, response) => {
    response.send({
        error: 'Page not found'
    })
});

//
// app.listen(8080, () => {
//     console.log('Server is up on the port 8080');
// });

//heroku stuff
app.listen(port, () => {
    console.log(`Server is up on the port ${port}`);
});