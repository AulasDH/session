const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
    response.render('login');
});

app.post('/login', (request, response) => {
    console.log(request.body);
});

app.listen('3000', () => {
    console.log('Aplicação executada na porta 3000');
});
