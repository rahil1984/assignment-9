import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

const UseForm = (initialFieldValue) => {
    const [values, setValues] = useState(initialFieldValue);
    const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    error: '',
    newUser: false,
    success: false
 });
// console.log(user);
    
    const handleInputChange = e => {
        let isFieldValid = true; 
        const {name, value} = e.target;
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6;
            const passwordContainedNum = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordContainedNum;

        }
        if(isFieldValid){
           const newUserInfo = {...user};
           newUserInfo[e.target.name] = e.target.value;
           setUser(newUserInfo);
        }
        setValues({
            ...values,
            [name]:value
        })
    }
    return {
        user,
        setUser,
        values,
        setValues,
        handleInputChange
    }
};


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root ': {
            width: '80%',
            margin: theme.spacing(1),
            
        }
    }
}));
const Form = (props) => {
    const classes = useStyles();
    const {children, ...other} = props;
    return (
       <form className={classes.root} {...other}>
            {props.children}
       </form>
    );
};

export {UseForm, Form};

// This is a re-usable component for forms