import { Route, Routes } from "react-router";
import Kompetens from "./Kompetens";
// import Profil from "./Profil";
import Startsida from "./Startsida";
import KontaktSida from "./KontaktSida"
import Login from './Login';
import Minsida from "./Minsida";


const ContentContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Startsida />} />
      <Route path="/kompetens/:id" element={<Kompetens />} />
      <Route path="/profil/:id" element={<Profil/>} />
      <Route path="/kontakt" element={ <KontaktSida/>} />
      <Route path="/min-sida/:id" element={<Minsida/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
};
export default ContentContainer
