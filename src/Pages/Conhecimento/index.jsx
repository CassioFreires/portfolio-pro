import styles from './Conhecimento.module.css';
import { useState } from 'react';
import icons from './icons.json'



export default function Conhecimento() {
    const [text, setText] = useState('Passe o curso do mouse para ler a descrição do card!');

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