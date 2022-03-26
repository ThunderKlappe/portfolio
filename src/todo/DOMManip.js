import { projectFunctions } from ".";
import EventHandler from "./EventHandler";
import { toDate, format, add, parseISO, parse, isBefore, startOfDay } from "date-fns";

const DOMManip = (() => {
    //shorthand to get elements easier
    const getElement = selector => document.querySelector(selector);
    const getElements = selector => document.querySelectorAll(selector);

    //shorthand to make a new element and add attributes to it
    const _makeNewElement = (type, id = "", HTMLClass = "", text = "", ...attributes) => {
        const newElem = document.createElement(type);
        if (id != "") {
            newElem.setAttribute("id", id);
        }
        if (HTMLClass != "") {
            newElem.setAttribute("class", HTMLClass);
        }
        newElem.textContent = text;
        if (attributes.length > 0) {
            attributes.forEach(att => newElem.setAttribute(Object.keys(att)[0], att[Object.keys(att)]));
        }

        return newElem;
    };
    const removeText = e => {
        e.currentTarget.value = "";
    };

    //inserts a DOM element after another element
    const _insertAfter = (newNode, existingNode) => {
        existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    };

    //clears out all child nodes of an element, skips as many elements as requested
    const _removeAllChildren = (element, skip = 0) => {
        for (let i = element.childNodes.length; i > skip; i--) {
            element.childNodes[i - 1].remove();
        }
    };

    //sorts an array of tasks by the date;
    const sortArray = taskArray => {
        let sortedArray = taskArray.map(ele => ele);
        for (let i = 1; i < sortedArray.length; i++) {
            for (let j = 0; j < sortedArray.length - 1; j++) {
                const firstTask = parse(sortedArray[j].getDate(), "MM/dd/yyyy", new Date());
                const secondTask = parse(sortedArray[j + 1].getDate(), "MM/dd/yyyy", new Date());
                if (isBefore(secondTask, firstTask)) {
                    let placeholder = sortedArray[j];
                    sortedArray[j] = sortedArray[j + 1];
                    sortedArray[j + 1] = placeholder;
                }
            }
        }
        return sortedArray;
    };

    //fixes strange bug where elements animated from their default state to their css styled state
    const _fixStartingAnimations = () => {
        const animatable = getElements(".fix-anim");
        animatable.forEach(ele => {
            ele.classList.add("anim");
            ele.classList.remove("fix-anim");
        });
    };

    //adds all of the starting element to the page when first loading the page
    const _makeStartingPage = () => {
        const header = _makeNewElement("div", "header", "", "To-Do List");
        document.body.appendChild(header);

        const content = _makeNewElement("div", "content");

        const sidePanel = _makeNewElement("div", "side-panel");

        const todaySideHeaderContainer = _makeNewElement("div", "", "side-header-container");
        const todaysTodoSide = _makeNewElement("div", "todays-todo-side", "side-header today", "Today");
        const todaySideDropdown = _makeNewElement(
            "div",
            "today-toggle",
            "dropdown-toggle fix-anim fa-solid fa-caret-down"
        );
        todaysTodoSide.appendChild(todaySideDropdown);
        todaySideHeaderContainer.appendChild(todaysTodoSide);

        const overdueSideHeaderContainer = _makeNewElement("div", "", "side-header-container");
        const overdueTodoSide = _makeNewElement("div", "overdue-todo-side", "side-header overdue", "Overdue");
        const overdueSideDropdown = _makeNewElement(
            "div",
            "overdue-toggle",
            "dropdown-toggle fix-anim closed fa-solid fa-caret-down"
        );
        overdueTodoSide.appendChild(overdueSideDropdown);
        overdueSideHeaderContainer.appendChild(overdueTodoSide);

        const daysSideHeaderContainer = _makeNewElement("div", "", "side-header-container");
        const daysTodoSide = _makeNewElement("div", "days-todo-side", "side-header days", "Days Away");
        daysSideHeaderContainer.appendChild(daysTodoSide);

        const projectSideHeaderContainer = _makeNewElement("div", "", "side-header-container");
        const projectsSide = _makeNewElement("div", "projects-side", "side-header", "Projects");
        const projectSideDropdown = _makeNewElement(
            "div",
            "projects-toggle",
            "dropdown-toggle fix-anim fa-solid fa-caret-down"
        );
        projectsSide.appendChild(projectSideDropdown);
        projectSideHeaderContainer.appendChild(projectsSide);

        sidePanel.appendChild(todaySideHeaderContainer);
        sidePanel.appendChild(overdueSideHeaderContainer);
        sidePanel.appendChild(daysSideHeaderContainer);
        sidePanel.appendChild(projectSideHeaderContainer);

        const mainDisplay = _makeNewElement("div", "main-display");

        const addProjectButtonWrapper = _makeNewElement("div", "add-project-button-wrapper");
        const addProjectButtonContainer = _makeNewElement("div", "add-project-button-container");
        const addProjctButton = _makeNewElement("button", "add-project-button", "add-button fix-anim", "+");
        const addProjctButtonText = _makeNewElement("span", "add-project-button-text", "fix-anim", "Project");
        addProjctButton.appendChild(addProjctButtonText);
        addProjectButtonContainer.appendChild(addProjctButton);
        addProjectButtonWrapper.appendChild(addProjectButtonContainer);

        const clearAllButtonContainer = _makeNewElement("div", "clear-all-button-container");
        const clearAllButton = _makeNewElement("button", "clear-all-button", "edit-button delete fix-anim");
        const clearAllIcon = _makeNewElement("i", "", "fa-solid fa-trash-can edit-icon");
        const clearAllText = _makeNewElement("span", "clear-all-button-text", "fix-anim", "Clear All Data");
        clearAllButton.appendChild(clearAllIcon);
        clearAllButton.appendChild(clearAllText);
        clearAllButtonContainer.appendChild(clearAllButton);

        content.appendChild(sidePanel);
        content.appendChild(mainDisplay);
        content.appendChild(addProjectButtonWrapper);
        content.appendChild(clearAllButtonContainer);
        document.body.appendChild(content);
    };

    //goes through all of the projects and if a task's due date is offset by a certain days from today
    //it adds that task to an array
    const _getTasks = offset => {
        let todaysTasks = [];
        const dayRequested = format(add(toDate(new Date()), { days: offset }), "MM/dd/yyyy");
        projectFunctions.getAllProjects().forEach(proj => {
            proj.tasks.forEach(task => {
                const taskDate = format(parse(task.getDate(), "MM/dd/yyyy", new Date()), "MM/dd/yyyy");
                if (taskDate == dayRequested && task.getComplete() == false) {
                    todaysTasks.push(task);
                }
            });
        });
        return todaysTasks;
    };

    //gets all tasks that are due earlier than today
    const _getOverdueTasks = () => {
        let overdueTasks = [];
        const today = startOfDay(new Date());
        projectFunctions.getAllProjects().forEach(proj => {
            proj.tasks.forEach(task => {
                if (
                    isBefore(parse(task.getDate(), "MM/dd/yyyy", new Date()), today) &&
                    task.getComplete() == false
                ) {
                    overdueTasks.push(task);
                }
            });
        });
        return overdueTasks;
    };

    //takes in an array of error messages and puts them directly above the parent of that element
    //makes the error messages dissappear after they've been read
    const _displayErrors = (e, input) => {
        input.forEach(ele => {
            const error = _makeNewElement("div", "", "error-message", ele);
            const parent = e.currentTarget.parentElement;
            parent.parentElement.insertBefore(error, parent);
            setTimeout(() => (error.style.opacity = 0), 2000);
            setTimeout(() => error.remove(), 4000);
        });
    };
    //toggles whether or not an element has the class "active".
    const _toggleActive = elementID => {
        const element = getElement(elementID);
        element.classList.contains("active")
            ? element.classList.remove("active")
            : element.classList.add("active");
    };

    //puts an array of elements underneath a parent element
    const _revealArray = (parent, array, type, due = "") => {
        _removeAllChildren(parent, 1);
        array.forEach((elem, index) =>
            parent.appendChild(
                _makeNewElement(
                    "div",
                    `${type}-${index}`,
                    `${type}-side-label ${due} ${type == "project" && elem.isSelected() ? "selected" : ""}`,
                    elem.getName(),
                    { "data-index": `${index}` }
                )
            )
        );
    };

    //shows the tasks that are due today on the side panel
    const _displayTodaySide = () => {
        if (!getElement("#today-toggle").classList.contains("closed")) {
            _revealArray(getElement("#todays-todo-side").parentElement, _getTasks(0), "task", "today");
        }
        EventHandler.activateToday();
    };
    //shows the tasks that are past due on the side panel
    const _displayOverdueSide = () => {
        if (!getElement("#overdue-toggle").classList.contains("closed")) {
            _revealArray(
                getElement("#overdue-todo-side").parentElement,
                _getOverdueTasks(),
                "task",
                "overdue"
            );
        }
        EventHandler.activateOverdue();
    };
    //updates all of the task containing side panel categories
    const refreshTaskSides = () => {
        _displayOverdueSide();
        _displayTodaySide();
    };
    //shows all projects on the side panel
    const _displayProjects = () => {
        _revealArray(
            getElement("#projects-side").parentElement,
            projectFunctions.getAllProjects(),
            "project"
        );
    };

    //returns what the current selected project number is
    const _getProjectNumber = () => {
        if (getElement("#projects-toggle").classList.contains("closed")) {
            return getElement(".project-container").dataset.project;
        } else {
            return getElement(".selected").dataset.index;
        }
    };

    //puts the title of the project and the edit buttons at the top of the page
    const _displayTitle = () => {
        const projectNumber = _getProjectNumber();
        const currentProject = projectFunctions.getAllProjects()[projectNumber];
        const titleWrapper = getElement(".project-title-wrapper");
        const titleButtonContainer = _makeNewElement(
            "div",
            `project-${projectNumber}-title-button-container`,
            "button-container project"
        );
        const projectTitle = _makeNewElement(
            "div",
            `project-${projectNumber}-title`,
            "project-title",
            `${currentProject.getName()}`
        );

        const editTitleButton = _makeNewElement(
            "button",
            `project-${projectNumber}-edit-button`,
            "edit-button title"
        );
        const editTitleIcon = _makeNewElement("i", "", "fa-solid fa-pencil edit-icon");
        const editTitleText = _makeNewElement("span", "", "edit-text", "Edit Title");
        editTitleButton.appendChild(editTitleIcon);
        editTitleButton.appendChild(editTitleText);

        const deleteProjectButton = _makeNewElement(
            "button",
            `project-${projectNumber}-delete-button`,
            "edit-button delete"
        );
        const deleteProjectIcon = _makeNewElement("i", "", "fa-solid fa-trash edit-icon");
        const deleteProjectText = _makeNewElement("span", "", "edit-text", "Delete Project");
        deleteProjectButton.appendChild(deleteProjectIcon);
        deleteProjectButton.appendChild(deleteProjectText);

        titleButtonContainer.appendChild(editTitleButton);
        titleButtonContainer.appendChild(deleteProjectButton);

        if (titleWrapper.childNodes.length > 0) {
            _removeAllChildren(titleWrapper);
        }
        titleWrapper.appendChild(projectTitle);
        titleWrapper.appendChild(titleButtonContainer);
    };

    //clears the selection on the side panel
    const _clearSideSelection = () => {
        getElements(".project-side-label").forEach(ele => ele.classList.remove("selected"));
        getElement("#todays-todo-side").classList.remove("selected");
        getElement("#overdue-todo-side").classList.remove("selected");
        getElement("#days-todo-side").classList.remove("selected");
        projectFunctions.getAllProjects().forEach(proj => proj.markSelected(false));
    };

    //clears and marks the selection for a given task category
    const _setTaskSelection = type => {
        _clearSideSelection();
        getElement(`#${type}-todo-side`).classList.add("selected");
    };

    //highlights what project (or todays tasks) is selected. Defaults to the first project
    const _markSelectedProject = e => {
        if (e) {
            if (e.currentTarget.classList.contains("project-side-label")) {
                _clearSideSelection();
                projectFunctions.getAllProjects()[e.target.dataset.index].markSelected(true);
                e.target.classList.add("selected");
            } else if (e.currentTarget.classList.contains("today")) {
                _setTaskSelection("todays");
            } else if (e.currentTarget.classList.contains("overdue")) {
                _setTaskSelection("overdue");
            } else if (e.currentTarget.classList.contains("days")) {
                _setTaskSelection("days");
            }
        } else {
            _setTaskSelection("todays");
        }
    };

    //returns which number element a task is in a given list.
    const getTaskIndex = e => {
        return (
            Array.from(e.currentTarget.parentNode.parentNode.children).indexOf(e.currentTarget.parentNode) - 1
        );
    };

    //adds the Add Task entry to the bottom of the project
    const _displayTaskInput = () => {
        const projectContainer = getElement(".project-container");
        const addTaskContainer = _makeNewElement("div", "add-task-container", "input-container");
        const addTaskName = _makeNewElement(
            "input",
            "add-task-name-input",
            "add-task-info",
            "",
            { type: "text" },
            { value: "Task Name" }
        );
        const addTaskDescription = _makeNewElement(
            "input",
            "add-task-description-input",
            "add-task-info",
            "",
            { type: "text" },
            { value: "Task Description" }
        );
        const addTaskDate = _makeNewElement(
            "input",
            "add-task-date-input",
            "add-task-info",
            "Due Date",
            { type: "date" },
            { min: startOfDay(new Date()).toISOString().split("T")[0] }
        );
        const addTaskPriority = _makeNewElement("select", "add-task-priority-input", "add-task-info", "");
        const addTaskPriorityDefault = _makeNewElement("option", "", "", "Priority", { value: 0 });
        const addTaskPriorityLow = _makeNewElement(
            "option",
            "",
            "",
            "Low",
            { value: "Low" },
            { style: "background-color:#E1ADAD" }
        );
        const addTaskPriorityMedium = _makeNewElement(
            "option",
            "",
            "",
            "Medium",
            { value: "Medium" },
            { style: "background-color:#EFEF38" }
        );
        const addTaskPriorityHigh = _makeNewElement(
            "option",
            "",
            "",
            "High",
            { value: "High" },
            { style: "background-color:#9DCD8D" }
        );
        const addTaskButton = _makeNewElement("button", "add-task-button", "add-button", "Add New Task");

        addTaskPriority.appendChild(addTaskPriorityDefault);
        addTaskPriority.appendChild(addTaskPriorityLow);
        addTaskPriority.appendChild(addTaskPriorityMedium);
        addTaskPriority.appendChild(addTaskPriorityHigh);

        addTaskContainer.appendChild(addTaskName);
        addTaskContainer.appendChild(addTaskDescription);
        addTaskContainer.appendChild(addTaskDate);
        addTaskContainer.appendChild(addTaskPriority);
        addTaskContainer.appendChild(addTaskButton);

        projectContainer.appendChild(addTaskContainer);

        EventHandler.clearTextBox();
        EventHandler.activateAddTaskButton();
    };
    //when a project name is clicked on a task, brings up the selected project
    const linkProject = e => {
        const projectToggle = getElement("#projects-toggle");
        if (projectToggle.classList.contains("closed")) {
            projectToggle.click();
        }
        getElements(".project-side-label").forEach(elem => {
            if (elem.textContent == e.currentTarget.textContent) {
                elem.click();
            }
        });
    };

    //takes a given task and adds a DOM entry in a specific given index of the task list
    const _fillInTask = (task, taskNumber, index) => {
        const projectNumber = task.getProject();
        const tasksContainer = getElement(".tasks-container");

        const newTaskContainer = _makeNewElement(
            "div",
            `project-${projectNumber}-task-${taskNumber}-container`,
            `task-container ${task.getComplete() ? "complete" : ""}`,
            "",
            { "data-priority": task.getPriority() },
            { "data-task": taskNumber },
            { "data-project": projectNumber }
        );
        const newTaskCheckbox = _makeNewElement(
            "input",
            `project-${projectNumber}-task-${taskNumber}-checkbox`,
            "task-checkbox",
            "",
            { type: "checkbox" },
            { "data-project": projectNumber },
            { "data-task": taskNumber }
        );
        const newTaskName = _makeNewElement(
            "div",
            `project-${projectNumber}-task-${taskNumber}-name`,
            "task-name task-info",
            task.getName()
        );
        const newTaskDescription = _makeNewElement(
            "div",
            `project-${projectNumber}-task-${taskNumber}-description`,
            "task-description task-info",
            task.getDescription()
        );
        const newTaskDate = _makeNewElement(
            "div",
            `project-${projectNumber}-task-${taskNumber}-date`,
            "task-date task-info",
            task.getDate()
        );
        const taskProjectLabel = _makeNewElement(
            "div",
            `project-${projectNumber}-label`,
            "task-project-info task-info"
        );
        const newTaskEditButton = _makeNewElement(
            "button",
            `project-${projectNumber}-task-${taskNumber}-edit-button`,
            "edit-button"
        );
        const newTaskEditIcon = _makeNewElement("i", "", "fa-solid fa-pencil edit-icon");
        const newTaskEditText = _makeNewElement("span", "", "edit-text", "Edit Task");
        const newTaskDeleteButton = _makeNewElement(
            "button",
            `project-${projectNumber}-task-${taskNumber}-delete-button`,
            "edit-button delete"
        );
        const newTaskDeleteIcon = _makeNewElement("i", "", "fa-solid fa-trash edit-icon");
        const newTaskDeleteText = _makeNewElement("span", "", "delete-text", "Delete Task");

        newTaskContainer.appendChild(newTaskCheckbox);
        newTaskContainer.appendChild(newTaskName);
        newTaskContainer.appendChild(newTaskDescription);
        newTaskContainer.appendChild(newTaskDate);
        newTaskContainer.appendChild(taskProjectLabel);
        newTaskEditButton.appendChild(newTaskEditIcon);
        newTaskEditButton.appendChild(newTaskEditText);
        newTaskContainer.appendChild(newTaskEditButton);
        newTaskDeleteButton.appendChild(newTaskDeleteIcon);
        newTaskDeleteButton.appendChild(newTaskDeleteText);
        newTaskContainer.appendChild(newTaskDeleteButton);

        _insertAfter(newTaskContainer, tasksContainer.childNodes[index]);
        EventHandler.activateTaskButtons(newTaskEditButton, newTaskDeleteButton);
        EventHandler.activateCheckbox(index + 1);
        if (task.getComplete()) {
            newTaskCheckbox.setAttribute("checked", "checked");
        }
        let isProjectSelected = false;
        getElements(".project-side-label").forEach(elem => {
            if (elem.classList.contains("selected")) {
                isProjectSelected = true;
            }
        });
        if (!isProjectSelected) {
            taskProjectLabel.textContent = projectFunctions.getAllProjects()[projectNumber].getName();
            EventHandler.activateProjectLink(taskProjectLabel);
        }
    };

    //shows the confirm and cancel buttons for editing a project
    const _displayConfirmCancel = () => {
        const projectButtonContainer = getElement(".button-container");
        const projectNumber = _getProjectNumber();
        const confirmContainer = _makeNewElement(
            "div",
            `project-${projectNumber}-delete-button-container`,
            "button-container concan"
        );

        const confirmProjectButton = _makeNewElement(
            "button",
            `project-${projectNumber}-confirm-delete-button`,
            "edit-button confirm"
        );
        const confirmProjectIcon = _makeNewElement("i", "", "fa-solid fa-check edit-icon");
        const confirmProjectText = _makeNewElement("span", "", "edit-text", "Confirm");
        confirmProjectButton.appendChild(confirmProjectIcon);
        confirmProjectButton.appendChild(confirmProjectText);

        const cancelProjectButton = _makeNewElement(
            "button",
            `project-${projectNumber}-cancel-delete-button`,
            "edit-button cancel"
        );
        const cancelProjectIcon = _makeNewElement("i", "", "fa-solid fa-xmark edit-icon");
        const cancelProjectText = _makeNewElement("span", "", "edit-text", "Cancel");
        cancelProjectButton.appendChild(cancelProjectIcon);
        cancelProjectButton.appendChild(cancelProjectText);

        confirmContainer.appendChild(confirmProjectButton);
        confirmContainer.appendChild(cancelProjectButton);

        projectButtonContainer.appendChild(confirmContainer);
    };

    const _fillInDays = numberOfDays => {
        let overallIndexCount = 0;
        for (let i = 1; i <= numberOfDays; i++) {
            let displayedTask = false;
            let taskCount = 0;
            _getTasks(i).forEach(task => {
                _fillInTask(task, task.getNumber(), overallIndexCount++);
                displayedTask = true;
                taskCount++;
            });
            if (displayedTask) {
                _insertAfter(
                    _makeNewElement(
                        "div",
                        `day-${i}-away-label`,
                        "day-away-label",
                        format(add(toDate(new Date()), { days: i }), "MM/dd/yyyy")
                    ),
                    getElement(".tasks-container").childNodes[
                        getElement(".tasks-container").childNodes.length - taskCount - 1
                    ]
                );
                overallIndexCount++;
            }
        }
    };
    const _checkDays = (e, numChanged) => {
        const errorMessages = [];
        if (numChanged > 14) {
            errorMessages.push("Please enter less than 14 days");
        } else if (numChanged < 1) {
            errorMessages.push("Please enter 1 day or more");
        }
        if (errorMessages.length > 0) {
            _displayErrors(e, errorMessages);
            return false;
        } else {
            return true;
        }
    };
    const changeDays = e => {
        projectFunctions.setCurrentDays(getElement(".days-selector").value);
        if (_checkDays(e, projectFunctions.getCurrentDays())) {
            _removeAllChildren(getElement(".tasks-container"), 1);
            _fillInDays(projectFunctions.getCurrentDays());
        }
    };

    //displays a new project that can be selected to the side panel
    const setupNewProject = () => {
        _toggleActive("#add-project-button");
        _toggleActive("#add-project-button-text");
        const newProjInputContainer = _makeNewElement("div", "new-proj-input-container", "input-container");
        const newProjInput = _makeNewElement(
            "input",
            "new-proj-input",
            "",
            "",
            { type: "text" },
            { value: "Project Title" }
        );
        const newProjAddButton = _makeNewElement("button", "new-proj-add-button", "add-button", "Submit");

        newProjInputContainer.appendChild(newProjInput);
        newProjInputContainer.appendChild(newProjAddButton);

        getElement("#add-project-button-container").appendChild(newProjInputContainer);
        EventHandler.clearTextBox();
        EventHandler.addProjectSubmission();
    };
    //cancels the new Project dialog
    const cancelNewProject = () => {
        _toggleActive("#add-project-button");
        _toggleActive("#add-project-button-text");
        getElement("#new-proj-input-container").remove();
        EventHandler.activateAddButton();
    };

    //gets the information that was in the new project dialog
    const getNewProjInfo = () => {
        return { name: DOMManip.getElement("#new-proj-input").value };
    };

    //checks over the information given for a project and displays error messages if there is an issue
    const checkNewProject = (e, project) => {
        let errorMessages = [];
        if (project.name == "") {
            errorMessages.push("Please enter a title for the project");
        }
        if (errorMessages.length > 0) {
            _displayErrors(e, errorMessages);
            return false;
        } else {
            return true;
        }
    };
    //updates the side panel that displays the list of all of the projects
    const updateProjectList = () => {
        if (getElement("#new-proj-input-container")) {
            getElement("#new-proj-input-container").remove();
            _toggleActive("#add-project-button");
            _toggleActive("#add-project-button-text");
        }
        if (getElement(".title-edit")) {
            _displayTitle();
            EventHandler.activateProjectButtons();
        }
        if (!getElement("#projects-toggle").classList.contains("closed")) {
            _displayProjects();
            EventHandler.activateAddButton();
            EventHandler.activateProjects();
        }
    };

    //opens up the edit project dialog
    const displayEditProject = () => {
        const projectNumber = _getProjectNumber();
        const projecTitle = projectFunctions.getAllProjects()[projectNumber].getName();
        const titleWrapper = getElement(".project-title-wrapper");

        const projectTitleInput = _makeNewElement(
            "input",
            `project-${projectNumber}-title-input`,
            "title-edit",
            "",
            { type: "text" },
            { value: projecTitle },
            { "data-project": projectNumber }
        );
        titleWrapper.insertBefore(projectTitleInput, titleWrapper.lastElementChild);
        titleWrapper.firstElementChild.remove();

        const projectButtonContainer = getElement(".button-container");
        _removeAllChildren(projectButtonContainer);

        _displayConfirmCancel();

        EventHandler.activateConfirmProjectEdit(getElement(".edit-button.confirm"));
        EventHandler.activateCancelButton(getElement(".edit-button.cancel"));
    };

    //displays the confirmation of deleting a project
    const displayDeleteProject = () => {
        const projectButtonContainer = getElement(".button-container");
        _removeAllChildren(projectButtonContainer);

        _displayConfirmCancel();

        EventHandler.activateDeleteProject(getElement(".edit-button.confirm"));
        EventHandler.activateCancelButton(getElement(".edit-button.cancel"));
    };
    //discards the edit and displays the initial project title
    const cancelProjectEdit = () => {
        _displayTitle();
        EventHandler.activateProjectButtons();
    };

    //opens and closes the elements under the projects and today side headers when the toggle button is clicked
    const expandToggle = e => {
        let array = [];
        let type = "";
        let due = "";
        if (e.target.parentElement.id == "projects-side") {
            array = projectFunctions.getAllProjects();
            type = "project";
        } else if (e.target.parentElement.classList.contains("today")) {
            array = _getTasks(0);
            type = "task";
            due = "today";
        } else if (e.target.parentElement.classList.contains("overdue")) {
            array = _getOverdueTasks();
            type = "task";
            due = "overdue";
        }
        if (e.target.classList.contains("closed")) {
            _revealArray(e.target.parentElement.parentElement, array, type, due);
            EventHandler.activateSides();
        } else {
            _removeAllChildren(e.target.parentElement.parentElement, 1);
        }
        e.target.classList.toggle("closed");
        e.stopPropagation();
    };

    //returns the information given by the add task dialog
    const getTaskInfo = (index, projectNumber) => {
        let formInfo;
        let taskNumber;
        if (!projectNumber) {
            projectNumber = _getProjectNumber();
        }
        if (index == undefined) {
            formInfo = getElements(".add-task-info");
            taskNumber = projectFunctions.getAllProjects()[projectNumber].tasks.length;
        } else {
            formInfo = getElements(`#project-${projectNumber}-task-${index}-container .edit-task-info`);
            taskNumber = index;
        }
        return {
            name: formInfo[0].value,
            description: formInfo[1].value,
            date: formInfo[2].value ? format(toDate(parseISO(formInfo[2].value)), "MM/dd/yyyy") : "",
            priority: formInfo[3].value,
            project: projectNumber,
            number: taskNumber,
        };
    };

    //checks the information given in a new or updated task and displays error messages if anything is wrong
    const checkNewTask = (e, task) => {
        let errorMessages = [];
        if (task.name == "") {
            errorMessages.push("Please enter a name for the task");
        }
        if (task.description == "") {
            errorMessages.push("Please enter a description for the task");
        }
        if (task.date == "") {
            errorMessages.push("Please enter a due date for the task");
        }
        if (task.priority == 0) {
            errorMessages.push("Please enter a priority level for the task");
        }

        if (errorMessages.length > 0) {
            _displayErrors(e, errorMessages);
            return false;
        } else {
            return true;
        }
    };

    //refreshes the task list to display a new or edited task
    const updateTaskList = projectNumber => {
        if (getElement("#todays-todo-side").classList.contains("selected")) {
            showToday();
        } else if (getElement("#overdue-todo-side").classList.contains("selected")) {
            showOverdue();
        } else if (getElement("#days-todo-side").classList.contains("selected")) {
            changeDays();
        } else {
            getElement(`#project-${projectNumber}`).click();
        }
        if (!getElement("#today-toggle").classList.contains("closed")) {
            _displayTodaySide();
        }
        if (!getElement("#overdue-toggle").classList.contains("closed")) {
            _displayOverdueSide();
        }
    };

    const _confirmCancelTask = (confirmButton, cancelButton) => {
        confirmButton.firstElementChild.classList.remove("fa-pencil");
        confirmButton.firstElementChild.classList.add("fa-check");
        confirmButton.lastElementChild.textContent = "Confirm";
        confirmButton.classList.add("confirm");

        cancelButton.firstElementChild.classList.remove("fa-trash");
        cancelButton.firstElementChild.classList.add("fa-xmark");
        cancelButton.lastElementChild.textContent = "Cancel";
    };

    //shows the edit task dialog when the edit task button has been pressed, defaulting with the
    //current task information
    const displayEditTask = e => {
        const editButton = e.currentTarget;
        const deleteButton = e.currentTarget.nextSibling;
        const projectNumber = editButton.parentElement.dataset.project;
        const taskNumber = editButton.parentElement.dataset.task;
        const editTask = projectFunctions.getAllProjects()[projectNumber].getTasks()[taskNumber];

        const editTaskName = _makeNewElement(
            "input",
            "edit-task-name-input",
            "edit-task-info",
            "",
            { type: "text" },
            { value: editTask.getName() }
        );
        const editTaskDescription = _makeNewElement(
            "input",
            "edit-task-description-input",
            "edit-task-info",
            "",
            { type: "text" },
            { value: editTask.getDescription() }
        );
        const editTaskDate = _makeNewElement(
            "input",
            "edit-task-date-input",
            "edit-task-info",
            "Due Date",
            { type: "date" },
            { value: new Date(editTask.getDate()).toISOString().split("T")[0] },
            { min: startOfDay(new Date()).toISOString().split("T")[0] }
        );
        const editTaskPriority = _makeNewElement("select", "edit-task-priority-input", "edit-task-info", "");
        const editTaskPriorityLow = _makeNewElement(
            "option",
            "",
            "",
            "Low",
            { value: "Low" },
            { style: "background-color:#E1ADAD" }
        );
        const editTaskPriorityMedium = _makeNewElement(
            "option",
            "",
            "",
            "Medium",
            { value: "Medium" },
            { style: "background-color:#EFEF38" }
        );
        const editTaskPriorityHigh = _makeNewElement(
            "option",
            "",
            "",
            "High",
            { value: "High" },
            { style: "background-color:#9DCD8D" }
        );

        if (editTask.getPriority() == "Low") {
            editTaskPriorityLow.setAttribute("selected", "selected");
        } else if (editTask.getPriority() == "Medium") {
            editTaskPriorityMedium.setAttribute("selected", "selected");
        } else if (editTask.getPriority() == "High") {
            editTaskPriorityHigh.setAttribute("selected", "selected");
        }
        getElements(`#project-${projectNumber}-task-${taskNumber}-container .task-info`).forEach(ele =>
            ele.remove()
        );

        editTaskPriority.appendChild(editTaskPriorityLow);
        editTaskPriority.appendChild(editTaskPriorityMedium);
        editTaskPriority.appendChild(editTaskPriorityHigh);

        const editTaskContainer = getElement(`#project-${projectNumber}-task-${taskNumber}-container`);
        editTaskContainer.insertBefore(editTaskName, editTaskContainer.lastElementChild.previousSibling);
        editTaskContainer.insertBefore(
            editTaskDescription,
            editTaskContainer.lastElementChild.previousSibling
        );
        editTaskContainer.insertBefore(editTaskDate, editTaskContainer.lastElementChild.previousSibling);
        editTaskContainer.insertBefore(editTaskPriority, editTaskContainer.lastElementChild.previousSibling);

        _confirmCancelTask(editButton, deleteButton);

        EventHandler.activateConfirmTaskEdit(editButton);
    };

    const displayDeleteTask = e => {
        const deleteButton = e.currentTarget;
        const editButton = e.currentTarget.previousSibling;

        _confirmCancelTask(editButton, deleteButton);
        EventHandler.activateConfirmTaskDelete(deleteButton);
    };

    //sets task back to original before edit was requested
    const cancelEdit = e => {
        updateTaskList(e.currentTarget.parentElement.dataset.project);
    };

    //builds the basic outline of any page
    const _buildPage = type => {
        const mainDisplay = getElement("#main-display");
        if (mainDisplay.childNodes.length > 0) {
            mainDisplay.firstChild.remove();
        }
        const pageContainer = _makeNewElement("div", `${type}-containe}`, "project-container");
        const titleWrapper = _makeNewElement("div", `${type}-title-wrapper`, "project-title-wrapper");
        const tasksContainer = _makeNewElement("div", `${type}-tasks-container`, "tasks-container");
        const tasksWrapper = _makeNewElement("div", `${type}-tasks-wrapper`, "tasks-wrapper");
        const spacer = _makeNewElement("div");
        pageContainer.appendChild(titleWrapper);
        tasksContainer.appendChild(spacer);
        tasksWrapper.appendChild(tasksContainer);
        pageContainer.appendChild(tasksWrapper);
        mainDisplay.appendChild(pageContainer);
    };

    //displays a project page based on what project was selected
    const showProject = e => {
        _markSelectedProject(e);
        const projectNumber = _getProjectNumber();
        _buildPage(e, `project-${projectNumber}`);

        getElement(".project-container").setAttribute("data-project", projectNumber);
        _displayTitle();
        EventHandler.activateProjectButtons();
        projectFunctions
            .getAllProjects()[projectNumber].getTasks()
            .forEach((task, index) => _fillInTask(task, index, index));
        _displayTaskInput();
    };

    //shows the Today's Tasks page
    const showToday = e => {
        _markSelectedProject(e);
        _buildPage("today");

        const today = format(toDate(new Date()), "MM/dd/yyyy");
        const todayTitle = _makeNewElement("div", "today-title", "project-title", `Today: ${today}`);
        getElement(".project-title-wrapper").appendChild(todayTitle);

        _getTasks(0).forEach((task, index) => _fillInTask(task, task.getNumber(), index));
    };

    //brings up the page that shows all of the overdue tasks
    const showOverdue = e => {
        _markSelectedProject(e);
        _buildPage("overdue");

        const overdueTitle = _makeNewElement("div", "overdue-title", "project-title", "Overdue");
        getElement(".project-title-wrapper").appendChild(overdueTitle);

        _getOverdueTasks().forEach((task, index) => _fillInTask(task, task.getNumber(), index));
    };

    const showDays = e => {
        _markSelectedProject(e);
        _buildPage("days");

        const titleWrapper = getElement(".project-title-wrapper");
        const daysSelector = _makeNewElement(
            "input",
            "days-selector",
            "days-selector",
            "",
            { type: "number" },
            { max: 14 },
            { min: 1 },
            { value: projectFunctions.getCurrentDays() }
        );
        const daysTitle = _makeNewElement("div", "days-title", "project-title", "Days Away: ");
        titleWrapper.appendChild(daysTitle);
        titleWrapper.appendChild(daysSelector);

        EventHandler.activateDaysSelector();

        _fillInDays(projectFunctions.getCurrentDays());
    };

    const confirmClearAll = e => {
        e.currentTarget.lastElementChild.textContent = "Click here again to clear all data";
        EventHandler.activateConfirmClearAll();
    };

    const cancelClearAll = e => {
        e.currentTarget.lastElementChild.textContent = "Clear All Data";
        EventHandler.activateClearAllButton();
    };
    //initalizes the webpage and starts the basic listeners
    const startPage = () => {
        _makeStartingPage();
        setTimeout(_fixStartingAnimations, 1);
        EventHandler.initStartingListeners();
        projectFunctions.loadProjects();
        _displayTodaySide();
        _displayProjects();
        EventHandler.activateSides();
        getElement("#todays-todo-side").click();
    };

    return {
        getElement,
        getElements,
        removeText,
        checkNewProject,
        setupNewProject,
        cancelNewProject,
        refreshTaskSides,
        getNewProjInfo,
        updateProjectList,
        expandToggle,
        showProject,
        displayDeleteProject,
        getTaskInfo,
        getTaskIndex,
        checkNewTask,
        displayEditProject,
        displayEditTask,
        displayDeleteTask,
        linkProject,
        updateTaskList,
        cancelEdit,
        cancelProjectEdit,
        showToday,
        showOverdue,
        showDays,
        startPage,
        changeDays,
        sortArray,
        confirmClearAll,
        cancelClearAll,
    };
})();

export default DOMManip;
