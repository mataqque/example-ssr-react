import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import './index.css';
import RoutesDom from './router';
import { PublicRoute } from './components/TypeRoute/PublicRoute';
import { PublicRoutes } from './routes/PublicRoutes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
declare global {
	interface Window {
		$: any;
		jQuery: any;
	}
}

export function render(url: string) {
	return ReactDOMServer.renderToString(
		<React.StrictMode>
			<StaticRouter location={{ pathname: '/', hash: '#inicio' }}>
				<PublicRoute>{PublicRoutes.Home}</PublicRoute>
			</StaticRouter>
		</React.StrictMode>
	);
}
