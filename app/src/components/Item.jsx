const Item = (props) => {
    return (
        <li key={props.indice}>
            Id:  {props.id},  Viaje: {props.name} , Precio: {props.price}, img: {props.pictureUrl}
        </li>
    )
};
export default Item;

