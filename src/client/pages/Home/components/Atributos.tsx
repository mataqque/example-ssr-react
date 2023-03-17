import React, { Component } from 'react';
//@ts-ignore
import BGatributos from '../../../Assets/images/inicio/background-atributos.png';
//@ts-ignore
import IMGTitle from '../../../Assets/images/atributos/title.svg';
//@ts-ignore
import Paloma1 from '../../../Assets/images/atributos/paloma-atributos.png';
//@ts-ignore
import PalomaVerdeRight from '../../../Assets/images/paloma-green-right.png';
//@ts-ignore
import LikeIcon from '../../../Assets/images/fases/iconos/like.png';
//@ts-ignore
import PiscinaIcon from '../../../Assets/images/fases/iconos/piscina.png';
//@ts-ignore
import LlaveIcon from '../../../Assets/images/fases/iconos/key.png';
//@ts-ignore
import UbicacionIcon from '../../../Assets/images/fases/iconos/place.png';
//@ts-ignore
import DestacadoIcon from '../../../Assets/images/fases/iconos/estrella.png';
//@ts-ignore
import GasIcon from '../../../Assets/images/fases/iconos/medidor.png';
//@ts-ignore
import perro from '../../../Assets/images/fases/iconos/perro.png';
//@ts-ignore
import VistaIcon from '../../../Assets/images/fases/iconos/vista.png';
//@ts-ignore
import AmplioPatio from '../../../Assets/images/fases/iconos/amplio-patio-interno.png';

export class Atributos extends Component {
	render() {
		return (
			<section
				className='section section-atributos'
				id='Atributos'
				style={{
					backgroundImage: `url(${BGatributos})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center center',
				}}
			>
				<div className='p-relative'>
					<div className='headerInvisible' id='headerInvisible' />
					<div className='contain'>
						<div className='contentImgTitle'>
							<div className='imgtitle text-center d-flex justify-content-center align-items-center text-white' title='Nuestros atributos'>
								<div className='paloma-bird' style={{ backgroundImage: `url(${Paloma1})` }} />
								<span translate='no' className='geomanist-light fsize-1-5vw' style={{ lineHeight: '1em' }}>
									Nuestros
									<br />
									<span className='geomanist-bold fsize-2vw'>atributos</span>
								</span>
							</div>
						</div>
						<div className='contentAtributos'>
							<div className='atributo' title='Respaldo exitoso Fase 1, Fase 2 y Fase 3'>
								<div className='imgAtributo' style={{ backgroundImage: `url(${LikeIcon})` }} />
								<div className='titleAtributo'>Respaldo exitoso Fase 1, Fase 2 y Fase 3</div>
							</div>
							<div className='atributo' title='Ubicación céntrica'>
								<div className='imgAtributo' style={{ backgroundImage: `url(${UbicacionIcon})` }} />
								<div className='titleAtributo'>Ubicación céntrica</div>
							</div>
							<div className='atributo' title='Acabados de calidad'>
								<div className='imgAtributo' style={{ backgroundImage: `url(${DestacadoIcon})` }} />
								<div className='titleAtributo'>Acabados de calidad</div>
							</div>
							<div className='atributo' title='Vista espectacular'>
								<div className='imgAtributo' style={{ backgroundImage: `url(${AmplioPatio})` }} />
								<div className='titleAtributo'>Amplio patio interno</div>
							</div>
						</div>
						<div className='contentAtributos'>
							<div className='atributo' title='Exclusivas áreas comunes'>
								<div className='imgAtributo' style={{ backgroundImage: `url(${PiscinaIcon})` }} />
								<div className='titleAtributo'>Exclusivas áreas comunes</div>
							</div>
							<div className='atributo' title='Doble acceso'>
								<div className='imgAtributo' style={{ backgroundImage: `url(${LlaveIcon})` }} />
								<div className='titleAtributo'>Doble acceso</div>
							</div>
							<div className='atributo' title='Gas natural'>
								<div className='imgAtributo' style={{ backgroundImage: `url(${GasIcon})` }} />
								<div className='titleAtributo'>Gas Natural</div>
							</div>
							<div className='atributo' title='Vigilancia las 24 horas'>
								<div className='imgAtributo' style={{ backgroundImage: `url(${perro})` }} />
								<div className='titleAtributo'>Pet friendly</div>
								<div className='paloma-bird-green-right' style={{ backgroundImage: `url(${PalomaVerdeRight})` }} />
							</div>
						</div>
					</div>
				</div>
				<div className='bottom-part' style={{ backgroundImage: `url(${require('../../../Assets/images/atributos/bottom-atributos.png')})` }} />
			</section>
		);
	}
}
