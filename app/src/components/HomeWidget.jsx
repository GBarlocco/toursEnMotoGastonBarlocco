import {
    Button,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';

const HomeWidget = () => {
    return (
        <Button
            color="inherit"
            startIcon = {<HomeIcon />}
            size ="small"
        >
            Inicio
        </Button>
    );
};
export default HomeWidget;