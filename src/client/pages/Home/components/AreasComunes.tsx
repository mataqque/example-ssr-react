import React, { Component, useEffect, useRef, useState } from 'react';
//@ts-ignore
import OwlCarousel from 'react-owl-carousel2';
//@ts-ignore
import titlePaloma from '../../../Assets/images/areas-sociales/paloma.png';
//@ts-ignore
import TitleAreasSociales from '../../../Assets/images/areas-sociales/areas-sociales.svg';
//@ts-ignore
import bgName from '../../../Assets/images/areas-sociales/bgName.png';
//@ts-ignore
import $ from 'jquery';
import Slider from 'react-slick';
const options = {
	items: 1,
	nav: true,
	singleItem: true,
	navText: ['<i class="fas fa-chevron-left fa-2x"></i>', '<i class="fas fa-chevron-right fa-2x"></i>'],
	loop: true,
	rewind: true,
	autoplay: false,
};

const events = {
	onInitialized: function (event: any) {
		let element = $(event.target).closest('.contentSlider');
		let name = $(event.target).find('.owl-item.active .image').attr('title');
		$(element).find('.name-carousel span').text(name);
	},
	onTranslated: function (event: any) {
		let element = $(event.target).closest('.contentSlider');
		let name = $(event.target).find('.owl-item.active .image').attr('title');
		$(element).find('.name-carousel span').text(name);
	},
};
export const AreasComunes = ({ areas = [], depas = [] }: any) => {
	const [imagenes, setImagenes] = useState([]);
	const [typeSliderActive, setTypeSliderActive] = useState('Interiores');
	const sliderAreasComunes = useRef(null);
	const sliderInteriores = useRef(null);
	const settingsCards = {
		dots: false,
		arrows: false,
		infinite: true,
		centerMode: true,
		autoplay: false,
		speed: 500,
		autoplaySpeed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		pauseOnHover: false,
		beforeChange: (current: any, next: any) => {
			// console.log('beforeChange', current, next);
		},
	};
	useEffect(() => {
		let array: any = [];
		areas.forEach((element: any, index: number) => {
			array.push({ src: element.image, thumb: element.image, subHtml: element.name });
		});
		setImagenes(array);
		if (typeof window !== 'undefined') {
			console.log('window');
		}
	}, []);

	const fnOpenModal = (e: any, index: number) => {};
	const changeSlider = (value: any) => {
		console.log(value);
		$(`.btn`).removeClass('active');
		$(`.contentSlider`).removeClass('active');
		$(`.btn-${value}`).addClass('active');
	};
	return (
		<section className='section section-areascomunes section-tramado fase-2' id='Areas-comunes'>
			<img src={require('../../../Assets/images/banner/compress-background-inicio.webp')} alt='fondo seccion de areas comunes e interiores' />
			<div className='p-relative'>
				<div className='headerInvisible' id='headerInvisible' />
				<div className='contain'>
					<div className='contentImgTitle'>
						<div className='imgtitle text-center d-flex justify-content-center align-items-center text-white'>
							{/* <div className="paloma-bird" style={{backgroundImage:`url(${titlePaloma})`}} /> */}
							<span translate='no' className='geomanist-light fsize-1-5vw'>
								Conoce {' '}
								<span className='geomanist-bold fsize-2vw'>tu departamento</span>
							</span>
						</div>
						<div className='contain-buttons'>
							<div
								className={`btn btn-Interiores active`}
								onClick={() => {
									changeSlider('Interiores');
								}}
							>
								Interiores
							</div>
							<div
								className={`btn btn-Areas-comunes mr-1`}
								onClick={() => {
									changeSlider('Areas-comunes');
								}}
							>
								Áreas comunes
							</div>
						</div>
					</div>
					<div className='relative'>
						<div className={`contentSlider btn-Areas-comunes carousel-marco `}>
							<div className='name-carousel left'>
								<span translate='no'></span>
							</div>
							<Slider {...settingsCards}>
								{areas.map((fill: any, index: number) => (
									// @ts-ignore
									<div key={index} data-src={fill.image} href={fill.image} className='content-image cursor-zoom'>
										<div className='image' data-src={fill.image} data-exthumbimage={fill.image} style={{ backgroundImage: `url(${fill.image})` }} title={fill.name} />
									</div>
								))}
							</Slider>
						</div>
						<div className={`contentSlider btn-Interiores carousel-marco active`}>
							<div className='name-carousel left'>
								<span translate='no'></span>
							</div>
							<Slider {...settingsCards}>
								{depas.map((fill: any, index: number) => (
									// @ts-ignore
									<div key={index} data-src={fill.image} href={fill.image} className='content-image cursor-zoom'>
										<div className='image' data-src={fill.image} data-exthumbimage={fill.image} style={{ backgroundImage: `url(${fill.image})` }} title={fill.name} />
									</div>
								))}
							</Slider>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
