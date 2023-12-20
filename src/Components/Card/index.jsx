import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card({name, description, html_url, background}) {
    return(
        <article className={styles.card} style={{border: `2px solid ${background}`}}>
            <div className={styles.row}>
                <div className={styles.contentText}>
                    <h2>{name}</h2>
                    <span>{description}</span>
                </div>
                <div className={styles.contentBtn}>
                    <a href={html_url} target='_blank'>Visualizar projeto</a>
                </div>
            </div>
        </article>
    )
} 