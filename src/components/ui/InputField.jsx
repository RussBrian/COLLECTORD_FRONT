/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Controller } from 'react-hook-form';
import { useState } from "react";

export const InputField = ({ label, type, name, control, floatingLabel, style }) => {
    const [hasValue, setHasValue] = useState(false);
    const [hasFocus, setHasFocus] = useState(false);

    return (
        <div className='relative mb-4'>
            {floatingLabel && (
                <label
                    className={`absolute left-3 px-1 transition-all duration-200 ease-in-out font-bold text-gray-700 ${hasValue || hasFocus ? "text-xs -translate-y-2 font-bold bg-gray-200 border-l-2 border-r-2 border-bgNextStepBtn" : "text-sm top-3"
                        }`}
                >
                    {label}
                </label>
            )}
            <Controller
                control={control}
                name={name}
                render={({ field: { value, onChange } }) => {
                    // Actualiza el estado del label flotante basado en si el valor está vacío o no
                    const handleChange = (e) => {
                        onChange(e);
                        setHasValue(e.target.value.trim().length > 0);
                    };

                    // Maneja el foco en el input
                    const handleFocus = () => setHasFocus(true);
                    const handleBlur = (e) => {
                        setHasFocus(false);
                        setHasValue(e.target.value.trim().length > 0);
                    };

                    return (
                        <input
                            type={type}
                            name={name}
                            value={value || ''}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className={`shadow border-2 border-bgNextStepBtn rounded  py-3 px-3 w-full leading-tight focus:outline-none text-gray-700 ${style} ${hasValue || hasFocus && floatingLabel ? 'bg-transparent text-md font-semibold' : 'bg-white text-md'}`}
                        />
                    );
                }}
            />
        </div>
    );
};

InputField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    style: PropTypes.string,
    floatingLabel: PropTypes.bool,
};
