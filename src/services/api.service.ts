import axios from 'axios';
import { IApiServiceSearchParams } from './api.interface';

export class ApiService {
    constructor(
        private token: string | undefined,
        private endpoint: string | undefined = "https://api.dotsearch.ir",
    ) { 
        if (!token) {
            throw new Error("token is required");
        }

        if (!endpoint) {
            this.endpoint = "https://api.dotsearch.ir";
        }
    }

    public async Search(params: IApiServiceSearchParams) {
        try {
            // post request to endpoint+/api/v1/data/search with params and token as Authorization header
            const result = await axios.post(`${this.endpoint}/api/v1/data/search`, params, {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                },
            });
            
            // return result
            return result.data;
        } catch (error) {
            return Promise.reject(error);
        }
    }
}