import PropTypes from 'prop-types'

const propTypes = {
    onChange: PropTypes.func,
    children: PropTypes.node,
};

const TextBox = ({ children, onChange} = {}) => {
    if (typeof onChange !== 'function') {
      return false;
    }
    return (
        <span>
            <input onChange={onChange} type='text' value={children}></input>
            <style jsx>{`
                input {
                    width: 30px;
                }`}
            </style>
        </span>
    );
};

TextBox.propTypes = propTypes;

export default TextBox;
