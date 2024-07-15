import { FC } from 'react';
import { Todo } from '../models/Todo';
import TodoItem from './TodoItem'
import classes from './Todos.module.css'

const Todos: FC<{ items: Todo[], handleRemoveTodo: (id: string) => void }> = ({ items, handleRemoveTodo }) => {

    return (
        <ul className={classes.todos}>
            {items.map((item) => <TodoItem key={item.id} item={item} handleClick={handleRemoveTodo} />)}
        </ul>
    );
}

export default Todos;

// -------------------------------------------------------------------------

// type TodosProps = {
//     items: Todo[]
//     handleRemoveTodo: (id: string) => void
// }

// export default function Todos({ items, handleRemoveTodo }: TodosProps) {
//     return (
//         <ul className={classes.todos}>
//             {items.map((item) => <TodoItem key={item.id} item={item} handleClick={handleRemoveTodo} />)}
//         </ul>
//     );
// }

// ---------------------------------------------------------------------------
