import axios from 'axios';

export class SperantService {
	constructor() {
		//@ts-ignore
		this.api = axios.create({
			baseURL: 'https://cors.formulaperu.com/https://api.sperant.com/v3/',
			headers: {
				'Cache-Control': 'no-cache',
				Authorization: 'h9G7MwHYHIaqfLSrMLiod7u6Nj9fiHG63hCv57ay',
			},
		});
	}

	createClient(client: any) {
		//@ts-ignore
		return this.api.post('/clients', client);
	}

	projects(id = '') {
		//@ts-ignore
		return this.api.get(`/projects/${id}`);
	}

	users(id = '') {
		//@ts-ignore
		return this.api.get(`/users/${id}`);
	}

	types(parameters: any) {
		//@ts-ignore
		return this.api.get('/types', parameters);
	}

	createBudget(budget: any) {
		//@ts-ignore
		new URLSearchParams(localStorage.getItem('url_query')).forEach((v, k) => {
			/utm_/.test(k) && (budget[`${k.toLowerCase()}`] = v);
		});
		//@ts-ignore
		return this.api.post('/budgets', budget);
	}
}
