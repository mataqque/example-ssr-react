// export default function PublicRoute(props: any) {
// 	return
// }

// import Navbar from '../UI/Page/Navbar/navbar';

export const PublicRoute = (props: any) => {
	return (
		<>
			{/* <Navbar /> */}
			{props.children}
		</>
	);
};
