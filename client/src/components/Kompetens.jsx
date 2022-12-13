import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { makeRequest } from "../functions/makeRequest"
import Hero from "./Hero"
import RenderUserCard from "./RenderUserCard"



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

    return (
        <>
        <Hero titel="Kompetens:" text="Här kommer text"/>
        {user.length>0?<RenderUserCard user={user}/>:<p>Hittade inga personer som matchade kompetensen</p>}
        </>
    )
}

export default Kompetens