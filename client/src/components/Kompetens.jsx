import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeRequest } from "../functions/makeRequest";
import Hero from "./Hero";
import RenderUserCard from "./RenderUserCard";
import "./styles/kompetens.css";
import { Avatar } from "@mantine/core";

import { Card, Image, Text } from "@mantine/core";

const Kompetens = () => {
  const params = useParams();
  const [user, setUser] = useState([]);
  const [title, setTitle] = useState([]);
  useEffect(() => {
    const sendReq = async () => {
      const title = await makeRequest(`/api/tag/getbyid?id=${params.id}`);
      const users = await makeRequest(
        `/api/tag/getusers?id=${params.id}`,
        "GET"
      );
      setTitle(title);
      setUser(users);
    };
    sendReq();
  }, []);

  return (
    <>
      {/*  */}
      <div className="landingCon2">
        {user.length > 0 ? (
          <>
            <div className="heroCon" style={{ flexDirection: "column" }}>
              <Hero
                titel={title.length > 0 ? title[0].name : undefined}
                text="Utvecklare som matchar kompetensen:"
              />
            </div>
            <div className="cardCon">
              <RenderUserCard user={user} />
            </div>
          </>
        ) : (
          <Hero
            titel=""
            text="Hittade inga personer som matchade kompetensen"
          />
        )}
      </div>
    </>
  );
};

export default Kompetens;
