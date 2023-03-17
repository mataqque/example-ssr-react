import axios from 'axios';

export class SperantService {
	constructor() {
		//@ts-ignore
		this.api = axios.create({
			baseURL: 'https://cors.formulaperu.com/https://api.sperant.com/v3/',
			headers: {
				'Cache-Control': 'no-cache',
				Authorization: 'mQlbKvZAlc5MpKwKs3AHr3r9v2MbhvbA1E4pX2Mw',
			},
		});
	}

	createClient(client: any) {
		const url_query = localStorage.getItem('url_query');
		//@ts-ignore
		if (/google|adwords|googleads|gclid|cpc/i.test(url_query)) client.source_id = 59; // Google Ads
		//@ts-ignore
		if (/facebook|fbclid|pixel/i.test(url_query)) client.source_id = 51; // facebook
		//@ts-ignore
		if (/icommarketing|mailchimp|mail/i.test(url_query)) client.source_id = 27; // mailing
		//@ts-ignore
		new URLSearchParams(url_query).forEach((v, k) => {
			/utm_/.test(k) && (client[`${k.toLowerCase()}`] = v);
		});
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
