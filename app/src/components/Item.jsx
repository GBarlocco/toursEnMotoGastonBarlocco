import {
    Button,
    Card,
    CardActionArea,
    Typography,
    CardMedia,
    CardContent,
    Box,
    Grid
} from '@mui/material';

import {
    NavLink
} from "react-router-dom";

const Item = (props) => {
    return (
        <>
            <Grid item xs={12} sm={4}>
                <Box
                    marginTop={2}
                    marginLeft={4}
                >
                    <Card sx={{ maxWidth: 350, position: "flex" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="150"
                                image={props.pictureUrl}
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
                                    ${props.price}
                                    <br />
                                    Categoria: {props.category}
                                    <br />
                                </Typography>
                            </CardContent>
                            <Button
                                color="primary"
                                size="small"
                                component={NavLink}
                                to={"/item/" + props.id}
                            >
                                Ver mas...
                            </Button>
                        </CardActionArea>
                    </Card>
                </Box>
            </Grid>
            <br />
        </>
    )
};
export default Item;