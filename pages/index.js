import PropTypes from 'prop-types';
import Layout from '@components/Layout';
import StaticPropsUtil from 'util/StaticPropsUtil';
import ImageBanner from '@components/Sections/Banner/ImageBanner';
import Button from '@components/Blocks/Button/Button';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import ImageAndText from '@components/Sections/ImageAndText/ImageAndText';
import PortfolioPreview from '@components/Sections/Portfolio/PortfolioPreview';

const Home = ({settings, content}) => {
    return (
        <Layout
            settings={settings}
            content={content}
        >
            <ImageBanner
                src={content.image}
                height='800px'
            >
                <div className='flex flex-col justify-center items-start h-full flex text-white mr-80'>
                    <h1 className='text-6xl leading-normal font-bold mb-4 text-gradient-magenta'>{content.hero.title}</h1>
                    <h2 className='text-2xl mb-8'>{content.hero.subtitle}</h2>
                    <Button
                        text={content.hero.buttonText}
                        href={content.hero.buttonHref}
                        icon={faChevronRight}
                    />
                </div>
            </ImageBanner>
            <ImageAndText
                src={content.info.image}
                alt={content.info.alt}
            >
                <h2 className='text-5xl leading-normal mt-12 mb-6'>{content.info.title}</h2>
                <hr className="hr-gradient-magenta" />
                <p className='text-xl leading-normal mb-6'>{content.info.content}</p>
                <Button
                    text={content.info.buttonText}
                    href={content.info.buttonHref}
                    icon={faChevronRight}
                />
            </ImageAndText>
            <ImageAndText
                src={content.info.image}
                alt={content.info.alt}
                contentFirst
            >
                <h2 className='text-5xl leading-normal mt-12 mb-6'>{content.info.title}</h2>
                <hr className="hr-gradient-magenta" />
                <p className='text-xl leading-normal mb-6'>{content.info.content}</p>
                <Button
                    text={content.info.buttonText}
                    href={content.info.buttonHref}
                    icon={faChevronRight}
                />
            </ImageAndText>
            <ImageAndText
                src={content.info.image}
                alt={content.info.alt}
            >
                <h2 className='text-5xl leading-normal mt-12 mb-6'>{content.info.title}</h2>
                <hr className="hr-gradient-magenta" />
                <p className='text-xl leading-normal mb-6'>{content.info.content}</p>
                <Button
                    text={content.info.buttonText}
                    href={content.info.buttonHref}
                    icon={faChevronRight}
                />
            </ImageAndText>
            <PortfolioPreview
                sectionClassName='bg-gradient-to-r from-royalblue to-darkpurple'
                title={content.portfolio.title}
                buttonText={content.portfolio.buttonText}
                buttonHref={content.portfolio.buttonHref}
                logos={content.portfolio.logos}
            />
        </Layout>
    );
};

Home.propTypes = {
    settings: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
};

export async function getStaticProps() {
    return {
        props: {
            settings: StaticPropsUtil.fetchSiteSettings(),
            content: {
                title: 'Etusivu',
                description: 'Teemme helposti päivitettäviä WordPress-verkkosivuja. Meiltä myös verkkokaupat, hakukoneoptimointi ja graafinen sunnittelu.',
                image: '/hero.jpg',
                imageAlt: 'Tyylisivu - suunnistajasi digitalisaation viidakossa',
                hero: {
                    title: 'Laadukkaat verkkosivut tukevat liiketoiminnan kasvua',
                    subtitle: 'Luomme verkkosivuja jotka saavat brändinne loistamaan',
                    buttonText: 'Pyydä tarjous',
                    buttonHref: '/blog',
                },
                info: {
                    image: '/02.jpg',
                    alt: 'Verkkosivujen ja verkkopalveluiden kehitys',
                    title: 'Verkkosivujen ja verkkopalveluiden kehitys',
                    content: 'Käsityöllä tehdyt verkkosivut ja verkkopalvelut jotka tukevat yrityksenne ja brändinne kasvua.',
                    buttonText: 'Lue lisää',
                    buttonHref: '/blog',
                },
                portfolio: {
                    title: 'Asiakkaat jotka luottavat meihin',
                    buttonText: 'Siirry portfolioon',
                    buttonHref: '/blog',
                    logos: [
                        {
                            src: '/default.png',
                            alt: 'test',
                        },
                    ],
                },
            },
        },
    };
}

export default Home;
