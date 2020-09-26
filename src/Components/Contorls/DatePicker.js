
import React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const DatePicker = (props) => {
    const { name, label } = props;
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant='inline' inputVariant='outlined'
                label={label}
                name={name}
                value={selectedDate}
                onChange={handleDateChange}
            />
        </MuiPickersUtilsProvider>
    );
};

export default DatePicker;