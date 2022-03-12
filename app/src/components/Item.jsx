const Item = (props) => {
    return (
        <li key={props.id}>
            Id:  {props.id},  Viaje: {props.name} , ${props.price}, img: {props.pictureUrl}
        </li>
    )
};
export default Item;