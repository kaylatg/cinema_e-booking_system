export async function createShow(title, trailer, description, rating, poster, actors, director, showStart, showEnd, showroomid, showroomname) {
    const body = {
        movie: {
            title: title,
            trailer: trailer,
            description: description,
            rating: rating,
            poster: poster,
            actors: actors,
            director: director
        },
        showStart: showStart,
        showEnd: showEnd,
        showroom: {
            id: showroomid,
            name: showroomname,
            theatreId: 1
        }
    }

    const response = await fetch('http://localhost:8081/api/show', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    });
    let output = await response.json();
    return output;
}

export async function getShow(showId) {
    const response = await fetch('http://localhost:8081/api/show/' + showId, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    let output = await response.json();
    return output;
}

export async function getUpcomingShowsForMovie(movieId, date) {
    const response = await fetch('http://localhost:8081/api/movie/' + movieId + '/shows/upcoming/' + date, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    let output = await response.json();
    return output;
}