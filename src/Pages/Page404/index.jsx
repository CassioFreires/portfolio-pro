import styles from './Page404.module.css';
import imgError404 from './img_error_404.svg';

export default function Page404(){
    return(
        <div className={styles.page404}>
            <div className={styles.page404_contentText}>
                <p>Erro 404</p>
                <p >Ops!</p> 
                <p>Não foi possível localizar a página solicitada!</p> 
                <p>Parece que a página que você está procurando foi movida ou nunca existiu, certifique-se que digitou o endereço corretamente ou seguiu um link válido.</p>
            </div>
            <div className={styles.page404_imgError404}>
                <img src={imgError404} alt="imagem de erro" />
            </div>
        </div>
    )
}