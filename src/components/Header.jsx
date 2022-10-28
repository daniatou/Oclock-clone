import { React, useState } from 'react'

import { Bars3Icon } from '@heroicons/react/24/outline'
import { ArrowLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'

export const Header = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav)
    }


    return (
        <header>
            <div className='nav w-full h-[65px] bg-primary z-10 shadow-xl fixed'>
                <div className="hidden mdx:block w-full h-[65px] bg-[rgba(21,16,0,.12)] absolute"></div>
                <ul className='hidden mdx:flex justify-around items-center uppercase tracking-widest  '>
                    <li>Accueil</li>
                    <li>La Méthode</li>
                    <li> Les Formations</li>
                    <li className=' pl-8 py-1'>
                        <span className='logo' >
                            <img className='w-[60px] ' src="https://oclock.io/images/common/logo-short-cream.svg?v=66184eb7" alt="" />
                        </span>
                    </li>
                    <li>Le BLOG</li>
                    <li>ESPACE ENTREPRISES</li>
                    <li><button className='border-2 border-white px-6 py-3 rounded-full cursor-pointer'>JE M'INSCRIS</button></li>
                </ul>
                <div className='mdx:hidden w-full h-[65px] flex justify-between items-center'>
                    <div className='flex text-white'>
                        <ArrowLeftIcon className='w-4 ' />
                        <button className='border-none font-bold text-sm px-3  '>RETOUR</button>
                    </div>
                    <div className='flex flex-col text-white cursor-pointer ' onClick={handleClick}>
                        {!nav ? <div> <small className='text-[10px] pl-1 font-bold tracking-widest '>MENU</small><Bars3Icon className='w-10 ' /></div> : <XMarkIcon className='w-10' />}
                    </div>
                </div>
                <ul className={!nav ? 'hidden' : 'absolute bg-primary w-full p-3 text-center  mdx:hidden '}>
                    <li className='p-6 text-2xl uppercase tracking-widest'>Accueil</li>
                    <li className='p-6 text-2xl uppercase tracking-widest'>La Méthode</li>
                    <li className='p-6 text-2xl uppercase tracking-widest'>• Les Formations •</li>
                    <li className='p-6 text-2xl uppercase tracking-widest'>LA TEAM</li>
                    <li className='p-6 text-2xl uppercase tracking-widest'>Le BLOG</li>
                    <li className='p-6 text-2xl uppercase tracking-widest'>ESPACE ENTREPRISES</li>
                    <li><button className='border-2 border-white w-[70%] px-6 py-3 rounded-full cursor-pointer'>JE M'INSCRIS</button></li>
                </ul>

            </div>
        </header>
    )
}
