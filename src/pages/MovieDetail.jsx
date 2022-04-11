import React from 'react'
import styles from './MovieStyle.module.css'
import styles2 from '../components/MovieCard.module.css'

const MovieDetail = ({element}) => {

    
  return (
    <div className={styles.detailContainer + " " + styles2.detailContainer2}>
        <p>{element.overview}</p>
    </div>
  )
}

export default MovieDetail