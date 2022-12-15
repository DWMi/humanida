import './styles/hero.css'


const Hero =(props)=>{

    return (

        <div className="textCon">
            <h1 style={{padding:10}} >
                {props.titel}
            </h1>
            <p style={{padding:10}} > 
                {props.text}
            </p>
        </div>

    )
}

export default Hero