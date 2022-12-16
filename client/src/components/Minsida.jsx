import { useEffect, useState } from "react";
import { makeRequest } from "../functions/makeRequest";
import Hero from "./Hero";
import Tags from "./Tags";
import "./styles/landing.css";
import { useParams } from "react-router-dom";
import RenderUserCard from "./RenderUserCard";



const Minsida = () => {
  const [notConnectedTags, setNotConnectedTags] = useState([]);
  const [connectedTags, setConnectedTags] = useState([]);
  const [selectedTag, setSelectedTags] = useState(undefined);
  const params = useParams()
  useEffect(() => {
      const sendReq = async () => {
          const responseOne = await makeRequest(`/api/tag/getnotconnected?id=${params.id}`, "GET");
          setNotConnectedTags(responseOne);
          const responseTwo = await makeRequest(`/api/user/gettags?id=${params.id}`, "GET");
          setConnectedTags(responseTwo);

    };
    sendReq();
  }, []);
  const saveTag=async()=>{
    if (selectedTag){
        console.log("hej")
        const body = JSON.stringify({
            user_ID: params.id,
            tag_ID: selectedTag
        })
        const response = await makeRequest(`/api/user/addtag`, "POST", body)
        if (response === "Taggen är tillagd på användaren"){
            location.reload()
        }
    }
  }
  console.log(selectedTag)
  return (
    <>
      <Hero titel="" text="" />
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
          Lägg till kompetens:{" "}
        </h3>
        <select onChange={(event)=>{
            setSelectedTags(event.target.value)}} id="framework">
          {notConnectedTags.length > 0
            ? notConnectedTags.map((tag) => {
                return (
                    <option key={tag.ID} value={tag.ID}>
                    {tag.name}
                  </option>
                );
            })
            : undefined}
        </select>
        <button onClick={saveTag}>Lägg till kompetens</button>
      </div>
      <div>{connectedTags.length > 0 ? <Tags tags={connectedTags} /> : undefined}</div>

    </>
  );
};

export default Minsida;
