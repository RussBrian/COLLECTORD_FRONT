import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputField } from "../components/ui/InputField.jsx";
import { Button } from "../components/ui/Button.jsx";
import { Link } from "../components/Link.jsx";
import { HiArrowSmallLeft } from "react-icons/hi2";
import '../styles/ForgotPassword.css';


const ForgotPassword = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [step, setStep] = useState(1);

    const nextStep = () => {
        if (step < 3) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleFormSubmit = (data) => {
        console.log(data);
    };

    const renderBackButton = () => (
        <button className='back-to-login-btn' onClick={prevStep}>
            <HiArrowSmallLeft className='text-3xl' />
            Paso anterior
        </button>
    );

    return (
        <div className='main-container'>
            <div className='form-container'>

                {/* Barra de progreso */}
                <div className='custom-progress-bar'>
                    <div className='custom-content-bar' style={{ width: `${(step / 3) * 100}%` }}></div>
                </div>


                {step === 1 && (
                    <form onSubmit={handleSubmit(nextStep)}>
                        <div className='flex'>
                            <h3 className='custom-step'>Paso 1-3</h3>
                            <h3 className='text-gray-500 font-bold'>Olvidé mi contraseña</h3>
                        </div>
                        <Link to='/login'>
                            <div>
                                <button className="back-to-login-btn" onClick={prevStep}>
                                    <HiArrowSmallLeft className='text-3xl' />
                                    Login
                                </button>
                            </div>
                        </Link>
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

                        <p className='custom-message'>Ingresa el correo para recuperar tu contraseña.</p>
                        <div className='buttons-container'>
                            <Button className='custom-confirm-Btn custom-confirm-Btn-apparience' text="Enviar" />
                            <Link to='/login'>
                                <div className='return-login-btn'>
                                    <button className='return-login-btn-apparience' type='button'>
                                        Volver al inicio
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </form>
                )}

                {step === 2 && (
                    <form onSubmit={handleSubmit(nextStep)}>
                        <div className='flex'>
                            <h3 className='custom-step'>Paso 2-3</h3>
                            <h3 className='text-gray-500 font-bold'>Olvidé mi contraseña</h3>
                        </div>
                        {renderBackButton()}
                        <label className='custom-label'>Código PIN</label>
                        <InputField
                            control={control}
                            name="pin"
                            type="text"
                            style={'custom-input'}
                            rules={{ required: 'El PIN es requerido' }}
                        />
                        <p className='custom-message'>Ingresa el PIN que te hemos enviado a tu correo.</p>
                        {errors.pin && <p className='error-message'>{errors.pin.message}</p>}

                        <div className='buttons-container'>
                            <Button className='custom-confirm-Btn custom-confirm-Btn-apparience' text="Confirmar" />
                            <Link to='/login'>
                                <div className='return-login-btn'>
                                    <button className='return-login-btn-apparience' type='button'>
                                        Volver al inicio
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </form>
                )}

                {step === 3 && (
                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <div className='flex'>
                            <h3 className='custom-step'>Paso 3-3</h3>
                            <h3 className='text-gray-500 font-bold'>Olvidé mi contraseña</h3>
                        </div>
                        {renderBackButton()}
                        <label className='custom-label'>Nueva Contraseña</label>
                        <InputField
                            control={control}
                            name="password"
                            type="password"
                            style={'custom-input'}
                            rules={{
                                required: 'La contraseña es requerida',
                                minLength: {
                                    value: 8,
                                    message: 'La contraseña debe tener al menos 8 caracteres'
                                }
                            }}
                        />
                        <div className='custom-message'>
                            <p>La contraseña debe contener al menos:</p>
                            <p>1 letra, 8 caracteres, 1 número y 1 carácter <br />
                                especial (“@”,”!”,”#”,”.”)</p>
                        </div>
                        <label className='custom-label'>Confirmar Contraseña</label>
                        <InputField
                            control={control}
                            name="confirmPassword"
                            type="password"
                            style={'custom-input'}
                            rules={{
                                required: 'Confirmar contraseña es requerido',
                                validate: value => value === control.getValues("password") || 'Las contraseñas no coinciden'
                            }}
                        />
                        <div>
                            <p className='custom-message'>La contraseña debe de coincidir.</p>
                        </div>
                        <div className='buttons-container'>
                            <Link to='/login'>
                                <Button className='custom-submit-Btn custom-submit-Btn-apparience' text="Guardar" onClick={() => setStep(1)} />
                            </Link>
                            <Link to='/login'>
                                <div className='return-login-btn'>
                                    <button className='return-login-btn-apparience' type='button'>
                                        Volver al inicio
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </form>
                )}
            </div>
            <aside className="aside-background"></aside>
        </div>
    );
};

export default ForgotPassword;
