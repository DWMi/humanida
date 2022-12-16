import "./styles/kompetens.css";
import { Avatar, Card } from "@mantine/core";
const RenderUserCard = (props) => {

    return (
        <>
        {props.user.map((user)=>{
            return (
            <Card
    >
      <Card.Section>
     
          <Avatar
          component="a"
          href={"/profil/"+user.ID}
          target="_blank"
          src="/"
          alt="it's me"
   />
      </Card.Section>


      <p>{user.name}</p>
            <p>{user.email}</p>
     
                      
    </Card>
 
            
            
        ) 
        })}


        </>
    )
}
export default RenderUserCard

  return (
    <>
      {props.user.map((user) => {
        return (
          <Card key={user.id} style={{ textAlign: "center" }}>
            <Card.Section>
              <Avatar
                component="a"
                href={"/profil/" + user.ID}
                src="/"
                alt="it's me"
              />
            </Card.Section>

            <p>{user.name}</p>
            <a href={`mailto:${user.email}`} style={{ paddingTop: "20px" }}>
              {user.email}
            </a>
          </Card>
        );
      })}
    </>
  );
};
export default RenderUserCard;

