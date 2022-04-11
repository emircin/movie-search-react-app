import React, { useContext } from 'react'
import MovieCard from '../components/MovieCard'
import { MovieContext } from '../context/AuthContext'
import './style.css'

const Main = () => {

  const { setSearchQuery, getMovie, searchQuery, user } = useContext(MovieContext)

  const onChange = (e) => {

    setSearchQuery(e.target.value)
    user ? getMovie(searchQuery) : alert("You Must Login")

  }


  return (
    <div>
        <div className='search-container'>
          <input type="search" name='search' className='search-movie' placeholder='search a movie' onChange={onChange} />
        </div>
        <MovieCard/>
    </div>
  )
}

export default Main
