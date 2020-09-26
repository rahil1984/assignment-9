import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Paper, makeStyles, Grid, TextField } from '@material-ui/core';
import { UseForm, Form } from '../UseForm';
import DatePicker from '../Contorls/DatePicker';
import DestinationData from '../../DestinationData/DestinationData';


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(4),
        padding: theme.spacing(3)
    }

}));

const initialFieldValue = {
    id: '',
    origin: '',
    destination: '',
    from: new Date(),
    isPermanent: false,
};



const Booking = () => {
    const { placeName } = useParams();
    const classes = useStyles();
    const place = DestinationData.find(dt => dt.name === placeName);
    console.log(place.name);
    const {
        values,
        setValues,
        handleInputChange
    } = UseForm(initialFieldValue);

    return (
        <div className='container'>
            <Form>
                <Grid container>
                    <Grid item xs={6}>
                        <h1 className='header-text text-white pt-5 mt-3'>{place.name}</h1>
                        <p className='text-white mb-4'>{place.details}</p>
                        <Link class to={'/destination'} className='start-booking pt-2 mt-2'>Start Booking</Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.pageContent}>
                            <p className='text-muted'>Origin:</p>
                            <TextField
                                variant='outlined'
                                name='origin'
                                label='Origin'
                                value={values.origin}
                                onChange={handleInputChange}
                            />
                            <p className='text-muted mt-3'>Destination:</p>
                            <TextField
                                variant='outlined'
                                label='Destination'
                                name='destination'
                                value={values.destination}
                                onChange={handleInputChange}
                            />
                            <DatePicker
                                name='isPermanent'
                                label='From'
                                value={values.from}
                                onChange={handleInputChange}
                            />
                            <DatePicker
                                name='isPermanent'
                                label='To'
                                value={values.from}
                                onChange={handleInputChange}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </Form>
        </div>
    );
};

export default Booking;