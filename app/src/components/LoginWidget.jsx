import {
    Button,
} from '@mui/material';

import LoginIcon from '@mui/icons-material/Login';

const LoginWidget = () => {
    return (
        <Button
            color="inherit"
            startIcon = {<LoginIcon />}
            size ="small"
        >
            Login
        </Button>
    );
};
export default LoginWidget;