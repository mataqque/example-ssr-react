//@ts-ignore
import Lottie from 'react-lottie';
var cont = 0;

export const Icon = (props: any) => {
	const stopAnimation = () => {
		console.log('endad');
		if (cont == 1) {
			props.event();
		} else {
			cont++;
		}
	};
	const properties = {
		isStopped: false,
		hide: false,
		isPaused: false,
		defaultOptions: {
			loop: true,
			autoplay: true,
			speed: 10000,
			animationData: props.icon,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice',
			},
		},
		// eventListeners: [
		// 	{
		// 		eventName: 'loopComplete',
		// 		callback: stopAnimation,
		// 	},
		// ],
	};

	const addItem = () => {};

	return (
		<div className='lottie-icon'>
			<Lottie options={properties.defaultOptions} isStopped={properties.isStopped} isPaused={properties.isPaused} speed={0.8}></Lottie>
		</div>
	);
};
