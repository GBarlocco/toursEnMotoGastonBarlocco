import {
    useState,
    useEffect
} from "react";

//import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import DataTravel from "../data/DataTravel"

let travelInfoAPI = DataTravel;

const ItemListContainer = (props) => {
    //const miOnAdd = (count) => { console.log("se ejecuta miOnAdd", count) };

    const [loading, setLoading] = useState(true);
    const [travels, setTravels] = useState([]);
    const [msgError, setMsgError] = useState("");


    useEffect(() => {
        const myPromise = new Promise((res, rej) => {
            setTimeout(() => {
                res(travelInfoAPI);
            }, 2000);
        });

        myPromise.
            then((respondeAPI) => {
                setTravels(respondeAPI);
            })
            .catch((errorAPI) => {
                setMsgError("Error al cargar los datos..." + errorAPI);

            })
            .finally(() => {
                setLoading(false);
                console.log(msgError);
            });
    });

    return (
        <>
            <p>{props.greeting}</p>

            {/*<ItemCount stock ={20} initial = {10} onAdd = {miOnAdd}/>*/}

            {loading ? (<p>Cargando viajes, espere por favor...</p>) : <ItemList travels={travels} />}
        </>
    )
};
export default ItemListContainer;
