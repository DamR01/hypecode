
export interface ToDoProps {
    todo: string
    isDeleted: boolean
    isCompleted: boolean
  }


  export interface ToDoListProps  {
    item:ToDoProps
    removeItem: (index:number) => void
    completeItem: (index:number) => void
    index: number
  }

 