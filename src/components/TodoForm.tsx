import React, {useState} from 'react'

export const TodoForm: React.FC = () => {
  const [title,setTitle] = useState<string>('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setTitle(event.target.value)
  }

  return (
    <div className="input-field mt2">
      <input 
      onChange={changeHandler} 
      value={title} 
      type="text" 
      id="title" 
      placeholder="Type Todo Title"/>
      <label htmlFor="title" className="active">
        Todo Title
      </label>
    </div>
  )
}