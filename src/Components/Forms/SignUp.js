import React, { useContext, useState } from 'react';
import { TextField } from '@material-ui/core';
import { UseForm, Form } from '../UseForm';
import SocialLogin from './SocialLogin';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const initialFieldValue = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    error:'',
    newUser: false
};
const SignUp = () => {
    const { value2 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value2;
    const [newUser, setNewUser] = useState(false);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/destination" } };


    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const {
        values,
        setValues,
        user,
        setUser,
        handleInputChange
    } = UseForm(initialFieldValue)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newUser && loggedInUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    const signedInUser = { name: res.user.displayName, email: user.email };
                    setLoggedInUser(signedInUser)
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setUser(newUserInfo);
                    history.replace(from);
                })
                .catch(error => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false
                    setUser(newUserInfo);
                });
        }
    }

    if(!newUser && loggedInUser && user.email && user.password){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
            const newUserInfo = { ...user }
            const signedInUser = { name: res.user.displayName, email: user.email };
            setLoggedInUser(signedInUser)
            newUserInfo.error = ''
            newUserInfo.success = true
            setUser(newUserInfo);
            history.replace(from);
        })
        .catch(error => {
            const newUserInfo = { ...user }
            newUserInfo.error = error.message;
            newUserInfo.success = false
            setUser(newUserInfo);
        });
    }
    return (
        <div className=''>
            <div className='create-account mx-auto text-center pb-5'>
            <div className="pt-3">
                    {newUser ? <h3>Create an account</h3> : <h3>Log In</h3>}
                </div>
                <Form onSubmit={handleSubmit}>
                    {
                        newUser && <TextField
                                        name='firstName'
                                        label='First Name'
                                        value={values.firstName}
                                        onChange={handleInputChange}
                                        required
                                    />
                    }
                    {
                        newUser &&  <TextField
                                        name='lastName'
                                        label='Last Name'
                                        value={values.lastName}
                                        onChange={handleInputChange}
                                        required
                                    />
                    }
                                    <TextField
                                        name='email'
                                        label='Email'
                                        value={values.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                    {
                        newUser &&  <TextField
                                        name='mobile'
                                        label='Mobile'
                                        value={values.mobile}
                                        onChange={handleInputChange}
                                    />
                    }
                                    <TextField
                                        name='password'
                                        label='Password'
                                        type='password'
                                        value={values.password}
                                        onChange={handleInputChange}
                                        required
                                    />

                    <button className='start-booking' type='submit'>Start Booking</button> <br/>

                    {
                        newUser ?
                            <> <span>Already have an account? </span>
                             <Link type="button" style={{ color: '#f9a51a' }} onClick={() => setNewUser(!newUser)}> Login</Link> </>
                            :
                            <> <span>Don't have an account?</span> <Link type="button" style={{ color: '#f9a51a' }} onClick={() => setNewUser(!newUser)}> Create an account</Link> </>
                    }
                </Form>
                <p className='text-danger'>{user.error}</p>
                <div className="d-flex justify-content-center my-2">
                <div className='line'></div>
                <span className='mt-3 mx-2'>Or</span>
                <div className='line'></div>
            </div>
            <SocialLogin />
            </div>
        </div>
    );
};

export default SignUp;