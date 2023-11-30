import { inject } from "vue";
import { AxiosStatic } from 'axios';

export class ExplorerRepository {
    axios = inject('axios') as AxiosStatic;

    public async login(Email: string, password: string) {
        try {
            const data = {
                email: Email,
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
    public async CreateAccount(email: string, Explorer: string, password: string, name: string, surname: string) {

        try {
            const data = {
                username: Explorer,
                email: email,
                name: name,
                surname: surname,
                password: password,
                inventory: {
                    inox: 0,
                    elements: []
                }

            };
            const response = await this.axios.post(`${import.meta.env.VITE_BASE_URL}explorers`, data);
            if (response.status === 201) {
                return response.data
            }
        } catch (err) {
            console.error('Erreur lors de la création du compte', err);
        }




    }

    public async logout(token: string | null) {
        try {
            const response = await this.axios.post(`${import.meta.env.VITE_BASE_URL}explorers/actions/logout`, { 'Authorization': `Bearer ${token}` });

            if (response.status === 200) {
                return response.data
            }
        } catch (err) {
            console.error('Erreur de deconnexion', err);
        }
    }

    public async retrieveOne(href: string, token: string) {
        try {
            const res = await this.axios.get(`${href}`, { headers: { 'Authorization': `Bearer ${token}` } });

            if (res.status === 200) {
                return res.data;
            }
        } catch (err) {
            throw err;
        }
    }
}