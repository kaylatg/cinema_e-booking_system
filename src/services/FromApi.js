/* 
 * This file contains all the functions that interact with the backend API.
 * Each function returns a promise that resolves to the data returned by the API.
 * In order to use these functions, you must first import them into your component,
 * and then use .then() to handle the returned data.
 * 
 * Currently the backend API is not fully implemented, so most of these functions
 * will return the correct fields, but with dummy data.
 */

/* given a user's username, return the user object */
export async function getUser(username) {
    const response = await fetch('http://georgster.com:8081/api/user/' + username + "?" + new URLSearchParams({
        username: username,
    }), {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    let output = await response.json();
    return output;
}

/* Given a user's information, update the user's info in the database */
export async function updateUser(email, password, username, phone, firstname, lastname, promotions, street, city, state, zip, country) {
    const body = {
        type: 'CUSTOMER',
        status: 'PENDING',
        email: email,
        password: password,
        phone: phone,
        username: username,
        firstName: firstname,
        lastName: lastname,
        recievePromotions: promotions,
        payments: [],
        address: {
            street: street,
            city: city,
            state: state,
            zip: zip,
            country: country,
        },
    };

    const response = await fetch('http://georgster.com:8081/api/user/' + username, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    });
    let output = await response.json();
    return output;
}

/* given a JWT token, returns 'true' if the token is still valid, 'false' if it is not.
   Should be called each time site is loaded/refreshed, to determine if a user should stay logged in */
export async function verifySession(token) {
    const response = await fetch('http://georgster.com:8081/api/verifySession?' + new URLSearchParams({
        token: token,
    }), {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    let output = await response.json();
    return output;
}

/* given a user's email and password, returns a JWT token that will be valid for a set period of time*/
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

/* Given a user's registration information, creates a new user and returns their data if it saved successfully in the DB, or an error is there was an issue */
export async function register(email, password, username, phone, firstname, lastname, promotions, street, city, state, zip, country) {
    const body = {
        type: 'CUSTOMER',
        status: 'PENDING',
        email: email,
        password: password,
        phone: phone,
        username: username,
        firstName: firstname,
        lastName: lastname,
        recievePromotions: promotions,
        payments: [],
        address: {
            street: street,
            city: city,
            state: state,
            zip: zip,
            country: country,
        },
    };

    const response = await fetch('http://georgster.com:8081/api/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    });
    let output = await response.json();
    return output;
}

/* Given a user's id, update their password. */
export async function updatePasswordById(userId, password) {
    const body = {
        userId: userId,
        password: password,
    };

    const response = await fetch('http://georgster.com:8081/api/user/' + userId + '/credentials', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    });
    let output = await response.json();
    return output;
}

/* Given a user's id, add a new card. Returns "success" on success, "error" on error */
export async function addCardById(userId, cardNumber, cardName, cardExpDate, cardCvv, street, city, state, zip, country) {
    const body = {
        userId: userId,
        address: {
            street: street,
            city: city,
            state: state,
            zip: zip,
            country: country,
        },
        cardNumber: cardNumber,
        cardName: cardName,
        cardExpDate: cardExpDate,
        cardCvv: cardCvv,
    };

    const response = await fetch('http://georgster.com:8081/api/user/' + userId + '/payment/add',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    });
    let output = await response.json();
    return output;
}

/* Given a user's id, remove a card. Returns "success" on success, "error" on error */
export async function removeCardById(userId, cardId) {
    const response = await fetch('http://georgster.com:8081/api/user/' + userId + '/payment/' + cardId + '/remove', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    });
    let output = await response.json();
    return output;
}