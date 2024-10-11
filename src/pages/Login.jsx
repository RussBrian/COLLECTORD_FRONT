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
        <div className="w-screen flex justify-center items-center h-screen bg-custom bg-cover bg-center">
            <div className="flex w-4/5 max-w-screen-sm max-h-full bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Columna izquierda (Bienvenida) */}
                <div className="w-1/2 bg-gray-100 p-8 flex flex-col justify-center items-center">
                    <h2 className="text-3xl font-bold mb-4 text-center">BIENVENIDO A COLLECTORD</h2>
                    <p className="text-gray-700 text-center mb-8">
                        CollectoRD es una iniciativa que surge para colaborar con el medio ambiente, esta
                        iniciativa permite que puedas conectar con autoridades o personas para limpiar el futuro del país.
                    </p>
                    <p className="text-gray-700 text-center mb-4">
                        ¿No tienes una cuenta? <br />
                        <span className="font-bold">¡Vamos regístrate!</span>
                    </p>
                    <div className="flex space-x-4">
                        <Link to='/registerInstitution'>
                            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Institución</button>
                        </Link>

                        <Link to='/registerUser'>
                            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Persona</button>
                        </Link>
                    </div>
                </div>

                {/* Columna derecha (Formulario de inicio de sesión) */}
                <div className="w-1/2 p-8 m-5 min-w-max ">
                    <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
                    <form onSubmit={handleLogin} className="space-y-5">
                        <InputField
                            label="Correo electrónico"
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            floatingLabel={true}
                        />
                        <InputField
                            label="Contraseña"
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            floatingLabel={true}
                        />
                        <button type="submit" className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700">
                            Inicia Sesión
                        </button>
                        <p className="text-right">
                            <a href="/forgot-password" className="text-sm font-bold text-green-600 hover:underline">
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
