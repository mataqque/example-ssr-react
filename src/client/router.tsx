import React, { ReactNode, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PublicRoute } from './components/TypeRoute/PublicRoute';
import { PublicRoutes } from './routes/PublicRoutes';

export default function RoutesDom(props: any): JSX.Element {
	return (
		<Router>
			{/* <Navbar /> */}
			<Routes>
				<Route path='/' element={<PublicRoute>{PublicRoutes.Home}</PublicRoute>}></Route>
			</Routes>
		</Router>
	);
}
