import { useEffect, useState } from "react"
import { makeRequest } from "../functions/makeRequest"
import Hero from "./Hero"
import Tags from "./Tags"


const Startsida =()=>{
    const [tags ,setTags] = useState([])
    useEffect(()=>{
        const sendReq = async ()=>{
            const response = await makeRequest('/api/tag/getall', 'GET')
            setTags(response)
        }
        sendReq()
    },[])


    return(

        <>
            <Hero
                titel='Hitta utvecklare efter kompetens'
                text='Här hittar du enkelt utvecklare efter den kompetens som du söker.'
            />
            <h3> Kompetenser: </h3>
            {tags ? <Tags tags={tags}/> : undefined}
            
        </>
    )
}




export default Startsida