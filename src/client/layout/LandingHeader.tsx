import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { HashLink as Link } from 'react-router-hash-link';
// @ts-ignore
import SVGnestaPiros from '../Assets/svg/logos/nestaPiros.svg?url';
// @ts-ignore
import SVGcosapi from '../Assets/svg/cosapi.svg?url';
// @ts-ignore
import SVGlar from '../Assets/svg/lar.svg?url';
// @ts-ignore
import SVGHeaderLanding from '../Assets/svg/header-landing.svg?url';
// @ts-ignore
import SVGHeaderLandingMovil from '../Assets/svg/header-landing-movil.svg?url';
import { BannerPromo } from './BannerPromo';

export class LandingHeader extends Component {
	render() {
		return (
			<header className='header landing-header' id='header'>
				{/* <BannerPromo to="#contacto"/> */}
				<div className='primaryHeader'>
					<MediaQuery query='(min-width: 870px)'>
						<div className='header-landing-bottom' style={{ WebkitMaskImage: `url(${SVGHeaderLanding})` }} />
					</MediaQuery>
					<MediaQuery query='(max-width: 870px)'>
						<div className='header-landing-bottom' style={{ WebkitMaskImage: `url(${SVGHeaderLandingMovil})` }} />
					</MediaQuery>
					<Link to={'#'} className='contentLogo'>
						<div className='logo' style={{ backgroundImage: `url(${SVGnestaPiros})` }} />
					</Link>
					<div className='menu'>
						<ul>
							<li className='tab-hidden'>
								<a href='https://www.cosapiinmobiliaria.com.pe/' target='_blank' rel='noopener noreferrer'>
									<div className='logoCosapi' style={{ backgroundImage: `url(${SVGcosapi})` }} />
								</a>
							</li>
							<li className='tab-hidden'>
								<a href='http://www.grupolar.pe/' target='_blank' rel='noopener noreferrer'>
									<div className='logoLar' style={{ backgroundImage: `url(${SVGlar})` }} />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</header>
		);
	}
}
