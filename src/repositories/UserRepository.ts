import { inject } from "vue";
import { AxiosStatic } from 'axios';


export class UserRepository {
    axios = inject('axios') as AxiosStatic;
    BaseUrl = 'http://localhost:27017';


    public async login(user: string, password: string) {
        try {
            const data = {
                username: user,
                password: password
            };
            const url = `${this.BaseUrl}/explorers/actions/login`;

            const response = await this.axios.post(url, data);
            if (response.status === 200) {
                return response.data
            }
        } catch (err) {
            console.error('Erreur de connexion', err);
        }


    }
    public async CreateAccount(email: string, user: string, password: string) {

        try {
            const data = {
                email: email,
                username: user,
                password: password
            };
            const url = `${this.BaseUrl}/`;

            const response = await this.axios.post(URL + '/explorers', data);
            if (response.status === 201) {
                return response.data
            }
        } catch (err) {
            console.error('Erreur de connexion', err);
        }




    }

    public async disconnect() {
        try {
            const url = `${this.BaseUrl}/`;

            const response = await this.axios.post(URL + '/deconnexion');
            if (response.status === 200) {
                return response.data
            }
        } catch (err) {
            console.error('Erreur de connexion', err);
        }
    }
}