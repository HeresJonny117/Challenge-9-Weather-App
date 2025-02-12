Weather Dashboard

Description

External APIs allow developers to access data and functionality by making requests with specific parameters to a URL. This project involves retrieving data from the OpenWeather API and rendering it in a weather dashboard application.

Project Overview

The goal of this project is to build the back end for a weather dashboard application, connect it to the front end, and deploy the complete application to Render.

Technologies Used

Node.js

Express.js

TypeScript

OpenWeather API

Render (Deployment)

API Usage

This application uses the OpenWeather API's 5-day weather forecast. The base URL is structured as follows:

https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

Ensure your API key is activated (may take up to 2 hours after registration).

User Story

AS A traveler,
I WANT to see the weather outlook for multiple cities,
SO THAT I can plan a trip accordingly.

Acceptance Criteria

WHEN I search for a city

THEN I am presented with current and future conditions for that city, and that city is added to the search history.

WHEN I view current weather conditions for that city

THEN I see the city name, the date, an icon representation of weather conditions, a description of the weather, temperature, humidity, and wind speed.

WHEN I view future weather conditions for that city

THEN I see a 5-day forecast displaying the date, an icon, temperature, wind speed, and humidity.

WHEN I click on a city in the search history

THEN I am again presented with current and future conditions for that city.

Installation & Setup

Clone the repository:

git clone <repository-url>
cd <repository-folder>

Install dependencies:

npm install

Create a .env file and add your OpenWeather API key:

WEATHER_API_KEY=your_api_key_here

Start the server:

npm start

Open the browser and navigate to the deployed Render link or http://localhost:3001

Deployment

This project is deployed on Render. Ensure your .env file is properly configured with your API key before deployment.

License

This project is licensed under the MIT License.
