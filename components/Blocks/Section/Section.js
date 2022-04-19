import PropTypes from 'prop-types';

const Section = ({children, className, style}) => {
    return (
        <section className={`py-16 ${className}`} style={style}>
            {children}
        </section>
    );
};

Section.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Section.defaultProps = {
    children: undefined,
    className: '',
    style: {},
};

export default Section;
