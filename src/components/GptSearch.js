import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestion from './GptMoviesSuggestion'
import { BG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-20">
             <img  className="h-auto w-screen" src={BG_URL} alt="body content" />
             </div>
      <GptSearchBar/>
      <GptMoviesSuggestion/>
    </div>
  )
}

export default GptSearch