/* All API calls needed for Deliverable 7 */

/* Creates a Movie in the database, returns the created Movie */
export async function createMovie(title, trailer, description, rating, poster, actors, director, category, status) {
    const body = {
        title: title,
        trailer: trailer,
        description: description,
        rating: rating,
        poster: poster,
        actors: actors,
        director: director,
        category: category,
        status: status,
    }

    const response = await fetch('http://localhost:8081/api/movie', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    });
    let output = await response.json();
    return output;
}

/* Returns the Movie based on the supplied movie id */
export async function getMovie(movieId) {
    const response = await fetch('http://localhost:8081/api/movie/' + movieId, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    let output = await response.json();
    return output;
}

export async function getMoviesPlaying() {
    const response = await fetch('http://localhost:8081/api/movies/now-playing', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    let output = await response.json();
    return output;
}

export async function getMoviesUpcoming() {
    const response = await fetch('http://localhost:8081/api/movies/upcoming', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    let output = await response.json();
    return output;
}

/* Schedules a show for a movie in a showroom at a specific time 
   Time format: YYYY-MM-DDTHH:MM:SS. Returns the show */
export async function scheduleShow(movieId, showroomId, starttime, endtime) {
    try {
        const response = await fetch('http://localhost:8081/api/show', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                movie: {
                    id: movieId
                },
                showStart: starttime,
                showEnd: endtime,
                showRoom: {
                    id: showroomId
                }
            }),
        });
        let output = await response.json();
        return output;
    } catch (error) {
        const response = await fetch('http://localhost:8081/api/show', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                movie: {
                    id: movieId
                },
                showStart: starttime,
                showEnd: endtime,
                showRoom: {
                    id: showroomId
                }
            }),
        });
        let output = await response.text();
        return output;
    }
}

/* Returns the Show based on the supplied show id */
export async function getShow(showId) {
    const response = await fetch('http://localhost:8081/api/show/' + showId, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    let output = await response.json();
    return output;
}

/* Returns the all shows for the Movie based on the ID and date.
   Time format: YYYY-MM-DDTHH:MM:SS, returns any shows AFTER the supplied time */
export async function getUpcomingShowsForMovie(movieId, date) {
    const response = await fetch('http://localhost:8081/api/movie/' + movieId + '/shows/upcoming/' + date, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    let output = await response.json();
    return output;
}

/* Creates a Promotion in the database, returns the created Promotion */
export async function createPromotion(percent, startDate, endDate, code) {
    const response = await fetch('http://localhost:8081/api/promotion', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            discount: percent,
            start: startDate,
            end: endDate,
            code: code
        }),
    });
    let output = await response.json();
    return output;
}

/* Sets up a threatre in the database, returns the created theatre */
export async function setupTheatre() {
    const response = await fetch('http://localhost:8081/api/theatre', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            address: {
                street: "1234 Theatre Street",
                state: "GA",
                zipcode: "30605",
                country: "USA",
            },
        }),
    });
    let output = await response.json();
    return output;
}

/* Sets up three showrooms in the database, returns the theatre with the showrooms */
export async function setupShowrooms(theatreId) {
    const response = await fetch('http://localhost:8081/api/theatre/' + theatreId + '/show-room', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            theatreId: theatreId,
            name: "Showroom 1",
        }),
    });

    let output1 = await response.json();

    const response2 = await fetch('http://localhost:8081/api/theatre/' + theatreId + '/show-room', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            theatreId: theatreId,
            name: "Showroom 2",
        }),
    });

    let output2 = await response2.json();

    const response3 = await fetch('http://localhost:8081/api/theatre/' + theatreId + '/show-room', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            theatreId: theatreId,
            name: "Showroom 3",
        }),
    });
    let output3 = await response3.json();
    
    return getTheatre(theatreId);
}

/* Returns the theatre based on the supplied theatre id */
export async function getTheatre(id) {
    const response = await fetch('http://localhost:8081/api/theatre/' + id, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    let output = await response.json();
    return output;
}

// ONLY MISSING GET ALL MOVIES