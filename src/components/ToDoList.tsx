
import check from "../../src/check.png"
import remove from "../../src/delete.png"
import { ToDoListProps } from "../utils/type"
import { Icon, Item, ToDoItem } from "./ToDoList.style"




export const ToDoList = (item:ToDoListProps) => (

    <Item isCompleted={item.item.isCompleted}>
        <ToDoItem>{item.item.todo}</ToDoItem>
        <Icon src={check} onClick={() => item.completeItem(item.index)}/>
        <Icon src={remove} onClick={() => item.removeItem(item.index)}/>
    </Item>
)

    
