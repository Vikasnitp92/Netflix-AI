import React from 'react'
import { useSelector } from 'react-redux'
import {lang } from "../utils/languageConst"

const GptSearchBar = () => {
  const currentLang = useSelector((store)=>store.config.usedLanguage);
  console.log(lang[currentLang].search);
  return (
    <div className='pt-[10%] flex justify-center' >
      <form className=' w-1/2 bg-gray-900 grid grid-cols-12 rounded-lg' >
        <input className='p-3 m-2 col-span-9'  type='text' placeholder={lang[currentLang].gptSearchPlaceholde}/>
        <button className='p-3 m-2 rounded-lg bg-red-400 col-span-3'>{lang[currentLang].search}</button>
      </form>
    </div> 
  )
}

export default GptSearchBar