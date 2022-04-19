import {Fragment} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Button = ({icon, text, href, onClick, className, colorClass, disabLedColorClass, disabled}) => {
    const renderButtonContent = () => {
        return (
            <div className='flex items-center'>
                {text.length > 0 && (
                    <span>
                        {text}
                    </span>
                )}
                {icon && (
                    <FontAwesomeIcon icon={icon} className='ml-2 h-4' />
                )}
            </div>
        );
    };
    return (
        <Fragment>
            {href.length > 0 && (
                <Link
                    href={href}
                >
                    <a className={`${colorClass} inline-block text-white font-bold rounded ${className}`}>
                        {renderButtonContent()}
                    </a>
                </Link>
            )}
            {href.length === 0 && (
                <button
                    role="button"
                    className={`${disabled ? disabLedColorClass : colorClass} text-white font-bold rounded ${className}`}
                    onClick={() => onClick()}
                    disabled={disabled}
                >
                    {renderButtonContent()}
                </button>
            )}
        </Fragment>

    );
};

Button.propTypes = {
    icon: PropTypes.any,
    text: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    colorClass: PropTypes.string,
    disabLedColorClass: PropTypes.string,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    icon: null,
    text: '',
    href: '',
    onClick: () => {},
    className: 'py-3 px-6',
    colorClass: 'bg-blue-500 hover:bg-blue-600',
    disabLedColorClass: 'bg-gray-500',
    disabled: false,
};

export default Button;
