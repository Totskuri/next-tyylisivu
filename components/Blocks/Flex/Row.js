import PropTypes from 'prop-types';

const Row = ({className, children}) => {
    return (
        <div className={`flex ${className}`}>
            {children}
        </div>
    );
};

Row.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

Row.defaultProps = {
    className: '',
    children: undefined,
};

export default Row;
