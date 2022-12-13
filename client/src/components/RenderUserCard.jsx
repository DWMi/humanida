

const RenderUserCard = (props) => {
    return (
        <>
        {props.user.map((user)=>{
            return(<p>{user.name}</p>)
        })}
        </>
    )
}
export default RenderUserCard