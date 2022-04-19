import PropTypes from 'prop-types';
import Row from '@components/Blocks/Flex/Row';
import Navigation from '@components/Blocks/Navigation/Navigation';
import SiteLogo from './SiteLogo';
import Container from '@components/Blocks/Container/Container';

const Header = ({settings}) => {
    return (
        <header className='fixed top-0 left-0 right-0 z-10 bg-transparent px-4 py-2'>
            <Container>
                <Row className='justify-between items-center'>
                    <SiteLogo
                        settings={settings}
                    />
                    <Navigation
                        menuItems={settings.menuItems}
                    />
                </Row>
            </Container>
        </header>
    );
};

Header.propTypes = {
    settings: PropTypes.object.isRequired,
};

export default Header;
