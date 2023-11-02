import { inject } from "vue";
import { AxiosStatic } from 'axios';

export class AllyRepository {
  axios = inject('axios') as AxiosStatic;

  public async retrieveAll() {
    try {
      const res = await this.axios.get('http://localhost:3001/allies');

      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      throw err;
    }
  }

  public async retrieveOne(idAlly: string) {
    try {
      const res = await this.axios.get('https://api.andromia.science/allies/' + idAlly);

      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      throw err;
    }
  }
}