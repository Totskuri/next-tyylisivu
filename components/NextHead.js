import Head from 'next/head';
import {useRouter} from 'next/router';
import PropTypes from 'prop-types';
import siteconfig from '../siteconfig.json';

const NextHead = ({content}) => {
    const generateCanonicalUrl = () => {
        return siteconfig.APP_URL + useRouter().pathname;
    };

    return (
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>{content.title}</title>
            <meta name="description" content={content.description} />
            <link rel="canonical" href={generateCanonicalUrl()} />
            <meta property="og:url" content={generateCanonicalUrl()} />
            <meta property="og:title" content={content.title} />
            <meta property="og:description" content={content.description} />
            <meta property="og:image" content={content.image} />
            <meta property="og:image:alt" content={content.imageAlt} />
            <meta property="og:locale" content={siteconfig.APP_LOCALE} />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
        </Head>
    );
};

NextHead.propTypes = {
    content: PropTypes.object,
};

NextHead.defaultProps = {
    content: {
        title: 'Page title',
        description: 'Page description',
        image: '/default.png',
        imageAlt: 'Default image',
    },
};

export default NextHead;
