import { useState } from "react";

interface ITodo {
    id: number;
    title: string;
    isCompleted: boolean;
}

interface IProps {
    name?: string;
    addListTodo: (todo: ITodo) => void;
}

const TodoInput = (props: IProps) => {
    const { addListTodo } = props;

    const [todo, setTodo] = useState<string>("");

    const handleAddTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    };

    const handleSubmit = () => {
        if (todo.trim() === "") {
            alert("Please enter a todo");
            return;
        }
        addListTodo({
            id: Date.now(),
            title: todo,
            isCompleted: false,
        });
        setTodo("");
    };

    return (
        <div style={{
            display: "flex",
            gap: 15,
            marginBottom: "20px",
        }}>
            <input
                type="text"
                placeholder="Enter a new todo..."
                value={todo}
                onChange={handleAddTodo} />
            <button onClick={handleSubmit}>Add Todo</button>
        </div>
    )
}

export default TodoInput