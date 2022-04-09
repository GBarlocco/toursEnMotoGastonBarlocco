import { Button, TextField, Box, Typography, Container } from '@mui/material';
import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const RegisterAuth = () => {
    const { registerUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const notifyError = (props) => {
        toast.error(props, { position: 'bottom-right', });
    }
    const notifySuccess = (props) => {
        toast.success(props, { position: 'bottom-right', });
    }

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(user.email, user.password);
            notifySuccess('Gracias por registrarte!');
            navigate('/');
        }
        catch (err) {
            const errorCode = err.code;
            if (errorCode == 'auth/invalid-email' || errorCode == 'auth/internal-error') { notifyError('Correo inválido'); }
            if (errorCode == 'auth/weak-password') { notifyError('la contraseña debe contar con 6 caracteres') };
            if (errorCode == 'auth/email-already-in-use') { notifyError('¡El correo ya se encuentra registrado!') };
        }
    }

    return (
        <Container component='main' maxWidth='xs'>
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
                <Typography component='h1' variant='h5'> Sign in </Typography>
                <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
                    <TextField margin='normal' required fullWidth id='email' label='Email Address' name='email' autoComplete='email' autoFocus onChange={handleChange} />
                    <TextField margin='normal' required fullWidth name='password' label='Password' type='password' id='password' autoComplete='current-password' onChange={handleChange} />
                    <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }} >
                        Registrar
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};
export default RegisterAuth;