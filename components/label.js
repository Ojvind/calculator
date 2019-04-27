import PropTypes from 'prop-types'

const propTypes = {
    children: PropTypes.node,
};

const Label = ({ children} = {}) => {
    if (typeof children !== 'string') {
      return false;
    }

    return (
        <span>
            <label>
                {children}
            </label>
        </span>
    );
};

Label.propTypes = propTypes;

export default Label;