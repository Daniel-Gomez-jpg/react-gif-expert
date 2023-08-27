import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"


export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Punch'])
  
 
  const onAddCategory = (inputValue)=>{
    //let newArray = categories.map(category=>category)
    //newArray.unshift('Zelda')
    //setCategories(newArray)
    //setCategories(['zelda', ...categories])
    if(categories.includes(inputValue)) return
    setCategories([inputValue, ...categories])
  }
    return (
    <>
    {/* titulo */}
    <h1>Gif Expert App</h1>

    {/* input */}
    <AddCategory /* setCategories={setCategories} */ onNewCategory={onAddCategory} />

    {/* listado de gif */}
        
    <ol>
        {/* categories.map(category => <li key={category}>{category}</li>) */
            categories.map(category =>{
                return(
                <GifGrid category={category} key={category}/>
            )})
        }
    </ol>
        {/* gif item */}
    </>
  )
}
