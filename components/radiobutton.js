import PropTypes from 'prop-types'

const propTypes = {
    onChange: PropTypes.func,
    uniqueId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.node,
    name: PropTypes.string,
    checked: PropTypes.bool,
};

const Radiobutton = ({ children, onChange, uniqueId, name, checked} = {}) => {
    if (typeof onChange !== 'function') {
      return false;
    }

    return (
        <div>
            <input
                onChange={onChange}
                name={name}
                id={uniqueId}
                type="radio"
                checked={checked}
            />
            <label htmlFor={uniqueId}>
                {children}
            </label>
            <style jsx>{`
                input {
                    margin-right:5px;
                }`}
            </style>
        </div>
    );
};

Radiobutton.propTypes = propTypes;

export default Radiobutton;