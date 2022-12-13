


const Hero =(props)=>{

    return (

        <div className="textCon">
            <h1 >
                {props.titel}
            </h1>
            <p> 
                {props.text}
            </p>
        </div>

    )
}

export default Hero