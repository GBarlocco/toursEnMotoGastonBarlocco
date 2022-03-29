import {Button} from '@mui/material';
import {NavLink} from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';

const InfoWidget = () => {
    return (
        <Button
            color="inherit"
            startIcon={<InfoIcon />}
            size="small"
            component={NavLink}
            to={"info"}
        >
        </Button>
    );
};
export default InfoWidget;