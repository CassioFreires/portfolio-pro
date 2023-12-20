import styles from './Projetos.module.css';
import Card from '../../Components/Card';
import json from './projetos.json';

export default function Projetos() {
    return (
        <section className={styles.projetos} id='projetos'>
            <div className={styles.row}>
                <div className={styles.title}>
                    <h1>Projetos</h1>
                </div>
                <div className={styles.content}>
                    {json.length > 0 ?
                        json.map((item) => {
                            return <Card
                                name={item.name}
                                description={item.description}
                                html_url={item.html_url}
                                key={item.id}
                                background={item.background}
                            />
                        })
                        :
                        <h1>Não existe nenhum projeto</h1>
                    }
                </div>
            </div>
        </section>
    )
}