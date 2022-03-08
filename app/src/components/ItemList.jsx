import Item from "./Item";

const ItemList = (props) => {
    return (
        <>
            <ul>
                {props.travels.map((travel, indice) => {
                    return <Item indice = {indice} id = {travel.id} name={travel.name} price={travel.price} pictureUrl = {travel.pictureUrl} />
                })
                }
            </ul>
        </>
    )
};

export default ItemList;
