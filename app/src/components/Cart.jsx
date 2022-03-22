import {
    Button,
    Card,
    CardActionArea,
    Typography,
    CardContent,
    Box,
    Grid
} from '@mui/material';

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, clear, removeItem } = useContext(CartContext);

    return (
        <>
            <Grid container>
                {
                    (cart.length <= 0 ?
                        <Grid item xl={2} lg={3} md={4} sm={6} xs={12} >
                            <Box marginTop={2} marginLeft={0}>
                                <Card sx={{ width: 240, position: "flex" }} >
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                Carrito sin contenido
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Box>
                        </Grid>
                        :
                        cart.map((travel) =>
                            <>
                                <Grid item xl={2} lg={3} md={4} sm={6} xs={12} >
                                    <Box marginTop={2} marginLeft={0}>
                                        <Card sx={{ width: 240, position: "flex" }} >
                                            <CardActionArea>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {travel.product.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        Cantidad: {travel.count}
                                                        <br />
                                                        <br />
                                                        Precio unitario: $ {travel.product.price}
                                                        <br />
                                                        <br />
                                                        TOTAL: $ {travel.product.price * travel.count}
                                                        <br />
                                                        <br />
                                                        <Button
                                                            color="error"
                                                            size="small"
                                                            variant="outlined"
                                                            onClick={() => removeItem(travel.product)}
                                                        >
                                                            Borrar item
                                                        </Button>
                                                        <br />
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Box>
                                </Grid>
                            </>
                        )
                    )
                }
            </Grid>
            <Button
                color="success"
                size="small"
                onClick={clear}
            >
                Limpiar carrito
            </Button>
        </>
    )
};
export default Cart;
