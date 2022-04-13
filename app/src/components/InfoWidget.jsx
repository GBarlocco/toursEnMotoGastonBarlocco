import { Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';

const InfoWidget = () => {
    return (
        <Box>
            <Button
                color='inherit'
                startIcon={<InfoIcon />}
                size='small'
                component={NavLink}
                to={'info'}
            />
        </Box>
    );
};
export default InfoWidget;