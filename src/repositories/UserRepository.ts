import { inject } from "vue";
import { AxiosStatic } from 'axios';

export class UserRepository {
    axios = inject('axios') as AxiosStatic;

    public async login(username: string, password: string) {

        const data = {
            username,
            password
        }

        return this.axios.post('http://localhost:3001/connexion', data);
    }
    /*public async CreateAccount() {
        try {
            const res = await this.axios.post('http://localhost:3001/explorers');

            if (res.status === 201) {
                return res;
            }
        } catch (err) {
            throw err;
        }
    }*/
}