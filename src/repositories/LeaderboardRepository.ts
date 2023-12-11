import { inject } from "vue";
import { AxiosStatic } from 'axios';

export class LeaderboardRepository {
  axios = inject('axios') as AxiosStatic;

  public async retrieveAll(href: string | null, order: string) {
    try {
      //TODO: Switch the URL to the server
      let res = await this.axios.get(`${href}/leaderboards/${order}`);

      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      throw err;
    }
  }
}