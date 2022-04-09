import { Button, Card, CardActionArea, Typography, CardContent, Box, Grid, CardMedia } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { addDoc, serverTimestamp, collection } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

const Cart = () => {
    const { cart, removeItem, clear, total, cartCount } = useContext(CartContext);
    const { userLog } = useContext(AuthContext);
    const navigate = useNavigate();

    const notify = (props) => {
        toast.success(`¡Gracias por realizar tu compra! tu ID de rastreo es: ${props}`, { position: 'bottom-right', });
        navigate('/buy/' + props);

    }

    const cleanCart = (props) => {
        notify(props);
        clear();
    }

    const addCart = () => {

        let userName = '';
        let userPhone = '';
        (userLog.displayName ? userName = userLog.displayName : userName = '-');
        (userLog.phoneNumber ? userPhone = userLog.phoneNumber : userPhone = '-');

        const order = {
            buyer: {
                name: userName,
                phone: userPhone,
                email: userLog.email
            },
            items: cart,
            data: serverTimestamp(),
            total: total
        }

        const orderCollection = collection(db, 'orders');
        const newOrder = addDoc(orderCollection, order);

        newOrder
            .then(respondeAPI => cleanCart(respondeAPI.id));
    }

    return (
        <>
            <Grid container>
                {
                    (cartCount <= 0 ?
                        <Grid item xl={2} lg={3} md={4} sm={6} xs={12} >
                            <Box marginTop={2} marginLeft={0}>
                                <Card sx={{ width: 600, position: 'flex' }} >
                                    <Button color='inherit' size='large' component={NavLink} to={'/'} >
                                        ¡No tienes viajes en el carrito! ¡presiona aquí para obtener uno!
                                    </Button>
                                </Card>
                            </Box>
                        </Grid>
                        :
                        cart.map((travel) =>
                            <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
                                <Box marginTop={2} marginLeft={0}>
                                    <Card sx={{ width: 240, position: 'flex' }} >
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography gutterBottom variant='h5' > {travel.product.name} </Typography>
                                                <CardMedia component='img' height='150' image={travel.product.picture} alt={travel.product.name} />
                                                <Typography variant='body2' color='text.secondary'> Cantidad: {travel.count} </Typography>
                                                <Typography variant='body2' color='text.secondary'> Precio unitario: $ {travel.product.price}</Typography>
                                                <Typography variant='body2' color='text.secondary'> TOTAL: $ {travel.product.price * travel.count} </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <Box>
                                            <Button color='error' size='small' variant='outlined' onClick={() => removeItem(travel.product, travel.count)}>
                                                Borrar item
                                            </Button>
                                        </Box>
                                    </Card>
                                </Box>
                            </Grid>
                        )
                    )
                }
            </Grid>
            <Grid container>
                {
                    (cartCount > 0 ?
                        <Grid item xl={2} lg={3} md={4} sm={6} xs={12} >
                            <Box marginTop={2} marginLeft={0}>
                                <Card sx={{ width: 240, position: 'flex' }} >
                                    <CardActionArea>
                                        <Typography gutterBottom variant='h6' > Resumen de compra: </Typography>
                                        <Typography variant='body2' color='text.secondary'> Cantidad de viajes: {cartCount} </Typography>
                                        <Typography variant='body2' color='text.secondary'> Total: ${total}  </Typography>
                                    </CardActionArea>
                                    <Box>
                                        <Button color='success' size='small' onClick={clear}>
                                            Limpiar carrito
                                        </Button>
                                    </Box>
                                    {
                                        userLog ?
                                            <Box>
                                                <Button color='info' size='small' onClick={addCart}>
                                                    Finalizar compra
                                                </Button>
                                            </Box>
                                            :
                                            <Button color='info' size='small' component={NavLink} to={'/Login'} >
                                                Estás a un click de cumplir tus sueños!
                                            </Button>
                                    }
                                </Card>
                            </Box>
                        </Grid>
                        :
                        null
                    )
                }
            </Grid>
        </>
    );
};
export default Cart;
