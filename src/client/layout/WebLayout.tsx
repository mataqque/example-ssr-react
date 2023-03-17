import React, { Component, useEffect } from 'react';
import { LegalPopUp } from '../components/common/LegalPopUp';

interface IProps {
	children: any;
	classPage: string;
	title?: string;
}
export const WebLayout = ({ children, classPage, title = '' }: IProps) => {
	useEffect(() => {
		document.title = title;
	}, []);
	return (
		<div className={classPage}>
			{children}
			<LegalPopUp />
		</div>
	);
};
