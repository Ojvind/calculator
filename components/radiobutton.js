import PropTypes from 'prop-types'

const propTypes = {
    onChange: PropTypes.func,
    uniqueId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.node,
    name: PropTypes.string,
};

const Radiobutton = ({ children, onChange, uniqueId, name} = {}) => {
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
            />
            <label htmlFor={uniqueId}>
                {children}
            </label>
        </div>
    );
};

Radiobutton.propTypes = propTypes;

export default Radiobutton;