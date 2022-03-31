import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { db } from "../firebase/firebase";

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [idTravel, setIdTravel] = useState("");
    const [nameTravel, setNameTravel] = useState("");
    const [priceTravel, setPriceTravel] = useState(0);
    const [pictureTravel, setPictureTravel] = useState("");
    const [descriptionTravel, setDescriptionTravel] = useState("");
    const [categoryTravel, setCategoryTravel] = useState("");
    const [participantsTravel, setParticipantsTravel] = useState(0);
    const [initialTravel, setInitialTravel] = useState(0);

    const { id } = useParams();

    useEffect(() => {
        const travelCollection = collection(db, "dataTravel");
        const myFilter = query(travelCollection, where("id", "==", id));
        const document = getDocs(myFilter);

        document
            .then((respondeAPI) => {
                const travel = respondeAPI.docs.map(t => ((t.data())));

                setIdTravel(travel[0].id);
                setNameTravel(travel[0].name);
                setPriceTravel(travel[0].price);
                setPictureTravel(travel[0].pictureUrl);
                setDescriptionTravel(travel[0].description);
                setCategoryTravel(travel[0].category);
                setParticipantsTravel(travel[0].participants);
                setInitialTravel(travel[0].initial);
            })
            .catch((error) => {
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
                    price={priceTravel}
                    picture={pictureTravel}
                    description={descriptionTravel}
                    category={categoryTravel}
                    participants={participantsTravel}
                    initial={initialTravel}
                />}
        </>
    )
};
export default ItemDetailContainer;
