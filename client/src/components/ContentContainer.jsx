
import { Route, Routes } from "react-router"
import Kompetens from "./Kompetens"
import Startsida from "./Startsida"
import KontaktSida from "./Kontaktsida"
import Profil from "./Profil"
import Login from "./Login"

const ContentContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Startsida />} />
      <Route path="/kompetens/:id" element={<Kompetens />} />
      <Route path="/profil/:id" element={<Profil/>} />
      <Route path="/kontakt" element={<KontaktSida/>} />
      <Route path="/min-sida/:id" element={<h1> Min Sida </h1>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
};
export default ContentContainer
