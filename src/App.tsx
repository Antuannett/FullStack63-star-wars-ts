import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {navItems} from "./utils/constants.ts";
import {SWContext} from "./utils/context.ts";
import {Route, Routes} from "react-router";

function App() {
    const [page, setPage] = useState(navItems[0]);

    return (
        <div className={'mx-2'}>
            <SWContext value={{page, changePage: setPage}}>
                <Routes>
                    {[`*` , `/${navItems[1]}/:heroId`].map(path =><Route key={path} path={path} element={<Header/>}/>)}
                </Routes>
                <Main/>
                <Footer/>
            </SWContext>
        </div>
    )
}

export default App