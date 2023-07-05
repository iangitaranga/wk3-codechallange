# Movie Theater App

This is a simple Movie Theater app that allows users to view movie details, check available tickets, and buy tickets for movies. The app retrieves movie data from a server using API endpoints and updates the frontend dynamically.

## Features

- Display movie details including title, poster, runtime, showtime, and available tickets.
- View a menu of all movies and click on a movie to display its details.
- Buy a ticket for a movie, which updates the number of available tickets.

## Technologies Used

- HTML: Structure of the web page.
- CSS: Styling for the web page.
- JavaScript: Logic and interactivity of the app.
- Fetch API: Making GET requests to retrieve movie data from the server.

## Getting Started

To run the Movie Theater app locally, follow these steps:

1. Clone the repository:

git clone https://github.com/ianitaranga/movie-theater-app.git
  

3. Open the `index.html` file in your web browser.

4. Explore the movie details, select a movie from the menu, and buy tickets.

## Project Structure

- `index.html`: Main HTML file that contains the structure of the web page.
- `styles.css`: CSS file for styling the web page.
- `script.js`: JavaScript file for the app's logic and interactivity.

## API Endpoints

The app makes GET requests to the following API endpoints to retrieve movie data:

- `GET /films/1`: Retrieve details of the first movie.
- `GET /films`: Retrieve a list of all movies.

Note: Replace the API endpoint URLs in the JavaScript code with the appropriate server endpoints in your implementation.

## Additional Note

- It assumes the film data is available through the specified endpoints and only performs frontend actions based on that data.

Feel free to modify the app as needed to fit your requirements.

