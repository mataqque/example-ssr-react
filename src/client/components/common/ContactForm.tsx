/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
// import { Input, Checkbox, Selectbox } from './Others/';
import SimpleReactValidator from 'simple-react-validator';
import { InterestedService } from '../services/InterestedService';
import { Checkbox, Input, Selectbox } from '../Others';
//@ts-ignore
import nestaCAr from '../../Assets/images/contacto/nesta-car.svg?url';
const Modelos = (props: any) => {
	return (
		<div className='col-md-12'>
			<div className='col-md-12 mt-3 d-flex justify-content-center'>¿En qué modelo estás interesado?</div>

			<div className='col-md-12 d-flex justify-content-center content-dorms-checbox mt-3'>
				<div className='form-check form-check-inline'>
					<Checkbox
						id='dormsSelected1'
						name='dormsSelected1'
						className='--rooms-1'
						estado={props.dormsSelected1}
						setValueTxt={props.setStateFromCbo}
						validator={props.validator}
						startValid={props.startValid}
						styleValid={props.styleValid}
						text={['1 Dorm']}
						value='1'
						activateValid={props.activateValid}
					/>
				</div>
				<div className='form-check form-check-inline ml-2'>
					<Checkbox
						id='dormsSelected2'
						name='dormsSelected2'
						className='--rooms-2'
						estado={props.dormsSelected2}
						setValueTxt={props.setStateFromCbo}
						validator={props.validator}
						startValid={props.startValid}
						styleValid={props.styleValid}
						text={['2 Dorms']}
						value='2'
						activateValid={props.activateValid}
					/>
				</div>
				<div className='form-check form-check-inline ml-2'>
					<Checkbox
						id='dormsSelected3'
						name='dormsSelected3'
						className='--rooms-3'
						estado={props.dormsSelected3}
						setValueTxt={props.setStateFromCbo}
						validator={props.validator}
						startValid={props.startValid}
						styleValid={props.styleValid}
						text={['3 Dorms']}
						value='3'
						activateValid={props.activateValid}
					/>
				</div>
			</div>
		</div>
	);
};

const NestaCar = (props: any) => {
	return (
		<div className='col-md-12 mt-2 d-flex justify-content-center align-items-center'>
			<div className='nestaCar' style={{ backgroundImage: `url(${nestaCAr})` }} />
			<span translate='no' className='ml-2'>
				Contamos con estacionamientos exclusivos para clientes en la Sala de Ventas
			</span>
		</div>
	);
};

export class ContactForm extends Component<any, any> {
	private _interestedService: any;
	validator: any;
	constructor(props: any) {
		super(props);
		this._interestedService = new InterestedService();
		this.validator = new SimpleReactValidator();
		this.state = {
			activateValid: '',
			startValid: '',
			txtname: '',
			txtlastname: '',
			txttelephone: '',
			txtemail: '',
			selectdoc: '1',
			txtdocnumber: '',
			dormsSelected1: false,
			dormsSelected2: false,
			dormsSelected3: false,
			termsConditions: false,
			birth_date: '',
			styleValid: 'accepted',
			disabledButton: false,
			decide_time: null,
			district: null,
		};
	}
	clearInputs = () => {
		this.setState({
			activateValid: '',
			startValid: '',
			txtname: '',
			txtlastname: '',
			txttelephone: '',
			txtemail: '',
			selectdoc: '2',
			txtdocnumber: '',
			dormsSelected1: false,
			dormsSelected2: false,
			dormsSelected3: false,
			birth_date: '',
			termsConditions: false,
			styleValid: 'accepted',
			disabledButton: false,
			decide_time: null,
			district: null,
		});
	};
	submitForm = () => {
		this.setState({ startValid: '', activateValid: 'active' });
		this.validator.allValid() ? this.handleCreate() : this.setState({ startValid: 'activate' });
	};
	setStateFromInput = (event: any) => {
		var obj = {};
		// @ts-ignore
		obj[event.target.name] = event.target.value;
		this.setState(obj);
	};
	setStateFromCbo = (obj: any) => {
		this.setState(obj);
		setTimeout(() => this.checkValCheckbox(), 100);
	};
	checkValCheckbox = () => {
		// @ts-ignore
		this.state.dormsSelected1 || this.state.dormsSelected2 || this.state.dormsSelected3 ? this.setState({ styleValid: '' }) : this.setState({ styleValid: 'accepted' });
	};
	handleCreate() {
		this.setState({ disabledButton: true });
		// @ts-ignore
		document.querySelector('form button').innerText = 'Enviando...';
		this._interestedService
			.withInterested({
				// @ts-ignore
				fname: this.state.txtname,
				// @ts-ignore
				lname: this.state.txtlastname,
				// @ts-ignore
				email: this.state.txtemail,
				// @ts-ignore
				phone: this.state.txttelephone,
				// @ts-ignore
				document_type_id: this.state.selectdoc,
				// @ts-ignore
				document: this.state.txtdocnumber,
				// @ts-ignore
				district: this.state.district,
				// @ts-ignore
				decide_time: this.state.decide_time,
				// @ts-ignore
				date_of_birth: this.state.birth_date,
				project_id: 8,
				// @ts-ignore
				rooms: [this.state.dormsSelected1 && '1 dorm', this.state.dormsSelected2 && '2 dorms', this.state.dormsSelected3 && '3 dorms'].filter(Boolean).join(', '),
			})
			.send()
			.then(
				(client: any) => {
					let query = '';
					// @ts-ignore
					document.querySelector('form button').innerText = 'Enviado';
					// @ts-ignore
					window.gtag('event', 'conversion', {
						send_to: 'AW-811712721/WnK-CO_EsX8Q0YGHgwM',
					});
					setTimeout(() => {
						if (client.last_agent_assigned.phone) {
							query = '?seller_phone=' + client.last_agent_assigned.phone.replace(/\s/g, '');
							return;
						}
						window.location.href = `/gracias${query}`;
					}, 1000);
				},
				(err: any) => {
					// @ts-ignore
					document.querySelector('form button').innerText = 'Error';
					console.error(err.response);
					this.setState({ disabledButton: false });
				}
			);
	}

	render() {
		return (
			// @ts-ignore
			<form id={'contacto'} className={'contact-form c-second  geomanist-regular' + this.state.activateValid}>
				<div className='form-row'>
					<div className='col-md-12 col-lg-4'>
						<Input
							type='text'
							name='txtname'
							// @ts-ignore
							estado={this.state.txtname}
							setValueTxt={this.setStateFromInput}
							validator={this.validator}
							// @ts-ignore
							startValid={this.state.startValid}
							styleValid={'required'}
							placeholder='Nombres *'
							// @ts-ignore
							activateValid={this.state.activateValid}
						/>
					</div>
					<div className='col-md-12 col-lg-4'>
						<Input
							type='text'
							name='txtlastname'
							// @ts-ignore
							estado={this.state.txtlastname}
							setValueTxt={this.setStateFromInput}
							validator={this.validator}
							// @ts-ignore
							startValid={this.state.startValid}
							styleValid={'required'}
							placeholder='Apellidos *'
							// @ts-ignore
							activateValid={this.state.activateValid}
						/>
					</div>
					<div className='col-md-12 col-lg-4'>
						<Input
							type='email'
							name='txtemail'
							// @ts-ignore
							estado={this.state.txtemail}
							setValueTxt={this.setStateFromInput}
							validator={this.validator}
							// @ts-ignore
							startValid={this.state.startValid}
							styleValid={'required|email'}
							placeholder='Email *'
							// @ts-ignore
							activateValid={this.state.activateValid}
						/>
					</div>
					<div className='col-md-12 col-lg-4'>
						<Input
							type='tel'
							name='txttelephone'
							// @ts-ignore
							estado={this.state.txttelephone}
							setValueTxt={this.setStateFromInput}
							validator={this.validator}
							// @ts-ignore
							startValid={this.state.startValid}
							styleValid={'required|numeric|min:7|max:9'}
							placeholder='Celular *'
							// @ts-ignore
							activateValid={this.state.activateValid}
						/>
					</div>
					<div className='col-md-12 col-lg-4'>
						<div className='form-group group-doc'>
							<div className='input-group'>
								<div className='input-group-prepend'>
									<Selectbox
										options={[
											{ value: '1', name: 'DNI' },
											{ value: '2', name: 'CE' },
										]}
										name='selectdoc'
										// @ts-ignore
										estado={this.state.selectdoc}
										setValueCbo={this.setStateFromInput}
										validator={this.validator}
										// @ts-ignore
										startValid={this.state.startValid}
										styleValid={'required'}
										formGroup={false}
										// @ts-ignore
										activateValid={this.state.activateValid}
									/>
								</div>
								{/* <select>
                                        <option>DNI</option>
                                        <option>Carnet de extranjería</option>
                                    </select> */}
								<Input
									type='tel'
									name='txtdocnumber'
									// @ts-ignore
									estado={this.state.txtdocnumber}
									setValueTxt={this.setStateFromInput}
									validator={this.validator}
									// @ts-ignore
									startValid={this.state.startValid}
									styleValid={'required|numeric|min:7|max:9'}
									formGroup={false}
									placeholder='Número*'
									// @ts-ignore
									activateValid={this.state.activateValid}
								/>
							</div>
						</div>
					</div>
					<div className='col-md-12 col-lg-4'>
						<Input
							type='text'
							name='district'
							// @ts-ignore
							estado={this.state.district}
							setValueTxt={this.setStateFromInput}
							validator={this.validator}
							// @ts-ignore
							startValid={this.state.startValid}
							styleValid={'required'}
							placeholder='Distrito donde reside *'
							// @ts-ignore
							activateValid={this.state.activateValid}
						/>
					</div>
					<div className='col-md-12 col-lg-4'>
						<Input
							type='date'
							max='2007-01-01'
							name='birth_date'
							// @ts-ignore
							estado={this.state.birth_date}
							setValueTxt={this.setStateFromInput}
							validator={this.validator}
							// @ts-ignore
							startValid={this.state.startValid}
							styleValid={'required'}
							placeholder='Fecha de nacimiento *'
							// @ts-ignore
							activateValid={this.state.activateValid}
						/>
					</div>
					<div className='col-md-12 col-lg-4'>
						<Selectbox
							options={[
								{ value: '', name: '¿En qué modelo estás interesado?*' },
								{ value: '1 Dormitorio', name: '1 Dormitorio' },
								{ value: '2 Dormitorios', name: '2 Dormitorios' },
								{ value: '3 Dormitorios', name: '3 Dormitorios' },
							]}
							name='decide_time'
							// @ts-ignore
							estado={this.state.decide_time}
							setValueCbo={this.setStateFromInput}
							validator={this.validator}
							// @ts-ignore
							startValid={this.state.startValid}
							styleValid={'required'}
							placeholder='¿En qué modelo estás interesado?*'
							// @ts-ignore
							activateValid={this.state.activateValid}
						/>
					</div>
					<div className='col-md-12 col-lg-4'>
						<Selectbox
							options={[
								{ value: '', name: '¿En cuánto tiempo decide su compra? *' },
								{ value: 'Menor a 3 meses', name: 'Menor a 3 meses' },
								{ value: 'Entre 3 y 6 meses', name: 'Entre 3 y 6 meses' },
								{ value: 'Mayor a 6 meses', name: 'Mayor a 6 meses' },
							]}
							name='decide_time'
							// @ts-ignore
							estado={this.state.decide_time}
							setValueCbo={this.setStateFromInput}
							validator={this.validator}
							// @ts-ignore
							startValid={this.state.startValid}
							styleValid={'required'}
							placeholder='¿En cuánto tiempo decide su compra? *'
							// @ts-ignore
							activateValid={this.state.activateValid}
						/>
					</div>
					{/* {this.props.modelos ? <Modelos validator={this.validator} startValid={this.state.startValid} styleValid={this.state.styleValid} setStateFromCbo={this.setStateFromCbo}activateValid={this.state.activateValid}dormsSelected1={this.state.dormsSelected1}dormsSelected2={this.state.dormsSelected2}dormsSelected3={this.state.dormsSelected3} /> : null} */}
					<div className='col-md-12 mt-2 d-flex justify-content-center'>
						<Checkbox
							id='terminos_condiciones'
							name='termsConditions'
							// @ts-ignore
							estado={this.state.termsConditions}
							setValueTxt={this.setStateFromCbo}
							validator={this.validator}
							// @ts-ignore
							startValid={this.state.startValid}
							styleValid={'accepted'}
							text={[
								'He leído y acepto la ',
								<a
									href={require('../../Assets/pdf/Políticas-de-Privacidad-de-datos-Nesta.pdf')}
									className='text-decoration-none geomanist-bold c-second'
									target='_blank'
									rel='noreferrer'
								>
									&nbsp;política de datos personales
								</a>,
							]}
							value='1'
							// @ts-ignore
							activateValid={this.state.activateValid}
						/>
					</div>
					{/* @ts-ignore */}
					{this.props.nestaCar ? <NestaCar /> : null}
					<div className='col-md-12 mt-3 d-flex justify-content-center'>
						{/* @ts-ignore */}
						<button className='btn-nesta btn-green btn-wsp outline' type='button' disabled={this.state.disabledButton} onClick={e => this.submitForm(e)}>
							Enviar
						</button>
						{/*                         <div className="btn-whatsapp" disabled={this.state.disabledButton} onClick={(e) => this.submitForm(e)} style={{backgroundImage:`url(${require("Assets/images/button.png")})`}} /> */}
					</div>
				</div>
			</form>
		);
	}
}
