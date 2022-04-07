import { AppBar, Toolbar, Typography } from '@mui/material';

import CartWidget from './CartWidget';
import HomeWidget from './HomeWidget';
import InfoWidget from './InfoWidget';
import BasicWidget from './BasicWidget';
import FullWidget from './FullWidget';
import LoginWidget from './LoginWidget';
import LogoutWidget from './LogoutWidget';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { userLog } = useContext(AuthContext);
    return (
        <AppBar position="static">
            <Toolbar>
                <HomeWidget />
                <Typography gutterBottom variant="caption"> {userLog ? `¡Bienvenido! ${userLog.email}` : null} </Typography>
                <BasicWidget />
                <FullWidget />
                <InfoWidget />
                <CartWidget />
                {userLog ? <LogoutWidget /> : <LoginWidget />}
            </Toolbar>
        </AppBar>
    );
};
export default Navbar;