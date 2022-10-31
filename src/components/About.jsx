import React from 'react'
import slack from '../assets/slack.png'
import formateurs from '../assets/formateurs.jpg'
import satelite from '../assets/satellite.svg'

export const About = () => {
    return (
        <div className='About-container bg-secondary w-full h-full flex justify-center '>
            <div className='bg-white w-[80%]  h-full p-10 selection:bg-primary selection:text-white'>
                <div className="title text-center tracking-widest font-bold">
                    <h3 className=' text-2xl '>UNE SALLE DE CLASSE VIRTUELLE</h3>
                    <h1 className='text-primary text-5xl my-4 '>UNE ÉCOLE BIEN RÉELLE</h1>
                    <p className='my-8'>Le téléprésentiel, c’est innovant techniquement. On ne va pas se le cacher, on est plutôt fiers d’avoir perdu tous nos cheveux à développer de véritables salles de classe virtuelles. Mais quelque part, la technique n’est pas le plus important. Elle sert un objectif qui la surpasse : recréer du lien entre étudiants et formateurs.</p>
                </div>
                <div className='communaute flex flex-col-reverse mdx:flex-row '>
                    <div className='communaute_decription font-extralight text-xl mdx:w-[50%] leading-relaxed'>
                        <p >Chez O’clock, la notion de communauté est très forte. Elle est même centrale. Chaque promotion d’étudiants partage les mêmes horaires, le même programme, les mêmes joies et forcément les mêmes difficultés. C’est cette complicité nourrie d’un objectif commun qui permet l’essor d’une classe solidaire et motivée !</p>
                        <p className='py-3'>
                            Les étudiants sont constamment en contact, pendant les cours mais également après, pendant la période des challenges. Cette émulation est indispensable car elle prépare nos étudiants au quotidien du métier de développeur : s’organiser en équipe et communiquer avec ses collègues pour collaborer sur un projet.
                        </p>
                    </div>
                    <div className='communaute_img flex-none mdx:w-[50%] '>
                        <img className='w-full mb-4  mt-6 mdx:ml-[7em]' src={slack} alt="Communauté" />
                    </div>
                </div>
                <div className='pedagogie flex my-8 '>
                    <div className='pedagogie_img flex-none mdx:w-[50%] '>
                        <img className='w-full mb-4   mdx:ml-[-7em] rounded-xl' src={formateurs} alt="formateurs" />
                    </div>
                    <div className='pedagogie_decription font-extralight mt-6 text-xl mdx:w-[50%] leading-relaxed'>
                        <p >Les formateurs, quant à eux, sont focalisés sur la réussite des étudiants. Ils les ont découverts pendant le chemin vers O’ clock, accueillis et préparés à la rentrée. Ils les forment, suivent leur progression et les conseillent sur leurs futures carrières.</p>
                        <p className='py-3'>
                            En somme, les formateurs connaissent leurs étudiants, et ça change tout. Cet échange constant permet de créer un lien fort au sein de la classe. Cette complicité entre les étudiants et l’équipe pédagogique n’est pas accessoire, elle permet d’instaurer une ambiance bienveillante, nécessaire à un apprentissage fructueux. Quand on est heureux, on apprend beaucoup mieux.
                        </p>
                    </div>
                </div>
                <div className="communication text-center tracking-widest p-8 ">
                    <div className='flex justify-center my-6'>
                        <img src={satelite} alt="" />
                    </div>
                    <h3 className=' text-2xl font-bold '>POUR CE FAIRE,</h3>
                    <h3 className=' text-2xl font-bold '>TROIS CANAUX DE COMMUNICATION</h3>
                    <p className='my-8'>
                        Le Cockpit, la plateforme en ligne où s’organisent les cours. Slack, où chaque promotion d’étudiants peut parler cours, challenge ou ce qu’ils ont mangé à midi. Et enfin, Discord, qui réunit toute la communauté : anciens, actuels et futurs étudiants, mais aussi les petits curieux souhaitant se renseigner sur l’école.
                    </p>
                </div>
            </div>

        </div>
    )
}
