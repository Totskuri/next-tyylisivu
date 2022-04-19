import PropTypes from 'prop-types';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import NextHead from './NextHead';

const Layout = ({children, settings, content}) => {
    return (
        <div>
            <NextHead
                content={content}
            />
            <Header
                settings={settings}
            />
            {children}
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node,
    settings: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
};

export default Layout;
