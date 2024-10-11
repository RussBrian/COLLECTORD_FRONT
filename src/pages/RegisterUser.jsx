import { useState } from "react";
import { InputField } from "../components/ui/InputField.jsx";
import { Button } from "../components/ui/Button.jsx";
import { Link } from "../components/Link.jsx";
import '../styles/registerUser.css'

const RegisterUser = () => {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        userName: '',
        phone: '',
        email: '',
        identification: '',
        password: '',
        confirmPassword: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
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
        console.log(formData); // Aquí puedes enviar los datos al backend
    };

    return (
        <div className="flex justify-center items-center w-screen h-screen p-6 bg-gray-900 text-white">
            <div className="w-2/3 pr-4">
            {/*Progress bar */}
                <div className="w-full bg-gray-700 h-2 rounded-full mb-6">
                    <div className={`h-full bg-green-500 rounded-full`} style={{ width: `${(step / 4) * 100}%` }}></div>
                </div>

                {step > 1 && (
                    <button className="text-left text-white mb-4" onClick={prevStep}>← Volver</button>
                )}

                {step === 1 && (
                    <div>
                        <h2 className="text-xl mb-4">Paso 1: Información Personal</h2>
                        <InputField label="Nombre" name="name" value={formData.name} onChange={handleChange} />
                        <InputField label="Apellido" name="lastName" value={formData.lastName} onChange={handleChange} />
                        <InputField label="Nombre de usuario" name="userName" value={formData.userName} onChange={handleChange} />
                        <div className="flex justify-center">
                            <Button text="Siguiente" onClick={nextStep} />
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h2 className="text-xl mb-4">Paso 2: Contacto</h2>
                        <InputField label="Correo Electrónico" name="email" value={formData.email} onChange={handleChange} />
                        <InputField label="Cédula" name="identification" value={formData.identification} onChange={handleChange} />
                        <InputField label="Teléfono" name="phone" value={formData.phone} onChange={handleChange} />
                        <div className="flex justify-center">
                        {/* <Button text="Anterior" onClick={prevStep} />*/ }
                            <Button text="Siguiente" onClick={nextStep} />
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <h2 className="text-xl mb-4">Paso 3: Contraseña</h2>
                        <InputField label="Contraseña" name="password" type="password" value={formData.password} onChange={handleChange} />
                        <InputField label="Confirmar Contraseña" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} />
                        <div className="flex justify-center">
                            {/* <Button text="Anterior" onClick={prevStep} /> */}
                            <Button text="Siguiente" onClick={nextStep} />
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div>
                        <h2 className="text-xl mb-4">Paso 4: Imagen de perfil</h2>
                        <input type="file" onChange={handleImageChange} className="block w-full text-white mb-4" />
                        <div className="flex justify-center">
                            {/* <Button text="Anterior" onClick={prevStep} /> */}
                            <Button className="" text="Registrar" onClick={handleSubmit} />
                        </div>
                    </div>
                )}
                <Link to='/login'>
                <button className="mt-6 w-full bg-gray-800 py-2 text-white rounded-lg" onClick={() => setStep(1)}>
                    Volver al inicio
                </button>
                </Link>
            </div>

            <aside className="w-1/3 flex items-center justify-center aside-background">
                
            </aside>
        </div>
    );
};

export default RegisterUser;
