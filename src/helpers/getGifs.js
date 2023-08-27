export const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=gnRcr8I9eCI1L4vcL4wIe0s11H1XRhlN&q=${category}&limit=5`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map(gif => {
        return {
            id: gif.id, 
            title: gif.title,
            url: gif.images.downsized_medium.url               
        }
    })
   
    return gifs;
}