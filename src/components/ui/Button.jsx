import PropTypes from "prop-types";

export const Button = ({ text, onClick, type, className }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 ${className}`}>
            {text}
        </button>
    );
};


Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
    className: PropTypes.string


}

