import axios from 'axios';

export class MailClient {
	constructor() {
		//@ts-ignore
		this.payload = new FormData();
		//@ts-ignore
		this.mailgun = axios.create({
			baseURL: 'https://api.mailgun.net/v3/mg.formulaperu.com',
			auth: {
				username: 'api',
				password: 'key-2f8526fda8b88fce4bc2fd3f1858cca7',
			},
		});
	}

	from(from: any) {
		//@ts-ignore
		this.payload.append('from', from);
		return this;
	}

	to(to: any) {
		//@ts-ignore
		this.payload.append('to', to);
		return this;
	}

	subject(subject: any) {
		//@ts-ignore
		this.payload.append('subject', subject);
		return this;
	}

	html(html: any) {
		//@ts-ignore
		this.payload.append('html', html);
		return this;
	}

	attachment(attachment: any) {
		//@ts-ignore
		this.payload.append('attachment', attachment);
		return this;
	}

	send() {
		//@ts-ignore
		return this.mailgun.post('messages', this.payload);
	}
}
