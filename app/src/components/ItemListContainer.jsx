import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
const miOnAdd = () =>{ console.log("se ejecuta miOnAdd")};

    return (
        <>
            <p>{props.greeting}</p>
            <ItemCount stock ={20} initial = {10} onAdd = {miOnAdd}/>
        </>
    );
};
export default ItemListContainer;
