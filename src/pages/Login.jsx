import { useState } from "react";
import { InputField } from "../components/ui/InputField.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { login } from "../services/authUsers.jsx";
import { Link } from "../components/Link.jsx";
import '../styles/Login.css'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { dispatch } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await login(email, password);
            dispatch({ type: 'LOGIN_SUCCESS', payload: { user: data.user, role: data.role } });
            if (data.role === 'institution') {
                // Redirigir al inicio de una institución
            } else if (data.role === 'person') {
                // Redirigir al inicio de una persona
            }
        } catch (error) {
            console.error('Error en el inicio de sesión', error);
        }
    };

    return (
        <div className='login-container'>
            <div className='secondary-container'>
                {/* Columna izquierda (Bienvenida) */}
                <div className='left-container'>
                    <h2 className='welcome-text'>BIENVENIDO <br />A<br /> COLLECTORD</h2>
                    <p className='description-text'>
                        CollectoRD es una iniciativa que surge para colaborar con el medio ambiente, esta
                        iniciativa permite que puedas conectar con autoridades o personas para limpiar el futuro del país.
                    </p>
                    <p className='register-text'>
                        ¿No tienes una cuenta? <br />
                        <span className='font-bold'>¡Vamos regístrate!</span>
                    </p>
                    <div className='flex -space-x-3'>
                        <Link to='/registerInstitution'>
                            <button className='register-btn'>Institución</button>
                        </Link>

                        <Link to='/registerUser'>
                            <button className='register-btn'>Persona</button>
                        </Link>
                    </div>
                </div>

                {/* Columna derecha (Formulario de inicio de sesión) */}
                <div className='right-container'>
                    <h2 className='login-text'>Iniciar Sesión</h2>
                    <form onSubmit={handleLogin} className='space-y-5'>
                        <InputField
                            style={'w-full'}
                            label='Correo electrónico'
                            type='email'
                            value={email || ''}
                            onChange={(e) => setEmail(e.target.value)}
                            floatingLabel={true}
                        />
                        <InputField
                            style={'w-full'}
                            label='Contraseña'
                            type='password'
                            value={password || ''}
                            onChange={(e) => setPassword(e.target.value)}
                            floatingLabel={true}
                        />
                        <button type='submit' className='login-btn'>
                            Inicia Sesión
                        </button>
                        <p className='text-right'>
                            <a href='/forgot-password' className='text-sm font-bold forgetPasswordText hover:underline'>
                                ¿Olvidaste tu contraseña?
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
