import {
    useState,
    useEffect
} from "react";

import {
    useParams
} from "react-router-dom";

import ItemDetail from "./ItemDetail";
import dataTravel from "../data/dataTravel"

let travelInfoAPI = dataTravel;

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [msgError, setMsgError] = useState("");

    const [idTravel, setIdTravel] = useState(0);
    const [nameTravel, setNameTravel] = useState("");
    const [priceTravel, setPriceTravel] = useState(0);
    const [pictureTravel, setPictureTravel] = useState("");
    const [descriptionTravel, setDescriptionTravel] = useState("");
    const [categoryTravel, setCategoryTravel] = useState("");
    const [participantsTravel, setParticipantsTravel] = useState(0);

    const { id } = useParams();

    useEffect(() => {
        const getItem = new Promise((res, rej) => {
            setTimeout(() => {
                res(travelInfoAPI);
            }, 2000);
        });

        getItem.
            then((respondeAPI) => {
                respondeAPI.map((travel) => {
                    if (travel.id == id) {
                        setIdTravel(travel.id);
                        setNameTravel(travel.name);
                        setPriceTravel(travel.price);
                        setPictureTravel(travel.pictureUrl);
                        setDescriptionTravel(travel.description);
                        setCategoryTravel(travel.category);
                        setParticipantsTravel(travel.participants);
                    };
                })

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
            {loading ? null :
                <ItemDetail
                    id={idTravel} 
                    name={nameTravel}
                    price = {priceTravel}
                    picture = {pictureTravel}
                    description = {descriptionTravel}
                    category = {categoryTravel}
                    participants = {participantsTravel}
                />}
        </>
    )
};
export default ItemDetailContainer;
