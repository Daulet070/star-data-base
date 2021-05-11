export default class SwapiService {

    _apiBase = 'https://swapi.dev/api/';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Culd not fetch ${url}, received ${res.status}`)
        }

        return await res.json();
    }
    
    async getAllPeople() {
        const res = await this.getResource(`people/`);
        return res.results.map(this._transformPerson);
    }
    
    async getPerson(id) {
        const person = await this.getResource(`people/${id}`)
        return this._transformPerson(person);
    }

    async getAllPlanets() {
        const res = await this.getResource(`planets/`);
        return res.results.map(this._transformPlanet);
    }
    
    async getPlanet(id) {
        const planet = await this.getResource(`planets/${id}`);
        return this._transformPlanet(planet);
    }

    async getAllStarships() {
        const res = await this.getResource(`starships/`);
        return res.results.map(this._transformStarship);
    }

    async getStarships(id) {
        const starship = await this.getResource(`starships/${id}`);
        return this._transformStarship(starship);
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];

    }

    _transformPlanet = (planet) => {

        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformPerson = (persone) => {

        return {
            id: this._extractId(persone),
            name: persone.name,
            gender: persone.gender,
            birthYear: persone.birthYear,
            eyeColor: persone.eyeColor
        }
    }

    _transformStarship = (starship) => {

        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufactures: starship.manufactures,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }
}