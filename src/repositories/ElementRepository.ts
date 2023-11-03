import { inject } from "vue";
import { AxiosStatic } from 'axios';

export class ElementRepository {
  axios = inject('axios') as AxiosStatic;

  public async retrieveAll() {
    try {
      const res = await this.axios.get('http://localhost:3001/elements');

      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      throw err;
    }
  }
}