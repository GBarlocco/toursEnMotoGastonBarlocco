import Item from "./Item";

const ItemList = (props) => {
    return (
        <>
            <ul>
                {props.travels.map((travel) => {
                    return <Item key={travel.id} id={travel.id} name={travel.name} price={travel.price} pictureUrl={travel.pictureUrl} />
                })
                }
            </ul>
        </>
    )
};
export default ItemList;
