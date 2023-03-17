import React, { Component } from 'react';

export class Input extends Component<any, any> {
	render() {
		const { name, type, placeholder, validator, estado, activateValid, styleValid, setValueTxt, formGroup = true, ...rest }: any = this.props;
		return (
			<Container formGroup>
				{/* {placeholder && <label className="control-label ">{placeholder}</label>} */}
				<input
					name={name}
					value={estado}
					autoComplete={'off'}
					className={'form-control ' + (validator.fieldValid(name) ? 'is-valid' : activateValid === 'active' ? 'is-invalid' : '')}
					type={type}
					placeholder={placeholder}
					onChange={e => setValueTxt(e)}
					{...rest}
				/>
				{validator.message(name, estado, styleValid)}
			</Container>
		);
	}
}

function Container(props: any) {
	return props.formGroup ? <div className='form-group'>{props.children}</div> : <>{props.children}</>;
}
