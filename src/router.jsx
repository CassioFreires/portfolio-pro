import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PageBase from './Pages/PageBase';
import Page404 from "./Pages/Page404";

export default function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageBase />}>
                    <Route index element={<Home />}/>
                    <Route path="*" element={<Page404 />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
