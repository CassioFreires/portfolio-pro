import styles from './Resumo.module.css';
import avatar from './avatar.svg';

export default function Resumo(){
    return(
        <section className={styles.resumo} > 
           <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.containerTextResume}>
                        <h1 className='title'>Inovação e Tecnologia: Desbravando Fronteiras do Futuro</h1>
                        <p className='paragraph'>No cenário dinâmico e desafiador em que vivemos, a inovação e a tecnologia se entrelaçam como forças propulsoras, impulsionando o progresso e moldando o amanhã.</p>
                        <div>
                            <button>Developer Software</button>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <img src={avatar} alt="Imagem de perfil" title='Perfil' />
                </div>
           </div>
        </section>
    )
}