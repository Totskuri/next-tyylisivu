import PropTypes from 'prop-types';

const Grid = ({colsClass, gapClass, children}) => {
    return (
        <div className={`grid ${colsClass} ${gapClass}`}>
            {children}
        </div>
    );
};

Grid.propTypes = {
    colsClass: PropTypes.string,
    gapClass: PropTypes.string,
    children: PropTypes.node,
};

Grid.defaultProps = {
    colsClass: 'grid-cols-1',
    gapClass: 'gap-6',
    children: undefined,
};

export default Grid;
