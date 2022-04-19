import PropTypes from 'prop-types';

const Column = ({className, children}) => {
    return (
        <div className={`flex flex-col ${className}`}>
            {children}
        </div>
    );
};

Column.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

Column.defaultProps = {
    className: '',
    children: undefined,
};

export default Column;
