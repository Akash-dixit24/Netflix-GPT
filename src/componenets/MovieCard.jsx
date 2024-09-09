import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({poster}) => {
  return (
    <div className='pr-5 w-48 rounded-sm '>
      <img alt='movie card'
        src={IMG_CDN_URL + poster}
      />
    </div>
  )
}

export default MovieCard