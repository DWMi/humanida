

import './styles/kompetens.css'
import { Avatar,Card } from '@mantine/core';
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