
interface TaskListProps {
    tasks: string[]
}

export function TaskList({tasks}: TaskListProps) {
    return(
        <div>
            <h2>Lista de tarefas</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    )
}