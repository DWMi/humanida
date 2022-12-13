import { Route, Routes } from "react-router"


const ContentContainer =()=>{

    return(
        <Routes>
            <Route
                path="/"
                element={<h1> Start Sida </h1>}
            />
            <Route
                path="/kompetens/:id"
                element={<h1> Kompetenser </h1>}
            />
            <Route
                path="/profil/:id"
                element={<h1> Min Profil </h1>}
            />
            <Route
                path="/kontakt"
                element={<h1> Kontakta oss </h1>}
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