import dotenv from 'dotenv';
dotenv.config();


type Coordinates = {
    lat: number;
    lon: number;
};

class Weather {
    temperature: number;
    description: string;
    city: string;
    
    constructor(temperature: number, description: string, city: string) {
        this.temperature = temperature;
        this.description = description;
        this.city = city;
    }
}

class WeatherService {
    private static baseURL = 'https://api.openweathermap.org/data/2.5/forecast';
    private static apiKey = 'ac0bfd9b0bda39c01d14694834238910';
    
    static async fetchLocationData(city: string): Promise<Coordinates> {
        try {
            const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${this.apiKey}`);
            const data = await response.json();
            if (data.length === 0) {
                throw new Error('City not found');
            }
            return { lat: data[0].lat, lon: data[0].lon };
        } catch (error) {
            throw new Error('Failed to fetch location data');
        }
    }
    
    static async getWeather(city: string): Promise<Weather> {
        try {
            const { lat, lon } = await this.fetchLocationData(city);
            const response = await fetch(`${this.baseURL}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`);
            const data = await response.json();
            const weatherData = data.list[0];
            return new Weather(weatherData.main.temp, weatherData.weather[0].description, city);
        } catch (error) {
            throw new Error('Failed to fetch weather data');
        }
    }
}

export default WeatherService;
