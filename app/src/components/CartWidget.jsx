import {
    Button,
} from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return (
        <Button
            color="inherit"
            startIcon = {<ShoppingCartIcon />}
        >
            Mis compras
        </Button>
    );
};
export default CartWidget;