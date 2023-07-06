//  global variable for films array
let films = [];

// Function ya fetch film data from the server
function getFilmData(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log(error));
}

// Function ya display film details
function displayFilmDetails(film) {
  const titleElement = document.getElementById('movie-title');
  const posterElement = document.getElementById('movie-poster');
  const runtimeElement = document.getElementById('movie-runtime');
  const showtimeElement = document.getElementById('movie-showtime');
  const ticketsElement = document.getElementById('movie-tickets');
  const buyButton = document.getElementById('buy-ticket');

  titleElement.textContent = film.title;
  posterElement.src = film.poster;
  runtimeElement.textContent = `Runtime: ${film.runtime} minutes`;
  showtimeElement.textContent = `Showtime: ${film.showtime}`;
  ticketsElement.textContent = `Available Tickets: ${film.capacity - film.tickets_sold}`;

  if (film.tickets_sold >= film.capacity) {
    buyButton.disabled = true;
    buyButton.textContent = 'Sold Out';
  } else {
    buyButton.disabled = false;
    buyButton.textContent = 'Buy Ticket';
  }
}

// Function to populate the films menu
function populateFilmsMenu(filmsData) {
  const filmsMenu = document.getElementById('films');
  films = filmsData; // inapatia  films data to the global variable

  films.forEach(film => {
    const filmItem = document.createElement('li');
    filmItem.className = 'film-item';
    filmItem.textContent = film.title;

    if (film.tickets_sold >= film.capacity) {
      filmItem.classList.add('sold-out');
    }

    filmItem.addEventListener('click', function() {
      displayFilmDetails(film);
    });

    filmsMenu.appendChild(filmItem);
  });
}

// function ya kuhandle buying a ticket
function buyTicket(film) {
  if (film.tickets_sold >= film.capacity) {
    return; //tickets zimeisha
  }

  // Update hio ticket count
  film.tickets_sold += 1;
  const ticketsElement = document.getElementById('movie-tickets');
  ticketsElement.textContent = `Available Tickets: ${film.capacity - film.tickets_sold}`;

  // Update the film details section
  displayFilmDetails(film);
}

// Fetch film data for the first movie and populate details
getFilmData('http://localhost:3000/films/1', function(film) {
  displayFilmDetails(film);
});

// Fetch all films and populate the films menu
getFilmData('http://localhost:3000/films', function(filmsData) {
  populateFilmsMenu(filmsData);
});

// Add event listener to buy ticket button
const buyTicketButton = document.getElementById('buy-ticket');
buyTicketButton.addEventListener('click', function() {
  const selectedFilmTitle = document.getElementById('movie-title').textContent;
  const selectedFilm = films.find(film => film.title === selectedFilmTitle);
  buyTicket(selectedFilm);
});
