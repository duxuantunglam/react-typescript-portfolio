
interface IProps {
    name?: string;
}

const TodoInput = (props: IProps) => {
    const { name } = props;

    return (
        <div style={{
            display: "flex",
            gap: 15,
            marginBottom: "20px",
        }}>
            <input type="text" placeholder="Enter a new todo..." value={name} />
            <button>Add Todo</button>
        </div>
    )
}

export default TodoInput