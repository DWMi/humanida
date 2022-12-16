
import React from "react"
import Hero from "./Hero"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './styles/kontakt.css'
import Button from '@mui/material/Button';
import { useState,useEffect } from "react";
import {makeRequest} from "../functions/makeRequest"



const KontaktSida=()=>{
const [saveEmail,setSaveEmail ]= useState({
    name:"",
    email:"",
    content:"",
})
    

const sendEmail=async ()=>{
  if(
saveEmail.name.length>0 && saveEmail.email.length>0 && saveEmail.content.length >0
  )  {
    const body = JSON.stringify(saveEmail)

      const response = await makeRequest('/api/email/save', 'POST',body)
console.log(response)
  }

}

const input=(value,field)=>{
let saveEmailcopy={...saveEmail}
if (field ==="name"){
saveEmailcopy.name =value
} else if (field=== "email"){
    saveEmailcopy.email=value
}
else if (field==="content"){
    saveEmailcopy.content=value
}
setSaveEmail(saveEmailcopy)

}
console.log(saveEmail)

return (
    <>
    <Hero
        titel='Behöver du hjälp?'
        text='Kontakta oss via formuläret nedan så återkommer vi så fort som möjligt.'
    /> 


<div className="contactForm">

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 3, width: '40ch' },
      }}
  
    >
      <div>
      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-misaligned"
        label="Name"
        required
        onChange={(event)=>{input(event.target.value,"name")}}
      />
       <TextField
        helperText="Please enter your email"
        id="demo-helper-text-misaligned"
        label="Email"
        required
        onChange={(event)=>{input(event.target.value,"email")}}
              
      />
      </div>
     

      <div>
      <TextField
          id="filled-multiline-static"
          label="Meddelande"
          required
          multiline
          rows={4}
          variant="filled"
          onChange={(event)=>{input(event.target.value,"content")}}
        />
       
      </div>
      <div>
      </div>  
       <Button onClick={()=> {
        sendEmail()
       }}
       variant="contained" style={{marginLeft:'40px'}}>Button</Button>
    </Box>

  <div className="google-map-code">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2131.394472230345!2d11.99234411587445!3d57.709756846840975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff30de9cbee3d%3A0xbb3f902b63916df6!2sMedieinstitutet!5e0!3m2!1sit!2sse!4v1671187432977!5m2!1sit!2sse" width="600" height="450" style={{border:0}} allowFullScreen="" loading="Lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


        </div> 
        
        
          </div>
</>




)
}



export default KontaktSida

