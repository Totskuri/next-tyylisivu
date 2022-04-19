import Grid from '@components/Blocks/Grid/Grid';
import NextImage from '@components/Blocks/Image/NextImage';
import Section from '@components/Blocks/Section/Section';
import PropTypes from 'prop-types';
import Container from '../../Blocks/Container/Container';

const ImageAndText = ({children, src, alt, height, width, contentFirst}) => {
    return (
        <Section>
            <Container>
                <Grid
                    colsClass='grid-cols-2'
                    gapClass='gap-12'
                >
                    {contentFirst && (
                        <div>
                            {children}
                        </div>
                    )}
                    <NextImage
                        src={src}
                        alt={alt}
                        height={height}
                        width={width}
                    />
                    {!contentFirst && (
                        <div>
                            {children}
                        </div>
                    )}
                </Grid>
            </Container>
        </Section>
    );
};

ImageAndText.propTypes = {
    children: PropTypes.node,
    src: PropTypes.string,
    alt: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    contentFirst: PropTypes.bool,
};

ImageAndText.defaultProps = {
    children: undefined,
    src: '/default.png',
    alt: '',
    height: 1080,
    width: 1080,
    contentFirst: false,
};

export default ImageAndText;
