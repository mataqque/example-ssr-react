/* eslint-disable react/jsx-no-target-blank */
import React, { Component, useEffect } from 'react';

export const LegalPopUp = (props: any) => {
	useEffect(() => {
		const modalTrigger = document.querySelector('a#consumer-protection');
		if (modalTrigger) {
			const popup = document.querySelector('.legal-popup');
			//@ts-ignore
			const close = popup.querySelector('.close');
			//@ts-ignore
			modalTrigger.onclick = () => (popup.style.display = 'flex');
			//@ts-ignore
			close.onclick = () => (popup.style.display = 'none');

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function (event) {
				if (event.target === popup) {
					//@ts-ignore
					popup.style.display = 'none';
				}
			};
		}
	}, []);
	return (
		<div className='legal-popup'>
			<div className='content'>
				<a href='#' className='close'>
					×
				</a>
				<ul>
					<li>
						<a href={require('../../../Assets/pdf/Codigo-de-Proteccion-al-Consumidor-Nesta.pdf')} target='_blank' rel='noopener'>
							Código de Protección al consumidor
						</a>
					</li>
					<li>
						<a href={require('../../../Assets/pdf/Cuadro-de-acabados-F3-NESTA.pdf')} target='_blank' rel='noopener'>
							Cuadro de acabados
						</a>
					</li>
					<li>
						<a href={require('../../../Assets/pdf/Memoria-descriptiva-Nesta.pdf')} target='_blank' rel='noopener'>
							Memoria descriptiva
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
