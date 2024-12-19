import styles from './innercontainer.module.css';

// eslint-disable-next-line react/prop-types
export default function InnerContainer({children}) {
  return (
    <div className={styles.innerContainer}>
      {children}
    </div>
  )
}
