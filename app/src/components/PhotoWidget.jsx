import {
    Button,
} from '@mui/material';

import PhotoIcon from '@mui/icons-material/Photo';

const PhotoWidget = () => {
    return (
        <Button
            color="inherit"
            startIcon = {<PhotoIcon />}
            size ="small"
        >
            Galeria de fotos
        </Button>
    );
};
export default PhotoWidget;