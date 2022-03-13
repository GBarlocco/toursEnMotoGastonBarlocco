import { toast } from "react-toastify";

const ItemDetail = (props) => {
    return (
        <>
            <p>Detalle del producto:</p>
            <p>ID:{props.detail[0].id}</p>
            <p>Viaje:{props.detail[0].name}</p>
            <p>$ {props.detail[0].price}</p>
            <p>img: {props.detail[0].pictureUrl}</p>
            <p>Descripción: {props.detail[0].description}</p>
            
            {toast.info("Contáctanos para saber mas sobre el viaje a " + props.detail[0].name, {
                position: "bottom-right",
            })}
        </>
    )
};
export default ItemDetail;