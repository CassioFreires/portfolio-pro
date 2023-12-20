import styles from './Footer.module.css';

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <p>Copyright &copy; <span>cassiodev.com.</span> Todos os direitos reservados.</p>
        </footer>
    )
}