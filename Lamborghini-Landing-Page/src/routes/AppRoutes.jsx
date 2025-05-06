import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Home from "../pages/Home";
import Beyond from "../pages/Beyond";

function AppRoutes(){
return <BrowserRouter>
    <Routes>
        <Route element={<MainLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/beyond" element={<Beyond/>}/>
        </Route>
    </Routes>
</BrowserRouter>
}

export default AppRoutes;