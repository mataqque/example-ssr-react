import React, { Component } from 'react';

export class Checkbox extends Component<any, any> {
	setValue = (event: any, name: any) => {
		var obj = {};
		//@ts-ignore
		obj[event.target.name] = event.target.checked;
		//@ts-ignore
		this.props.setValueTxt(obj);
	};
	render() {
		return (
			<div
				className={
					// @ts-ignore
					this.props.className +
					' form-group form-nesta mb-0 ' +
					// @ts-ignore
					(this.props.estado ? 'validado' : this.props.styleValid ? (this.props.activateValid === 'active' ? 'invalidado' : null) : null)
				}
			>
				<span translate='no' className='wpcf7-form-control-wrap terminos_condiciones checkbox-nesta text-center'>
					<input
						type='checkbox'
						//@ts-ignore
						name={this.props.name}
						//@ts-ignore
						checked={this.props.estado}
						//@ts-ignore
						onChange={e => this.setValue(e)}
						className={'wpcf7-form-control wpcf7-acceptance btn_terminos_condiciones invisible'}
						//@ts-ignore
						//@ts-ignore
						id={this.props.id}
						aria-invalid='false'
						style={{ position: 'absolute' }}
						//@ts-ignore
					/>
					{/* @ts-ignore */}
					<label for={this.props.id} className={'geomanist-regular'} style={{ padding: 0 }}>
						<span translate='no'></span>
						{/* @ts-ignore */}
						{this.props.text}
					</label>
				</span>
				{/* @ts-ignore */}
				{this.props.validator.message(this.props.name, this.props.estado, this.props.styleValid)}
				{/* <div className="msgError">Campo requerido</div> */}
			</div>
		);
	}
}
