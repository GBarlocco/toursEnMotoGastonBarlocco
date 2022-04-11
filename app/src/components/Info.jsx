import { Card, Typography, CardMedia, CardContent, Grid, Box, Container } from '@mui/material';

const Info = () => {
    return (
        <Container component='main' maxWidth='xl'>
            <Grid>
                <Box sx={{ marginTop: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <Card sx={{ maxWidth: 800 }} >
                        <CardMedia component='img' height='350' image='./img/ruta.jpg' />
                        <CardContent>
                            <Typography gutterBottom variant='h6' color='text.secondary'> ¡VIAJA CON NOSOTROS!</Typography>
                            <Typography gutterBottom variant='body2' color='text.secondary'>
                                Somos una empresa apasionada por los viajes, ¡contamos con el mejor equipamiento!
                            </Typography>
                            <Typography gutterBottom variant='body2' color='text.secondary'>
                                Creador: Gastón Barlocco
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
            <Grid>
                <Box sx={{ marginTop: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <Card sx={{ maxWidth: 800 }} >
                        <CardMedia component='img' height='350' image='./img/paisaje1.jpg' />
                    </Card>
                </Box>
            </Grid>
            <Grid>
                <Box sx={{ marginTop: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <Card sx={{ maxWidth: 800 }} >
                        <CardMedia component='img' height='350' image='./img/paisaje2.jpg' />
                    </Card>
                </Box>
            </Grid>
            <Grid>
                <Box sx={{ marginTop: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <Card sx={{ maxWidth: 800 }} >
                        <CardMedia component='img' height='350' image='./img/paisaje3.jpg' />
                    </Card>
                </Box>
            </Grid>
            <Grid>
                <Box sx={{ marginTop: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <Card sx={{ maxWidth: 800 }} >
                        <CardMedia component='img' height='350' image='./img/paisaje4.jpg' />
                    </Card>
                </Box>
            </Grid>
            <Grid>
                <Box sx={{ marginTop: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <Card sx={{ maxWidth: 800 }} >
                        <CardMedia component='img' height='350' image='./img/motos.jpg' />
                    </Card>
                </Box>
            </Grid>
        </Container>

    );
};
export default Info;