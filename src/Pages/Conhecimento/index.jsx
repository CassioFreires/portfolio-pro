import styles from './Conhecimento.module.css';
import { useState } from 'react';



export default function Conhecimento() {
    const [text, setText] = useState('Passe o curso do mouse para ler a descrição do card!');
    const [icons, setIcons] = useState([
        {
            "id": 1,
            "path": "/images/html.svg",
            "text": "HTML é uma linguagem de marcação utilizada na construção de páginas na Web."
        },
        {
            "id": 2,
            "path": "/public/images/css.svg",
            "text": "Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>."
        },
        {
            "id": 3,
            "path": "public/images/js.svg",
            "text": "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web."
        },
        {
            "id": 4,
            "path": "/public/images/react.svg",
            "text": "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
        },
        {
            "id": 5,
            "path": "/public/images/sass.svg",
            "text": "Sass é uma linguagem de folhas de estilo concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum."
        },
        {
            "id": 6,
            "path": "/public/images/bootstrap.svg",
            "text": "Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo."
        },
        {
            "id": 7,
            "path": "/public/images/nodejs.svg",
            "text": "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. "
        },
        {
            "id": 8,
            "path": "/public/images/bd.svg",
            "text": "Bancos de dados ou bases de dados são conjuntos de arquivos relacionados entre si, podendo conter registros sobre pessoas, lugares ou informações em geral. São coleções organizadas de dados que se relacionam ou não, de forma a armazenar informações."
        },
        {
            "id": 9,
            "path": "/public/images/api.svg",
            "text": "As APIs são usadas para integrar novas aplicações com sistemas de software existentes."
        }
    ])

    const handleMouseMove = (text) => {
        setText(text)
    }

    return (
        <section className={styles.conhecimento} onMouseOut={() => setText('Passe o curso do mouse para ler a descrição do card!')}>
            <div className={styles.title}>
                <h1>Habilidades</h1>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <p>{text}</p>
                </div>
                <div className={styles.col}>
                    <div>
                        {
                            icons.map((item) => { return <img src={`${item.path}`} key={item.id} onMouseMove={() => handleMouseMove(item.text)} /> })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}