import PropTypes from 'prop-types';
import NextImage from '@components/Blocks/Image/NextImage';
import Link from 'next/link';

const SiteLogo = ({settings}) => {
    return (
        <Link href="/">
            <a className="cursor-pointer">
                <NextImage
                    src={settings.logo}
                    alt={settings.logoAlt}
                    height={settings.logoHeight}
                    width={settings.logoWidth}
                    quality={100}
                />
            </a>
        </Link>
    );
};

SiteLogo.propTypes = {
    settings: PropTypes.object.isRequired,
};

export default SiteLogo;
