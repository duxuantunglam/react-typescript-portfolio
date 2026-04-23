
interface IProps {
    todos: {
        id: number,
        title: string,
        isCompleted: boolean
    }[];
    owner?: string;
    age?: number;
    isDeveloper?: boolean;
    handleDeleteTodo: (id: number) => void;
}

const TodoData = (props: IProps) => {
    const { todos, owner = "Unknown", handleDeleteTodo } = props;

    return (
        <div>
            <div>Owner: {owner}</div>
            {todos.map(todo => (
                <div key={todo.id}>
                    <div style={{ padding: "10px 0" }}>
                        {todo.id} - {todo.title}
                        <button
                            style={{ marginLeft: "10px" }}
                            onClick={() => handleDeleteTodo(todo.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TodoData