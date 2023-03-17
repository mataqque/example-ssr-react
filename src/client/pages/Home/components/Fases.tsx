import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
//@ts-ignore
import IMGfases from '../../../Assets/images/fases/compress-mapa.webp';

export class Fases extends Component {
	render() {
		return (
			<section className='section section-fases'>
				<div className='p-relative'>
					<div className='headerInvisible' id='headerInvisible' />
					<div className='contain-fases' style={{ backgroundImage: `url(${IMGfases})` }}>
						<div className='hotspot --terra'>
							<div className='pulse'></div>
							<Link to='/fases/terra' className='dot'>
								<i className='fa fa-plus'></i>
								<div className='preview' />
							</Link>
						</div>
						<div className='hotspot --terra-2'>
							<div className='pulse'></div>
							<Link to='/fases/terra' className='dot'>
								<i className='fa fa-plus'></i>
								<div className='preview' />
							</Link>
						</div>
						<div className='hotspot --piros'>
							<div className='pulse'></div>
							<a href='/landing-piros' className='dot'>
								<i className='fa fa-plus'></i>
								<div className='preview' />
							</a>
						</div>
						<div className='hotspot --aqua'>
							<div className='pulse'></div>
							<a href='#' className='dot'>
								<i className='fa fa-plus'></i>
								<div className='preview' />
							</a>
						</div>
						<div className='hotspot --ventos'>
							<div className='pulse'></div>
							<a href='#' className='dot'>
								<i className='fa fa-plus'></i>
								<div className='preview' />
							</a>
						</div>
						<div className='hotspot --platinum'>
							<div className='pulse'></div>
							<a href='#' className='dot'>
								<i className='fa fa-plus'></i>
								<div className='preview' />
							</a>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
