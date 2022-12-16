import { Route, Routes } from "react-router"
import Kompetens from "./Kompetens"
import Startsida from "./Startsida"
import KontaktSida from "./KontaktSida"

const ContentContainer =()=>{

    return(
        <Routes>
            <Route
                path="/"
                element={<Startsida/>}
            />
            <Route
                path="/kompetens/:id"
                element={<Kompetens/>}
            />
            <Route
                path="/profil/:id"
                element={<h1> Min Profil </h1>}
            />
            <Route
                path="/kontakt"
                element={< KontaktSida />}
            />
            <Route
                path="/min-sida/:id"
                element={<h1> Min Sida </h1>}
            />
            <Route
                path="/login"
                element={<h1> Login </h1>}
            />
        </Routes>
    )
}

export default ContentContainer