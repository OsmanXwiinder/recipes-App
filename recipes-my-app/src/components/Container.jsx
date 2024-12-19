/* eslint-disable react/prop-types */
// import FoodList from "./FoodList";

// import PropTypes from 'prop-types'
import styles from "./container.module.css";
export default function Container({children}) {
  return (
    <div className={styles.parentContainer}>
      {children}
    </div>
  )
}


// Container.proptypes = {childern: PropTypes.func.isRequired}