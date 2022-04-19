import Button from '@components/Blocks/Button/Button';
import Grid from '@components/Blocks/Grid/Grid';
import NextImage from '@components/Blocks/Image/NextImage';
import Section from '@components/Blocks/Section/Section';
import PropTypes from 'prop-types';
import Container from '../../Blocks/Container/Container';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

const PortfolioPreview = ({title, buttonText, buttonHref, sectionClassName, logos}) => {
    return (
        <Section
            className={sectionClassName}
        >
            <Container>
                <Grid
                    colsClass='grid-cols-2'
                    gapClass='gap-12'
                >
                    <div className='mr-64'>
                        <h2 className='text-7xl text-blue-50 font-bold leading-normal mb-12'>{title}</h2>
                        <Button
                            text={buttonText}
                            href={buttonHref}
                            icon={faChevronRight}
                            colorClass='bg-violet-600 hover:bg-violet-700'
                        />
                    </div>
                    <Grid
                        colsClass='grid-cols-4'
                        gapClass='gap-3'
                    >
                        {logos.map((logo) => {
                            return (
                                <NextImage
                                    key={logo.src}
                                    src={logo.src}
                                    alt={logo.alt}
                                    height={128}
                                    width={128}
                                />
                            );
                        })}
                    </Grid>
                </Grid>
            </Container>
        </Section>
    );
};

PortfolioPreview.propTypes = {
    title: PropTypes.string,
    buttonText: PropTypes.string,
    buttonHref: PropTypes.string,
    sectionClassName: PropTypes.string,
    logos: PropTypes.array.isRequired,
};

PortfolioPreview.defaultProps = {
    title: '',
    buttonText: '',
    buttonHref: '',
    sectionClassName: '',
};

export default PortfolioPreview;
