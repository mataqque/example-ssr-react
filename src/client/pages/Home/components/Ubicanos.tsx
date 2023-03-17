import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
//@ts-ignore
import Background from '../../../Assets/images/ubicanos/background.png';
//@ts-ignore
import IMGTitle from '../../../Assets/images/ubicanos/title.svg?url';
//@ts-ignore
import Marker from '../../../Assets/images/ubicanos/marcador.png';
//@ts-ignore
import Mapa from '../../../Assets/images/ubicanos/mapa.png';
//@ts-ignore
import Encuentranos from '../../../Assets/images/ubicanos/encuentranosen.png';
//@ts-ignore
import Waze from '../../../Assets/images/ubicanos/waze.png';
//@ts-ignore
import Maps from '../../../Assets/images/ubicanos/maps.png';
//@ts-ignore
import titlePaloma1 from '../../../Assets/images/ubicanos/paloma1.png';
//@ts-ignore
import health from '../../../Assets/images/ubicanos/health.svg?url';
//@ts-ignore
import metro from '../../../Assets/images/ubicanos/metro.svg?url';
//@ts-ignore
import park from '../../../Assets/images/ubicanos/park.svg?url';
//@ts-ignore
import market from '../../../Assets/images/ubicanos/market.svg?url';
//@ts-ignore
import estadio from '../../../Assets/images/ubicanos/estadio.svg?url';
//@ts-ignore
import alameda from '../../../Assets/images/ubicanos/alameda.svg?url';
//@ts-ignore
import bottonpart from '../../../Assets/svg/bottonpart.svg?url';

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1IjoiZWR1YXJkb2p2cCIsImEiOiJja2xsMDN1ZXowN2cxMnVsY3FpZzllcTB3In0.VqhrTGX7rFTgSeROj01uzQ';
let centerPos = [-77.03973772883633, -12.06917891635197];
let zoomPos = 15;
if (typeof window !== 'undefined') {
	if (window.innerWidth < 768) {
		zoomPos = 13.4;
	}
}
export class Ubicanos extends Component {
	constructor(props: any) {
		super(props);
		this.state = {
			googlemaps: '',
			ubicaciones: [
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [-77.04929041324776, -12.065088668698001],
					},
					properties: {
						title: 'Promart',
						icon: market,
					},
				},
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [-77.03384028209658, -12.067063772135691],
					},
					properties: {
						title: 'Estadio',
						icon: estadio,
					},
				},
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [-77.03950293258472, -12.071650111463693],
					},
					properties: {
						title: 'Alameda',
						icon: alameda,
					},
				},

				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [-77.04739173110552, -12.06679040660233],
					},
					properties: {
						title: 'La rambla',
						icon: market,
					},
				},
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [-77.0484137204547, -12.065511347279013],
					},
					properties: {
						title: 'Plaza Vea',
						icon: market,
					},
				},
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [-12.070769642319721, -77.03411973295188],
					},
					properties: {
						title: 'Parque de la reserva',
						icon: park,
					},
				},
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [-77.04134208692953, -12.068110865293928],
					},
					properties: {
						title: 'Campo de marte',
						icon: park,
					},
				},
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [-77.03404463110556, -12.070822100423706],
					},
					properties: {
						title: 'Parque de la reserva',
						icon: park,
					},
				},
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [-77.03579042925932, -12.062804760935947],
					},
					properties: {
						title: 'Parque de la exposición',
						icon: park,
					},
				},
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [-77.04042508470282, -12.077528207324606],
					},
					properties: {
						title: 'Hospital Rebagliati',
						icon: health,
					},
				},
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [-77.02670328877583, -12.082085523807152],
					},
					properties: {
						title: 'Estación Canadá',
						icon: metro,
					},
				},
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [-77.0488060022702, -12.083587069126695],
					},
					properties: {
						title: 'Universidad del Pacífico',
						icon: metro,
					},
				},
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [-77.04612112670527, -12.064294898828209],
					},
					properties: {
						title: 'Hospital del niño',
						icon: health,
					},
				},
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [-77.03973772883633, -12.06917891635197],
					},
					properties: {
						title: 'Nesta',
						icon: require('../../../Assets/images/ubicanos/nesta-map.png'),
					},
				},
			],
		};
	}
	componentDidMount() {
		var map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: centerPos,
			zoom: zoomPos,
		});
		var geojson = {
			type: 'geojson',
			data: {
				type: 'FeatureCollection',
				//@ts-ignore
				features: this.state.ubicaciones,
			},
		};
		geojson.data.features.forEach(function (marker: any, index: number) {
			var el = document.createElement('div');
			el.className = `marker ${marker.properties.title} marker-${index}`;
			if (marker.properties.title == 'Nesta') {
				el.innerHTML = `<img class="Site-Nesta" src="${marker.properties.icon}" alt="${marker.properties.title}">`;
			}
			if (marker.geometry.type === 'Point' && marker.properties.title !== 'Nesta') {
				el.innerHTML = `<img src="${marker.properties.icon}" alt="${marker.properties.title}">`;
			}
			new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
		});
		//@ts-ignore
		document.querySelector('.btn-zoom-more').addEventListener('click', () => {
			zoomPos++;
			map.zoomTo(zoomPos, { duration: 1000 });
		});
		//@ts-ignore
		document.querySelector('.btn-zoom-less').addEventListener('click', () => {
			zoomPos--;
			map.zoomTo(zoomPos, { duration: 1000 });
		});
	}
	render() {
		return (
			<section className='section section-ubicanos'>
				<div className='p-relative'>
					<div className='contain' style={{ height: '100%' }}>
						<div className='contentMaps' style={{ backgroundImage: `url(${Mapa})` }}>
							{/* @ts-ignore */}
							<div className={'map ' + this.state.googlemaps}>
								<div className='topPart' style={{ backgroundImage: `url(${bottonpart})` }} />
								<div id='map'></div>
								<div className='content-levels'>
									<div className='btn-zoom btn-zoom-more'>+</div>
									<div className='btn-zoom btn-zoom-less'>-</div>
								</div>
								{/* <MediaQuery query="(min-width: 770px)">
                                    <GoogleMaps latitud={"-12.06929"} longitud={"-77.03964"} centerlatitud={-12.069188} centerlongitud={-77.0188538} marker={Marker} />
                                </MediaQuery>
                                <MediaQuery query="(max-width: 769px)">
                                    <GoogleMaps latitud={"-12.06929"} longitud={"-77.03964"} centerlatitud={-12.06929} centerlongitud={-77.03964} marker={Marker} />
                                </MediaQuery> */}
							</div>
						</div>
						<div className='contentInformation' style={{ backgroundImage: `url(${Background})` }}>
							<div className='headerInvisible' id='headerInvisible' />
							<div className='contentImgTitle'>
								<div className='imgtitle text-center d-flex justify-content-center align-items-center text-white'>
									<div className='paloma-bird' style={{ backgroundImage: `url(${titlePaloma1})` }} />
									<span translate='no' className='geomanist-light fsize-1-5vw'>
										<span className='geomanist-bold fsize-2-5vw'>Ubícanos</span>
									</span>
								</div>
							</div>
							<div className='text-center text-white line-height-normal'>
								Te invitamos a visitar nuestro <span className='geomanist-bold'>depa piloto</span>
								<br /> donde un asesor te atenderá de forma <br /> personalizada.
							</div>
							{/* <div className="text-center mt-2 d-flex btns-lugares-cerca">
                                <button className="btn-nesta m-3 outline outline-white" onClick={() => this.setState({googlemaps:'d-none'})}>Ver lugares cerca</button>
                                <button className="btn-nesta m-3 ml-5 outline outline-white" onClick={() => this.setState({googlemaps:''})}>Ver mapa</button>
                            </div> */}
							<div className='contentImgTitle mt-1'>
								<div className='imgtitle titleEncuentranos' style={{ height: 45, backgroundImage: `url(${Encuentranos})`, paddingTop: '45px' }} />
							</div>
							<div className='contentIcons mt-4'>
								<a
									href='https://www.google.com.pe/maps/place/Proyecto+Nesta/@-12.0694106,-77.0419359,17z/data=!3m1!4b1!4m5!3m4!1s0x9105c8eebaf92501:0xadcc43e818c55b53!8m2!3d-12.0694159!4d-77.0397472'
									target='_blank'
									rel='noopener noreferrer'
									className='icon iconMaps ml-4'
									title='ubicación google maps'
									style={{ backgroundImage: `url(${Maps})` }}
								/>
								<a
									href='https://www.waze.com/es-419/livemap?zoom=17&lat=-12.06929&lon=-77.03964'
									target='_blank'
									rel='noopener noreferrer'
									className='icon iconWaze'
									title='ubicación waze'
									style={{ backgroundImage: `url(${Waze})` }}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
