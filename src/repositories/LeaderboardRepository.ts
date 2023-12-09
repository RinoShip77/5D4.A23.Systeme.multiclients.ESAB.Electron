import { inject } from "vue";
import { AxiosStatic } from 'axios';

export class LeaderboardRepository {
  axios = inject('axios') as AxiosStatic;

  public async retrieveAll(href: string | null, token: string | null, order: string) {
    try {
      //TODO: Switch the URL to the server
      const res = await this.axios.get(`${import.meta.env.VITE_BASE_URL_MOCKOON}leaderboard`, { headers: { 'Authorization': `Bearer ${token}` }, params: { order: order, href: href } });

      if (res.status === 200) {
        return res.data;
      }
      if(res.status === 401) {
        
      }
    } catch (err) {
      throw err;
    }
  }
}