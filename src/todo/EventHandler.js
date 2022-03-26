import DOMManip from "./DOMManip";
import { projectFunctions } from "./index";

const EventHandler = (() => {
    //activates the Add project button
    const clearTextBox = () => {
        DOMManip.getElements("input[type='text' i]").forEach(ele =>
            ele.removeEventListener("click", DOMManip.removeText, {
                once: true,
            })
        );
        DOMManip.getElements("input[type='text' i]").forEach(ele =>
            ele.addEventListener("click", DOMManip.removeText, { once: true })
        );
    };
    //activates the add button and the side toggles
    const activateAddButton = () => {
        DOMManip.getElement("#add-project-button").removeEventListener("click", DOMManip.cancelNewProject);
        DOMManip.getElement("#add-project-button").addEventListener("click", DOMManip.setupNewProject);
    };
    const activateClearAllButton = () => {
        DOMManip.getElement("#clear-all-button").removeEventListener("mouseleave", DOMManip.cancelClearAll);
        DOMManip.getElement("#clear-all-button").removeEventListener("click", DOMManip.confirmClearAll);
        DOMManip.getElement("#clear-all-button").removeEventListener(
            "click",
            projectFunctions.confirmAllClear
        );
        DOMManip.getElement("#clear-all-button").addEventListener("click", DOMManip.confirmClearAll);
    };

    //activates the listeners for all of clickable buttons at the start of the page load
    const initStartingListeners = () => {
        activateAddButton();
        activateClearAllButton();
        DOMManip.getElements(".dropdown-toggle").forEach(ele =>
            ele.addEventListener("click", DOMManip.expandToggle, {
                capture: true,
            })
        );
    };

    //changes the add project button to cancel adding project and activates the submit button
    const addProjectSubmission = () => {
        DOMManip.getElement("#add-project-button").removeEventListener("click", DOMManip.setupNewProject);
        DOMManip.getElement("#add-project-button").addEventListener("click", DOMManip.cancelNewProject);
        DOMManip.getElement("#new-proj-add-button").addEventListener("click", projectFunctions.addProject);
    };

    //clicking the Today header or any of the tasks for today brings up the Today page
    const activateToday = () => {
        DOMManip.getElement("#todays-todo-side").addEventListener("click", DOMManip.showToday);
        DOMManip.getElements(".task-side-label.today").forEach(ele =>
            ele.addEventListener("click", DOMManip.showToday)
        );
    };
    //clicking the Overdue header or any of the task that are Overdue brings up the Overdue page
    const activateOverdue = () => {
        DOMManip.getElement("#overdue-todo-side").addEventListener("click", DOMManip.showOverdue);
        DOMManip.getElements(".task-side-label.overdue").forEach(ele =>
            ele.addEventListener("click", DOMManip.showOverdue)
        );
    };
    //clicking the Overdue header or any of the task that are Overdue brings up the Overdue page
    const activateDays = () => {
        DOMManip.getElement("#days-todo-side").addEventListener("click", DOMManip.showDays);
    };

    //makes the projects clickable, maintains only one action listener on each project
    const activateProjects = () => {
        DOMManip.getElements(".project-side-label").forEach(ele =>
            ele.removeEventListener("click", DOMManip.showProject)
        );
        DOMManip.getElements(".project-side-label").forEach(ele =>
            ele.addEventListener("click", DOMManip.showProject)
        );
    };
    //turns on all side panel pages
    const activateSides = () => {
        activateToday();
        activateOverdue();
        activateDays();
        activateProjects();
    };
    //activates the edit project buttons
    const activateProjectButtons = () => {
        DOMManip.getElement(".edit-button.title").addEventListener("click", DOMManip.displayEditProject);
        DOMManip.getElement(".edit-button.delete").addEventListener("click", DOMManip.displayDeleteProject);
    };
    //activates the cancel project-edit button
    const activateCancelButton = button => {
        button.addEventListener("click", DOMManip.cancelProjectEdit);
    };
    //changes the project title edit into the confirm button
    const activateConfirmProjectEdit = button => {
        button.removeEventListener("click", DOMManip.displayEditProject);
        button.addEventListener("click", projectFunctions.confirmProjectEdit);
    };
    //activates the delete project button
    const activateDeleteProject = button => {
        button.addEventListener("click", projectFunctions.deleteProject);
    };

    //activates the add new task button
    const activateAddTaskButton = () => {
        DOMManip.getElement("#add-task-button").addEventListener("click", projectFunctions.addTask);
    };
    //activates the edit task button for that specific task
    const _activateEditTaskButton = button => {
        button.removeEventListener("click", projectFunctions.confirmTaskEdit);
        button.addEventListener("click", DOMManip.displayEditTask);
    };
    const _activateDeleteTaskButton = button => {
        button.removeEventListener("click", projectFunctions.confirmTaskDelete);
        button.addEventListener("click", DOMManip.displayDeleteTask);
    };
    const activateTaskButtons = (edit, del) => {
        _activateEditTaskButton(edit);
        _activateDeleteTaskButton(del);
    };
    //makes the task's check box clickable to mark tasks as complete
    const activateCheckbox = index => {
        DOMManip.getElement(".tasks-container").childNodes[index].firstElementChild.addEventListener(
            "click",
            projectFunctions.toggleTaskComplete
        );
    };
    //If a project title is shown on a task, clicking it goes to the associated project
    const activateProjectLink = button => {
        button.addEventListener("click", DOMManip.linkProject);
    };
    //changes the button to edit a task into a confirmation button and activates the cancel button
    const activateConfirmTaskEdit = button => {
        button.removeEventListener("click", DOMManip.displayEditTask);
        button.addEventListener("click", projectFunctions.confirmTaskEdit);
        button.nextSibling.removeEventListener("click", DOMManip.displayDeleteTask);
        button.nextSibling.addEventListener("click", DOMManip.cancelEdit);
    };
    const activateConfirmTaskDelete = button => {
        button.previousSibling.removeEventListener("click", DOMManip.displayEditTask);
        button.previousSibling.addEventListener("click", projectFunctions.confirmTaskDelete);
        button.removeEventListener("click", DOMManip.displayDeleteTask);
        button.addEventListener("click", DOMManip.cancelEdit);
    };
    const activateDaysSelector = () => {
        DOMManip.getElement(".days-selector").addEventListener("change", DOMManip.changeDays);
    };

    const activateConfirmClearAll = () => {
        DOMManip.getElement("#clear-all-button").removeEventListener("click", DOMManip.confirmClearAll);
        DOMManip.getElement("#clear-all-button").addEventListener("click", projectFunctions.confirmAllClear);
        DOMManip.getElement("#clear-all-button").addEventListener("mouseleave", DOMManip.cancelClearAll);
    };

    return {
        activateAddButton,
        initStartingListeners,
        addProjectSubmission,
        activateToday,
        activateProjects,
        activateOverdue,
        activateSides,
        clearTextBox,
        activateProjectButtons,
        activateAddTaskButton,
        activateCheckbox,
        activateProjectLink,
        activateTaskButtons,
        activateConfirmProjectEdit,
        activateConfirmTaskEdit,
        activateConfirmTaskDelete,
        activateCancelButton,
        activateDeleteProject,
        activateDaysSelector,
        activateClearAllButton,
        activateConfirmClearAll,
    };
})();

export default EventHandler;
