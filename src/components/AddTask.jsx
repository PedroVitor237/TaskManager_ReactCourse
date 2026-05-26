import { useState } from "react";
import { ListPlus } from 'lucide-react';
import Input from "./Input";

function AddTask({ onAddTask }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    return (
        <div className="space-y-2 p-3 bg-slate-200 rounded-md shadow-md flex flex-col">
            <h2>Add Task</h2>
            <Input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <Input
                type="text"
                placeholder="Task description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />

            <button 
                className="w-full bg-slate-400 text-white p-2 rounded"
                onClick={() => {
                    // Only add the task if the title is not empty (after trimming whitespace)
                    if (title.trim() === "") {
                        return alert("Task title cannot be empty");
                    }
                    
                    onAddTask(title, description);
                    // Clear the input fields after adding the task
                    setTitle("");
                    setDescription("");
                    
                }}
            >
                <ListPlus className="inline-block mr-2" />
                <strong>Add Task</strong>
            </button>
        </div>
    );
}

export default AddTask;