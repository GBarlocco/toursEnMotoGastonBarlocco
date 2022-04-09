import { Button, Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import { useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';

const LogoutWidget = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const notifySuccess = (props) => {
        toast.success(props, { position: "bottom-right", });
    }

    const handleLogout = async () =>{
        navigate("/");
        await logOut();
        notifySuccess ("¡Gracias por utilizar nuestra app!");
    }

    return (
        <Box>
            <Button
                color="inherit"
                startIcon={<LogoutIcon />}
                size="small"
                onClick = {handleLogout}
            >
            </Button>
        </Box>
    );
};
export default LogoutWidget;