import {
    Button,
} from '@mui/material';

import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const InfoWidget = () => {
    return (
        <Button
            color="inherit"
            startIcon = {<AssignmentIndIcon />}
            size ="small"
        >
            Sobre nosotros...
        </Button>
    );
};
export default InfoWidget;