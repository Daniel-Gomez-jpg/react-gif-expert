

export const GifItem = ({id, title, url}) => {
  return (
    <div className="card">
        {/* <li key={id}> */}<img src={url} alt="Gif not fully loaded" />{/* </li> */}            
        <p>{title}</p>
    </div>
  )
}
