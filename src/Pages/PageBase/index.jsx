import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Container from "../../Components/Container";
import { Outlet } from "react-router-dom";

export default function PageBase(){
    return (
        <>
            <Header />
                <Container>
                    <Outlet />
                </Container>
            <Footer />
        </>
    )
}