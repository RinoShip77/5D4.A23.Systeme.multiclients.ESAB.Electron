import { inject } from "vue";
import { AxiosStatic } from 'axios';


export class UserRepository {
    axios = inject('axios') as AxiosStatic;


    public async login(user: string, password: string) {
        try {
            const data = {
                username: user,
                password: password
            };
            const url = `${import.meta.env.VITE_BASE_URL}explorers/actions/login`;

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

            const response = await this.axios.post(`${import.meta.env.VITE_BASE_URL}explorers`, data);
            if (response.status === 201) {
                return response.data
            }
        } catch (err) {
            console.error('Erreur lors de la création du compte', err);
        }




    }

    public async disconnect() {
        try {

            const response = await this.axios.post(`${import.meta.env.VITE_BASE_URL}deconnexion`);
            if (response.status === 200) {
                return response.data
            }
        } catch (err) {
            console.error('Erreur lors de la déconnexion', err);
        }
    }
}