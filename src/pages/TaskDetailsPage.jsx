import { useSearchParams } from "react-router-dom";

function TaskDetailsPage() {

    const [searchParams] = useSearchParams(); // Get the search parameters from the URL
    const title = searchParams.get("title"); // Get the title from the search parameters
    const description = searchParams.get("description"); // Get the description from the search parameters
    const isCompleted = searchParams.get("isCompleted"); // Get the isCompleted status from the search parameters

    return (
        <div className="w-screen h-screen bg-slate-500 flex items-center p-6 flex-col gap-4 space-y-6 rounded-md shadow-md">
            <h1 className="text-4xl text-slate-100 font-bold">Task Details Page</h1>

            <div className="w-[500px] space-y-4 flex gap-2 flex-col">

                 {/* Display the task details using the values from the search parameters */}
                <div className="bg-slate-300 p-4 rounded-md shadow-md">
                    <h1 className="text-xl font-bold text-slate-700">{title}</h1>
                </div>

                <div className="bg-slate-300 p-4 rounded-md shadow-md">
                    <p className="text-slate-600">{description}</p>
                    
                    <code>
                        <p className="text-slate-800 ">Status: {isCompleted === "true" ? "Completed" : "Incomplete"}</p>
                    </code>
                    
                </div>

            </div>

            {/*
            Alternative way without using URLSearchParams:
            <div className="bg-slate-200 p-4 rounded-md shadow-md">
                <h1>{searchParams.get("title")}</h1>
            </div>

            <div className="bg-slate-200 p-4 rounded-md shadow-md">
                <p>{searchParams.get("description")}</p>
            </div>
            */}

        </div>  
    );
}

export default TaskDetailsPage;