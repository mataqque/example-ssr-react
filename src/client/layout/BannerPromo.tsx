import React, { Component } from 'react';

export class BannerPromo extends Component {
	hide() {
		// @ts-ignore
		document.querySelector('.banner-promo').style.display = 'none';
	}
	render() {
		return (
			// @ts-ignore
			<div className={`banner-promo ${this.props.display ? 'display' : ''}`}>
				<div className='emotive-phrase'>
					<div className='arrows'>
						<span className='arrow primera'></span>
						<span className='arrow segunda'></span>
						<span className='arrow tercera'></span>
					</div>
					<div className='text'>
						Hacemos una pausa pero&nbsp;<span className='coolText'>Tus sueños continúan</span>
					</div>
				</div>
				<div className='border'></div>
				<div className='offer'>
					Recibe un bono de hasta <span>s/5,000</span>
				</div>
				{/* @ts-ignore */}
				<a href={this.props.to} className='button'>
					Regístrate
				</a>
				<a className='cls' onClick={() => this.hide()}>
					X
				</a>
			</div>
		);
	}
}
