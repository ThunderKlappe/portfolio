/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/todo/DOMManip.js":
/*!******************************!*\
  !*** ./src/todo/DOMManip.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/todo/index.js");
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventHandler */ "./src/todo/EventHandler.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parse/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isBefore/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/add/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");




var DOMManip = function () {
  //shorthand to get elements easier
  var getElement = function getElement(selector) {
    return document.querySelector(selector);
  };

  var getElements = function getElements(selector) {
    return document.querySelectorAll(selector);
  }; //shorthand to make a new element and add attributes to it


  var _makeNewElement = function _makeNewElement(type) {
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var HTMLClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var text = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
    var newElem = document.createElement(type);

    if (id != "") {
      newElem.setAttribute("id", id);
    }

    if (HTMLClass != "") {
      newElem.setAttribute("class", HTMLClass);
    }

    newElem.textContent = text;

    for (var _len = arguments.length, attributes = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
      attributes[_key - 4] = arguments[_key];
    }

    if (attributes.length > 0) {
      attributes.forEach(function (att) {
        return newElem.setAttribute(Object.keys(att)[0], att[Object.keys(att)]);
      });
    }

    return newElem;
  };

  var removeText = function removeText(e) {
    e.currentTarget.value = "";
  }; //inserts a DOM element after another element


  var _insertAfter = function _insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }; //clears out all child nodes of an element, skips as many elements as requested


  var _removeAllChildren = function _removeAllChildren(element) {
    var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    for (var i = element.childNodes.length; i > skip; i--) {
      element.childNodes[i - 1].remove();
    }
  }; //sorts an array of tasks by the date;


  var sortArray = function sortArray(taskArray) {
    var sortedArray = taskArray.map(function (ele) {
      return ele;
    });

    for (var i = 1; i < sortedArray.length; i++) {
      for (var j = 0; j < sortedArray.length - 1; j++) {
        var firstTask = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(sortedArray[j].getDate(), "MM/dd/yyyy", new Date());
        var secondTask = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(sortedArray[j + 1].getDate(), "MM/dd/yyyy", new Date());

        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(secondTask, firstTask)) {
          var placeholder = sortedArray[j];
          sortedArray[j] = sortedArray[j + 1];
          sortedArray[j + 1] = placeholder;
        }
      }
    }

    return sortedArray;
  }; //fixes strange bug where elements animated from their default state to their css styled state


  var _fixStartingAnimations = function _fixStartingAnimations() {
    var animatable = getElements(".fix-anim");
    animatable.forEach(function (ele) {
      ele.classList.add("anim");
      ele.classList.remove("fix-anim");
    });
  }; //adds all of the starting element to the page when first loading the page


  var _makeStartingPage = function _makeStartingPage() {
    var header = _makeNewElement("div", "header", "", "To-Do List");

    document.body.appendChild(header);

    var content = _makeNewElement("div", "content");

    var sidePanel = _makeNewElement("div", "side-panel");

    var todaySideHeaderContainer = _makeNewElement("div", "", "side-header-container");

    var todaysTodoSide = _makeNewElement("div", "todays-todo-side", "side-header today", "Today");

    var todaySideDropdown = _makeNewElement("div", "today-toggle", "dropdown-toggle fix-anim fa-solid fa-caret-down");

    todaysTodoSide.appendChild(todaySideDropdown);
    todaySideHeaderContainer.appendChild(todaysTodoSide);

    var overdueSideHeaderContainer = _makeNewElement("div", "", "side-header-container");

    var overdueTodoSide = _makeNewElement("div", "overdue-todo-side", "side-header overdue", "Overdue");

    var overdueSideDropdown = _makeNewElement("div", "overdue-toggle", "dropdown-toggle fix-anim closed fa-solid fa-caret-down");

    overdueTodoSide.appendChild(overdueSideDropdown);
    overdueSideHeaderContainer.appendChild(overdueTodoSide);

    var daysSideHeaderContainer = _makeNewElement("div", "", "side-header-container");

    var daysTodoSide = _makeNewElement("div", "days-todo-side", "side-header days", "Days Away");

    daysSideHeaderContainer.appendChild(daysTodoSide);

    var projectSideHeaderContainer = _makeNewElement("div", "", "side-header-container");

    var projectsSide = _makeNewElement("div", "projects-side", "side-header", "Projects");

    var projectSideDropdown = _makeNewElement("div", "projects-toggle", "dropdown-toggle fix-anim fa-solid fa-caret-down");

    projectsSide.appendChild(projectSideDropdown);
    projectSideHeaderContainer.appendChild(projectsSide);
    sidePanel.appendChild(todaySideHeaderContainer);
    sidePanel.appendChild(overdueSideHeaderContainer);
    sidePanel.appendChild(daysSideHeaderContainer);
    sidePanel.appendChild(projectSideHeaderContainer);

    var mainDisplay = _makeNewElement("div", "main-display");

    var addProjectButtonWrapper = _makeNewElement("div", "add-project-button-wrapper");

    var addProjectButtonContainer = _makeNewElement("div", "add-project-button-container");

    var addProjctButton = _makeNewElement("button", "add-project-button", "add-button fix-anim", "+");

    var addProjctButtonText = _makeNewElement("span", "add-project-button-text", "fix-anim", "Project");

    addProjctButton.appendChild(addProjctButtonText);
    addProjectButtonContainer.appendChild(addProjctButton);
    addProjectButtonWrapper.appendChild(addProjectButtonContainer);

    var clearAllButtonContainer = _makeNewElement("div", "clear-all-button-container");

    var clearAllButton = _makeNewElement("button", "clear-all-button", "edit-button delete fix-anim");

    var clearAllIcon = _makeNewElement("i", "", "fa-solid fa-trash-can edit-icon");

    var clearAllText = _makeNewElement("span", "clear-all-button-text", "fix-anim", "Clear All Data");

    clearAllButton.appendChild(clearAllIcon);
    clearAllButton.appendChild(clearAllText);
    clearAllButtonContainer.appendChild(clearAllButton);
    content.appendChild(sidePanel);
    content.appendChild(mainDisplay);
    content.appendChild(addProjectButtonWrapper);
    content.appendChild(clearAllButtonContainer);
    document.body.appendChild(content);
  }; //goes through all of the projects and if a task's due date is offset by a certain days from today
  //it adds that task to an array


  var _getTasks = function _getTasks(offset) {
    var todaysTasks = [];
    var dayRequested = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date()), {
      days: offset
    }), "MM/dd/yyyy");
    ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects().forEach(function (proj) {
      proj.tasks.forEach(function (task) {
        var taskDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(task.getDate(), "MM/dd/yyyy", new Date()), "MM/dd/yyyy");

        if (taskDate == dayRequested && task.getComplete() == false) {
          todaysTasks.push(task);
        }
      });
    });
    return todaysTasks;
  }; //gets all tasks that are due earlier than today


  var _getOverdueTasks = function _getOverdueTasks() {
    var overdueTasks = [];
    var today = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date());
    ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects().forEach(function (proj) {
      proj.tasks.forEach(function (task) {
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(task.getDate(), "MM/dd/yyyy", new Date()), today) && task.getComplete() == false) {
          overdueTasks.push(task);
        }
      });
    });
    return overdueTasks;
  }; //takes in an array of error messages and puts them directly above the parent of that element
  //makes the error messages dissappear after they've been read


  var _displayErrors = function _displayErrors(e, input) {
    input.forEach(function (ele) {
      var error = _makeNewElement("div", "", "error-message", ele);

      var parent = e.currentTarget.parentElement;
      parent.parentElement.insertBefore(error, parent);
      setTimeout(function () {
        return error.style.opacity = 0;
      }, 2000);
      setTimeout(function () {
        return error.remove();
      }, 4000);
    });
  }; //toggles whether or not an element has the class "active".


  var _toggleActive = function _toggleActive(elementID) {
    var element = getElement(elementID);
    element.classList.contains("active") ? element.classList.remove("active") : element.classList.add("active");
  }; //puts an array of elements underneath a parent element


  var _revealArray = function _revealArray(parent, array, type) {
    var due = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

    _removeAllChildren(parent, 1);

    array.forEach(function (elem, index) {
      return parent.appendChild(_makeNewElement("div", "".concat(type, "-").concat(index), "".concat(type, "-side-label ").concat(due, " ").concat(type == "project" && elem.isSelected() ? "selected" : ""), elem.getName(), {
        "data-index": "".concat(index)
      }));
    });
  }; //shows the tasks that are due today on the side panel


  var _displayTodaySide = function _displayTodaySide() {
    if (!getElement("#today-toggle").classList.contains("closed")) {
      _revealArray(getElement("#todays-todo-side").parentElement, _getTasks(0), "task", "today");
    }

    _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateToday();
  }; //shows the tasks that are past due on the side panel


  var _displayOverdueSide = function _displayOverdueSide() {
    if (!getElement("#overdue-toggle").classList.contains("closed")) {
      _revealArray(getElement("#overdue-todo-side").parentElement, _getOverdueTasks(), "task", "overdue");
    }

    _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateOverdue();
  }; //updates all of the task containing side panel categories


  var refreshTaskSides = function refreshTaskSides() {
    _displayOverdueSide();

    _displayTodaySide();
  }; //shows all projects on the side panel


  var _displayProjects = function _displayProjects() {
    _revealArray(getElement("#projects-side").parentElement, ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects(), "project");
  }; //returns what the current selected project number is


  var _getProjectNumber = function _getProjectNumber() {
    if (getElement("#projects-toggle").classList.contains("closed")) {
      return getElement(".project-container").dataset.project;
    } else {
      return getElement(".selected").dataset.index;
    }
  }; //puts the title of the project and the edit buttons at the top of the page


  var _displayTitle = function _displayTitle() {
    var projectNumber = _getProjectNumber();

    var currentProject = ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects()[projectNumber];
    var titleWrapper = getElement(".project-title-wrapper");

    var titleButtonContainer = _makeNewElement("div", "project-".concat(projectNumber, "-title-button-container"), "button-container project");

    var projectTitle = _makeNewElement("div", "project-".concat(projectNumber, "-title"), "project-title", "".concat(currentProject.getName()));

    var editTitleButton = _makeNewElement("button", "project-".concat(projectNumber, "-edit-button"), "edit-button title");

    var editTitleIcon = _makeNewElement("i", "", "fa-solid fa-pencil edit-icon");

    var editTitleText = _makeNewElement("span", "", "edit-text", "Edit Title");

    editTitleButton.appendChild(editTitleIcon);
    editTitleButton.appendChild(editTitleText);

    var deleteProjectButton = _makeNewElement("button", "project-".concat(projectNumber, "-delete-button"), "edit-button delete");

    var deleteProjectIcon = _makeNewElement("i", "", "fa-solid fa-trash edit-icon");

    var deleteProjectText = _makeNewElement("span", "", "edit-text", "Delete Project");

    deleteProjectButton.appendChild(deleteProjectIcon);
    deleteProjectButton.appendChild(deleteProjectText);
    titleButtonContainer.appendChild(editTitleButton);
    titleButtonContainer.appendChild(deleteProjectButton);

    if (titleWrapper.childNodes.length > 0) {
      _removeAllChildren(titleWrapper);
    }

    titleWrapper.appendChild(projectTitle);
    titleWrapper.appendChild(titleButtonContainer);
  }; //clears the selection on the side panel


  var _clearSideSelection = function _clearSideSelection() {
    getElements(".project-side-label").forEach(function (ele) {
      return ele.classList.remove("selected");
    });
    getElement("#todays-todo-side").classList.remove("selected");
    getElement("#overdue-todo-side").classList.remove("selected");
    getElement("#days-todo-side").classList.remove("selected");
    ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects().forEach(function (proj) {
      return proj.markSelected(false);
    });
  }; //clears and marks the selection for a given task category


  var _setTaskSelection = function _setTaskSelection(type) {
    _clearSideSelection();

    getElement("#".concat(type, "-todo-side")).classList.add("selected");
  }; //highlights what project (or todays tasks) is selected. Defaults to the first project


  var _markSelectedProject = function _markSelectedProject(e) {
    if (e) {
      if (e.currentTarget.classList.contains("project-side-label")) {
        _clearSideSelection();

        ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects()[e.target.dataset.index].markSelected(true);
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
  }; //returns which number element a task is in a given list.


  var getTaskIndex = function getTaskIndex(e) {
    return Array.from(e.currentTarget.parentNode.parentNode.children).indexOf(e.currentTarget.parentNode) - 1;
  }; //adds the Add Task entry to the bottom of the project


  var _displayTaskInput = function _displayTaskInput() {
    var projectContainer = getElement(".project-container");

    var addTaskContainer = _makeNewElement("div", "add-task-container", "input-container");

    var addTaskName = _makeNewElement("input", "add-task-name-input", "add-task-info", "", {
      type: "text"
    }, {
      value: "Task Name"
    });

    var addTaskDescription = _makeNewElement("input", "add-task-description-input", "add-task-info", "", {
      type: "text"
    }, {
      value: "Task Description"
    });

    var addTaskDate = _makeNewElement("input", "add-task-date-input", "add-task-info", "Due Date", {
      type: "date"
    }, {
      min: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date()).toISOString().split("T")[0]
    });

    var addTaskPriority = _makeNewElement("select", "add-task-priority-input", "add-task-info", "");

    var addTaskPriorityDefault = _makeNewElement("option", "", "", "Priority", {
      value: 0
    });

    var addTaskPriorityLow = _makeNewElement("option", "", "", "Low", {
      value: "Low"
    }, {
      style: "background-color:#E1ADAD"
    });

    var addTaskPriorityMedium = _makeNewElement("option", "", "", "Medium", {
      value: "Medium"
    }, {
      style: "background-color:#EFEF38"
    });

    var addTaskPriorityHigh = _makeNewElement("option", "", "", "High", {
      value: "High"
    }, {
      style: "background-color:#9DCD8D"
    });

    var addTaskButton = _makeNewElement("button", "add-task-button", "add-button", "Add New Task");

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
    _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].clearTextBox();
    _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateAddTaskButton();
  }; //when a project name is clicked on a task, brings up the selected project


  var linkProject = function linkProject(e) {
    var projectToggle = getElement("#projects-toggle");

    if (projectToggle.classList.contains("closed")) {
      projectToggle.click();
    }

    getElements(".project-side-label").forEach(function (elem) {
      if (elem.textContent == e.currentTarget.textContent) {
        elem.click();
      }
    });
  }; //takes a given task and adds a DOM entry in a specific given index of the task list


  var _fillInTask = function _fillInTask(task, taskNumber, index) {
    var projectNumber = task.getProject();
    var tasksContainer = getElement(".tasks-container");

    var newTaskContainer = _makeNewElement("div", "project-".concat(projectNumber, "-task-").concat(taskNumber, "-container"), "task-container ".concat(task.getComplete() ? "complete" : ""), "", {
      "data-priority": task.getPriority()
    }, {
      "data-task": taskNumber
    }, {
      "data-project": projectNumber
    });

    var newTaskCheckbox = _makeNewElement("input", "project-".concat(projectNumber, "-task-").concat(taskNumber, "-checkbox"), "task-checkbox", "", {
      type: "checkbox"
    }, {
      "data-project": projectNumber
    }, {
      "data-task": taskNumber
    });

    var newTaskName = _makeNewElement("div", "project-".concat(projectNumber, "-task-").concat(taskNumber, "-name"), "task-name task-info", task.getName());

    var newTaskDescription = _makeNewElement("div", "project-".concat(projectNumber, "-task-").concat(taskNumber, "-description"), "task-description task-info", task.getDescription());

    var newTaskDate = _makeNewElement("div", "project-".concat(projectNumber, "-task-").concat(taskNumber, "-date"), "task-date task-info", task.getDate());

    var taskProjectLabel = _makeNewElement("div", "project-".concat(projectNumber, "-label"), "task-project-info task-info");

    var newTaskEditButton = _makeNewElement("button", "project-".concat(projectNumber, "-task-").concat(taskNumber, "-edit-button"), "edit-button");

    var newTaskEditIcon = _makeNewElement("i", "", "fa-solid fa-pencil edit-icon");

    var newTaskEditText = _makeNewElement("span", "", "edit-text", "Edit Task");

    var newTaskDeleteButton = _makeNewElement("button", "project-".concat(projectNumber, "-task-").concat(taskNumber, "-delete-button"), "edit-button delete");

    var newTaskDeleteIcon = _makeNewElement("i", "", "fa-solid fa-trash edit-icon");

    var newTaskDeleteText = _makeNewElement("span", "", "delete-text", "Delete Task");

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

    _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateTaskButtons(newTaskEditButton, newTaskDeleteButton);
    _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateCheckbox(index + 1);

    if (task.getComplete()) {
      newTaskCheckbox.setAttribute("checked", "checked");
    }

    var isProjectSelected = false;
    getElements(".project-side-label").forEach(function (elem) {
      if (elem.classList.contains("selected")) {
        isProjectSelected = true;
      }
    });

    if (!isProjectSelected) {
      taskProjectLabel.textContent = ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects()[projectNumber].getName();
      _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateProjectLink(taskProjectLabel);
    }
  }; //shows the confirm and cancel buttons for editing a project


  var _displayConfirmCancel = function _displayConfirmCancel() {
    var projectButtonContainer = getElement(".button-container");

    var projectNumber = _getProjectNumber();

    var confirmContainer = _makeNewElement("div", "project-".concat(projectNumber, "-delete-button-container"), "button-container concan");

    var confirmProjectButton = _makeNewElement("button", "project-".concat(projectNumber, "-confirm-delete-button"), "edit-button confirm");

    var confirmProjectIcon = _makeNewElement("i", "", "fa-solid fa-check edit-icon");

    var confirmProjectText = _makeNewElement("span", "", "edit-text", "Confirm");

    confirmProjectButton.appendChild(confirmProjectIcon);
    confirmProjectButton.appendChild(confirmProjectText);

    var cancelProjectButton = _makeNewElement("button", "project-".concat(projectNumber, "-cancel-delete-button"), "edit-button cancel");

    var cancelProjectIcon = _makeNewElement("i", "", "fa-solid fa-xmark edit-icon");

    var cancelProjectText = _makeNewElement("span", "", "edit-text", "Cancel");

    cancelProjectButton.appendChild(cancelProjectIcon);
    cancelProjectButton.appendChild(cancelProjectText);
    confirmContainer.appendChild(confirmProjectButton);
    confirmContainer.appendChild(cancelProjectButton);
    projectButtonContainer.appendChild(confirmContainer);
  };

  var _fillInDays = function _fillInDays(numberOfDays) {
    var overallIndexCount = 0;

    var _loop = function _loop(i) {
      var displayedTask = false;
      var taskCount = 0;

      _getTasks(i).forEach(function (task) {
        _fillInTask(task, task.getNumber(), overallIndexCount++);

        displayedTask = true;
        taskCount++;
      });

      if (displayedTask) {
        _insertAfter(_makeNewElement("div", "day-".concat(i, "-away-label"), "day-away-label", (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date()), {
          days: i
        }), "MM/dd/yyyy")), getElement(".tasks-container").childNodes[getElement(".tasks-container").childNodes.length - taskCount - 1]);

        overallIndexCount++;
      }
    };

    for (var i = 1; i <= numberOfDays; i++) {
      _loop(i);
    }
  };

  var _checkDays = function _checkDays(e, numChanged) {
    var errorMessages = [];

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

  var changeDays = function changeDays(e) {
    ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.setCurrentDays(getElement(".days-selector").value);

    if (_checkDays(e, ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getCurrentDays())) {
      _removeAllChildren(getElement(".tasks-container"), 1);

      _fillInDays(___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getCurrentDays());
    }
  }; //displays a new project that can be selected to the side panel


  var setupNewProject = function setupNewProject() {
    _toggleActive("#add-project-button");

    _toggleActive("#add-project-button-text");

    var newProjInputContainer = _makeNewElement("div", "new-proj-input-container", "input-container");

    var newProjInput = _makeNewElement("input", "new-proj-input", "", "", {
      type: "text"
    }, {
      value: "Project Title"
    });

    var newProjAddButton = _makeNewElement("button", "new-proj-add-button", "add-button", "Submit");

    newProjInputContainer.appendChild(newProjInput);
    newProjInputContainer.appendChild(newProjAddButton);
    getElement("#add-project-button-container").appendChild(newProjInputContainer);
    _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].clearTextBox();
    _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].addProjectSubmission();
  }; //cancels the new Project dialog


  var cancelNewProject = function cancelNewProject() {
    _toggleActive("#add-project-button");

    _toggleActive("#add-project-button-text");

    getElement("#new-proj-input-container").remove();
    _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateAddButton();
  }; //gets the information that was in the new project dialog


  var getNewProjInfo = function getNewProjInfo() {
    return {
      name: DOMManip.getElement("#new-proj-input").value
    };
  }; //checks over the information given for a project and displays error messages if there is an issue


  var checkNewProject = function checkNewProject(e, project) {
    var errorMessages = [];

    if (project.name == "") {
      errorMessages.push("Please enter a title for the project");
    }

    if (errorMessages.length > 0) {
      _displayErrors(e, errorMessages);

      return false;
    } else {
      return true;
    }
  }; //updates the side panel that displays the list of all of the projects


  var updateProjectList = function updateProjectList() {
    if (getElement("#new-proj-input-container")) {
      getElement("#new-proj-input-container").remove();

      _toggleActive("#add-project-button");

      _toggleActive("#add-project-button-text");
    }

    if (getElement(".title-edit")) {
      _displayTitle();

      _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateProjectButtons();
    }

    if (!getElement("#projects-toggle").classList.contains("closed")) {
      _displayProjects();

      _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateAddButton();
      _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateProjects();
    }
  }; //opens up the edit project dialog


  var displayEditProject = function displayEditProject() {
    var projectNumber = _getProjectNumber();

    var projecTitle = ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects()[projectNumber].getName();
    var titleWrapper = getElement(".project-title-wrapper");

    var projectTitleInput = _makeNewElement("input", "project-".concat(projectNumber, "-title-input"), "title-edit", "", {
      type: "text"
    }, {
      value: projecTitle
    }, {
      "data-project": projectNumber
    });

    titleWrapper.insertBefore(projectTitleInput, titleWrapper.lastElementChild);
    titleWrapper.firstElementChild.remove();
    var projectButtonContainer = getElement(".button-container");

    _removeAllChildren(projectButtonContainer);

    _displayConfirmCancel();

    _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateConfirmProjectEdit(getElement(".edit-button.confirm"));
    _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateCancelButton(getElement(".edit-button.cancel"));
  }; //displays the confirmation of deleting a project


  var displayDeleteProject = function displayDeleteProject() {
    var projectButtonContainer = getElement(".button-container");

    _removeAllChildren(projectButtonContainer);

    _displayConfirmCancel();

    _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateDeleteProject(getElement(".edit-button.confirm"));
    _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateCancelButton(getElement(".edit-button.cancel"));
  }; //discards the edit and displays the initial project title


  var cancelProjectEdit = function cancelProjectEdit() {
    _displayTitle();

    _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateProjectButtons();
  }; //opens and closes the elements under the projects and today side headers when the toggle button is clicked


  var expandToggle = function expandToggle(e) {
    var array = [];
    var type = "";
    var due = "";

    if (e.target.parentElement.id == "projects-side") {
      array = ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects();
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

      _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateSides();
    } else {
      _removeAllChildren(e.target.parentElement.parentElement, 1);
    }

    e.target.classList.toggle("closed");
    e.stopPropagation();
  }; //returns the information given by the add task dialog


  var getTaskInfo = function getTaskInfo(index, projectNumber) {
    var formInfo;
    var taskNumber;

    if (!projectNumber) {
      projectNumber = _getProjectNumber();
    }

    if (index == undefined) {
      formInfo = getElements(".add-task-info");
      taskNumber = ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects()[projectNumber].tasks.length;
    } else {
      formInfo = getElements("#project-".concat(projectNumber, "-task-").concat(index, "-container .edit-task-info"));
      taskNumber = index;
    }

    return {
      name: formInfo[0].value,
      description: formInfo[1].value,
      date: formInfo[2].value ? (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(formInfo[2].value)), "MM/dd/yyyy") : "",
      priority: formInfo[3].value,
      project: projectNumber,
      number: taskNumber
    };
  }; //checks the information given in a new or updated task and displays error messages if anything is wrong


  var checkNewTask = function checkNewTask(e, task) {
    var errorMessages = [];

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
  }; //refreshes the task list to display a new or edited task


  var updateTaskList = function updateTaskList(projectNumber) {
    if (getElement("#todays-todo-side").classList.contains("selected")) {
      showToday();
    } else if (getElement("#overdue-todo-side").classList.contains("selected")) {
      showOverdue();
    } else if (getElement("#days-todo-side").classList.contains("selected")) {
      changeDays();
    } else {
      getElement("#project-".concat(projectNumber)).click();
    }

    if (!getElement("#today-toggle").classList.contains("closed")) {
      _displayTodaySide();
    }

    if (!getElement("#overdue-toggle").classList.contains("closed")) {
      _displayOverdueSide();
    }
  };

  var _confirmCancelTask = function _confirmCancelTask(confirmButton, cancelButton) {
    confirmButton.firstElementChild.classList.remove("fa-pencil");
    confirmButton.firstElementChild.classList.add("fa-check");
    confirmButton.lastElementChild.textContent = "Confirm";
    confirmButton.classList.add("confirm");
    cancelButton.firstElementChild.classList.remove("fa-trash");
    cancelButton.firstElementChild.classList.add("fa-xmark");
    cancelButton.lastElementChild.textContent = "Cancel";
  }; //shows the edit task dialog when the edit task button has been pressed, defaulting with the
  //current task information


  var displayEditTask = function displayEditTask(e) {
    var editButton = e.currentTarget;
    var deleteButton = e.currentTarget.nextSibling;
    var projectNumber = editButton.parentElement.dataset.project;
    var taskNumber = editButton.parentElement.dataset.task;
    var editTask = ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects()[projectNumber].getTasks()[taskNumber];

    var editTaskName = _makeNewElement("input", "edit-task-name-input", "edit-task-info", "", {
      type: "text"
    }, {
      value: editTask.getName()
    });

    var editTaskDescription = _makeNewElement("input", "edit-task-description-input", "edit-task-info", "", {
      type: "text"
    }, {
      value: editTask.getDescription()
    });

    var editTaskDate = _makeNewElement("input", "edit-task-date-input", "edit-task-info", "Due Date", {
      type: "date"
    }, {
      value: new Date(editTask.getDate()).toISOString().split("T")[0]
    }, {
      min: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date()).toISOString().split("T")[0]
    });

    var editTaskPriority = _makeNewElement("select", "edit-task-priority-input", "edit-task-info", "");

    var editTaskPriorityLow = _makeNewElement("option", "", "", "Low", {
      value: "Low"
    }, {
      style: "background-color:#E1ADAD"
    });

    var editTaskPriorityMedium = _makeNewElement("option", "", "", "Medium", {
      value: "Medium"
    }, {
      style: "background-color:#EFEF38"
    });

    var editTaskPriorityHigh = _makeNewElement("option", "", "", "High", {
      value: "High"
    }, {
      style: "background-color:#9DCD8D"
    });

    if (editTask.getPriority() == "Low") {
      editTaskPriorityLow.setAttribute("selected", "selected");
    } else if (editTask.getPriority() == "Medium") {
      editTaskPriorityMedium.setAttribute("selected", "selected");
    } else if (editTask.getPriority() == "High") {
      editTaskPriorityHigh.setAttribute("selected", "selected");
    }

    getElements("#project-".concat(projectNumber, "-task-").concat(taskNumber, "-container .task-info")).forEach(function (ele) {
      return ele.remove();
    });
    editTaskPriority.appendChild(editTaskPriorityLow);
    editTaskPriority.appendChild(editTaskPriorityMedium);
    editTaskPriority.appendChild(editTaskPriorityHigh);
    var editTaskContainer = getElement("#project-".concat(projectNumber, "-task-").concat(taskNumber, "-container"));
    editTaskContainer.insertBefore(editTaskName, editTaskContainer.lastElementChild.previousSibling);
    editTaskContainer.insertBefore(editTaskDescription, editTaskContainer.lastElementChild.previousSibling);
    editTaskContainer.insertBefore(editTaskDate, editTaskContainer.lastElementChild.previousSibling);
    editTaskContainer.insertBefore(editTaskPriority, editTaskContainer.lastElementChild.previousSibling);

    _confirmCancelTask(editButton, deleteButton);

    _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateConfirmTaskEdit(editButton);
  };

  var displayDeleteTask = function displayDeleteTask(e) {
    var deleteButton = e.currentTarget;
    var editButton = e.currentTarget.previousSibling;

    _confirmCancelTask(editButton, deleteButton);

    _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateConfirmTaskDelete(deleteButton);
  }; //sets task back to original before edit was requested


  var cancelEdit = function cancelEdit(e) {
    updateTaskList(e.currentTarget.parentElement.dataset.project);
  }; //builds the basic outline of any page


  var _buildPage = function _buildPage(type) {
    var mainDisplay = getElement("#main-display");

    if (mainDisplay.childNodes.length > 0) {
      mainDisplay.firstChild.remove();
    }

    var pageContainer = _makeNewElement("div", "".concat(type, "-containe}"), "project-container");

    var titleWrapper = _makeNewElement("div", "".concat(type, "-title-wrapper"), "project-title-wrapper");

    var tasksContainer = _makeNewElement("div", "".concat(type, "-tasks-container"), "tasks-container");

    var tasksWrapper = _makeNewElement("div", "".concat(type, "-tasks-wrapper"), "tasks-wrapper");

    var spacer = _makeNewElement("div");

    pageContainer.appendChild(titleWrapper);
    tasksContainer.appendChild(spacer);
    tasksWrapper.appendChild(tasksContainer);
    pageContainer.appendChild(tasksWrapper);
    mainDisplay.appendChild(pageContainer);
  }; //displays a project page based on what project was selected


  var showProject = function showProject(e) {
    _markSelectedProject(e);

    var projectNumber = _getProjectNumber();

    _buildPage(e, "project-".concat(projectNumber));

    getElement(".project-container").setAttribute("data-project", projectNumber);

    _displayTitle();

    _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateProjectButtons();
    ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects()[projectNumber].getTasks().forEach(function (task, index) {
      return _fillInTask(task, index, index);
    });

    _displayTaskInput();
  }; //shows the Today's Tasks page


  var showToday = function showToday(e) {
    _markSelectedProject(e);

    _buildPage("today");

    var today = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date()), "MM/dd/yyyy");

    var todayTitle = _makeNewElement("div", "today-title", "project-title", "Today: ".concat(today));

    getElement(".project-title-wrapper").appendChild(todayTitle);

    _getTasks(0).forEach(function (task, index) {
      return _fillInTask(task, task.getNumber(), index);
    });
  }; //brings up the page that shows all of the overdue tasks


  var showOverdue = function showOverdue(e) {
    _markSelectedProject(e);

    _buildPage("overdue");

    var overdueTitle = _makeNewElement("div", "overdue-title", "project-title", "Overdue");

    getElement(".project-title-wrapper").appendChild(overdueTitle);

    _getOverdueTasks().forEach(function (task, index) {
      return _fillInTask(task, task.getNumber(), index);
    });
  };

  var showDays = function showDays(e) {
    _markSelectedProject(e);

    _buildPage("days");

    var titleWrapper = getElement(".project-title-wrapper");

    var daysSelector = _makeNewElement("input", "days-selector", "days-selector", "", {
      type: "number"
    }, {
      max: 14
    }, {
      min: 1
    }, {
      value: ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getCurrentDays()
    });

    var daysTitle = _makeNewElement("div", "days-title", "project-title", "Days Away: ");

    titleWrapper.appendChild(daysTitle);
    titleWrapper.appendChild(daysSelector);
    _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateDaysSelector();

    _fillInDays(___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getCurrentDays());
  };

  var confirmClearAll = function confirmClearAll(e) {
    e.currentTarget.lastElementChild.textContent = "Click here again to clear all data";
    _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateConfirmClearAll();
  };

  var cancelClearAll = function cancelClearAll(e) {
    e.currentTarget.lastElementChild.textContent = "Clear All Data";
    _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateClearAllButton();
  }; //initalizes the webpage and starts the basic listeners


  var startPage = function startPage() {
    _makeStartingPage();

    setTimeout(_fixStartingAnimations, 1);
    _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].initStartingListeners();
    ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.loadProjects();

    _displayTodaySide();

    _displayProjects();

    _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateSides();
    getElement("#todays-todo-side").click();
  };

  return {
    getElement: getElement,
    getElements: getElements,
    removeText: removeText,
    checkNewProject: checkNewProject,
    setupNewProject: setupNewProject,
    cancelNewProject: cancelNewProject,
    refreshTaskSides: refreshTaskSides,
    getNewProjInfo: getNewProjInfo,
    updateProjectList: updateProjectList,
    expandToggle: expandToggle,
    showProject: showProject,
    displayDeleteProject: displayDeleteProject,
    getTaskInfo: getTaskInfo,
    getTaskIndex: getTaskIndex,
    checkNewTask: checkNewTask,
    displayEditProject: displayEditProject,
    displayEditTask: displayEditTask,
    displayDeleteTask: displayDeleteTask,
    linkProject: linkProject,
    updateTaskList: updateTaskList,
    cancelEdit: cancelEdit,
    cancelProjectEdit: cancelProjectEdit,
    showToday: showToday,
    showOverdue: showOverdue,
    showDays: showDays,
    startPage: startPage,
    changeDays: changeDays,
    sortArray: sortArray,
    confirmClearAll: confirmClearAll,
    cancelClearAll: cancelClearAll
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMManip);

/***/ }),

/***/ "./src/todo/EventHandler.js":
/*!**********************************!*\
  !*** ./src/todo/EventHandler.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMManip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMManip */ "./src/todo/DOMManip.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/todo/index.js");



var EventHandler = function () {
  //activates the Add project button
  var clearTextBox = function clearTextBox() {
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElements("input[type='text' i]").forEach(function (ele) {
      return ele.removeEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].removeText, {
        once: true
      });
    });
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElements("input[type='text' i]").forEach(function (ele) {
      return ele.addEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].removeText, {
        once: true
      });
    });
  }; //activates the add button and the side toggles


  var activateAddButton = function activateAddButton() {
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement("#add-project-button").removeEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].cancelNewProject);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement("#add-project-button").addEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].setupNewProject);
  };

  var activateClearAllButton = function activateClearAllButton() {
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement("#clear-all-button").removeEventListener("mouseleave", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].cancelClearAll);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement("#clear-all-button").removeEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].confirmClearAll);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement("#clear-all-button").removeEventListener("click", _index__WEBPACK_IMPORTED_MODULE_1__.projectFunctions.confirmAllClear);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement("#clear-all-button").addEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].confirmClearAll);
  }; //activates the listeners for all of clickable buttons at the start of the page load


  var initStartingListeners = function initStartingListeners() {
    activateAddButton();
    activateClearAllButton();
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElements(".dropdown-toggle").forEach(function (ele) {
      return ele.addEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].expandToggle, {
        capture: true
      });
    });
  }; //changes the add project button to cancel adding project and activates the submit button


  var addProjectSubmission = function addProjectSubmission() {
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement("#add-project-button").removeEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].setupNewProject);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement("#add-project-button").addEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].cancelNewProject);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement("#new-proj-add-button").addEventListener("click", _index__WEBPACK_IMPORTED_MODULE_1__.projectFunctions.addProject);
  }; //clicking the Today header or any of the tasks for today brings up the Today page


  var activateToday = function activateToday() {
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement("#todays-todo-side").addEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].showToday);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElements(".task-side-label.today").forEach(function (ele) {
      return ele.addEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].showToday);
    });
  }; //clicking the Overdue header or any of the task that are Overdue brings up the Overdue page


  var activateOverdue = function activateOverdue() {
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement("#overdue-todo-side").addEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].showOverdue);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElements(".task-side-label.overdue").forEach(function (ele) {
      return ele.addEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].showOverdue);
    });
  }; //clicking the Overdue header or any of the task that are Overdue brings up the Overdue page


  var activateDays = function activateDays() {
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement("#days-todo-side").addEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].showDays);
  }; //makes the projects clickable, maintains only one action listener on each project


  var activateProjects = function activateProjects() {
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElements(".project-side-label").forEach(function (ele) {
      return ele.removeEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].showProject);
    });
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElements(".project-side-label").forEach(function (ele) {
      return ele.addEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].showProject);
    });
  }; //turns on all side panel pages


  var activateSides = function activateSides() {
    activateToday();
    activateOverdue();
    activateDays();
    activateProjects();
  }; //activates the edit project buttons


  var activateProjectButtons = function activateProjectButtons() {
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement(".edit-button.title").addEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].displayEditProject);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement(".edit-button.delete").addEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].displayDeleteProject);
  }; //activates the cancel project-edit button


  var activateCancelButton = function activateCancelButton(button) {
    button.addEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].cancelProjectEdit);
  }; //changes the project title edit into the confirm button


  var activateConfirmProjectEdit = function activateConfirmProjectEdit(button) {
    button.removeEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].displayEditProject);
    button.addEventListener("click", _index__WEBPACK_IMPORTED_MODULE_1__.projectFunctions.confirmProjectEdit);
  }; //activates the delete project button


  var activateDeleteProject = function activateDeleteProject(button) {
    button.addEventListener("click", _index__WEBPACK_IMPORTED_MODULE_1__.projectFunctions.deleteProject);
  }; //activates the add new task button


  var activateAddTaskButton = function activateAddTaskButton() {
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement("#add-task-button").addEventListener("click", _index__WEBPACK_IMPORTED_MODULE_1__.projectFunctions.addTask);
  }; //activates the edit task button for that specific task


  var _activateEditTaskButton = function _activateEditTaskButton(button) {
    button.removeEventListener("click", _index__WEBPACK_IMPORTED_MODULE_1__.projectFunctions.confirmTaskEdit);
    button.addEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].displayEditTask);
  };

  var _activateDeleteTaskButton = function _activateDeleteTaskButton(button) {
    button.removeEventListener("click", _index__WEBPACK_IMPORTED_MODULE_1__.projectFunctions.confirmTaskDelete);
    button.addEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].displayDeleteTask);
  };

  var activateTaskButtons = function activateTaskButtons(edit, del) {
    _activateEditTaskButton(edit);

    _activateDeleteTaskButton(del);
  }; //makes the task's check box clickable to mark tasks as complete


  var activateCheckbox = function activateCheckbox(index) {
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement(".tasks-container").childNodes[index].firstElementChild.addEventListener("click", _index__WEBPACK_IMPORTED_MODULE_1__.projectFunctions.toggleTaskComplete);
  }; //If a project title is shown on a task, clicking it goes to the associated project


  var activateProjectLink = function activateProjectLink(button) {
    button.addEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].linkProject);
  }; //changes the button to edit a task into a confirmation button and activates the cancel button


  var activateConfirmTaskEdit = function activateConfirmTaskEdit(button) {
    button.removeEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].displayEditTask);
    button.addEventListener("click", _index__WEBPACK_IMPORTED_MODULE_1__.projectFunctions.confirmTaskEdit);
    button.nextSibling.removeEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].displayDeleteTask);
    button.nextSibling.addEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].cancelEdit);
  };

  var activateConfirmTaskDelete = function activateConfirmTaskDelete(button) {
    button.previousSibling.removeEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].displayEditTask);
    button.previousSibling.addEventListener("click", _index__WEBPACK_IMPORTED_MODULE_1__.projectFunctions.confirmTaskDelete);
    button.removeEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].displayDeleteTask);
    button.addEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].cancelEdit);
  };

  var activateDaysSelector = function activateDaysSelector() {
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement(".days-selector").addEventListener("change", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].changeDays);
  };

  var activateConfirmClearAll = function activateConfirmClearAll() {
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement("#clear-all-button").removeEventListener("click", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].confirmClearAll);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement("#clear-all-button").addEventListener("click", _index__WEBPACK_IMPORTED_MODULE_1__.projectFunctions.confirmAllClear);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement("#clear-all-button").addEventListener("mouseleave", _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].cancelClearAll);
  };

  return {
    activateAddButton: activateAddButton,
    initStartingListeners: initStartingListeners,
    addProjectSubmission: addProjectSubmission,
    activateToday: activateToday,
    activateProjects: activateProjects,
    activateOverdue: activateOverdue,
    activateSides: activateSides,
    clearTextBox: clearTextBox,
    activateProjectButtons: activateProjectButtons,
    activateAddTaskButton: activateAddTaskButton,
    activateCheckbox: activateCheckbox,
    activateProjectLink: activateProjectLink,
    activateTaskButtons: activateTaskButtons,
    activateConfirmProjectEdit: activateConfirmProjectEdit,
    activateConfirmTaskEdit: activateConfirmTaskEdit,
    activateConfirmTaskDelete: activateConfirmTaskDelete,
    activateCancelButton: activateCancelButton,
    activateDeleteProject: activateDeleteProject,
    activateDaysSelector: activateDaysSelector,
    activateClearAllButton: activateClearAllButton,
    activateConfirmClearAll: activateConfirmClearAll
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventHandler);

/***/ }),

/***/ "./src/todo/Project.js":
/*!*****************************!*\
  !*** ./src/todo/Project.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


var Project = /*#__PURE__*/function () {
  function Project(initTitle) {
    var tasks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var completed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Project);

    this.name = initTitle;
    this.tasks = tasks;
    this.completed = completed;
    this.selected = false;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Project, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getTasks",
    value: function getTasks() {
      return this.tasks;
    }
  }, {
    key: "isCompleted",
    value: function isCompleted() {
      return this.completed;
    }
  }, {
    key: "isSelected",
    value: function isSelected() {
      return this.selected;
    }
  }, {
    key: "setName",
    value: function setName(newName) {
      this.name = newName;
    }
  }, {
    key: "addTask",
    value: function addTask(newTask) {
      this.tasks.push(newTask);
    }
  }, {
    key: "markComplete",
    value: function markComplete(value) {
      this.completed = value;
    }
  }, {
    key: "markSelected",
    value: function markSelected(value) {
      this.selected = value;
    }
  }]);

  return Project;
}();

/***/ }),

/***/ "./src/todo/Task.js":
/*!**************************!*\
  !*** ./src/todo/Task.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



var Task = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function Task(name, description, dueDate, priority, notes, project, number) {
  var _this = this;

  var completed = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Task);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "getName", function () {
    return _this.name;
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "getDescription", function () {
    return _this.description;
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "getDate", function () {
    return _this.dueDate;
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "getPriority", function () {
    return _this.priority;
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "getNotes", function () {
    return _this.notes;
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "getProject", function () {
    return _this.project;
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "getComplete", function () {
    return _this.completed;
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "getNumber", function () {
    return _this.number;
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "toggleComplete", function () {
    return _this.completed = !_this.completed;
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "reduceProject", function () {
    return _this.project--;
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "reduceTask", function () {
    return _this.task--;
  });

  this.name = name;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.project = project;
  this.number = number;
  this.completed = completed;
});

/***/ }),

/***/ "./src/todo/dataStorage.js":
/*!*********************************!*\
  !*** ./src/todo/dataStorage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/todo/index.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/todo/Project.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ "./src/todo/Task.js");




var dataStorage = function () {
  //this takes the current array of projects and saves the contents into a JSON file in localstorage
  var saveData = function saveData() {
    var allProj = _index__WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects();
    localStorage.setItem("Projects", JSON.stringify(allProj));
  }; //finds the data in local storage, runs through the array and converts each entry into the appropriate
  //project or task in order to maintain object methods. If there is no data, returns an empty array


  var loadData = function loadData() {
    if (localStorage.getItem("Projects")) {
      var loadedData = JSON.parse(localStorage.getItem("Projects"));
      var returnData = [];
      loadedData.forEach(function (ele) {
        var loadProjectTitle = ele.name;
        var loadProjectsTasks = [];
        ele.tasks.forEach(function (task) {
          loadProjectsTasks.push(new _Task__WEBPACK_IMPORTED_MODULE_2__.Task(task.name, task.description, task.dueDate, task.priority, task.notes, task.project, task.number, task.completed));
        });
        var loadProjectCompleted = ele.completed;
        returnData.push(new _Project__WEBPACK_IMPORTED_MODULE_1__.Project(loadProjectTitle, loadProjectsTasks, loadProjectCompleted));
      });
      return returnData;
    } else return [];
  };

  var clearData = function clearData() {
    localStorage.setItem("Projects", "");
  };

  return {
    saveData: saveData,
    loadData: loadData,
    clearData: clearData
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataStorage);

/***/ }),

/***/ "./src/todo/index.js":
/*!***************************!*\
  !*** ./src/todo/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectFunctions": () => (/* binding */ projectFunctions)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/todo/style.css");
/* harmony import */ var _DOMManip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMManip */ "./src/todo/DOMManip.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ "./src/todo/Task.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Project */ "./src/todo/Project.js");
/* harmony import */ var _dataStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataStorage */ "./src/todo/dataStorage.js");




 //This export contains all of the functions related to accessing the project data
//and task data throughout the website

var projectFunctions = function () {
  var _allProjects = [];
  var _currentDaysRequested = 1; //used when a project is deleted, makes all of the tasks under each project go to their current
  //project's index in the allProjects array

  var _renumberProjects = function _renumberProjects(projectNumber) {
    for (var i = _allProjects.length - 1; i >= projectNumber; i--) {
      _allProjects[i].tasks.forEach(function (task) {
        return task.reduceProject();
      });
    }
  };

  var _renumberTasks = function _renumberTasks(projectNumber, taskNumber) {
    for (var i = _allProjects[projectNumber].tasks.length - 1; i >= taskNumber; i--) {
      _allProjects[projectNumber].tasks[i].reduceTask();
    }
  };

  var _sortTasks = function _sortTasks(projectNumber) {
    var sortedTasks = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].sortArray(_allProjects[projectNumber].getTasks());
    _allProjects[projectNumber].tasks = sortedTasks.map(function (ele) {
      return ele;
    });
  }; //gets the info that was put into the input, checks if it is acceptable, adds it to the
  //allProjects array if it is, and saves to localstorage


  var addProject = function addProject(e) {
    var newProjectInfo = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].getNewProjInfo();
    var goodProject = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].checkNewProject(e, newProjectInfo);

    if (goodProject) {
      _allProjects.push(new _Project__WEBPACK_IMPORTED_MODULE_3__.Project(newProjectInfo.name));

      _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].updateProjectList();
      _dataStorage__WEBPACK_IMPORTED_MODULE_4__["default"].saveData();
    }
  }; //gets the info that was put into the inputs, checks if it is all acceptable, adds it to the
  //allProjects array under the correct project if it is, and saves to localstorage


  var addTask = function addTask(e) {
    var newTaskInfo = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].getTaskInfo();
    var goodTask = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].checkNewTask(e, newTaskInfo);

    if (goodTask) {
      var newTask = new _Task__WEBPACK_IMPORTED_MODULE_2__.Task(newTaskInfo.name, newTaskInfo.description, newTaskInfo.date, newTaskInfo.priority, "", newTaskInfo.project, newTaskInfo.number);
      var projectNumber = newTaskInfo.project;

      _allProjects[projectNumber].tasks.push(newTask);

      _sortTasks(projectNumber);

      _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].updateTaskList(projectNumber);
      _dataStorage__WEBPACK_IMPORTED_MODULE_4__["default"].saveData();
    }
  }; //does the same as a new project, but getting the information from different locations and
  //instead of adding a new project, adjusts the project at a certain index


  var confirmProjectEdit = function confirmProjectEdit(e) {
    var editTitle = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].getElement(".title-edit").value;
    var projectNumber = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].getElement(".project-container").dataset.project;
    var goodProject = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].checkNewProject(e, {
      name: editTitle
    });

    if (goodProject) {
      _allProjects[projectNumber].setName(editTitle);

      _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].updateProjectList();
      _dataStorage__WEBPACK_IMPORTED_MODULE_4__["default"].saveData();
    }
  }; //does the same as a new task, but getting the information from different locations and
  //instead of adding a new task, adjusts the task at a certain index under a specific project


  var confirmTaskEdit = function confirmTaskEdit(e) {
    var editTask = e.currentTarget.parentElement.dataset.task;
    var projectNumber = e.currentTarget.parentElement.dataset.project;
    var editTaskInfo = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].getTaskInfo(editTask, projectNumber);
    var goodTask = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].checkNewTask(e, editTaskInfo);

    if (goodTask) {
      _allProjects[editTaskInfo.project].tasks[editTask] = new _Task__WEBPACK_IMPORTED_MODULE_2__.Task(editTaskInfo.name, editTaskInfo.description, editTaskInfo.date, editTaskInfo.priority, "", editTaskInfo.project, editTaskInfo.number);

      _sortTasks(projectNumber);

      _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].updateTaskList(projectNumber);
      _dataStorage__WEBPACK_IMPORTED_MODULE_4__["default"].saveData();
    }
  };

  var confirmTaskDelete = function confirmTaskDelete(e) {
    var projectNumber = e.currentTarget.parentElement.dataset.project;
    var taskNumber = e.currentTarget.parentElement.dataset.task;

    _renumberTasks(projectNumber, taskNumber);

    _allProjects[projectNumber].tasks.splice(taskNumber, 1);

    _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].refreshTaskSides();
    _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].getElement("#project-".concat(projectNumber)).click();
    _dataStorage__WEBPACK_IMPORTED_MODULE_4__["default"].saveData();
  }; //removes a project from the allProjects array and saves to localstorage


  var deleteProject = function deleteProject() {
    var projectNumber = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].getElement(".project-container").dataset.project;

    _renumberProjects(projectNumber);

    _allProjects.splice(projectNumber, 1);

    if (_DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].getElement("#projects-toggle").classList.contains("closed")) {
      _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].getElement("#projects-toggle").click();
    }

    _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].updateProjectList();
    _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].refreshTaskSides();
    _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].showToday();
    _dataStorage__WEBPACK_IMPORTED_MODULE_4__["default"].saveData();
  }; //gets when a checkbox has been clicked and changes the task's status to complete if it's not
  //complete, and removes that if it's been unchecked.


  var toggleTaskComplete = function toggleTaskComplete(e) {
    var selectedTask = e.currentTarget.parentElement;
    var projectNumber = selectedTask.dataset.project;
    var taskNumber = selectedTask.dataset.task;

    _allProjects[projectNumber].tasks[taskNumber].toggleComplete();

    if (_DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].getElement(".selected").id == "todays-todo-side") {
      _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].showToday(e);
    } else if (_DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].getElement(".selected").id == "overdue-todo-side") {
      _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].showOverdue(e);
    } else if (_DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].getElement(".selected").id == "days-todo-side") {
      _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].changeDays();
    } else {
      _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].showProject(e);
    }

    _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].refreshTaskSides();
    _dataStorage__WEBPACK_IMPORTED_MODULE_4__["default"].saveData();
  }; //returns a read-only copy of the projects in the allProjects array


  var getAllProjects = function getAllProjects() {
    return _allProjects.map(function (ele) {
      return ele;
    });
  };

  var getCurrentDays = function getCurrentDays() {
    return _currentDaysRequested;
  };

  var setCurrentDays = function setCurrentDays(newValue) {
    return _currentDaysRequested = newValue;
  }; //saves the loaded projects from localstorage into the allprojects array


  var loadProjects = function loadProjects() {
    _allProjects = _dataStorage__WEBPACK_IMPORTED_MODULE_4__["default"].loadData();
  };

  var confirmAllClear = function confirmAllClear() {
    _dataStorage__WEBPACK_IMPORTED_MODULE_4__["default"].clearData();
    _allProjects = _dataStorage__WEBPACK_IMPORTED_MODULE_4__["default"].loadData();
    _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].updateProjectList();
    _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].refreshTaskSides();
    _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].showToday();
  };

  return {
    addProject: addProject,
    addTask: addTask,
    confirmProjectEdit: confirmProjectEdit,
    confirmTaskEdit: confirmTaskEdit,
    confirmTaskDelete: confirmTaskDelete,
    deleteProject: deleteProject,
    toggleTaskComplete: toggleTaskComplete,
    getAllProjects: getAllProjects,
    loadProjects: loadProjects,
    getCurrentDays: getCurrentDays,
    setCurrentDays: setCurrentDays,
    confirmAllClear: confirmAllClear
  };
}(); //runs at the load of the website
// eslint-disable-next-line no-unused-vars

var initWebsite = function () {
  _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].startPage();
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/todo/style.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/todo/style.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #F6EABE;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    color: #2f6363;\n}\n\n#header{\n    height: 72px;\n    background-color: #F6D7A7;\n    color: #2f6363;\n    font-size: 32px;\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 60px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 2;\n}\n\n#content{\n    margin-top: 72px;\n    display: flex;\n    width: -webkit-fill-available;\n    background-color: inherit;\n}\n#side-panel{\n    flex: 1;\n    background-color: #2f6363;\n    color: #F6D7A7;\n    min-height: 89.3vh;\n    padding-top: 28px;\n    border-top-right-radius: 30px;\n}\n#side-panel > * :hover{\n    cursor: pointer;\n}\n.side-header-container{\n    display: flex;\n    flex-direction: column;\n}\n.side-header{\n    font-size: 24px;\n    padding-left: 20px;\n    padding-bottom: 8px;\n    display: flex;\n}\n.project-side-label, .task-side-label{\n    font-size: 18px;\n    margin: 4px 0px 4px 20px;\n    padding: 4px 10px 4px 10px;\n}\n.task-side-label{\n    margin: 0px 0px 0px 20px;\n}\n.selected{\n    background-color: #265252;\n    border-radius: 30px 0 0 30px;\n}\n.dropdown-toggle{\n    margin-left: 8px;\n}\n.dropdown-toggle.anim{\n    transition: .25s;\n}\n.dropdown-toggle.closed{\n    transform: rotateZ(-90deg);\n}\n\n#main-display{\n    flex: 4;\n    background-color: inherit;\n}\n\n.add-button{\n    border-radius: 100px;\n    background-color: #C8E3D4;\n    border: 3px solid #2f6363;\n    color: #2f6363;\n    text-align: center;\n    padding: 0px 10px;\n    margin: 0px 8px 1px;\n    filter: brightness(100%);\n    \n}\n\n.add-button:hover{\n    filter: brightness(70%);\n}\n.add-button:active{\n\n    box-shadow: inset 0px 0px 5px black;\n}\n\n#add-project-button-container{\n    position: fixed;\n    top: 100px;\n    right: 60px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    z-index: 1;\n}\n#add-project-button{\n    height: 50px;\n    width: 50px;\n    font-size: 40px;\n    font-weight: bold;\n    z-index: 1;\n    \n}\n#add-project-button.anim{\n    transition: .25s;\n}\n#add-project-button:hover, #add-project-button.active{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 120px;\n}\n#add-project-button.active{\n    filter: brightness(80%);\n}\n\n#add-project-button span{\n    font-size: 0%;\n    opacity: 0;\n}\n#add-project-button span.anim{\n    transition: .05s;\n}\n#add-project-button:hover span, #add-project-button span.active{\n    font-size: 20px;\n    opacity: 1;\n}\n.input-container{\n    padding: 8px 15px;\n    background-color: #C8E3D4;\n    border: 3px solid #2f6363;\n    border-radius: 100px;\n    box-shadow: 2px 2px black;\n}\n#new-proj-add-button{\n    font-size: 18px;\n    font-weight: bold;\n    padding-top: 4px;\n    padding-bottom: 4px;\n}\n\ninput, select{\n    background-color: #87AAAA;\n    color: #2f6363;\n    border-style: none;\n    border-bottom: 1px solid #2f6363;\n    flex-grow: 1;\n    font-size: 16px;\n    height: 22px;\n    padding: 4px 6px 4px 8px;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\nselect{\n    height: 31px;\n    font-size:18px\n}\n\n#clear-all-button-container{\n    position: fixed;\n    bottom: 40px;\n    right: 40px;\n}\n#clear-all-button-container .delete{\n    height: 50px;\n    min-width: 50px;\n    background-color: #E1ADAD;\n}\n#clear-all-button-container > *{\n    font-size: 30px;\n    \n}\n.project-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 30px;\n    background-color: inherit;\n}\n.project-title-wrapper{\n    max-width: 45%;\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n    align-items: center;\n    background-color: inherit;\n    margin-bottom: 30px;\n}\n\n.project-title{\n    font-size: 36px;\n    font-weight: bold;\n    overflow-y: auto;\n    white-space: nowrap;\n    text-decoration: underline;\n    margin-top: 10px;\n    \n}\n.title-edit{\n    background-color: inherit;\n    font-size: 36px;\n    font-weight: bold;\n    margin-top: 6px;\n    padding: 6px 0px 10px ;\n    flex-grow: 0;\n    border-bottom-width: 0px;\n    border-radius: 30px;\n    text-align: center;\n    text-decoration: none;\n    filter: brightness(80%);\n    overflow-y: auto;\n}\n\n.button-container.project{\n    width: 27.5px;\n    background-color: inherit;\n}\n.button-container button{\n    margin-top: 10px;\n}\n\n#add-task-button{\n    font-size: 18px;\n    padding: 5px 12px;\n}\n\n.add-task-info{\n    border-radius: 20px;\n    margin: 5px;\n}\n.tasks-wrapper{\n    display: flex;\n    flex-direction: column;\n    margin-left: 60px;\n    margin-bottom: 40px;\n    width: -webkit-fill-available;\n}\n.task-container{\n    border-radius: 10px;\n    padding: 4px 12px;\n    display: flex;\n    gap: 20px;\n    max-width: fit-content;\n    \n}\n.task-info{\n    max-width: 30vw;\n    white-space: nowrap;\n    overflow-y: auto;\n}\n.task-project-info{\n    font-weight: bold;\n}\n.task-project-info:hover{\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.error-message{\n    font-size: 18px;\n    color: #993c3c;\n    transition: 2s;\n    transition-delay: 1s;\n    opacity: 1;\n    margin: 6px;\n}\n\n[data-priority='Low']{\n    background-color: #E1ADAD;\n}\n[data-priority='Medium']{\n    background-color: #EFEF38;\n}\n[data-priority='High']{\n    background-color: #9DCD8D;\n}\n\n.edit-button{\n    border-radius: 10px;\n    background-color: inherit;\n    filter: brightness(100%);\n    border: 1px solid #2f6363;\n    color: #2f6363;\n    transition: .25s;\n    min-width: 27.5px;\n    height: 20px;\n    white-space: nowrap;\n\n}\n\n.edit-button:hover{\n    filter:brightness(70%);\n}\n\n.edit-button span{\n    font-size: 0%;\n    opacity: 0;\n    transition: .25s;\n}\n.edit-button:hover span{\n    font-size: 14px;\n    opacity: 1;\n    padding: 0px 5px;\n}\n\n.edit-button.confirm:hover{\n    background-color: #9DCD8D;\n}\n.edit-button.delete:hover, .edit-button.cancel:hover{\n    background-color: #E1ADAD;\n}\n\n.task-container input, .task-container select{\n    background-color: inherit;\n    color: #2f6363;\n    border-style: none;\n    border-bottom: 1px solid #2f6363;\n    flex-grow: 1;\n    font-size: 14px;\n    height: 18px;\n    padding: 2px 4px 2px 4px;\n}\n.task-container select{\n    height: 23px;\n    font-size:15px\n}\n\n\ninput[type=\"checkbox\" i] {\n    flex-grow: 0;\n    height: 15px;\n    width: 15px;\n}\n\n.task-container.complete{\n    background-color: #A1A1A1;\n}\n\n#days-selector{\n    background-color: inherit;\n    border-bottom: none;\n    font-size: 36px;\n    width: 50px;\n    margin-top: 10px;\n    filter: brightness(80%);\n    border-radius: 30px;\n    text-align: center;\n    padding: 10px;\n}\n\n.day-away-label{\n    font-size: 20px;\n    font-weight: bold;\n    padding: 10px 0px 10px 100px\n}\n\n#clear-all-button:hover span{\n    font-size: 30px;\n    \n}\n\nbutton:hover{\n    cursor:pointer;\n}\n/* Scroll Bar */\n::-webkit-scrollbar {\n    width: 20px;\n    height: 10px;\n    padding-top: 2px;\n}\n    \n::-webkit-scrollbar-track {\n    border: 3px solid #87AAAA;\n    border-radius: 10px;\n}\n    \n::-webkit-scrollbar-thumb {\n    background:#2f6363; \n    border-radius: 10px;\n    border: 2px solid #2f6363\n}\n    \n::-webkit-scrollbar-thumb:hover {\n    background:#265252; \n}\n@-moz-document url-prefix() {\n    body{\n        scrollbar-color: #2f6363 #265252 #87AAAA;\n    }\n}\n\n", "",{"version":3,"sources":["webpack://./src/todo/style.css"],"names":[],"mappings":"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","sourcesContent":["body{\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #F6EABE;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    color: #2f6363;\n}\n\n#header{\n    height: 72px;\n    background-color: #F6D7A7;\n    color: #2f6363;\n    font-size: 32px;\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 60px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 2;\n}\n\n#content{\n    margin-top: 72px;\n    display: flex;\n    width: -webkit-fill-available;\n    background-color: inherit;\n}\n#side-panel{\n    flex: 1;\n    background-color: #2f6363;\n    color: #F6D7A7;\n    min-height: 89.3vh;\n    padding-top: 28px;\n    border-top-right-radius: 30px;\n}\n#side-panel > * :hover{\n    cursor: pointer;\n}\n.side-header-container{\n    display: flex;\n    flex-direction: column;\n}\n.side-header{\n    font-size: 24px;\n    padding-left: 20px;\n    padding-bottom: 8px;\n    display: flex;\n}\n.project-side-label, .task-side-label{\n    font-size: 18px;\n    margin: 4px 0px 4px 20px;\n    padding: 4px 10px 4px 10px;\n}\n.task-side-label{\n    margin: 0px 0px 0px 20px;\n}\n.selected{\n    background-color: #265252;\n    border-radius: 30px 0 0 30px;\n}\n.dropdown-toggle{\n    margin-left: 8px;\n}\n.dropdown-toggle.anim{\n    transition: .25s;\n}\n.dropdown-toggle.closed{\n    transform: rotateZ(-90deg);\n}\n\n#main-display{\n    flex: 4;\n    background-color: inherit;\n}\n\n.add-button{\n    border-radius: 100px;\n    background-color: #C8E3D4;\n    border: 3px solid #2f6363;\n    color: #2f6363;\n    text-align: center;\n    padding: 0px 10px;\n    margin: 0px 8px 1px;\n    filter: brightness(100%);\n    \n}\n\n.add-button:hover{\n    filter: brightness(70%);\n}\n.add-button:active{\n\n    box-shadow: inset 0px 0px 5px black;\n}\n\n#add-project-button-container{\n    position: fixed;\n    top: 100px;\n    right: 60px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    z-index: 1;\n}\n#add-project-button{\n    height: 50px;\n    width: 50px;\n    font-size: 40px;\n    font-weight: bold;\n    z-index: 1;\n    \n}\n#add-project-button.anim{\n    transition: .25s;\n}\n#add-project-button:hover, #add-project-button.active{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 120px;\n}\n#add-project-button.active{\n    filter: brightness(80%);\n}\n\n#add-project-button span{\n    font-size: 0%;\n    opacity: 0;\n}\n#add-project-button span.anim{\n    transition: .05s;\n}\n#add-project-button:hover span, #add-project-button span.active{\n    font-size: 20px;\n    opacity: 1;\n}\n.input-container{\n    padding: 8px 15px;\n    background-color: #C8E3D4;\n    border: 3px solid #2f6363;\n    border-radius: 100px;\n    box-shadow: 2px 2px black;\n}\n#new-proj-add-button{\n    font-size: 18px;\n    font-weight: bold;\n    padding-top: 4px;\n    padding-bottom: 4px;\n}\n\ninput, select{\n    background-color: #87AAAA;\n    color: #2f6363;\n    border-style: none;\n    border-bottom: 1px solid #2f6363;\n    flex-grow: 1;\n    font-size: 16px;\n    height: 22px;\n    padding: 4px 6px 4px 8px;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\nselect{\n    height: 31px;\n    font-size:18px\n}\n\n#clear-all-button-container{\n    position: fixed;\n    bottom: 40px;\n    right: 40px;\n}\n#clear-all-button-container .delete{\n    height: 50px;\n    min-width: 50px;\n    background-color: #E1ADAD;\n}\n#clear-all-button-container > *{\n    font-size: 30px;\n    \n}\n.project-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 30px;\n    background-color: inherit;\n}\n.project-title-wrapper{\n    max-width: 45%;\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n    align-items: center;\n    background-color: inherit;\n    margin-bottom: 30px;\n}\n\n.project-title{\n    font-size: 36px;\n    font-weight: bold;\n    overflow-y: auto;\n    white-space: nowrap;\n    text-decoration: underline;\n    margin-top: 10px;\n    \n}\n.title-edit{\n    background-color: inherit;\n    font-size: 36px;\n    font-weight: bold;\n    margin-top: 6px;\n    padding: 6px 0px 10px ;\n    flex-grow: 0;\n    border-bottom-width: 0px;\n    border-radius: 30px;\n    text-align: center;\n    text-decoration: none;\n    filter: brightness(80%);\n    overflow-y: auto;\n}\n\n.button-container.project{\n    width: 27.5px;\n    background-color: inherit;\n}\n.button-container button{\n    margin-top: 10px;\n}\n\n#add-task-button{\n    font-size: 18px;\n    padding: 5px 12px;\n}\n\n.add-task-info{\n    border-radius: 20px;\n    margin: 5px;\n}\n.tasks-wrapper{\n    display: flex;\n    flex-direction: column;\n    margin-left: 60px;\n    margin-bottom: 40px;\n    width: -webkit-fill-available;\n}\n.task-container{\n    border-radius: 10px;\n    padding: 4px 12px;\n    display: flex;\n    gap: 20px;\n    max-width: fit-content;\n    \n}\n.task-info{\n    max-width: 30vw;\n    white-space: nowrap;\n    overflow-y: auto;\n}\n.task-project-info{\n    font-weight: bold;\n}\n.task-project-info:hover{\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.error-message{\n    font-size: 18px;\n    color: #993c3c;\n    transition: 2s;\n    transition-delay: 1s;\n    opacity: 1;\n    margin: 6px;\n}\n\n[data-priority='Low']{\n    background-color: #E1ADAD;\n}\n[data-priority='Medium']{\n    background-color: #EFEF38;\n}\n[data-priority='High']{\n    background-color: #9DCD8D;\n}\n\n.edit-button{\n    border-radius: 10px;\n    background-color: inherit;\n    filter: brightness(100%);\n    border: 1px solid #2f6363;\n    color: #2f6363;\n    transition: .25s;\n    min-width: 27.5px;\n    height: 20px;\n    white-space: nowrap;\n\n}\n\n.edit-button:hover{\n    filter:brightness(70%);\n}\n\n.edit-button span{\n    font-size: 0%;\n    opacity: 0;\n    transition: .25s;\n}\n.edit-button:hover span{\n    font-size: 14px;\n    opacity: 1;\n    padding: 0px 5px;\n}\n\n.edit-button.confirm:hover{\n    background-color: #9DCD8D;\n}\n.edit-button.delete:hover, .edit-button.cancel:hover{\n    background-color: #E1ADAD;\n}\n\n.task-container input, .task-container select{\n    background-color: inherit;\n    color: #2f6363;\n    border-style: none;\n    border-bottom: 1px solid #2f6363;\n    flex-grow: 1;\n    font-size: 14px;\n    height: 18px;\n    padding: 2px 4px 2px 4px;\n}\n.task-container select{\n    height: 23px;\n    font-size:15px\n}\n\n\ninput[type=\"checkbox\" i] {\n    flex-grow: 0;\n    height: 15px;\n    width: 15px;\n}\n\n.task-container.complete{\n    background-color: #A1A1A1;\n}\n\n#days-selector{\n    background-color: inherit;\n    border-bottom: none;\n    font-size: 36px;\n    width: 50px;\n    margin-top: 10px;\n    filter: brightness(80%);\n    border-radius: 30px;\n    text-align: center;\n    padding: 10px;\n}\n\n.day-away-label{\n    font-size: 20px;\n    font-weight: bold;\n    padding: 10px 0px 10px 100px\n}\n\n#clear-all-button:hover span{\n    font-size: 30px;\n    \n}\n\nbutton:hover{\n    cursor:pointer;\n}\n/* Scroll Bar */\n::-webkit-scrollbar {\n    width: 20px;\n    height: 10px;\n    padding-top: 2px;\n}\n    \n::-webkit-scrollbar-track {\n    border: 3px solid #87AAAA;\n    border-radius: 10px;\n}\n    \n::-webkit-scrollbar-thumb {\n    background:#2f6363; \n    border-radius: 10px;\n    border: 2px solid #2f6363\n}\n    \n::-webkit-scrollbar-thumb:hover {\n    background:#265252; \n}\n@-moz-document url-prefix() {\n    body{\n        scrollbar-color: #2f6363 #265252 #87AAAA;\n    }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/todo/style.css":
/*!****************************!*\
  !*** ./src/todo/style.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/todo/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"./todo/index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-838f5e"], () => (__webpack_require__("./src/todo/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFL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O1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3RvZG8vRE9NTWFuaXAuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3RvZG8vRXZlbnRIYW5kbGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy90b2RvL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3RvZG8vVGFzay5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvdG9kby9kYXRhU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvdG9kby9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvdG9kby9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3RvZG8vc3R5bGUuY3NzPzMyZTAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvamVjdEZ1bmN0aW9ucyB9IGZyb20gXCIuXCI7XG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gXCIuL0V2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHsgdG9EYXRlLCBmb3JtYXQsIGFkZCwgcGFyc2VJU08sIHBhcnNlLCBpc0JlZm9yZSwgc3RhcnRPZkRheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jb25zdCBET01NYW5pcCA9ICgoKSA9PiB7XG4gICAgLy9zaG9ydGhhbmQgdG8gZ2V0IGVsZW1lbnRzIGVhc2llclxuICAgIGNvbnN0IGdldEVsZW1lbnQgPSBzZWxlY3RvciA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBjb25zdCBnZXRFbGVtZW50cyA9IHNlbGVjdG9yID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gICAgLy9zaG9ydGhhbmQgdG8gbWFrZSBhIG5ldyBlbGVtZW50IGFuZCBhZGQgYXR0cmlidXRlcyB0byBpdFxuICAgIGNvbnN0IF9tYWtlTmV3RWxlbWVudCA9ICh0eXBlLCBpZCA9IFwiXCIsIEhUTUxDbGFzcyA9IFwiXCIsIHRleHQgPSBcIlwiLCAuLi5hdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgICBpZiAoaWQgIT0gXCJcIikge1xuICAgICAgICAgICAgbmV3RWxlbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEhUTUxDbGFzcyAhPSBcIlwiKSB7XG4gICAgICAgICAgICBuZXdFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIEhUTUxDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3RWxlbS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaChhdHQgPT4gbmV3RWxlbS5zZXRBdHRyaWJ1dGUoT2JqZWN0LmtleXMoYXR0KVswXSwgYXR0W09iamVjdC5rZXlzKGF0dCldKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3RWxlbTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZVRleHQgPSBlID0+IHtcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnZhbHVlID0gXCJcIjtcbiAgICB9O1xuXG4gICAgLy9pbnNlcnRzIGEgRE9NIGVsZW1lbnQgYWZ0ZXIgYW5vdGhlciBlbGVtZW50XG4gICAgY29uc3QgX2luc2VydEFmdGVyID0gKG5ld05vZGUsIGV4aXN0aW5nTm9kZSkgPT4ge1xuICAgICAgICBleGlzdGluZ05vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgZXhpc3RpbmdOb2RlLm5leHRTaWJsaW5nKTtcbiAgICB9O1xuXG4gICAgLy9jbGVhcnMgb3V0IGFsbCBjaGlsZCBub2RlcyBvZiBhbiBlbGVtZW50LCBza2lwcyBhcyBtYW55IGVsZW1lbnRzIGFzIHJlcXVlc3RlZFxuICAgIGNvbnN0IF9yZW1vdmVBbGxDaGlsZHJlbiA9IChlbGVtZW50LCBza2lwID0gMCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aDsgaSA+IHNraXA7IGktLSkge1xuICAgICAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzW2kgLSAxXS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvL3NvcnRzIGFuIGFycmF5IG9mIHRhc2tzIGJ5IHRoZSBkYXRlO1xuICAgIGNvbnN0IHNvcnRBcnJheSA9IHRhc2tBcnJheSA9PiB7XG4gICAgICAgIGxldCBzb3J0ZWRBcnJheSA9IHRhc2tBcnJheS5tYXAoZWxlID0+IGVsZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc29ydGVkQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc29ydGVkQXJyYXkubGVuZ3RoIC0gMTsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RUYXNrID0gcGFyc2Uoc29ydGVkQXJyYXlbal0uZ2V0RGF0ZSgpLCBcIk1NL2RkL3l5eXlcIiwgbmV3IERhdGUoKSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kVGFzayA9IHBhcnNlKHNvcnRlZEFycmF5W2ogKyAxXS5nZXREYXRlKCksIFwiTU0vZGQveXl5eVwiLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNCZWZvcmUoc2Vjb25kVGFzaywgZmlyc3RUYXNrKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSBzb3J0ZWRBcnJheVtqXTtcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkQXJyYXlbal0gPSBzb3J0ZWRBcnJheVtqICsgMV07XG4gICAgICAgICAgICAgICAgICAgIHNvcnRlZEFycmF5W2ogKyAxXSA9IHBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc29ydGVkQXJyYXk7XG4gICAgfTtcblxuICAgIC8vZml4ZXMgc3RyYW5nZSBidWcgd2hlcmUgZWxlbWVudHMgYW5pbWF0ZWQgZnJvbSB0aGVpciBkZWZhdWx0IHN0YXRlIHRvIHRoZWlyIGNzcyBzdHlsZWQgc3RhdGVcbiAgICBjb25zdCBfZml4U3RhcnRpbmdBbmltYXRpb25zID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhbmltYXRhYmxlID0gZ2V0RWxlbWVudHMoXCIuZml4LWFuaW1cIik7XG4gICAgICAgIGFuaW1hdGFibGUuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoXCJhbmltXCIpO1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJmaXgtYW5pbVwiKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vYWRkcyBhbGwgb2YgdGhlIHN0YXJ0aW5nIGVsZW1lbnQgdG8gdGhlIHBhZ2Ugd2hlbiBmaXJzdCBsb2FkaW5nIHRoZSBwYWdlXG4gICAgY29uc3QgX21ha2VTdGFydGluZ1BhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IF9tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImhlYWRlclwiLCBcIlwiLCBcIlRvLURvIExpc3RcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgICAgICBjb25zdCBjb250ZW50ID0gX21ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiY29udGVudFwiKTtcblxuICAgICAgICBjb25zdCBzaWRlUGFuZWwgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzaWRlLXBhbmVsXCIpO1xuXG4gICAgICAgIGNvbnN0IHRvZGF5U2lkZUhlYWRlckNvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcIlwiLCBcInNpZGUtaGVhZGVyLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgdG9kYXlzVG9kb1NpZGUgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ0b2RheXMtdG9kby1zaWRlXCIsIFwic2lkZS1oZWFkZXIgdG9kYXlcIiwgXCJUb2RheVwiKTtcbiAgICAgICAgY29uc3QgdG9kYXlTaWRlRHJvcGRvd24gPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgXCJ0b2RheS10b2dnbGVcIixcbiAgICAgICAgICAgIFwiZHJvcGRvd24tdG9nZ2xlIGZpeC1hbmltIGZhLXNvbGlkIGZhLWNhcmV0LWRvd25cIlxuICAgICAgICApO1xuICAgICAgICB0b2RheXNUb2RvU2lkZS5hcHBlbmRDaGlsZCh0b2RheVNpZGVEcm9wZG93bik7XG4gICAgICAgIHRvZGF5U2lkZUhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RheXNUb2RvU2lkZSk7XG5cbiAgICAgICAgY29uc3Qgb3ZlcmR1ZVNpZGVIZWFkZXJDb250YWluZXIgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJzaWRlLWhlYWRlci1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IG92ZXJkdWVUb2RvU2lkZSA9IF9tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcIm92ZXJkdWUtdG9kby1zaWRlXCIsIFwic2lkZS1oZWFkZXIgb3ZlcmR1ZVwiLCBcIk92ZXJkdWVcIik7XG4gICAgICAgIGNvbnN0IG92ZXJkdWVTaWRlRHJvcGRvd24gPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgXCJvdmVyZHVlLXRvZ2dsZVwiLFxuICAgICAgICAgICAgXCJkcm9wZG93bi10b2dnbGUgZml4LWFuaW0gY2xvc2VkIGZhLXNvbGlkIGZhLWNhcmV0LWRvd25cIlxuICAgICAgICApO1xuICAgICAgICBvdmVyZHVlVG9kb1NpZGUuYXBwZW5kQ2hpbGQob3ZlcmR1ZVNpZGVEcm9wZG93bik7XG4gICAgICAgIG92ZXJkdWVTaWRlSGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG92ZXJkdWVUb2RvU2lkZSk7XG5cbiAgICAgICAgY29uc3QgZGF5c1NpZGVIZWFkZXJDb250YWluZXIgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJzaWRlLWhlYWRlci1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGRheXNUb2RvU2lkZSA9IF9tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImRheXMtdG9kby1zaWRlXCIsIFwic2lkZS1oZWFkZXIgZGF5c1wiLCBcIkRheXMgQXdheVwiKTtcbiAgICAgICAgZGF5c1NpZGVIZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5c1RvZG9TaWRlKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0U2lkZUhlYWRlckNvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcIlwiLCBcInNpZGUtaGVhZGVyLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdHNTaWRlID0gX21ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdHMtc2lkZVwiLCBcInNpZGUtaGVhZGVyXCIsIFwiUHJvamVjdHNcIik7XG4gICAgICAgIGNvbnN0IHByb2plY3RTaWRlRHJvcGRvd24gPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgXCJwcm9qZWN0cy10b2dnbGVcIixcbiAgICAgICAgICAgIFwiZHJvcGRvd24tdG9nZ2xlIGZpeC1hbmltIGZhLXNvbGlkIGZhLWNhcmV0LWRvd25cIlxuICAgICAgICApO1xuICAgICAgICBwcm9qZWN0c1NpZGUuYXBwZW5kQ2hpbGQocHJvamVjdFNpZGVEcm9wZG93bik7XG4gICAgICAgIHByb2plY3RTaWRlSGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzU2lkZSk7XG5cbiAgICAgICAgc2lkZVBhbmVsLmFwcGVuZENoaWxkKHRvZGF5U2lkZUhlYWRlckNvbnRhaW5lcik7XG4gICAgICAgIHNpZGVQYW5lbC5hcHBlbmRDaGlsZChvdmVyZHVlU2lkZUhlYWRlckNvbnRhaW5lcik7XG4gICAgICAgIHNpZGVQYW5lbC5hcHBlbmRDaGlsZChkYXlzU2lkZUhlYWRlckNvbnRhaW5lcik7XG4gICAgICAgIHNpZGVQYW5lbC5hcHBlbmRDaGlsZChwcm9qZWN0U2lkZUhlYWRlckNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgbWFpbkRpc3BsYXkgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJtYWluLWRpc3BsYXlcIik7XG5cbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbldyYXBwZXIgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJhZGQtcHJvamVjdC1idXR0b24td3JhcHBlclwiKTtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbkNvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImFkZC1wcm9qZWN0LWJ1dHRvbi1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGFkZFByb2pjdEJ1dHRvbiA9IF9tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcImFkZC1wcm9qZWN0LWJ1dHRvblwiLCBcImFkZC1idXR0b24gZml4LWFuaW1cIiwgXCIrXCIpO1xuICAgICAgICBjb25zdCBhZGRQcm9qY3RCdXR0b25UZXh0ID0gX21ha2VOZXdFbGVtZW50KFwic3BhblwiLCBcImFkZC1wcm9qZWN0LWJ1dHRvbi10ZXh0XCIsIFwiZml4LWFuaW1cIiwgXCJQcm9qZWN0XCIpO1xuICAgICAgICBhZGRQcm9qY3RCdXR0b24uYXBwZW5kQ2hpbGQoYWRkUHJvamN0QnV0dG9uVGV4dCk7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamN0QnV0dG9uKTtcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgY2xlYXJBbGxCdXR0b25Db250YWluZXIgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJjbGVhci1hbGwtYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgY2xlYXJBbGxCdXR0b24gPSBfbWFrZU5ld0VsZW1lbnQoXCJidXR0b25cIiwgXCJjbGVhci1hbGwtYnV0dG9uXCIsIFwiZWRpdC1idXR0b24gZGVsZXRlIGZpeC1hbmltXCIpO1xuICAgICAgICBjb25zdCBjbGVhckFsbEljb24gPSBfbWFrZU5ld0VsZW1lbnQoXCJpXCIsIFwiXCIsIFwiZmEtc29saWQgZmEtdHJhc2gtY2FuIGVkaXQtaWNvblwiKTtcbiAgICAgICAgY29uc3QgY2xlYXJBbGxUZXh0ID0gX21ha2VOZXdFbGVtZW50KFwic3BhblwiLCBcImNsZWFyLWFsbC1idXR0b24tdGV4dFwiLCBcImZpeC1hbmltXCIsIFwiQ2xlYXIgQWxsIERhdGFcIik7XG4gICAgICAgIGNsZWFyQWxsQnV0dG9uLmFwcGVuZENoaWxkKGNsZWFyQWxsSWNvbik7XG4gICAgICAgIGNsZWFyQWxsQnV0dG9uLmFwcGVuZENoaWxkKGNsZWFyQWxsVGV4dCk7XG4gICAgICAgIGNsZWFyQWxsQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsZWFyQWxsQnV0dG9uKTtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHNpZGVQYW5lbCk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkRpc3BsYXkpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b25XcmFwcGVyKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjbGVhckFsbEJ1dHRvbkNvbnRhaW5lcik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgfTtcblxuICAgIC8vZ29lcyB0aHJvdWdoIGFsbCBvZiB0aGUgcHJvamVjdHMgYW5kIGlmIGEgdGFzaydzIGR1ZSBkYXRlIGlzIG9mZnNldCBieSBhIGNlcnRhaW4gZGF5cyBmcm9tIHRvZGF5XG4gICAgLy9pdCBhZGRzIHRoYXQgdGFzayB0byBhbiBhcnJheVxuICAgIGNvbnN0IF9nZXRUYXNrcyA9IG9mZnNldCA9PiB7XG4gICAgICAgIGxldCB0b2RheXNUYXNrcyA9IFtdO1xuICAgICAgICBjb25zdCBkYXlSZXF1ZXN0ZWQgPSBmb3JtYXQoYWRkKHRvRGF0ZShuZXcgRGF0ZSgpKSwgeyBkYXlzOiBvZmZzZXQgfSksIFwiTU0vZGQveXl5eVwiKTtcbiAgICAgICAgcHJvamVjdEZ1bmN0aW9ucy5nZXRBbGxQcm9qZWN0cygpLmZvckVhY2gocHJvaiA9PiB7XG4gICAgICAgICAgICBwcm9qLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBmb3JtYXQocGFyc2UodGFzay5nZXREYXRlKCksIFwiTU0vZGQveXl5eVwiLCBuZXcgRGF0ZSgpKSwgXCJNTS9kZC95eXl5XCIpO1xuICAgICAgICAgICAgICAgIGlmICh0YXNrRGF0ZSA9PSBkYXlSZXF1ZXN0ZWQgJiYgdGFzay5nZXRDb21wbGV0ZSgpID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZGF5c1Rhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdG9kYXlzVGFza3M7XG4gICAgfTtcblxuICAgIC8vZ2V0cyBhbGwgdGFza3MgdGhhdCBhcmUgZHVlIGVhcmxpZXIgdGhhbiB0b2RheVxuICAgIGNvbnN0IF9nZXRPdmVyZHVlVGFza3MgPSAoKSA9PiB7XG4gICAgICAgIGxldCBvdmVyZHVlVGFza3MgPSBbXTtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBzdGFydE9mRGF5KG5ldyBEYXRlKCkpO1xuICAgICAgICBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKCkuZm9yRWFjaChwcm9qID0+IHtcbiAgICAgICAgICAgIHByb2oudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGlzQmVmb3JlKHBhcnNlKHRhc2suZ2V0RGF0ZSgpLCBcIk1NL2RkL3l5eXlcIiwgbmV3IERhdGUoKSksIHRvZGF5KSAmJlxuICAgICAgICAgICAgICAgICAgICB0YXNrLmdldENvbXBsZXRlKCkgPT0gZmFsc2VcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmR1ZVRhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3ZlcmR1ZVRhc2tzO1xuICAgIH07XG5cbiAgICAvL3Rha2VzIGluIGFuIGFycmF5IG9mIGVycm9yIG1lc3NhZ2VzIGFuZCBwdXRzIHRoZW0gZGlyZWN0bHkgYWJvdmUgdGhlIHBhcmVudCBvZiB0aGF0IGVsZW1lbnRcbiAgICAvL21ha2VzIHRoZSBlcnJvciBtZXNzYWdlcyBkaXNzYXBwZWFyIGFmdGVyIHRoZXkndmUgYmVlbiByZWFkXG4gICAgY29uc3QgX2Rpc3BsYXlFcnJvcnMgPSAoZSwgaW5wdXQpID0+IHtcbiAgICAgICAgaW5wdXQuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJlcnJvci1tZXNzYWdlXCIsIGVsZSk7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIHBhcmVudC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShlcnJvciwgcGFyZW50KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gKGVycm9yLnN0eWxlLm9wYWNpdHkgPSAwKSwgMjAwMCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGVycm9yLnJlbW92ZSgpLCA0MDAwKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvL3RvZ2dsZXMgd2hldGhlciBvciBub3QgYW4gZWxlbWVudCBoYXMgdGhlIGNsYXNzIFwiYWN0aXZlXCIuXG4gICAgY29uc3QgX3RvZ2dsZUFjdGl2ZSA9IGVsZW1lbnRJRCA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KGVsZW1lbnRJRCk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICA/IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICAgICAgOiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfTtcblxuICAgIC8vcHV0cyBhbiBhcnJheSBvZiBlbGVtZW50cyB1bmRlcm5lYXRoIGEgcGFyZW50IGVsZW1lbnRcbiAgICBjb25zdCBfcmV2ZWFsQXJyYXkgPSAocGFyZW50LCBhcnJheSwgdHlwZSwgZHVlID0gXCJcIikgPT4ge1xuICAgICAgICBfcmVtb3ZlQWxsQ2hpbGRyZW4ocGFyZW50LCAxKTtcbiAgICAgICAgYXJyYXkuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICBgJHt0eXBlfS0ke2luZGV4fWAsXG4gICAgICAgICAgICAgICAgICAgIGAke3R5cGV9LXNpZGUtbGFiZWwgJHtkdWV9ICR7dHlwZSA9PSBcInByb2plY3RcIiAmJiBlbGVtLmlzU2VsZWN0ZWQoKSA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9YCxcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHsgXCJkYXRhLWluZGV4XCI6IGAke2luZGV4fWAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy9zaG93cyB0aGUgdGFza3MgdGhhdCBhcmUgZHVlIHRvZGF5IG9uIHRoZSBzaWRlIHBhbmVsXG4gICAgY29uc3QgX2Rpc3BsYXlUb2RheVNpZGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICghZ2V0RWxlbWVudChcIiN0b2RheS10b2dnbGVcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2VkXCIpKSB7XG4gICAgICAgICAgICBfcmV2ZWFsQXJyYXkoZ2V0RWxlbWVudChcIiN0b2RheXMtdG9kby1zaWRlXCIpLnBhcmVudEVsZW1lbnQsIF9nZXRUYXNrcygwKSwgXCJ0YXNrXCIsIFwidG9kYXlcIik7XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlVG9kYXkoKTtcbiAgICB9O1xuICAgIC8vc2hvd3MgdGhlIHRhc2tzIHRoYXQgYXJlIHBhc3QgZHVlIG9uIHRoZSBzaWRlIHBhbmVsXG4gICAgY29uc3QgX2Rpc3BsYXlPdmVyZHVlU2lkZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFnZXRFbGVtZW50KFwiI292ZXJkdWUtdG9nZ2xlXCIpLmNsYXNzTGlzdC5jb250YWlucyhcImNsb3NlZFwiKSkge1xuICAgICAgICAgICAgX3JldmVhbEFycmF5KFxuICAgICAgICAgICAgICAgIGdldEVsZW1lbnQoXCIjb3ZlcmR1ZS10b2RvLXNpZGVcIikucGFyZW50RWxlbWVudCxcbiAgICAgICAgICAgICAgICBfZ2V0T3ZlcmR1ZVRhc2tzKCksXG4gICAgICAgICAgICAgICAgXCJ0YXNrXCIsXG4gICAgICAgICAgICAgICAgXCJvdmVyZHVlXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlT3ZlcmR1ZSgpO1xuICAgIH07XG4gICAgLy91cGRhdGVzIGFsbCBvZiB0aGUgdGFzayBjb250YWluaW5nIHNpZGUgcGFuZWwgY2F0ZWdvcmllc1xuICAgIGNvbnN0IHJlZnJlc2hUYXNrU2lkZXMgPSAoKSA9PiB7XG4gICAgICAgIF9kaXNwbGF5T3ZlcmR1ZVNpZGUoKTtcbiAgICAgICAgX2Rpc3BsYXlUb2RheVNpZGUoKTtcbiAgICB9O1xuICAgIC8vc2hvd3MgYWxsIHByb2plY3RzIG9uIHRoZSBzaWRlIHBhbmVsXG4gICAgY29uc3QgX2Rpc3BsYXlQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgX3JldmVhbEFycmF5KFxuICAgICAgICAgICAgZ2V0RWxlbWVudChcIiNwcm9qZWN0cy1zaWRlXCIpLnBhcmVudEVsZW1lbnQsXG4gICAgICAgICAgICBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKCksXG4gICAgICAgICAgICBcInByb2plY3RcIlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICAvL3JldHVybnMgd2hhdCB0aGUgY3VycmVudCBzZWxlY3RlZCBwcm9qZWN0IG51bWJlciBpc1xuICAgIGNvbnN0IF9nZXRQcm9qZWN0TnVtYmVyID0gKCkgPT4ge1xuICAgICAgICBpZiAoZ2V0RWxlbWVudChcIiNwcm9qZWN0cy10b2dnbGVcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2VkXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RWxlbWVudChcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5kYXRhc2V0LnByb2plY3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RWxlbWVudChcIi5zZWxlY3RlZFwiKS5kYXRhc2V0LmluZGV4O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vcHV0cyB0aGUgdGl0bGUgb2YgdGhlIHByb2plY3QgYW5kIHRoZSBlZGl0IGJ1dHRvbnMgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZVxuICAgIGNvbnN0IF9kaXNwbGF5VGl0bGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROdW1iZXIgPSBfZ2V0UHJvamVjdE51bWJlcigpO1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RGdW5jdGlvbnMuZ2V0QWxsUHJvamVjdHMoKVtwcm9qZWN0TnVtYmVyXTtcbiAgICAgICAgY29uc3QgdGl0bGVXcmFwcGVyID0gZ2V0RWxlbWVudChcIi5wcm9qZWN0LXRpdGxlLXdyYXBwZXJcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlQnV0dG9uQ29udGFpbmVyID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIGBwcm9qZWN0LSR7cHJvamVjdE51bWJlcn0tdGl0bGUtYnV0dG9uLWNvbnRhaW5lcmAsXG4gICAgICAgICAgICBcImJ1dHRvbi1jb250YWluZXIgcHJvamVjdFwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRpdGxlYCxcbiAgICAgICAgICAgIFwicHJvamVjdC10aXRsZVwiLFxuICAgICAgICAgICAgYCR7Y3VycmVudFByb2plY3QuZ2V0TmFtZSgpfWBcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBlZGl0VGl0bGVCdXR0b24gPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS1lZGl0LWJ1dHRvbmAsXG4gICAgICAgICAgICBcImVkaXQtYnV0dG9uIHRpdGxlXCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZWRpdFRpdGxlSWNvbiA9IF9tYWtlTmV3RWxlbWVudChcImlcIiwgXCJcIiwgXCJmYS1zb2xpZCBmYS1wZW5jaWwgZWRpdC1pY29uXCIpO1xuICAgICAgICBjb25zdCBlZGl0VGl0bGVUZXh0ID0gX21ha2VOZXdFbGVtZW50KFwic3BhblwiLCBcIlwiLCBcImVkaXQtdGV4dFwiLCBcIkVkaXQgVGl0bGVcIik7XG4gICAgICAgIGVkaXRUaXRsZUJ1dHRvbi5hcHBlbmRDaGlsZChlZGl0VGl0bGVJY29uKTtcbiAgICAgICAgZWRpdFRpdGxlQnV0dG9uLmFwcGVuZENoaWxkKGVkaXRUaXRsZVRleHQpO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS1kZWxldGUtYnV0dG9uYCxcbiAgICAgICAgICAgIFwiZWRpdC1idXR0b24gZGVsZXRlXCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEljb24gPSBfbWFrZU5ld0VsZW1lbnQoXCJpXCIsIFwiXCIsIFwiZmEtc29saWQgZmEtdHJhc2ggZWRpdC1pY29uXCIpO1xuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0VGV4dCA9IF9tYWtlTmV3RWxlbWVudChcInNwYW5cIiwgXCJcIiwgXCJlZGl0LXRleHRcIiwgXCJEZWxldGUgUHJvamVjdFwiKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0SWNvbik7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdFRleHQpO1xuXG4gICAgICAgIHRpdGxlQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRUaXRsZUJ1dHRvbik7XG4gICAgICAgIHRpdGxlQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuXG4gICAgICAgIGlmICh0aXRsZVdyYXBwZXIuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfcmVtb3ZlQWxsQ2hpbGRyZW4odGl0bGVXcmFwcGVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aXRsZVdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICAgICAgdGl0bGVXcmFwcGVyLmFwcGVuZENoaWxkKHRpdGxlQnV0dG9uQ29udGFpbmVyKTtcbiAgICB9O1xuXG4gICAgLy9jbGVhcnMgdGhlIHNlbGVjdGlvbiBvbiB0aGUgc2lkZSBwYW5lbFxuICAgIGNvbnN0IF9jbGVhclNpZGVTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGdldEVsZW1lbnRzKFwiLnByb2plY3Qtc2lkZS1sYWJlbFwiKS5mb3JFYWNoKGVsZSA9PiBlbGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpKTtcbiAgICAgICAgZ2V0RWxlbWVudChcIiN0b2RheXMtdG9kby1zaWRlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgZ2V0RWxlbWVudChcIiNvdmVyZHVlLXRvZG8tc2lkZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGdldEVsZW1lbnQoXCIjZGF5cy10b2RvLXNpZGVcIikuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKCkuZm9yRWFjaChwcm9qID0+IHByb2oubWFya1NlbGVjdGVkKGZhbHNlKSk7XG4gICAgfTtcblxuICAgIC8vY2xlYXJzIGFuZCBtYXJrcyB0aGUgc2VsZWN0aW9uIGZvciBhIGdpdmVuIHRhc2sgY2F0ZWdvcnlcbiAgICBjb25zdCBfc2V0VGFza1NlbGVjdGlvbiA9IHR5cGUgPT4ge1xuICAgICAgICBfY2xlYXJTaWRlU2VsZWN0aW9uKCk7XG4gICAgICAgIGdldEVsZW1lbnQoYCMke3R5cGV9LXRvZG8tc2lkZWApLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICB9O1xuXG4gICAgLy9oaWdobGlnaHRzIHdoYXQgcHJvamVjdCAob3IgdG9kYXlzIHRhc2tzKSBpcyBzZWxlY3RlZC4gRGVmYXVsdHMgdG8gdGhlIGZpcnN0IHByb2plY3RcbiAgICBjb25zdCBfbWFya1NlbGVjdGVkUHJvamVjdCA9IGUgPT4ge1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0LXNpZGUtbGFiZWxcIikpIHtcbiAgICAgICAgICAgICAgICBfY2xlYXJTaWRlU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdEZ1bmN0aW9ucy5nZXRBbGxQcm9qZWN0cygpW2UudGFyZ2V0LmRhdGFzZXQuaW5kZXhdLm1hcmtTZWxlY3RlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b2RheVwiKSkge1xuICAgICAgICAgICAgICAgIF9zZXRUYXNrU2VsZWN0aW9uKFwidG9kYXlzXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3ZlcmR1ZVwiKSkge1xuICAgICAgICAgICAgICAgIF9zZXRUYXNrU2VsZWN0aW9uKFwib3ZlcmR1ZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRheXNcIikpIHtcbiAgICAgICAgICAgICAgICBfc2V0VGFza1NlbGVjdGlvbihcImRheXNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfc2V0VGFza1NlbGVjdGlvbihcInRvZGF5c1wiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvL3JldHVybnMgd2hpY2ggbnVtYmVyIGVsZW1lbnQgYSB0YXNrIGlzIGluIGEgZ2l2ZW4gbGlzdC5cbiAgICBjb25zdCBnZXRUYXNrSW5kZXggPSBlID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIEFycmF5LmZyb20oZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZHJlbikuaW5kZXhPZihlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZSkgLSAxXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIC8vYWRkcyB0aGUgQWRkIFRhc2sgZW50cnkgdG8gdGhlIGJvdHRvbSBvZiB0aGUgcHJvamVjdFxuICAgIGNvbnN0IF9kaXNwbGF5VGFza0lucHV0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZ2V0RWxlbWVudChcIi5wcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0NvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImFkZC10YXNrLWNvbnRhaW5lclwiLCBcImlucHV0LWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgYWRkVGFza05hbWUgPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImlucHV0XCIsXG4gICAgICAgICAgICBcImFkZC10YXNrLW5hbWUtaW5wdXRcIixcbiAgICAgICAgICAgIFwiYWRkLXRhc2staW5mb1wiLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiVGFzayBOYW1lXCIgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBhZGRUYXNrRGVzY3JpcHRpb24gPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImlucHV0XCIsXG4gICAgICAgICAgICBcImFkZC10YXNrLWRlc2NyaXB0aW9uLWlucHV0XCIsXG4gICAgICAgICAgICBcImFkZC10YXNrLWluZm9cIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlRhc2sgRGVzY3JpcHRpb25cIiB9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tEYXRlID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgICAgXCJhZGQtdGFzay1kYXRlLWlucHV0XCIsXG4gICAgICAgICAgICBcImFkZC10YXNrLWluZm9cIixcbiAgICAgICAgICAgIFwiRHVlIERhdGVcIixcbiAgICAgICAgICAgIHsgdHlwZTogXCJkYXRlXCIgfSxcbiAgICAgICAgICAgIHsgbWluOiBzdGFydE9mRGF5KG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgYWRkVGFza1ByaW9yaXR5ID0gX21ha2VOZXdFbGVtZW50KFwic2VsZWN0XCIsIFwiYWRkLXRhc2stcHJpb3JpdHktaW5wdXRcIiwgXCJhZGQtdGFzay1pbmZvXCIsIFwiXCIpO1xuICAgICAgICBjb25zdCBhZGRUYXNrUHJpb3JpdHlEZWZhdWx0ID0gX21ha2VOZXdFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIFwiXCIsIFwiUHJpb3JpdHlcIiwgeyB2YWx1ZTogMCB9KTtcbiAgICAgICAgY29uc3QgYWRkVGFza1ByaW9yaXR5TG93ID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgXCJMb3dcIixcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiTG93XCIgfSxcbiAgICAgICAgICAgIHsgc3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjojRTFBREFEXCIgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBhZGRUYXNrUHJpb3JpdHlNZWRpdW0gPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICBcIk1lZGl1bVwiLFxuICAgICAgICAgICAgeyB2YWx1ZTogXCJNZWRpdW1cIiB9LFxuICAgICAgICAgICAgeyBzdHlsZTogXCJiYWNrZ3JvdW5kLWNvbG9yOiNFRkVGMzhcIiB9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tQcmlvcml0eUhpZ2ggPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICBcIkhpZ2hcIixcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiSGlnaFwiIH0sXG4gICAgICAgICAgICB7IHN0eWxlOiBcImJhY2tncm91bmQtY29sb3I6IzlEQ0Q4RFwiIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IF9tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcImFkZC10YXNrLWJ1dHRvblwiLCBcImFkZC1idXR0b25cIiwgXCJBZGQgTmV3IFRhc2tcIik7XG5cbiAgICAgICAgYWRkVGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKGFkZFRhc2tQcmlvcml0eURlZmF1bHQpO1xuICAgICAgICBhZGRUYXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQoYWRkVGFza1ByaW9yaXR5TG93KTtcbiAgICAgICAgYWRkVGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKGFkZFRhc2tQcmlvcml0eU1lZGl1bSk7XG4gICAgICAgIGFkZFRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChhZGRUYXNrUHJpb3JpdHlIaWdoKTtcblxuICAgICAgICBhZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tOYW1lKTtcbiAgICAgICAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrRGVzY3JpcHRpb24pO1xuICAgICAgICBhZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tEYXRlKTtcbiAgICAgICAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrUHJpb3JpdHkpO1xuICAgICAgICBhZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0NvbnRhaW5lcik7XG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLmNsZWFyVGV4dEJveCgpO1xuICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVBZGRUYXNrQnV0dG9uKCk7XG4gICAgfTtcbiAgICAvL3doZW4gYSBwcm9qZWN0IG5hbWUgaXMgY2xpY2tlZCBvbiBhIHRhc2ssIGJyaW5ncyB1cCB0aGUgc2VsZWN0ZWQgcHJvamVjdFxuICAgIGNvbnN0IGxpbmtQcm9qZWN0ID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUb2dnbGUgPSBnZXRFbGVtZW50KFwiI3Byb2plY3RzLXRvZ2dsZVwiKTtcbiAgICAgICAgaWYgKHByb2plY3RUb2dnbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2VkXCIpKSB7XG4gICAgICAgICAgICBwcm9qZWN0VG9nZ2xlLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0RWxlbWVudHMoXCIucHJvamVjdC1zaWRlLWxhYmVsXCIpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbS50ZXh0Q29udGVudCA9PSBlLmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtLmNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvL3Rha2VzIGEgZ2l2ZW4gdGFzayBhbmQgYWRkcyBhIERPTSBlbnRyeSBpbiBhIHNwZWNpZmljIGdpdmVuIGluZGV4IG9mIHRoZSB0YXNrIGxpc3RcbiAgICBjb25zdCBfZmlsbEluVGFzayA9ICh0YXNrLCB0YXNrTnVtYmVyLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TnVtYmVyID0gdGFzay5nZXRQcm9qZWN0KCk7XG4gICAgICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZ2V0RWxlbWVudChcIi50YXNrcy1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3QgbmV3VGFza0NvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1jb250YWluZXJgLFxuICAgICAgICAgICAgYHRhc2stY29udGFpbmVyICR7dGFzay5nZXRDb21wbGV0ZSgpID8gXCJjb21wbGV0ZVwiIDogXCJcIn1gLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIHsgXCJkYXRhLXByaW9yaXR5XCI6IHRhc2suZ2V0UHJpb3JpdHkoKSB9LFxuICAgICAgICAgICAgeyBcImRhdGEtdGFza1wiOiB0YXNrTnVtYmVyIH0sXG4gICAgICAgICAgICB7IFwiZGF0YS1wcm9qZWN0XCI6IHByb2plY3ROdW1iZXIgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBuZXdUYXNrQ2hlY2tib3ggPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImlucHV0XCIsXG4gICAgICAgICAgICBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1jaGVja2JveGAsXG4gICAgICAgICAgICBcInRhc2stY2hlY2tib3hcIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgeyBcImRhdGEtcHJvamVjdFwiOiBwcm9qZWN0TnVtYmVyIH0sXG4gICAgICAgICAgICB7IFwiZGF0YS10YXNrXCI6IHRhc2tOdW1iZXIgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBuZXdUYXNrTmFtZSA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1uYW1lYCxcbiAgICAgICAgICAgIFwidGFzay1uYW1lIHRhc2staW5mb1wiLFxuICAgICAgICAgICAgdGFzay5nZXROYW1lKClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIGBwcm9qZWN0LSR7cHJvamVjdE51bWJlcn0tdGFzay0ke3Rhc2tOdW1iZXJ9LWRlc2NyaXB0aW9uYCxcbiAgICAgICAgICAgIFwidGFzay1kZXNjcmlwdGlvbiB0YXNrLWluZm9cIixcbiAgICAgICAgICAgIHRhc2suZ2V0RGVzY3JpcHRpb24oKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBuZXdUYXNrRGF0ZSA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1kYXRlYCxcbiAgICAgICAgICAgIFwidGFzay1kYXRlIHRhc2staW5mb1wiLFxuICAgICAgICAgICAgdGFzay5nZXREYXRlKClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgdGFza1Byb2plY3RMYWJlbCA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LWxhYmVsYCxcbiAgICAgICAgICAgIFwidGFzay1wcm9qZWN0LWluZm8gdGFzay1pbmZvXCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbmV3VGFza0VkaXRCdXR0b24gPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tZWRpdC1idXR0b25gLFxuICAgICAgICAgICAgXCJlZGl0LWJ1dHRvblwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tFZGl0SWNvbiA9IF9tYWtlTmV3RWxlbWVudChcImlcIiwgXCJcIiwgXCJmYS1zb2xpZCBmYS1wZW5jaWwgZWRpdC1pY29uXCIpO1xuICAgICAgICBjb25zdCBuZXdUYXNrRWRpdFRleHQgPSBfbWFrZU5ld0VsZW1lbnQoXCJzcGFuXCIsIFwiXCIsIFwiZWRpdC10ZXh0XCIsIFwiRWRpdCBUYXNrXCIpO1xuICAgICAgICBjb25zdCBuZXdUYXNrRGVsZXRlQnV0dG9uID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIGBwcm9qZWN0LSR7cHJvamVjdE51bWJlcn0tdGFzay0ke3Rhc2tOdW1iZXJ9LWRlbGV0ZS1idXR0b25gLFxuICAgICAgICAgICAgXCJlZGl0LWJ1dHRvbiBkZWxldGVcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBuZXdUYXNrRGVsZXRlSWNvbiA9IF9tYWtlTmV3RWxlbWVudChcImlcIiwgXCJcIiwgXCJmYS1zb2xpZCBmYS10cmFzaCBlZGl0LWljb25cIik7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEZWxldGVUZXh0ID0gX21ha2VOZXdFbGVtZW50KFwic3BhblwiLCBcIlwiLCBcImRlbGV0ZS10ZXh0XCIsIFwiRGVsZXRlIFRhc2tcIik7XG5cbiAgICAgICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrQ2hlY2tib3gpO1xuICAgICAgICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tOYW1lKTtcbiAgICAgICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrRGVzY3JpcHRpb24pO1xuICAgICAgICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tEYXRlKTtcbiAgICAgICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrUHJvamVjdExhYmVsKTtcbiAgICAgICAgbmV3VGFza0VkaXRCdXR0b24uYXBwZW5kQ2hpbGQobmV3VGFza0VkaXRJY29uKTtcbiAgICAgICAgbmV3VGFza0VkaXRCdXR0b24uYXBwZW5kQ2hpbGQobmV3VGFza0VkaXRUZXh0KTtcbiAgICAgICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrRWRpdEJ1dHRvbik7XG4gICAgICAgIG5ld1Rhc2tEZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQobmV3VGFza0RlbGV0ZUljb24pO1xuICAgICAgICBuZXdUYXNrRGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKG5ld1Rhc2tEZWxldGVUZXh0KTtcbiAgICAgICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrRGVsZXRlQnV0dG9uKTtcblxuICAgICAgICBfaW5zZXJ0QWZ0ZXIobmV3VGFza0NvbnRhaW5lciwgdGFza3NDb250YWluZXIuY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVUYXNrQnV0dG9ucyhuZXdUYXNrRWRpdEJ1dHRvbiwgbmV3VGFza0RlbGV0ZUJ1dHRvbik7XG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZUNoZWNrYm94KGluZGV4ICsgMSk7XG4gICAgICAgIGlmICh0YXNrLmdldENvbXBsZXRlKCkpIHtcbiAgICAgICAgICAgIG5ld1Rhc2tDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiY2hlY2tlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaXNQcm9qZWN0U2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgZ2V0RWxlbWVudHMoXCIucHJvamVjdC1zaWRlLWxhYmVsXCIpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICAgICAgICAgIGlzUHJvamVjdFNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghaXNQcm9qZWN0U2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRhc2tQcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKClbcHJvamVjdE51bWJlcl0uZ2V0TmFtZSgpO1xuICAgICAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlUHJvamVjdExpbmsodGFza1Byb2plY3RMYWJlbCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9zaG93cyB0aGUgY29uZmlybSBhbmQgY2FuY2VsIGJ1dHRvbnMgZm9yIGVkaXRpbmcgYSBwcm9qZWN0XG4gICAgY29uc3QgX2Rpc3BsYXlDb25maXJtQ2FuY2VsID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uQ29udGFpbmVyID0gZ2V0RWxlbWVudChcIi5idXR0b24tY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TnVtYmVyID0gX2dldFByb2plY3ROdW1iZXIoKTtcbiAgICAgICAgY29uc3QgY29uZmlybUNvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LWRlbGV0ZS1idXR0b24tY29udGFpbmVyYCxcbiAgICAgICAgICAgIFwiYnV0dG9uLWNvbnRhaW5lciBjb25jYW5cIlxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGNvbmZpcm1Qcm9qZWN0QnV0dG9uID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIGBwcm9qZWN0LSR7cHJvamVjdE51bWJlcn0tY29uZmlybS1kZWxldGUtYnV0dG9uYCxcbiAgICAgICAgICAgIFwiZWRpdC1idXR0b24gY29uZmlybVwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1Qcm9qZWN0SWNvbiA9IF9tYWtlTmV3RWxlbWVudChcImlcIiwgXCJcIiwgXCJmYS1zb2xpZCBmYS1jaGVjayBlZGl0LWljb25cIik7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1Qcm9qZWN0VGV4dCA9IF9tYWtlTmV3RWxlbWVudChcInNwYW5cIiwgXCJcIiwgXCJlZGl0LXRleHRcIiwgXCJDb25maXJtXCIpO1xuICAgICAgICBjb25maXJtUHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChjb25maXJtUHJvamVjdEljb24pO1xuICAgICAgICBjb25maXJtUHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChjb25maXJtUHJvamVjdFRleHQpO1xuXG4gICAgICAgIGNvbnN0IGNhbmNlbFByb2plY3RCdXR0b24gPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS1jYW5jZWwtZGVsZXRlLWJ1dHRvbmAsXG4gICAgICAgICAgICBcImVkaXQtYnV0dG9uIGNhbmNlbFwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGNhbmNlbFByb2plY3RJY29uID0gX21ha2VOZXdFbGVtZW50KFwiaVwiLCBcIlwiLCBcImZhLXNvbGlkIGZhLXhtYXJrIGVkaXQtaWNvblwiKTtcbiAgICAgICAgY29uc3QgY2FuY2VsUHJvamVjdFRleHQgPSBfbWFrZU5ld0VsZW1lbnQoXCJzcGFuXCIsIFwiXCIsIFwiZWRpdC10ZXh0XCIsIFwiQ2FuY2VsXCIpO1xuICAgICAgICBjYW5jZWxQcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKGNhbmNlbFByb2plY3RJY29uKTtcbiAgICAgICAgY2FuY2VsUHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChjYW5jZWxQcm9qZWN0VGV4dCk7XG5cbiAgICAgICAgY29uZmlybUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb25maXJtUHJvamVjdEJ1dHRvbik7XG4gICAgICAgIGNvbmZpcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsUHJvamVjdEJ1dHRvbik7XG5cbiAgICAgICAgcHJvamVjdEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb25maXJtQ29udGFpbmVyKTtcbiAgICB9O1xuXG4gICAgY29uc3QgX2ZpbGxJbkRheXMgPSBudW1iZXJPZkRheXMgPT4ge1xuICAgICAgICBsZXQgb3ZlcmFsbEluZGV4Q291bnQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBudW1iZXJPZkRheXM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRpc3BsYXllZFRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCB0YXNrQ291bnQgPSAwO1xuICAgICAgICAgICAgX2dldFRhc2tzKGkpLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgX2ZpbGxJblRhc2sodGFzaywgdGFzay5nZXROdW1iZXIoKSwgb3ZlcmFsbEluZGV4Q291bnQrKyk7XG4gICAgICAgICAgICAgICAgZGlzcGxheWVkVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGFza0NvdW50Kys7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChkaXNwbGF5ZWRUYXNrKSB7XG4gICAgICAgICAgICAgICAgX2luc2VydEFmdGVyKFxuICAgICAgICAgICAgICAgICAgICBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYGRheS0ke2l9LWF3YXktbGFiZWxgLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXktYXdheS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0KGFkZCh0b0RhdGUobmV3IERhdGUoKSksIHsgZGF5czogaSB9KSwgXCJNTS9kZC95eXl5XCIpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGdldEVsZW1lbnQoXCIudGFza3MtY29udGFpbmVyXCIpLmNoaWxkTm9kZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRFbGVtZW50KFwiLnRhc2tzLWNvbnRhaW5lclwiKS5jaGlsZE5vZGVzLmxlbmd0aCAtIHRhc2tDb3VudCAtIDFcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgb3ZlcmFsbEluZGV4Q291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgX2NoZWNrRGF5cyA9IChlLCBudW1DaGFuZ2VkKSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZXMgPSBbXTtcbiAgICAgICAgaWYgKG51bUNoYW5nZWQgPiAxNCkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlcy5wdXNoKFwiUGxlYXNlIGVudGVyIGxlc3MgdGhhbiAxNCBkYXlzXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKG51bUNoYW5nZWQgPCAxKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzLnB1c2goXCJQbGVhc2UgZW50ZXIgMSBkYXkgb3IgbW9yZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3JNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfZGlzcGxheUVycm9ycyhlLCBlcnJvck1lc3NhZ2VzKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBjaGFuZ2VEYXlzID0gZSA9PiB7XG4gICAgICAgIHByb2plY3RGdW5jdGlvbnMuc2V0Q3VycmVudERheXMoZ2V0RWxlbWVudChcIi5kYXlzLXNlbGVjdG9yXCIpLnZhbHVlKTtcbiAgICAgICAgaWYgKF9jaGVja0RheXMoZSwgcHJvamVjdEZ1bmN0aW9ucy5nZXRDdXJyZW50RGF5cygpKSkge1xuICAgICAgICAgICAgX3JlbW92ZUFsbENoaWxkcmVuKGdldEVsZW1lbnQoXCIudGFza3MtY29udGFpbmVyXCIpLCAxKTtcbiAgICAgICAgICAgIF9maWxsSW5EYXlzKHByb2plY3RGdW5jdGlvbnMuZ2V0Q3VycmVudERheXMoKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9kaXNwbGF5cyBhIG5ldyBwcm9qZWN0IHRoYXQgY2FuIGJlIHNlbGVjdGVkIHRvIHRoZSBzaWRlIHBhbmVsXG4gICAgY29uc3Qgc2V0dXBOZXdQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBfdG9nZ2xlQWN0aXZlKFwiI2FkZC1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICAgICAgX3RvZ2dsZUFjdGl2ZShcIiNhZGQtcHJvamVjdC1idXR0b24tdGV4dFwiKTtcbiAgICAgICAgY29uc3QgbmV3UHJvaklucHV0Q29udGFpbmVyID0gX21ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwibmV3LXByb2otaW5wdXQtY29udGFpbmVyXCIsIFwiaW5wdXQtY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBuZXdQcm9qSW5wdXQgPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImlucHV0XCIsXG4gICAgICAgICAgICBcIm5ldy1wcm9qLWlucHV0XCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiUHJvamVjdCBUaXRsZVwiIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbmV3UHJvakFkZEJ1dHRvbiA9IF9tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIm5ldy1wcm9qLWFkZC1idXR0b25cIiwgXCJhZGQtYnV0dG9uXCIsIFwiU3VibWl0XCIpO1xuXG4gICAgICAgIG5ld1Byb2pJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qSW5wdXQpO1xuICAgICAgICBuZXdQcm9qSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvakFkZEJ1dHRvbik7XG5cbiAgICAgICAgZ2V0RWxlbWVudChcIiNhZGQtcHJvamVjdC1idXR0b24tY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKG5ld1Byb2pJbnB1dENvbnRhaW5lcik7XG4gICAgICAgIEV2ZW50SGFuZGxlci5jbGVhclRleHRCb3goKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLmFkZFByb2plY3RTdWJtaXNzaW9uKCk7XG4gICAgfTtcbiAgICAvL2NhbmNlbHMgdGhlIG5ldyBQcm9qZWN0IGRpYWxvZ1xuICAgIGNvbnN0IGNhbmNlbE5ld1Byb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIF90b2dnbGVBY3RpdmUoXCIjYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuICAgICAgICBfdG9nZ2xlQWN0aXZlKFwiI2FkZC1wcm9qZWN0LWJ1dHRvbi10ZXh0XCIpO1xuICAgICAgICBnZXRFbGVtZW50KFwiI25ldy1wcm9qLWlucHV0LWNvbnRhaW5lclwiKS5yZW1vdmUoKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlQWRkQnV0dG9uKCk7XG4gICAgfTtcblxuICAgIC8vZ2V0cyB0aGUgaW5mb3JtYXRpb24gdGhhdCB3YXMgaW4gdGhlIG5ldyBwcm9qZWN0IGRpYWxvZ1xuICAgIGNvbnN0IGdldE5ld1Byb2pJbmZvID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4geyBuYW1lOiBET01NYW5pcC5nZXRFbGVtZW50KFwiI25ldy1wcm9qLWlucHV0XCIpLnZhbHVlIH07XG4gICAgfTtcblxuICAgIC8vY2hlY2tzIG92ZXIgdGhlIGluZm9ybWF0aW9uIGdpdmVuIGZvciBhIHByb2plY3QgYW5kIGRpc3BsYXlzIGVycm9yIG1lc3NhZ2VzIGlmIHRoZXJlIGlzIGFuIGlzc3VlXG4gICAgY29uc3QgY2hlY2tOZXdQcm9qZWN0ID0gKGUsIHByb2plY3QpID0+IHtcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZXMgPSBbXTtcbiAgICAgICAgaWYgKHByb2plY3QubmFtZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzLnB1c2goXCJQbGVhc2UgZW50ZXIgYSB0aXRsZSBmb3IgdGhlIHByb2plY3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yTWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX2Rpc3BsYXlFcnJvcnMoZSwgZXJyb3JNZXNzYWdlcyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy91cGRhdGVzIHRoZSBzaWRlIHBhbmVsIHRoYXQgZGlzcGxheXMgdGhlIGxpc3Qgb2YgYWxsIG9mIHRoZSBwcm9qZWN0c1xuICAgIGNvbnN0IHVwZGF0ZVByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoZ2V0RWxlbWVudChcIiNuZXctcHJvai1pbnB1dC1jb250YWluZXJcIikpIHtcbiAgICAgICAgICAgIGdldEVsZW1lbnQoXCIjbmV3LXByb2otaW5wdXQtY29udGFpbmVyXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgX3RvZ2dsZUFjdGl2ZShcIiNhZGQtcHJvamVjdC1idXR0b25cIik7XG4gICAgICAgICAgICBfdG9nZ2xlQWN0aXZlKFwiI2FkZC1wcm9qZWN0LWJ1dHRvbi10ZXh0XCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRFbGVtZW50KFwiLnRpdGxlLWVkaXRcIikpIHtcbiAgICAgICAgICAgIF9kaXNwbGF5VGl0bGUoKTtcbiAgICAgICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZVByb2plY3RCdXR0b25zKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFnZXRFbGVtZW50KFwiI3Byb2plY3RzLXRvZ2dsZVwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG9zZWRcIikpIHtcbiAgICAgICAgICAgIF9kaXNwbGF5UHJvamVjdHMoKTtcbiAgICAgICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZUFkZEJ1dHRvbigpO1xuICAgICAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlUHJvamVjdHMoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvL29wZW5zIHVwIHRoZSBlZGl0IHByb2plY3QgZGlhbG9nXG4gICAgY29uc3QgZGlzcGxheUVkaXRQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TnVtYmVyID0gX2dldFByb2plY3ROdW1iZXIoKTtcbiAgICAgICAgY29uc3QgcHJvamVjVGl0bGUgPSBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKClbcHJvamVjdE51bWJlcl0uZ2V0TmFtZSgpO1xuICAgICAgICBjb25zdCB0aXRsZVdyYXBwZXIgPSBnZXRFbGVtZW50KFwiLnByb2plY3QtdGl0bGUtd3JhcHBlclwiKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgICAgIGBwcm9qZWN0LSR7cHJvamVjdE51bWJlcn0tdGl0bGUtaW5wdXRgLFxuICAgICAgICAgICAgXCJ0aXRsZS1lZGl0XCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogcHJvamVjVGl0bGUgfSxcbiAgICAgICAgICAgIHsgXCJkYXRhLXByb2plY3RcIjogcHJvamVjdE51bWJlciB9XG4gICAgICAgICk7XG4gICAgICAgIHRpdGxlV3JhcHBlci5pbnNlcnRCZWZvcmUocHJvamVjdFRpdGxlSW5wdXQsIHRpdGxlV3JhcHBlci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgdGl0bGVXcmFwcGVyLmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b25Db250YWluZXIgPSBnZXRFbGVtZW50KFwiLmJ1dHRvbi1jb250YWluZXJcIik7XG4gICAgICAgIF9yZW1vdmVBbGxDaGlsZHJlbihwcm9qZWN0QnV0dG9uQ29udGFpbmVyKTtcblxuICAgICAgICBfZGlzcGxheUNvbmZpcm1DYW5jZWwoKTtcblxuICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVDb25maXJtUHJvamVjdEVkaXQoZ2V0RWxlbWVudChcIi5lZGl0LWJ1dHRvbi5jb25maXJtXCIpKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlQ2FuY2VsQnV0dG9uKGdldEVsZW1lbnQoXCIuZWRpdC1idXR0b24uY2FuY2VsXCIpKTtcbiAgICB9O1xuXG4gICAgLy9kaXNwbGF5cyB0aGUgY29uZmlybWF0aW9uIG9mIGRlbGV0aW5nIGEgcHJvamVjdFxuICAgIGNvbnN0IGRpc3BsYXlEZWxldGVQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uQ29udGFpbmVyID0gZ2V0RWxlbWVudChcIi5idXR0b24tY29udGFpbmVyXCIpO1xuICAgICAgICBfcmVtb3ZlQWxsQ2hpbGRyZW4ocHJvamVjdEJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgX2Rpc3BsYXlDb25maXJtQ2FuY2VsKCk7XG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlRGVsZXRlUHJvamVjdChnZXRFbGVtZW50KFwiLmVkaXQtYnV0dG9uLmNvbmZpcm1cIikpO1xuICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVDYW5jZWxCdXR0b24oZ2V0RWxlbWVudChcIi5lZGl0LWJ1dHRvbi5jYW5jZWxcIikpO1xuICAgIH07XG4gICAgLy9kaXNjYXJkcyB0aGUgZWRpdCBhbmQgZGlzcGxheXMgdGhlIGluaXRpYWwgcHJvamVjdCB0aXRsZVxuICAgIGNvbnN0IGNhbmNlbFByb2plY3RFZGl0ID0gKCkgPT4ge1xuICAgICAgICBfZGlzcGxheVRpdGxlKCk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZVByb2plY3RCdXR0b25zKCk7XG4gICAgfTtcblxuICAgIC8vb3BlbnMgYW5kIGNsb3NlcyB0aGUgZWxlbWVudHMgdW5kZXIgdGhlIHByb2plY3RzIGFuZCB0b2RheSBzaWRlIGhlYWRlcnMgd2hlbiB0aGUgdG9nZ2xlIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgY29uc3QgZXhwYW5kVG9nZ2xlID0gZSA9PiB7XG4gICAgICAgIGxldCBhcnJheSA9IFtdO1xuICAgICAgICBsZXQgdHlwZSA9IFwiXCI7XG4gICAgICAgIGxldCBkdWUgPSBcIlwiO1xuICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCA9PSBcInByb2plY3RzLXNpZGVcIikge1xuICAgICAgICAgICAgYXJyYXkgPSBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKCk7XG4gICAgICAgICAgICB0eXBlID0gXCJwcm9qZWN0XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b2RheVwiKSkge1xuICAgICAgICAgICAgYXJyYXkgPSBfZ2V0VGFza3MoMCk7XG4gICAgICAgICAgICB0eXBlID0gXCJ0YXNrXCI7XG4gICAgICAgICAgICBkdWUgPSBcInRvZGF5XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJvdmVyZHVlXCIpKSB7XG4gICAgICAgICAgICBhcnJheSA9IF9nZXRPdmVyZHVlVGFza3MoKTtcbiAgICAgICAgICAgIHR5cGUgPSBcInRhc2tcIjtcbiAgICAgICAgICAgIGR1ZSA9IFwib3ZlcmR1ZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG9zZWRcIikpIHtcbiAgICAgICAgICAgIF9yZXZlYWxBcnJheShlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQsIGFycmF5LCB0eXBlLCBkdWUpO1xuICAgICAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlU2lkZXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9yZW1vdmVBbGxDaGlsZHJlbihlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJjbG9zZWRcIik7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcblxuICAgIC8vcmV0dXJucyB0aGUgaW5mb3JtYXRpb24gZ2l2ZW4gYnkgdGhlIGFkZCB0YXNrIGRpYWxvZ1xuICAgIGNvbnN0IGdldFRhc2tJbmZvID0gKGluZGV4LCBwcm9qZWN0TnVtYmVyKSA9PiB7XG4gICAgICAgIGxldCBmb3JtSW5mbztcbiAgICAgICAgbGV0IHRhc2tOdW1iZXI7XG4gICAgICAgIGlmICghcHJvamVjdE51bWJlcikge1xuICAgICAgICAgICAgcHJvamVjdE51bWJlciA9IF9nZXRQcm9qZWN0TnVtYmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm9ybUluZm8gPSBnZXRFbGVtZW50cyhcIi5hZGQtdGFzay1pbmZvXCIpO1xuICAgICAgICAgICAgdGFza051bWJlciA9IHByb2plY3RGdW5jdGlvbnMuZ2V0QWxsUHJvamVjdHMoKVtwcm9qZWN0TnVtYmVyXS50YXNrcy5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3JtSW5mbyA9IGdldEVsZW1lbnRzKGAjcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHtpbmRleH0tY29udGFpbmVyIC5lZGl0LXRhc2staW5mb2ApO1xuICAgICAgICAgICAgdGFza051bWJlciA9IGluZGV4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBmb3JtSW5mb1swXS52YWx1ZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBmb3JtSW5mb1sxXS52YWx1ZSxcbiAgICAgICAgICAgIGRhdGU6IGZvcm1JbmZvWzJdLnZhbHVlID8gZm9ybWF0KHRvRGF0ZShwYXJzZUlTTyhmb3JtSW5mb1syXS52YWx1ZSkpLCBcIk1NL2RkL3l5eXlcIikgOiBcIlwiLFxuICAgICAgICAgICAgcHJpb3JpdHk6IGZvcm1JbmZvWzNdLnZhbHVlLFxuICAgICAgICAgICAgcHJvamVjdDogcHJvamVjdE51bWJlcixcbiAgICAgICAgICAgIG51bWJlcjogdGFza051bWJlcixcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLy9jaGVja3MgdGhlIGluZm9ybWF0aW9uIGdpdmVuIGluIGEgbmV3IG9yIHVwZGF0ZWQgdGFzayBhbmQgZGlzcGxheXMgZXJyb3IgbWVzc2FnZXMgaWYgYW55dGhpbmcgaXMgd3JvbmdcbiAgICBjb25zdCBjaGVja05ld1Rhc2sgPSAoZSwgdGFzaykgPT4ge1xuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlcyA9IFtdO1xuICAgICAgICBpZiAodGFzay5uYW1lID09IFwiXCIpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZXMucHVzaChcIlBsZWFzZSBlbnRlciBhIG5hbWUgZm9yIHRoZSB0YXNrXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXNrLmRlc2NyaXB0aW9uID09IFwiXCIpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZXMucHVzaChcIlBsZWFzZSBlbnRlciBhIGRlc2NyaXB0aW9uIGZvciB0aGUgdGFza1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFzay5kYXRlID09IFwiXCIpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZXMucHVzaChcIlBsZWFzZSBlbnRlciBhIGR1ZSBkYXRlIGZvciB0aGUgdGFza1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PSAwKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzLnB1c2goXCJQbGVhc2UgZW50ZXIgYSBwcmlvcml0eSBsZXZlbCBmb3IgdGhlIHRhc2tcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3JNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfZGlzcGxheUVycm9ycyhlLCBlcnJvck1lc3NhZ2VzKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vcmVmcmVzaGVzIHRoZSB0YXNrIGxpc3QgdG8gZGlzcGxheSBhIG5ldyBvciBlZGl0ZWQgdGFza1xuICAgIGNvbnN0IHVwZGF0ZVRhc2tMaXN0ID0gcHJvamVjdE51bWJlciA9PiB7XG4gICAgICAgIGlmIChnZXRFbGVtZW50KFwiI3RvZGF5cy10b2RvLXNpZGVcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgICAgIHNob3dUb2RheSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGdldEVsZW1lbnQoXCIjb3ZlcmR1ZS10b2RvLXNpZGVcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgICAgIHNob3dPdmVyZHVlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2V0RWxlbWVudChcIiNkYXlzLXRvZG8tc2lkZVwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICAgICAgY2hhbmdlRGF5cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2V0RWxlbWVudChgI3Byb2plY3QtJHtwcm9qZWN0TnVtYmVyfWApLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFnZXRFbGVtZW50KFwiI3RvZGF5LXRvZ2dsZVwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG9zZWRcIikpIHtcbiAgICAgICAgICAgIF9kaXNwbGF5VG9kYXlTaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFnZXRFbGVtZW50KFwiI292ZXJkdWUtdG9nZ2xlXCIpLmNsYXNzTGlzdC5jb250YWlucyhcImNsb3NlZFwiKSkge1xuICAgICAgICAgICAgX2Rpc3BsYXlPdmVyZHVlU2lkZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IF9jb25maXJtQ2FuY2VsVGFzayA9IChjb25maXJtQnV0dG9uLCBjYW5jZWxCdXR0b24pID0+IHtcbiAgICAgICAgY29uZmlybUJ1dHRvbi5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwiZmEtcGVuY2lsXCIpO1xuICAgICAgICBjb25maXJtQnV0dG9uLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJmYS1jaGVja1wiKTtcbiAgICAgICAgY29uZmlybUJ1dHRvbi5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XG4gICAgICAgIGNvbmZpcm1CdXR0b24uY2xhc3NMaXN0LmFkZChcImNvbmZpcm1cIik7XG5cbiAgICAgICAgY2FuY2VsQnV0dG9uLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJmYS10cmFzaFwiKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJmYS14bWFya1wiKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIH07XG5cbiAgICAvL3Nob3dzIHRoZSBlZGl0IHRhc2sgZGlhbG9nIHdoZW4gdGhlIGVkaXQgdGFzayBidXR0b24gaGFzIGJlZW4gcHJlc3NlZCwgZGVmYXVsdGluZyB3aXRoIHRoZVxuICAgIC8vY3VycmVudCB0YXNrIGluZm9ybWF0aW9uXG4gICAgY29uc3QgZGlzcGxheUVkaXRUYXNrID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGUuY3VycmVudFRhcmdldC5uZXh0U2libGluZztcbiAgICAgICAgY29uc3QgcHJvamVjdE51bWJlciA9IGVkaXRCdXR0b24ucGFyZW50RWxlbWVudC5kYXRhc2V0LnByb2plY3Q7XG4gICAgICAgIGNvbnN0IHRhc2tOdW1iZXIgPSBlZGl0QnV0dG9uLnBhcmVudEVsZW1lbnQuZGF0YXNldC50YXNrO1xuICAgICAgICBjb25zdCBlZGl0VGFzayA9IHByb2plY3RGdW5jdGlvbnMuZ2V0QWxsUHJvamVjdHMoKVtwcm9qZWN0TnVtYmVyXS5nZXRUYXNrcygpW3Rhc2tOdW1iZXJdO1xuXG4gICAgICAgIGNvbnN0IGVkaXRUYXNrTmFtZSA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgICAgIFwiZWRpdC10YXNrLW5hbWUtaW5wdXRcIixcbiAgICAgICAgICAgIFwiZWRpdC10YXNrLWluZm9cIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBlZGl0VGFzay5nZXROYW1lKCkgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBlZGl0VGFza0Rlc2NyaXB0aW9uID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgICAgXCJlZGl0LXRhc2stZGVzY3JpcHRpb24taW5wdXRcIixcbiAgICAgICAgICAgIFwiZWRpdC10YXNrLWluZm9cIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBlZGl0VGFzay5nZXREZXNjcmlwdGlvbigpIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZWRpdFRhc2tEYXRlID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgICAgXCJlZGl0LXRhc2stZGF0ZS1pbnB1dFwiLFxuICAgICAgICAgICAgXCJlZGl0LXRhc2staW5mb1wiLFxuICAgICAgICAgICAgXCJEdWUgRGF0ZVwiLFxuICAgICAgICAgICAgeyB0eXBlOiBcImRhdGVcIiB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogbmV3IERhdGUoZWRpdFRhc2suZ2V0RGF0ZSgpKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXSB9LFxuICAgICAgICAgICAgeyBtaW46IHN0YXJ0T2ZEYXkobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF0gfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBlZGl0VGFza1ByaW9yaXR5ID0gX21ha2VOZXdFbGVtZW50KFwic2VsZWN0XCIsIFwiZWRpdC10YXNrLXByaW9yaXR5LWlucHV0XCIsIFwiZWRpdC10YXNrLWluZm9cIiwgXCJcIik7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrUHJpb3JpdHlMb3cgPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICBcIkxvd1wiLFxuICAgICAgICAgICAgeyB2YWx1ZTogXCJMb3dcIiB9LFxuICAgICAgICAgICAgeyBzdHlsZTogXCJiYWNrZ3JvdW5kLWNvbG9yOiNFMUFEQURcIiB9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrUHJpb3JpdHlNZWRpdW0gPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICBcIk1lZGl1bVwiLFxuICAgICAgICAgICAgeyB2YWx1ZTogXCJNZWRpdW1cIiB9LFxuICAgICAgICAgICAgeyBzdHlsZTogXCJiYWNrZ3JvdW5kLWNvbG9yOiNFRkVGMzhcIiB9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrUHJpb3JpdHlIaWdoID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgXCJIaWdoXCIsXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkhpZ2hcIiB9LFxuICAgICAgICAgICAgeyBzdHlsZTogXCJiYWNrZ3JvdW5kLWNvbG9yOiM5RENEOERcIiB9XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGVkaXRUYXNrLmdldFByaW9yaXR5KCkgPT0gXCJMb3dcIikge1xuICAgICAgICAgICAgZWRpdFRhc2tQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcInNlbGVjdGVkXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGVkaXRUYXNrLmdldFByaW9yaXR5KCkgPT0gXCJNZWRpdW1cIikge1xuICAgICAgICAgICAgZWRpdFRhc2tQcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcInNlbGVjdGVkXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGVkaXRUYXNrLmdldFByaW9yaXR5KCkgPT0gXCJIaWdoXCIpIHtcbiAgICAgICAgICAgIGVkaXRUYXNrUHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0RWxlbWVudHMoYCNwcm9qZWN0LSR7cHJvamVjdE51bWJlcn0tdGFzay0ke3Rhc2tOdW1iZXJ9LWNvbnRhaW5lciAudGFzay1pbmZvYCkuZm9yRWFjaChlbGUgPT5cbiAgICAgICAgICAgIGVsZS5yZW1vdmUoKVxuICAgICAgICApO1xuXG4gICAgICAgIGVkaXRUYXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQoZWRpdFRhc2tQcmlvcml0eUxvdyk7XG4gICAgICAgIGVkaXRUYXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQoZWRpdFRhc2tQcmlvcml0eU1lZGl1bSk7XG4gICAgICAgIGVkaXRUYXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQoZWRpdFRhc2tQcmlvcml0eUhpZ2gpO1xuXG4gICAgICAgIGNvbnN0IGVkaXRUYXNrQ29udGFpbmVyID0gZ2V0RWxlbWVudChgI3Byb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tY29udGFpbmVyYCk7XG4gICAgICAgIGVkaXRUYXNrQ29udGFpbmVyLmluc2VydEJlZm9yZShlZGl0VGFza05hbWUsIGVkaXRUYXNrQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQucHJldmlvdXNTaWJsaW5nKTtcbiAgICAgICAgZWRpdFRhc2tDb250YWluZXIuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgZWRpdFRhc2tEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGVkaXRUYXNrQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQucHJldmlvdXNTaWJsaW5nXG4gICAgICAgICk7XG4gICAgICAgIGVkaXRUYXNrQ29udGFpbmVyLmluc2VydEJlZm9yZShlZGl0VGFza0RhdGUsIGVkaXRUYXNrQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQucHJldmlvdXNTaWJsaW5nKTtcbiAgICAgICAgZWRpdFRhc2tDb250YWluZXIuaW5zZXJ0QmVmb3JlKGVkaXRUYXNrUHJpb3JpdHksIGVkaXRUYXNrQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQucHJldmlvdXNTaWJsaW5nKTtcblxuICAgICAgICBfY29uZmlybUNhbmNlbFRhc2soZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uKTtcblxuICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVDb25maXJtVGFza0VkaXQoZWRpdEJ1dHRvbik7XG4gICAgfTtcblxuICAgIGNvbnN0IGRpc3BsYXlEZWxldGVUYXNrID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGUuY3VycmVudFRhcmdldC5wcmV2aW91c1NpYmxpbmc7XG5cbiAgICAgICAgX2NvbmZpcm1DYW5jZWxUYXNrKGVkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZUNvbmZpcm1UYXNrRGVsZXRlKGRlbGV0ZUJ1dHRvbik7XG4gICAgfTtcblxuICAgIC8vc2V0cyB0YXNrIGJhY2sgdG8gb3JpZ2luYWwgYmVmb3JlIGVkaXQgd2FzIHJlcXVlc3RlZFxuICAgIGNvbnN0IGNhbmNlbEVkaXQgPSBlID0+IHtcbiAgICAgICAgdXBkYXRlVGFza0xpc3QoZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0KTtcbiAgICB9O1xuXG4gICAgLy9idWlsZHMgdGhlIGJhc2ljIG91dGxpbmUgb2YgYW55IHBhZ2VcbiAgICBjb25zdCBfYnVpbGRQYWdlID0gdHlwZSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW5EaXNwbGF5ID0gZ2V0RWxlbWVudChcIiNtYWluLWRpc3BsYXlcIik7XG4gICAgICAgIGlmIChtYWluRGlzcGxheS5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG1haW5EaXNwbGF5LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZUNvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudChcImRpdlwiLCBgJHt0eXBlfS1jb250YWluZX1gLCBcInByb2plY3QtY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCB0aXRsZVdyYXBwZXIgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgYCR7dHlwZX0tdGl0bGUtd3JhcHBlcmAsIFwicHJvamVjdC10aXRsZS13cmFwcGVyXCIpO1xuICAgICAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudChcImRpdlwiLCBgJHt0eXBlfS10YXNrcy1jb250YWluZXJgLCBcInRhc2tzLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgdGFza3NXcmFwcGVyID0gX21ha2VOZXdFbGVtZW50KFwiZGl2XCIsIGAke3R5cGV9LXRhc2tzLXdyYXBwZXJgLCBcInRhc2tzLXdyYXBwZXJcIik7XG4gICAgICAgIGNvbnN0IHNwYWNlciA9IF9tYWtlTmV3RWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZVdyYXBwZXIpO1xuICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFjZXIpO1xuICAgICAgICB0YXNrc1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXIpO1xuICAgICAgICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tzV3JhcHBlcik7XG4gICAgICAgIG1haW5EaXNwbGF5LmFwcGVuZENoaWxkKHBhZ2VDb250YWluZXIpO1xuICAgIH07XG5cbiAgICAvL2Rpc3BsYXlzIGEgcHJvamVjdCBwYWdlIGJhc2VkIG9uIHdoYXQgcHJvamVjdCB3YXMgc2VsZWN0ZWRcbiAgICBjb25zdCBzaG93UHJvamVjdCA9IGUgPT4ge1xuICAgICAgICBfbWFya1NlbGVjdGVkUHJvamVjdChlKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE51bWJlciA9IF9nZXRQcm9qZWN0TnVtYmVyKCk7XG4gICAgICAgIF9idWlsZFBhZ2UoZSwgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfWApO1xuXG4gICAgICAgIGdldEVsZW1lbnQoXCIucHJvamVjdC1jb250YWluZXJcIikuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIsIHByb2plY3ROdW1iZXIpO1xuICAgICAgICBfZGlzcGxheVRpdGxlKCk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZVByb2plY3RCdXR0b25zKCk7XG4gICAgICAgIHByb2plY3RGdW5jdGlvbnNcbiAgICAgICAgICAgIC5nZXRBbGxQcm9qZWN0cygpW3Byb2plY3ROdW1iZXJdLmdldFRhc2tzKClcbiAgICAgICAgICAgIC5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4gX2ZpbGxJblRhc2sodGFzaywgaW5kZXgsIGluZGV4KSk7XG4gICAgICAgIF9kaXNwbGF5VGFza0lucHV0KCk7XG4gICAgfTtcblxuICAgIC8vc2hvd3MgdGhlIFRvZGF5J3MgVGFza3MgcGFnZVxuICAgIGNvbnN0IHNob3dUb2RheSA9IGUgPT4ge1xuICAgICAgICBfbWFya1NlbGVjdGVkUHJvamVjdChlKTtcbiAgICAgICAgX2J1aWxkUGFnZShcInRvZGF5XCIpO1xuXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gZm9ybWF0KHRvRGF0ZShuZXcgRGF0ZSgpKSwgXCJNTS9kZC95eXl5XCIpO1xuICAgICAgICBjb25zdCB0b2RheVRpdGxlID0gX21ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwidG9kYXktdGl0bGVcIiwgXCJwcm9qZWN0LXRpdGxlXCIsIGBUb2RheTogJHt0b2RheX1gKTtcbiAgICAgICAgZ2V0RWxlbWVudChcIi5wcm9qZWN0LXRpdGxlLXdyYXBwZXJcIikuYXBwZW5kQ2hpbGQodG9kYXlUaXRsZSk7XG5cbiAgICAgICAgX2dldFRhc2tzKDApLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiBfZmlsbEluVGFzayh0YXNrLCB0YXNrLmdldE51bWJlcigpLCBpbmRleCkpO1xuICAgIH07XG5cbiAgICAvL2JyaW5ncyB1cCB0aGUgcGFnZSB0aGF0IHNob3dzIGFsbCBvZiB0aGUgb3ZlcmR1ZSB0YXNrc1xuICAgIGNvbnN0IHNob3dPdmVyZHVlID0gZSA9PiB7XG4gICAgICAgIF9tYXJrU2VsZWN0ZWRQcm9qZWN0KGUpO1xuICAgICAgICBfYnVpbGRQYWdlKFwib3ZlcmR1ZVwiKTtcblxuICAgICAgICBjb25zdCBvdmVyZHVlVGl0bGUgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJvdmVyZHVlLXRpdGxlXCIsIFwicHJvamVjdC10aXRsZVwiLCBcIk92ZXJkdWVcIik7XG4gICAgICAgIGdldEVsZW1lbnQoXCIucHJvamVjdC10aXRsZS13cmFwcGVyXCIpLmFwcGVuZENoaWxkKG92ZXJkdWVUaXRsZSk7XG5cbiAgICAgICAgX2dldE92ZXJkdWVUYXNrcygpLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiBfZmlsbEluVGFzayh0YXNrLCB0YXNrLmdldE51bWJlcigpLCBpbmRleCkpO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93RGF5cyA9IGUgPT4ge1xuICAgICAgICBfbWFya1NlbGVjdGVkUHJvamVjdChlKTtcbiAgICAgICAgX2J1aWxkUGFnZShcImRheXNcIik7XG5cbiAgICAgICAgY29uc3QgdGl0bGVXcmFwcGVyID0gZ2V0RWxlbWVudChcIi5wcm9qZWN0LXRpdGxlLXdyYXBwZXJcIik7XG4gICAgICAgIGNvbnN0IGRheXNTZWxlY3RvciA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgICAgIFwiZGF5cy1zZWxlY3RvclwiLFxuICAgICAgICAgICAgXCJkYXlzLXNlbGVjdG9yXCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgeyB0eXBlOiBcIm51bWJlclwiIH0sXG4gICAgICAgICAgICB7IG1heDogMTQgfSxcbiAgICAgICAgICAgIHsgbWluOiAxIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBwcm9qZWN0RnVuY3Rpb25zLmdldEN1cnJlbnREYXlzKCkgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBkYXlzVGl0bGUgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJkYXlzLXRpdGxlXCIsIFwicHJvamVjdC10aXRsZVwiLCBcIkRheXMgQXdheTogXCIpO1xuICAgICAgICB0aXRsZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZGF5c1RpdGxlKTtcbiAgICAgICAgdGl0bGVXcmFwcGVyLmFwcGVuZENoaWxkKGRheXNTZWxlY3Rvcik7XG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlRGF5c1NlbGVjdG9yKCk7XG5cbiAgICAgICAgX2ZpbGxJbkRheXMocHJvamVjdEZ1bmN0aW9ucy5nZXRDdXJyZW50RGF5cygpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY29uZmlybUNsZWFyQWxsID0gZSA9PiB7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gXCJDbGljayBoZXJlIGFnYWluIHRvIGNsZWFyIGFsbCBkYXRhXCI7XG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZUNvbmZpcm1DbGVhckFsbCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBjYW5jZWxDbGVhckFsbCA9IGUgPT4ge1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9IFwiQ2xlYXIgQWxsIERhdGFcIjtcbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlQ2xlYXJBbGxCdXR0b24oKTtcbiAgICB9O1xuICAgIC8vaW5pdGFsaXplcyB0aGUgd2VicGFnZSBhbmQgc3RhcnRzIHRoZSBiYXNpYyBsaXN0ZW5lcnNcbiAgICBjb25zdCBzdGFydFBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIF9tYWtlU3RhcnRpbmdQYWdlKCk7XG4gICAgICAgIHNldFRpbWVvdXQoX2ZpeFN0YXJ0aW5nQW5pbWF0aW9ucywgMSk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5pbml0U3RhcnRpbmdMaXN0ZW5lcnMoKTtcbiAgICAgICAgcHJvamVjdEZ1bmN0aW9ucy5sb2FkUHJvamVjdHMoKTtcbiAgICAgICAgX2Rpc3BsYXlUb2RheVNpZGUoKTtcbiAgICAgICAgX2Rpc3BsYXlQcm9qZWN0cygpO1xuICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVTaWRlcygpO1xuICAgICAgICBnZXRFbGVtZW50KFwiI3RvZGF5cy10b2RvLXNpZGVcIikuY2xpY2soKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0RWxlbWVudCxcbiAgICAgICAgZ2V0RWxlbWVudHMsXG4gICAgICAgIHJlbW92ZVRleHQsXG4gICAgICAgIGNoZWNrTmV3UHJvamVjdCxcbiAgICAgICAgc2V0dXBOZXdQcm9qZWN0LFxuICAgICAgICBjYW5jZWxOZXdQcm9qZWN0LFxuICAgICAgICByZWZyZXNoVGFza1NpZGVzLFxuICAgICAgICBnZXROZXdQcm9qSW5mbyxcbiAgICAgICAgdXBkYXRlUHJvamVjdExpc3QsXG4gICAgICAgIGV4cGFuZFRvZ2dsZSxcbiAgICAgICAgc2hvd1Byb2plY3QsXG4gICAgICAgIGRpc3BsYXlEZWxldGVQcm9qZWN0LFxuICAgICAgICBnZXRUYXNrSW5mbyxcbiAgICAgICAgZ2V0VGFza0luZGV4LFxuICAgICAgICBjaGVja05ld1Rhc2ssXG4gICAgICAgIGRpc3BsYXlFZGl0UHJvamVjdCxcbiAgICAgICAgZGlzcGxheUVkaXRUYXNrLFxuICAgICAgICBkaXNwbGF5RGVsZXRlVGFzayxcbiAgICAgICAgbGlua1Byb2plY3QsXG4gICAgICAgIHVwZGF0ZVRhc2tMaXN0LFxuICAgICAgICBjYW5jZWxFZGl0LFxuICAgICAgICBjYW5jZWxQcm9qZWN0RWRpdCxcbiAgICAgICAgc2hvd1RvZGF5LFxuICAgICAgICBzaG93T3ZlcmR1ZSxcbiAgICAgICAgc2hvd0RheXMsXG4gICAgICAgIHN0YXJ0UGFnZSxcbiAgICAgICAgY2hhbmdlRGF5cyxcbiAgICAgICAgc29ydEFycmF5LFxuICAgICAgICBjb25maXJtQ2xlYXJBbGwsXG4gICAgICAgIGNhbmNlbENsZWFyQWxsLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET01NYW5pcDtcbiIsImltcG9ydCBET01NYW5pcCBmcm9tIFwiLi9ET01NYW5pcFwiO1xuaW1wb3J0IHsgcHJvamVjdEZ1bmN0aW9ucyB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmNvbnN0IEV2ZW50SGFuZGxlciA9ICgoKSA9PiB7XG4gICAgLy9hY3RpdmF0ZXMgdGhlIEFkZCBwcm9qZWN0IGJ1dHRvblxuICAgIGNvbnN0IGNsZWFyVGV4dEJveCA9ICgpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudHMoXCJpbnB1dFt0eXBlPSd0ZXh0JyBpXVwiKS5mb3JFYWNoKGVsZSA9PlxuICAgICAgICAgICAgZWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5yZW1vdmVUZXh0LCB7XG4gICAgICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnRzKFwiaW5wdXRbdHlwZT0ndGV4dCcgaV1cIikuZm9yRWFjaChlbGUgPT5cbiAgICAgICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAucmVtb3ZlVGV4dCwgeyBvbmNlOiB0cnVlIH0pXG4gICAgICAgICk7XG4gICAgfTtcbiAgICAvL2FjdGl2YXRlcyB0aGUgYWRkIGJ1dHRvbiBhbmQgdGhlIHNpZGUgdG9nZ2xlc1xuICAgIGNvbnN0IGFjdGl2YXRlQWRkQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI2FkZC1wcm9qZWN0LWJ1dHRvblwiKS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuY2FuY2VsTmV3UHJvamVjdCk7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIjYWRkLXByb2plY3QtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5zZXR1cE5ld1Byb2plY3QpO1xuICAgIH07XG4gICAgY29uc3QgYWN0aXZhdGVDbGVhckFsbEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNjbGVhci1hbGwtYnV0dG9uXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIERPTU1hbmlwLmNhbmNlbENsZWFyQWxsKTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNjbGVhci1hbGwtYnV0dG9uXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5jb25maXJtQ2xlYXJBbGwpO1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI2NsZWFyLWFsbC1idXR0b25cIikucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgIHByb2plY3RGdW5jdGlvbnMuY29uZmlybUFsbENsZWFyXG4gICAgICAgICk7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIjY2xlYXItYWxsLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuY29uZmlybUNsZWFyQWxsKTtcbiAgICB9O1xuXG4gICAgLy9hY3RpdmF0ZXMgdGhlIGxpc3RlbmVycyBmb3IgYWxsIG9mIGNsaWNrYWJsZSBidXR0b25zIGF0IHRoZSBzdGFydCBvZiB0aGUgcGFnZSBsb2FkXG4gICAgY29uc3QgaW5pdFN0YXJ0aW5nTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBhY3RpdmF0ZUFkZEJ1dHRvbigpO1xuICAgICAgICBhY3RpdmF0ZUNsZWFyQWxsQnV0dG9uKCk7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnRzKFwiLmRyb3Bkb3duLXRvZ2dsZVwiKS5mb3JFYWNoKGVsZSA9PlxuICAgICAgICAgICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5leHBhbmRUb2dnbGUsIHtcbiAgICAgICAgICAgICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy9jaGFuZ2VzIHRoZSBhZGQgcHJvamVjdCBidXR0b24gdG8gY2FuY2VsIGFkZGluZyBwcm9qZWN0IGFuZCBhY3RpdmF0ZXMgdGhlIHN1Ym1pdCBidXR0b25cbiAgICBjb25zdCBhZGRQcm9qZWN0U3VibWlzc2lvbiA9ICgpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNhZGQtcHJvamVjdC1idXR0b25cIikucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTU1hbmlwLnNldHVwTmV3UHJvamVjdCk7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIjYWRkLXByb2plY3QtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5jYW5jZWxOZXdQcm9qZWN0KTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNuZXctcHJvai1hZGQtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0RnVuY3Rpb25zLmFkZFByb2plY3QpO1xuICAgIH07XG5cbiAgICAvL2NsaWNraW5nIHRoZSBUb2RheSBoZWFkZXIgb3IgYW55IG9mIHRoZSB0YXNrcyBmb3IgdG9kYXkgYnJpbmdzIHVwIHRoZSBUb2RheSBwYWdlXG4gICAgY29uc3QgYWN0aXZhdGVUb2RheSA9ICgpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiN0b2RheXMtdG9kby1zaWRlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5zaG93VG9kYXkpO1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50cyhcIi50YXNrLXNpZGUtbGFiZWwudG9kYXlcIikuZm9yRWFjaChlbGUgPT5cbiAgICAgICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuc2hvd1RvZGF5KVxuICAgICAgICApO1xuICAgIH07XG4gICAgLy9jbGlja2luZyB0aGUgT3ZlcmR1ZSBoZWFkZXIgb3IgYW55IG9mIHRoZSB0YXNrIHRoYXQgYXJlIE92ZXJkdWUgYnJpbmdzIHVwIHRoZSBPdmVyZHVlIHBhZ2VcbiAgICBjb25zdCBhY3RpdmF0ZU92ZXJkdWUgPSAoKSA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIjb3ZlcmR1ZS10b2RvLXNpZGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTU1hbmlwLnNob3dPdmVyZHVlKTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudHMoXCIudGFzay1zaWRlLWxhYmVsLm92ZXJkdWVcIikuZm9yRWFjaChlbGUgPT5cbiAgICAgICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuc2hvd092ZXJkdWUpXG4gICAgICAgICk7XG4gICAgfTtcbiAgICAvL2NsaWNraW5nIHRoZSBPdmVyZHVlIGhlYWRlciBvciBhbnkgb2YgdGhlIHRhc2sgdGhhdCBhcmUgT3ZlcmR1ZSBicmluZ3MgdXAgdGhlIE92ZXJkdWUgcGFnZVxuICAgIGNvbnN0IGFjdGl2YXRlRGF5cyA9ICgpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNkYXlzLXRvZG8tc2lkZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuc2hvd0RheXMpO1xuICAgIH07XG5cbiAgICAvL21ha2VzIHRoZSBwcm9qZWN0cyBjbGlja2FibGUsIG1haW50YWlucyBvbmx5IG9uZSBhY3Rpb24gbGlzdGVuZXIgb24gZWFjaCBwcm9qZWN0XG4gICAgY29uc3QgYWN0aXZhdGVQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudHMoXCIucHJvamVjdC1zaWRlLWxhYmVsXCIpLmZvckVhY2goZWxlID0+XG4gICAgICAgICAgICBlbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTU1hbmlwLnNob3dQcm9qZWN0KVxuICAgICAgICApO1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50cyhcIi5wcm9qZWN0LXNpZGUtbGFiZWxcIikuZm9yRWFjaChlbGUgPT5cbiAgICAgICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuc2hvd1Byb2plY3QpXG4gICAgICAgICk7XG4gICAgfTtcbiAgICAvL3R1cm5zIG9uIGFsbCBzaWRlIHBhbmVsIHBhZ2VzXG4gICAgY29uc3QgYWN0aXZhdGVTaWRlcyA9ICgpID0+IHtcbiAgICAgICAgYWN0aXZhdGVUb2RheSgpO1xuICAgICAgICBhY3RpdmF0ZU92ZXJkdWUoKTtcbiAgICAgICAgYWN0aXZhdGVEYXlzKCk7XG4gICAgICAgIGFjdGl2YXRlUHJvamVjdHMoKTtcbiAgICB9O1xuICAgIC8vYWN0aXZhdGVzIHRoZSBlZGl0IHByb2plY3QgYnV0dG9uc1xuICAgIGNvbnN0IGFjdGl2YXRlUHJvamVjdEJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIuZWRpdC1idXR0b24udGl0bGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTU1hbmlwLmRpc3BsYXlFZGl0UHJvamVjdCk7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIuZWRpdC1idXR0b24uZGVsZXRlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5kaXNwbGF5RGVsZXRlUHJvamVjdCk7XG4gICAgfTtcbiAgICAvL2FjdGl2YXRlcyB0aGUgY2FuY2VsIHByb2plY3QtZWRpdCBidXR0b25cbiAgICBjb25zdCBhY3RpdmF0ZUNhbmNlbEJ1dHRvbiA9IGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuY2FuY2VsUHJvamVjdEVkaXQpO1xuICAgIH07XG4gICAgLy9jaGFuZ2VzIHRoZSBwcm9qZWN0IHRpdGxlIGVkaXQgaW50byB0aGUgY29uZmlybSBidXR0b25cbiAgICBjb25zdCBhY3RpdmF0ZUNvbmZpcm1Qcm9qZWN0RWRpdCA9IGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuZGlzcGxheUVkaXRQcm9qZWN0KTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0RnVuY3Rpb25zLmNvbmZpcm1Qcm9qZWN0RWRpdCk7XG4gICAgfTtcbiAgICAvL2FjdGl2YXRlcyB0aGUgZGVsZXRlIHByb2plY3QgYnV0dG9uXG4gICAgY29uc3QgYWN0aXZhdGVEZWxldGVQcm9qZWN0ID0gYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0RnVuY3Rpb25zLmRlbGV0ZVByb2plY3QpO1xuICAgIH07XG5cbiAgICAvL2FjdGl2YXRlcyB0aGUgYWRkIG5ldyB0YXNrIGJ1dHRvblxuICAgIGNvbnN0IGFjdGl2YXRlQWRkVGFza0J1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNhZGQtdGFzay1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3RGdW5jdGlvbnMuYWRkVGFzayk7XG4gICAgfTtcbiAgICAvL2FjdGl2YXRlcyB0aGUgZWRpdCB0YXNrIGJ1dHRvbiBmb3IgdGhhdCBzcGVjaWZpYyB0YXNrXG4gICAgY29uc3QgX2FjdGl2YXRlRWRpdFRhc2tCdXR0b24gPSBidXR0b24gPT4ge1xuICAgICAgICBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3RGdW5jdGlvbnMuY29uZmlybVRhc2tFZGl0KTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5kaXNwbGF5RWRpdFRhc2spO1xuICAgIH07XG4gICAgY29uc3QgX2FjdGl2YXRlRGVsZXRlVGFza0J1dHRvbiA9IGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdEZ1bmN0aW9ucy5jb25maXJtVGFza0RlbGV0ZSk7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuZGlzcGxheURlbGV0ZVRhc2spO1xuICAgIH07XG4gICAgY29uc3QgYWN0aXZhdGVUYXNrQnV0dG9ucyA9IChlZGl0LCBkZWwpID0+IHtcbiAgICAgICAgX2FjdGl2YXRlRWRpdFRhc2tCdXR0b24oZWRpdCk7XG4gICAgICAgIF9hY3RpdmF0ZURlbGV0ZVRhc2tCdXR0b24oZGVsKTtcbiAgICB9O1xuICAgIC8vbWFrZXMgdGhlIHRhc2sncyBjaGVjayBib3ggY2xpY2thYmxlIHRvIG1hcmsgdGFza3MgYXMgY29tcGxldGVcbiAgICBjb25zdCBhY3RpdmF0ZUNoZWNrYm94ID0gaW5kZXggPT4ge1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiLnRhc2tzLWNvbnRhaW5lclwiKS5jaGlsZE5vZGVzW2luZGV4XS5maXJzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgcHJvamVjdEZ1bmN0aW9ucy50b2dnbGVUYXNrQ29tcGxldGVcbiAgICAgICAgKTtcbiAgICB9O1xuICAgIC8vSWYgYSBwcm9qZWN0IHRpdGxlIGlzIHNob3duIG9uIGEgdGFzaywgY2xpY2tpbmcgaXQgZ29lcyB0byB0aGUgYXNzb2NpYXRlZCBwcm9qZWN0XG4gICAgY29uc3QgYWN0aXZhdGVQcm9qZWN0TGluayA9IGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAubGlua1Byb2plY3QpO1xuICAgIH07XG4gICAgLy9jaGFuZ2VzIHRoZSBidXR0b24gdG8gZWRpdCBhIHRhc2sgaW50byBhIGNvbmZpcm1hdGlvbiBidXR0b24gYW5kIGFjdGl2YXRlcyB0aGUgY2FuY2VsIGJ1dHRvblxuICAgIGNvbnN0IGFjdGl2YXRlQ29uZmlybVRhc2tFZGl0ID0gYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5kaXNwbGF5RWRpdFRhc2spO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3RGdW5jdGlvbnMuY29uZmlybVRhc2tFZGl0KTtcbiAgICAgICAgYnV0dG9uLm5leHRTaWJsaW5nLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5kaXNwbGF5RGVsZXRlVGFzayk7XG4gICAgICAgIGJ1dHRvbi5uZXh0U2libGluZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuY2FuY2VsRWRpdCk7XG4gICAgfTtcbiAgICBjb25zdCBhY3RpdmF0ZUNvbmZpcm1UYXNrRGVsZXRlID0gYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLnByZXZpb3VzU2libGluZy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuZGlzcGxheUVkaXRUYXNrKTtcbiAgICAgICAgYnV0dG9uLnByZXZpb3VzU2libGluZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdEZ1bmN0aW9ucy5jb25maXJtVGFza0RlbGV0ZSk7XG4gICAgICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuZGlzcGxheURlbGV0ZVRhc2spO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTU1hbmlwLmNhbmNlbEVkaXQpO1xuICAgIH07XG4gICAgY29uc3QgYWN0aXZhdGVEYXlzU2VsZWN0b3IgPSAoKSA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIuZGF5cy1zZWxlY3RvclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIERPTU1hbmlwLmNoYW5nZURheXMpO1xuICAgIH07XG5cbiAgICBjb25zdCBhY3RpdmF0ZUNvbmZpcm1DbGVhckFsbCA9ICgpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNjbGVhci1hbGwtYnV0dG9uXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5jb25maXJtQ2xlYXJBbGwpO1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI2NsZWFyLWFsbC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3RGdW5jdGlvbnMuY29uZmlybUFsbENsZWFyKTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNjbGVhci1hbGwtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIERPTU1hbmlwLmNhbmNlbENsZWFyQWxsKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWN0aXZhdGVBZGRCdXR0b24sXG4gICAgICAgIGluaXRTdGFydGluZ0xpc3RlbmVycyxcbiAgICAgICAgYWRkUHJvamVjdFN1Ym1pc3Npb24sXG4gICAgICAgIGFjdGl2YXRlVG9kYXksXG4gICAgICAgIGFjdGl2YXRlUHJvamVjdHMsXG4gICAgICAgIGFjdGl2YXRlT3ZlcmR1ZSxcbiAgICAgICAgYWN0aXZhdGVTaWRlcyxcbiAgICAgICAgY2xlYXJUZXh0Qm94LFxuICAgICAgICBhY3RpdmF0ZVByb2plY3RCdXR0b25zLFxuICAgICAgICBhY3RpdmF0ZUFkZFRhc2tCdXR0b24sXG4gICAgICAgIGFjdGl2YXRlQ2hlY2tib3gsXG4gICAgICAgIGFjdGl2YXRlUHJvamVjdExpbmssXG4gICAgICAgIGFjdGl2YXRlVGFza0J1dHRvbnMsXG4gICAgICAgIGFjdGl2YXRlQ29uZmlybVByb2plY3RFZGl0LFxuICAgICAgICBhY3RpdmF0ZUNvbmZpcm1UYXNrRWRpdCxcbiAgICAgICAgYWN0aXZhdGVDb25maXJtVGFza0RlbGV0ZSxcbiAgICAgICAgYWN0aXZhdGVDYW5jZWxCdXR0b24sXG4gICAgICAgIGFjdGl2YXRlRGVsZXRlUHJvamVjdCxcbiAgICAgICAgYWN0aXZhdGVEYXlzU2VsZWN0b3IsXG4gICAgICAgIGFjdGl2YXRlQ2xlYXJBbGxCdXR0b24sXG4gICAgICAgIGFjdGl2YXRlQ29uZmlybUNsZWFyQWxsLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudEhhbmRsZXI7XG4iLCJleHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IoaW5pdFRpdGxlLCB0YXNrcyA9IFtdLCBjb21wbGV0ZWQgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBpbml0VGl0bGU7XG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG4gICAgZ2V0VGFza3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICAgIH1cbiAgICBpc0NvbXBsZXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGVkO1xuICAgIH1cbiAgICBpc1NlbGVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZDtcbiAgICB9XG4gICAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgfVxuICAgIGFkZFRhc2sobmV3VGFzaykge1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgfVxuICAgIG1hcmtDb21wbGV0ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHZhbHVlO1xuICAgIH1cbiAgICBtYXJrU2VsZWN0ZWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHZhbHVlO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBwcm9qZWN0LCBudW1iZXIsIGNvbXBsZXRlZCA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICBnZXROYW1lID0gKCkgPT4gdGhpcy5uYW1lO1xuICAgIGdldERlc2NyaXB0aW9uID0gKCkgPT4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICBnZXREYXRlID0gKCkgPT4gdGhpcy5kdWVEYXRlO1xuICAgIGdldFByaW9yaXR5ID0gKCkgPT4gdGhpcy5wcmlvcml0eTtcbiAgICBnZXROb3RlcyA9ICgpID0+IHRoaXMubm90ZXM7XG4gICAgZ2V0UHJvamVjdCA9ICgpID0+IHRoaXMucHJvamVjdDtcbiAgICBnZXRDb21wbGV0ZSA9ICgpID0+IHRoaXMuY29tcGxldGVkO1xuICAgIGdldE51bWJlciA9ICgpID0+IHRoaXMubnVtYmVyO1xuXG4gICAgdG9nZ2xlQ29tcGxldGUgPSAoKSA9PiAodGhpcy5jb21wbGV0ZWQgPSAhdGhpcy5jb21wbGV0ZWQpO1xuICAgIHJlZHVjZVByb2plY3QgPSAoKSA9PiB0aGlzLnByb2plY3QtLTtcbiAgICByZWR1Y2VUYXNrID0gKCkgPT4gdGhpcy50YXNrLS07XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0RnVuY3Rpb25zIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vVGFza1wiO1xuXG5jb25zdCBkYXRhU3RvcmFnZSA9ICgoKSA9PiB7XG4gICAgLy90aGlzIHRha2VzIHRoZSBjdXJyZW50IGFycmF5IG9mIHByb2plY3RzIGFuZCBzYXZlcyB0aGUgY29udGVudHMgaW50byBhIEpTT04gZmlsZSBpbiBsb2NhbHN0b3JhZ2VcbiAgICBjb25zdCBzYXZlRGF0YSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxsUHJvaiA9IHByb2plY3RGdW5jdGlvbnMuZ2V0QWxsUHJvamVjdHMoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qKSk7XG4gICAgfTtcblxuICAgIC8vZmluZHMgdGhlIGRhdGEgaW4gbG9jYWwgc3RvcmFnZSwgcnVucyB0aHJvdWdoIHRoZSBhcnJheSBhbmQgY29udmVydHMgZWFjaCBlbnRyeSBpbnRvIHRoZSBhcHByb3ByaWF0ZVxuICAgIC8vcHJvamVjdCBvciB0YXNrIGluIG9yZGVyIHRvIG1haW50YWluIG9iamVjdCBtZXRob2RzLiBJZiB0aGVyZSBpcyBubyBkYXRhLCByZXR1cm5zIGFuIGVtcHR5IGFycmF5XG4gICAgY29uc3QgbG9hZERhdGEgPSAoKSA9PiB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RzXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBsb2FkZWREYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RzXCIpKTtcbiAgICAgICAgICAgIGNvbnN0IHJldHVybkRhdGEgPSBbXTtcbiAgICAgICAgICAgIGxvYWRlZERhdGEuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRQcm9qZWN0VGl0bGUgPSBlbGUubmFtZTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2FkUHJvamVjdHNUYXNrcyA9IFtdO1xuICAgICAgICAgICAgICAgIGVsZS50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2FkUHJvamVjdHNUYXNrcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRhc2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sucHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5ub3RlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnByb2plY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5udW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2FkUHJvamVjdENvbXBsZXRlZCA9IGVsZS5jb21wbGV0ZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuRGF0YS5wdXNoKG5ldyBQcm9qZWN0KGxvYWRQcm9qZWN0VGl0bGUsIGxvYWRQcm9qZWN0c1Rhc2tzLCBsb2FkUHJvamVjdENvbXBsZXRlZCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmV0dXJuRGF0YTtcbiAgICAgICAgfSBlbHNlIHJldHVybiBbXTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYXJEYXRhID0gKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlByb2plY3RzXCIsIFwiXCIpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBzYXZlRGF0YSwgbG9hZERhdGEsIGNsZWFyRGF0YSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YVN0b3JhZ2U7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IERPTU1hbmlwIGZyb20gXCIuL0RPTU1hbmlwXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vVGFza1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL1Byb2plY3RcIjtcbmltcG9ydCBkYXRhU3RvcmFnZSBmcm9tIFwiLi9kYXRhU3RvcmFnZVwiO1xuXG4vL1RoaXMgZXhwb3J0IGNvbnRhaW5zIGFsbCBvZiB0aGUgZnVuY3Rpb25zIHJlbGF0ZWQgdG8gYWNjZXNzaW5nIHRoZSBwcm9qZWN0IGRhdGFcbi8vYW5kIHRhc2sgZGF0YSB0aHJvdWdob3V0IHRoZSB3ZWJzaXRlXG5leHBvcnQgY29uc3QgcHJvamVjdEZ1bmN0aW9ucyA9ICgoKSA9PiB7XG4gICAgbGV0IF9hbGxQcm9qZWN0cyA9IFtdO1xuXG4gICAgbGV0IF9jdXJyZW50RGF5c1JlcXVlc3RlZCA9IDE7XG5cbiAgICAvL3VzZWQgd2hlbiBhIHByb2plY3QgaXMgZGVsZXRlZCwgbWFrZXMgYWxsIG9mIHRoZSB0YXNrcyB1bmRlciBlYWNoIHByb2plY3QgZ28gdG8gdGhlaXIgY3VycmVudFxuICAgIC8vcHJvamVjdCdzIGluZGV4IGluIHRoZSBhbGxQcm9qZWN0cyBhcnJheVxuICAgIGNvbnN0IF9yZW51bWJlclByb2plY3RzID0gcHJvamVjdE51bWJlciA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSBfYWxsUHJvamVjdHMubGVuZ3RoIC0gMTsgaSA+PSBwcm9qZWN0TnVtYmVyOyBpLS0pIHtcbiAgICAgICAgICAgIF9hbGxQcm9qZWN0c1tpXS50YXNrcy5mb3JFYWNoKHRhc2sgPT4gdGFzay5yZWR1Y2VQcm9qZWN0KCkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBfcmVudW1iZXJUYXNrcyA9IChwcm9qZWN0TnVtYmVyLCB0YXNrTnVtYmVyKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSBfYWxsUHJvamVjdHNbcHJvamVjdE51bWJlcl0udGFza3MubGVuZ3RoIC0gMTsgaSA+PSB0YXNrTnVtYmVyOyBpLS0pIHtcbiAgICAgICAgICAgIF9hbGxQcm9qZWN0c1twcm9qZWN0TnVtYmVyXS50YXNrc1tpXS5yZWR1Y2VUYXNrKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IF9zb3J0VGFza3MgPSBwcm9qZWN0TnVtYmVyID0+IHtcbiAgICAgICAgY29uc3Qgc29ydGVkVGFza3MgPSBET01NYW5pcC5zb3J0QXJyYXkoX2FsbFByb2plY3RzW3Byb2plY3ROdW1iZXJdLmdldFRhc2tzKCkpO1xuICAgICAgICBfYWxsUHJvamVjdHNbcHJvamVjdE51bWJlcl0udGFza3MgPSBzb3J0ZWRUYXNrcy5tYXAoZWxlID0+IGVsZSk7XG4gICAgfTtcblxuICAgIC8vZ2V0cyB0aGUgaW5mbyB0aGF0IHdhcyBwdXQgaW50byB0aGUgaW5wdXQsIGNoZWNrcyBpZiBpdCBpcyBhY2NlcHRhYmxlLCBhZGRzIGl0IHRvIHRoZVxuICAgIC8vYWxsUHJvamVjdHMgYXJyYXkgaWYgaXQgaXMsIGFuZCBzYXZlcyB0byBsb2NhbHN0b3JhZ2VcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RJbmZvID0gRE9NTWFuaXAuZ2V0TmV3UHJvakluZm8oKTtcbiAgICAgICAgY29uc3QgZ29vZFByb2plY3QgPSBET01NYW5pcC5jaGVja05ld1Byb2plY3QoZSwgbmV3UHJvamVjdEluZm8pO1xuICAgICAgICBpZiAoZ29vZFByb2plY3QpIHtcbiAgICAgICAgICAgIF9hbGxQcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KG5ld1Byb2plY3RJbmZvLm5hbWUpKTtcbiAgICAgICAgICAgIERPTU1hbmlwLnVwZGF0ZVByb2plY3RMaXN0KCk7XG4gICAgICAgICAgICBkYXRhU3RvcmFnZS5zYXZlRGF0YSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvL2dldHMgdGhlIGluZm8gdGhhdCB3YXMgcHV0IGludG8gdGhlIGlucHV0cywgY2hlY2tzIGlmIGl0IGlzIGFsbCBhY2NlcHRhYmxlLCBhZGRzIGl0IHRvIHRoZVxuICAgIC8vYWxsUHJvamVjdHMgYXJyYXkgdW5kZXIgdGhlIGNvcnJlY3QgcHJvamVjdCBpZiBpdCBpcywgYW5kIHNhdmVzIHRvIGxvY2Fsc3RvcmFnZVxuICAgIGNvbnN0IGFkZFRhc2sgPSBlID0+IHtcbiAgICAgICAgY29uc3QgbmV3VGFza0luZm8gPSBET01NYW5pcC5nZXRUYXNrSW5mbygpO1xuICAgICAgICBjb25zdCBnb29kVGFzayA9IERPTU1hbmlwLmNoZWNrTmV3VGFzayhlLCBuZXdUYXNrSW5mbyk7XG4gICAgICAgIGlmIChnb29kVGFzaykge1xuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKFxuICAgICAgICAgICAgICAgIG5ld1Rhc2tJbmZvLm5hbWUsXG4gICAgICAgICAgICAgICAgbmV3VGFza0luZm8uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgbmV3VGFza0luZm8uZGF0ZSxcbiAgICAgICAgICAgICAgICBuZXdUYXNrSW5mby5wcmlvcml0eSxcbiAgICAgICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgICAgIG5ld1Rhc2tJbmZvLnByb2plY3QsXG4gICAgICAgICAgICAgICAgbmV3VGFza0luZm8ubnVtYmVyXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TnVtYmVyID0gbmV3VGFza0luZm8ucHJvamVjdDtcbiAgICAgICAgICAgIF9hbGxQcm9qZWN0c1twcm9qZWN0TnVtYmVyXS50YXNrcy5wdXNoKG5ld1Rhc2spO1xuXG4gICAgICAgICAgICBfc29ydFRhc2tzKHByb2plY3ROdW1iZXIpO1xuXG4gICAgICAgICAgICBET01NYW5pcC51cGRhdGVUYXNrTGlzdChwcm9qZWN0TnVtYmVyKTtcbiAgICAgICAgICAgIGRhdGFTdG9yYWdlLnNhdmVEYXRhKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vZG9lcyB0aGUgc2FtZSBhcyBhIG5ldyBwcm9qZWN0LCBidXQgZ2V0dGluZyB0aGUgaW5mb3JtYXRpb24gZnJvbSBkaWZmZXJlbnQgbG9jYXRpb25zIGFuZFxuICAgIC8vaW5zdGVhZCBvZiBhZGRpbmcgYSBuZXcgcHJvamVjdCwgYWRqdXN0cyB0aGUgcHJvamVjdCBhdCBhIGNlcnRhaW4gaW5kZXhcbiAgICBjb25zdCBjb25maXJtUHJvamVjdEVkaXQgPSBlID0+IHtcbiAgICAgICAgY29uc3QgZWRpdFRpdGxlID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIi50aXRsZS1lZGl0XCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcm9qZWN0TnVtYmVyID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5kYXRhc2V0LnByb2plY3Q7XG4gICAgICAgIGNvbnN0IGdvb2RQcm9qZWN0ID0gRE9NTWFuaXAuY2hlY2tOZXdQcm9qZWN0KGUsIHsgbmFtZTogZWRpdFRpdGxlIH0pO1xuICAgICAgICBpZiAoZ29vZFByb2plY3QpIHtcbiAgICAgICAgICAgIF9hbGxQcm9qZWN0c1twcm9qZWN0TnVtYmVyXS5zZXROYW1lKGVkaXRUaXRsZSk7XG4gICAgICAgICAgICBET01NYW5pcC51cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgICAgICAgICAgZGF0YVN0b3JhZ2Uuc2F2ZURhdGEoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvL2RvZXMgdGhlIHNhbWUgYXMgYSBuZXcgdGFzaywgYnV0IGdldHRpbmcgdGhlIGluZm9ybWF0aW9uIGZyb20gZGlmZmVyZW50IGxvY2F0aW9ucyBhbmRcbiAgICAvL2luc3RlYWQgb2YgYWRkaW5nIGEgbmV3IHRhc2ssIGFkanVzdHMgdGhlIHRhc2sgYXQgYSBjZXJ0YWluIGluZGV4IHVuZGVyIGEgc3BlY2lmaWMgcHJvamVjdFxuXG4gICAgY29uc3QgY29uZmlybVRhc2tFZGl0ID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC50YXNrO1xuICAgICAgICBjb25zdCBwcm9qZWN0TnVtYmVyID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0O1xuICAgICAgICBjb25zdCBlZGl0VGFza0luZm8gPSBET01NYW5pcC5nZXRUYXNrSW5mbyhlZGl0VGFzaywgcHJvamVjdE51bWJlcik7XG4gICAgICAgIGNvbnN0IGdvb2RUYXNrID0gRE9NTWFuaXAuY2hlY2tOZXdUYXNrKGUsIGVkaXRUYXNrSW5mbyk7XG4gICAgICAgIGlmIChnb29kVGFzaykge1xuICAgICAgICAgICAgX2FsbFByb2plY3RzW2VkaXRUYXNrSW5mby5wcm9qZWN0XS50YXNrc1tlZGl0VGFza10gPSBuZXcgVGFzayhcbiAgICAgICAgICAgICAgICBlZGl0VGFza0luZm8ubmFtZSxcbiAgICAgICAgICAgICAgICBlZGl0VGFza0luZm8uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgZWRpdFRhc2tJbmZvLmRhdGUsXG4gICAgICAgICAgICAgICAgZWRpdFRhc2tJbmZvLnByaW9yaXR5LFxuICAgICAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICAgICAgZWRpdFRhc2tJbmZvLnByb2plY3QsXG4gICAgICAgICAgICAgICAgZWRpdFRhc2tJbmZvLm51bWJlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIF9zb3J0VGFza3MocHJvamVjdE51bWJlcik7XG4gICAgICAgICAgICBET01NYW5pcC51cGRhdGVUYXNrTGlzdChwcm9qZWN0TnVtYmVyKTtcbiAgICAgICAgICAgIGRhdGFTdG9yYWdlLnNhdmVEYXRhKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGNvbmZpcm1UYXNrRGVsZXRlID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROdW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LnByb2plY3Q7XG4gICAgICAgIGNvbnN0IHRhc2tOdW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LnRhc2s7XG4gICAgICAgIF9yZW51bWJlclRhc2tzKHByb2plY3ROdW1iZXIsIHRhc2tOdW1iZXIpO1xuICAgICAgICBfYWxsUHJvamVjdHNbcHJvamVjdE51bWJlcl0udGFza3Muc3BsaWNlKHRhc2tOdW1iZXIsIDEpO1xuXG4gICAgICAgIERPTU1hbmlwLnJlZnJlc2hUYXNrU2lkZXMoKTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChgI3Byb2plY3QtJHtwcm9qZWN0TnVtYmVyfWApLmNsaWNrKCk7XG4gICAgICAgIGRhdGFTdG9yYWdlLnNhdmVEYXRhKCk7XG4gICAgfTtcblxuICAgIC8vcmVtb3ZlcyBhIHByb2plY3QgZnJvbSB0aGUgYWxsUHJvamVjdHMgYXJyYXkgYW5kIHNhdmVzIHRvIGxvY2Fsc3RvcmFnZVxuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdE51bWJlciA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIucHJvamVjdC1jb250YWluZXJcIikuZGF0YXNldC5wcm9qZWN0O1xuICAgICAgICBfcmVudW1iZXJQcm9qZWN0cyhwcm9qZWN0TnVtYmVyKTtcbiAgICAgICAgX2FsbFByb2plY3RzLnNwbGljZShwcm9qZWN0TnVtYmVyLCAxKTtcbiAgICAgICAgaWYgKERPTU1hbmlwLmdldEVsZW1lbnQoXCIjcHJvamVjdHMtdG9nZ2xlXCIpLmNsYXNzTGlzdC5jb250YWlucyhcImNsb3NlZFwiKSkge1xuICAgICAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNwcm9qZWN0cy10b2dnbGVcIikuY2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgICBET01NYW5pcC51cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgICAgICBET01NYW5pcC5yZWZyZXNoVGFza1NpZGVzKCk7XG4gICAgICAgIERPTU1hbmlwLnNob3dUb2RheSgpO1xuICAgICAgICBkYXRhU3RvcmFnZS5zYXZlRGF0YSgpO1xuICAgIH07XG5cbiAgICAvL2dldHMgd2hlbiBhIGNoZWNrYm94IGhhcyBiZWVuIGNsaWNrZWQgYW5kIGNoYW5nZXMgdGhlIHRhc2sncyBzdGF0dXMgdG8gY29tcGxldGUgaWYgaXQncyBub3RcbiAgICAvL2NvbXBsZXRlLCBhbmQgcmVtb3ZlcyB0aGF0IGlmIGl0J3MgYmVlbiB1bmNoZWNrZWQuXG4gICAgY29uc3QgdG9nZ2xlVGFza0NvbXBsZXRlID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBwcm9qZWN0TnVtYmVyID0gc2VsZWN0ZWRUYXNrLmRhdGFzZXQucHJvamVjdDtcbiAgICAgICAgY29uc3QgdGFza051bWJlciA9IHNlbGVjdGVkVGFzay5kYXRhc2V0LnRhc2s7XG4gICAgICAgIF9hbGxQcm9qZWN0c1twcm9qZWN0TnVtYmVyXS50YXNrc1t0YXNrTnVtYmVyXS50b2dnbGVDb21wbGV0ZSgpO1xuICAgICAgICBpZiAoRE9NTWFuaXAuZ2V0RWxlbWVudChcIi5zZWxlY3RlZFwiKS5pZCA9PSBcInRvZGF5cy10b2RvLXNpZGVcIikge1xuICAgICAgICAgICAgRE9NTWFuaXAuc2hvd1RvZGF5KGUpO1xuICAgICAgICB9IGVsc2UgaWYgKERPTU1hbmlwLmdldEVsZW1lbnQoXCIuc2VsZWN0ZWRcIikuaWQgPT0gXCJvdmVyZHVlLXRvZG8tc2lkZVwiKSB7XG4gICAgICAgICAgICBET01NYW5pcC5zaG93T3ZlcmR1ZShlKTtcbiAgICAgICAgfSBlbHNlIGlmIChET01NYW5pcC5nZXRFbGVtZW50KFwiLnNlbGVjdGVkXCIpLmlkID09IFwiZGF5cy10b2RvLXNpZGVcIikge1xuICAgICAgICAgICAgRE9NTWFuaXAuY2hhbmdlRGF5cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgRE9NTWFuaXAuc2hvd1Byb2plY3QoZSk7XG4gICAgICAgIH1cbiAgICAgICAgRE9NTWFuaXAucmVmcmVzaFRhc2tTaWRlcygpO1xuICAgICAgICBkYXRhU3RvcmFnZS5zYXZlRGF0YSgpO1xuICAgIH07XG5cbiAgICAvL3JldHVybnMgYSByZWFkLW9ubHkgY29weSBvZiB0aGUgcHJvamVjdHMgaW4gdGhlIGFsbFByb2plY3RzIGFycmF5XG4gICAgY29uc3QgZ2V0QWxsUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfYWxsUHJvamVjdHMubWFwKGVsZSA9PiBlbGUpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0Q3VycmVudERheXMgPSAoKSA9PiBfY3VycmVudERheXNSZXF1ZXN0ZWQ7XG4gICAgY29uc3Qgc2V0Q3VycmVudERheXMgPSBuZXdWYWx1ZSA9PiAoX2N1cnJlbnREYXlzUmVxdWVzdGVkID0gbmV3VmFsdWUpO1xuXG4gICAgLy9zYXZlcyB0aGUgbG9hZGVkIHByb2plY3RzIGZyb20gbG9jYWxzdG9yYWdlIGludG8gdGhlIGFsbHByb2plY3RzIGFycmF5XG4gICAgY29uc3QgbG9hZFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBfYWxsUHJvamVjdHMgPSBkYXRhU3RvcmFnZS5sb2FkRGF0YSgpO1xuICAgIH07XG4gICAgY29uc3QgY29uZmlybUFsbENsZWFyID0gKCkgPT4ge1xuICAgICAgICBkYXRhU3RvcmFnZS5jbGVhckRhdGEoKTtcbiAgICAgICAgX2FsbFByb2plY3RzID0gZGF0YVN0b3JhZ2UubG9hZERhdGEoKTtcbiAgICAgICAgRE9NTWFuaXAudXBkYXRlUHJvamVjdExpc3QoKTtcbiAgICAgICAgRE9NTWFuaXAucmVmcmVzaFRhc2tTaWRlcygpO1xuICAgICAgICBET01NYW5pcC5zaG93VG9kYXkoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkUHJvamVjdCxcbiAgICAgICAgYWRkVGFzayxcbiAgICAgICAgY29uZmlybVByb2plY3RFZGl0LFxuICAgICAgICBjb25maXJtVGFza0VkaXQsXG4gICAgICAgIGNvbmZpcm1UYXNrRGVsZXRlLFxuICAgICAgICBkZWxldGVQcm9qZWN0LFxuICAgICAgICB0b2dnbGVUYXNrQ29tcGxldGUsXG4gICAgICAgIGdldEFsbFByb2plY3RzLFxuICAgICAgICBsb2FkUHJvamVjdHMsXG4gICAgICAgIGdldEN1cnJlbnREYXlzLFxuICAgICAgICBzZXRDdXJyZW50RGF5cyxcbiAgICAgICAgY29uZmlybUFsbENsZWFyLFxuICAgIH07XG59KSgpO1xuXG4vL3J1bnMgYXQgdGhlIGxvYWQgb2YgdGhlIHdlYnNpdGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuY29uc3QgaW5pdFdlYnNpdGUgPSAoKCkgPT4ge1xuICAgIERPTU1hbmlwLnN0YXJ0UGFnZSgpO1xufSkoKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RUFCRTtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG59XFxuXFxuI2hlYWRlcntcXG4gICAgaGVpZ2h0OiA3MnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZEN0E3O1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIG1hcmdpbi10b3A6IDcycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG4jc2lkZS1wYW5lbHtcXG4gICAgZmxleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmNjM2MztcXG4gICAgY29sb3I6ICNGNkQ3QTc7XFxuICAgIG1pbi1oZWlnaHQ6IDg5LjN2aDtcXG4gICAgcGFkZGluZy10b3A6IDI4cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xcbn1cXG4jc2lkZS1wYW5lbCA+ICogOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zaWRlLWhlYWRlci1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5zaWRlLWhlYWRlcntcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wcm9qZWN0LXNpZGUtbGFiZWwsIC50YXNrLXNpZGUtbGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luOiA0cHggMHB4IDRweCAyMHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMTBweCA0cHggMTBweDtcXG59XFxuLnRhc2stc2lkZS1sYWJlbHtcXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAyMHB4O1xcbn1cXG4uc2VsZWN0ZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjUyNTI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMCAwIDMwcHg7XFxufVxcbi5kcm9wZG93bi10b2dnbGV7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcbi5kcm9wZG93bi10b2dnbGUuYW5pbXtcXG4gICAgdHJhbnNpdGlvbjogLjI1cztcXG59XFxuLmRyb3Bkb3duLXRvZ2dsZS5jbG9zZWR7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWigtOTBkZWcpO1xcbn1cXG5cXG4jbWFpbi1kaXNwbGF5e1xcbiAgICBmbGV4OiA0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uYWRkLWJ1dHRvbntcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDOEUzRDQ7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMyZjYzNjM7XFxuICAgIGNvbG9yOiAjMmY2MzYzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgICBtYXJnaW46IDBweCA4cHggMXB4O1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XFxuICAgIFxcbn1cXG5cXG4uYWRkLWJ1dHRvbjpob3ZlcntcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDcwJSk7XFxufVxcbi5hZGQtYnV0dG9uOmFjdGl2ZXtcXG5cXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA1cHggYmxhY2s7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idXR0b24tY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMTAwcHg7XFxuICAgIHJpZ2h0OiA2MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b257XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIFxcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9uLmFuaW17XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b246aG92ZXIsICNhZGQtcHJvamVjdC1idXR0b24uYWN0aXZle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9uLmFjdGl2ZXtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idXR0b24gc3BhbntcXG4gICAgZm9udC1zaXplOiAwJTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuI2FkZC1wcm9qZWN0LWJ1dHRvbiBzcGFuLmFuaW17XFxuICAgIHRyYW5zaXRpb246IC4wNXM7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b246aG92ZXIgc3BhbiwgI2FkZC1wcm9qZWN0LWJ1dHRvbiBzcGFuLmFjdGl2ZXtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4uaW5wdXQtY29udGFpbmVye1xcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M4RTNENDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzJmNjM2MztcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggYmxhY2s7XFxufVxcbiNuZXctcHJvai1hZGQtYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG5pbnB1dCwgc2VsZWN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODdBQUFBO1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJmNjM2MztcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgcGFkZGluZzogNHB4IDZweCA0cHggOHB4O1xcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcbnNlbGVjdHtcXG4gICAgaGVpZ2h0OiAzMXB4O1xcbiAgICBmb250LXNpemU6MThweFxcbn1cXG5cXG4jY2xlYXItYWxsLWJ1dHRvbi1jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiA0MHB4O1xcbiAgICByaWdodDogNDBweDtcXG59XFxuI2NsZWFyLWFsbC1idXR0b24tY29udGFpbmVyIC5kZWxldGV7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWluLXdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFBREFEO1xcbn1cXG4jY2xlYXItYWxsLWJ1dHRvbi1jb250YWluZXIgPiAqe1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIFxcbn1cXG4ucHJvamVjdC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcbi5wcm9qZWN0LXRpdGxlLXdyYXBwZXJ7XFxuICAgIG1heC13aWR0aDogNDUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZXtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIFxcbn1cXG4udGl0bGUtZWRpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogNnB4O1xcbiAgICBwYWRkaW5nOiA2cHggMHB4IDEwcHggO1xcbiAgICBmbGV4LWdyb3c6IDA7XFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lci5wcm9qZWN0e1xcbiAgICB3aWR0aDogMjcuNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG4uYnV0dG9uLWNvbnRhaW5lciBidXR0b257XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbiNhZGQtdGFzay1idXR0b257XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogNXB4IDEycHg7XFxufVxcblxcbi5hZGQtdGFzay1pbmZve1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuLnRhc2tzLXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XFxuLnRhc2stY29udGFpbmVye1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBcXG59XFxuLnRhc2staW5mb3tcXG4gICAgbWF4LXdpZHRoOiAzMHZ3O1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4udGFzay1wcm9qZWN0LWluZm97XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4udGFzay1wcm9qZWN0LWluZm86aG92ZXJ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lcnJvci1tZXNzYWdle1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGNvbG9yOiAjOTkzYzNjO1xcbiAgICB0cmFuc2l0aW9uOiAycztcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMXM7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIG1hcmdpbjogNnB4O1xcbn1cXG5cXG5bZGF0YS1wcmlvcml0eT0nTG93J117XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMUFEQUQ7XFxufVxcbltkYXRhLXByaW9yaXR5PSdNZWRpdW0nXXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUYzODtcXG59XFxuW2RhdGEtcHJpb3JpdHk9J0hpZ2gnXXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlEQ0Q4RDtcXG59XFxuXFxuLmVkaXQtYnV0dG9ue1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyZjYzNjM7XFxuICAgIGNvbG9yOiAjMmY2MzYzO1xcbiAgICB0cmFuc2l0aW9uOiAuMjVzO1xcbiAgICBtaW4td2lkdGg6IDI3LjVweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcbn1cXG5cXG4uZWRpdC1idXR0b246aG92ZXJ7XFxuICAgIGZpbHRlcjpicmlnaHRuZXNzKDcwJSk7XFxufVxcblxcbi5lZGl0LWJ1dHRvbiBzcGFue1xcbiAgICBmb250LXNpemU6IDAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAuMjVzO1xcbn1cXG4uZWRpdC1idXR0b246aG92ZXIgc3BhbntcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xcbn1cXG5cXG4uZWRpdC1idXR0b24uY29uZmlybTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlEQ0Q4RDtcXG59XFxuLmVkaXQtYnV0dG9uLmRlbGV0ZTpob3ZlciwgLmVkaXQtYnV0dG9uLmNhbmNlbDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UxQURBRDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIGlucHV0LCAudGFzay1jb250YWluZXIgc2VsZWN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJmNjM2MztcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgcGFkZGluZzogMnB4IDRweCAycHggNHB4O1xcbn1cXG4udGFzay1jb250YWluZXIgc2VsZWN0e1xcbiAgICBoZWlnaHQ6IDIzcHg7XFxuICAgIGZvbnQtc2l6ZToxNXB4XFxufVxcblxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIiBpXSB7XFxuICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICB3aWR0aDogMTVweDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLmNvbXBsZXRle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTFBMUExO1xcbn1cXG5cXG4jZGF5cy1zZWxlY3RvcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmRheS1hd2F5LWxhYmVse1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDEwMHB4XFxufVxcblxcbiNjbGVhci1hbGwtYnV0dG9uOmhvdmVyIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgXFxufVxcblxcbmJ1dHRvbjpob3ZlcntcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcbi8qIFNjcm9sbCBCYXIgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDJweDtcXG59XFxuICAgIFxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjODdBQUFBO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4gICAgXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IzJmNjM2MzsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyZjYzNjNcXG59XFxuICAgIFxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiMyNjUyNTI7IFxcbn1cXG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xcbiAgICBib2R5e1xcbiAgICAgICAgc2Nyb2xsYmFyLWNvbG9yOiAjMmY2MzYzICMyNjUyNTIgIzg3QUFBQTtcXG4gICAgfVxcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdG9kby9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6Qiw0REFBNEQ7SUFDNUQsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLE1BQU07SUFDTixXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxPQUFPO0lBQ1AseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtB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Q2Y7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJO1FBQ0ksd0NBQXdDO0lBQzVDO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RUFCRTtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG59XFxuXFxuI2hlYWRlcntcXG4gICAgaGVpZ2h0OiA3MnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZEN0E3O1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIG1hcmdpbi10b3A6IDcycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG4jc2lkZS1wYW5lbHtcXG4gICAgZmxleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmNjM2MztcXG4gICAgY29sb3I6ICNGNkQ3QTc7XFxuICAgIG1pbi1oZWlnaHQ6IDg5LjN2aDtcXG4gICAgcGFkZGluZy10b3A6IDI4cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xcbn1cXG4jc2lkZS1wYW5lbCA+ICogOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zaWRlLWhlYWRlci1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5zaWRlLWhlYWRlcntcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wcm9qZWN0LXNpZGUtbGFiZWwsIC50YXNrLXNpZGUtbGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luOiA0cHggMHB4IDRweCAyMHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMTBweCA0cHggMTBweDtcXG59XFxuLnRhc2stc2lkZS1sYWJlbHtcXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAyMHB4O1xcbn1cXG4uc2VsZWN0ZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjUyNTI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMCAwIDMwcHg7XFxufVxcbi5kcm9wZG93bi10b2dnbGV7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcbi5kcm9wZG93bi10b2dnbGUuYW5pbXtcXG4gICAgdHJhbnNpdGlvbjogLjI1cztcXG59XFxuLmRyb3Bkb3duLXRvZ2dsZS5jbG9zZWR7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWigtOTBkZWcpO1xcbn1cXG5cXG4jbWFpbi1kaXNwbGF5e1xcbiAgICBmbGV4OiA0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uYWRkLWJ1dHRvbntcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDOEUzRDQ7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMyZjYzNjM7XFxuICAgIGNvbG9yOiAjMmY2MzYzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgICBtYXJnaW46IDBweCA4cHggMXB4O1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XFxuICAgIFxcbn1cXG5cXG4uYWRkLWJ1dHRvbjpob3ZlcntcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDcwJSk7XFxufVxcbi5hZGQtYnV0dG9uOmFjdGl2ZXtcXG5cXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA1cHggYmxhY2s7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idXR0b24tY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMTAwcHg7XFxuICAgIHJpZ2h0OiA2MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b257XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIFxcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9uLmFuaW17XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b246aG92ZXIsICNhZGQtcHJvamVjdC1idXR0b24uYWN0aXZle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9uLmFjdGl2ZXtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idXR0b24gc3BhbntcXG4gICAgZm9udC1zaXplOiAwJTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuI2FkZC1wcm9qZWN0LWJ1dHRvbiBzcGFuLmFuaW17XFxuICAgIHRyYW5zaXRpb246IC4wNXM7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b246aG92ZXIgc3BhbiwgI2FkZC1wcm9qZWN0LWJ1dHRvbiBzcGFuLmFjdGl2ZXtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4uaW5wdXQtY29udGFpbmVye1xcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M4RTNENDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzJmNjM2MztcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggYmxhY2s7XFxufVxcbiNuZXctcHJvai1hZGQtYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG5pbnB1dCwgc2VsZWN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODdBQUFBO1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJmNjM2MztcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgcGFkZGluZzogNHB4IDZweCA0cHggOHB4O1xcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcbnNlbGVjdHtcXG4gICAgaGVpZ2h0OiAzMXB4O1xcbiAgICBmb250LXNpemU6MThweFxcbn1cXG5cXG4jY2xlYXItYWxsLWJ1dHRvbi1jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiA0MHB4O1xcbiAgICByaWdodDogNDBweDtcXG59XFxuI2NsZWFyLWFsbC1idXR0b24tY29udGFpbmVyIC5kZWxldGV7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWluLXdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFBREFEO1xcbn1cXG4jY2xlYXItYWxsLWJ1dHRvbi1jb250YWluZXIgPiAqe1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIFxcbn1cXG4ucHJvamVjdC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcbi5wcm9qZWN0LXRpdGxlLXdyYXBwZXJ7XFxuICAgIG1heC13aWR0aDogNDUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZXtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIFxcbn1cXG4udGl0bGUtZWRpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogNnB4O1xcbiAgICBwYWRkaW5nOiA2cHggMHB4IDEwcHggO1xcbiAgICBmbGV4LWdyb3c6IDA7XFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lci5wcm9qZWN0e1xcbiAgICB3aWR0aDogMjcuNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG4uYnV0dG9uLWNvbnRhaW5lciBidXR0b257XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbiNhZGQtdGFzay1idXR0b257XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogNXB4IDEycHg7XFxufVxcblxcbi5hZGQtdGFzay1pbmZve1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuLnRhc2tzLXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XFxuLnRhc2stY29udGFpbmVye1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBcXG59XFxuLnRhc2staW5mb3tcXG4gICAgbWF4LXdpZHRoOiAzMHZ3O1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4udGFzay1wcm9qZWN0LWluZm97XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4udGFzay1wcm9qZWN0LWluZm86aG92ZXJ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lcnJvci1tZXNzYWdle1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGNvbG9yOiAjOTkzYzNjO1xcbiAgICB0cmFuc2l0aW9uOiAycztcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMXM7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIG1hcmdpbjogNnB4O1xcbn1cXG5cXG5bZGF0YS1wcmlvcml0eT0nTG93J117XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMUFEQUQ7XFxufVxcbltkYXRhLXByaW9yaXR5PSdNZWRpdW0nXXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUYzODtcXG59XFxuW2RhdGEtcHJpb3JpdHk9J0hpZ2gnXXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlEQ0Q4RDtcXG59XFxuXFxuLmVkaXQtYnV0dG9ue1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyZjYzNjM7XFxuICAgIGNvbG9yOiAjMmY2MzYzO1xcbiAgICB0cmFuc2l0aW9uOiAuMjVzO1xcbiAgICBtaW4td2lkdGg6IDI3LjVweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcbn1cXG5cXG4uZWRpdC1idXR0b246aG92ZXJ7XFxuICAgIGZpbHRlcjpicmlnaHRuZXNzKDcwJSk7XFxufVxcblxcbi5lZGl0LWJ1dHRvbiBzcGFue1xcbiAgICBmb250LXNpemU6IDAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAuMjVzO1xcbn1cXG4uZWRpdC1idXR0b246aG92ZXIgc3BhbntcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xcbn1cXG5cXG4uZWRpdC1idXR0b24uY29uZmlybTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlEQ0Q4RDtcXG59XFxuLmVkaXQtYnV0dG9uLmRlbGV0ZTpob3ZlciwgLmVkaXQtYnV0dG9uLmNhbmNlbDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UxQURBRDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIGlucHV0LCAudGFzay1jb250YWluZXIgc2VsZWN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJmNjM2MztcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgcGFkZGluZzogMnB4IDRweCAycHggNHB4O1xcbn1cXG4udGFzay1jb250YWluZXIgc2VsZWN0e1xcbiAgICBoZWlnaHQ6IDIzcHg7XFxuICAgIGZvbnQtc2l6ZToxNXB4XFxufVxcblxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIiBpXSB7XFxuICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICB3aWR0aDogMTVweDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLmNvbXBsZXRle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTFBMUExO1xcbn1cXG5cXG4jZGF5cy1zZWxlY3RvcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmRheS1hd2F5LWxhYmVse1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDEwMHB4XFxufVxcblxcbiNjbGVhci1hbGwtYnV0dG9uOmhvdmVyIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgXFxufVxcblxcbmJ1dHRvbjpob3ZlcntcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcbi8qIFNjcm9sbCBCYXIgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDJweDtcXG59XFxuICAgIFxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjODdBQUFBO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4gICAgXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IzJmNjM2MzsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyZjYzNjNcXG59XFxuICAgIFxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiMyNjUyNTI7IFxcbn1cXG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xcbiAgICBib2R5e1xcbiAgICAgICAgc2Nyb2xsYmFyLWNvbG9yOiAjMmY2MzYzICMyNjUyNTIgIzg3QUFBQTtcXG4gICAgfVxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCIuL3RvZG8vaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcG9ydGZvbGlvXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3BvcnRmb2xpb1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnRpbWVfYXBpX2pzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9zb3VyLTgzOGY1ZVwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90b2RvL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsicHJvamVjdEZ1bmN0aW9ucyIsIkV2ZW50SGFuZGxlciIsInRvRGF0ZSIsImZvcm1hdCIsImFkZCIsInBhcnNlSVNPIiwicGFyc2UiLCJpc0JlZm9yZSIsInN0YXJ0T2ZEYXkiLCJET01NYW5pcCIsImdldEVsZW1lbnQiLCJzZWxlY3RvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIl9tYWtlTmV3RWxlbWVudCIsInR5cGUiLCJpZCIsIkhUTUxDbGFzcyIsInRleHQiLCJuZXdFbGVtIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwiYXR0cmlidXRlcyIsImxlbmd0aCIsImZvckVhY2giLCJhdHQiLCJPYmplY3QiLCJrZXlzIiwicmVtb3ZlVGV4dCIsImUiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJfaW5zZXJ0QWZ0ZXIiLCJuZXdOb2RlIiwiZXhpc3RpbmdOb2RlIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiX3JlbW92ZUFsbENoaWxkcmVuIiwiZWxlbWVudCIsInNraXAiLCJpIiwiY2hpbGROb2RlcyIsInJlbW92ZSIsInNvcnRBcnJheSIsInRhc2tBcnJheSIsInNvcnRlZEFycmF5IiwibWFwIiwiZWxlIiwiaiIsImZpcnN0VGFzayIsImdldERhdGUiLCJEYXRlIiwic2Vjb25kVGFzayIsInBsYWNlaG9sZGVyIiwiX2ZpeFN0YXJ0aW5nQW5pbWF0aW9ucyIsImFuaW1hdGFibGUiLCJjbGFzc0xpc3QiLCJfbWFrZVN0YXJ0aW5nUGFnZSIsImhlYWRlciIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNvbnRlbnQiLCJzaWRlUGFuZWwiLCJ0b2RheVNpZGVIZWFkZXJDb250YWluZXIiLCJ0b2RheXNUb2RvU2lkZSIsInRvZGF5U2lkZURyb3Bkb3duIiwib3ZlcmR1ZVNpZGVIZWFkZXJDb250YWluZXIiLCJvdmVyZHVlVG9kb1NpZGUiLCJvdmVyZHVlU2lkZURyb3Bkb3duIiwiZGF5c1NpZGVIZWFkZXJDb250YWluZXIiLCJkYXlzVG9kb1NpZGUiLCJwcm9qZWN0U2lkZUhlYWRlckNvbnRhaW5lciIsInByb2plY3RzU2lkZSIsInByb2plY3RTaWRlRHJvcGRvd24iLCJtYWluRGlzcGxheSIsImFkZFByb2plY3RCdXR0b25XcmFwcGVyIiwiYWRkUHJvamVjdEJ1dHRvbkNvbnRhaW5lciIsImFkZFByb2pjdEJ1dHRvbiIsImFkZFByb2pjdEJ1dHRvblRleHQiLCJjbGVhckFsbEJ1dHRvbkNvbnRhaW5lciIsImNsZWFyQWxsQnV0dG9uIiwiY2xlYXJBbGxJY29uIiwiY2xlYXJBbGxUZXh0IiwiX2dldFRhc2tzIiwib2Zmc2V0IiwidG9kYXlzVGFza3MiLCJkYXlSZXF1ZXN0ZWQiLCJkYXlzIiwiZ2V0QWxsUHJvamVjdHMiLCJwcm9qIiwidGFza3MiLCJ0YXNrIiwidGFza0RhdGUiLCJnZXRDb21wbGV0ZSIsInB1c2giLCJfZ2V0T3ZlcmR1ZVRhc2tzIiwib3ZlcmR1ZVRhc2tzIiwidG9kYXkiLCJfZGlzcGxheUVycm9ycyIsImlucHV0IiwiZXJyb3IiLCJwYXJlbnQiLCJwYXJlbnRFbGVtZW50Iiwic2V0VGltZW91dCIsInN0eWxlIiwib3BhY2l0eSIsIl90b2dnbGVBY3RpdmUiLCJlbGVtZW50SUQiLCJjb250YWlucyIsIl9yZXZlYWxBcnJheSIsImFycmF5IiwiZHVlIiwiZWxlbSIsImluZGV4IiwiaXNTZWxlY3RlZCIsImdldE5hbWUiLCJfZGlzcGxheVRvZGF5U2lkZSIsImFjdGl2YXRlVG9kYXkiLCJfZGlzcGxheU92ZXJkdWVTaWRlIiwiYWN0aXZhdGVPdmVyZHVlIiwicmVmcmVzaFRhc2tTaWRlcyIsIl9kaXNwbGF5UHJvamVjdHMiLCJfZ2V0UHJvamVjdE51bWJlciIsImRhdGFzZXQiLCJwcm9qZWN0IiwiX2Rpc3BsYXlUaXRsZSIsInByb2plY3ROdW1iZXIiLCJjdXJyZW50UHJvamVjdCIsInRpdGxlV3JhcHBlciIsInRpdGxlQnV0dG9uQ29udGFpbmVyIiwicHJvamVjdFRpdGxlIiwiZWRpdFRpdGxlQnV0dG9uIiwiZWRpdFRpdGxlSWNvbiIsImVkaXRUaXRsZVRleHQiLCJkZWxldGVQcm9qZWN0QnV0dG9uIiwiZGVsZXRlUHJvamVjdEljb24iLCJkZWxldGVQcm9qZWN0VGV4dCIsIl9jbGVhclNpZGVTZWxlY3Rpb24iLCJtYXJrU2VsZWN0ZWQiLCJfc2V0VGFza1NlbGVjdGlvbiIsIl9tYXJrU2VsZWN0ZWRQcm9qZWN0IiwidGFyZ2V0IiwiZ2V0VGFza0luZGV4IiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJpbmRleE9mIiwiX2Rpc3BsYXlUYXNrSW5wdXQiLCJwcm9qZWN0Q29udGFpbmVyIiwiYWRkVGFza0NvbnRhaW5lciIsImFkZFRhc2tOYW1lIiwiYWRkVGFza0Rlc2NyaXB0aW9uIiwiYWRkVGFza0RhdGUiLCJtaW4iLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwiYWRkVGFza1ByaW9yaXR5IiwiYWRkVGFza1ByaW9yaXR5RGVmYXVsdCIsImFkZFRhc2tQcmlvcml0eUxvdyIsImFkZFRhc2tQcmlvcml0eU1lZGl1bSIsImFkZFRhc2tQcmlvcml0eUhpZ2giLCJhZGRUYXNrQnV0dG9uIiwiY2xlYXJUZXh0Qm94IiwiYWN0aXZhdGVBZGRUYXNrQnV0dG9uIiwibGlua1Byb2plY3QiLCJwcm9qZWN0VG9nZ2xlIiwiY2xpY2siLCJfZmlsbEluVGFzayIsInRhc2tOdW1iZXIiLCJnZXRQcm9qZWN0IiwidGFza3NDb250YWluZXIiLCJuZXdUYXNrQ29udGFpbmVyIiwiZ2V0UHJpb3JpdHkiLCJuZXdUYXNrQ2hlY2tib3giLCJuZXdUYXNrTmFtZSIsIm5ld1Rhc2tEZXNjcmlwdGlvbiIsImdldERlc2NyaXB0aW9uIiwibmV3VGFza0RhdGUiLCJ0YXNrUHJvamVjdExhYmVsIiwibmV3VGFza0VkaXRCdXR0b24iLCJuZXdUYXNrRWRpdEljb24iLCJuZXdUYXNrRWRpdFRleHQiLCJuZXdUYXNrRGVsZXRlQnV0dG9uIiwibmV3VGFza0RlbGV0ZUljb24iLCJuZXdUYXNrRGVsZXRlVGV4dCIsImFjdGl2YXRlVGFza0J1dHRvbnMiLCJhY3RpdmF0ZUNoZWNrYm94IiwiaXNQcm9qZWN0U2VsZWN0ZWQiLCJhY3RpdmF0ZVByb2plY3RMaW5rIiwiX2Rpc3BsYXlDb25maXJtQ2FuY2VsIiwicHJvamVjdEJ1dHRvbkNvbnRhaW5lciIsImNvbmZpcm1Db250YWluZXIiLCJjb25maXJtUHJvamVjdEJ1dHRvbiIsImNvbmZpcm1Qcm9qZWN0SWNvbiIsImNvbmZpcm1Qcm9qZWN0VGV4dCIsImNhbmNlbFByb2plY3RCdXR0b24iLCJjYW5jZWxQcm9qZWN0SWNvbiIsImNhbmNlbFByb2plY3RUZXh0IiwiX2ZpbGxJbkRheXMiLCJudW1iZXJPZkRheXMiLCJvdmVyYWxsSW5kZXhDb3VudCIsImRpc3BsYXllZFRhc2siLCJ0YXNrQ291bnQiLCJnZXROdW1iZXIiLCJfY2hlY2tEYXlzIiwibnVtQ2hhbmdlZCIsImVycm9yTWVzc2FnZXMiLCJjaGFuZ2VEYXlzIiwic2V0Q3VycmVudERheXMiLCJnZXRDdXJyZW50RGF5cyIsInNldHVwTmV3UHJvamVjdCIsIm5ld1Byb2pJbnB1dENvbnRhaW5lciIsIm5ld1Byb2pJbnB1dCIsIm5ld1Byb2pBZGRCdXR0b24iLCJhZGRQcm9qZWN0U3VibWlzc2lvbiIsImNhbmNlbE5ld1Byb2plY3QiLCJhY3RpdmF0ZUFkZEJ1dHRvbiIsImdldE5ld1Byb2pJbmZvIiwibmFtZSIsImNoZWNrTmV3UHJvamVjdCIsInVwZGF0ZVByb2plY3RMaXN0IiwiYWN0aXZhdGVQcm9qZWN0QnV0dG9ucyIsImFjdGl2YXRlUHJvamVjdHMiLCJkaXNwbGF5RWRpdFByb2plY3QiLCJwcm9qZWNUaXRsZSIsInByb2plY3RUaXRsZUlucHV0IiwibGFzdEVsZW1lbnRDaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwiYWN0aXZhdGVDb25maXJtUHJvamVjdEVkaXQiLCJhY3RpdmF0ZUNhbmNlbEJ1dHRvbiIsImRpc3BsYXlEZWxldGVQcm9qZWN0IiwiYWN0aXZhdGVEZWxldGVQcm9qZWN0IiwiY2FuY2VsUHJvamVjdEVkaXQiLCJleHBhbmRUb2dnbGUiLCJhY3RpdmF0ZVNpZGVzIiwidG9nZ2xlIiwic3RvcFByb3BhZ2F0aW9uIiwiZ2V0VGFza0luZm8iLCJmb3JtSW5mbyIsInVuZGVmaW5lZCIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsInByaW9yaXR5IiwibnVtYmVyIiwiY2hlY2tOZXdUYXNrIiwidXBkYXRlVGFza0xpc3QiLCJzaG93VG9kYXkiLCJzaG93T3ZlcmR1ZSIsIl9jb25maXJtQ2FuY2VsVGFzayIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJkaXNwbGF5RWRpdFRhc2siLCJlZGl0QnV0dG9uIiwiZGVsZXRlQnV0dG9uIiwiZWRpdFRhc2siLCJnZXRUYXNrcyIsImVkaXRUYXNrTmFtZSIsImVkaXRUYXNrRGVzY3JpcHRpb24iLCJlZGl0VGFza0RhdGUiLCJlZGl0VGFza1ByaW9yaXR5IiwiZWRpdFRhc2tQcmlvcml0eUxvdyIsImVkaXRUYXNrUHJpb3JpdHlNZWRpdW0iLCJlZGl0VGFza1ByaW9yaXR5SGlnaCIsImVkaXRUYXNrQ29udGFpbmVyIiwicHJldmlvdXNTaWJsaW5nIiwiYWN0aXZhdGVDb25maXJtVGFza0VkaXQiLCJkaXNwbGF5RGVsZXRlVGFzayIsImFjdGl2YXRlQ29uZmlybVRhc2tEZWxldGUiLCJjYW5jZWxFZGl0IiwiX2J1aWxkUGFnZSIsImZpcnN0Q2hpbGQiLCJwYWdlQ29udGFpbmVyIiwidGFza3NXcmFwcGVyIiwic3BhY2VyIiwic2hvd1Byb2plY3QiLCJ0b2RheVRpdGxlIiwib3ZlcmR1ZVRpdGxlIiwic2hvd0RheXMiLCJkYXlzU2VsZWN0b3IiLCJtYXgiLCJkYXlzVGl0bGUiLCJhY3RpdmF0ZURheXNTZWxlY3RvciIsImNvbmZpcm1DbGVhckFsbCIsImFjdGl2YXRlQ29uZmlybUNsZWFyQWxsIiwiY2FuY2VsQ2xlYXJBbGwiLCJhY3RpdmF0ZUNsZWFyQWxsQnV0dG9uIiwic3RhcnRQYWdlIiwiaW5pdFN0YXJ0aW5nTGlzdGVuZXJzIiwibG9hZFByb2plY3RzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uZmlybUFsbENsZWFyIiwiY2FwdHVyZSIsImFkZFByb2plY3QiLCJhY3RpdmF0ZURheXMiLCJidXR0b24iLCJjb25maXJtUHJvamVjdEVkaXQiLCJkZWxldGVQcm9qZWN0IiwiYWRkVGFzayIsIl9hY3RpdmF0ZUVkaXRUYXNrQnV0dG9uIiwiY29uZmlybVRhc2tFZGl0IiwiX2FjdGl2YXRlRGVsZXRlVGFza0J1dHRvbiIsImNvbmZpcm1UYXNrRGVsZXRlIiwiZWRpdCIsImRlbCIsInRvZ2dsZVRhc2tDb21wbGV0ZSIsIlByb2plY3QiLCJpbml0VGl0bGUiLCJjb21wbGV0ZWQiLCJzZWxlY3RlZCIsIm5ld05hbWUiLCJuZXdUYXNrIiwiVGFzayIsImR1ZURhdGUiLCJub3RlcyIsImRhdGFTdG9yYWdlIiwic2F2ZURhdGEiLCJhbGxQcm9qIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2FkRGF0YSIsImdldEl0ZW0iLCJsb2FkZWREYXRhIiwicmV0dXJuRGF0YSIsImxvYWRQcm9qZWN0VGl0bGUiLCJsb2FkUHJvamVjdHNUYXNrcyIsImxvYWRQcm9qZWN0Q29tcGxldGVkIiwiY2xlYXJEYXRhIiwiX2FsbFByb2plY3RzIiwiX2N1cnJlbnREYXlzUmVxdWVzdGVkIiwiX3JlbnVtYmVyUHJvamVjdHMiLCJyZWR1Y2VQcm9qZWN0IiwiX3JlbnVtYmVyVGFza3MiLCJyZWR1Y2VUYXNrIiwiX3NvcnRUYXNrcyIsInNvcnRlZFRhc2tzIiwibmV3UHJvamVjdEluZm8iLCJnb29kUHJvamVjdCIsIm5ld1Rhc2tJbmZvIiwiZ29vZFRhc2siLCJlZGl0VGl0bGUiLCJzZXROYW1lIiwiZWRpdFRhc2tJbmZvIiwic3BsaWNlIiwic2VsZWN0ZWRUYXNrIiwidG9nZ2xlQ29tcGxldGUiLCJuZXdWYWx1ZSIsImluaXRXZWJzaXRlIl0sInNvdXJjZVJvb3QiOiIifQ==