import PropTypes from 'prop-types';
import '@styles/globals.css';

const Application = ({Component, pageProps}) => {
    return <Component {...pageProps} />;
};

Application.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object,
};

Application.defaultProps = {
    Component: () => {},
    pageProps: {},
};

export default Application;
