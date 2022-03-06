import {
    AppBar,
    Toolbar,
    Typography,
    Button,
} from '@mui/material';

import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    TOURS EN MOTO
                </Typography>

                <Button color="inherit">INICIO</Button>

                <Button color="inherit">FECHAS</Button>

                <Button color="inherit">ALQUIER DE MOTOS</Button>

                <Button color="inherit">GALERIA DE FOTOS</Button>

                <CartWidget />

                <Button color="inherit">SOBRE NOSOTROS...</Button>

                <Button color="inherit">LOGIN</Button>
            </Toolbar>
        </AppBar>
    );
};
export default Navbar;
