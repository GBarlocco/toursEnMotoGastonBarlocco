import { Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { cartCount } = useContext(CartContext);

    return (
        <Box>
            <Button
                color='inherit'
                startIcon={<ShoppingCartIcon />}
                size='small'
                component={NavLink}
                to={'cart'}
            >
                <Badge
                    badgeContent={cartCount}
                    color='info'
                    size='small' />
            </Button>
        </Box>
    );
};
export default CartWidget;

