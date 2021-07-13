import styled, {css} from "styled-components"
import { ToDoProps } from "../utils/type";


export const Item = styled.div<Pick<ToDoProps, 'isCompleted'>>`
  display:flex;
  width: 20%;
  border: 2px solid black;
  align-items: center;
  justify-content: center;
  margin:10px;
  padding:0px 15px;

  ${({isCompleted} )=> isCompleted && css`background-color:#a6a6a6` }
`;


export const ToDoItem = styled.p`
font-size: 18px;
font-weight: bold;
color:#389dff;
word-break: break-word;
`

export const Icon = styled.img`
  width:15px;
  height: 15px;
  padding:10px;

`