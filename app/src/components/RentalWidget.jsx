import {
    Button,
} from '@mui/material';

import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';

const RentalWidget = () => {
    return (
        <Button
            color="inherit"
            startIcon = {<TwoWheelerIcon />}
            size ="small"
        >
            Alquier de motos
        </Button>
    );
};
export default RentalWidget;