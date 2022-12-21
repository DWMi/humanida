import { useContext, useEffect, useState } from "react";
import { makeRequest } from "../functions/makeRequest";
import Hero from "./Hero";
import Tags from "./Tags";
import "./styles/minsida.css";
import { useParams } from "react-router-dom";
import RenderUserCard from "./RenderUserCard";
import { userContext } from "../context/userProvider";

const Minsida = () => {
  const [notConnectedTags, setNotConnectedTags] = useState([]);
  const [connectedTags, setConnectedTags] = useState([]);
  const [selectedTag, setSelectedTags] = useState(undefined);
  const { getUser } = useContext(userContext);

  const params = useParams();
  useEffect(() => {
    const sendReq = async () => {
      const responseOne = await makeRequest(
        `/api/tag/getnotconnected?id=${params.id}`,
        "GET"
      );
      setNotConnectedTags(responseOne);
      const responseTwo = await makeRequest(
        `/api/user/gettags?id=${params.id}`,
        "GET"
      );
      setConnectedTags(responseTwo);
    };
    sendReq();
  }, []);
  const saveTag = async () => {
    if (selectedTag) {
      const body = JSON.stringify({
        user_ID: params.id,
        tag_ID: selectedTag,
      });
      const response = await makeRequest(`/api/user/addtag`, "POST", body);
      if (response === "Taggen är tillagd på användaren") {
        location.reload();
      }
    }
  };
  console.log(selectedTag);
  return (
    <>
      <div className="minContainer">
        <div className="selectContainer">
          <h2>{getUser ? getUser.name : undefined}</h2>
          <h3>Lägg till kompetens: </h3>
          <div className="selectBox">
            <select
              onChange={(event) => {
                setSelectedTags(event.target.value);
              }}
              id="framework"
            >
              <option value="">Välj Ramverk</option>
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
            <button onClick={saveTag} style={{ padding: "10px" }}>
              Lägg till
            </button>
          </div>
        </div>
        <div className="tagContainer">
          {connectedTags.length > 0 ? <Tags tags={connectedTags} /> : undefined}
        </div>
      </div>
    </>
  );
};

export default Minsida;
