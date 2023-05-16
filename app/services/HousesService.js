import { AppState } from "../AppState.js";
import { House } from "../models/Houses.js";
import { api } from "./AxiosService.js";

class HousesService {
  async getHousesFromApi() {
    const res = await api.get('api/houses')
    console.log(res.data)
    // AppState.houses = res.data.map(h => new House(h))

  }
}

export const housesService = new HousesService()