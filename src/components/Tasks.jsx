function Tasks(props) {
    return (
        <div>
            <h2>Tasks</h2>
            <ul className="space-y-2 p-3 bg-slate-200 rounded-md shadow-md"> 
                {/* Map through the tasks array and display each task */}
                {props.tasks.map((task) => (
                    <li key={task.id} className="flex gap-2">

                        <button className="text-white text-left bg-slate-400 w-full p-2 rounded mb-2">
                            {task.title}
                        </button>

                        <button className="text-white bg-slate-400 p-2 rounded mb-2">
                            <code>Details</code>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tasks;




{/* <button className="ml-4">{task.completed ? "Completed" : "Incomplete"}</button> */}