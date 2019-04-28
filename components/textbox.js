import PropTypes from 'prop-types'

const propTypes = {
    onChange: PropTypes.func,
    children: PropTypes.node,
};

const TextBox = ({ children, onChange, onKeyPress} = {}) => {
    if (typeof onChange !== 'function') {
      return false;
    }
    if (typeof onKeyPress !== 'function') {
        return false;
    }
    return (
        <span>
            <input onChange={onChange} onKeyPress={onKeyPress} type='text' value={children}></input>
            <style jsx>{`
                input {
                    width: 30px;
                    margin-left:5px;
                }`}
            </style>
        </span>
    );
};

TextBox.propTypes = propTypes;

export default TextBox;
