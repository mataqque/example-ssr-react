import React, { Component } from 'react';

export class SelectWithImage extends Component {
	componentDidMount = () => {
		const $ = window.jQuery;
		$('.link-box-select').click(function (e: any) {
			e.preventDefault();
		});
		$('.link-box-select').focus(function (e: any) {
			$('.contentOptionsSelect').addClass('active');
		});
		$('.link-box-select').blur(function (e: any) {
			setTimeout(function () {
				$('.contentOptionsSelect').removeClass('active');
			}, 150);
		});
	};

	render() {
		return (
			<div
				className={
					'form-group content-false-box-select ' +
					// @ts-ignore
					(this.props.validator.fieldValid(this.props.name)
						? 'is-valid'
						: // @ts-ignore
						this.props.activateValid === 'active'
						? 'is-invalid'
						: '')
				}
			>
				<a href='#' className='link-box-select'>
					<div className='select-box-false form-control'>
						{/* @ts-ignore */}
						{this.props.estado === '' ? this.props.placeholder : this.props.estado}
					</div>
				</a>
				<div className='contentOptionsSelect'>
					{/* <div className="options" onClick={(e) => this.props.setValueCbo("Torre B x11")} data-val="Torre B x11 - 76.10m" data-text="Torre B x11 - 76.10m2">
                        <div className="imgoption" style={{backgroundImage:`url(${require("Assets/images/landing/piros/tipologias/cbotipo1.png")})`}} /><span>Torre B x11 - 76.10m<sup>2</sup></span>
                    </div>
                    <div className="options" onClick={(e) => this.props.setValueCbo("Torre B X12")} data-val="Torre B X12 - 96.39m" data-text="Torre B X12 - 96.39m2">
                        <div className="imgoption" style={{backgroundImage:`url(${require("Assets/images/landing/piros/tipologias/cbotipo2.png")})`}} /><span>Torre B X12 - 96.39m<sup>2</sup></span>
                    </div> */}
					{/* @ts-ignore */}
					<div className='options' onClick={e => this.props.setValueCbo('Torre B X13')} data-val='Torre B X13 - 82.78m' data-text='Torre B X13 - 82.78m2'>
						<div
							className='imgoption'
							style={{
								backgroundImage: `url(${require('../../Assets/images/landing/piros/tipologias/tipo3.png')})`,
							}}
						/>
						<span>
							Torre B X13 - 82.78m<sup>2</sup>
						</span>
					</div>
					{/* @ts-ignore */}
					<div className='options' onClick={e => this.props.setValueCbo('Torre B X10')} data-val='Torre B X13 - 82.78m' data-text='Torre B X13 - 82.78m2'>
						<div
							className='imgoption'
							style={{
								backgroundImage: `url(${require('../../Assets/images/landing/piros/tipologias/Nesta-Piros-BX10.png')})`,
							}}
						/>
						<span>
							Torre B X10 - 59.51m<sup>2</sup>
						</span>
					</div>
				</div>
				{/* @ts-ignore */}
				{this.props.validator.message(this.props.name, this.props.estado, this.props.styleValid)}
			</div>
		);
	}
}
