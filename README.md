# What is this?
An API for this weather application: https://github.com/drtonton/TS-WeatherApp
Handles city-searching and fetching weather data from OpenWeather's API.

# Installation, Running locally, and Tests
`npm install` <- to install.

In the root of the project. create a file called `.env`.
API keys are meant to be private, but OpenWeather's is free and easy to obtain at https://home.openweathermap.org/users/sign_up. Plug this into the `.env` file, formatted like so:
`OPEN_WEATHER_API_KEY=fakeApiKey`

... and you're good to go.

`npm run dev` <- to run the API

`npm test` <- to execute all tests

# Notes/Todos
* would make sense to host the `city.list.json` remotely, rather than storing such a large file in the project itself
* a standardized successes and errors system would be good to implement, and would support richer testing efforts