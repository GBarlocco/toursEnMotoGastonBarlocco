import { Button, Card, Typography, CardContent, Box, Grid, Container } from '@mui/material';
import { NavLink, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Buy = () => {
    const { idCompra } = useParams();
    const { userLog } = useContext(AuthContext);


    return (
        <Container component='main' maxWidth='xs'>
            <Grid>
                <Box
                    sx={{ marginTop: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Card sx={{ maxWidth: 500 }} >
                        <CardContent>
                            <Typography gutterBottom variant='h6' component='div'> ¡COMPRA REALIZADA CON ÉXITO!</Typography>
                            <Typography variant='body2' color='text.secondary'> ID de seguimiento: {idCompra} </Typography>
                            <Typography variant='body2' color='text.secondary'> Correo de contacto: {userLog.email}</Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
            <Grid>
                <Box
                    sx={{ marginTop: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Card>
                        <Button
                            variant='outlined'
                            color='primary'
                            size='small'
                            component={NavLink}
                            to={'/'}
                        >
                            ¡Sigue disfrutando de nuestras propuestas!
                        </Button>
                    </Card>
                </Box>
            </Grid>
        </Container>
    );
};
export default Buy;