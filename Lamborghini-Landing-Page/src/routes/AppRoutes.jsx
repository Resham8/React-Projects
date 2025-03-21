import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Home from "../pages/Home";

function AppRoutes(){
return <BrowserRouter>
    <Routes>
        <Route element={<MainLayout/>}>
            <Route path="/" element={<Home/>}/>
        </Route>
    </Routes>
</BrowserRouter>
}

export default AppRoutes;