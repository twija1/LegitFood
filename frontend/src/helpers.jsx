export function addOrder(dishes, location, comment) {
    return fetch('http://localhost:8080/orders', {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            dishes,
            location,
            comment
        })
    })
        .then(response => response.json())
        .catch(err => err)
}
