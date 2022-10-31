import React from 'react'
import layerCake from '../assets/layercake-webdev.png'
import layerCakeJsf from '../assets/layercake-jsfs.png'
import donut from '../assets/donuts-dwa.png'
import crepeSocle from '../assets/crepe-socle.png'



export const Formations = () => {




    return (
        <div className='formations w-full h-full bg-primary py-[6rem] text-white '>
            <div className=' mdx:hidden text-center text-white uppercase '>
                <h2 className='font-bold text-xl tracking-wide py-2'>Toutes nos formations</h2>
            </div>
            <div className='flex items-start'>
                <div className='hidden mdx:flex aside w-[12.5em]  flex-col justify-center px-1 '>
                    <button className='text-primary bg-white p-1 font-bold mb-3 rounded-none'>TOUTES NOS FORMATIONS</button>
                    <ul>
                        <li><button className='border-none py-2 text-[1em]'>Formations en continu</button></li>
                        <li><button className='border-none py-2 text-[1em]'>Formations en alternance</button></li>
                        <li><button className='border-none py-2 text-[1em]' >Formations pour les pros</button></li>
                    </ul>
                </div>
                <div className='nos-formations overflow-x-auto scrollbar scrollbar-thumb-[#ae7b00] scrollbar-track-white flex mdx:flex-wrap ml-4 pb-4 mdx:w-[80%]'>
                    <div className='formation-item bg-white max-w-[25em] shadow-2xl m-2 '>
                        <div className='flex justify-center p-2 h-[200px]'>
                            <div className=" w-[20rem] item-img">
                                <img className='w-full' src={layerCake} alt="" />
                            </div>
                            <div>
                                <h2 className='text-xl text-black font-bold'>FORMATION DEVELOPPEUR WEB </h2>
                                <h3 className='text-primary text-xl font-bold '>6 MOIS</h3>
                                <p className='text-gray-600'>Un seul objectif: devenir un développeur web professionel, diplômé et recruté</p>
                            </div>
                        </div>
                        <div className='text-center my-2 mx-4 discorver-btn'>
                            <button className='px-6 py-2 tracking-widest text-sm w-full'>DECOUVRIR</button>
                        </div>

                    </div>
                    <div className='formation-item bg-white max-w-[25em] shadow-2xl m-2 '>
                        <div className='flex justify-center p-2 h-[200px]'>
                            <div className=" w-[20rem] item-img">
                                <img className='w-full' src={layerCakeJsf} alt="" />
                            </div>
                            <div>
                                <h2 className='text-xl text-black font-bold'>Formation Développeur fullstack JS</h2>
                                <h3 className='text-primary text-xl font-bold '>6 MOIS</h3>
                                <p className='text-gray-600'>Un seul objectif: devenir un développeur web professionel, diplômé et recruté</p>
                            </div>
                        </div>
                        <div className='text-center my-2 mx-4 discorver-btn'>
                            <button className='px-6 py-2 tracking-widest text-sm w-full'>DECOUVRIR</button>
                        </div>

                    </div>
                    <div className='formation-item bg-white max-w-[25em] shadow-2xl m-2 '>
                        <div className='flex justify-center p-2 h-[200px]'>
                            <div className=" w-[20rem] item-img">
                                <img className='w-full' src={donut} alt="" />
                            </div>
                            <div>
                                <h2 className='text-xl text-black font-bold'>Formation développement web et accessibilité </h2>
                                <h3 className='text-primary text-xl font-bold '>6 MOIS</h3>
                                <p className='text-gray-600'>Un seul objectif: devenir un développeur web professionel, diplômé et recruté</p>
                            </div>
                        </div>
                        <div className='text-center my-2 mx-4 discorver-btn'>
                            <button className='px-6 py-2 tracking-widest text-sm w-full '>DECOUVRIR</button>
                        </div>

                    </div>
                    <div className='formation-item bg-white max-w-[25em] shadow-2xl m-2 '>
                        <div className='flex justify-center p-2 h-[200px]'>
                            <div className=" w-[20rem] item-img">
                                <img className='w-full' src={crepeSocle} alt="" />
                            </div>
                            <div>
                                <h2 className='text-xl text-black font-bold'>Formation Socle développement web </h2>
                                <h3 className='text-primary text-xl font-bold '>6 MOIS</h3>
                                <p className='text-gray-600'>Un seul objectif: devenir un développeur web professionel, diplômé et recruté</p>
                            </div>
                        </div>
                        <div className='text-center my-2 mx-4 discorver-btn'>
                            <button className='px-6 py-2 tracking-widest text-sm w-full '>DECOUVRIR</button>
                        </div>

                    </div>
                    <div className='formation-item bg-white max-w-[25em] shadow-2xl m-2 '>
                        <div className='flex justify-center p-2 h-[200px]'>
                            <div className=" w-[20rem] item-img">
                                <img className='w-full' src={layerCake} alt="" />
                            </div>
                            <div>
                                <h2 className='text-xl text-black font-bold'>FORMATION DEVELOPPEUR WEB </h2>
                                <h3 className='text-primary text-xl font-bold '>6 MOIS</h3>
                                <p className='text-gray-600'>Un seul objectif: devenir un développeur web professionel, diplômé et recruté</p>
                            </div>
                        </div>
                        <div className='text-center my-2 mx-4 discorver-btn'>
                            <button className='px-6 py-2 tracking-widest text-sm w-full '>DECOUVRIR</button>
                        </div>

                    </div>
                    <div className='formation-item bg-white max-w-[25em] shadow-2xl m-2 '>
                        <div className='flex justify-center p-2 h-[200px]'>
                            <div className=" w-[20rem] item-img">
                                <img className='w-full' src={layerCakeJsf} alt="" />
                            </div>
                            <div>
                                <h2 className='text-xl text-black font-bold'>Formation Développeur fullstack JS</h2>
                                <h3 className='text-primary text-xl font-bold '>6 MOIS</h3>
                                <p className='text-gray-600'>Un seul objectif: devenir un développeur web professionel, diplômé et recruté</p>
                            </div>
                        </div>
                        <div className='text-center my-2 mx-4 discorver-btn'>
                            <button className='px-6 py-2 tracking-widest text-sm  w-full'>DECOUVRIR</button>
                        </div>

                    </div>
                    <div className='formation-item bg-white max-w-[25em] shadow-2xl m-2 '>
                        <div className='flex justify-center p-2 h-[200px]'>
                            <div className=" w-[20rem] item-img">
                                <img className='w-full' src={donut} alt="" />
                            </div>
                            <div>
                                <h2 className='text-xl text-black font-bold'>Formation développement web et accessibilité </h2>
                                <h3 className='text-primary text-xl font-bold '>6 MOIS</h3>
                                <p className='text-gray-600'>Un seul objectif: devenir un développeur web professionel, diplômé et recruté</p>
                            </div>
                        </div>
                        <div className='text-center my-2 mx-4 discorver-btn'>
                            <button className='px-6 py-2 tracking-widest text-sm w-full '>DECOUVRIR</button>
                        </div>

                    </div>
                    <div className='formation-item bg-white max-w-[25em]  shadow-2xl m-2 '>
                        <div className='flex justify-center p-2 h-[200px]'>
                            <div className=" w-[20rem] item-img">
                                <img className='w-full' src={crepeSocle} alt="" />
                            </div>
                            <div>
                                <h2 className='text-xl text-black font-bold'> Formation Socle développement web </h2>
                                <h3 className='text-primary text-xl font-bold '>6 MOIS</h3>
                                <p className='text-gray-600'>Un seul objectif: devenir un développeur web professionel, diplômé et recruté</p>
                            </div>
                        </div>
                        <div className='text-center my-2 mx-4 discorver-btn '>
                            <button className='px-6 py-2 tracking-widest text-sm w-full'>DECOUVRIR</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
