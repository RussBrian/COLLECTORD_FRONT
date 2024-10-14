import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const InputField = ({ label, type, name, value, onChange, floatingLabel, style }) => {

    const [hasValue, setHasValue] = useState(false)

    useEffect(() => {
        setHasValue(value && value.trim().length > 0);

    }, [value]);

    return (
        <div className='relative mb-4'>
            {floatingLabel && (
                <label
                    className={`absolute left-1.5 top-2 text-gray-500 font-semibold transition-all duration-200 ease-in-out ${hasValue ? "text-sm -translate-y-2" : "text-sm"
                        }`}
                >
                    {label}
                </label>
            )}
            {!floatingLabel && (
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    {label}
                </label>
            )}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={`shadow appearance-none border rounded  py-2.5 px-3 text-gray-700 ${style}`}
            />
        </div>
    )
};

InputField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    style: PropTypes.string,
    onChange: PropTypes.func,
    floatingLabel: PropTypes.bool
};
