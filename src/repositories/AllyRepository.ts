import { inject } from "vue";
import { AxiosStatic } from 'axios';

export class AllyRepository {
  axios = inject('axios') as AxiosStatic;

  public async retrieveAll(idUser: string | null) {
    try {
      const res = await this.axios.get(`${import.meta.env.VITE_BASE_URL}${idUser}/allies`);

      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      throw err;
    }
  }
}