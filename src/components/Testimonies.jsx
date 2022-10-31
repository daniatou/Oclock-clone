import React from 'react'
import studentIlg from '../assets/cyriel-martin.jpg'

export const Testimonies = () => {
    return (
        <div className='w-full bg-secondary h-full flex justify-center selection:bg-primary selection:text-white'>
            <div className='mdx:w-[70%] mdx:p-10   '>
                <div className="title text-center tracking-widest font-bold ">
                    <h1 className=' text-2xl mdx:text-5xl my-4 '>LES ÉTUDIANTS PARLENT DE LEUR ÉCOLE</h1>
                    <h3 className='text-primary mdx:text-2xl'>MÊME NOUS, ON TROUVE QUE C’EST TROP.</h3>
                </div>
                <div className=' student-item p-9 my-8  flex flex-col items-center space-y-6 text-center'>
                    <div className="student-img w-[8rem] h-[8rem] bg-primary border-4 border-primary rounded-full overflow-hidden">
                        <img className='' src={studentIlg} alt="" />
                    </div>
                    <blockquote className=' relative'>
                        <i> Il y a une super ambiance dans ma promo ! Les discussions d’entraides sont super actives, dans la période des fêtes tout le monde envoie son petit message. Quelque part on est chez les uns et les autres dans leur intimité, on voit les sapins de Noël, on parle de nos gamins… Paradoxalement avec le format en téléprésentiel, c’est bien plus réel qu’en physique.</i>
                    </blockquote>
                    <cite className='flex flex-col space-y-2'>
                        <strong className='text-primary'>CYRIEL MARTIN
                        </strong>
                        <span>PROMO LUNAR</span>
                    </cite>
                </div>
            </div>
        </div >
    )
}
