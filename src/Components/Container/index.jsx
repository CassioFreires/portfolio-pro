import styles from './Container.module.css';

export default function Container({children}){
    return(
        <section>
            {children}
        </section>
    )
}