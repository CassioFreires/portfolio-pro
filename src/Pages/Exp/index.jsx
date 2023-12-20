import { useState } from 'react'
import styles from './Exp.module.css'
import { useEffect } from 'react';


export default function Exp() {
    const [controllerEssia, setControllerEssia] = useState(true);
    const [controllerEasyCob, setControllerEasyCob] = useState(false);

    // controlador btn -> Essia
    const handleControllerEssia = (e) => {
        e.preventDefault();

        setControllerEasyCob(false)
        setControllerEssia(true)

    }
    // controlador btn -> Easycob
    const handleControllerEasycob = (e) => {
        e.preventDefault()

        setControllerEssia(false)
        setControllerEasyCob(true)

    }
    return (
        <section className={styles.experiencia}>
            <div className={styles.title}>
                <h1>
                    Experiências
                </h1>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <p onClick={handleControllerEssia} className={`${controllerEssia == true ? styles.border_left : ''}`}>Essia Tech</p>
                    <p onClick={handleControllerEasycob} className={`${controllerEasyCob == true ? styles.border_left : ''}`}>Easycob</p>
                </div>
                <div className={styles.col}>
                    <div className={`${controllerEssia == true ? styles.show : styles.hidden}`}>
                        <h2>Produtor de conteúdo</h2>
                        <h3>Essia - Estágio</h3>
                        <h4>fev de 2022 - set de 2022 · 8 meses</h4>
                        <p>Realizar testes de qualidade, desenvolver projetos de sequências didáticas em XML, HTML, CSS, SASS, auxiliar na arquitetura de código para desenvolvimento de estruturas de conteúdos didáticos, auxiliar nas demais atividades da área.</p>
                        <p>Competências: <span className={styles.competencias}>XML · CSS · HTML · SASS</span></p>
                    </div>
                    <div className={`${controllerEasyCob == false ? styles.hidden : styles.show}`}>
                        <h2>Service Desk</h2>
                        <h3>Easycob · Estágio</h3>
                        <h4>jun de 2021 - fev de 2022 · 9 meses</h4>
                        <p>Suporte na área de informática N1 e N2, tais como manutenção de computadores e das redes de dados, (cabos, switch, roteadores...), manutenção e configuração de sistemas telefônicos digital (VOIP), controle dos equipamentos (hardware), processo de crimpagem, implementação de sistemas, configuração de VPN, utilização de sistemas de gestão de chamados, suporte a virtualização de maquinas e servidores.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}