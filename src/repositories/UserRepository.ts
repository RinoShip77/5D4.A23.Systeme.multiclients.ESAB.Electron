import { inject } from "vue";
import { AxiosStatic } from 'axios';

export class UserRepository {
    axios = inject('axios') as AxiosStatic;

    public async login(user: string, password: string) {

        const data = {
            username: user,
            password: password,
        };

        return this.axios.post('http://localhost:3001/connexion', data);
    }
    /*public async CreateAccount() {

        const data = {
            username: user,
            password: password,
            email: email,

        };

        try {
            const res = await this.axios.post('http://localhost:3001/explorers', data);

            if (res.status === 201) {
                return res;
            }
        } catch (err) {
            throw err;
        }
    }*/
}