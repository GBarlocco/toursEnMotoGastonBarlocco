import {
    Card,
    CardActionArea,
    Typography,
    CardMedia,
    CardContent,
    Grid,
    Box,
    Button
} from '@mui/material';

import {
    NavLink
} from "react-router-dom";

import {
    useState,
} from "react";

import {
    toast
} from "react-toastify";

import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
    const [buttonCart, setButtonCart] = useState(false);

    const miOnAdd = (count) => {
        count > 0 ? setButtonCart(true) : setButtonCart(false);
    };

    const notify = () => {
        toast.info("Contáctanos para saber mas sobre el viaje a " + props.name, { position: "bottom-right", });
    }

    return (
        <>
            <Grid container>
                <Grid>
                    <Box display="flex" marginTop={3}>
                        <Card sx={{ maxWidth: 500, marginLeft: 5 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="350"
                                    image={props.picture}
                                    alt={props.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {props.name}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        ID: {props.id}
                                        <br />
                                        Viaje: {props.name}
                                        <br />
                                        $ {props.price}
                                        <br />
                                        Descripción: {props.description}
                                        <br />
                                        Categoria: {props.category}
                                        <br />
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                </Grid>
                <Grid>
                    <Box display="flex" marginTop={3}>
                        <Card sx={{ marginLeft: 5 }}>
                            {buttonCart ?
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    size="small"
                                    component={NavLink}
                                    to={"/cart"}
                                >
                                    Ir al carrito
                                </Button>
                                :
                                <ItemCount participants={props.participants} initial={props.initial} onAdd={miOnAdd} />}
                        </Card>
                    </Box>
                </Grid>
            </Grid>
            {notify()}
        </>
    )
};
export default ItemDetail;