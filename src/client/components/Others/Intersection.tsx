import React, { Component } from 'react';

export class Intersection extends Component {
	constructor(props: any) {
		super(props);
		console.log('this separe: ', props);
	}
	render() {
		return (
			//@ts-ignore
			<section className={`section section-intersection img img-cover geomanist-light ${this.props.class}`} style={{ backgroundImage: `url(${this.props.intersection})` }}>
				<div className='intersection-partTop img img-cover' style={{ backgroundImage: `url(${require('../../Assets/images/landing/intriga/intersection/partTop.png')})` }} />
				<div className='content-text-intersection'>
					<span className='badassmoon'>Terra</span> es ideal para vivir 
					<br className='text-fase-1' />
					rodeado de naturaleza
				</div>
				<div className='intersection-partBottom img img-cover' style={{ backgroundImage: `url(${require('../../Assets/images/landing/intriga/intersection/partBottom.png')})` }} />
			</section>
		);
	}
}
