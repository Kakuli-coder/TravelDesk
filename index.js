console.log(`Hello! Welcome to JS file of 'Form Validation using Regular Expressions' project.`);
displayUsers();

let username = document.querySelector("#username");
let email = document.querySelector("#email");
let car = document.querySelector("#car");;
let address = document.querySelector("#address");
let phone = document.querySelector("#phone");
let message = document.querySelector("#message");

let rollsRoyce = document.querySelector("rollsRoyce");
let baleno = document.querySelector("#baleno");
let maruti800 = document.querySelector("#maruti800");
let bmw = document.querySelector("#bmw");
let lamborghini = document.querySelector("#lamborghini");
let ferrari = document.querySelector("ferrari");
let porsche = document.querySelector("porsche");
let jeep = document.querySelector("jeep");
let landRover = document.querySelector("landRover");
let fortuner = document.querySelector("fortuner");

let validUsername;
let validEmail;
let validPhone;
let validCar;

username.addEventListener("blur", () => {
    // validate username
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){1,9}$/;
    let str = username.value;
    if (regex.test(str)) {
        validUsername = true;
        // console.log('Your username is valid');
        // console.log(username.value);
        username.classList.remove("is-invalid");
    } else {
        validUsername = false;
        // console.log('Your username is not valid');
        username.classList.add("is-invalid");
    };
});

email.addEventListener("blur", () => {
    // validate email
    let regex = /^[0-9a-zA-Z_\.-]+@[0-9a-zA-Z_\.-]+\.[a-zA-Z]{2,7}$/;
    let str = email.value;
    if (regex.test(str)) {
        validEmail = true;
        // console.log('Your email is valid');
        // console.log(email.value);
        email.classList.remove("is-invalid");
    } else {
        validEmail = false;
        // console.log('Your email is not valid');
        email.classList.add("is-invalid");
    };
});

phone.addEventListener("blur", () => {
    // validate phone number
    let regex = /^[0-9]{10}$/;
    let str = phone.value;
    if (regex.test(str)) {
        validPhone = true;
        // console.log('Your phone is valid');
        // console.log(phone.value);
        phone.classList.remove("is-invalid");
    } else {
        validPhone = false;
        // console.log('Your phone is not valid');
        phone.classList.add("is-invalid");
    };
});

car.addEventListener("blur", () => {
    // validate car
    if (car.value === '') {
        validCar = false;
        // console.log('Your car is not valid');
        car.classList.add("is-invalid");
    } else {
        validCar = true;
        // console.log('Your car is valid');
        // console.log(car.value);
        car.classList.remove("is-invalid");
    };
});

function alert(type, displayAlert) {
    let alert = document.querySelector("#alert");
    let boldTxt;
    if (type === "success") {
        boldTxt = "😄 Success!";
    } else {
        boldTxt = "😥 Oops!";
    }
    alert.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>${boldTxt}</strong> ${displayAlert}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `
    setTimeout(() => {
        alert.innerHTML = ``;
    }, 5000);
};

// add text to local storage
switch (car.value) {
    case rollsRoyce:
        rollsRoyce.value;
        break;

    case maruti800:
        maruti800.value;
        break;

    case bmw:
        bmw.value;
        break;

    case lamborghini:
        lamborghini.value;
        break;

    case ferrari:
        ferrari.value;
        break;

    case porsche:
        porsche.value;
        break;

    case jeep:
        jeep.value;
        break;

    case landRover:
        landRover.value;
        break;

    case baleno:
        baleno.value;
        break;

    case fortuner:
        fortuner.value;
        break;

    default: 
        break;
}

let submit = document.querySelector("#submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log('You clicked on submit.');

    let users = localStorage.getItem("users");
    if (users === null) {
        usersObj = [];
    } else {
        usersObj = JSON.parse(users);
    }

    let myObj = {
        username: username.value,
        email: email.value,
        car: car.value,
        address: address.value,
        phone: phone.value,
        message: message.value,
    }

    if (validUsername && validEmail && validPhone) {
        alert("success", "Your travel request has been successfully submitted.");
        usersObj.push(myObj);
        localStorage.setItem("users", JSON.stringify(usersObj));
    } else {
        alert("danger", "Your travel request could not be sent due to error on your end.");
    };

    username.value = '';
    email.value = '';
    car.value = '';
    address.value = '';
    phone.value = '';
    message.value = '';

    displayUsers();
});
// add text to local storage ends

// show elements from localStorage
function displayUsers() {
    let users = localStorage.getItem("users");
    if (users === null) {
        usersObj = [];
    } else {
        usersObj = JSON.parse(users);
    }

    let html = '';

    usersObj.forEach(function (element, index) {
        html += `
        <thead>
            <tr class="table-dark">
                <th>#${index + 1}</th>
                <div class="d-flex justify-content-between">
                <div><th><em>@${element.username}</em></th></div>
                <div><th><button type="button" id="${index}" onclick="deleteUser(this.id)" class="btn btn-outline-danger">Delete</button></th></div>
                </div>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row" class="col-lg-3" id="col">Username</th>
                <td class="col-lg-9">${element.username}</td>
            </tr>
            <tr>
                <th scope="row" id="col">Email</th>
                <td>${element.email}</td>
            </tr>
            <tr>
                <th scope="row">Car</th>
                <td colspan="2">${element.car}</td>
            </tr>
            <tr>
                <th scope="row">Address</th>
                <td colspan="2" class="text-wrap">${element.address}</td>
            </tr>
            <tr>
                <th scope="row">Phone</th>
                <td colspan="2">${element.phone}</td>
            </tr>
            <tr>
                <th scope="row">Message</th>
                <td colspan="2" class="text-wrap">${element.message}</td>
            </tr>
        </tbody>
    <hr>
        ` ;
    });

    let table = document.querySelector("#table");
    if (usersObj.length !== 0) {
        table.innerHTML = html;
    } else {
        table.innerHTML = `<strong style="color: red">No user found!</strong>`
    }
};

displayUsers();

// delete a note
function deleteUser(index) {
    // console.log(`I am deleting User ${index}`);

    let users = localStorage.getItem("users");
    if (users === null) {
        usersObj = [];
    } else {
        usersObj = JSON.parse(users);
    }

    usersObj.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(usersObj));
    displayUsers();
}
// delete a note ends
