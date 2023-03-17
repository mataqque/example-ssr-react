import axios from 'axios';
import { SperantService } from './SperantService';

export class InterestedService {
	constructor() {
		//@ts-ignore
		this._client = {};
		//@ts-ignore
		this._sperant = new SperantService();
	}
	withInterested(interested: any) {
		interested.observation = [
			interested.rooms && `Dormitorios: ${interested.rooms}`,
			interested.district && `Distrito: ${interested.district}`,
			interested.decide_time && `Decide su compra en: ${interested.decide_time}`,
		]
			.filter(Boolean)
			.join(', ');

		//@ts-ignore
		this._client = interested;
		return this;
	}
	send = async () => {
		//@ts-ignore
		this._client.interest_type_id = 4;
		//@ts-ignore
		this._client.source_id = 46; // Web proyecto orgánico
		//@ts-ignore
		this._client.input_channel_id = 4; // Contacto web

		let range = 'Principal';
		if (window.location.pathname.includes('piros')) range = 'Piros';
		if (window.location.pathname.includes('landing-terra')) range = 'Terra F1';
		if (window.location.pathname.includes('fases/terra-fase-1')) range = 'Terra F1';
		if (window.location.pathname.includes('fases/terra-fase-2')) range = 'Terra F2';

		const date = new Date().toLocaleString('es-PE', { timeZone: 'America/Lima' });

		axios.post('https://cors.formulaperu.com/https://script.google.com/macros/s/AKfycbws7GCpc1eEN5ScQ_IisUkLEwKQHvY_XCe5_KEbXA3ytUWVtA/exec', {
			ss_id: '1JidgnRmKPaYiP1QNsJ5XC9wNVBz9s4OV8-4C39wzFt4',
			range: range + '!A:XX',
			values: [
				[
					date,
					//@ts-ignore
					`${this._client.fname} ${this._client.lname}`,
					//@ts-ignore
					this._client.email,
					//@ts-ignore
					this._client.phone,
					//@ts-ignore
					{ 1: 'DNI', 2: 'CE' }[this._client.document_type_id] || '',
					//@ts-ignore
					this._client.document,
					//@ts-ignore
					this._client.rooms,
					//@ts-ignore
					this._client.date_of_birth,
					//@ts-ignore
					this._client.district,
					//@ts-ignore
					this._client.decide_time,
					//@ts-ignore
					this._client.utm_source,
					//@ts-ignore
					this._client.utm_medium,
					//@ts-ignore
					this._client.utm_campaign,
					//@ts-ignore
					this._client.utm_term,
					//@ts-ignore
					this._client.utm_content,
				],
			],
		});
		//@ts-ignore
		this._client.date_of_birth = new Date(this._client.date_of_birth).getTime();

		let {
			data: { data: client },
			//@ts-ignore
		} = await this._sperant.createClient(this._client);
		const {
			data: { data: user },
			//@ts-ignore
		} = await this._sperant.users(client.attributes.last_agent_assigned);

		user.attributes.phone = user.attributes.phone.replace(/\s/g, '').replace(/\+-/g, '').replace(/\(/g, '').replace(/\)/g, '').replace(/\+51/g, '').split('/')[0];

		client.last_agent_assigned = user.attributes;
		return client;
	};
}
