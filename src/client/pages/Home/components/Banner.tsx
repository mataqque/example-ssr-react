/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component, useRef } from 'react';
//@ts-ignore
import OwlCarousel from 'react-owl-carousel2';
import MediaQuery from 'react-responsive';
import Slider from 'react-slick';
const options = {
	items: 1,
	nav: true,
	singleItem: true,
	navText: ['<i class="fas fa-chevron-left fa-2x"></i>', '<i class="fas fa-chevron-right fa-2x"></i>'],
	loop: false,
	rewind: true,
	autoplay: false,
	smartSpeed: 650,
};
const events = {
	onChanged: function (event: any) {},
};

export const Banner = (props: any) => {
	const car = useRef(null);
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
		beforeChange: (current: any, next: any) => {},
	};
	return (
		<section className='section section-banner section-tramado' id='Promociones'>
			<div className='p-relative'>
				<div className='headerInvisible' id='headerInvisible' />
				<Slider {...settingsCards} ref={car}>
					{props?.sliders.length > 0
						? props?.sliders.map((fill: any, index: number) => (
								<div className='content-image' key={index}>
									<MediaQuery query='(orientation: landscape)'>
										<a href={fill.link}>
											<div className='image' style={{ backgroundImage: `url(${fill.sliderWeb})` }}>
												{fill.svgBannerWeb}
											</div>
										</a>
									</MediaQuery>
									<MediaQuery query='(orientation: portrait)'>
										<a href={fill.link}>
											<div className='image' style={{ backgroundImage: `url(${fill.sliderMovil})` }}>
												{fill.svgBannerMovil}
											</div>
										</a>
									</MediaQuery>
								</div>
						  ))
						: null}
				</Slider>
			</div>
		</section>
	);
};
