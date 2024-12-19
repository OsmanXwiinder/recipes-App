import PropTypes from 'prop-types';
import Item from './Item';

export default function ItemList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        food?.extendedIngredients?.map((item) => (
          <Item key={item.name} item={item} />
        ))
      )}
    </div>
  );
}

ItemList.propTypes = {
  food: PropTypes.shape({
    extendedIngredients: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        unit: PropTypes.string.isRequired,
      })
    ),
  }),
  isLoading: PropTypes.bool.isRequired,
};

ItemList.defaultProps = {
  food: null,
};
