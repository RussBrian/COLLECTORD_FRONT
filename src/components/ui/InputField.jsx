import PropTypes from "prop-types";

export const InputField = ({ label, type, name,  value, onChange, floatingLabel }) => {

    const hasValue = value && value.length > 0;

    return (
        <div className='relative mb-4'>
            {floatingLabel && (
                <label
                    className={`absolute left-1.5 top-2 text-gray-500 font-semibold transition-all duration-200 ease-in-out ${
                        hasValue ? "text-xs top-0.5" : "text-sm"
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
                className='shadow appearance-none border rounded w-full py-2.5 px-3 text-gray-700'
            />
        </div>
    )
};

InputField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    floatingLabel: PropTypes.bool
};
