import Section from '@components/Blocks/Section/Section';
import PropTypes from 'prop-types';
import Container from '../../Blocks/Container/Container';

const ImageBanner = ({children, height, src}) => {
    return (
        <Section
            className='relative bg-cover bg-no-repeat bg-center'
            style={{
                height,
                backgroundImage: `url(${src})`,
            }}
        >
            <Container>
                {children}
            </Container>
        </Section>
    );
};

ImageBanner.propTypes = {
    children: PropTypes.node,
    height: PropTypes.string,
    src: PropTypes.string,
};

ImageBanner.defaultProps = {
    children: undefined,
    height: '500px',
    src: '/default.png',
};

export default ImageBanner;
