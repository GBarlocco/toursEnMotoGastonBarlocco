import {
    Button,
} from "@mui/material";

import {
    useState,
} from "react";

const ItemCount = (props) => {
    const [counter, setCounter] = useState(props.initial);

    const uppCounter = () => {
        (counter < props.stock) ? setCounter(counter + 1) : setCounter(props.stock);
    };

    const downCounter = () => {
        (counter > 1) ? setCounter(counter - 1) : setCounter(1);
    };

    const actualValueCounter = () => {
        return(counter > 0) ? counter : setCounter(props.initial)
    };

    const addItem = () => {
        (props.stock == 0 || counter > props.stock ) ? console.log("No se ejecuta la acción") : props.onAdd(counter);
    };

    return (
        <>
            <Button
                variant="outlined"
                color="primary"
                size="small"
            >
                Stock disponible: {props.stock}
            </Button>

            <br/>
            <br/>

            <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={downCounter}
            >
                -
            </Button>

            <Button
                variant="outlined"
                color="primary"
                size="small"
            >
                {actualValueCounter()}
            </Button>

            <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={uppCounter}
            >
                +
            </Button>

            <br/>
            <br/>

            <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={addItem}
            >
                Agregar al carrito
            </Button>
        </>
    );
};

export default ItemCount;
