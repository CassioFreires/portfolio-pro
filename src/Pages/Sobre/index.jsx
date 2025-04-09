import { useState, useEffect } from 'react';
import styles from './Sobre.module.css';
import avatar from './avatar.png'

import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";


export default function Sobre() {
    return (
        <section className={styles.sobre} id='sobre'>
            <div>
                <h1 className={styles.title}>Sobre Mim</h1>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.icons}>
                        <a href="https://github.com/CassioFreires?tab=repositories" target='_blank' title='GitHub'><FaGithubSquare className={styles.btn} /></a>
                        <a href="https://www.instagram.com/cassildsouza/" title='Instagram' target='_blank'><FaInstagramSquare className={styles.btn} /></a>
                        <a href="https://www.linkedin.com/in/cassio-souza-08347a157/" title='Linkedin' target='_blank'><FaLinkedin className={styles.btn} /></a>
                        <a href="mailto:cassio_souza@live.com" title='E-mail' target='_blank'><MdOutlineAlternateEmail className={styles.btn} /></a>
                    </div>
                </div>
                <div className={styles.col}>
                    <p className={styles.paragraph}>
                        Olá! Sou Cassio L. Freires Souza, um entusiasta da tecnologia e desenvolvimento de software.
                        Com 26 anos, resido no Rio de Janeiro e sou graduado em Análise e Desenvolvimento de Sistemas pela UNESA,
                        além de estar em processo de pós-graduação em Engenharia de Software pela Descomplica Faculdade.
                        Sou apaixonado por resolver problemas através de código e em constante busca por novos desafios.
                    </p>

                    <div className={styles.contactInfo}>
                        <h2 className={styles.sectionTitle}>Informações de Contato</h2>
                        <p><strong>Telefone:</strong> <a href="tel:+5521981753423" className={styles.link}>(21) 98175-3423</a></p>
                        <p><strong>Email:</strong> <a href="mailto:cassio_souza@live.com" className={styles.link}>cassio_souza@live.com</a></p>
                        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/cassio-souza-08347a157/" className={styles.link}>LinkedIn</a> | <strong>GitHub:</strong> <a href="https://github.com/CassioFreires?tab=repositories" className={styles.link}>GitHub</a></p>
                    </div>

                    <div className={styles.skills}>
                        <h2 className={styles.sectionTitle}>Habilidades Técnicas</h2>
                        <ul className={styles.skillsList}>
                            <li>HTML, CSS, Bootstrap, Sass, Tailwind</li>
                            <li>React, Vue.js</li>
                            <li>JavaScript, TypeScript</li>
                            <li>Node.js, Express</li>
                            <li>Python, REST API</li>
                            <li>SQL Server, MySQL, MongoDB</li>
                            <li>Metodologias Ágeis (Scrum, Kanban)</li>
                        </ul>
                    </div>

                    <div className={styles.experience}>
                        <h2 className={styles.sectionTitle}>Experiência Profissional</h2>

                        <div className={styles.experienceItem}>
                            <h3 className={styles.jobTitle}>Analista de Sistemas - Ancar Ivanhoe Shopping Centers</h3>
                            <p className={styles.jobDate}><em>fev. 2024 – Atual</em></p>
                            <p className={styles.jobDescription}>
                                Responsável pela evolução e manutenção do sistema de faturamento e Salesforce CRM, implementando funcionalidades, consultas e criação de querys manutenção de banco de dados.
                                Manutenção e construção de integrações entre os sistemas da companhia(Oracle, JDE, VS, Salesforce”CQP, CONTRACT, SALES”).
                                Desenvolvimento de sistema de gerenciamento de linceça.
                                Suporte: Controle de fluxo de pedidos, gestão de fornecedor, gestão e sustentação de faturamento, auditoria de vendas, gestão de contratos e propostas de locação, manutenção e auditoria de licenças e de usuários, controle de qualidade melhorias, projetos.
                                Reporte ao usuário final, analise de KPIs, como: SLA, volume de atendimento, gestão de projetos e ITSM.

                            </p>
                        </div>

                        <div className={styles.experienceItem}>
                            <h3 className={styles.jobTitle}>Produtor de Conteúdo - Essia Teach</h3>
                            <p className={styles.jobDate}><em>fev. 2022 – Set. 2022</em></p>
                            <p className={styles.jobDescription}>
                                Desenvolvimento de estruturas de conteúdo em XML, testes de qualidade e manutenção de aplicações web com HTML, CSS, Sass e JavaScript.
                                Suporte na arquitetura e desenvolvimento de código para plataformas educacionais.
                            </p>
                        </div>

                        <div className={styles.experienceItem}>
                            <h3 className={styles.jobTitle}>Service Desk - Easycob</h3>
                            <p className={styles.jobDate}><em>jun. 2021 – Fev. 2022</em></p>
                            <p className={styles.jobDescription}>
                                Monitoramento e configuração de sistemas de rastreamento de veículos e câmeras de CFTV, além de apoio administrativo e no controle de estoque,
                                contribuindo para a eficiência operacional.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}