import {
    Button,
    Grid,
    Box
} from '@mui/material';

import {
    NavLink
} from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';

const HomeWidget = () => {
    return (
        <>
            <Grid container spacing={0}>
                <Grid>
                    <Box>
                        <Button
                            color="inherit"
                            startIcon={<HomeIcon />}
                            size="large"
                            component={NavLink}
                            to={"/"}
                            sx={{ flexGrow: 1 }}
                        >
                            Tours en moto
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};
export default HomeWidget;