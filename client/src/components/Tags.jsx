


const Tags =(props)=>{

    return(
       props.tags.map((tag)=>{
        return(
            <div>
                {tag.name}
            </div>
        )
       })
    )
}

export default Tags