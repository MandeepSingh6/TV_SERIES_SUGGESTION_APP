import axios from "axios";
import { FAKE_POPULARS, FAKE_RECOMMENDS } from "./fake_data";
import { BASE_URL, API_KEY_PARAM } from "../config";

export class TvShowAPI {
  static async fetchPopulars() {
    const res = await axios.get(`${BASE_URL}trending/tv/day${API_KEY_PARAM}`);
    return res.data.results;
    // return FAKE_POPULARS;
  }

  static async fetchRecommendations(tvShowId) {
    const res = await axios.get(
      `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
    );
    return res.data.results;
    // return FAKE_RECOMMENDS;
  }

  static async fetchByTitle(title) {
    const res = await axios.get(
      `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
    );
    return res.data.results[0];
  }
}
