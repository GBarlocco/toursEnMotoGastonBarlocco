import { Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';

const LoginWidget = () => {
    return (
        <Box>
            <Button color='inherit' startIcon={<LoginIcon />} size='small' component={NavLink} to={'login'} />
        </Box>
    );
};
export default LoginWidget;