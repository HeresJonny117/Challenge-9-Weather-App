import dotenv from 'dotenv';
dotenv.config();
import fs from 'fs';
import path from 'path';

// Define a City class with name and id properties
class City {
  id: number;
  name: string;

  constructor(name: string) {
    this.id = Date.now();
    this.name = name;
  }
}

// Complete the HistoryService class
class HistoryService {
  private historyFile = path.join(__dirname, '../../db/searchHistory.json');

  // Read from the searchHistory.json file
  private async read(): Promise<City[]> {
    if (!fs.existsSync(this.historyFile)) return [];
    const data = fs.readFileSync(this.historyFile, 'utf-8');
    return JSON.parse(data);
  }

  // Write the updated cities array to the searchHistory.json file
  private async write(cities: City[]): Promise<void> {
    fs.writeFileSync(this.historyFile, JSON.stringify(cities, null, 2));
  }

  // Get cities from the search history
  async getCities(): Promise<City[]> {
    return await this.read();
  }

  // Add a city to the search history
  async addCity(cityName: string): Promise<City> {
    const cities = await this.read();
    const newCity = new City(cityName);
    cities.push(newCity);
    await this.write(cities);
    return newCity;
  }

  // Remove a city from the search history
  async removeCity(id: number): Promise<boolean> {
    let cities = await this.read();
    const initialLength = cities.length;
    cities = cities.filter(city => city.id !== id);
    if (cities.length < initialLength) {
      await this.write(cities);
      return true;
    }
    return false;
  }
}

export default new HistoryService();