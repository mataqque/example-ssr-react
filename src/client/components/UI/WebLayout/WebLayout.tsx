import React, { Component } from 'react';
import { LegalPopUp } from '../LegalPopUp/LegalPopUp';

export const WebLayout = (props: any) => {
	return (
		<div className={props.classPage}>
			{props.children}
			<LegalPopUp />
		</div>
	);
};
