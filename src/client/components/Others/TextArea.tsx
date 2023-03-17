import React, { Component } from 'react';

export class TextArea extends Component {
	render() {
		return (
			<div className={'form-group'}>
				{/* @ts-ignore */}
				<label htmlFor='text'>{this.props.placeholder}</label>
				<textarea
					//@ts-ignore
					name={this.props.name}
					//@ts-ignore
					className={'form-control ' + (this.props.validator.fieldValid(this.props.name) ? 'is-valid' : this.props.activateValid === 'active' ? 'is-invalid' : '')}
					style={{ height: 130 }}
					placeholder=' '
					//@ts-ignore
					onChange={e => this.props.setValueTxt(e)}
				>
					{/* @ts-ignore */}
					{this.props.estado}
				</textarea>
				{/* @ts-ignore */}
				{this.props.validator.message(this.props.name, this.props.estado, this.props.styleValid)}
			</div>
		);
	}
}
