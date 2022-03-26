import {
    Button,
    Grid,
    Box
} from '@mui/material';

import { NavLink } from "react-router-dom";

import MopedIcon from '@mui/icons-material/Moped';

const BasicWidget = () => {
    return (
        <>
            <Grid>
                <Grid>
                    <Box>
                        <Button
                            color="inherit"
                            size="small"
                            component={NavLink}
                            to={"/category/basic"}
                            startIcon={<MopedIcon />}
                        >
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};
export default BasicWidget;