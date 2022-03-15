import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import dataTravel from "../data/dataTravel"
import ItemCount from "./ItemCount";
import {
    Card,
    CardActionArea,
    Typography,
    CardMedia,
    CardContent,
    Grid,
    Box
} from '@mui/material';


const ItemDetail = () => {
    let travelInfoAPI = dataTravel;
    const { id } = useParams();
    const miOnAdd = (count) => { };

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
                                    image={travelInfoAPI[id - 1].pictureUrl}
                                    alt={travelInfoAPI[id - 1].name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {travelInfoAPI[id - 1].name}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        ID: {travelInfoAPI[id - 1].id}
                                        <br />
                                        Viaje: {travelInfoAPI[id - 1].name}
                                        <br />
                                        $ {travelInfoAPI[id - 1].price}
                                        <br />
                                        Descripción: {travelInfoAPI[id - 1].description}
                                        <br />
                                        Categoria: {travelInfoAPI[id - 1].category}
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
                            {<ItemCount participants={travelInfoAPI[id - 1].participants} initial={10} onAdd={miOnAdd} />}
                        </Card>
                    </Box>
                </Grid>
                
            </Grid>
            {toast.info("Contáctanos para saber mas sobre el viaje a " + travelInfoAPI[id - 1].name, { position: "bottom-right", })}
        </>
    )
};
export default ItemDetail;