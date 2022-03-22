import { Button } from '@mui/material';

import { NavLink } from "react-router-dom";

import LoginIcon from '@mui/icons-material/Login';

const LoginWidget = () => {
    return (
        <Button
            color="inherit"
            startIcon={<LoginIcon />}
            size="small"
            component={NavLink}
            to={"login"}
        >
        </Button>
    );
};
export default LoginWidget;