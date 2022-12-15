import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { makeRequest } from "../functions/makeRequest"
import Hero from "./Hero"
import RenderUserCard from "./RenderUserCard"
import './styles/kompetens.css'
import { Avatar } from '@mantine/core';


import { Card, Image, Text } from '@mantine/core';


const Kompetens = () => {
const params = useParams()
    console.log(params)
    const [user ,setUser] = useState([])
    useEffect(()=>{
        const sendReq = async ()=>{
            const response = await makeRequest(`/api/tag/getusers?id=${params.id}`, 'GET')
            setUser(response)
        }
        sendReq()
    },[])
console.log(user)
    return (
        <>



< Hero titel="JavaScript" text=""     />

<div className="landingCon">
    


      {user.length>0?<RenderUserCard user={user}  />:<p>Hittade inga personer som matchade kompetensen</p>}
     
     
                      
  
 



    

</div>
    

            
            

        </>
    )
}

export default Kompetens