import { inject } from "vue";
import { AxiosStatic } from 'axios';

export class AllyRepository {
  axios = inject('axios') as AxiosStatic;

  public async retrieveAll(idExplorer: string | null) {
    try {
      const res = await this.axios.get(`http://localhost:27017/${idExplorer}/allies`);

      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      throw err;
    }
  }
}