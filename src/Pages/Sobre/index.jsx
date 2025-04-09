import { useState, useEffect } from 'react';
import styles from './Sobre.module.css';
import avatar from './avatar.png'

import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";


export default function Sobre() {
    return (
        <section className={styles.sobre} id='sobre'>
            <div className={styles.title}>
                <h1>Sobre</h1>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.avatar_box}>
                        <img className={styles.avatar}  src={avatar} alt="Foto do avatar sobre" />
                    </div>
                    <div className={styles.icons}>
                        <a href="https://github.com/CassioFreires?tab=repositories" target='_blank' title='GitHub'><FaGithubSquare className={styles.btn} /></a>
                        <a href="https://www.instagram.com/cassildsouza/" title='Instagram' target='_blank'><FaInstagramSquare className={styles.btn} /></a>
                        <a href="https://www.linkedin.com/in/cassio-souza-08347a157/" title='Linkedin' target='_blank'><FaLinkedin className={styles.btn} /></a>
                        <a href="mailto:cassio_souza@live.com" title='E-mail' target='_blank'><MdOutlineAlternateEmail className={styles.btn} /></a>
                    </div>
                </div>
                <div className={styles.col}>
                    <p>
                        <span>Hello World!</span> <br />
                        <span>Bem-vindo ao meu mundo digital!</span> <br />
                        Meu nome é Cassio Souza, 25 anos.
                        <span> Dev FullStack. </span>
                        Formado em Análise e Desenvolvimento de Sistemas - 12/2023.
                        Venho trabalhando na área de TI há 2 anos, onde desenvolvi habilidades técnicas como produção de conteúdo e suporte N1 e N2. Além disso, sou um profissional dedicado ao aprendizado contínuo e sempre busco me atualizar com as últimas tendências e tecnologias do mercado.
                        Minha paixão por tecnologia, engenharia, física e astronomia me impulsiona a compreender o funcionamento do universo.
                        Adoro transformar ideias físicas em experiências digitais, explorando as fronteiras entre o tangível e o virtual. Navegue pelo meu portfólio para descobrir como aplico meu conhecimento e criatividade para criar soluções inovadoras e impactantes.
                    </p>
                </div>
            </div>
        </section>
    )
}