import { Card, CardActionArea, Typography, CardMedia, CardContent, Grid, Box, Button, Container } from '@mui/material';
import { useState, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = (props) => {
    const [buttonCart, setButtonCart] = useState(false);
    const { addItem } = useContext(CartContext);

    const miOnAdd = (count) => {
        if (count > 0) {
            setButtonCart(true);
            addItem(props, count);
        } else {
            setButtonCart(false);
        }
    };

    const notify = () => {
        toast.info('Contáctanos para saber mas sobre el viaje a ' + props.name, { position: 'bottom-right', });
    }

    useEffect(() => {
        notify();
    }, [])

    return (
        <Container component='main' maxWidth='xs'>
            <Grid>
                <Box sx={{ marginTop: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <Card sx={{ maxWidth: 500 }} >
                        <CardActionArea>
                            <CardMedia component='img' height='350' image={props.picture} alt={props.name} />
                            <CardContent>
                                <Typography gutterBottom variant='h5' component='div'> {props.name} </Typography>
                                <Typography gutterBottom variant='body2' color='text.secondary'> ID: {props.id} </Typography>
                                <Typography gutterBottom variant='body2' color='text.secondary'> Viaje: {props.name} </Typography>
                                <Typography gutterBottom variant='body2' color='text.secondary'> $ {props.price} </Typography>
                                <Typography gutterBottom variant='body2' color='text.secondary'> Descripción: {props.description} </Typography>
                                <Typography gutterBottom variant='body2' color='text.secondary'> Categoria: {props.category} </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            </Grid>
            <Grid>
                <Box sx={{ marginTop: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <Card>
                        {buttonCart ?
                            <Button
                                variant='outlined'
                                color='primary'
                                size='small'
                                component={NavLink}
                                to={'/cart'}
                            >
                                Ir al carrito
                            </Button>
                            :
                            <ItemCount participants={props.participants} initial={props.initial} onAdd={miOnAdd} />}
                    </Card>
                </Box>
            </Grid>
        </Container>
    );
};
export default ItemDetail;