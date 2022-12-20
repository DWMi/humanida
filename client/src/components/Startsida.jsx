import { useEffect, useState } from "react";
import { makeRequest } from "../functions/makeRequest";
import Hero from "./Hero";
import Tags from "./Tags";
import "./styles/landing.css";
import { HiBriefcase, HiOutlineBriefcase } from "react-icons/hi2";

const Startsida = () => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const sendReq = async () => {
      const response = await makeRequest("/api/tag/getall", "GET");
      setTags(response);
    };
    sendReq();
  }, []);

  return (
    <>
      <div className="topCon">
        <div className="startHeroCon">
          <Hero
            titel="Hitta utvecklare efter kompetens"
            text="Här hittar du enkelt utvecklare efter den kompetens som du söker."
            animate={true}
          />
          <a
            href="/kontakt"
            style={{
              paddingLeft: "60px",
              fontSize: "22px",
              color: "black",
              cursor: "pointer",
            }}
          >
            Kontakta oss
          </a>
        </div>
      </div>
      <div className="ladningCon">
        <h3
          style={{
            display: "flex",
            alignItems: "start",
            textAlign: "start",
            width: "100%",
            padding: "30px 0px",
          }}
        >
          {" "}
          Kompetenser:{" "}
        </h3>
        <div className="tagCon">{tags ? <Tags tags={tags} /> : undefined}</div>
      </div>
    </>
  );
};

export default Startsida;
