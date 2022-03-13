import {
    Button,
} from '@mui/material';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const CalendarWidget = () => {
    return (
        <Button
            color="inherit"
            startIcon = {<CalendarMonthIcon />}
            size ="small"
        >
            Fechas
        </Button>
    );
};
export default CalendarWidget;