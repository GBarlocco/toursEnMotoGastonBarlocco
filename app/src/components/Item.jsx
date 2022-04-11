import { Button, Card, Typography, CardMedia, CardContent, Box, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Item = (props) => {
    return (
        <Grid item xl={2} lg={3} md={4} sm={6} xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box marginTop={2} marginLeft={0}>
                <Card sx={{ width: 240, flexDirection: 'column', alignItems: 'center' }}>
                        <CardMedia component='img' height='150' image={props.pictureUrl} alt={props.name} />
                        <CardContent>
                            <Typography gutterBottom variant='h5'> {props.name} </Typography>
                            <Typography gutterBottom variant='body2' color='text.secondary'> ID: {props.id} </Typography>
                            <Typography gutterBottom variant='body2' color='text.secondary'> Viaje: {props.name} </Typography>
                            <Typography gutterBottom variant='body2' color='text.secondary'> ${props.price} </Typography>
                            <Typography gutterBottom variant='body2' color='text.secondary'> Categoria: {props.category} </Typography>
                        </CardContent>
                    <Box>
                        <Button color='primary' size='small' component={NavLink} to={'/item/' + props.id}>
                            Ver mas...
                        </Button>
                    </Box>
                </Card>
            </Box>
        </Grid>
    );
};
export default Item;