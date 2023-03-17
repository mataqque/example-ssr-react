import React, { Component } from 'react';
import { HashLink as Link, NavHashLink as NavLink } from 'react-router-hash-link';
//@ts-ignore
import SVGnestaColor from '../Assets/svg/logos/nestaTerra.svg?url';
//@ts-ignore
import SVGcosapi from '../Assets/svg/cosapi.svg?url';
//@ts-ignore
import SVGlar from '../Assets/svg/lar.svg?url';
//@ts-ignore
import SVGTime from '../Assets/svg/time.svg?url';
//@ts-ignore
import Brochure from '../Assets/pdf/Nesta.pdf';
//@ts-ignore
import telefono from '../Assets/svg/telefono.svg?url';
//@ts-ignore
import correo from '../Assets/svg/correo.svg?url';
//@ts-ignore
import ubicanos from '../Assets/svg/ubicanos.svg?url';
// @ts-ignore
import instagram from '../Assets/svg/instagram.svg?url';
// @ts-ignore
import facebook from '../Assets/svg/facebook.svg?url';
// @ts-ignore
import youtube from '../Assets/svg/youtube.svg?url';
import { BannerPromo } from './BannerPromo';
export class FrontendHeader extends Component {
	constructor(props: any) {
		super(props);
		this.state = {
			informacion: [
				{
					title: 'telefono',
					icon: telefono,
					link: 'tel:017064261',
					text: '01 706 4261',
					class: 'icon-social',
				},
				{
					title: 'email',
					icon: correo,
					link: 'mailto:comercial@nesta.com.pe',
					text: 'comercial@nesta.com.pe',
					class: 'icon-social',
				},
				{
					title: 'direccion',
					icon: ubicanos,
					link: 'https://www.google.com/maps/place/Proyecto+Nesta/@-12.0694941,-77.0419252,17z/data=!3m1!4b1!4m5!3m4!1s0x9105c8eebaf92501:0xadcc43e818c55b53!8m2!3d-12.0694994!4d-77.0397365?hl=es-419',
					text: 'Av.Salaverry 475, Jesús Maria',
					class: 'icon-social',
				},
			],
			social: [
				{
					title: 'instagram',
					icon: instagram,
					class: 'icon-social',
					link: 'https://www.instagram.com/grupolarperu/',
				},
				{
					title: 'facebook',
					icon: facebook,
					class: 'icon-social',
					link: 'https://www.facebook.com/cosapiinmobiliariaoficial/',
				},
				{
					title: 'youtube',
					icon: youtube,
					class: 'icon-social',
					link: 'https://www.youtube.com/channel/UCUkEX_0g-31We2SzJofSUWA',
				},
			],
		};
	}
	fnMenuOpen = () => {
		const $ = window.jQuery;

		if ($('html.blocked').length > 0) {
			$('.bars-mobile .menu-button').removeClass('active');
			$('.contentDrawer').removeClass('active');
			$('html').removeClass('blocked');
		} else {
			$('.bars-mobile .menu-button').addClass('active');
			$('.contentDrawer').addClass('active');
			$('html').addClass('blocked');
		}
	};
	render() {
		return (
			<header className='header' id='header'>
				{/* <BannerPromo to={window.innerWidth > 1100 ? "/#contactanos" : "/#contacto"}/> */}
				<div className='secondaryHeader center'>
					<ul>
						{
							//RETURN SOCIAL INFORMATION
							// @ts-ignore
							this.state.social.map((fill: any, id: any) => (
								<li key={id}>
									<a href={fill.link} target='_blank' rel='noopener noreferrer'>
										<div style={{ backgroundImage: `url(${fill.icon})` }} className={fill.class} />
									</a>
								</li>
							))
						}
						{
							//RETURN INFORMATION COMPANY
							// @ts-ignore
							this.state?.informacion.map((fill, id) => (
								<li key={id}>
									<a href={fill.link} target='_blank' rel='noopener noreferrer'>
										<div style={{ backgroundImage: `url(${fill.icon})` }} className={fill.class} /> &nbsp;{fill.text}
									</a>
								</li>
							))
						}
						<li>
							<a href='#' style={{ pointerEvents: 'none' }}>
								<div style={{ backgroundImage: `url(${SVGTime})` }} className={'icon-social'} /> &nbsp;De lunes a domingo de 10a.m. - 7p.m.
							</a>
						</li>
					</ul>
				</div>
				<div className='primaryHeader'>
					<Link to={'/'} className='contentLogo'>
						<div className='logo' style={{ backgroundImage: `url(${SVGnestaColor})` }} />
					</Link>
					<div className='menu'>
						<ul>
							<li>
								<NavLink to={'/'} className={({ isActive }) => (isActive ? 'active ' : '')}>
									Inicio
								</NavLink>
							</li>
							<li>
								<NavLink to={'/fases/terra-fase-2'} className={({ isActive }) => (isActive ? 'active ' : '')}>
									Fases
								</NavLink>
								<ul className='submenu d-flex flex-column'>
									<li className='d-flex align-items-center'>
										TERRA FASE 2
										<span translate='no' className='badge badge-secondary rounded-pill h-100 ml-2 text-uppercase bgNesta'>
											En preventa
										</span>
										<Link to={'/fases/terra-fase-2'} className='linkAbsolute' />
									</li>
									<li className='d-flex align-items-center'>
										TERRA FASE 1
										<span translate='no' className='badge badge-secondary rounded-pill h-100 ml-2 text-uppercase bgNesta'>
											En construcción
										</span>
										<Link to={'/fases/terra-fase-1'} className='linkAbsolute' />
									</li>
									<li className='d-flex align-items-center'>
										PIROS{' '}
										<span translate='no' className='badge badge-secondary rounded-pill h-100 ml-2 text-uppercase'>
											Entrega Inmediata
										</span>
										<Link to={'/landing-piros'} className='linkAbsolute' />
									</li>
									<li className='d-flex align-items-center'>
										VENTOS{' '}
										<span translate='no' className='badge badge-secondary rounded-pill h-100 ml-2 text-uppercase'>
											100% Vendido
										</span>
									</li>
									<li className='d-flex align-items-center'>
										AQUA{' '}
										<span translate='no' className='badge badge-secondary rounded-pill h-100 ml-2 text-uppercase'>
											100% Vendido
										</span>
									</li>
									<li className='d-flex align-items-center'>
										PLATINUM{' '}
										<span translate='no' className='badge badge-secondary rounded-pill h-100 ml-2 text-uppercase'>
											100% Vendido
										</span>
									</li>
								</ul>
							</li>
							{/* <li>
                                <NavLink exact to={"/promociones"} activeClassName="active">Promociones</NavLink>
                            </li> */}
							{/* <li>
                                <NavLink exact to={"/multimedia"} activeClassName="active">Multimedia</NavLink>
                            </li>
                            <li>
                                <NavLink exact to={"/avance-de-obra"} activeClassName="active">Avance de obra</NavLink>
                            </li>
                            <li>
                                <NavLink exact to={"/nosotros"} activeClassName="active">Quienes somos</NavLink>
                            </li> */}
							<li>
								<NavLink to={'/post-venta'} className={({ isActive }) => (isActive ? 'active ' : '')}>
									Post venta
								</NavLink>
							</li>
							{/* <li>
                                <a href={Brochure} target="_blank">Brochure</a>
                            </li> */}
							{/* <li className="tab-hidden">
                                <a href={PDFReferidos} target="_blank" rel="noopener noreferrer">
                                    <div className="logoReferidos" style={{backgroundImage:`url(${SVGreferidos})`}} />
                                </a>
                            </li> */}
						</ul>
					</div>
					<div className='menu'>
						<ul>
							<li className='tab-hidden'>
								<a href='https://www.cosapiinmobiliaria.com.pe/' target='_blank' rel='noopener noreferrer'>
									<div className='logoCosapi' style={{ backgroundImage: `url(${SVGcosapi})` }} />
								</a>
							</li>
							<li className='tab-hidden' style={{ marginRight: '20%' }}>
								<a href='http://www.grupolar.pe/' target='_blank' rel='noopener noreferrer'>
									<div className='logoLar' style={{ backgroundImage: `url(${SVGlar})` }} />
								</a>
							</li>
						</ul>
					</div>
					<div className='bars-mobile'>
						<div id='btnButtonResponsive' className={'menu-button'} onClick={this.fnMenuOpen} />
					</div>
					<div className={'contentDrawer'}>
						<div className='content-scroll'>
							<ul>
								<li>
									<Link to={'/'} onClick={this.fnMenuOpen}>
										Inicio
									</Link>
								</li>
								<li>
									<Link to={'/fases/terra-fase-2'} onClick={this.fnMenuOpen}>
										Fases
									</Link>
								</li>
								<li>
									<Link to={'/promociones'} onClick={this.fnMenuOpen}>
										Promociones
									</Link>
								</li>
								<li>
									<Link to={'/multimedia'} onClick={this.fnMenuOpen}>
										Multimedia
									</Link>
								</li>
								<li>
									<Link to={'/avance-de-obra'} onClick={this.fnMenuOpen}>
										Avance de obra
									</Link>
								</li>
								<li>
									<Link to={'/nosotros'} onClick={this.fnMenuOpen}>
										Quienes somos
									</Link>
								</li>
								<li>
									<Link to={'/post-venta'} onClick={this.fnMenuOpen}>
										Post venta
									</Link>
								</li>
								<li>
									<a href={Brochure} target='_blank' onClick={this.fnMenuOpen}>
										Brochure
									</a>
								</li>
							</ul>
							<ul className='menuContact'>
								{
									//RETURN INFORMATION COMPANY
									// @ts-ignore
									this.state.informacion.map((fill: any, id: any) => (
										<li key={id} className='mt-2'>
											<a href={fill.link} target='_blank' rel='noopener noreferrer' className='d-flex justify-content-center align-items-center'>
												<div className='maskImg icon' style={{ WebkitMaskImage: `url(${fill.icon})` }} />
												<span translate='no' className='text-capitalize'>
													&nbsp;&nbsp;{fill.text}
												</span>
											</a>
										</li>
									))
								}
							</ul>
							<br />
							<div className='d-flex w-100 justify-content-center content-icons-social'>
								{
									//RETURN SOCIAL INFORMATION
									// @ts-ignore
									this.state.social.map((fill: any, id: any) => (
										<a
											key={id}
											href={fill.link}
											className='text-white d-flex justify-content-center align-items-center'
											style={{ margin: '7px' }}
											target='_blank'
											rel='noopener noreferrer'
										>
											<div className='maskImg icon' style={{ WebkitMaskImage: `url(${fill.icon})` }} />
										</a>
									))
								}
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}
