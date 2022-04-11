import { useContext } from 'react'
import { MovieContext } from '../context/AuthContext'
import styles from './MovieCard.module.css'
import NoImage from '../assets/no-image.png'
import MovieDetail from '../pages/MovieDetail'

const MovieCard = () => {

  const { pullMovie, user } = useContext(MovieContext)


  return (
    
    <div className={styles.containerMovie}>
      {pullMovie?.map((element) => (

        <div className={styles.movieCard}>
          <div className={styles.movieCardImage}>
            <img style={element.poster_path == null ? {width:"300px"} : null}
              src={element.poster_path == null ? NoImage : ("https://image.tmdb.org/t/p/w300" + element.poster_path)}
              alt={element.original_title}
            />
            {user ? <MovieDetail element={element} className={styles.detailHover}/> : null}
            
          </div>
          <div className={styles.movieCardTextContainer}>
            <h5 className={styles.titleText}>{element.original_title}</h5>
            {user ? <p className={styles.voteText}>{element.vote_average.toFixed(1)}</p> : null }
          </div>
        </div>
      ))}
    </div>
  )
}
export default MovieCard
