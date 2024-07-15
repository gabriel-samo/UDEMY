import { FC, FormEvent, useRef } from "react";
import classes from './NewTodo.module.css'

const NewTodo: FC<{ addNewTodo: (text: string) => void }> = ({ addNewTodo }) => {

    const todoInputTextRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        const enteredText = todoInputTextRef.current!.value;

        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }

        addNewTodo(enteredText);
        formRef.current?.reset();
    }

    return (
        <form onSubmit={handleSubmit} className={classes.form} ref={formRef}>
            <label htmlFor="text">Todo Text</label>
            <br />
            <input type="text" placeholder="Enter a new todo" ref={todoInputTextRef} required />
            <br />
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodo;


// ---------------------------------------------------------------------------------------------------------

// type NewTodoProps = {
//     addNewTodo: (text: string) => void
// }

// export default function NewTodo({ addNewTodo }: NewTodoProps) {
//     const todoInputTextRef = useRef<HTMLInputElement>(null);
//     const formRef = useRef<HTMLFormElement>(null);

//     const handleSubmit = (event: FormEvent) => {
//         event.preventDefault();

//         const enteredText = todoInputTextRef.current!.value;

//         if (enteredText.trim().length === 0) {
//             // throw an error
//             return;
//         }

//         addNewTodo(enteredText);
//         formRef.current?.reset();
//     }

//     return (
//         <form onSubmit={handleSubmit} className={classes.form} ref={formRef}>
//             <label htmlFor="text">Todo Text</label>
//             <br />
//             <input type="text" placeholder="Enter a new todo" ref={todoInputTextRef} required />
//             <br />
//             <button>Add Todo</button>
//         </form>
//     );
// }

// ---------------------------------------------------------------------------------------------------------
