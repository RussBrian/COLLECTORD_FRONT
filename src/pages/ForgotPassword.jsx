import { useForm } from "react-hook-form";
import { InputField } from "../components/ui/InputField.jsx";
import { Button } from "../components/ui/Button.jsx";
import { Link } from "../components/Link.jsx";
import { HiArrowSmallLeft } from "react-icons/hi2";
import '../styles/registerForm.css';
import '../styles/registerUser.css';

const ForgotPassword = () => {
    const { control, handleSubmit } = useForm();

    const handleFormSubmit = (data) => {
        console.log("Datos del formulario:", data);
        
    };

    return (
        <div className='main-container'>
            <div className='form-container'>
                <h3 className='text-gray-500 font-bold'>Olvidé mi contraseña</h3>

                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <label className='custom-label'>Correo electrónico</label>
                    <InputField 
                        control={control} 
                        name="email" 
                        type="email" 
                        style={'custom-input'} 
                        rules={{ 
                            required: 'El correo es requerido', 
                            pattern: { 
                                value: /^\S+@\S+\.\S+$/, 
                                message: 'Correo no válido' 
                            }
                        }}
                    />
                    
                    <div>
                        <p className='custom-message-required'>Ingresa el correo para recuperar tu contraseña.</p>
                    </div>

                    <div className='buttons-container'>
                        <Button className='custom-next-Btn custom-next-Btn-apparience' text="Enviar" />
                        
                        <Link to='/login'>
                                <div className='return-login-btn'>
                                    <button className='return-login-btn-apparience' onClick={() => setStep(1)}>
                                        Volver al inicio
                                    </button>
                                </div>
                        </Link>
                    </div>
                </form>
            </div>
            <aside className="aside-background"></aside>
        </div>
    );
};

export default ForgotPassword;
