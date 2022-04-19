import PropTypes from 'prop-types';
import Link from 'next/link';

const Navigation = ({menuItems}) => {
    return (
        <nav>
            <ul className='list-none p-0 m-0 flex'>
                {menuItems.map((menuItem) => (
                    <li
                        key={menuItem.href}
                        className="text-white hover:text-cyan-400 font-semibold px-2"
                    >
                        <Link
                            href={menuItem.href}
                        >
                            <a>{menuItem.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Navigation.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.object),
};

Navigation.defaultProps = {
    menuItems: [],
};

export default Navigation;
