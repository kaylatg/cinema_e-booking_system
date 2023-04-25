/* Returns the Order after creation */
export async function createOrder(userId, showId, paymentId, tickets, promotionId) {
    const response = await fetch('http://localhost:8081/api/order', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            userId: userId,
            promotionId: promotionId,
            show: {
                id: showId
            },
            payment: {
                id: paymentId
            },
            tickets: tickets,
        }),

    });
    let output = await response.json();
    return output;
}

/* Returns all orders for a user */
export async function getUserOrders(userId) {
    const response = await fetch('http://localhost:8081/api/orders/user/' + userId, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    let output = await response.json();
    return output;
}

