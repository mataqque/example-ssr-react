import React, { Component } from 'react';

export const Selectbox = (props: any) => {
	const { name, validator, placeholder, activateValid, setValueCbo, cbodoc, options, estado, formGroup = true, styleValid } = props;
	return (
		<>
			<select className={'form-control ' + (validator.fieldValid(name) ? 'is-valid' : activateValid === 'active' ? 'is-invalid' : '')} name={name} value={cbodoc} onChange={e => setValueCbo(e)}>
				{options.map((fill: any, index: number) => (
					<option key={index} value={fill.value}>
						{fill.name}
					</option>
				))}
			</select>
			{validator.message(name, estado, styleValid)}
		</>
	);
};
