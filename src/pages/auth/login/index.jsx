import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Grid, TextField, Button } from '@mui/material';
import { PersonPin as LoginIcon } from '@mui/icons-material';

import { login } from '../../../redux/actions/authAction';

import styles from './styles.module.css';

const TITLE = 'Login | Spen-Sav';

const LoginPage = (props) => {
    const { login } = props;

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const onLogin = async () => {
        try {
            await login(email, 'SaaD The Great');

            setEmail();
            setPassword();
        } catch (err) {}
    };

    const renderIcon = () => {
        return (
            <Grid container justifyContent='center'>
                <LoginIcon className={styles.icon}/>
            </Grid>
        );
    };

    const renderInputFields = () => {
        return (
            <div className={styles.inputWrapper}>
                <TextField
                    label="Email"
                    value={email}
                    variant="outlined"
                    size='small'
                    fullWidth
                    InputLabelProps={{
                        classes: {
                            root: styles.cssLabel,
                            focused: styles.cssLabel,
                        },
                    }}
                    InputProps={{
                        classes: {
                            root: styles.notchedOutline,
                            focused: styles.notchedOutline,
                            notchedOutline: styles.notchedOutline,
                        },
                    }}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    value={password}
                    variant="outlined"
                    size='small'
                    fullWidth
                    InputLabelProps={{
                        classes: {
                            root: styles.cssLabel,
                            focused: styles.cssLabel,
                        },
                    }}
                    InputProps={{
                        classes: {
                            root: styles.notchedOutline,
                            focused: styles.notchedOutline,
                            notchedOutline: styles.notchedOutline,
                        },
                    }}
                    style={{ marginTop: '10px' }}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
        );
    };

    const renderButton = () => {
        return (
            <Grid container justifyContent='end'>
                <Button
                    // disabled={!email || !password}
                    className={styles.button}
                    onClick={onLogin}
                >
                    LOGIN
                </Button>
            </Grid>
        );
    };

    useEffect(() => {
        document.title = TITLE;
    }, []);

    return (
        <div className={`center ${styles.loginPageWrapper}`}>
            <div className={styles.loginCard}>
                {renderIcon()}
                {/* {renderInputFields()} */}
                {renderButton()}
            </div>
        </div>
    );
};

LoginPage.propTypes = {
    login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    user: state.auth.loggedInUser,
});

const mapDispatchToProps = {
    login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
