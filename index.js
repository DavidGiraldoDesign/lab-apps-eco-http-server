//1. Add requiere packages
const cors = require('cors');
const express = require('express');
//2. Create an Express app
const serverApp = express();
const staticPublic = express.static('public');

//3. Using middlewares: Static, JSON and CORS
serverApp.use('/', staticPublic);
serverApp.use(express.json());
serverApp.use(cors({
    origin: '*'
}))

//4. Start the server at a PORT
serverApp.listen(5050, x => {
    console.log('http://localhost:5050')
});


//________________________________

let users = [{
    name: 'David',
    age: 26
}]

//________________________________
//5. Create API endpoints
serverApp.get('/Holi', (request, response) => {
    response.send({
        message: 'Holi ✌🏻'
    });
});

serverApp.get('/get-users', (resquest, response) => {
    response.send(users);
});

serverApp.post('/add-user', (resquest, response) => {
    //console.log(resquest.body);
    users.push(resquest.body);
    console.log(users);
    response.send({nms:'Oky'});
});
























/*const express = require('express');
const serverApp = express();
const PORT = 5050;

//_________________________________
serverApp.use(express.json());
const staticPublic = express.static('public');
serverApp.use('/', staticPublic);

let users = [{
    name: 'David',
    age: 26
}, {
    name: 'Luisa',
    age: 21
}];

serverApp.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

serverApp.get('/users', (request, response) => {
    response.send(users);
});

serverApp.post('/add-user', (request, response) => {
    console.log('Inside POST /add-user');
    console.log(request.body);

    let newUser = {
        name: request.body.name,
        age: request.body.age
    }

    console.log('New user:')
    console.log(newUser);
    users.push(newUser);
    console.log('Users:');
    console.log(users);

    let message = {
        content: 'Holi de regreso'
    }
    response.send(message);
});*/