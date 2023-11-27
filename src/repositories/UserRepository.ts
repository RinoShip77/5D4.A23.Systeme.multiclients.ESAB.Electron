import { inject } from "vue";
import { AxiosStatic } from 'axios';

export class UserRepository {
    axios = inject('axios') as AxiosStatic;

    public async login(User: string, password: string) {
        try {
            const data = {
                Username: User,
                password: password
            };

            const response = await this.axios.post(`${import.meta.env.VITE_BASE_URL}explorers/actions/login`, data);
            if (response.status === 200) {
                return response.data
            }
        } catch (err) {
            console.error('Erreur de connexion', err);
        }


    }
    public async CreateAccount(email: string, User: string, password: string) {

        try {
            const data = {
                email: email,
                Username: User,
                password: password
            };
            const response = await this.axios.post(`${import.meta.env.VITE_BASE_URL}explorers`, data);
            if (response.status === 201) {
                return response.data
            }
        } catch (err) {
            console.error('Erreur de connexion', err);
        }




    }

    public async logout(token: string | null) {
        try {
            const response = await this.axios.post(`${import.meta.env.VITE_BASE_URL}explorers/actions/logout`, { 'Authorization': token });

            if (response.status === 200) {
                return response.data
            }
        } catch (err) {
            console.error('Erreur de connexion', err);
        }
    }

    public async retrieveOne(username: string, token: string) {
        try {
            const res = await this.axios.get(`${import.meta.env.VITE_BASE_URL}explorers/${username}`, { headers: { 'Authorization': token } });

            if (res.status === 200) {
                return res.data;
            }
        } catch (err) {
            throw err;
        }
    }
}