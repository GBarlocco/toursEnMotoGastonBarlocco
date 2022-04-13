import { Button, Grid, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';

const FullWidget = () => {
    return (
        <Grid>
            <Grid>
                <Box>
                    <Button
                        color='inherit'
                        size='small'
                        component={NavLink}
                        to={'/category/full'}
                        startIcon={<TwoWheelerIcon />}
                    />
                </Box>
            </Grid>
        </Grid>
    );
};
export default FullWidget;