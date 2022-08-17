let temporalUser = {
    name: ''
};
let users = [{}];
let userInput;

function setup() {
    createCanvas(500, 500);
    background(0);
    userInput = createInput('');
    userInput.input(myInputEvent);

}

function draw() {
    ellipse(pmouseX, pmouseY, 50, 50);
}

function mouseClicked() {
    getUser();
}

function keyPressed() {
    if (keyCode === RETURN) {
        
    }
}

function myInputEvent() {
    console.log('you are typing: ', this.value());

}

//__________________________________

async function getUser() {

}

async function postUser(newUser) {

}
















/*let users = [{
    name: ''
}];
let user = {
    name: ''
};
let userInput;

function setup() {
    createCanvas(500, 500);
    background(0);

    userInput = createInput('');
    userInput.input(addingUsers);
}

function draw() {
    ellipse(pmouseX, pmouseY, 50, 50);
    fill(255);
    textSize(20);
    users.forEach((user, i) => {
        text(user.name, 50, 50 + (i * 80));
    });
}

function mousePressed() {
    background(0);
    getData();
    console.log(users);
}

function mouseReleased() {
    //postData();
}

function keyPressed() {
    if (keyCode === RETURN) {
        console.log('adding player:');
        console.log(users);
        postData(user);
    }
}

function addingUsers() {
    user.name = this.value();
}
//----------------------------------------------

async function getData() {
    const response = await fetch('http://localhost:5050/users');
    console.log(response);
    const data = await response.json();
    console.log(data);
    users = data;
    console.log();
}

async function postData(newUser) {
    const requestHTTP = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    };
    const response = await fetch('http://localhost:5050/add-user', requestHTTP);
    const data = await response.json();
    console.log(data);
}*/