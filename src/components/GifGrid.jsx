import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"
import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({category}) => {

    const {images, isLoading}= useFetchGifs(category)

 /*    const [images, setImages] = useState([])

    const getGifsInfo = async()=>{
         const newImages = await getGifs(category)
         setImages(newImages)
    }

    useEffect(() => {
      getGifsInfo()
    }, []) */
    
    
    //const {id, title, url}=getGifs(category)
    console.log( isLoading)

  return (
    <>
    <h3>{category}</h3>
    {
        isLoading
        ?<h2>Loading</h2>
        :null
    }
    <div className="card-grid">
        {
            
            images.map(({title, id, url}) => {
            return(
            <GifItem key={id} title={title} url={url}/>
            )})
        }
    </div>
    </>
  )
}
