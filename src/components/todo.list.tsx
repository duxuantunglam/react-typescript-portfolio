import TodoData from "./todo.data"
import TodoInput from "./todo.input";
import { useState } from "react";

interface ITodo {
    id: number;
    title: string;
    isCompleted: boolean;
}

const TodoList = () => {
    // const todos = [
    //     { id: 1, title: "Learn React", isCompleted: false },
    //     { id: 2, title: "Learn TypeScript", isCompleted: true },
    //     { id: 3, title: "Build a Todo App", isCompleted: false },
    // ];

    const [listTodos, setListTodos] = useState<ITodo[]>([]);

    const addListTodo = (todo: ITodo) => {
        setListTodos([...listTodos, todo]);
    }

    const deleteListTodo = (id: number) => {
        const newListTodos = listTodos.filter(todo => todo.id !== id);
        setListTodos(newListTodos);
    }

    return (
        <div style={{
            width: "600px",
            margin: "50px auto",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px",
        }}>
            <div style={{
                padding: "10px 0",
                borderBottomWidth: "1px",
                borderBottomColor: "#ccc",
                borderBottomStyle: "solid",
            }}
            >My TodoList:</div>
            <br />
            <TodoInput
                addListTodo={addListTodo}
            />
            <TodoData todos={listTodos} handleDeleteTodo={deleteListTodo} />
        </div>
    )
}

export default TodoList