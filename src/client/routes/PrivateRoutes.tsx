import { Suspense } from 'react';
import { ErrorBoundary } from './Boundary';

type Props = {
	children: React.ReactNode;
};

function Component(props: Props) {
	return (
		<Suspense fallback={<></>}>
			<ErrorBoundary>{props.children}</ErrorBoundary>
		</Suspense>
	);
}

export const PrivateRoutes = {
	Dashboard: (
		<Component>
			<h1>Dashboard</h1>
		</Component>
	),
};
