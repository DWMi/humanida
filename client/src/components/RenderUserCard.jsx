import "./styles/kompetens.css";
import { Avatar, Card } from "@mantine/core";
import { HiUserCircle } from "react-icons/hi2";
const RenderUserCard = (props) => {

  return (
    <>
      {props.user.map((user) => {
        return (
          <Card key={user.ID} style={{display:'flex', padding:'20px', flexDirection:'column', textAlign: "center" , justifyContent:'space-around'}}>
            <Card.Section>
              {/* <Avatar
                component="a"
                href={"/profil/" + user.ID}
                src="/"
                alt="it's me"
                
              /> */}
              <div className='avatarCon'>
                <a href={"/profil/"+ user.ID}>
                  <HiUserCircle style={{width:'80px', height:'80px', margin:'20px'}}/>  
                </a>
              </div>
            </Card.Section>
              <div>
                <h3 style={{textAlign:'center'}}>{user.name}</h3>
                <a href={`mailto:${user.email}`} style={{ paddingTop: "20px" }}>
                {user.email}
                </a>
              </div>
          </Card>
        );
      })}
    </>
  );
};
export default RenderUserCard;

