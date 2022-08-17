//1. Add requiere packages

//2. Create an Express app

//3. Using middlewares: Static, JSON and CORS

//4. Start the server at a PORT

// Optional: create a object to store data.

//5. Create API endpoints
























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