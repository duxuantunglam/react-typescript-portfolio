
interface IProps {
    todos: {
        id: number,
        title: string,
        isCompleted: boolean
    }[];
    owner?: string;
    age?: number;
    isDeveloper?: boolean;
}

const TodoData = (props: IProps) => {
    const { todos, owner = "Unknown" } = props;

    return (
        <div>
            <div>Owner: {owner}</div>
            {todos.map(todo => (
                <div key={todo.id}>
                    <div>ID: {todo.id}</div>
                    <div>Title: {todo.title}</div>
                    <div>Completed: {todo.isCompleted ? "Yes" : "No"}</div>
                </div>
            ))}
        </div>
    )
}

export default TodoData