/* 
 * This file contains all the functions that interact with the backend API.
 * Each function returns a promise that resolves to the data returned by the API.
 * In order to use these functions, you must first import them into your component,
 * and then use .then() to handle the returned data.
 * 
 * Currently the backend API is not fully implemented, so most of these functions
 * will return the correct fields, but with dummy data.
 */

/* given a user id, return the user object */
export async function getUser(id) {
    const response = await fetch('http://georgster.com:8081/api/getUser?' + new URLSearchParams({
        id: id,
    }), {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    let output = await response.json();
    return output;
}

/* given a user's email and password, return a JWT token and the user object */
export async function login(email, password) {
    const response = await fetch('http://georgster.com:8081/api/login?' + new URLSearchParams({
        email: email,
        password: password,
    }), {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    let output = await response.json();
    return output;
}

/* Given a user's registration information, create a new user and return the user object */
export async function register(firstname, lastname, email, password) {
    const response = await fetch('http://georgster.com:8081/api/register?' + new URLSearchParams({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
    }), {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    let output = await response.json();
    return output;
}

/* Given a user's id, return the user's address object */
export async function getAddressById(id) {
    const response = await fetch('http://georgster.com:8081/api/getAddress?' + new URLSearchParams({
        id: id,
    }), {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    let output = await response.json();
    return output;
}

/* Given a user's id, return the user's payment card objects */
export async function getPaymentCardsById(id) {
    const response = await fetch('http://georgster.com:8081/api/getCards?' + new URLSearchParams({
        id: id,
    }), {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    let output = await response.json();
    return output;
}

/* Given a user's id, update their name attributes. Returns "success" on success, "error" on error */
export async function updateNameById(id, firstname, lastname) {
    const response = await fetch('http://georgster.com:8081/api/updateName?' + new URLSearchParams({
        id: id,
        firstname: firstname,
        lastname: lastname,
    }), {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    });
    let output = await response.json();
    return output;
}

/* Given a user's id, update their address attributes. Returns "success" on success, "error" on error */
export async function updateAddressById(id, street, city, state, zip) {
    const response = await fetch('http://georgster.com:8081/api/updateAddress?' + new URLSearchParams({
        id: id,
        street: street,
        city: city,
        state: state,
        zip: zip,
    }), {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    });
    let output = await response.json();
    return output;
}

/* Given a user's id, add a new card. Returns "success" on success, "error" on error */
export async function addCardById(userId, cardNumber, cardName, cardExpDate, cardCvv) {
    const response = await fetch('http://georgster.com:8081/api/addCard?' + new URLSearchParams({
        userId: userId,
        cardNumber: cardNumber,
        cardName: cardName,
        cardExpDate: cardExpDate,
        cardCvv: cardCvv,
    }), {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    });
    let output = await response.json();
    return output;
}

/* Given a user's id, remove a card. Returns "success" on success, "error" on error */
export async function removeCardById(userId, cardNumber) {
    const response = await fetch('http://georgster.com:8081/api/removeCard?' + new URLSearchParams({
        userId: userId,
        cardNumber: cardNumber,
    }), {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    });
    let output = await response.json();
    return output;
}