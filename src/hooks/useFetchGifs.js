import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getGifsInfo = async()=>{
         const newImages = await getGifs(category)
         setImages(newImages)
         setIsLoading(false)
    }

    useEffect(() => {
      getGifsInfo()
    }, [])
  
    return{
        images: images,
        isLoading: isLoading,
    }
}
