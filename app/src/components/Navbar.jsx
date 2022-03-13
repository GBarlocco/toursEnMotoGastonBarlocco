import {
    AppBar,
    Toolbar,
    Typography,
    Button,
} from '@mui/material';

import CartWidget from './CartWidget';
import HomeWidget from './HomeWidget';
import RentalWidget from './RentalWidget';
import CalendarWidget from './CalendarWidget';
import PhotoWidget from './PhotoWidget';
import InfoWidget from './InfoWidget';
import LoginWidget from './LoginWidget';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    TOURS EN MOTO
                </Typography>
                <HomeWidget />
                <CalendarWidget />
                <RentalWidget />
                <PhotoWidget />
                <CartWidget />
                <InfoWidget />
                <LoginWidget />
            </Toolbar>
        </AppBar>
    );
};
export default Navbar;
