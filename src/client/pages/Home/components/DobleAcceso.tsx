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

export class DobleAcceso extends Component {
	render() {
		return (
			<section className='section section-dobleacceso section-tramado bgImg'>
				<div className='topPart' />
				<div className='p-relative'>
					<div className='headerInvisible' id='headerInvisible' />
					<div className='contain'>
						<div className='contentImgTitle'>
							<div className='imgtitle text-center d-flex justify-content-center align-items-center text-white'>
								<div className='paloma-bird' style={{ backgroundImage: `url(${titlePaloma1})` }} />
								<div className='paloma-bird' style={{ backgroundImage: `url(${titlePaloma2})` }} />
								<span translate='no' className='geomanist-light fsize-1-5vw'>
									<span className='geomanist-bold fsize-2vw'>Doble acceso</span> vehicular y peatonal
								</span>
							</div>
						</div>
						<div className='contentImages'>
							<div className='myImage'>
								<div className='image' style={{ backgroundImage: `url(${IMG1})` }} />
								{/* <span translate="no">*El doble acceso del proyecto Nesta se otorgará al culminar el mismo en su totalidad.</span> */}
							</div>
							<div className='myImage'>
								<div className='image' style={{ backgroundImage: `url(${IMG2})` }} />
								{/* <span translate="no">*El doble acceso del proyecto Nesta se otorgará al culminar el mismo en su totalidad.</span> */}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
