import React, { Component } from 'react';
//@ts-ignore
import IMGFrase4 from '../../../Assets/images/fachada/frase-4.png';
//@ts-ignore
import IMGPalomasFrase1 from '../../../Assets/images/fachada/palomas-frase-1.png';

export const Fachada = () => {
	return (
		<section className='section section-fachada section-tramado' id='section-fase-5'>
			<div className='p-relative'>
				<div className='headerInvisible' id='headerInvisible' />
				<div className='contain-fachada'>
					<img className='img-bottom' src={require('../../../Assets/images/inicio/background-botton.png')} alt='icon background'></img>
					<div className='row h-100 flex-reverse'>
						<div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 h-100 d-flex justify-content-center align-items-center flex-column'>
							<div className={['frases', 'frase1', 'text-center', 'c-second', 'd-flex', 'justify-content-center', 'align-items-center'].join(' ')}>
								<div className='frases frase-palomas' style={{ backgroundImage: `url(${IMGPalomasFrase1})` }} />
								<span translate='no' className='geomanist-light title'>
									Un proyecto desarrollado por <br />
									<span className='geomanist-bold'>Cosapi Inmobiliaria y Grupo Lar</span>
								</span>
							</div>
							<div
								className={['frases', 'frase2', 'text-center', 'd-flex', 'justify-content-center', 'align-items-center', 'text-white'].join(' ')}
								style={{ backgroundImage: `url(${require('../../../Assets/images/fachada/title-content.png')})` }}
							>
								<span translate='no' className='geomanist-light title '>
									<span className='line-1'>Departamentos de</span> <br />
									<span className='geomanist-bold'>1, 2 y 3 dormitorios</span>
								</span>
							</div>
							<div className={['frases', 'frases3', 'text-center', 'c-second', 'd-flex', 'justify-content-center', 'align-items-center'].join(' ')}>
								<div className='frases frase-palomas frase-palomas-2' style={{ backgroundImage: `url(${IMGFrase4})` }} />
								<span translate='no' className='geomanist-light'>
									Vive en <span className='geomanist-bold'>Jesus María</span>, vive al
									<br /> frente del <span className='geomanist-bold'>Campo de Marte</span>
								</span>
							</div>
						</div>
						<div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 h-100 d-flex justify-content-center align-items-center contain-img-fachada'>
							<div className='img img-contain w-100 h-100 img-fachada' style={{ backgroundImage: `url(${require('../../../Assets/images/inicio/compress-render.webp')})` }} />
						</div>
					</div>
				</div>
				{/* <div className="contain-fachada" style={{backgroundImage:`url(${require("Assets/images/fachada/fachada.png")})`}}>
                    <div className="content-frases">
                        <div 
                            className={
                                [
                                    'frases',
                                    'frase1',
                                    'text-center',
                                    'c-second',
                                    'd-flex',
                                    'justify-content-center',
                                    'align-items-center'
                                ].join(' ')
                            }  
                        >
                            <div className="frases frase-palomas" style={{backgroundImage:`url(${IMGPalomasFrase1})`}} />
                            <span translate="no" 
                                className="geomanist-light"
                            >
                                Un proyecto desarrollado por <br/>
                                <span className="geomanist-bold">Cosapi Inmobiliaria y Grupo Lar</span>
                            </span>
                        </div>
                        <div 
                            className={
                                [
                                    'frases',
                                    'frase2',
                                    'text-center',
                                    'd-flex',
                                    'justify-content-center',
                                    'align-items-center',
                                    'text-white'
                                ].join(' ')
                            }
                            style={{backgroundImage:`url(${IMGFrase2})`}} 
                        >
                            <span translate="no" 
                                className="geomanist-light"
                            >
                                Departamentos de <br/>
                                <span className="geomanist-bold">2 y 3 dormitorios</span>
                            </span>
                        </div>
                        <div 
                            className={
                                [
                                    'frases',
                                    'frases3',
                                    'text-center',
                                    'c-second',
                                    'd-flex',
                                    'justify-content-center',
                                    'align-items-center'
                                ].join(' ')
                            }
                        >
                            <div className="frases frase-palomas frase-palomas-2" style={{backgroundImage:`url(${IMGFrase4})`}} />
                            <span translate="no" 
                                className="geomanist-light"
                            >
                                Vive al frente del <span className="geomanist-bold">Campo</span> <br/>
                                <span className="geomanist-bold">de Marte, </span> vive en <b>Jesus María</b>
                            </span>
                        </div>
                    </div>
                </div> */}
			</div>
		</section>
	);
};
