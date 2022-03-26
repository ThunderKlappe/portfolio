import { projectFunctions } from "./index";
import { Project } from "./Project";
import { Task } from "./Task";

const dataStorage = (() => {
    //this takes the current array of projects and saves the contents into a JSON file in localstorage
    const saveData = () => {
        const allProj = projectFunctions.getAllProjects();
        localStorage.setItem("Projects", JSON.stringify(allProj));
    };

    //finds the data in local storage, runs through the array and converts each entry into the appropriate
    //project or task in order to maintain object methods. If there is no data, returns an empty array
    const loadData = () => {
        if (localStorage.getItem("Projects")) {
            const loadedData = JSON.parse(localStorage.getItem("Projects"));
            const returnData = [];
            loadedData.forEach(ele => {
                const loadProjectTitle = ele.name;
                const loadProjectsTasks = [];
                ele.tasks.forEach(task => {
                    loadProjectsTasks.push(
                        new Task(
                            task.name,
                            task.description,
                            task.dueDate,
                            task.priority,
                            task.notes,
                            task.project,
                            task.number,
                            task.completed
                        )
                    );
                });
                const loadProjectCompleted = ele.completed;
                returnData.push(new Project(loadProjectTitle, loadProjectsTasks, loadProjectCompleted));
            });
            return returnData;
        } else return [];
    };

    const clearData = () => {
        localStorage.setItem("Projects", "");
    };

    return { saveData, loadData, clearData };
})();

export default dataStorage;
