import React from 'react'
import logo from '../assets/logo-full.svg'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export const Footer = () => {
    return (
        <div className='footer-container bg-black text-secondary p-8 '>
            <div className='flex flex-col mdx:flex-row space-y-10 mdx:space-y-0 h-full justify-center mdx:space-x-10 mb-6 pb-6 border-b-[1px] border-secondary'>
                <ul className='px-6'>
                    <li>Rentre à la maison</li>
                    <li>Le téléprésentiel</li>
                    <li>L'équipe</li>
                    <li>Les partenaires</li>
                    <li>On écrit dees trucs</li>
                    <li>On cherche des gens</li>
                    <li>Vous cherchez des gens?</li>
                    <li>Alternance</li>
                    <li>Mentions légales</li>
                    <li>Egalité professionnel</li>
                    <li>Gestion des cookies</li>
                </ul>
                <ul className='px-6 '>
                    <li>Toutes nos formations</li>
                    <li>Formation Développeur Web</li>
                    <li>Formation Dévéloppeur Fullstack JS</li>
                    <li>Formation Socle Développement Web</li>
                    <li>Formation Socle Fullstack JS</li>
                    <li>Formation React.js</li>
                    <li>Formation Symfony</li>
                    <li>Formation Data et API</li>
                </ul>
                <div className='max-w-[25em] px-6 text-center flex flex-col'>
                    <small><i>Vous avez dévoré le site de long en large, lu chaque article deux fois, appris par coeur notre numéro de SIRET, et malgré ça, vous voulez encore du contenu ? Bon, abonnez-vous à la newsletter, on va voir ce qu’on peut faire…</i></small>
                    <form action="" className='flex my-4 justify-center'>
                        <input className='border-2 border-secondary px-6 py-2 outline-none bg-transparent  rounded-tl-full rounded-bl-full ' type="email" placeholder='Votre addresse Email' />
                        <button className='bg-secondary px-6 py-0  rounded-none rounded-tr-full rounded-br-full text-black'>Ok</button>
                    </form>
                </div>
            </div>
            <div className='flex flex-col mdx:flex-row  justify-center'>
                <div className='max-w-[20em]'>
                    <img src={logo} alt="" />
                </div>
                {/* <nav>
                    <div className='flex contact '>
                        <span>CONTACTEZ NOUS</span> <ArrowRightIcon className='w-6 contact-arrow animate-bounce ' />
                    </div>

                </nav> */}
            </div>

        </div>
    )
}
