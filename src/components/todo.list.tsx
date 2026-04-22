import TodoData from "./todo.data"
import TodoInput from "./todo.input";

const TodoList = () => {
    const todos = [
        { id: 1, title: "Learn React", isCompleted: false },
        { id: 2, title: "Learn TypeScript", isCompleted: true },
        { id: 3, title: "Build a Todo App", isCompleted: false },
    ];

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
            <TodoInput />
            <TodoData todos={todos} />
        </div>
    )
}

export default TodoList