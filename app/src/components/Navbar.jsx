import {
    AppBar,
    Toolbar,
} from '@mui/material';

import CartWidget from './CartWidget';
import HomeWidget from './HomeWidget';
import InfoWidget from './InfoWidget';
import BasicWidget from './BasicWidget';
import FullWidget from './FullWidget';
import LoginWidget from './LoginWidget';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <HomeWidget />
                <BasicWidget />
                <FullWidget />
                <InfoWidget />
                <CartWidget />
                <LoginWidget />
            </Toolbar>
        </AppBar>
    );
};
export default Navbar;
