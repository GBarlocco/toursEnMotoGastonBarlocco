import { Button, Box, Grid } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ItemCount = (props) => {
    const [counter, setCounter] = useState(props.initial);

    const uppCounter = () => (counter < props.participants) ? setCounter(counter + 1) : setCounter(props.participants);
    const downCounter = () => (counter > 1) ? setCounter(counter - 1) : setCounter(1);
    const actualValueCounter = () => (counter > 0) ? counter : setCounter(props.initial);
    const addItem = () => (props.participants === 0 || counter > props.participants) ? notify() : props.onAdd(counter);
    const notify = () => toast.error('El viaje no se encuentra disponible', { position: 'bottom-right' });

    return (
        <Grid>
            <Box>
                <Button
                    variant='outlined'
                    color='primary'
                    size='small'
                >
                    Lugares disponibles: {props.participants}
                </Button>
            </Box>
            <Box>
                <Button
                    variant='outlined'
                    color='primary'
                    size='small'
                    onClick={downCounter}
                >
                    -
                </Button>
                <Button
                    variant='outlined'
                    color='primary'
                    size='small'
                >
                    {actualValueCounter()}
                </Button>
                <Button
                    variant='outlined'
                    color='primary'
                    size='small'
                    onClick={uppCounter}
                >
                    +
                </Button>
            </Box>
            <Box>
                <Button
                    variant='outlined'
                    color='primary'
                    size='small'
                    onClick={addItem}
                >
                    Agregar al carrito
                </Button>
            </Box>
        </Grid>
    );
};
export default ItemCount;
