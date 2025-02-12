import { Router } from 'express';
import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

const router = Router();

// POST Request with city name to retrieve weather data
router.post('/', async (req, res) => {
    try {
        const { city } = req.body;
        if (!city) {
            return res.status(400).json({ error: 'City name is required' });
        }
        const weather = await WeatherService.getWeather(city);
        HistoryService.addCity({ id: Date.now(), name: city });
        res.json(weather);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET search history
router.get('/history', async (req, res) => {
    try {
        const history = HistoryService.getCities();
        res.json(history);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE city from search history
router.delete('/history/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let cities = HistoryService.getCities();
        cities = cities.filter(city => city.id !== parseInt(id));
        HistoryService.write(cities);
        res.json({ message: 'City removed from history' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
