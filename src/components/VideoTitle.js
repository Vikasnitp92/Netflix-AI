const VideoTitle = ({title,description})=>{
  return(
    <div className="w-screen aspect-video pt-[20%] absolute text-white  px-24 bg-gradient-to-r from-black">
      <hi className ="text-5xl font-bold">{title}</hi>
      <p className="my-4 text-xl w-1/3">{description}</p>
      <div className="my-2">
        <button className="bg-white text-black font-bold py-2 px-8  rounded-lg hover:bg-opacity-80"> ▶Play</button>
        <button className="mx-2 bg-gray-500 text-white font-bold py-2 px-8 rounded-lg hover:bg-opacity-80">ℹ️Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;