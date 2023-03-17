import { WebLayout } from '../../components/UI/WebLayout/WebLayout';
import { StickyContact } from '../../layout';
import MediaQuery from 'react-responsive';
import ReactFullpage from '@fullpage/react-fullpage';
import { SectionHeader } from './components/header';
import { Banner } from './components/Banner';
import { sliderData } from '../../store/banner.inicio';
import { Fachada } from './components/Fachada';
import { Atributos } from './components/Atributos';
import { areasComunesIntriga } from '../../store/areas_comunes';
import { dataDepartamentosIntriga } from '../../store/departamentos';
import { AreasComunes } from './components/AreasComunes';
import { SectionMultimedia } from './components/multimedia';
import { DobleAcceso } from './components/DobleAcceso';
import { Fases } from './components/Fases';
import { Ubicanos } from './components/Ubicanos';
import { Contact } from '../../components/common/Contact';
// @ts-ignore
import $ from 'jquery';

export const Home = () => {
	const fnGetAlturaHeader = () => {
		try {
			// @ts-ignore
			var headerElement = document.getElementById('header');
			var header = 0;
			if (headerElement) {
				header = headerElement.offsetHeight;
			}
			// @ts-ignore
			document.getElementById('headerInvisible').style.height = header + 'px';
		} catch (e) {
			console.log('error', e);
		}
	};
	return (
		<WebLayout classPage='page-inicio bg-tercero' title='Proyecto Nesta | Departamentos en Jesús María &#8211; Cosapi & Grupo Lar Perú'>
			<StickyContact />
			{/* @ts-ignore */}
			<ReactFullpage
				sectionsColor={['transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '#f5f6f7', '#f5f6f7', '#f5f6f7', '#dbdfe0']}
				css3={true}
				scrollOverflow={false}
				anchors={['inicio', 'promociones', 'el-proyecto', 'atributos', 'areas-comunes', 'section-multimedia', 'doble-acceso', 'fases', 'ubicanos', 'contactanos', 'footer']}
				navigation={true}
				navigationPosition={'right'}
				navigationTooltips={['Inicio', 'Promociones', 'El Proyecto', 'Atributos', 'Imágenes', 'Multimedia', 'Doble acceso', 'Fases', 'Ubícanos', 'Contáctanos', 'footer']}
				scrollingSpeed={600}
				onLeave={function (origin: any, destination: any, direction: any) {
					$(origin.item).removeClass('active-animation');
					$(destination.item).addClass('active-animation');
				}}
				afterRender={function () {
					fnGetAlturaHeader();
				}}
				afterResize={function () {
					fnGetAlturaHeader();
				}}
				responsiveWidth={1100}
				slidesNavigation={true}
				// credits={{enabled: false}}
				render={({ state, fullpageApi }: any) => {
					return (
						<ReactFullpage.Wrapper>
							<SectionHeader />
							<Banner sliders={sliderData} fullpageApi={fullpageApi} />
							<Fachada />
							<Atributos />
							<AreasComunes areas={areasComunesIntriga} depas={dataDepartamentosIntriga} />
							<SectionMultimedia />
							<DobleAcceso />
							<Fases />
							<Ubicanos />
							<Contact modelos={true} />
							{/* <LandingFooter line={true} /> */}
						</ReactFullpage.Wrapper>
					);
				}}
			/>
			{/* <MediaQuery query='(min-width: 770px)'></MediaQuery>
			<MediaQuery query='(max-width: 769px)'>
				<SectionHeader />
				<Banner sliders={sliderData} fullpageApi={null} />
				<Fachada />
				<Atributos />
				<AreasComunes areas={areasComunesIntriga} depas={dataDepartamentosIntriga} />
				<SectionMultimedia />
				<DobleAcceso />
				<Fases />
				<Ubicanos />
				<Contact modelos={true} />
			</MediaQuery> */}
		</WebLayout>
	);
};
