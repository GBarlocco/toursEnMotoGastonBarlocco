import Item from "./Item";
import {
    Box,
    Grid
} from '@mui/material';


const ItemList = (props) => {
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Box display="flex">
                        {props.travels.map((travel) => {
                            return <Item key={travel.id} id={travel.id} name={travel.name} price={travel.price} pictureUrl={travel.pictureUrl} category={travel.category} />
                        })
                        }
                    </Box>
                </Grid>
            </Grid>
        </>
    )
};
export default ItemList;
