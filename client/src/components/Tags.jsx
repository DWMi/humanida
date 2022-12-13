


const Tags =(props)=>{

    return(
    
        props.tags.map((tag)=>{
        return(
        
            <div className="tagBox">
                {tag.name}
            </div>
            
        )
        })

    )
}

export default Tags