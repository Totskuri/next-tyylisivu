import PropTypes from 'prop-types';
import Image from 'next/image';

const NextImage = (props) => {
    return (
        <div className='relative'>
            <Image
                {...props}
            />
        </div>
    );
};

NextImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default NextImage;
