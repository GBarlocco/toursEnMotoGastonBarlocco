import {
    useState,
    useEffect
} from "react";

import {
    useParams
} from "react-router-dom";

import {
    toast
} from "react-toastify";

import ItemList from "./ItemList";
import dataTravel from "../data/dataTravel"

let travelInfoAPI = dataTravel;

const ItemListContainer = (props) => {
    const [loading, setLoading] = useState(true);
    const [travels, setTravels] = useState([]);
    const [msgError, setMsgError] = useState("");
    const { name } = useParams();
    const travelFilter = [];

    const notify = () => {
        toast.info("Cargando viajes, espere por favor...", { position: "bottom-right", });
    }

    useEffect(() => {
        const getItemList = new Promise((res, rej) => {
            setTimeout(() => {
                travelInfoAPI.map((travel) => {
                    if (name != undefined) {
                        if (travel.category == name) {
                            travelFilter.push(travel);
                        }
                    } else {
                        travelFilter.push(travel)
                    }
                })
                res(travelFilter);
            }, 2000);
        });

        getItemList.
            then((respondeAPI) => {
                setTravels(respondeAPI);
            })
            .catch((errorAPI) => {
                setMsgError("Error al cargar los datos..." + errorAPI);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [name]);
    return (
        <>
            {loading ? (notify()) : <ItemList travels={travels} />}
        </>
    )
};
export default ItemListContainer;
