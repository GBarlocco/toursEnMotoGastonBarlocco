import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true);
    const [travels, setTravels] = useState([]);
    const { name } = useParams();

    const notify = () => {
        toast.info('Cargando viajes, espere por favor...', { position: 'bottom-right', });
    }

    const infoDB = (props) => {
        props
            .then(respondeAPI => setTravels(respondeAPI.docs.map(travel => travel.data())))
            .catch((error) => {
            })
            .finally(() => {
                setLoading(false);
                toast.dismiss();
            })
    }

    useEffect(() => {
        const travelCollection = collection(db, 'dataTravel');

        if (!name) {
            const document = getDocs(travelCollection);
            infoDB(document);
        } else {
            const myFilter = query(travelCollection, where('category', '==', name));
            const document = getDocs(myFilter);
            infoDB(document);
        }
    }, [name]);

    useEffect(() => {
        if (loading) { notify() }
    }, []);

    return (
        <>
            {loading ? null : <ItemList travels={travels} />}
        </>
    )
};
export default ItemListContainer;
