
import {  useState } from 'react';
import styled from "styled-components"

import './App.css';
import { ToDoList } from './components/ToDoList';



export const Container = styled.div`
width: 30%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding:20px;
border: 1px solid grey;
`

export const Separator = styled.div`
height: 2px;
width: inherit;
background-color: #696969;
margin: 10px 0px;
`

export const App = () => {

  const [inputValue, setValue] = useState("")
  const [items, setItems] = useState<any[]>([])


  const onSubmit = (e:any) => {
    e.preventDefault();
    addItem(inputValue)
    setValue("")
  }
  

  const addItem = (todo:string) => {
    const newItem = [{todo}, ...items ]
    setItems(newItem);   
  }


  const completeItem = (index:number) => {
    const newTodos = [...items];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setItems(newTodos);
  };
 

   const removeItem = (index:number) => {
    const newItem = [...items];
    newItem.splice(index, 1);
    setItems(newItem);
  };


  


  return (
    <Container>
      <form onSubmit={onSubmit}>
      <input type="text" placeholder="add to do item" value={inputValue} onChange={(e)=>setValue(e.target.value)}/>
     <button >Ajouter</button>
     </form>
      <Separator/>      
     {items.map((item,index)=> (
      <ToDoList item={item} removeItem={removeItem} completeItem={completeItem} key={index} index={index}/>
      ))}
    </Container>
  );
}

