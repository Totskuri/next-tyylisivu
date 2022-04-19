import PropTypes from 'prop-types';

const Container = ({children, className}) => {
    return (
        <div className={`container max-w-7xl mx-auto px-12 relative h-full w-full ${className}`}>
            {children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

Container.defaultProps = {
    children: undefined,
    className: '',
};

export default Container;
