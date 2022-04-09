import { Grid } from '@mui/material';
import Item from './Item';

const ItemList = (props) => {
    return (
        <Grid container>
            {
                props.travels.map((travel) => {
                    return <Item key={travel.id} id={travel.id} name={travel.name} price={travel.price} pictureUrl={travel.pictureUrl} category={travel.category} />
                })
            }
        </Grid>
    );
};
export default ItemList;
