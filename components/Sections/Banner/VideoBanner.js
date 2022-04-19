import PropTypes from 'prop-types';
import Container from '../../Blocks/Container/Container';

const VideoBanner = ({children, height}) => {
    return (
        <div className='relative' style={{height}}>
            <video autoPlay muted loop className='absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover'>
                <source src="/hero.mp4" type="video/mp4" />
            </video>
            <Container>
                {children}
            </Container>
        </div>
    );
};

VideoBanner.propTypes = {
    children: PropTypes.node,
    height: PropTypes.string,
};

VideoBanner.defaultProps = {
    children: undefined,
    height: '500px',
};

export default VideoBanner;
