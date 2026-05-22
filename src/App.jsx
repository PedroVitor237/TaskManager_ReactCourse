import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react';

function App() {

    const [tasks, setTasks] = useState([
        // Hardcoded tasks for testing purposes
        { id: 1, title: "Task 1", isCompleted: false },
        { id: 2, title: "Task 2", isCompleted: true },
        { id: 3, title: "Task 3", isCompleted: false },
    ]);

    // Update the tasks state by toggling the completed status of the clicked task
    function onTaskClick(taskId) {
        const updatedTasks = tasks.map((task) => {
            // It's needed to update this task
            if (task.id === taskId) {
                return { ...task, isCompleted: !task.isCompleted };
            }
            // No need to update this task, return it as is
            return task;
        });

        setTasks(updatedTasks);
    }

    // Delete a task from the tasks state based on its id
    function onTaskDelete(taskId) {
        // Filter out the task with the given id
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        // Update the tasks state with the new array of tasks
        setTasks(updatedTasks);
    }



    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px]">

                <h1 className="text-3xl text-slate-100 font-bold text-center">Task Manager</h1>
                
                <AddTask />
                <Tasks tasks={tasks} onTaskClick={onTaskClick} onTaskDelete={onTaskDelete} />

            </div>
        </div>
    )
}

export default App;




/*---------------------------------------------------------------------------------------------------------------------------------*/


/*

function App() {

    const defaultMessage = "This is my first React app!";

    // State: is a way to store and manage data in a React component. It allows us to create dynamic and interactive user interfaces.
    const [message, setMessage] = useState("Click the button!");

    return (

        <div>
            <h1 className='text-blue-500'>Hello World!</h1>
            <p>{defaultMessage}</p>

            <button onClick={() => setMessage("You clicked the button!")}>
                {message}
            </button>
        </div>

    );
}

*/

/*---------------------------------------------------------------------------------------------------------------------------------*/

// Suggested code by Copilot for toggling task completion status when a task is clicked. This function updates the tasks state by mapping through the existing tasks and toggling the completed status of the task that was clicked based on its id.
// Remember to verify which way if more suitable and efficient //

/*

function onTaskClick(taskId) {
        // Update the tasks state by toggling the completed status of the clicked task
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    }

*/