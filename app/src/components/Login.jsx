import { Avatar, Button, TextField, Link, Grid, Box, Typography, Container } from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const { login, loginWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const notifyError = (props) => {
        toast.error(props, { position: 'bottom-right', });
    }

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(user.email, user.password);
            navigate('/');
        }
        catch (err) {
            const errorCode = err.code;
            if (errorCode == 'auth/invalid-email' || errorCode == 'auth/internal-error') { notifyError('Correo inválido'); }
            if (errorCode == 'auth/weak-password') { notifyError('la contraseña debe contar con 6 caracteres') };
            if (errorCode == 'auth/email-already-in.use') { notifyError('¡El correo ya se encuentra registrado!') };
            if (errorCode == 'auth/wrong-password') { notifyError('¡Contraseña equivocada!, intente nuevamente') };
            if (errorCode == 'auth/too-many-requests') { notifyError('¡Intente más tarde!') };
        }
    }

    const handleGoogleLogin = async () => {
        await loginWithGoogle();
        navigate('/');
    }
    return (

        <Container component='main' maxWidth='xs'>
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    <AssignmentIndIcon />
                </Avatar>
                <Typography component='h1' variant='h5'> Sign in </Typography>
                <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField margin='normal' required fullWidth id='email' label='Email Address' name='email' autoComplete='email' autoFocus onChange={handleChange} />
                    <TextField margin='normal' required fullWidth name='password' label='Password' type='password' id='password' autoComplete='current-password' onChange={handleChange} />

                    <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }} >
                        Sign In
                    </Button>

                    <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }} component={NavLink} to={'/regAuth'} >
                        Registrar
                    </Button>

                    <Grid container>
                        <Grid item>
                            <Link href='#' variant='body2' onClick={handleGoogleLogin} >
                                {'Ingresar con google'}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};
export default Login;