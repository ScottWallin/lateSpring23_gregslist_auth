import { AppState } from "../AppState.js";
import { House } from "../models/Houses.js";
import { api } from "../services/AxiosService.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class HousesController {
  constructor() {
    console.log('controller works')
  }
}