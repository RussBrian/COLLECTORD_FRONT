import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputField } from "../components/ui/InputField.jsx";
import { Button } from "../components/ui/Button.jsx";
import { Link } from "../components/Link.jsx";
import { HiArrowSmallLeft } from "react-icons/hi2";
import '../styles/registerForm.css';
import '../styles/registerInstitution.css';



const RegisterInstitution = () => {
    const { control, handleSubmit } = useForm();
    const [step, setStep] = useState(1);


    /*const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, logo: e.target.files[0] });
    };*/

    const nextStep = (e) => {
        e.preventDefault();
        if (step < 4) {
            setStep(step + 1);
        }
    };

    const prevStep = (e) => {
        e.preventDefault();
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleFormSubmit = (data) => {
        console.log(data);
    };

    const renderBackButton = () => {
        return (
            <button className="back-to-login-btn" onClick={prevStep}>
                <HiArrowSmallLeft className='text-3xl' />
                Paso anterior
            </button>
        );
    };

    return (
        <div className='main-container'>
            <div className='form-container'>
                {/*Progress bar */}
                <div className='custom-progress-bar'>
                    <div className={'custom-content-bar'} style={{ width: `${(step / 4) * 100}%` }}></div>
                </div>

                {step === 1 && (
                    <form onSubmit={handleSubmit(nextStep)}>
                        <div className='flex'>
                            <h3 className='custom-step'>Paso 1-4</h3>
                            <h3 className='text-gray-500 font-bold'>Registrar Institución</h3>
                        </div>
                        <Link to='/login'>
                            <div>
                                <button className=" back-to-login-btn" onClick={prevStep}>
                                    <HiArrowSmallLeft className='text-3xl' />
                                    Login
                                </button>
                            </div>
                        </Link>
                        <label className='custom-label'>Nombre de la Institución</label>
                        <InputField control={control} name="institutionName" type="text" style={'custom-input'} />
                        <label className='custom-label'>RNC de la  Institución</label>
                        <InputField control={control} name="institutionID" type="text" style={'custom-input'} />
                        <label className='custom-label'>Representante</label>
                        <InputField control={control} name="address" type="text" style={'custom-input'} />
                        <div>
                            <p className='custom-message-required'>El campo es requerido.</p>
                        </div>
                        <div className='buttons-container'>
                            <Button className='custom-next-Btn custom-next-Btn-apparience' text="Siguiente" onClick={nextStep} />
                            <Link to='/login'>
                                <div className='return-login-btn'>
                                    <button className='return-login-btn-apparience' onClick={() => setStep(1)}>
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
                            <h3 className='custom-step'>Paso 2-4</h3>
                            <h3 className='text-gray-500 font-bold'>Registrar Institución</h3>
                        </div>
                        {renderBackButton()}
                        <label className='custom-label'>Correo electrónico</label>
                        <InputField control={control} name="email" type="email" style={'custom-input'} />
                        <label className='custom-label'>Teléfono</label>
                        <InputField control={control} name="phone" type="text" style={'custom-input'} />
                        <label className='custom-label'>Dirección</label>
                        <InputField control={control} name="webside" type="text" style={'custom-input'} />
                        <div>
                            <p className='custom-message-required'>El campo es requerido.</p>
                        </div>
                        <div className='buttons-container'>
                            <Button className='custom-next-Btn custom-next-Btn-apparience' text="Siguiente" onClick={nextStep} />
                            <Link to='/login'>
                                <div className='return-login-btn'>
                                    <button className='return-login-btn-apparience' onClick={() => setStep(1)}>
                                        Volver al inicio
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </form>
                )}

                {step === 3 && (
                    <form onSubmit={handleSubmit(nextStep)}>
                        <div className='flex'>
                            <h3 className='custom-step'>Paso 3-4</h3>
                            <h3 className='text-gray-500 font-bold'>Registrar Institución</h3>
                        </div>
                        {renderBackButton()}
                        <label className='custom-label'>Contraseña</label>
                        <InputField control={control} name="password" type="password" style={'custom-input'} />
                        <div className='custom-message'>
                            <p>La contraseña debe contener al menos:</p>
                            <p>1 letra, 8 caracteres, 1 número y 1 carácter <br />especial (“@”,”!”,”#”,”.”)</p>
                        </div>
                        <label className='custom-label'>Confirmar Contraseña</label>
                        <InputField control={control} name="confirmPassword" type="password" style={'custom-input'} />
                        <div>
                            <p className='custom-message-required'>El campo es requerido.</p>
                        </div>
                        <div className='buttons-container'>
                            <Button className='custom-next-Btn custom-next-Btn-apparience' text="Siguiente" onClick={nextStep} />
                            <Link to='/login'>
                                <div className='return-login-btn'>
                                    <button className='return-login-btn-apparience' onClick={() => setStep(1)}>
                                        Volver al inicio
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </form>
                )}

                {step === 4 && (
                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <div className='flex'>
                            <h3 className='custom-step'>Paso 4-4</h3>
                            <h3 className='text-gray-500 font-bold'>Registrar Institución</h3>
                        </div>

                        {renderBackButton()}
                        <div className='custom-image-title'>
                            <p>Logo de la Institución</p>
                        </div>
                        <div className='image-selector-container'>
                            <InputField control={control} name="image" type="file" style={'image-input'} />
                            <label htmlFor='file-upload' className='image-upload-label'>
                                <div className='image-preview'>
                                    <img src='https://s3-alpha-sig.figma.com/img/174f/fc64/f8ac827804aa101e61f2285c2c32962f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qlAb4MZ8jmSnMvzBkLSeDjXYidgtSOdlWTQCx50nxk69Hn3BeMW4qkt68w0A6oZWJj~SVXDvQYJoKnbbjp47q3QE4lbcYgGmqtev4aqH91hA3DkcNHEbObPEYiwSo6MAhTJkoMPyH4Mr8e0j0xDtvZUuVLrxHO~LxLglgYLtnpTg-MlWEmNo0uC719u~TM633Qa0eSETlkNyJtjjI7pCyYW6ayH1VU~axSb1li7RcnlcepIv7QKyv8Hmt6yU4Ajg4mlqGAwaVt7gzhzMiSXb31Jv8Y5myV-WKBrRMIrhlgdMbMBx5cfMeXBMFUUrRZ0g2SMcB6qhvQT0qFazS8KrEw__' alt='Logo por defecto' />
                                </div>
                            </label>
                            <div>
                                <p className='custom-message-image'>Puedes dar clic en el círculo para seleccionarn <br /> un logo o puedes dejar el avatar por defecto.</p>
                            </div>
                        </div>
                        <div className='buttons-container'>
                            <Button className='custom-next-Btn custom-next-Btn-apparience' text="Registrar" onClick={handleSubmit} />
                            <Link to='/login'>
                                <div className='return-login-btn'>
                                    <button className='return-login-btn-apparience' onClick={() => setStep(1)}>
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

export default RegisterInstitution;