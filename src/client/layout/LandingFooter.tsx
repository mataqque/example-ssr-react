/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
//@ts-ignore
import AdiBrand from '../Assets/svg/adiperu.svg?url';
//@ts-ignore
import topTitle from '../Assets/images/fases/piros/headerTitle.svg?url';
//@ts-ignore
import cosapiWhite from '../Assets/svg/logos/cosapi-white.svg?url';
//@ts-ignore
import larWhite from '../Assets/svg/logos/lar-white.svg?url';
//@ts-ignore
import btl from '../Assets/images/inicio/bptl.svg?url';
//@ts-ignore
import telefono from '../Assets/svg/telefono.svg?url';
//@ts-ignore
import correo from '../Assets/svg/correo.svg?url';
//@ts-ignore
import ubicanos from '../Assets/svg/ubicanos.svg?url';

import './footer.scss';

export class LandingFooter extends Component {
	constructor(props: any) {
		super(props);
	}
	render() {
		return (
			<footer className={'section  fp-auto-height footer landing-footer'}>
				{/* @ts-ignore */}
				<div className={`content_estado content_estado-footer ${this.props?.line ? 'none' : ''}`} style={{ backgroundImage: `url(${topTitle})` }}>
					<img className='icon-car' src={require('../Assets/images/fases/iconos/car.png')} alt='icon-car'></img>
					<h2 className='title-content-stado-footer'>
						Contamos con <span className='geomanist-bold'> estacionamientos exclusivos</span> para clientes en la Sala de Ventas.
					</h2>
				</div>
				<div className='w-90 m-auto'>
					<div className='footer-information d-flex'>
						<div className='content-information-comunicate d-flex align-items-center '>
							<div className='content-comunicate'>
								<p className='text-center text-white geomanist-bold d-flex '>
									Comunícate{' '}
									<span translate='no' className='geomanist-regular'>
										con nosotros
									</span>
								</p>
							</div>
							<div className='content-information'>
								<ul className='list-unstyled'>
									<li>
										<a href='tel:017064261'>
											<div className='icon-footer' style={{ WebkitMaskImage: `url(${telefono})` }} />
											<span translate='no'>01 706 4261</span>
										</a>
									</li>
									<li>
										<a href='mailto:comercial@nesta.com.pe' target='_blank' rel='noreferrer'>
											<div className='icon-footer' style={{ WebkitMaskImage: `url(${correo})` }} />
											<span translate='no'>comercial@nesta.com.pe</span>
										</a>
									</li>
									<li>
										<a
											href='https://www.google.com/maps/place/Proyecto+Nesta/@-12.0694941,-77.0419252,17z/data=!3m1!4b1!4m5!3m4!1s0x9105c8eebaf92501:0xadcc43e818c55b53!8m2!3d-12.0694994!4d-77.0397365?hl=es-419'
											target='_blank'
											rel='noreferrer'
										>
											<div className='icon-footer' style={{ WebkitMaskImage: `url(${ubicanos})` }} />
											<span translate='no'>Av. Salaverry 475, Jesús Maria</span>
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div className='content-logos'>
							<a href='https://www.cosapiinmobiliaria.com.pe/' target='_blank' rel='noreferrer'>
								<div className='logo-cosapi' style={{ backgroundImage: `url(${cosapiWhite})` }} />
							</a>
							<a href='http://www.grupolar.pe/' target='_blank' rel='noreferrer'>
								<div className='logo-lar' style={{ backgroundImage: `url(${larWhite})` }} />
							</a>
						</div>
					</div>
				</div>

				<div className='grupo-lar'>
					<div className='external-links'>
						<div className='x-container'>
							<ul className='links'>
								<li>
									<a href='https://grupolar.pe/textos-legales/' target='_blank' rel='noreferrer'>
										Textos legales
									</a>
								</li>
								<li>
									<a href={require('../Assets/pdf/Terminos-y-Condiciones-Nesta.pdf')} title='Términos y condiciones' target='_blank' rel='noreferrer'>
										Términos y condiciones
									</a>
								</li>
								<li>
									<a href='https://transparencia.grupolar.pe/proteccion-al-consumidor' title='Código de protección al consumidor ' target='_blank' rel='noreferrer'>
										Protección al consumidor
									</a>
								</li>
								<li>
									<a href={require('../Assets/pdf/Políticas-de-Privacidad-de-datos-Nesta.pdf')} title='Políticas de privacidad de datos' target='_blank' rel='noreferrer'>
										Políticas de privacidad de datos
									</a>
								</li>
							</ul>
							<ul className='links-image'>
								<li>
									<a className='enlace-reclamo' href='https://libro.grupolar.pe/reclamaciones-nesta' title='' target='_blank' rel='noreferrer'>
										<img src='https://grupolar.pe/wp-content/uploads/2021/11/libro-reclamaciones.png' alt='icon libro de reclamaciones' />
									</a>
								</li>
								<li>
									<a href='https://www.bestplacetolive.com.pe/' target='_blank' className='d-flex justify-content-center align-items-center content-bptl' rel='noreferrer'>
										<span className='title-logo'>Certificada por</span>
										<div className='logo bptl'>
											<img className='' src={btl} alt='icon best place to live'></img>
										</div>
									</a>
								</li>
								<li>
									<a className='adi' href='http://adiperu.pe/' title='' target='_blank' rel='noreferrer'>
										<img src={AdiBrand} alt='icon adi brand' />
									</a>
								</li>
								<li>
									<a className='adi' href='https://dci.pe/' title='' target='_blank' rel='noreferrer'>
										<img src='https://f.hubspotusercontent40.net/hubfs/6972147/ESCRITORIO/dci.svg' alt='icon DCI' />
									</a>
								</li>
								<li>
									<a className='dci' href='https://www.asei.com.pe/' title='' target='_blank' rel='noreferrer'>
										<img src='https://f.hubspotusercontent40.net/hubfs/6972147/ESCRITORIO/asei.bc8f6d5c-1.svg' alt='icon asei' />
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='verify-projects'>
						<div className='x-container fx-m-x'>
							<p>
								Verificar proyectos en{' '}
								<a href='https://enlinea.indecopi.gob.pe/reclamavirtual/' target='_blank' rel='noreferrer'>
									Indecopi
								</a>
							</p>
						</div>
					</div>
					<div className='copyright'>
						<div className='x-container fx-m-x'>
							<p>
								Copyright © 2021 <a>Grupo Lar</a>. Todos los derechos reservados
							</p>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
