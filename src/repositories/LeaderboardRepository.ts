import { inject } from "vue";
import { AxiosStatic } from 'axios';

export class LeaderboardRepository {
  axios = inject('axios') as AxiosStatic;

  public async retrieveAll() {
    try {
      const res = await this.axios.get(`${import.meta.env.VITE_BASE_URL}leaderboards`);

      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      throw err;
    }
  }
}