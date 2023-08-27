import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
  
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target})=>{
        setInputValue(target.value)
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        if(inputValue.trim().length <=2) return
        
        onNewCategory(inputValue.trim())
        //setCategories(categories => [inputValue, ...categories])
        setInputValue('')
    }
  
    return (
        <form onSubmit={onSubmit}>            
    <input type="text" placeholder="Buscar Gifs" value={inputValue} onChange={onInputChange} />
        </form>
  )
}
