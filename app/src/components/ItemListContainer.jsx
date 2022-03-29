import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true);
    const [travels, setTravels] = useState([]);
    const { name } = useParams();


    const notify = () => {
        toast.info("Cargando viajes, espere por favor...", { position: "bottom-right", });
    }

    useEffect(() => {

        if (!name) {
            const travelCollection = collection(db, "dataTravel");
            const document = getDocs(travelCollection);

            document
                .then(respondeAPI => setTravels(respondeAPI.docs.map(travel => travel.data())))
                .catch((err) => console.log(err))
                .finally(() => {
                    setLoading(false);
                    toast.dismiss();
                })
        }else{
            const travelCollection = collection(db, "dataTravel");
            const myFilter = query(travelCollection, where ("category", "==", name));
            const document = getDocs(myFilter);

            document
                .then(respondeAPI => setTravels(respondeAPI.docs.map(travel => travel.data())))
                .catch((err) => console.log(err))
                .finally(() => {
                    setLoading(false);
                    toast.dismiss();
                })
        }
    }, [name]);

    useEffect(()=>{
        if (loading){notify()}
    },[]);

    return (
        <>
            {loading ? null : <ItemList travels={travels} />}
        </>
    )
};
export default ItemListContainer;
