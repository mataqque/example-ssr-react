import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/scss/index.scss';
import RoutesDom from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-owl-carousel2/src/owl.carousel.css';
const container = document.getElementById('app');

const FullApp = () => (
	<React.StrictMode>
		<RoutesDom />
	</React.StrictMode>
);
// @ts-ignore
if (import.meta.hot || !container?.innerText) {
	const root = createRoot(container!);
	root.render(<FullApp />);
} else {
	hydrateRoot(container!, <FullApp />);
}
