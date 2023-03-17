import React, { Component } from 'react';
//@ts-ignore
import IMGTitle from '../../../Assets/images/areas-sociales/areas-sociales.svg?url';
//@ts-ignore
import titlePaloma1 from '../../../Assets/images/dobleacceso/paloma1.png';
//@ts-ignore
import titlePaloma2 from '../../../Assets/images/dobleacceso/paloma2.png';
//@ts-ignore
import IMG1 from '../../../Assets/images/dobleacceso/compress-img1.webp';
//@ts-ignore
import IMG2 from '../../../Assets/images/dobleacceso/compress-img2.webp';
//@ts-ignore
import IMGVirtualExperience from '../../../Assets/images/multimedia/virtualExperience.png';
//@ts-ignore
import IMGVirtualExperience3d from '../../../Assets/images/multimedia/virtualExperience3d.png';
//@ts-ignore
import maskCard from '../../../Assets/images/inicio/mask-recorrido.svg?url';
// import Icon from 'Components/UI/icon';
import { Link } from 'react-router-dom';
//@ts-ignore
import Paloma1 from '../../../Assets/images/atributos/paloma-atributos.png';

const logo = require('../../../Assets/images/inicio/tour-360.json');
export class SectionMultimedia extends Component {
	constructor(props: any) {
		super(props);
		this.hideLoading = this.hideLoading.bind(this);
		this.state = {
			value: '',
			active: false,
			hide: false,
		};
	}
	hideLoading() {
		console.log('termino');
		this.setState({ hide: true });
	}
	render() {
		return (
			<section className='section section-multimedia section-tramado bgImg'>
				<img className='background-section' src={require('../../../Assets/images/inicio/background-atributos.png')} alt='background seccion multimedia' />
				<div className='topPart' />
				<div className='p-relative'>
					<div className='headerInvisible' id='headerInvisible' />
					<div className='contain'>
						<div className='contentImgTitle'>
							<div className='imgtitle text-center d-flex justify-content-center align-items-center text-white' title='Nuestros atributos'>
								<div className='paloma-bird' style={{ backgroundImage: `url(${Paloma1})` }} />
								<div className='paloma-bird' style={{ backgroundImage: `url(${titlePaloma1})`, transform: 'rotateY(180deg)' }} />
								<span translate='no' className='geomanist-light fsize-1-5vw' style={{ lineHeight: '1em' }}>
									<span className='geomanist-bold fsize-2vw'>Multimedia</span>
								</span>
							</div>
						</div>
						<div className='contentImages'>
							<div className='mask-multimedia mask-multimedia-1' id='asdf' style={{ WebkitMaskImage: `url(${maskCard})` }}>
								<div className='content-card'>
									{/* <Icon
										icon={logo}
										ref={element => {
											this.logo = element;
										}}
										event={this.hideLoading}
									></Icon> */}
									<span className='title-1'>EXPLORA NUESTRO</span>
									<span className='title-2'>Recorrido Virtual</span>
									<div className='btns'>
										<a href='https://360.nerdstudio.pe/recorridovirtual/cosapilar/nesta/index.htm' target='_blank' className='btn' rel='noreferrer'>
											2 Dorms.
										</a>
										<a href='https://gvrestate.com/gvre/GrupoLar/Nesta3D/' target='_blank' className='btn' rel='noreferrer'>
											3 Dorms.
										</a>
									</div>
								</div>
							</div>
							<Link to='/avance-de-obra' className='mask-multimedia mask-multimedia-2' style={{ WebkitMaskImage: `url(${maskCard})` }}>
								<div className='content-card content-card-2'>
									<img className='background' src={require('../../../Assets/images/inicio/compress-avance-de-obra.webp')} alt='imagen multimedia'></img>
									<span className='title-1'>DESCUBRE NUESTRO</span>
									<span className='title-2'>Avance de Obra</span>
								</div>
							</Link>
							<Link to='/vive-superior' className='mask-multimedia mask-multimedia-3' style={{ WebkitMaskImage: `url(${maskCard})` }}>
								<div className='content-card content-card-3'>
									<img className='background' src={require('../../../Assets/images/inicio/compress-vista-superior.webp')} alt='imagen multimedia'></img>
									<span className='title-1'>AHORA</span>
									<span className='title-2'>VIVE SUPERIOR</span>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
