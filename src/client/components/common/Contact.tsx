import React, { Component } from 'react';
import { ContactForm } from './ContactForm';

export const Contact = (props: any) => {
	return (
		<section className='section section-contact section-tramado' id='myContact'>
			<img className='img-flower text-fase-2 desktop' src={require('../../Assets/images/fases/compress-background-flower.webp')} alt='background flowers' loading='lazy'></img>
			<img className='img-flower text-fase-2 movil' src={require('../../Assets/images/fases/background-flower-movil.png')} loading='lazy' alt='fondo-flores'></img>
			<div className='p-relative'>
				<div className='linea-effect-start' />
				{/* <div className="hierba" style={{backgroundImage:`url(${require("Assets/images/contacto/hierba.png")})`}} /> */}
				{/* <div className="topPart" style={{WebkitMaskImage:`url(${require("Assets/svg/contactTop.svg").default})`}} /> */}
				<div className='paloma' style={{ backgroundImage: `url(${require('../../Assets/images/contacto/paloma1.png')})` }} />
				<div className='contain-contact'>
					<div className='container-fluid'>
						<div className='row d-flex justify-content-center'>
							<div className='container'>
								<div className='d-flex justify-content-center'>
									<h1 className='contactTextTitle c-black geomanist-bold'>Contáctanos</h1>
								</div>
								<p className='text-center c-second geomanist-regular'>
									¡Conoce más de nuestros precios de <span className='geomanist-bold'>Preventa!</span> Déjanos tu contacto
								</p>
								<ContactForm modelos={props.modelos} nestaCar={props.nestaCar} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
