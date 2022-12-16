import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Hero from './Hero'
import Tags from './Tags'
import { makeRequest } from '../functions/makeRequest'
import RenderUserCard from './RenderUserCard'



const Profil =()=>{
    const [user, setUser] = useState([])
    const [connectedTags, setConnectedTags] = useState([])
    const params = useParams()
    useEffect(()=>{
        const sendReq = async ()=>{
            const response1 = await makeRequest(`/api/user/getbyid?id=${params.id}`, 'GET')
            const response2 = await makeRequest(`/api/user/gettags?id=${params.id}`, 'GET');
            setUser(response1)
            setConnectedTags(response2)
        }
        sendReq()
    },[])
    
    return(
        <>
        <div className='proInfo' style={{display:'flex', flexDirection:'row', justifyContent:'space-around ', width:'60%', padding:'50px 60px', flexWrap:'wrap'}} >

            <Hero
                            titel={user.length > 0 ? user[0].name : undefined }
                            text={user.length > 0 ? user[0].description : undefined}
                        />
                        {user.length > 0 ? <RenderUserCard user={user} />: undefined }

        </div>
            
          
            <div className='tagCon' >            
             {connectedTags.length > 0 ? <Tags tags={connectedTags}  /> : undefined}
            </div>
             
    
        </>

    )
}

export default Profil