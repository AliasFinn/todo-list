function ToDo({ todo, toggleTask, removeTask }) {
    return (
        <div key={todo.id} className="item-todo">
            <div
                className={todo.complete ? "item-text strike" : "item-text"}
                onClick={() => toggleTask(todo.id)}
                >
                {todo.task}
            </div>
            <div className="item-delete" onClick={() => removeTask(todo.id)}>
                ⮾
            </div>
        </div>

    )
}

export default ToDo