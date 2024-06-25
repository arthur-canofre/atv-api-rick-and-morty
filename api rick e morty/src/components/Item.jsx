export default function Item(props){
    return(
        <div>
            <p>{props.name}</p>
            <img src={props.image} alt={props.name} />
        </div>
    )
}