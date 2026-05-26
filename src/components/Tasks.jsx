import { Trash, CheckIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks(props) {

// "function Tasks({ tasks, onTaskClick })" it's the same as "function Tasks(props)" but with destructuring, so we can use tasks and onTaskClick directly instead of props.tasks and props.onTaskClick

    const navigate = useNavigate();

    function onDetailsClick(task) {
        const queryParams = new URLSearchParams() // Create a new URLSearchParams object to build the query string
        queryParams.set("title", task.title) // Set the title of the task to the query parameters
        queryParams.set("description", task.description) // Set the description of the task to the query parameters
        queryParams.set("isCompleted", task.isCompleted) // Set the isCompleted status of the task to the query parameters

        navigate(`/taskDetails?${queryParams.toString()}`); // Navigate to the task details page with the query parameters in the URL

        // Alternative way without using URLSearchParams:
        // navigate(`/taskDetails?title=${taskId.title}&description=${taskId.description}`);
    }

    return (
        <div>

            <ul className="space-y-2 p-3 bg-slate-200 rounded-md shadow-md"> 

                <h2>
                    {props.tasks.length === 0 ? "You don't have any tasks yet..." : "Tasks List"}
                </h2>

                {/* Map through the tasks array and display each task */}
                {props.tasks.map((task) => (
                    <li key={task.id} className="flex gap-2">

                        <button 
                            onClick={() => props.onTaskClick(task.id)}
                            className={`text-white text-left bg-slate-400 w-full flex items-center gap-2 p-2 rounded mb-2 ${task.isCompleted && "line-through"}`}
                        >
                            {task.isCompleted ? <CheckIcon /> : null}
                            {task.title}
                            
                        </button>

                        <Button
                            onClick={() => onDetailsClick(task)}
                        >
                            <code>Details</code>
                        </Button>

                        <Button
                            onClick={() => props.onTaskDelete(task.id)}
                        >
                            <Trash />
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tasks;





{/* <button className="ml-4">{task.isCompleted ? "Completed" : "Incomplete"}</button> */}