import Resumo from '../Resumo';
import Sobre from '../Sobre';
import Exp from '../Exp';
import Projetos from '../Projetos';
import Conhecimento from '../Conhecimento';

export default function Home(){
    return(
        <>
            <Resumo />
            <Sobre/>
            <Exp />
            <Projetos />
            <Conhecimento />
        </>
    )
}