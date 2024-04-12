document.getElementById('getJoke').addEventListener('click', getJoke);

function getJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => displayJoke(data.joke))
    .catch(error => console.error('Error fetching joke:', error));
}

function displayJoke(joke) {
    const jokeElement = document.getElementById('jokeDisplay');
    jokeElement.textContent = joke;
}
