import { inject } from "vue";
import { AxiosStatic } from 'axios';

export class LeaderboardRepository {
  axios = inject('axios') as AxiosStatic;

  public async retrieveAll(order: string, href: string | null, token: string | null) {
    try {
      //TODO: Switch the URL to the server
      const res = await this.axios.get(`${import.meta.env.VITE_BASE_URL_MOCKOON}leaderboard`, { headers: { 'Authorization': `Bearer ${token}` }, params: { order: order, href: href } });

      if (res.status === 200) {
        console.log(res.data.params);
        return res.data;
      }
    } catch (err) {
      throw err;
    }
  }
}