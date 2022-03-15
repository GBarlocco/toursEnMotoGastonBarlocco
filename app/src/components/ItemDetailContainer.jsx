import {
    useState,
    useEffect
} from "react";

import ItemDetail from "./ItemDetail";
import dataTravel from "../data/dataTravel"

let travelInfoAPI = dataTravel;

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);
    const [msgError, setMsgError] = useState("");

    useEffect(() => {
        const getItem = new Promise((res, rej) => {
            setTimeout(() => {
                res(travelInfoAPI);
            }, 2000);
        });

        getItem.
            then((respondeAPI) => {
                setDetail(respondeAPI);
            })
            .catch((errorAPI) => {
                setMsgError("Error al cargar los datos..." + errorAPI);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    return (
        <>
            {loading ? (<p>Cargando detalles del producto...</p>) : <ItemDetail detail={detail} />}
        </>
    )
};
export default ItemDetailContainer;
