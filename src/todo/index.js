import "./style.css";
import DOMManip from "./DOMManip";
import { Task } from "./Task";
import { Project } from "./Project";
import dataStorage from "./dataStorage";

//This export contains all of the functions related to accessing the project data
//and task data throughout the website
export const projectFunctions = (() => {
    let _allProjects = [];

    let _currentDaysRequested = 1;

    //used when a project is deleted, makes all of the tasks under each project go to their current
    //project's index in the allProjects array
    const _renumberProjects = projectNumber => {
        for (let i = _allProjects.length - 1; i >= projectNumber; i--) {
            _allProjects[i].tasks.forEach(task => task.reduceProject());
        }
    };
    const _renumberTasks = (projectNumber, taskNumber) => {
        for (let i = _allProjects[projectNumber].tasks.length - 1; i >= taskNumber; i--) {
            _allProjects[projectNumber].tasks[i].reduceTask();
        }
    };
    const _sortTasks = projectNumber => {
        const sortedTasks = DOMManip.sortArray(_allProjects[projectNumber].getTasks());
        _allProjects[projectNumber].tasks = sortedTasks.map(ele => ele);
    };

    //gets the info that was put into the input, checks if it is acceptable, adds it to the
    //allProjects array if it is, and saves to localstorage
    const addProject = e => {
        const newProjectInfo = DOMManip.getNewProjInfo();
        const goodProject = DOMManip.checkNewProject(e, newProjectInfo);
        if (goodProject) {
            _allProjects.push(new Project(newProjectInfo.name));
            DOMManip.updateProjectList();
            dataStorage.saveData();
        }
    };
    //gets the info that was put into the inputs, checks if it is all acceptable, adds it to the
    //allProjects array under the correct project if it is, and saves to localstorage
    const addTask = e => {
        const newTaskInfo = DOMManip.getTaskInfo();
        const goodTask = DOMManip.checkNewTask(e, newTaskInfo);
        if (goodTask) {
            const newTask = new Task(
                newTaskInfo.name,
                newTaskInfo.description,
                newTaskInfo.date,
                newTaskInfo.priority,
                "",
                newTaskInfo.project,
                newTaskInfo.number
            );

            const projectNumber = newTaskInfo.project;
            _allProjects[projectNumber].tasks.push(newTask);

            _sortTasks(projectNumber);

            DOMManip.updateTaskList(projectNumber);
            dataStorage.saveData();
        }
    };
    //does the same as a new project, but getting the information from different locations and
    //instead of adding a new project, adjusts the project at a certain index
    const confirmProjectEdit = e => {
        const editTitle = DOMManip.getElement(".title-edit").value;
        const projectNumber = DOMManip.getElement(".project-container").dataset.project;
        const goodProject = DOMManip.checkNewProject(e, { name: editTitle });
        if (goodProject) {
            _allProjects[projectNumber].setName(editTitle);
            DOMManip.updateProjectList();
            dataStorage.saveData();
        }
    };

    //does the same as a new task, but getting the information from different locations and
    //instead of adding a new task, adjusts the task at a certain index under a specific project

    const confirmTaskEdit = e => {
        const editTask = e.currentTarget.parentElement.dataset.task;
        const projectNumber = e.currentTarget.parentElement.dataset.project;
        const editTaskInfo = DOMManip.getTaskInfo(editTask, projectNumber);
        const goodTask = DOMManip.checkNewTask(e, editTaskInfo);
        if (goodTask) {
            _allProjects[editTaskInfo.project].tasks[editTask] = new Task(
                editTaskInfo.name,
                editTaskInfo.description,
                editTaskInfo.date,
                editTaskInfo.priority,
                "",
                editTaskInfo.project,
                editTaskInfo.number
            );
            _sortTasks(projectNumber);
            DOMManip.updateTaskList(projectNumber);
            dataStorage.saveData();
        }
    };
    const confirmTaskDelete = e => {
        const projectNumber = e.currentTarget.parentElement.dataset.project;
        const taskNumber = e.currentTarget.parentElement.dataset.task;
        _renumberTasks(projectNumber, taskNumber);
        _allProjects[projectNumber].tasks.splice(taskNumber, 1);

        DOMManip.refreshTaskSides();
        DOMManip.getElement(`#project-${projectNumber}`).click();
        dataStorage.saveData();
    };

    //removes a project from the allProjects array and saves to localstorage

    const deleteProject = () => {
        const projectNumber = DOMManip.getElement(".project-container").dataset.project;
        _renumberProjects(projectNumber);
        _allProjects.splice(projectNumber, 1);
        if (DOMManip.getElement("#projects-toggle").classList.contains("closed")) {
            DOMManip.getElement("#projects-toggle").click();
        }
        DOMManip.updateProjectList();
        DOMManip.refreshTaskSides();
        DOMManip.showToday();
        dataStorage.saveData();
    };

    //gets when a checkbox has been clicked and changes the task's status to complete if it's not
    //complete, and removes that if it's been unchecked.
    const toggleTaskComplete = e => {
        const selectedTask = e.currentTarget.parentElement;
        const projectNumber = selectedTask.dataset.project;
        const taskNumber = selectedTask.dataset.task;
        _allProjects[projectNumber].tasks[taskNumber].toggleComplete();
        if (DOMManip.getElement(".selected").id == "todays-todo-side") {
            DOMManip.showToday(e);
        } else if (DOMManip.getElement(".selected").id == "overdue-todo-side") {
            DOMManip.showOverdue(e);
        } else if (DOMManip.getElement(".selected").id == "days-todo-side") {
            DOMManip.changeDays();
        } else {
            DOMManip.showProject(e);
        }
        DOMManip.refreshTaskSides();
        dataStorage.saveData();
    };

    //returns a read-only copy of the projects in the allProjects array
    const getAllProjects = () => {
        return _allProjects.map(ele => ele);
    };
    const getCurrentDays = () => _currentDaysRequested;
    const setCurrentDays = newValue => (_currentDaysRequested = newValue);

    //saves the loaded projects from localstorage into the allprojects array
    const loadProjects = () => {
        _allProjects = dataStorage.loadData();
    };
    const confirmAllClear = () => {
        dataStorage.clearData();
        _allProjects = dataStorage.loadData();
        DOMManip.updateProjectList();
        DOMManip.refreshTaskSides();
        DOMManip.showToday();
    };

    return {
        addProject,
        addTask,
        confirmProjectEdit,
        confirmTaskEdit,
        confirmTaskDelete,
        deleteProject,
        toggleTaskComplete,
        getAllProjects,
        loadProjects,
        getCurrentDays,
        setCurrentDays,
        confirmAllClear,
    };
})();

//runs at the load of the website
// eslint-disable-next-line no-unused-vars
const initWebsite = (() => {
    DOMManip.startPage();
})();
