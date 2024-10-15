import { useState } from "react";
import { InputField } from "../components/ui/InputField.jsx";
import { Button } from "../components/ui/Button.jsx";
import { Link } from "../components/Link.jsx";
import { HiArrowSmallLeft } from "react-icons/hi2";
import '../styles/registerForm.css';
import '../styles/registerInstitution.css';  



const RegisterInstitution = () => {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        institutionName: '',
        institutionID: '',
        address: '',
        phone: '',
        email: '',
        website: '',
        representative: '',
        password: '',
        confirmPassword: '',
        logo: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, logo: e.target.files[0] });
    };

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const renderBackButton = () => {
        return (
            <button className="flex text-left text-gray-300 text-xl font-bold mb-4" onClick={prevStep}>
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
                    <form>
                        <div className='flex'>
                            <h3 className='custom-step'>Paso 1-4</h3>
                            <h3 className='text-gray-500 font-bold'>Registrar Institución</h3>
                        </div>
                        <label htmlFor='institutionName' className='custom-label'>Nombre de la Institución</label>
                        <InputField style={'custom-input'} name="institutionName" value={formData.institutionName} onChange={handleChange} />
                        <label htmlFor='institutionID' className='custom-label'>RNC de la  Institución</label>
                        <InputField style={'custom-input'} name="institutionID" value={formData.institutionID} onChange={handleChange} />
                        <label htmlFor='address' className='custom-label'>Representante</label>
                        
                        <InputField style={'custom-input'} name="address" value={formData.address} onChange={handleChange} />
                        <div className='custom-message'>
                            <p>No debe iniciar con un número.</p>
                            <p>No debe tener espacios.</p>
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
                    <form>
                        <div className='flex'>
                            <h3 className='custom-step'>Paso 2-4</h3>
                            <h3 className='text-gray-500 font-bold'>Registrar Institución</h3>
                        </div>
                        {renderBackButton()}
                        <label htmlFor='email' className='custom-label'>Correo electrónico</label>
                        <InputField style={'custom-input'} name="email" value={formData.email} onChange={handleChange} />
                        <label htmlFor='phone' className='custom-label'>Teléfono</label>
                        <InputField style={'custom-input'} name="phone" value={formData.phone} onChange={handleChange} />
                        <label htmlFor='website' className='custom-label'>Dirección</label>
                        <InputField style={'custom-input'} name="website" value={formData.website} onChange={handleChange} />
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
                    <form>
                        <div className='flex'>
                            <h3 className='custom-step'>Paso 3-4</h3>
                            <h3 className='text-gray-500 font-bold'>Registrar Institución</h3>
                        </div>
                        {renderBackButton()}
                        <label htmlFor='password' className='custom-label'>Contraseña</label>
                        <InputField style={'custom-input'} name="password" type="password" value={formData.password} onChange={handleChange} />
                        <div className='custom-message'>
                            <p>La contraseña debe contener al menos:</p>
                            <p>1 letra, 8 caracteres, 1 número y 1 carácter <br/>especial (“@”,”!”,”#”,”.”)</p>
                        </div>
                        <label htmlFor='confirmPassword' className='custom-label'>Confirmar Contraseña</label>
                        <InputField style={'custom-input'} name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} />
                        <div className='custom--password-message'>
                            <p>Las contraseñas deben coincidir</p>
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
                    <form>
                        <div className='flex'>
                            <h3 className='custom-step'>Paso 4-4</h3>
                            <h3 className='text-gray-500 font-bold'>Registrar Institución</h3>
                        </div>

                        {renderBackButton()}
                        <div className='custom-image-title'>
                            <p>Logo de la Institución</p>
                        </div>
                        <div className='image-selector-container'>
                            <input className='image-input' type="file" onChange={handleImageChange} id='file-upload' />
                            <label htmlFor='file-upload' className='image-upload-label'>
                                <div className='image-preview'>
                                    <img src='https://s3-alpha-sig.figma.com/img/174f/fc64/f8ac827804aa101e61f2285c2c32962f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qlAb4MZ8jmSnMvzBkLSeDjXYidgtSOdlWTQCx50nxk69Hn3BeMW4qkt68w0A6oZWJj~SVXDvQYJoKnbbjp47q3QE4lbcYgGmqtev4aqH91hA3DkcNHEbObPEYiwSo6MAhTJkoMPyH4Mr8e0j0xDtvZUuVLrxHO~LxLglgYLtnpTg-MlWEmNo0uC719u~TM633Qa0eSETlkNyJtjjI7pCyYW6ayH1VU~axSb1li7RcnlcepIv7QKyv8Hmt6yU4Ajg4mlqGAwaVt7gzhzMiSXb31Jv8Y5myV-WKBrRMIrhlgdMbMBx5cfMeXBMFUUrRZ0g2SMcB6qhvQT0qFazS8KrEw__' alt='Logo por defecto' />
                                </div>
                            </label>
                            <div className='custom-message'>
                                <p>Puedes dar clic en el círculo para seleccionarn <br/> un logo o puedes dejar el avatar por defecto.</p>
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