import PropTypes from 'prop-types'

const propTypes = {
    children: PropTypes.node,
};

const Label = ({ children} = {}) => {
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