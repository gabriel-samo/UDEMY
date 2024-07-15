import { FC } from 'react';
import classes from './TodoItem.module.css'
import { Todo } from '../models/Todo';

const TodoItem: FC<{ item: Todo, handleClick: (id: string) => void }> = ({ item, handleClick }) => {
    return (
        <li onClick={() => handleClick(item.id)} className={classes.item}>{item.text}</li>
    );
}

export default TodoItem;

// ---------------------------------------------------------------------------------------------------------

// type TodoItemProps = {
//     item: Todo
//     handleClick: (id: string) => void
// }
// export default function TodoItem({ item, handleClick }: TodoItemProps) {
//     return (
//         <li onClick={() => handleClick(item.id)} className={classes.item}>{item.text}</li>
//     );
// }

// ---------------------------------------------------------------------------------------------------------