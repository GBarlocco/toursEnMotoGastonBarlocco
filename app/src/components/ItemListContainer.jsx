import {
    useState,
    useEffect
} from "react";

//import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

let travelInfoAPI = [
    {
        id: 1,
        name: "Mendoza",
        price: 100,
        pictureUrl: "en construcción"
    },
    {
        id: 2,
        name: "Bariloche",
        price: 200,
        pictureUrl: "en construcción"
    },
    {
        id: 3,
        name: "Merlo",
        price: 50,
        pictureUrl: "en construcción"
    },
    {
        id: 4,
        name: "Ushuaia",
        price: 5000,
        pictureUrl: "en construcción"
    }
]

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
                setTravels(travelInfoAPI);
                setMsgError("Sin error en API");

            })
            .catch((errorAPI) => {
                setMsgError("Error al cargar los datos...");

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
