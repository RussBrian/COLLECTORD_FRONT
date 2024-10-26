import {useForm} from "react-hook-form";
import { InputField } from "../components/ui/InputField.jsx";
import { useAuth } from "../context/AuthContext.jsx";
//import { login } from "../services/authUsers.jsx";
import { Link, navigate} from "../components/Link.jsx";
import '../styles/Login.css'

const LoginPage = () => {

    const { control, handleSubmit } = useForm();
    const { dispatch } = useAuth();

    const handleLogin = async (data) => {
        try {
            console.log(data);
            // Simular datos de usuario con un rol fijo
            const simulatedData = { user: { email: data.email }, role: "person" }; // Cambia "person" a "institution" según el rol de prueba
    
            dispatch({ type: 'LOGIN_SUCCESS', payload: simulatedData });
    
            // Redirige según el rol fijo asignado
            if (simulatedData.role === 'institution') {
                navigate('/institutionPage');
            } else if (simulatedData.role === 'person') {
                navigate('/personPage');
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
                    <div className='flex -space-x-0'>
                        <Link to='/registerInstitution'>
                            <button className='register-btn'>Institución</button>
                        </Link>

                        <Link to='/registerUser'>
                            <button className='register-users-btn'>Persona</button>
                        </Link>
                    </div>
                </div>

                {/* Columna derecha (Formulario de inicio de sesión) */}
                <div className='right-container'>
                    <h2 className='login-text'>Iniciar Sesión</h2>
                    <form onSubmit={handleSubmit(handleLogin)} className='space-y-5'>
                        <InputField
                            control={control}
                            name='email'
                            style={'login-input'}
                            label='Correo electrónico'
                            type='email'
                            floatingLabel={true}
                        />
                        <InputField
                            control={control}
                            name='password'
                            style={'login-input'}
                            label='Contraseña'
                            type='password'
                            floatingLabel={true}
                        />
                        <p className='text-right'>
                            <Link to='/forgotPassword' className='forgetPasswordText'>
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </p>
                        <button type='submit' className='login-btn'>
                            Inicia Sesión
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
