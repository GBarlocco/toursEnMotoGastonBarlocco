import {Button} from '@mui/material';

import {NavLink} from "react-router-dom";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return (
        <Button
            color="inherit"
            startIcon={<ShoppingCartIcon />}
            size="small"
            component={NavLink}
            to={"cart"}
        >
        </Button>
    );
};
export default CartWidget;