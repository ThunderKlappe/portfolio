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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parse/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isBefore/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/add/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header */ "./src/Header.js");
/* eslint-disable no-unexpected-multiline */





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
        var firstTask = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(sortedArray[j].getDate(), "MM/dd/yyyy", new Date());
        var secondTask = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(sortedArray[j + 1].getDate(), "MM/dd/yyyy", new Date());

        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(secondTask, firstTask)) {
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
    var header = (0,_Header__WEBPACK_IMPORTED_MODULE_2__["default"])("To-Do List");
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
    var dayRequested = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date()), {
      days: offset
    }), "MM/dd/yyyy");
    ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects().forEach(function (proj) {
      proj.tasks.forEach(function (task) {
        var taskDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(task.getDate(), "MM/dd/yyyy", new Date()), "MM/dd/yyyy");

        if (taskDate == dayRequested && task.getComplete() == false) {
          todaysTasks.push(task);
        }
      });
    });
    return todaysTasks;
  }; //gets all tasks that are due earlier than today


  var _getOverdueTasks = function _getOverdueTasks() {
    var overdueTasks = [];
    var today = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date());
    ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects().forEach(function (proj) {
      proj.tasks.forEach(function (task) {
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(task.getDate(), "MM/dd/yyyy", new Date()), today) && task.getComplete() == false) {
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
      min: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date()).toISOString().split("T")[0]
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
        _insertAfter(_makeNewElement("div", "day-".concat(i, "-away-label"), "day-away-label", (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date()), {
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
      date: formInfo[2].value ? (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(formInfo[2].value)), "MM/dd/yyyy") : "",
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
      min: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date()).toISOString().split("T")[0]
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

    var today = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date()), "MM/dd/yyyy");

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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #f6eabe;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #2f6363;\n}\n\n#header {\n    background-color: #f6d7a7;\n    color: #2f6363;\n}\n\n#content {\n    margin-top: 72px;\n    display: flex;\n    width: -webkit-fill-available;\n    background-color: inherit;\n}\n#side-panel {\n    flex: 1;\n    background-color: #2f6363;\n    color: #f6d7a7;\n    min-height: 89.3vh;\n    padding-top: 28px;\n    border-top-right-radius: 30px;\n}\n#side-panel > * :hover {\n    cursor: pointer;\n}\n.side-header-container {\n    display: flex;\n    flex-direction: column;\n}\n.side-header {\n    font-size: 24px;\n    padding-left: 20px;\n    padding-bottom: 8px;\n    display: flex;\n}\n.project-side-label,\n.task-side-label {\n    font-size: 18px;\n    margin: 4px 0px 4px 20px;\n    padding: 4px 10px 4px 10px;\n}\n.task-side-label {\n    margin: 0px 0px 0px 20px;\n}\n.selected {\n    background-color: #265252;\n    border-radius: 30px 0 0 30px;\n}\n.dropdown-toggle {\n    margin-left: 8px;\n}\n.dropdown-toggle.anim {\n    transition: 0.25s;\n}\n.dropdown-toggle.closed {\n    transform: rotateZ(-90deg);\n}\n\n#main-display {\n    flex: 4;\n    background-color: inherit;\n}\n\n.add-button {\n    border-radius: 100px;\n    background-color: #c8e3d4;\n    border: 3px solid #2f6363;\n    color: #2f6363;\n    text-align: center;\n    padding: 0px 10px;\n    margin: 0px 8px 1px;\n    filter: brightness(100%);\n}\n\n.add-button:hover {\n    filter: brightness(70%);\n}\n.add-button:active {\n    box-shadow: inset 0px 0px 5px black;\n}\n\n#add-project-button-container {\n    position: fixed;\n    top: 100px;\n    right: 60px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    z-index: 1;\n}\n#add-project-button {\n    height: 50px;\n    width: 50px;\n    font-size: 40px;\n    font-weight: bold;\n    z-index: 1;\n}\n#add-project-button.anim {\n    transition: 0.25s;\n}\n#add-project-button:hover,\n#add-project-button.active {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 120px;\n}\n#add-project-button.active {\n    filter: brightness(80%);\n}\n\n#add-project-button span {\n    font-size: 0%;\n    opacity: 0;\n}\n#add-project-button span.anim {\n    transition: 0.05s;\n}\n#add-project-button:hover span,\n#add-project-button span.active {\n    font-size: 20px;\n    opacity: 1;\n}\n.input-container {\n    padding: 8px 15px;\n    background-color: #c8e3d4;\n    border: 3px solid #2f6363;\n    border-radius: 100px;\n    box-shadow: 2px 2px black;\n}\n#new-proj-add-button {\n    font-size: 18px;\n    font-weight: bold;\n    padding-top: 4px;\n    padding-bottom: 4px;\n}\n\ninput,\nselect {\n    background-color: #87aaaa;\n    color: #2f6363;\n    border-style: none;\n    border-bottom: 1px solid #2f6363;\n    flex-grow: 1;\n    font-size: 16px;\n    height: 22px;\n    padding: 4px 6px 4px 8px;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\nselect {\n    height: 31px;\n    font-size: 18px;\n}\n\n#clear-all-button-container {\n    position: fixed;\n    bottom: 40px;\n    right: 40px;\n}\n#clear-all-button-container .delete {\n    height: 50px;\n    min-width: 50px;\n    background-color: #e1adad;\n}\n#clear-all-button-container > * {\n    font-size: 30px;\n}\n.project-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 30px;\n    background-color: inherit;\n}\n.project-title-wrapper {\n    max-width: 45%;\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n    align-items: center;\n    background-color: inherit;\n    margin-bottom: 30px;\n}\n\n.project-title {\n    font-size: 36px;\n    font-weight: bold;\n    overflow-y: auto;\n    white-space: nowrap;\n    text-decoration: underline;\n    margin-top: 10px;\n}\n.title-edit {\n    background-color: inherit;\n    font-size: 36px;\n    font-weight: bold;\n    margin-top: 6px;\n    padding: 6px 0px 10px;\n    flex-grow: 0;\n    border-bottom-width: 0px;\n    border-radius: 30px;\n    text-align: center;\n    text-decoration: none;\n    filter: brightness(80%);\n    overflow-y: auto;\n}\n\n.button-container.project {\n    width: 27.5px;\n    background-color: inherit;\n}\n.button-container button {\n    margin-top: 10px;\n}\n\n#add-task-button {\n    font-size: 18px;\n    padding: 5px 12px;\n}\n\n.add-task-info {\n    border-radius: 20px;\n    margin: 5px;\n}\n.tasks-wrapper {\n    display: flex;\n    flex-direction: column;\n    margin-left: 60px;\n    margin-bottom: 40px;\n    width: -webkit-fill-available;\n}\n.task-container {\n    border-radius: 10px;\n    padding: 4px 12px;\n    display: flex;\n    gap: 20px;\n    max-width: fit-content;\n}\n.task-info {\n    max-width: 30vw;\n    white-space: nowrap;\n    overflow-y: auto;\n}\n.task-project-info {\n    font-weight: bold;\n}\n.task-project-info:hover {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.error-message {\n    font-size: 18px;\n    color: #993c3c;\n    transition: 2s;\n    transition-delay: 1s;\n    opacity: 1;\n    margin: 6px;\n}\n\n[data-priority=\"Low\"] {\n    background-color: #e1adad;\n}\n[data-priority=\"Medium\"] {\n    background-color: #efef38;\n}\n[data-priority=\"High\"] {\n    background-color: #9dcd8d;\n}\n\n.edit-button {\n    border-radius: 10px;\n    background-color: inherit;\n    filter: brightness(100%);\n    border: 1px solid #2f6363;\n    color: #2f6363;\n    transition: 0.25s;\n    min-width: 27.5px;\n    height: 20px;\n    white-space: nowrap;\n}\n\n.edit-button:hover {\n    filter: brightness(70%);\n}\n\n.edit-button span {\n    font-size: 0%;\n    opacity: 0;\n    transition: 0.25s;\n}\n.edit-button:hover span {\n    font-size: 14px;\n    opacity: 1;\n    padding: 0px 5px;\n}\n\n.edit-button.confirm:hover {\n    background-color: #9dcd8d;\n}\n.edit-button.delete:hover,\n.edit-button.cancel:hover {\n    background-color: #e1adad;\n}\n\n.task-container input,\n.task-container select {\n    background-color: inherit;\n    color: #2f6363;\n    border-style: none;\n    border-bottom: 1px solid #2f6363;\n    flex-grow: 1;\n    font-size: 14px;\n    height: 18px;\n    padding: 2px 4px 2px 4px;\n}\n.task-container select {\n    height: 23px;\n    font-size: 15px;\n}\n\ninput[type=\"checkbox\" i] {\n    flex-grow: 0;\n    height: 15px;\n    width: 15px;\n}\n\n.task-container.complete {\n    background-color: #a1a1a1;\n}\n\n#days-selector {\n    background-color: inherit;\n    border-bottom: none;\n    font-size: 36px;\n    width: 50px;\n    margin-top: 10px;\n    filter: brightness(80%);\n    border-radius: 30px;\n    text-align: center;\n    padding: 10px;\n}\n\n.day-away-label {\n    font-size: 20px;\n    font-weight: bold;\n    padding: 10px 0px 10px 100px;\n}\n\n#clear-all-button:hover span {\n    font-size: 30px;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n/* Scroll Bar */\n::-webkit-scrollbar {\n    width: 20px;\n    height: 10px;\n    padding-top: 2px;\n}\n\n::-webkit-scrollbar-track {\n    border: 3px solid #87aaaa;\n    border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n    background: #2f6363;\n    border-radius: 10px;\n    border: 2px solid #2f6363;\n}\n\n::-webkit-scrollbar-thumb:hover {\n    background: #265252;\n}\n@-moz-document url-prefix() {\n    body {\n        scrollbar-color: #2f6363 #265252 #87aaaa;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/todo/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #f6eabe;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #2f6363;\n}\n\n#header {\n    background-color: #f6d7a7;\n    color: #2f6363;\n}\n\n#content {\n    margin-top: 72px;\n    display: flex;\n    width: -webkit-fill-available;\n    background-color: inherit;\n}\n#side-panel {\n    flex: 1;\n    background-color: #2f6363;\n    color: #f6d7a7;\n    min-height: 89.3vh;\n    padding-top: 28px;\n    border-top-right-radius: 30px;\n}\n#side-panel > * :hover {\n    cursor: pointer;\n}\n.side-header-container {\n    display: flex;\n    flex-direction: column;\n}\n.side-header {\n    font-size: 24px;\n    padding-left: 20px;\n    padding-bottom: 8px;\n    display: flex;\n}\n.project-side-label,\n.task-side-label {\n    font-size: 18px;\n    margin: 4px 0px 4px 20px;\n    padding: 4px 10px 4px 10px;\n}\n.task-side-label {\n    margin: 0px 0px 0px 20px;\n}\n.selected {\n    background-color: #265252;\n    border-radius: 30px 0 0 30px;\n}\n.dropdown-toggle {\n    margin-left: 8px;\n}\n.dropdown-toggle.anim {\n    transition: 0.25s;\n}\n.dropdown-toggle.closed {\n    transform: rotateZ(-90deg);\n}\n\n#main-display {\n    flex: 4;\n    background-color: inherit;\n}\n\n.add-button {\n    border-radius: 100px;\n    background-color: #c8e3d4;\n    border: 3px solid #2f6363;\n    color: #2f6363;\n    text-align: center;\n    padding: 0px 10px;\n    margin: 0px 8px 1px;\n    filter: brightness(100%);\n}\n\n.add-button:hover {\n    filter: brightness(70%);\n}\n.add-button:active {\n    box-shadow: inset 0px 0px 5px black;\n}\n\n#add-project-button-container {\n    position: fixed;\n    top: 100px;\n    right: 60px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    z-index: 1;\n}\n#add-project-button {\n    height: 50px;\n    width: 50px;\n    font-size: 40px;\n    font-weight: bold;\n    z-index: 1;\n}\n#add-project-button.anim {\n    transition: 0.25s;\n}\n#add-project-button:hover,\n#add-project-button.active {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 120px;\n}\n#add-project-button.active {\n    filter: brightness(80%);\n}\n\n#add-project-button span {\n    font-size: 0%;\n    opacity: 0;\n}\n#add-project-button span.anim {\n    transition: 0.05s;\n}\n#add-project-button:hover span,\n#add-project-button span.active {\n    font-size: 20px;\n    opacity: 1;\n}\n.input-container {\n    padding: 8px 15px;\n    background-color: #c8e3d4;\n    border: 3px solid #2f6363;\n    border-radius: 100px;\n    box-shadow: 2px 2px black;\n}\n#new-proj-add-button {\n    font-size: 18px;\n    font-weight: bold;\n    padding-top: 4px;\n    padding-bottom: 4px;\n}\n\ninput,\nselect {\n    background-color: #87aaaa;\n    color: #2f6363;\n    border-style: none;\n    border-bottom: 1px solid #2f6363;\n    flex-grow: 1;\n    font-size: 16px;\n    height: 22px;\n    padding: 4px 6px 4px 8px;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\nselect {\n    height: 31px;\n    font-size: 18px;\n}\n\n#clear-all-button-container {\n    position: fixed;\n    bottom: 40px;\n    right: 40px;\n}\n#clear-all-button-container .delete {\n    height: 50px;\n    min-width: 50px;\n    background-color: #e1adad;\n}\n#clear-all-button-container > * {\n    font-size: 30px;\n}\n.project-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 30px;\n    background-color: inherit;\n}\n.project-title-wrapper {\n    max-width: 45%;\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n    align-items: center;\n    background-color: inherit;\n    margin-bottom: 30px;\n}\n\n.project-title {\n    font-size: 36px;\n    font-weight: bold;\n    overflow-y: auto;\n    white-space: nowrap;\n    text-decoration: underline;\n    margin-top: 10px;\n}\n.title-edit {\n    background-color: inherit;\n    font-size: 36px;\n    font-weight: bold;\n    margin-top: 6px;\n    padding: 6px 0px 10px;\n    flex-grow: 0;\n    border-bottom-width: 0px;\n    border-radius: 30px;\n    text-align: center;\n    text-decoration: none;\n    filter: brightness(80%);\n    overflow-y: auto;\n}\n\n.button-container.project {\n    width: 27.5px;\n    background-color: inherit;\n}\n.button-container button {\n    margin-top: 10px;\n}\n\n#add-task-button {\n    font-size: 18px;\n    padding: 5px 12px;\n}\n\n.add-task-info {\n    border-radius: 20px;\n    margin: 5px;\n}\n.tasks-wrapper {\n    display: flex;\n    flex-direction: column;\n    margin-left: 60px;\n    margin-bottom: 40px;\n    width: -webkit-fill-available;\n}\n.task-container {\n    border-radius: 10px;\n    padding: 4px 12px;\n    display: flex;\n    gap: 20px;\n    max-width: fit-content;\n}\n.task-info {\n    max-width: 30vw;\n    white-space: nowrap;\n    overflow-y: auto;\n}\n.task-project-info {\n    font-weight: bold;\n}\n.task-project-info:hover {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.error-message {\n    font-size: 18px;\n    color: #993c3c;\n    transition: 2s;\n    transition-delay: 1s;\n    opacity: 1;\n    margin: 6px;\n}\n\n[data-priority=\"Low\"] {\n    background-color: #e1adad;\n}\n[data-priority=\"Medium\"] {\n    background-color: #efef38;\n}\n[data-priority=\"High\"] {\n    background-color: #9dcd8d;\n}\n\n.edit-button {\n    border-radius: 10px;\n    background-color: inherit;\n    filter: brightness(100%);\n    border: 1px solid #2f6363;\n    color: #2f6363;\n    transition: 0.25s;\n    min-width: 27.5px;\n    height: 20px;\n    white-space: nowrap;\n}\n\n.edit-button:hover {\n    filter: brightness(70%);\n}\n\n.edit-button span {\n    font-size: 0%;\n    opacity: 0;\n    transition: 0.25s;\n}\n.edit-button:hover span {\n    font-size: 14px;\n    opacity: 1;\n    padding: 0px 5px;\n}\n\n.edit-button.confirm:hover {\n    background-color: #9dcd8d;\n}\n.edit-button.delete:hover,\n.edit-button.cancel:hover {\n    background-color: #e1adad;\n}\n\n.task-container input,\n.task-container select {\n    background-color: inherit;\n    color: #2f6363;\n    border-style: none;\n    border-bottom: 1px solid #2f6363;\n    flex-grow: 1;\n    font-size: 14px;\n    height: 18px;\n    padding: 2px 4px 2px 4px;\n}\n.task-container select {\n    height: 23px;\n    font-size: 15px;\n}\n\ninput[type=\"checkbox\" i] {\n    flex-grow: 0;\n    height: 15px;\n    width: 15px;\n}\n\n.task-container.complete {\n    background-color: #a1a1a1;\n}\n\n#days-selector {\n    background-color: inherit;\n    border-bottom: none;\n    font-size: 36px;\n    width: 50px;\n    margin-top: 10px;\n    filter: brightness(80%);\n    border-radius: 30px;\n    text-align: center;\n    padding: 10px;\n}\n\n.day-away-label {\n    font-size: 20px;\n    font-weight: bold;\n    padding: 10px 0px 10px 100px;\n}\n\n#clear-all-button:hover span {\n    font-size: 30px;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n/* Scroll Bar */\n::-webkit-scrollbar {\n    width: 20px;\n    height: 10px;\n    padding-top: 2px;\n}\n\n::-webkit-scrollbar-track {\n    border: 3px solid #87aaaa;\n    border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n    background: #2f6363;\n    border-radius: 10px;\n    border: 2px solid #2f6363;\n}\n\n::-webkit-scrollbar-thumb:hover {\n    background: #265252;\n}\n@-moz-document url-prefix() {\n    body {\n        scrollbar-color: #2f6363 #265252 #87aaaa;\n    }\n}\n"],"sourceRoot":""}]);
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-838f5e","src_Header_js"], () => (__webpack_require__("./src/todo/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksbURBQW1ELE9BQU8sR0FBRyxTQUFTLHFGQUFxRixZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0s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OztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy90b2RvL0RPTU1hbmlwLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy90b2RvL0V2ZW50SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvdG9kby9Qcm9qZWN0LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy90b2RvL1Rhc2suanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3RvZG8vZGF0YVN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3RvZG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3RvZG8vc3R5bGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy90b2RvL3N0eWxlLmNzcz8zMmUwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZXhwZWN0ZWQtbXVsdGlsaW5lICovXG5pbXBvcnQgeyBwcm9qZWN0RnVuY3Rpb25zIH0gZnJvbSBcIi5cIjtcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSBcIi4vRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgeyB0b0RhdGUsIGZvcm1hdCwgYWRkLCBwYXJzZUlTTywgcGFyc2UsIGlzQmVmb3JlLCBzdGFydE9mRGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gXCIuLi9IZWFkZXJcIjtcblxuY29uc3QgRE9NTWFuaXAgPSAoKCkgPT4ge1xuICAgIC8vc2hvcnRoYW5kIHRvIGdldCBlbGVtZW50cyBlYXNpZXJcbiAgICBjb25zdCBnZXRFbGVtZW50ID0gc2VsZWN0b3IgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgY29uc3QgZ2V0RWxlbWVudHMgPSBzZWxlY3RvciA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICAgIC8vc2hvcnRoYW5kIHRvIG1ha2UgYSBuZXcgZWxlbWVudCBhbmQgYWRkIGF0dHJpYnV0ZXMgdG8gaXRcbiAgICBjb25zdCBfbWFrZU5ld0VsZW1lbnQgPSAodHlwZSwgaWQgPSBcIlwiLCBIVE1MQ2xhc3MgPSBcIlwiLCB0ZXh0ID0gXCJcIiwgLi4uYXR0cmlidXRlcykgPT4ge1xuICAgICAgICBjb25zdCBuZXdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgaWYgKGlkICE9IFwiXCIpIHtcbiAgICAgICAgICAgIG5ld0VsZW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChIVE1MQ2xhc3MgIT0gXCJcIikge1xuICAgICAgICAgICAgbmV3RWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBIVE1MQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICAgIG5ld0VsZW0udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBpZiAoYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goYXR0ID0+IG5ld0VsZW0uc2V0QXR0cmlidXRlKE9iamVjdC5rZXlzKGF0dClbMF0sIGF0dFtPYmplY3Qua2V5cyhhdHQpXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld0VsZW07XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVUZXh0ID0gZSA9PiB7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC52YWx1ZSA9IFwiXCI7XG4gICAgfTtcblxuICAgIC8vaW5zZXJ0cyBhIERPTSBlbGVtZW50IGFmdGVyIGFub3RoZXIgZWxlbWVudFxuICAgIGNvbnN0IF9pbnNlcnRBZnRlciA9IChuZXdOb2RlLCBleGlzdGluZ05vZGUpID0+IHtcbiAgICAgICAgZXhpc3RpbmdOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIGV4aXN0aW5nTm9kZS5uZXh0U2libGluZyk7XG4gICAgfTtcblxuICAgIC8vY2xlYXJzIG91dCBhbGwgY2hpbGQgbm9kZXMgb2YgYW4gZWxlbWVudCwgc2tpcHMgYXMgbWFueSBlbGVtZW50cyBhcyByZXF1ZXN0ZWRcbiAgICBjb25zdCBfcmVtb3ZlQWxsQ2hpbGRyZW4gPSAoZWxlbWVudCwgc2tpcCA9IDApID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkgPiBza2lwOyBpLS0pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1tpIC0gMV0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9zb3J0cyBhbiBhcnJheSBvZiB0YXNrcyBieSB0aGUgZGF0ZTtcbiAgICBjb25zdCBzb3J0QXJyYXkgPSB0YXNrQXJyYXkgPT4ge1xuICAgICAgICBsZXQgc29ydGVkQXJyYXkgPSB0YXNrQXJyYXkubWFwKGVsZSA9PiBlbGUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNvcnRlZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNvcnRlZEFycmF5Lmxlbmd0aCAtIDE7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0VGFzayA9IHBhcnNlKHNvcnRlZEFycmF5W2pdLmdldERhdGUoKSwgXCJNTS9kZC95eXl5XCIsIG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZFRhc2sgPSBwYXJzZShzb3J0ZWRBcnJheVtqICsgMV0uZ2V0RGF0ZSgpLCBcIk1NL2RkL3l5eXlcIiwgbmV3IERhdGUoKSk7XG4gICAgICAgICAgICAgICAgaWYgKGlzQmVmb3JlKHNlY29uZFRhc2ssIGZpcnN0VGFzaykpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gc29ydGVkQXJyYXlbal07XG4gICAgICAgICAgICAgICAgICAgIHNvcnRlZEFycmF5W2pdID0gc29ydGVkQXJyYXlbaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICBzb3J0ZWRBcnJheVtqICsgMV0gPSBwbGFjZWhvbGRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNvcnRlZEFycmF5O1xuICAgIH07XG5cbiAgICAvL2ZpeGVzIHN0cmFuZ2UgYnVnIHdoZXJlIGVsZW1lbnRzIGFuaW1hdGVkIGZyb20gdGhlaXIgZGVmYXVsdCBzdGF0ZSB0byB0aGVpciBjc3Mgc3R5bGVkIHN0YXRlXG4gICAgY29uc3QgX2ZpeFN0YXJ0aW5nQW5pbWF0aW9ucyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYW5pbWF0YWJsZSA9IGdldEVsZW1lbnRzKFwiLmZpeC1hbmltXCIpO1xuICAgICAgICBhbmltYXRhYmxlLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKFwiYW5pbVwiKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZml4LWFuaW1cIik7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvL2FkZHMgYWxsIG9mIHRoZSBzdGFydGluZyBlbGVtZW50IHRvIHRoZSBwYWdlIHdoZW4gZmlyc3QgbG9hZGluZyB0aGUgcGFnZVxuICAgIGNvbnN0IF9tYWtlU3RhcnRpbmdQYWdlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoXCJUby1EbyBMaXN0XCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICAgICAgY29uc3QgY29udGVudCA9IF9tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImNvbnRlbnRcIik7XG5cbiAgICAgICAgY29uc3Qgc2lkZVBhbmVsID0gX21ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwic2lkZS1wYW5lbFwiKTtcblxuICAgICAgICBjb25zdCB0b2RheVNpZGVIZWFkZXJDb250YWluZXIgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJzaWRlLWhlYWRlci1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHRvZGF5c1RvZG9TaWRlID0gX21ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwidG9kYXlzLXRvZG8tc2lkZVwiLCBcInNpZGUtaGVhZGVyIHRvZGF5XCIsIFwiVG9kYXlcIik7XG4gICAgICAgIGNvbnN0IHRvZGF5U2lkZURyb3Bkb3duID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFwidG9kYXktdG9nZ2xlXCIsXG4gICAgICAgICAgICBcImRyb3Bkb3duLXRvZ2dsZSBmaXgtYW5pbSBmYS1zb2xpZCBmYS1jYXJldC1kb3duXCJcbiAgICAgICAgKTtcbiAgICAgICAgdG9kYXlzVG9kb1NpZGUuYXBwZW5kQ2hpbGQodG9kYXlTaWRlRHJvcGRvd24pO1xuICAgICAgICB0b2RheVNpZGVIZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXlzVG9kb1NpZGUpO1xuXG4gICAgICAgIGNvbnN0IG92ZXJkdWVTaWRlSGVhZGVyQ29udGFpbmVyID0gX21ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwic2lkZS1oZWFkZXItY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBvdmVyZHVlVG9kb1NpZGUgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJvdmVyZHVlLXRvZG8tc2lkZVwiLCBcInNpZGUtaGVhZGVyIG92ZXJkdWVcIiwgXCJPdmVyZHVlXCIpO1xuICAgICAgICBjb25zdCBvdmVyZHVlU2lkZURyb3Bkb3duID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFwib3ZlcmR1ZS10b2dnbGVcIixcbiAgICAgICAgICAgIFwiZHJvcGRvd24tdG9nZ2xlIGZpeC1hbmltIGNsb3NlZCBmYS1zb2xpZCBmYS1jYXJldC1kb3duXCJcbiAgICAgICAgKTtcbiAgICAgICAgb3ZlcmR1ZVRvZG9TaWRlLmFwcGVuZENoaWxkKG92ZXJkdWVTaWRlRHJvcGRvd24pO1xuICAgICAgICBvdmVyZHVlU2lkZUhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChvdmVyZHVlVG9kb1NpZGUpO1xuXG4gICAgICAgIGNvbnN0IGRheXNTaWRlSGVhZGVyQ29udGFpbmVyID0gX21ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwic2lkZS1oZWFkZXItY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBkYXlzVG9kb1NpZGUgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJkYXlzLXRvZG8tc2lkZVwiLCBcInNpZGUtaGVhZGVyIGRheXNcIiwgXCJEYXlzIEF3YXlcIik7XG4gICAgICAgIGRheXNTaWRlSGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRheXNUb2RvU2lkZSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFNpZGVIZWFkZXJDb250YWluZXIgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJzaWRlLWhlYWRlci1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHByb2plY3RzU2lkZSA9IF9tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInByb2plY3RzLXNpZGVcIiwgXCJzaWRlLWhlYWRlclwiLCBcIlByb2plY3RzXCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0U2lkZURyb3Bkb3duID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFwicHJvamVjdHMtdG9nZ2xlXCIsXG4gICAgICAgICAgICBcImRyb3Bkb3duLXRvZ2dsZSBmaXgtYW5pbSBmYS1zb2xpZCBmYS1jYXJldC1kb3duXCJcbiAgICAgICAgKTtcbiAgICAgICAgcHJvamVjdHNTaWRlLmFwcGVuZENoaWxkKHByb2plY3RTaWRlRHJvcGRvd24pO1xuICAgICAgICBwcm9qZWN0U2lkZUhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c1NpZGUpO1xuXG4gICAgICAgIHNpZGVQYW5lbC5hcHBlbmRDaGlsZCh0b2RheVNpZGVIZWFkZXJDb250YWluZXIpO1xuICAgICAgICBzaWRlUGFuZWwuYXBwZW5kQ2hpbGQob3ZlcmR1ZVNpZGVIZWFkZXJDb250YWluZXIpO1xuICAgICAgICBzaWRlUGFuZWwuYXBwZW5kQ2hpbGQoZGF5c1NpZGVIZWFkZXJDb250YWluZXIpO1xuICAgICAgICBzaWRlUGFuZWwuYXBwZW5kQ2hpbGQocHJvamVjdFNpZGVIZWFkZXJDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IG1haW5EaXNwbGF5ID0gX21ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwibWFpbi1kaXNwbGF5XCIpO1xuXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b25XcmFwcGVyID0gX21ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiYWRkLXByb2plY3QtYnV0dG9uLXdyYXBwZXJcIik7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b25Db250YWluZXIgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJhZGQtcHJvamVjdC1idXR0b24tY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBhZGRQcm9qY3RCdXR0b24gPSBfbWFrZU5ld0VsZW1lbnQoXCJidXR0b25cIiwgXCJhZGQtcHJvamVjdC1idXR0b25cIiwgXCJhZGQtYnV0dG9uIGZpeC1hbmltXCIsIFwiK1wiKTtcbiAgICAgICAgY29uc3QgYWRkUHJvamN0QnV0dG9uVGV4dCA9IF9tYWtlTmV3RWxlbWVudChcInNwYW5cIiwgXCJhZGQtcHJvamVjdC1idXR0b24tdGV4dFwiLCBcImZpeC1hbmltXCIsIFwiUHJvamVjdFwiKTtcbiAgICAgICAgYWRkUHJvamN0QnV0dG9uLmFwcGVuZENoaWxkKGFkZFByb2pjdEJ1dHRvblRleHQpO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2pjdEJ1dHRvbik7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b25Db250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IGNsZWFyQWxsQnV0dG9uQ29udGFpbmVyID0gX21ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiY2xlYXItYWxsLWJ1dHRvbi1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGNsZWFyQWxsQnV0dG9uID0gX21ha2VOZXdFbGVtZW50KFwiYnV0dG9uXCIsIFwiY2xlYXItYWxsLWJ1dHRvblwiLCBcImVkaXQtYnV0dG9uIGRlbGV0ZSBmaXgtYW5pbVwiKTtcbiAgICAgICAgY29uc3QgY2xlYXJBbGxJY29uID0gX21ha2VOZXdFbGVtZW50KFwiaVwiLCBcIlwiLCBcImZhLXNvbGlkIGZhLXRyYXNoLWNhbiBlZGl0LWljb25cIik7XG4gICAgICAgIGNvbnN0IGNsZWFyQWxsVGV4dCA9IF9tYWtlTmV3RWxlbWVudChcInNwYW5cIiwgXCJjbGVhci1hbGwtYnV0dG9uLXRleHRcIiwgXCJmaXgtYW5pbVwiLCBcIkNsZWFyIEFsbCBEYXRhXCIpO1xuICAgICAgICBjbGVhckFsbEJ1dHRvbi5hcHBlbmRDaGlsZChjbGVhckFsbEljb24pO1xuICAgICAgICBjbGVhckFsbEJ1dHRvbi5hcHBlbmRDaGlsZChjbGVhckFsbFRleHQpO1xuICAgICAgICBjbGVhckFsbEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjbGVhckFsbEJ1dHRvbik7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChzaWRlUGFuZWwpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5EaXNwbGF5KTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uV3JhcHBlcik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2xlYXJBbGxCdXR0b25Db250YWluZXIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIH07XG5cbiAgICAvL2dvZXMgdGhyb3VnaCBhbGwgb2YgdGhlIHByb2plY3RzIGFuZCBpZiBhIHRhc2sncyBkdWUgZGF0ZSBpcyBvZmZzZXQgYnkgYSBjZXJ0YWluIGRheXMgZnJvbSB0b2RheVxuICAgIC8vaXQgYWRkcyB0aGF0IHRhc2sgdG8gYW4gYXJyYXlcbiAgICBjb25zdCBfZ2V0VGFza3MgPSBvZmZzZXQgPT4ge1xuICAgICAgICBsZXQgdG9kYXlzVGFza3MgPSBbXTtcbiAgICAgICAgY29uc3QgZGF5UmVxdWVzdGVkID0gZm9ybWF0KGFkZCh0b0RhdGUobmV3IERhdGUoKSksIHsgZGF5czogb2Zmc2V0IH0pLCBcIk1NL2RkL3l5eXlcIik7XG4gICAgICAgIHByb2plY3RGdW5jdGlvbnMuZ2V0QWxsUHJvamVjdHMoKS5mb3JFYWNoKHByb2ogPT4ge1xuICAgICAgICAgICAgcHJvai50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZm9ybWF0KHBhcnNlKHRhc2suZ2V0RGF0ZSgpLCBcIk1NL2RkL3l5eXlcIiwgbmV3IERhdGUoKSksIFwiTU0vZGQveXl5eVwiKTtcbiAgICAgICAgICAgICAgICBpZiAodGFza0RhdGUgPT0gZGF5UmVxdWVzdGVkICYmIHRhc2suZ2V0Q29tcGxldGUoKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0b2RheXNUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRvZGF5c1Rhc2tzO1xuICAgIH07XG5cbiAgICAvL2dldHMgYWxsIHRhc2tzIHRoYXQgYXJlIGR1ZSBlYXJsaWVyIHRoYW4gdG9kYXlcbiAgICBjb25zdCBfZ2V0T3ZlcmR1ZVRhc2tzID0gKCkgPT4ge1xuICAgICAgICBsZXQgb3ZlcmR1ZVRhc2tzID0gW107XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgpKTtcbiAgICAgICAgcHJvamVjdEZ1bmN0aW9ucy5nZXRBbGxQcm9qZWN0cygpLmZvckVhY2gocHJvaiA9PiB7XG4gICAgICAgICAgICBwcm9qLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBpc0JlZm9yZShwYXJzZSh0YXNrLmdldERhdGUoKSwgXCJNTS9kZC95eXl5XCIsIG5ldyBEYXRlKCkpLCB0b2RheSkgJiZcbiAgICAgICAgICAgICAgICAgICAgdGFzay5nZXRDb21wbGV0ZSgpID09IGZhbHNlXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJkdWVUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG92ZXJkdWVUYXNrcztcbiAgICB9O1xuXG4gICAgLy90YWtlcyBpbiBhbiBhcnJheSBvZiBlcnJvciBtZXNzYWdlcyBhbmQgcHV0cyB0aGVtIGRpcmVjdGx5IGFib3ZlIHRoZSBwYXJlbnQgb2YgdGhhdCBlbGVtZW50XG4gICAgLy9tYWtlcyB0aGUgZXJyb3IgbWVzc2FnZXMgZGlzc2FwcGVhciBhZnRlciB0aGV5J3ZlIGJlZW4gcmVhZFxuICAgIGNvbnN0IF9kaXNwbGF5RXJyb3JzID0gKGUsIGlucHV0KSA9PiB7XG4gICAgICAgIGlucHV0LmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gX21ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwiZXJyb3ItbWVzc2FnZVwiLCBlbGUpO1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBwYXJlbnQucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoZXJyb3IsIHBhcmVudCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IChlcnJvci5zdHlsZS5vcGFjaXR5ID0gMCksIDIwMDApO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBlcnJvci5yZW1vdmUoKSwgNDAwMCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy90b2dnbGVzIHdoZXRoZXIgb3Igbm90IGFuIGVsZW1lbnQgaGFzIHRoZSBjbGFzcyBcImFjdGl2ZVwiLlxuICAgIGNvbnN0IF90b2dnbGVBY3RpdmUgPSBlbGVtZW50SUQgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudChlbGVtZW50SUQpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKVxuICAgICAgICAgICAgPyBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIDogZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH07XG5cbiAgICAvL3B1dHMgYW4gYXJyYXkgb2YgZWxlbWVudHMgdW5kZXJuZWF0aCBhIHBhcmVudCBlbGVtZW50XG4gICAgY29uc3QgX3JldmVhbEFycmF5ID0gKHBhcmVudCwgYXJyYXksIHR5cGUsIGR1ZSA9IFwiXCIpID0+IHtcbiAgICAgICAgX3JlbW92ZUFsbENoaWxkcmVuKHBhcmVudCwgMSk7XG4gICAgICAgIGFycmF5LmZvckVhY2goKGVsZW0sIGluZGV4KSA9PlxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgYCR7dHlwZX0tJHtpbmRleH1gLFxuICAgICAgICAgICAgICAgICAgICBgJHt0eXBlfS1zaWRlLWxhYmVsICR7ZHVlfSAke3R5cGUgPT0gXCJwcm9qZWN0XCIgJiYgZWxlbS5pc1NlbGVjdGVkKCkgPyBcInNlbGVjdGVkXCIgOiBcIlwifWAsXG4gICAgICAgICAgICAgICAgICAgIGVsZW0uZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICB7IFwiZGF0YS1pbmRleFwiOiBgJHtpbmRleH1gIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIC8vc2hvd3MgdGhlIHRhc2tzIHRoYXQgYXJlIGR1ZSB0b2RheSBvbiB0aGUgc2lkZSBwYW5lbFxuICAgIGNvbnN0IF9kaXNwbGF5VG9kYXlTaWRlID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWdldEVsZW1lbnQoXCIjdG9kYXktdG9nZ2xlXCIpLmNsYXNzTGlzdC5jb250YWlucyhcImNsb3NlZFwiKSkge1xuICAgICAgICAgICAgX3JldmVhbEFycmF5KGdldEVsZW1lbnQoXCIjdG9kYXlzLXRvZG8tc2lkZVwiKS5wYXJlbnRFbGVtZW50LCBfZ2V0VGFza3MoMCksIFwidGFza1wiLCBcInRvZGF5XCIpO1xuICAgICAgICB9XG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZVRvZGF5KCk7XG4gICAgfTtcbiAgICAvL3Nob3dzIHRoZSB0YXNrcyB0aGF0IGFyZSBwYXN0IGR1ZSBvbiB0aGUgc2lkZSBwYW5lbFxuICAgIGNvbnN0IF9kaXNwbGF5T3ZlcmR1ZVNpZGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICghZ2V0RWxlbWVudChcIiNvdmVyZHVlLXRvZ2dsZVwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG9zZWRcIikpIHtcbiAgICAgICAgICAgIF9yZXZlYWxBcnJheShcbiAgICAgICAgICAgICAgICBnZXRFbGVtZW50KFwiI292ZXJkdWUtdG9kby1zaWRlXCIpLnBhcmVudEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgX2dldE92ZXJkdWVUYXNrcygpLFxuICAgICAgICAgICAgICAgIFwidGFza1wiLFxuICAgICAgICAgICAgICAgIFwib3ZlcmR1ZVwiXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZU92ZXJkdWUoKTtcbiAgICB9O1xuICAgIC8vdXBkYXRlcyBhbGwgb2YgdGhlIHRhc2sgY29udGFpbmluZyBzaWRlIHBhbmVsIGNhdGVnb3JpZXNcbiAgICBjb25zdCByZWZyZXNoVGFza1NpZGVzID0gKCkgPT4ge1xuICAgICAgICBfZGlzcGxheU92ZXJkdWVTaWRlKCk7XG4gICAgICAgIF9kaXNwbGF5VG9kYXlTaWRlKCk7XG4gICAgfTtcbiAgICAvL3Nob3dzIGFsbCBwcm9qZWN0cyBvbiB0aGUgc2lkZSBwYW5lbFxuICAgIGNvbnN0IF9kaXNwbGF5UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIF9yZXZlYWxBcnJheShcbiAgICAgICAgICAgIGdldEVsZW1lbnQoXCIjcHJvamVjdHMtc2lkZVwiKS5wYXJlbnRFbGVtZW50LFxuICAgICAgICAgICAgcHJvamVjdEZ1bmN0aW9ucy5nZXRBbGxQcm9qZWN0cygpLFxuICAgICAgICAgICAgXCJwcm9qZWN0XCJcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy9yZXR1cm5zIHdoYXQgdGhlIGN1cnJlbnQgc2VsZWN0ZWQgcHJvamVjdCBudW1iZXIgaXNcbiAgICBjb25zdCBfZ2V0UHJvamVjdE51bWJlciA9ICgpID0+IHtcbiAgICAgICAgaWYgKGdldEVsZW1lbnQoXCIjcHJvamVjdHMtdG9nZ2xlXCIpLmNsYXNzTGlzdC5jb250YWlucyhcImNsb3NlZFwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIGdldEVsZW1lbnQoXCIucHJvamVjdC1jb250YWluZXJcIikuZGF0YXNldC5wcm9qZWN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGdldEVsZW1lbnQoXCIuc2VsZWN0ZWRcIikuZGF0YXNldC5pbmRleDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvL3B1dHMgdGhlIHRpdGxlIG9mIHRoZSBwcm9qZWN0IGFuZCB0aGUgZWRpdCBidXR0b25zIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2VcbiAgICBjb25zdCBfZGlzcGxheVRpdGxlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TnVtYmVyID0gX2dldFByb2plY3ROdW1iZXIoKTtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKClbcHJvamVjdE51bWJlcl07XG4gICAgICAgIGNvbnN0IHRpdGxlV3JhcHBlciA9IGdldEVsZW1lbnQoXCIucHJvamVjdC10aXRsZS13cmFwcGVyXCIpO1xuICAgICAgICBjb25zdCB0aXRsZUJ1dHRvbkNvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRpdGxlLWJ1dHRvbi1jb250YWluZXJgLFxuICAgICAgICAgICAgXCJidXR0b24tY29udGFpbmVyIHByb2plY3RcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10aXRsZWAsXG4gICAgICAgICAgICBcInByb2plY3QtdGl0bGVcIixcbiAgICAgICAgICAgIGAke2N1cnJlbnRQcm9qZWN0LmdldE5hbWUoKX1gXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZWRpdFRpdGxlQnV0dG9uID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIGBwcm9qZWN0LSR7cHJvamVjdE51bWJlcn0tZWRpdC1idXR0b25gLFxuICAgICAgICAgICAgXCJlZGl0LWJ1dHRvbiB0aXRsZVwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGVkaXRUaXRsZUljb24gPSBfbWFrZU5ld0VsZW1lbnQoXCJpXCIsIFwiXCIsIFwiZmEtc29saWQgZmEtcGVuY2lsIGVkaXQtaWNvblwiKTtcbiAgICAgICAgY29uc3QgZWRpdFRpdGxlVGV4dCA9IF9tYWtlTmV3RWxlbWVudChcInNwYW5cIiwgXCJcIiwgXCJlZGl0LXRleHRcIiwgXCJFZGl0IFRpdGxlXCIpO1xuICAgICAgICBlZGl0VGl0bGVCdXR0b24uYXBwZW5kQ2hpbGQoZWRpdFRpdGxlSWNvbik7XG4gICAgICAgIGVkaXRUaXRsZUJ1dHRvbi5hcHBlbmRDaGlsZChlZGl0VGl0bGVUZXh0KTtcblxuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIGBwcm9qZWN0LSR7cHJvamVjdE51bWJlcn0tZGVsZXRlLWJ1dHRvbmAsXG4gICAgICAgICAgICBcImVkaXQtYnV0dG9uIGRlbGV0ZVwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RJY29uID0gX21ha2VOZXdFbGVtZW50KFwiaVwiLCBcIlwiLCBcImZhLXNvbGlkIGZhLXRyYXNoIGVkaXQtaWNvblwiKTtcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdFRleHQgPSBfbWFrZU5ld0VsZW1lbnQoXCJzcGFuXCIsIFwiXCIsIFwiZWRpdC10ZXh0XCIsIFwiRGVsZXRlIFByb2plY3RcIik7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEljb24pO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RUZXh0KTtcblxuICAgICAgICB0aXRsZUJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0VGl0bGVCdXR0b24pO1xuICAgICAgICB0aXRsZUJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcblxuICAgICAgICBpZiAodGl0bGVXcmFwcGVyLmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX3JlbW92ZUFsbENoaWxkcmVuKHRpdGxlV3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGl0bGVXcmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgICAgIHRpdGxlV3JhcHBlci5hcHBlbmRDaGlsZCh0aXRsZUJ1dHRvbkNvbnRhaW5lcik7XG4gICAgfTtcblxuICAgIC8vY2xlYXJzIHRoZSBzZWxlY3Rpb24gb24gdGhlIHNpZGUgcGFuZWxcbiAgICBjb25zdCBfY2xlYXJTaWRlU2VsZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBnZXRFbGVtZW50cyhcIi5wcm9qZWN0LXNpZGUtbGFiZWxcIikuZm9yRWFjaChlbGUgPT4gZWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSk7XG4gICAgICAgIGdldEVsZW1lbnQoXCIjdG9kYXlzLXRvZG8tc2lkZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGdldEVsZW1lbnQoXCIjb3ZlcmR1ZS10b2RvLXNpZGVcIikuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICBnZXRFbGVtZW50KFwiI2RheXMtdG9kby1zaWRlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgcHJvamVjdEZ1bmN0aW9ucy5nZXRBbGxQcm9qZWN0cygpLmZvckVhY2gocHJvaiA9PiBwcm9qLm1hcmtTZWxlY3RlZChmYWxzZSkpO1xuICAgIH07XG5cbiAgICAvL2NsZWFycyBhbmQgbWFya3MgdGhlIHNlbGVjdGlvbiBmb3IgYSBnaXZlbiB0YXNrIGNhdGVnb3J5XG4gICAgY29uc3QgX3NldFRhc2tTZWxlY3Rpb24gPSB0eXBlID0+IHtcbiAgICAgICAgX2NsZWFyU2lkZVNlbGVjdGlvbigpO1xuICAgICAgICBnZXRFbGVtZW50KGAjJHt0eXBlfS10b2RvLXNpZGVgKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgfTtcblxuICAgIC8vaGlnaGxpZ2h0cyB3aGF0IHByb2plY3QgKG9yIHRvZGF5cyB0YXNrcykgaXMgc2VsZWN0ZWQuIERlZmF1bHRzIHRvIHRoZSBmaXJzdCBwcm9qZWN0XG4gICAgY29uc3QgX21hcmtTZWxlY3RlZFByb2plY3QgPSBlID0+IHtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdC1zaWRlLWxhYmVsXCIpKSB7XG4gICAgICAgICAgICAgICAgX2NsZWFyU2lkZVNlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgIHByb2plY3RGdW5jdGlvbnMuZ2V0QWxsUHJvamVjdHMoKVtlLnRhcmdldC5kYXRhc2V0LmluZGV4XS5tYXJrU2VsZWN0ZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9kYXlcIikpIHtcbiAgICAgICAgICAgICAgICBfc2V0VGFza1NlbGVjdGlvbihcInRvZGF5c1wiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm92ZXJkdWVcIikpIHtcbiAgICAgICAgICAgICAgICBfc2V0VGFza1NlbGVjdGlvbihcIm92ZXJkdWVcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXlzXCIpKSB7XG4gICAgICAgICAgICAgICAgX3NldFRhc2tTZWxlY3Rpb24oXCJkYXlzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3NldFRhc2tTZWxlY3Rpb24oXCJ0b2RheXNcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9yZXR1cm5zIHdoaWNoIG51bWJlciBlbGVtZW50IGEgdGFzayBpcyBpbiBhIGdpdmVuIGxpc3QuXG4gICAgY29uc3QgZ2V0VGFza0luZGV4ID0gZSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBBcnJheS5mcm9tKGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGRyZW4pLmluZGV4T2YoZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUpIC0gMVxuICAgICAgICApO1xuICAgIH07XG5cbiAgICAvL2FkZHMgdGhlIEFkZCBUYXNrIGVudHJ5IHRvIHRoZSBib3R0b20gb2YgdGhlIHByb2plY3RcbiAgICBjb25zdCBfZGlzcGxheVRhc2tJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGdldEVsZW1lbnQoXCIucHJvamVjdC1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tDb250YWluZXIgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJhZGQtdGFzay1jb250YWluZXJcIiwgXCJpbnB1dC1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tOYW1lID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgICAgXCJhZGQtdGFzay1uYW1lLWlucHV0XCIsXG4gICAgICAgICAgICBcImFkZC10YXNrLWluZm9cIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlRhc2sgTmFtZVwiIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0Rlc2NyaXB0aW9uID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgICAgXCJhZGQtdGFzay1kZXNjcmlwdGlvbi1pbnB1dFwiLFxuICAgICAgICAgICAgXCJhZGQtdGFzay1pbmZvXCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogXCJUYXNrIERlc2NyaXB0aW9uXCIgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBhZGRUYXNrRGF0ZSA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgICAgIFwiYWRkLXRhc2stZGF0ZS1pbnB1dFwiLFxuICAgICAgICAgICAgXCJhZGQtdGFzay1pbmZvXCIsXG4gICAgICAgICAgICBcIkR1ZSBEYXRlXCIsXG4gICAgICAgICAgICB7IHR5cGU6IFwiZGF0ZVwiIH0sXG4gICAgICAgICAgICB7IG1pbjogc3RhcnRPZkRheShuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXSB9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tQcmlvcml0eSA9IF9tYWtlTmV3RWxlbWVudChcInNlbGVjdFwiLCBcImFkZC10YXNrLXByaW9yaXR5LWlucHV0XCIsIFwiYWRkLXRhc2staW5mb1wiLCBcIlwiKTtcbiAgICAgICAgY29uc3QgYWRkVGFza1ByaW9yaXR5RGVmYXVsdCA9IF9tYWtlTmV3RWxlbWVudChcIm9wdGlvblwiLCBcIlwiLCBcIlwiLCBcIlByaW9yaXR5XCIsIHsgdmFsdWU6IDAgfSk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tQcmlvcml0eUxvdyA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIFwiTG93XCIsXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkxvd1wiIH0sXG4gICAgICAgICAgICB7IHN0eWxlOiBcImJhY2tncm91bmQtY29sb3I6I0UxQURBRFwiIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgYWRkVGFza1ByaW9yaXR5TWVkaXVtID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgXCJNZWRpdW1cIixcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiTWVkaXVtXCIgfSxcbiAgICAgICAgICAgIHsgc3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjojRUZFRjM4XCIgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBhZGRUYXNrUHJpb3JpdHlIaWdoID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgXCJIaWdoXCIsXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkhpZ2hcIiB9LFxuICAgICAgICAgICAgeyBzdHlsZTogXCJiYWNrZ3JvdW5kLWNvbG9yOiM5RENEOERcIiB9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBfbWFrZU5ld0VsZW1lbnQoXCJidXR0b25cIiwgXCJhZGQtdGFzay1idXR0b25cIiwgXCJhZGQtYnV0dG9uXCIsIFwiQWRkIE5ldyBUYXNrXCIpO1xuXG4gICAgICAgIGFkZFRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChhZGRUYXNrUHJpb3JpdHlEZWZhdWx0KTtcbiAgICAgICAgYWRkVGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKGFkZFRhc2tQcmlvcml0eUxvdyk7XG4gICAgICAgIGFkZFRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChhZGRUYXNrUHJpb3JpdHlNZWRpdW0pO1xuICAgICAgICBhZGRUYXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQoYWRkVGFza1ByaW9yaXR5SGlnaCk7XG5cbiAgICAgICAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrTmFtZSk7XG4gICAgICAgIGFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrRGF0ZSk7XG4gICAgICAgIGFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza1ByaW9yaXR5KTtcbiAgICAgICAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcblxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tDb250YWluZXIpO1xuXG4gICAgICAgIEV2ZW50SGFuZGxlci5jbGVhclRleHRCb3goKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlQWRkVGFza0J1dHRvbigpO1xuICAgIH07XG4gICAgLy93aGVuIGEgcHJvamVjdCBuYW1lIGlzIGNsaWNrZWQgb24gYSB0YXNrLCBicmluZ3MgdXAgdGhlIHNlbGVjdGVkIHByb2plY3RcbiAgICBjb25zdCBsaW5rUHJvamVjdCA9IGUgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0VG9nZ2xlID0gZ2V0RWxlbWVudChcIiNwcm9qZWN0cy10b2dnbGVcIik7XG4gICAgICAgIGlmIChwcm9qZWN0VG9nZ2xlLmNsYXNzTGlzdC5jb250YWlucyhcImNsb3NlZFwiKSkge1xuICAgICAgICAgICAgcHJvamVjdFRvZ2dsZS5jbGljaygpO1xuICAgICAgICB9XG4gICAgICAgIGdldEVsZW1lbnRzKFwiLnByb2plY3Qtc2lkZS1sYWJlbFwiKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW0udGV4dENvbnRlbnQgPT0gZS5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgZWxlbS5jbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy90YWtlcyBhIGdpdmVuIHRhc2sgYW5kIGFkZHMgYSBET00gZW50cnkgaW4gYSBzcGVjaWZpYyBnaXZlbiBpbmRleCBvZiB0aGUgdGFzayBsaXN0XG4gICAgY29uc3QgX2ZpbGxJblRhc2sgPSAodGFzaywgdGFza051bWJlciwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdE51bWJlciA9IHRhc2suZ2V0UHJvamVjdCgpO1xuICAgICAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGdldEVsZW1lbnQoXCIudGFza3MtY29udGFpbmVyXCIpO1xuXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tDb250YWluZXIgPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tY29udGFpbmVyYCxcbiAgICAgICAgICAgIGB0YXNrLWNvbnRhaW5lciAke3Rhc2suZ2V0Q29tcGxldGUoKSA/IFwiY29tcGxldGVcIiA6IFwiXCJ9YCxcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICB7IFwiZGF0YS1wcmlvcml0eVwiOiB0YXNrLmdldFByaW9yaXR5KCkgfSxcbiAgICAgICAgICAgIHsgXCJkYXRhLXRhc2tcIjogdGFza051bWJlciB9LFxuICAgICAgICAgICAgeyBcImRhdGEtcHJvamVjdFwiOiBwcm9qZWN0TnVtYmVyIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbmV3VGFza0NoZWNrYm94ID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgICAgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tY2hlY2tib3hgLFxuICAgICAgICAgICAgXCJ0YXNrLWNoZWNrYm94XCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgIHsgXCJkYXRhLXByb2plY3RcIjogcHJvamVjdE51bWJlciB9LFxuICAgICAgICAgICAgeyBcImRhdGEtdGFza1wiOiB0YXNrTnVtYmVyIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbmV3VGFza05hbWUgPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tbmFtZWAsXG4gICAgICAgICAgICBcInRhc2stbmFtZSB0YXNrLWluZm9cIixcbiAgICAgICAgICAgIHRhc2suZ2V0TmFtZSgpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1kZXNjcmlwdGlvbmAsXG4gICAgICAgICAgICBcInRhc2stZGVzY3JpcHRpb24gdGFzay1pbmZvXCIsXG4gICAgICAgICAgICB0YXNrLmdldERlc2NyaXB0aW9uKClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbmV3VGFza0RhdGUgPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tZGF0ZWAsXG4gICAgICAgICAgICBcInRhc2stZGF0ZSB0YXNrLWluZm9cIixcbiAgICAgICAgICAgIHRhc2suZ2V0RGF0ZSgpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHRhc2tQcm9qZWN0TGFiZWwgPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS1sYWJlbGAsXG4gICAgICAgICAgICBcInRhc2stcHJvamVjdC1pbmZvIHRhc2staW5mb1wiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tFZGl0QnV0dG9uID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIGBwcm9qZWN0LSR7cHJvamVjdE51bWJlcn0tdGFzay0ke3Rhc2tOdW1iZXJ9LWVkaXQtYnV0dG9uYCxcbiAgICAgICAgICAgIFwiZWRpdC1idXR0b25cIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBuZXdUYXNrRWRpdEljb24gPSBfbWFrZU5ld0VsZW1lbnQoXCJpXCIsIFwiXCIsIFwiZmEtc29saWQgZmEtcGVuY2lsIGVkaXQtaWNvblwiKTtcbiAgICAgICAgY29uc3QgbmV3VGFza0VkaXRUZXh0ID0gX21ha2VOZXdFbGVtZW50KFwic3BhblwiLCBcIlwiLCBcImVkaXQtdGV4dFwiLCBcIkVkaXQgVGFza1wiKTtcbiAgICAgICAgY29uc3QgbmV3VGFza0RlbGV0ZUJ1dHRvbiA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1kZWxldGUtYnV0dG9uYCxcbiAgICAgICAgICAgIFwiZWRpdC1idXR0b24gZGVsZXRlXCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbmV3VGFza0RlbGV0ZUljb24gPSBfbWFrZU5ld0VsZW1lbnQoXCJpXCIsIFwiXCIsIFwiZmEtc29saWQgZmEtdHJhc2ggZWRpdC1pY29uXCIpO1xuICAgICAgICBjb25zdCBuZXdUYXNrRGVsZXRlVGV4dCA9IF9tYWtlTmV3RWxlbWVudChcInNwYW5cIiwgXCJcIiwgXCJkZWxldGUtdGV4dFwiLCBcIkRlbGV0ZSBUYXNrXCIpO1xuXG4gICAgICAgIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza0NoZWNrYm94KTtcbiAgICAgICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrTmFtZSk7XG4gICAgICAgIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrRGF0ZSk7XG4gICAgICAgIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1Byb2plY3RMYWJlbCk7XG4gICAgICAgIG5ld1Rhc2tFZGl0QnV0dG9uLmFwcGVuZENoaWxkKG5ld1Rhc2tFZGl0SWNvbik7XG4gICAgICAgIG5ld1Rhc2tFZGl0QnV0dG9uLmFwcGVuZENoaWxkKG5ld1Rhc2tFZGl0VGV4dCk7XG4gICAgICAgIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza0VkaXRCdXR0b24pO1xuICAgICAgICBuZXdUYXNrRGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKG5ld1Rhc2tEZWxldGVJY29uKTtcbiAgICAgICAgbmV3VGFza0RlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChuZXdUYXNrRGVsZXRlVGV4dCk7XG4gICAgICAgIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza0RlbGV0ZUJ1dHRvbik7XG5cbiAgICAgICAgX2luc2VydEFmdGVyKG5ld1Rhc2tDb250YWluZXIsIHRhc2tzQ29udGFpbmVyLmNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlVGFza0J1dHRvbnMobmV3VGFza0VkaXRCdXR0b24sIG5ld1Rhc2tEZWxldGVCdXR0b24pO1xuICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVDaGVja2JveChpbmRleCArIDEpO1xuICAgICAgICBpZiAodGFzay5nZXRDb21wbGV0ZSgpKSB7XG4gICAgICAgICAgICBuZXdUYXNrQ2hlY2tib3guc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcImNoZWNrZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlzUHJvamVjdFNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIGdldEVsZW1lbnRzKFwiLnByb2plY3Qtc2lkZS1sYWJlbFwiKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgICAgICAgICBpc1Byb2plY3RTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWlzUHJvamVjdFNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0YXNrUHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gcHJvamVjdEZ1bmN0aW9ucy5nZXRBbGxQcm9qZWN0cygpW3Byb2plY3ROdW1iZXJdLmdldE5hbWUoKTtcbiAgICAgICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZVByb2plY3RMaW5rKHRhc2tQcm9qZWN0TGFiZWwpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vc2hvd3MgdGhlIGNvbmZpcm0gYW5kIGNhbmNlbCBidXR0b25zIGZvciBlZGl0aW5nIGEgcHJvamVjdFxuICAgIGNvbnN0IF9kaXNwbGF5Q29uZmlybUNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbkNvbnRhaW5lciA9IGdldEVsZW1lbnQoXCIuYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE51bWJlciA9IF9nZXRQcm9qZWN0TnVtYmVyKCk7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1Db250YWluZXIgPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS1kZWxldGUtYnV0dG9uLWNvbnRhaW5lcmAsXG4gICAgICAgICAgICBcImJ1dHRvbi1jb250YWluZXIgY29uY2FuXCJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBjb25maXJtUHJvamVjdEJ1dHRvbiA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LWNvbmZpcm0tZGVsZXRlLWJ1dHRvbmAsXG4gICAgICAgICAgICBcImVkaXQtYnV0dG9uIGNvbmZpcm1cIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjb25maXJtUHJvamVjdEljb24gPSBfbWFrZU5ld0VsZW1lbnQoXCJpXCIsIFwiXCIsIFwiZmEtc29saWQgZmEtY2hlY2sgZWRpdC1pY29uXCIpO1xuICAgICAgICBjb25zdCBjb25maXJtUHJvamVjdFRleHQgPSBfbWFrZU5ld0VsZW1lbnQoXCJzcGFuXCIsIFwiXCIsIFwiZWRpdC10ZXh0XCIsIFwiQ29uZmlybVwiKTtcbiAgICAgICAgY29uZmlybVByb2plY3RCdXR0b24uYXBwZW5kQ2hpbGQoY29uZmlybVByb2plY3RJY29uKTtcbiAgICAgICAgY29uZmlybVByb2plY3RCdXR0b24uYXBwZW5kQ2hpbGQoY29uZmlybVByb2plY3RUZXh0KTtcblxuICAgICAgICBjb25zdCBjYW5jZWxQcm9qZWN0QnV0dG9uID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIGBwcm9qZWN0LSR7cHJvamVjdE51bWJlcn0tY2FuY2VsLWRlbGV0ZS1idXR0b25gLFxuICAgICAgICAgICAgXCJlZGl0LWJ1dHRvbiBjYW5jZWxcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjYW5jZWxQcm9qZWN0SWNvbiA9IF9tYWtlTmV3RWxlbWVudChcImlcIiwgXCJcIiwgXCJmYS1zb2xpZCBmYS14bWFyayBlZGl0LWljb25cIik7XG4gICAgICAgIGNvbnN0IGNhbmNlbFByb2plY3RUZXh0ID0gX21ha2VOZXdFbGVtZW50KFwic3BhblwiLCBcIlwiLCBcImVkaXQtdGV4dFwiLCBcIkNhbmNlbFwiKTtcbiAgICAgICAgY2FuY2VsUHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChjYW5jZWxQcm9qZWN0SWNvbik7XG4gICAgICAgIGNhbmNlbFByb2plY3RCdXR0b24uYXBwZW5kQ2hpbGQoY2FuY2VsUHJvamVjdFRleHQpO1xuXG4gICAgICAgIGNvbmZpcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY29uZmlybVByb2plY3RCdXR0b24pO1xuICAgICAgICBjb25maXJtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbFByb2plY3RCdXR0b24pO1xuXG4gICAgICAgIHByb2plY3RCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY29uZmlybUNvbnRhaW5lcik7XG4gICAgfTtcblxuICAgIGNvbnN0IF9maWxsSW5EYXlzID0gbnVtYmVyT2ZEYXlzID0+IHtcbiAgICAgICAgbGV0IG92ZXJhbGxJbmRleENvdW50ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtYmVyT2ZEYXlzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkaXNwbGF5ZWRUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgdGFza0NvdW50ID0gMDtcbiAgICAgICAgICAgIF9nZXRUYXNrcyhpKS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIF9maWxsSW5UYXNrKHRhc2ssIHRhc2suZ2V0TnVtYmVyKCksIG92ZXJhbGxJbmRleENvdW50KyspO1xuICAgICAgICAgICAgICAgIGRpc3BsYXllZFRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRhc2tDb3VudCsrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZGlzcGxheWVkVGFzaykge1xuICAgICAgICAgICAgICAgIF9pbnNlcnRBZnRlcihcbiAgICAgICAgICAgICAgICAgICAgX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGBkYXktJHtpfS1hd2F5LWxhYmVsYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF5LWF3YXktbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdChhZGQodG9EYXRlKG5ldyBEYXRlKCkpLCB7IGRheXM6IGkgfSksIFwiTU0vZGQveXl5eVwiKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBnZXRFbGVtZW50KFwiLnRhc2tzLWNvbnRhaW5lclwiKS5jaGlsZE5vZGVzW1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RWxlbWVudChcIi50YXNrcy1jb250YWluZXJcIikuY2hpbGROb2Rlcy5sZW5ndGggLSB0YXNrQ291bnQgLSAxXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIG92ZXJhbGxJbmRleENvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IF9jaGVja0RheXMgPSAoZSwgbnVtQ2hhbmdlZCkgPT4ge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2VzID0gW107XG4gICAgICAgIGlmIChudW1DaGFuZ2VkID4gMTQpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZXMucHVzaChcIlBsZWFzZSBlbnRlciBsZXNzIHRoYW4gMTQgZGF5c1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChudW1DaGFuZ2VkIDwgMSkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlcy5wdXNoKFwiUGxlYXNlIGVudGVyIDEgZGF5IG9yIG1vcmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yTWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX2Rpc3BsYXlFcnJvcnMoZSwgZXJyb3JNZXNzYWdlcyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgY2hhbmdlRGF5cyA9IGUgPT4ge1xuICAgICAgICBwcm9qZWN0RnVuY3Rpb25zLnNldEN1cnJlbnREYXlzKGdldEVsZW1lbnQoXCIuZGF5cy1zZWxlY3RvclwiKS52YWx1ZSk7XG4gICAgICAgIGlmIChfY2hlY2tEYXlzKGUsIHByb2plY3RGdW5jdGlvbnMuZ2V0Q3VycmVudERheXMoKSkpIHtcbiAgICAgICAgICAgIF9yZW1vdmVBbGxDaGlsZHJlbihnZXRFbGVtZW50KFwiLnRhc2tzLWNvbnRhaW5lclwiKSwgMSk7XG4gICAgICAgICAgICBfZmlsbEluRGF5cyhwcm9qZWN0RnVuY3Rpb25zLmdldEN1cnJlbnREYXlzKCkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vZGlzcGxheXMgYSBuZXcgcHJvamVjdCB0aGF0IGNhbiBiZSBzZWxlY3RlZCB0byB0aGUgc2lkZSBwYW5lbFxuICAgIGNvbnN0IHNldHVwTmV3UHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgX3RvZ2dsZUFjdGl2ZShcIiNhZGQtcHJvamVjdC1idXR0b25cIik7XG4gICAgICAgIF90b2dnbGVBY3RpdmUoXCIjYWRkLXByb2plY3QtYnV0dG9uLXRleHRcIik7XG4gICAgICAgIGNvbnN0IG5ld1Byb2pJbnB1dENvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcIm5ldy1wcm9qLWlucHV0LWNvbnRhaW5lclwiLCBcImlucHV0LWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgbmV3UHJvaklucHV0ID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgICAgXCJuZXctcHJvai1pbnB1dFwiLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlByb2plY3QgVGl0bGVcIiB9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG5ld1Byb2pBZGRCdXR0b24gPSBfbWFrZU5ld0VsZW1lbnQoXCJidXR0b25cIiwgXCJuZXctcHJvai1hZGQtYnV0dG9uXCIsIFwiYWRkLWJ1dHRvblwiLCBcIlN1Ym1pdFwiKTtcblxuICAgICAgICBuZXdQcm9qSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvaklucHV0KTtcbiAgICAgICAgbmV3UHJvaklucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2pBZGRCdXR0b24pO1xuXG4gICAgICAgIGdldEVsZW1lbnQoXCIjYWRkLXByb2plY3QtYnV0dG9uLWNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChuZXdQcm9qSW5wdXRDb250YWluZXIpO1xuICAgICAgICBFdmVudEhhbmRsZXIuY2xlYXJUZXh0Qm94KCk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5hZGRQcm9qZWN0U3VibWlzc2lvbigpO1xuICAgIH07XG4gICAgLy9jYW5jZWxzIHRoZSBuZXcgUHJvamVjdCBkaWFsb2dcbiAgICBjb25zdCBjYW5jZWxOZXdQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBfdG9nZ2xlQWN0aXZlKFwiI2FkZC1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICAgICAgX3RvZ2dsZUFjdGl2ZShcIiNhZGQtcHJvamVjdC1idXR0b24tdGV4dFwiKTtcbiAgICAgICAgZ2V0RWxlbWVudChcIiNuZXctcHJvai1pbnB1dC1jb250YWluZXJcIikucmVtb3ZlKCk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZUFkZEJ1dHRvbigpO1xuICAgIH07XG5cbiAgICAvL2dldHMgdGhlIGluZm9ybWF0aW9uIHRoYXQgd2FzIGluIHRoZSBuZXcgcHJvamVjdCBkaWFsb2dcbiAgICBjb25zdCBnZXROZXdQcm9qSW5mbyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNuZXctcHJvai1pbnB1dFwiKS52YWx1ZSB9O1xuICAgIH07XG5cbiAgICAvL2NoZWNrcyBvdmVyIHRoZSBpbmZvcm1hdGlvbiBnaXZlbiBmb3IgYSBwcm9qZWN0IGFuZCBkaXNwbGF5cyBlcnJvciBtZXNzYWdlcyBpZiB0aGVyZSBpcyBhbiBpc3N1ZVxuICAgIGNvbnN0IGNoZWNrTmV3UHJvamVjdCA9IChlLCBwcm9qZWN0KSA9PiB7XG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2VzID0gW107XG4gICAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT0gXCJcIikge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlcy5wdXNoKFwiUGxlYXNlIGVudGVyIGEgdGl0bGUgZm9yIHRoZSBwcm9qZWN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvck1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9kaXNwbGF5RXJyb3JzKGUsIGVycm9yTWVzc2FnZXMpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vdXBkYXRlcyB0aGUgc2lkZSBwYW5lbCB0aGF0IGRpc3BsYXlzIHRoZSBsaXN0IG9mIGFsbCBvZiB0aGUgcHJvamVjdHNcbiAgICBjb25zdCB1cGRhdGVQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgaWYgKGdldEVsZW1lbnQoXCIjbmV3LXByb2otaW5wdXQtY29udGFpbmVyXCIpKSB7XG4gICAgICAgICAgICBnZXRFbGVtZW50KFwiI25ldy1wcm9qLWlucHV0LWNvbnRhaW5lclwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIF90b2dnbGVBY3RpdmUoXCIjYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuICAgICAgICAgICAgX3RvZ2dsZUFjdGl2ZShcIiNhZGQtcHJvamVjdC1idXR0b24tdGV4dFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0RWxlbWVudChcIi50aXRsZS1lZGl0XCIpKSB7XG4gICAgICAgICAgICBfZGlzcGxheVRpdGxlKCk7XG4gICAgICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVQcm9qZWN0QnV0dG9ucygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZ2V0RWxlbWVudChcIiNwcm9qZWN0cy10b2dnbGVcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2VkXCIpKSB7XG4gICAgICAgICAgICBfZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVBZGRCdXR0b24oKTtcbiAgICAgICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZVByb2plY3RzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9vcGVucyB1cCB0aGUgZWRpdCBwcm9qZWN0IGRpYWxvZ1xuICAgIGNvbnN0IGRpc3BsYXlFZGl0UHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdE51bWJlciA9IF9nZXRQcm9qZWN0TnVtYmVyKCk7XG4gICAgICAgIGNvbnN0IHByb2plY1RpdGxlID0gcHJvamVjdEZ1bmN0aW9ucy5nZXRBbGxQcm9qZWN0cygpW3Byb2plY3ROdW1iZXJdLmdldE5hbWUoKTtcbiAgICAgICAgY29uc3QgdGl0bGVXcmFwcGVyID0gZ2V0RWxlbWVudChcIi5wcm9qZWN0LXRpdGxlLXdyYXBwZXJcIik7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImlucHV0XCIsXG4gICAgICAgICAgICBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRpdGxlLWlucHV0YCxcbiAgICAgICAgICAgIFwidGl0bGUtZWRpdFwiLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IHByb2plY1RpdGxlIH0sXG4gICAgICAgICAgICB7IFwiZGF0YS1wcm9qZWN0XCI6IHByb2plY3ROdW1iZXIgfVxuICAgICAgICApO1xuICAgICAgICB0aXRsZVdyYXBwZXIuaW5zZXJ0QmVmb3JlKHByb2plY3RUaXRsZUlucHV0LCB0aXRsZVdyYXBwZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgIHRpdGxlV3JhcHBlci5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uQ29udGFpbmVyID0gZ2V0RWxlbWVudChcIi5idXR0b24tY29udGFpbmVyXCIpO1xuICAgICAgICBfcmVtb3ZlQWxsQ2hpbGRyZW4ocHJvamVjdEJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgX2Rpc3BsYXlDb25maXJtQ2FuY2VsKCk7XG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlQ29uZmlybVByb2plY3RFZGl0KGdldEVsZW1lbnQoXCIuZWRpdC1idXR0b24uY29uZmlybVwiKSk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZUNhbmNlbEJ1dHRvbihnZXRFbGVtZW50KFwiLmVkaXQtYnV0dG9uLmNhbmNlbFwiKSk7XG4gICAgfTtcblxuICAgIC8vZGlzcGxheXMgdGhlIGNvbmZpcm1hdGlvbiBvZiBkZWxldGluZyBhIHByb2plY3RcbiAgICBjb25zdCBkaXNwbGF5RGVsZXRlUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbkNvbnRhaW5lciA9IGdldEVsZW1lbnQoXCIuYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgICAgICAgX3JlbW92ZUFsbENoaWxkcmVuKHByb2plY3RCdXR0b25Db250YWluZXIpO1xuXG4gICAgICAgIF9kaXNwbGF5Q29uZmlybUNhbmNlbCgpO1xuXG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZURlbGV0ZVByb2plY3QoZ2V0RWxlbWVudChcIi5lZGl0LWJ1dHRvbi5jb25maXJtXCIpKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlQ2FuY2VsQnV0dG9uKGdldEVsZW1lbnQoXCIuZWRpdC1idXR0b24uY2FuY2VsXCIpKTtcbiAgICB9O1xuICAgIC8vZGlzY2FyZHMgdGhlIGVkaXQgYW5kIGRpc3BsYXlzIHRoZSBpbml0aWFsIHByb2plY3QgdGl0bGVcbiAgICBjb25zdCBjYW5jZWxQcm9qZWN0RWRpdCA9ICgpID0+IHtcbiAgICAgICAgX2Rpc3BsYXlUaXRsZSgpO1xuICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVQcm9qZWN0QnV0dG9ucygpO1xuICAgIH07XG5cbiAgICAvL29wZW5zIGFuZCBjbG9zZXMgdGhlIGVsZW1lbnRzIHVuZGVyIHRoZSBwcm9qZWN0cyBhbmQgdG9kYXkgc2lkZSBoZWFkZXJzIHdoZW4gdGhlIHRvZ2dsZSBidXR0b24gaXMgY2xpY2tlZFxuICAgIGNvbnN0IGV4cGFuZFRvZ2dsZSA9IGUgPT4ge1xuICAgICAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IHR5cGUgPSBcIlwiO1xuICAgICAgICBsZXQgZHVlID0gXCJcIjtcbiAgICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQgPT0gXCJwcm9qZWN0cy1zaWRlXCIpIHtcbiAgICAgICAgICAgIGFycmF5ID0gcHJvamVjdEZ1bmN0aW9ucy5nZXRBbGxQcm9qZWN0cygpO1xuICAgICAgICAgICAgdHlwZSA9IFwicHJvamVjdFwiO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9kYXlcIikpIHtcbiAgICAgICAgICAgIGFycmF5ID0gX2dldFRhc2tzKDApO1xuICAgICAgICAgICAgdHlwZSA9IFwidGFza1wiO1xuICAgICAgICAgICAgZHVlID0gXCJ0b2RheVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3ZlcmR1ZVwiKSkge1xuICAgICAgICAgICAgYXJyYXkgPSBfZ2V0T3ZlcmR1ZVRhc2tzKCk7XG4gICAgICAgICAgICB0eXBlID0gXCJ0YXNrXCI7XG4gICAgICAgICAgICBkdWUgPSBcIm92ZXJkdWVcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2VkXCIpKSB7XG4gICAgICAgICAgICBfcmV2ZWFsQXJyYXkoZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LCBhcnJheSwgdHlwZSwgZHVlKTtcbiAgICAgICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZVNpZGVzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfcmVtb3ZlQWxsQ2hpbGRyZW4oZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiY2xvc2VkXCIpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG5cbiAgICAvL3JldHVybnMgdGhlIGluZm9ybWF0aW9uIGdpdmVuIGJ5IHRoZSBhZGQgdGFzayBkaWFsb2dcbiAgICBjb25zdCBnZXRUYXNrSW5mbyA9IChpbmRleCwgcHJvamVjdE51bWJlcikgPT4ge1xuICAgICAgICBsZXQgZm9ybUluZm87XG4gICAgICAgIGxldCB0YXNrTnVtYmVyO1xuICAgICAgICBpZiAoIXByb2plY3ROdW1iZXIpIHtcbiAgICAgICAgICAgIHByb2plY3ROdW1iZXIgPSBfZ2V0UHJvamVjdE51bWJlcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvcm1JbmZvID0gZ2V0RWxlbWVudHMoXCIuYWRkLXRhc2staW5mb1wiKTtcbiAgICAgICAgICAgIHRhc2tOdW1iZXIgPSBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKClbcHJvamVjdE51bWJlcl0udGFza3MubGVuZ3RoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9ybUluZm8gPSBnZXRFbGVtZW50cyhgI3Byb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7aW5kZXh9LWNvbnRhaW5lciAuZWRpdC10YXNrLWluZm9gKTtcbiAgICAgICAgICAgIHRhc2tOdW1iZXIgPSBpbmRleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogZm9ybUluZm9bMF0udmFsdWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZm9ybUluZm9bMV0udmFsdWUsXG4gICAgICAgICAgICBkYXRlOiBmb3JtSW5mb1syXS52YWx1ZSA/IGZvcm1hdCh0b0RhdGUocGFyc2VJU08oZm9ybUluZm9bMl0udmFsdWUpKSwgXCJNTS9kZC95eXl5XCIpIDogXCJcIixcbiAgICAgICAgICAgIHByaW9yaXR5OiBmb3JtSW5mb1szXS52YWx1ZSxcbiAgICAgICAgICAgIHByb2plY3Q6IHByb2plY3ROdW1iZXIsXG4gICAgICAgICAgICBudW1iZXI6IHRhc2tOdW1iZXIsXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8vY2hlY2tzIHRoZSBpbmZvcm1hdGlvbiBnaXZlbiBpbiBhIG5ldyBvciB1cGRhdGVkIHRhc2sgYW5kIGRpc3BsYXlzIGVycm9yIG1lc3NhZ2VzIGlmIGFueXRoaW5nIGlzIHdyb25nXG4gICAgY29uc3QgY2hlY2tOZXdUYXNrID0gKGUsIHRhc2spID0+IHtcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZXMgPSBbXTtcbiAgICAgICAgaWYgKHRhc2submFtZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzLnB1c2goXCJQbGVhc2UgZW50ZXIgYSBuYW1lIGZvciB0aGUgdGFza1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFzay5kZXNjcmlwdGlvbiA9PSBcIlwiKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzLnB1c2goXCJQbGVhc2UgZW50ZXIgYSBkZXNjcmlwdGlvbiBmb3IgdGhlIHRhc2tcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhc2suZGF0ZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzLnB1c2goXCJQbGVhc2UgZW50ZXIgYSBkdWUgZGF0ZSBmb3IgdGhlIHRhc2tcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gMCkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlcy5wdXNoKFwiUGxlYXNlIGVudGVyIGEgcHJpb3JpdHkgbGV2ZWwgZm9yIHRoZSB0YXNrXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yTWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX2Rpc3BsYXlFcnJvcnMoZSwgZXJyb3JNZXNzYWdlcyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvL3JlZnJlc2hlcyB0aGUgdGFzayBsaXN0IHRvIGRpc3BsYXkgYSBuZXcgb3IgZWRpdGVkIHRhc2tcbiAgICBjb25zdCB1cGRhdGVUYXNrTGlzdCA9IHByb2plY3ROdW1iZXIgPT4ge1xuICAgICAgICBpZiAoZ2V0RWxlbWVudChcIiN0b2RheXMtdG9kby1zaWRlXCIpLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgICAgICBzaG93VG9kYXkoKTtcbiAgICAgICAgfSBlbHNlIGlmIChnZXRFbGVtZW50KFwiI292ZXJkdWUtdG9kby1zaWRlXCIpLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgICAgICBzaG93T3ZlcmR1ZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGdldEVsZW1lbnQoXCIjZGF5cy10b2RvLXNpZGVcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgICAgIGNoYW5nZURheXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdldEVsZW1lbnQoYCNwcm9qZWN0LSR7cHJvamVjdE51bWJlcn1gKS5jbGljaygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZ2V0RWxlbWVudChcIiN0b2RheS10b2dnbGVcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2VkXCIpKSB7XG4gICAgICAgICAgICBfZGlzcGxheVRvZGF5U2lkZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZ2V0RWxlbWVudChcIiNvdmVyZHVlLXRvZ2dsZVwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG9zZWRcIikpIHtcbiAgICAgICAgICAgIF9kaXNwbGF5T3ZlcmR1ZVNpZGUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBfY29uZmlybUNhbmNlbFRhc2sgPSAoY29uZmlybUJ1dHRvbiwgY2FuY2VsQnV0dG9uKSA9PiB7XG4gICAgICAgIGNvbmZpcm1CdXR0b24uZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcImZhLXBlbmNpbFwiKTtcbiAgICAgICAgY29uZmlybUJ1dHRvbi5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwiZmEtY2hlY2tcIik7XG4gICAgICAgIGNvbmZpcm1CdXR0b24ubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiO1xuICAgICAgICBjb25maXJtQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjb25maXJtXCIpO1xuXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwiZmEtdHJhc2hcIik7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwiZmEteG1hcmtcIik7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICB9O1xuXG4gICAgLy9zaG93cyB0aGUgZWRpdCB0YXNrIGRpYWxvZyB3aGVuIHRoZSBlZGl0IHRhc2sgYnV0dG9uIGhhcyBiZWVuIHByZXNzZWQsIGRlZmF1bHRpbmcgd2l0aCB0aGVcbiAgICAvL2N1cnJlbnQgdGFzayBpbmZvcm1hdGlvblxuICAgIGNvbnN0IGRpc3BsYXlFZGl0VGFzayA9IGUgPT4ge1xuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBlLmN1cnJlbnRUYXJnZXQubmV4dFNpYmxpbmc7XG4gICAgICAgIGNvbnN0IHByb2plY3ROdW1iZXIgPSBlZGl0QnV0dG9uLnBhcmVudEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0O1xuICAgICAgICBjb25zdCB0YXNrTnVtYmVyID0gZWRpdEJ1dHRvbi5wYXJlbnRFbGVtZW50LmRhdGFzZXQudGFzaztcbiAgICAgICAgY29uc3QgZWRpdFRhc2sgPSBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKClbcHJvamVjdE51bWJlcl0uZ2V0VGFza3MoKVt0YXNrTnVtYmVyXTtcblxuICAgICAgICBjb25zdCBlZGl0VGFza05hbWUgPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImlucHV0XCIsXG4gICAgICAgICAgICBcImVkaXQtdGFzay1uYW1lLWlucHV0XCIsXG4gICAgICAgICAgICBcImVkaXQtdGFzay1pbmZvXCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogZWRpdFRhc2suZ2V0TmFtZSgpIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZWRpdFRhc2tEZXNjcmlwdGlvbiA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgICAgIFwiZWRpdC10YXNrLWRlc2NyaXB0aW9uLWlucHV0XCIsXG4gICAgICAgICAgICBcImVkaXQtdGFzay1pbmZvXCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogZWRpdFRhc2suZ2V0RGVzY3JpcHRpb24oKSB9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrRGF0ZSA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgICAgIFwiZWRpdC10YXNrLWRhdGUtaW5wdXRcIixcbiAgICAgICAgICAgIFwiZWRpdC10YXNrLWluZm9cIixcbiAgICAgICAgICAgIFwiRHVlIERhdGVcIixcbiAgICAgICAgICAgIHsgdHlwZTogXCJkYXRlXCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IG5ldyBEYXRlKGVkaXRUYXNrLmdldERhdGUoKSkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF0gfSxcbiAgICAgICAgICAgIHsgbWluOiBzdGFydE9mRGF5KG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZWRpdFRhc2tQcmlvcml0eSA9IF9tYWtlTmV3RWxlbWVudChcInNlbGVjdFwiLCBcImVkaXQtdGFzay1wcmlvcml0eS1pbnB1dFwiLCBcImVkaXQtdGFzay1pbmZvXCIsIFwiXCIpO1xuICAgICAgICBjb25zdCBlZGl0VGFza1ByaW9yaXR5TG93ID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgXCJMb3dcIixcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiTG93XCIgfSxcbiAgICAgICAgICAgIHsgc3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjojRTFBREFEXCIgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBlZGl0VGFza1ByaW9yaXR5TWVkaXVtID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgXCJNZWRpdW1cIixcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiTWVkaXVtXCIgfSxcbiAgICAgICAgICAgIHsgc3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjojRUZFRjM4XCIgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBlZGl0VGFza1ByaW9yaXR5SGlnaCA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIFwiSGlnaFwiLFxuICAgICAgICAgICAgeyB2YWx1ZTogXCJIaWdoXCIgfSxcbiAgICAgICAgICAgIHsgc3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjojOURDRDhEXCIgfVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChlZGl0VGFzay5nZXRQcmlvcml0eSgpID09IFwiTG93XCIpIHtcbiAgICAgICAgICAgIGVkaXRUYXNrUHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChlZGl0VGFzay5nZXRQcmlvcml0eSgpID09IFwiTWVkaXVtXCIpIHtcbiAgICAgICAgICAgIGVkaXRUYXNrUHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChlZGl0VGFzay5nZXRQcmlvcml0eSgpID09IFwiSGlnaFwiKSB7XG4gICAgICAgICAgICBlZGl0VGFza1ByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcInNlbGVjdGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGdldEVsZW1lbnRzKGAjcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1jb250YWluZXIgLnRhc2staW5mb2ApLmZvckVhY2goZWxlID0+XG4gICAgICAgICAgICBlbGUucmVtb3ZlKClcbiAgICAgICAgKTtcblxuICAgICAgICBlZGl0VGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKGVkaXRUYXNrUHJpb3JpdHlMb3cpO1xuICAgICAgICBlZGl0VGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKGVkaXRUYXNrUHJpb3JpdHlNZWRpdW0pO1xuICAgICAgICBlZGl0VGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKGVkaXRUYXNrUHJpb3JpdHlIaWdoKTtcblxuICAgICAgICBjb25zdCBlZGl0VGFza0NvbnRhaW5lciA9IGdldEVsZW1lbnQoYCNwcm9qZWN0LSR7cHJvamVjdE51bWJlcn0tdGFzay0ke3Rhc2tOdW1iZXJ9LWNvbnRhaW5lcmApO1xuICAgICAgICBlZGl0VGFza0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoZWRpdFRhc2tOYW1lLCBlZGl0VGFza0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkLnByZXZpb3VzU2libGluZyk7XG4gICAgICAgIGVkaXRUYXNrQ29udGFpbmVyLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgIGVkaXRUYXNrRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBlZGl0VGFza0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkLnByZXZpb3VzU2libGluZ1xuICAgICAgICApO1xuICAgICAgICBlZGl0VGFza0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoZWRpdFRhc2tEYXRlLCBlZGl0VGFza0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkLnByZXZpb3VzU2libGluZyk7XG4gICAgICAgIGVkaXRUYXNrQ29udGFpbmVyLmluc2VydEJlZm9yZShlZGl0VGFza1ByaW9yaXR5LCBlZGl0VGFza0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkLnByZXZpb3VzU2libGluZyk7XG5cbiAgICAgICAgX2NvbmZpcm1DYW5jZWxUYXNrKGVkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbik7XG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlQ29uZmlybVRhc2tFZGl0KGVkaXRCdXR0b24pO1xuICAgIH07XG5cbiAgICBjb25zdCBkaXNwbGF5RGVsZXRlVGFzayA9IGUgPT4ge1xuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBlLmN1cnJlbnRUYXJnZXQucHJldmlvdXNTaWJsaW5nO1xuXG4gICAgICAgIF9jb25maXJtQ2FuY2VsVGFzayhlZGl0QnV0dG9uLCBkZWxldGVCdXR0b24pO1xuICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVDb25maXJtVGFza0RlbGV0ZShkZWxldGVCdXR0b24pO1xuICAgIH07XG5cbiAgICAvL3NldHMgdGFzayBiYWNrIHRvIG9yaWdpbmFsIGJlZm9yZSBlZGl0IHdhcyByZXF1ZXN0ZWRcbiAgICBjb25zdCBjYW5jZWxFZGl0ID0gZSA9PiB7XG4gICAgICAgIHVwZGF0ZVRhc2tMaXN0KGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQucHJvamVjdCk7XG4gICAgfTtcblxuICAgIC8vYnVpbGRzIHRoZSBiYXNpYyBvdXRsaW5lIG9mIGFueSBwYWdlXG4gICAgY29uc3QgX2J1aWxkUGFnZSA9IHR5cGUgPT4ge1xuICAgICAgICBjb25zdCBtYWluRGlzcGxheSA9IGdldEVsZW1lbnQoXCIjbWFpbi1kaXNwbGF5XCIpO1xuICAgICAgICBpZiAobWFpbkRpc3BsYXkuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBtYWluRGlzcGxheS5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhZ2VDb250YWluZXIgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgYCR7dHlwZX0tY29udGFpbmV9YCwgXCJwcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgdGl0bGVXcmFwcGVyID0gX21ha2VOZXdFbGVtZW50KFwiZGl2XCIsIGAke3R5cGV9LXRpdGxlLXdyYXBwZXJgLCBcInByb2plY3QtdGl0bGUtd3JhcHBlclwiKTtcbiAgICAgICAgY29uc3QgdGFza3NDb250YWluZXIgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgYCR7dHlwZX0tdGFza3MtY29udGFpbmVyYCwgXCJ0YXNrcy1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHRhc2tzV3JhcHBlciA9IF9tYWtlTmV3RWxlbWVudChcImRpdlwiLCBgJHt0eXBlfS10YXNrcy13cmFwcGVyYCwgXCJ0YXNrcy13cmFwcGVyXCIpO1xuICAgICAgICBjb25zdCBzcGFjZXIgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVXcmFwcGVyKTtcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BhY2VyKTtcbiAgICAgICAgdGFza3NXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tzQ29udGFpbmVyKTtcbiAgICAgICAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrc1dyYXBwZXIpO1xuICAgICAgICBtYWluRGlzcGxheS5hcHBlbmRDaGlsZChwYWdlQ29udGFpbmVyKTtcbiAgICB9O1xuXG4gICAgLy9kaXNwbGF5cyBhIHByb2plY3QgcGFnZSBiYXNlZCBvbiB3aGF0IHByb2plY3Qgd2FzIHNlbGVjdGVkXG4gICAgY29uc3Qgc2hvd1Byb2plY3QgPSBlID0+IHtcbiAgICAgICAgX21hcmtTZWxlY3RlZFByb2plY3QoZSk7XG4gICAgICAgIGNvbnN0IHByb2plY3ROdW1iZXIgPSBfZ2V0UHJvamVjdE51bWJlcigpO1xuICAgICAgICBfYnVpbGRQYWdlKGUsIGBwcm9qZWN0LSR7cHJvamVjdE51bWJlcn1gKTtcblxuICAgICAgICBnZXRFbGVtZW50KFwiLnByb2plY3QtY29udGFpbmVyXCIpLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLCBwcm9qZWN0TnVtYmVyKTtcbiAgICAgICAgX2Rpc3BsYXlUaXRsZSgpO1xuICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVQcm9qZWN0QnV0dG9ucygpO1xuICAgICAgICBwcm9qZWN0RnVuY3Rpb25zXG4gICAgICAgICAgICAuZ2V0QWxsUHJvamVjdHMoKVxuICAgICAgICAgICAgW3Byb2plY3ROdW1iZXJdLmdldFRhc2tzKClcbiAgICAgICAgICAgIC5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4gX2ZpbGxJblRhc2sodGFzaywgaW5kZXgsIGluZGV4KSk7XG4gICAgICAgIF9kaXNwbGF5VGFza0lucHV0KCk7XG4gICAgfTtcblxuICAgIC8vc2hvd3MgdGhlIFRvZGF5J3MgVGFza3MgcGFnZVxuICAgIGNvbnN0IHNob3dUb2RheSA9IGUgPT4ge1xuICAgICAgICBfbWFya1NlbGVjdGVkUHJvamVjdChlKTtcbiAgICAgICAgX2J1aWxkUGFnZShcInRvZGF5XCIpO1xuXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gZm9ybWF0KHRvRGF0ZShuZXcgRGF0ZSgpKSwgXCJNTS9kZC95eXl5XCIpO1xuICAgICAgICBjb25zdCB0b2RheVRpdGxlID0gX21ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwidG9kYXktdGl0bGVcIiwgXCJwcm9qZWN0LXRpdGxlXCIsIGBUb2RheTogJHt0b2RheX1gKTtcbiAgICAgICAgZ2V0RWxlbWVudChcIi5wcm9qZWN0LXRpdGxlLXdyYXBwZXJcIikuYXBwZW5kQ2hpbGQodG9kYXlUaXRsZSk7XG5cbiAgICAgICAgX2dldFRhc2tzKDApLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiBfZmlsbEluVGFzayh0YXNrLCB0YXNrLmdldE51bWJlcigpLCBpbmRleCkpO1xuICAgIH07XG5cbiAgICAvL2JyaW5ncyB1cCB0aGUgcGFnZSB0aGF0IHNob3dzIGFsbCBvZiB0aGUgb3ZlcmR1ZSB0YXNrc1xuICAgIGNvbnN0IHNob3dPdmVyZHVlID0gZSA9PiB7XG4gICAgICAgIF9tYXJrU2VsZWN0ZWRQcm9qZWN0KGUpO1xuICAgICAgICBfYnVpbGRQYWdlKFwib3ZlcmR1ZVwiKTtcblxuICAgICAgICBjb25zdCBvdmVyZHVlVGl0bGUgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJvdmVyZHVlLXRpdGxlXCIsIFwicHJvamVjdC10aXRsZVwiLCBcIk92ZXJkdWVcIik7XG4gICAgICAgIGdldEVsZW1lbnQoXCIucHJvamVjdC10aXRsZS13cmFwcGVyXCIpLmFwcGVuZENoaWxkKG92ZXJkdWVUaXRsZSk7XG5cbiAgICAgICAgX2dldE92ZXJkdWVUYXNrcygpLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiBfZmlsbEluVGFzayh0YXNrLCB0YXNrLmdldE51bWJlcigpLCBpbmRleCkpO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93RGF5cyA9IGUgPT4ge1xuICAgICAgICBfbWFya1NlbGVjdGVkUHJvamVjdChlKTtcbiAgICAgICAgX2J1aWxkUGFnZShcImRheXNcIik7XG5cbiAgICAgICAgY29uc3QgdGl0bGVXcmFwcGVyID0gZ2V0RWxlbWVudChcIi5wcm9qZWN0LXRpdGxlLXdyYXBwZXJcIik7XG4gICAgICAgIGNvbnN0IGRheXNTZWxlY3RvciA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgICAgIFwiZGF5cy1zZWxlY3RvclwiLFxuICAgICAgICAgICAgXCJkYXlzLXNlbGVjdG9yXCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgeyB0eXBlOiBcIm51bWJlclwiIH0sXG4gICAgICAgICAgICB7IG1heDogMTQgfSxcbiAgICAgICAgICAgIHsgbWluOiAxIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBwcm9qZWN0RnVuY3Rpb25zLmdldEN1cnJlbnREYXlzKCkgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBkYXlzVGl0bGUgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJkYXlzLXRpdGxlXCIsIFwicHJvamVjdC10aXRsZVwiLCBcIkRheXMgQXdheTogXCIpO1xuICAgICAgICB0aXRsZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZGF5c1RpdGxlKTtcbiAgICAgICAgdGl0bGVXcmFwcGVyLmFwcGVuZENoaWxkKGRheXNTZWxlY3Rvcik7XG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlRGF5c1NlbGVjdG9yKCk7XG5cbiAgICAgICAgX2ZpbGxJbkRheXMocHJvamVjdEZ1bmN0aW9ucy5nZXRDdXJyZW50RGF5cygpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY29uZmlybUNsZWFyQWxsID0gZSA9PiB7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gXCJDbGljayBoZXJlIGFnYWluIHRvIGNsZWFyIGFsbCBkYXRhXCI7XG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZUNvbmZpcm1DbGVhckFsbCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBjYW5jZWxDbGVhckFsbCA9IGUgPT4ge1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9IFwiQ2xlYXIgQWxsIERhdGFcIjtcbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlQ2xlYXJBbGxCdXR0b24oKTtcbiAgICB9O1xuICAgIC8vaW5pdGFsaXplcyB0aGUgd2VicGFnZSBhbmQgc3RhcnRzIHRoZSBiYXNpYyBsaXN0ZW5lcnNcbiAgICBjb25zdCBzdGFydFBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIF9tYWtlU3RhcnRpbmdQYWdlKCk7XG4gICAgICAgIHNldFRpbWVvdXQoX2ZpeFN0YXJ0aW5nQW5pbWF0aW9ucywgMSk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5pbml0U3RhcnRpbmdMaXN0ZW5lcnMoKTtcbiAgICAgICAgcHJvamVjdEZ1bmN0aW9ucy5sb2FkUHJvamVjdHMoKTtcbiAgICAgICAgX2Rpc3BsYXlUb2RheVNpZGUoKTtcbiAgICAgICAgX2Rpc3BsYXlQcm9qZWN0cygpO1xuICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVTaWRlcygpO1xuICAgICAgICBnZXRFbGVtZW50KFwiI3RvZGF5cy10b2RvLXNpZGVcIikuY2xpY2soKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0RWxlbWVudCxcbiAgICAgICAgZ2V0RWxlbWVudHMsXG4gICAgICAgIHJlbW92ZVRleHQsXG4gICAgICAgIGNoZWNrTmV3UHJvamVjdCxcbiAgICAgICAgc2V0dXBOZXdQcm9qZWN0LFxuICAgICAgICBjYW5jZWxOZXdQcm9qZWN0LFxuICAgICAgICByZWZyZXNoVGFza1NpZGVzLFxuICAgICAgICBnZXROZXdQcm9qSW5mbyxcbiAgICAgICAgdXBkYXRlUHJvamVjdExpc3QsXG4gICAgICAgIGV4cGFuZFRvZ2dsZSxcbiAgICAgICAgc2hvd1Byb2plY3QsXG4gICAgICAgIGRpc3BsYXlEZWxldGVQcm9qZWN0LFxuICAgICAgICBnZXRUYXNrSW5mbyxcbiAgICAgICAgZ2V0VGFza0luZGV4LFxuICAgICAgICBjaGVja05ld1Rhc2ssXG4gICAgICAgIGRpc3BsYXlFZGl0UHJvamVjdCxcbiAgICAgICAgZGlzcGxheUVkaXRUYXNrLFxuICAgICAgICBkaXNwbGF5RGVsZXRlVGFzayxcbiAgICAgICAgbGlua1Byb2plY3QsXG4gICAgICAgIHVwZGF0ZVRhc2tMaXN0LFxuICAgICAgICBjYW5jZWxFZGl0LFxuICAgICAgICBjYW5jZWxQcm9qZWN0RWRpdCxcbiAgICAgICAgc2hvd1RvZGF5LFxuICAgICAgICBzaG93T3ZlcmR1ZSxcbiAgICAgICAgc2hvd0RheXMsXG4gICAgICAgIHN0YXJ0UGFnZSxcbiAgICAgICAgY2hhbmdlRGF5cyxcbiAgICAgICAgc29ydEFycmF5LFxuICAgICAgICBjb25maXJtQ2xlYXJBbGwsXG4gICAgICAgIGNhbmNlbENsZWFyQWxsLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET01NYW5pcDtcbiIsImltcG9ydCBET01NYW5pcCBmcm9tIFwiLi9ET01NYW5pcFwiO1xuaW1wb3J0IHsgcHJvamVjdEZ1bmN0aW9ucyB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmNvbnN0IEV2ZW50SGFuZGxlciA9ICgoKSA9PiB7XG4gICAgLy9hY3RpdmF0ZXMgdGhlIEFkZCBwcm9qZWN0IGJ1dHRvblxuICAgIGNvbnN0IGNsZWFyVGV4dEJveCA9ICgpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudHMoXCJpbnB1dFt0eXBlPSd0ZXh0JyBpXVwiKS5mb3JFYWNoKGVsZSA9PlxuICAgICAgICAgICAgZWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5yZW1vdmVUZXh0LCB7XG4gICAgICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnRzKFwiaW5wdXRbdHlwZT0ndGV4dCcgaV1cIikuZm9yRWFjaChlbGUgPT5cbiAgICAgICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAucmVtb3ZlVGV4dCwgeyBvbmNlOiB0cnVlIH0pXG4gICAgICAgICk7XG4gICAgfTtcbiAgICAvL2FjdGl2YXRlcyB0aGUgYWRkIGJ1dHRvbiBhbmQgdGhlIHNpZGUgdG9nZ2xlc1xuICAgIGNvbnN0IGFjdGl2YXRlQWRkQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI2FkZC1wcm9qZWN0LWJ1dHRvblwiKS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuY2FuY2VsTmV3UHJvamVjdCk7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIjYWRkLXByb2plY3QtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5zZXR1cE5ld1Byb2plY3QpO1xuICAgIH07XG4gICAgY29uc3QgYWN0aXZhdGVDbGVhckFsbEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNjbGVhci1hbGwtYnV0dG9uXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIERPTU1hbmlwLmNhbmNlbENsZWFyQWxsKTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNjbGVhci1hbGwtYnV0dG9uXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5jb25maXJtQ2xlYXJBbGwpO1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI2NsZWFyLWFsbC1idXR0b25cIikucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgIHByb2plY3RGdW5jdGlvbnMuY29uZmlybUFsbENsZWFyXG4gICAgICAgICk7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIjY2xlYXItYWxsLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuY29uZmlybUNsZWFyQWxsKTtcbiAgICB9O1xuXG4gICAgLy9hY3RpdmF0ZXMgdGhlIGxpc3RlbmVycyBmb3IgYWxsIG9mIGNsaWNrYWJsZSBidXR0b25zIGF0IHRoZSBzdGFydCBvZiB0aGUgcGFnZSBsb2FkXG4gICAgY29uc3QgaW5pdFN0YXJ0aW5nTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBhY3RpdmF0ZUFkZEJ1dHRvbigpO1xuICAgICAgICBhY3RpdmF0ZUNsZWFyQWxsQnV0dG9uKCk7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnRzKFwiLmRyb3Bkb3duLXRvZ2dsZVwiKS5mb3JFYWNoKGVsZSA9PlxuICAgICAgICAgICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5leHBhbmRUb2dnbGUsIHtcbiAgICAgICAgICAgICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy9jaGFuZ2VzIHRoZSBhZGQgcHJvamVjdCBidXR0b24gdG8gY2FuY2VsIGFkZGluZyBwcm9qZWN0IGFuZCBhY3RpdmF0ZXMgdGhlIHN1Ym1pdCBidXR0b25cbiAgICBjb25zdCBhZGRQcm9qZWN0U3VibWlzc2lvbiA9ICgpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNhZGQtcHJvamVjdC1idXR0b25cIikucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTU1hbmlwLnNldHVwTmV3UHJvamVjdCk7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIjYWRkLXByb2plY3QtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5jYW5jZWxOZXdQcm9qZWN0KTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNuZXctcHJvai1hZGQtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0RnVuY3Rpb25zLmFkZFByb2plY3QpO1xuICAgIH07XG5cbiAgICAvL2NsaWNraW5nIHRoZSBUb2RheSBoZWFkZXIgb3IgYW55IG9mIHRoZSB0YXNrcyBmb3IgdG9kYXkgYnJpbmdzIHVwIHRoZSBUb2RheSBwYWdlXG4gICAgY29uc3QgYWN0aXZhdGVUb2RheSA9ICgpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiN0b2RheXMtdG9kby1zaWRlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5zaG93VG9kYXkpO1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50cyhcIi50YXNrLXNpZGUtbGFiZWwudG9kYXlcIikuZm9yRWFjaChlbGUgPT5cbiAgICAgICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuc2hvd1RvZGF5KVxuICAgICAgICApO1xuICAgIH07XG4gICAgLy9jbGlja2luZyB0aGUgT3ZlcmR1ZSBoZWFkZXIgb3IgYW55IG9mIHRoZSB0YXNrIHRoYXQgYXJlIE92ZXJkdWUgYnJpbmdzIHVwIHRoZSBPdmVyZHVlIHBhZ2VcbiAgICBjb25zdCBhY3RpdmF0ZU92ZXJkdWUgPSAoKSA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIjb3ZlcmR1ZS10b2RvLXNpZGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTU1hbmlwLnNob3dPdmVyZHVlKTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudHMoXCIudGFzay1zaWRlLWxhYmVsLm92ZXJkdWVcIikuZm9yRWFjaChlbGUgPT5cbiAgICAgICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuc2hvd092ZXJkdWUpXG4gICAgICAgICk7XG4gICAgfTtcbiAgICAvL2NsaWNraW5nIHRoZSBPdmVyZHVlIGhlYWRlciBvciBhbnkgb2YgdGhlIHRhc2sgdGhhdCBhcmUgT3ZlcmR1ZSBicmluZ3MgdXAgdGhlIE92ZXJkdWUgcGFnZVxuICAgIGNvbnN0IGFjdGl2YXRlRGF5cyA9ICgpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNkYXlzLXRvZG8tc2lkZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuc2hvd0RheXMpO1xuICAgIH07XG5cbiAgICAvL21ha2VzIHRoZSBwcm9qZWN0cyBjbGlja2FibGUsIG1haW50YWlucyBvbmx5IG9uZSBhY3Rpb24gbGlzdGVuZXIgb24gZWFjaCBwcm9qZWN0XG4gICAgY29uc3QgYWN0aXZhdGVQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudHMoXCIucHJvamVjdC1zaWRlLWxhYmVsXCIpLmZvckVhY2goZWxlID0+XG4gICAgICAgICAgICBlbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTU1hbmlwLnNob3dQcm9qZWN0KVxuICAgICAgICApO1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50cyhcIi5wcm9qZWN0LXNpZGUtbGFiZWxcIikuZm9yRWFjaChlbGUgPT5cbiAgICAgICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuc2hvd1Byb2plY3QpXG4gICAgICAgICk7XG4gICAgfTtcbiAgICAvL3R1cm5zIG9uIGFsbCBzaWRlIHBhbmVsIHBhZ2VzXG4gICAgY29uc3QgYWN0aXZhdGVTaWRlcyA9ICgpID0+IHtcbiAgICAgICAgYWN0aXZhdGVUb2RheSgpO1xuICAgICAgICBhY3RpdmF0ZU92ZXJkdWUoKTtcbiAgICAgICAgYWN0aXZhdGVEYXlzKCk7XG4gICAgICAgIGFjdGl2YXRlUHJvamVjdHMoKTtcbiAgICB9O1xuICAgIC8vYWN0aXZhdGVzIHRoZSBlZGl0IHByb2plY3QgYnV0dG9uc1xuICAgIGNvbnN0IGFjdGl2YXRlUHJvamVjdEJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIuZWRpdC1idXR0b24udGl0bGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTU1hbmlwLmRpc3BsYXlFZGl0UHJvamVjdCk7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIuZWRpdC1idXR0b24uZGVsZXRlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5kaXNwbGF5RGVsZXRlUHJvamVjdCk7XG4gICAgfTtcbiAgICAvL2FjdGl2YXRlcyB0aGUgY2FuY2VsIHByb2plY3QtZWRpdCBidXR0b25cbiAgICBjb25zdCBhY3RpdmF0ZUNhbmNlbEJ1dHRvbiA9IGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuY2FuY2VsUHJvamVjdEVkaXQpO1xuICAgIH07XG4gICAgLy9jaGFuZ2VzIHRoZSBwcm9qZWN0IHRpdGxlIGVkaXQgaW50byB0aGUgY29uZmlybSBidXR0b25cbiAgICBjb25zdCBhY3RpdmF0ZUNvbmZpcm1Qcm9qZWN0RWRpdCA9IGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuZGlzcGxheUVkaXRQcm9qZWN0KTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0RnVuY3Rpb25zLmNvbmZpcm1Qcm9qZWN0RWRpdCk7XG4gICAgfTtcbiAgICAvL2FjdGl2YXRlcyB0aGUgZGVsZXRlIHByb2plY3QgYnV0dG9uXG4gICAgY29uc3QgYWN0aXZhdGVEZWxldGVQcm9qZWN0ID0gYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0RnVuY3Rpb25zLmRlbGV0ZVByb2plY3QpO1xuICAgIH07XG5cbiAgICAvL2FjdGl2YXRlcyB0aGUgYWRkIG5ldyB0YXNrIGJ1dHRvblxuICAgIGNvbnN0IGFjdGl2YXRlQWRkVGFza0J1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNhZGQtdGFzay1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3RGdW5jdGlvbnMuYWRkVGFzayk7XG4gICAgfTtcbiAgICAvL2FjdGl2YXRlcyB0aGUgZWRpdCB0YXNrIGJ1dHRvbiBmb3IgdGhhdCBzcGVjaWZpYyB0YXNrXG4gICAgY29uc3QgX2FjdGl2YXRlRWRpdFRhc2tCdXR0b24gPSBidXR0b24gPT4ge1xuICAgICAgICBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3RGdW5jdGlvbnMuY29uZmlybVRhc2tFZGl0KTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5kaXNwbGF5RWRpdFRhc2spO1xuICAgIH07XG4gICAgY29uc3QgX2FjdGl2YXRlRGVsZXRlVGFza0J1dHRvbiA9IGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdEZ1bmN0aW9ucy5jb25maXJtVGFza0RlbGV0ZSk7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuZGlzcGxheURlbGV0ZVRhc2spO1xuICAgIH07XG4gICAgY29uc3QgYWN0aXZhdGVUYXNrQnV0dG9ucyA9IChlZGl0LCBkZWwpID0+IHtcbiAgICAgICAgX2FjdGl2YXRlRWRpdFRhc2tCdXR0b24oZWRpdCk7XG4gICAgICAgIF9hY3RpdmF0ZURlbGV0ZVRhc2tCdXR0b24oZGVsKTtcbiAgICB9O1xuICAgIC8vbWFrZXMgdGhlIHRhc2sncyBjaGVjayBib3ggY2xpY2thYmxlIHRvIG1hcmsgdGFza3MgYXMgY29tcGxldGVcbiAgICBjb25zdCBhY3RpdmF0ZUNoZWNrYm94ID0gaW5kZXggPT4ge1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiLnRhc2tzLWNvbnRhaW5lclwiKS5jaGlsZE5vZGVzW2luZGV4XS5maXJzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgcHJvamVjdEZ1bmN0aW9ucy50b2dnbGVUYXNrQ29tcGxldGVcbiAgICAgICAgKTtcbiAgICB9O1xuICAgIC8vSWYgYSBwcm9qZWN0IHRpdGxlIGlzIHNob3duIG9uIGEgdGFzaywgY2xpY2tpbmcgaXQgZ29lcyB0byB0aGUgYXNzb2NpYXRlZCBwcm9qZWN0XG4gICAgY29uc3QgYWN0aXZhdGVQcm9qZWN0TGluayA9IGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAubGlua1Byb2plY3QpO1xuICAgIH07XG4gICAgLy9jaGFuZ2VzIHRoZSBidXR0b24gdG8gZWRpdCBhIHRhc2sgaW50byBhIGNvbmZpcm1hdGlvbiBidXR0b24gYW5kIGFjdGl2YXRlcyB0aGUgY2FuY2VsIGJ1dHRvblxuICAgIGNvbnN0IGFjdGl2YXRlQ29uZmlybVRhc2tFZGl0ID0gYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5kaXNwbGF5RWRpdFRhc2spO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3RGdW5jdGlvbnMuY29uZmlybVRhc2tFZGl0KTtcbiAgICAgICAgYnV0dG9uLm5leHRTaWJsaW5nLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5kaXNwbGF5RGVsZXRlVGFzayk7XG4gICAgICAgIGJ1dHRvbi5uZXh0U2libGluZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuY2FuY2VsRWRpdCk7XG4gICAgfTtcbiAgICBjb25zdCBhY3RpdmF0ZUNvbmZpcm1UYXNrRGVsZXRlID0gYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLnByZXZpb3VzU2libGluZy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuZGlzcGxheUVkaXRUYXNrKTtcbiAgICAgICAgYnV0dG9uLnByZXZpb3VzU2libGluZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdEZ1bmN0aW9ucy5jb25maXJtVGFza0RlbGV0ZSk7XG4gICAgICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuZGlzcGxheURlbGV0ZVRhc2spO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTU1hbmlwLmNhbmNlbEVkaXQpO1xuICAgIH07XG4gICAgY29uc3QgYWN0aXZhdGVEYXlzU2VsZWN0b3IgPSAoKSA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIuZGF5cy1zZWxlY3RvclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIERPTU1hbmlwLmNoYW5nZURheXMpO1xuICAgIH07XG5cbiAgICBjb25zdCBhY3RpdmF0ZUNvbmZpcm1DbGVhckFsbCA9ICgpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNjbGVhci1hbGwtYnV0dG9uXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5jb25maXJtQ2xlYXJBbGwpO1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI2NsZWFyLWFsbC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3RGdW5jdGlvbnMuY29uZmlybUFsbENsZWFyKTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNjbGVhci1hbGwtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIERPTU1hbmlwLmNhbmNlbENsZWFyQWxsKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWN0aXZhdGVBZGRCdXR0b24sXG4gICAgICAgIGluaXRTdGFydGluZ0xpc3RlbmVycyxcbiAgICAgICAgYWRkUHJvamVjdFN1Ym1pc3Npb24sXG4gICAgICAgIGFjdGl2YXRlVG9kYXksXG4gICAgICAgIGFjdGl2YXRlUHJvamVjdHMsXG4gICAgICAgIGFjdGl2YXRlT3ZlcmR1ZSxcbiAgICAgICAgYWN0aXZhdGVTaWRlcyxcbiAgICAgICAgY2xlYXJUZXh0Qm94LFxuICAgICAgICBhY3RpdmF0ZVByb2plY3RCdXR0b25zLFxuICAgICAgICBhY3RpdmF0ZUFkZFRhc2tCdXR0b24sXG4gICAgICAgIGFjdGl2YXRlQ2hlY2tib3gsXG4gICAgICAgIGFjdGl2YXRlUHJvamVjdExpbmssXG4gICAgICAgIGFjdGl2YXRlVGFza0J1dHRvbnMsXG4gICAgICAgIGFjdGl2YXRlQ29uZmlybVByb2plY3RFZGl0LFxuICAgICAgICBhY3RpdmF0ZUNvbmZpcm1UYXNrRWRpdCxcbiAgICAgICAgYWN0aXZhdGVDb25maXJtVGFza0RlbGV0ZSxcbiAgICAgICAgYWN0aXZhdGVDYW5jZWxCdXR0b24sXG4gICAgICAgIGFjdGl2YXRlRGVsZXRlUHJvamVjdCxcbiAgICAgICAgYWN0aXZhdGVEYXlzU2VsZWN0b3IsXG4gICAgICAgIGFjdGl2YXRlQ2xlYXJBbGxCdXR0b24sXG4gICAgICAgIGFjdGl2YXRlQ29uZmlybUNsZWFyQWxsLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudEhhbmRsZXI7XG4iLCJleHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IoaW5pdFRpdGxlLCB0YXNrcyA9IFtdLCBjb21wbGV0ZWQgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBpbml0VGl0bGU7XG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG4gICAgZ2V0VGFza3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICAgIH1cbiAgICBpc0NvbXBsZXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGVkO1xuICAgIH1cbiAgICBpc1NlbGVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZDtcbiAgICB9XG4gICAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgfVxuICAgIGFkZFRhc2sobmV3VGFzaykge1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgfVxuICAgIG1hcmtDb21wbGV0ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHZhbHVlO1xuICAgIH1cbiAgICBtYXJrU2VsZWN0ZWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHZhbHVlO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBwcm9qZWN0LCBudW1iZXIsIGNvbXBsZXRlZCA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICBnZXROYW1lID0gKCkgPT4gdGhpcy5uYW1lO1xuICAgIGdldERlc2NyaXB0aW9uID0gKCkgPT4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICBnZXREYXRlID0gKCkgPT4gdGhpcy5kdWVEYXRlO1xuICAgIGdldFByaW9yaXR5ID0gKCkgPT4gdGhpcy5wcmlvcml0eTtcbiAgICBnZXROb3RlcyA9ICgpID0+IHRoaXMubm90ZXM7XG4gICAgZ2V0UHJvamVjdCA9ICgpID0+IHRoaXMucHJvamVjdDtcbiAgICBnZXRDb21wbGV0ZSA9ICgpID0+IHRoaXMuY29tcGxldGVkO1xuICAgIGdldE51bWJlciA9ICgpID0+IHRoaXMubnVtYmVyO1xuXG4gICAgdG9nZ2xlQ29tcGxldGUgPSAoKSA9PiAodGhpcy5jb21wbGV0ZWQgPSAhdGhpcy5jb21wbGV0ZWQpO1xuICAgIHJlZHVjZVByb2plY3QgPSAoKSA9PiB0aGlzLnByb2plY3QtLTtcbiAgICByZWR1Y2VUYXNrID0gKCkgPT4gdGhpcy50YXNrLS07XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0RnVuY3Rpb25zIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vVGFza1wiO1xuXG5jb25zdCBkYXRhU3RvcmFnZSA9ICgoKSA9PiB7XG4gICAgLy90aGlzIHRha2VzIHRoZSBjdXJyZW50IGFycmF5IG9mIHByb2plY3RzIGFuZCBzYXZlcyB0aGUgY29udGVudHMgaW50byBhIEpTT04gZmlsZSBpbiBsb2NhbHN0b3JhZ2VcbiAgICBjb25zdCBzYXZlRGF0YSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxsUHJvaiA9IHByb2plY3RGdW5jdGlvbnMuZ2V0QWxsUHJvamVjdHMoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qKSk7XG4gICAgfTtcblxuICAgIC8vZmluZHMgdGhlIGRhdGEgaW4gbG9jYWwgc3RvcmFnZSwgcnVucyB0aHJvdWdoIHRoZSBhcnJheSBhbmQgY29udmVydHMgZWFjaCBlbnRyeSBpbnRvIHRoZSBhcHByb3ByaWF0ZVxuICAgIC8vcHJvamVjdCBvciB0YXNrIGluIG9yZGVyIHRvIG1haW50YWluIG9iamVjdCBtZXRob2RzLiBJZiB0aGVyZSBpcyBubyBkYXRhLCByZXR1cm5zIGFuIGVtcHR5IGFycmF5XG4gICAgY29uc3QgbG9hZERhdGEgPSAoKSA9PiB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RzXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBsb2FkZWREYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RzXCIpKTtcbiAgICAgICAgICAgIGNvbnN0IHJldHVybkRhdGEgPSBbXTtcbiAgICAgICAgICAgIGxvYWRlZERhdGEuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRQcm9qZWN0VGl0bGUgPSBlbGUubmFtZTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2FkUHJvamVjdHNUYXNrcyA9IFtdO1xuICAgICAgICAgICAgICAgIGVsZS50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2FkUHJvamVjdHNUYXNrcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRhc2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sucHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5ub3RlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnByb2plY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5udW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2FkUHJvamVjdENvbXBsZXRlZCA9IGVsZS5jb21wbGV0ZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuRGF0YS5wdXNoKG5ldyBQcm9qZWN0KGxvYWRQcm9qZWN0VGl0bGUsIGxvYWRQcm9qZWN0c1Rhc2tzLCBsb2FkUHJvamVjdENvbXBsZXRlZCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmV0dXJuRGF0YTtcbiAgICAgICAgfSBlbHNlIHJldHVybiBbXTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYXJEYXRhID0gKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlByb2plY3RzXCIsIFwiXCIpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBzYXZlRGF0YSwgbG9hZERhdGEsIGNsZWFyRGF0YSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YVN0b3JhZ2U7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IERPTU1hbmlwIGZyb20gXCIuL0RPTU1hbmlwXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vVGFza1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL1Byb2plY3RcIjtcbmltcG9ydCBkYXRhU3RvcmFnZSBmcm9tIFwiLi9kYXRhU3RvcmFnZVwiO1xuXG4vL1RoaXMgZXhwb3J0IGNvbnRhaW5zIGFsbCBvZiB0aGUgZnVuY3Rpb25zIHJlbGF0ZWQgdG8gYWNjZXNzaW5nIHRoZSBwcm9qZWN0IGRhdGFcbi8vYW5kIHRhc2sgZGF0YSB0aHJvdWdob3V0IHRoZSB3ZWJzaXRlXG5leHBvcnQgY29uc3QgcHJvamVjdEZ1bmN0aW9ucyA9ICgoKSA9PiB7XG4gICAgbGV0IF9hbGxQcm9qZWN0cyA9IFtdO1xuXG4gICAgbGV0IF9jdXJyZW50RGF5c1JlcXVlc3RlZCA9IDE7XG5cbiAgICAvL3VzZWQgd2hlbiBhIHByb2plY3QgaXMgZGVsZXRlZCwgbWFrZXMgYWxsIG9mIHRoZSB0YXNrcyB1bmRlciBlYWNoIHByb2plY3QgZ28gdG8gdGhlaXIgY3VycmVudFxuICAgIC8vcHJvamVjdCdzIGluZGV4IGluIHRoZSBhbGxQcm9qZWN0cyBhcnJheVxuICAgIGNvbnN0IF9yZW51bWJlclByb2plY3RzID0gcHJvamVjdE51bWJlciA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSBfYWxsUHJvamVjdHMubGVuZ3RoIC0gMTsgaSA+PSBwcm9qZWN0TnVtYmVyOyBpLS0pIHtcbiAgICAgICAgICAgIF9hbGxQcm9qZWN0c1tpXS50YXNrcy5mb3JFYWNoKHRhc2sgPT4gdGFzay5yZWR1Y2VQcm9qZWN0KCkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBfcmVudW1iZXJUYXNrcyA9IChwcm9qZWN0TnVtYmVyLCB0YXNrTnVtYmVyKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSBfYWxsUHJvamVjdHNbcHJvamVjdE51bWJlcl0udGFza3MubGVuZ3RoIC0gMTsgaSA+PSB0YXNrTnVtYmVyOyBpLS0pIHtcbiAgICAgICAgICAgIF9hbGxQcm9qZWN0c1twcm9qZWN0TnVtYmVyXS50YXNrc1tpXS5yZWR1Y2VUYXNrKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IF9zb3J0VGFza3MgPSBwcm9qZWN0TnVtYmVyID0+IHtcbiAgICAgICAgY29uc3Qgc29ydGVkVGFza3MgPSBET01NYW5pcC5zb3J0QXJyYXkoX2FsbFByb2plY3RzW3Byb2plY3ROdW1iZXJdLmdldFRhc2tzKCkpO1xuICAgICAgICBfYWxsUHJvamVjdHNbcHJvamVjdE51bWJlcl0udGFza3MgPSBzb3J0ZWRUYXNrcy5tYXAoZWxlID0+IGVsZSk7XG4gICAgfTtcblxuICAgIC8vZ2V0cyB0aGUgaW5mbyB0aGF0IHdhcyBwdXQgaW50byB0aGUgaW5wdXQsIGNoZWNrcyBpZiBpdCBpcyBhY2NlcHRhYmxlLCBhZGRzIGl0IHRvIHRoZVxuICAgIC8vYWxsUHJvamVjdHMgYXJyYXkgaWYgaXQgaXMsIGFuZCBzYXZlcyB0byBsb2NhbHN0b3JhZ2VcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RJbmZvID0gRE9NTWFuaXAuZ2V0TmV3UHJvakluZm8oKTtcbiAgICAgICAgY29uc3QgZ29vZFByb2plY3QgPSBET01NYW5pcC5jaGVja05ld1Byb2plY3QoZSwgbmV3UHJvamVjdEluZm8pO1xuICAgICAgICBpZiAoZ29vZFByb2plY3QpIHtcbiAgICAgICAgICAgIF9hbGxQcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KG5ld1Byb2plY3RJbmZvLm5hbWUpKTtcbiAgICAgICAgICAgIERPTU1hbmlwLnVwZGF0ZVByb2plY3RMaXN0KCk7XG4gICAgICAgICAgICBkYXRhU3RvcmFnZS5zYXZlRGF0YSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvL2dldHMgdGhlIGluZm8gdGhhdCB3YXMgcHV0IGludG8gdGhlIGlucHV0cywgY2hlY2tzIGlmIGl0IGlzIGFsbCBhY2NlcHRhYmxlLCBhZGRzIGl0IHRvIHRoZVxuICAgIC8vYWxsUHJvamVjdHMgYXJyYXkgdW5kZXIgdGhlIGNvcnJlY3QgcHJvamVjdCBpZiBpdCBpcywgYW5kIHNhdmVzIHRvIGxvY2Fsc3RvcmFnZVxuICAgIGNvbnN0IGFkZFRhc2sgPSBlID0+IHtcbiAgICAgICAgY29uc3QgbmV3VGFza0luZm8gPSBET01NYW5pcC5nZXRUYXNrSW5mbygpO1xuICAgICAgICBjb25zdCBnb29kVGFzayA9IERPTU1hbmlwLmNoZWNrTmV3VGFzayhlLCBuZXdUYXNrSW5mbyk7XG4gICAgICAgIGlmIChnb29kVGFzaykge1xuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKFxuICAgICAgICAgICAgICAgIG5ld1Rhc2tJbmZvLm5hbWUsXG4gICAgICAgICAgICAgICAgbmV3VGFza0luZm8uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgbmV3VGFza0luZm8uZGF0ZSxcbiAgICAgICAgICAgICAgICBuZXdUYXNrSW5mby5wcmlvcml0eSxcbiAgICAgICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgICAgIG5ld1Rhc2tJbmZvLnByb2plY3QsXG4gICAgICAgICAgICAgICAgbmV3VGFza0luZm8ubnVtYmVyXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TnVtYmVyID0gbmV3VGFza0luZm8ucHJvamVjdDtcbiAgICAgICAgICAgIF9hbGxQcm9qZWN0c1twcm9qZWN0TnVtYmVyXS50YXNrcy5wdXNoKG5ld1Rhc2spO1xuXG4gICAgICAgICAgICBfc29ydFRhc2tzKHByb2plY3ROdW1iZXIpO1xuXG4gICAgICAgICAgICBET01NYW5pcC51cGRhdGVUYXNrTGlzdChwcm9qZWN0TnVtYmVyKTtcbiAgICAgICAgICAgIGRhdGFTdG9yYWdlLnNhdmVEYXRhKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vZG9lcyB0aGUgc2FtZSBhcyBhIG5ldyBwcm9qZWN0LCBidXQgZ2V0dGluZyB0aGUgaW5mb3JtYXRpb24gZnJvbSBkaWZmZXJlbnQgbG9jYXRpb25zIGFuZFxuICAgIC8vaW5zdGVhZCBvZiBhZGRpbmcgYSBuZXcgcHJvamVjdCwgYWRqdXN0cyB0aGUgcHJvamVjdCBhdCBhIGNlcnRhaW4gaW5kZXhcbiAgICBjb25zdCBjb25maXJtUHJvamVjdEVkaXQgPSBlID0+IHtcbiAgICAgICAgY29uc3QgZWRpdFRpdGxlID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIi50aXRsZS1lZGl0XCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcm9qZWN0TnVtYmVyID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5kYXRhc2V0LnByb2plY3Q7XG4gICAgICAgIGNvbnN0IGdvb2RQcm9qZWN0ID0gRE9NTWFuaXAuY2hlY2tOZXdQcm9qZWN0KGUsIHsgbmFtZTogZWRpdFRpdGxlIH0pO1xuICAgICAgICBpZiAoZ29vZFByb2plY3QpIHtcbiAgICAgICAgICAgIF9hbGxQcm9qZWN0c1twcm9qZWN0TnVtYmVyXS5zZXROYW1lKGVkaXRUaXRsZSk7XG4gICAgICAgICAgICBET01NYW5pcC51cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgICAgICAgICAgZGF0YVN0b3JhZ2Uuc2F2ZURhdGEoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvL2RvZXMgdGhlIHNhbWUgYXMgYSBuZXcgdGFzaywgYnV0IGdldHRpbmcgdGhlIGluZm9ybWF0aW9uIGZyb20gZGlmZmVyZW50IGxvY2F0aW9ucyBhbmRcbiAgICAvL2luc3RlYWQgb2YgYWRkaW5nIGEgbmV3IHRhc2ssIGFkanVzdHMgdGhlIHRhc2sgYXQgYSBjZXJ0YWluIGluZGV4IHVuZGVyIGEgc3BlY2lmaWMgcHJvamVjdFxuXG4gICAgY29uc3QgY29uZmlybVRhc2tFZGl0ID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC50YXNrO1xuICAgICAgICBjb25zdCBwcm9qZWN0TnVtYmVyID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0O1xuICAgICAgICBjb25zdCBlZGl0VGFza0luZm8gPSBET01NYW5pcC5nZXRUYXNrSW5mbyhlZGl0VGFzaywgcHJvamVjdE51bWJlcik7XG4gICAgICAgIGNvbnN0IGdvb2RUYXNrID0gRE9NTWFuaXAuY2hlY2tOZXdUYXNrKGUsIGVkaXRUYXNrSW5mbyk7XG4gICAgICAgIGlmIChnb29kVGFzaykge1xuICAgICAgICAgICAgX2FsbFByb2plY3RzW2VkaXRUYXNrSW5mby5wcm9qZWN0XS50YXNrc1tlZGl0VGFza10gPSBuZXcgVGFzayhcbiAgICAgICAgICAgICAgICBlZGl0VGFza0luZm8ubmFtZSxcbiAgICAgICAgICAgICAgICBlZGl0VGFza0luZm8uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgZWRpdFRhc2tJbmZvLmRhdGUsXG4gICAgICAgICAgICAgICAgZWRpdFRhc2tJbmZvLnByaW9yaXR5LFxuICAgICAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICAgICAgZWRpdFRhc2tJbmZvLnByb2plY3QsXG4gICAgICAgICAgICAgICAgZWRpdFRhc2tJbmZvLm51bWJlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIF9zb3J0VGFza3MocHJvamVjdE51bWJlcik7XG4gICAgICAgICAgICBET01NYW5pcC51cGRhdGVUYXNrTGlzdChwcm9qZWN0TnVtYmVyKTtcbiAgICAgICAgICAgIGRhdGFTdG9yYWdlLnNhdmVEYXRhKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGNvbmZpcm1UYXNrRGVsZXRlID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROdW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LnByb2plY3Q7XG4gICAgICAgIGNvbnN0IHRhc2tOdW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LnRhc2s7XG4gICAgICAgIF9yZW51bWJlclRhc2tzKHByb2plY3ROdW1iZXIsIHRhc2tOdW1iZXIpO1xuICAgICAgICBfYWxsUHJvamVjdHNbcHJvamVjdE51bWJlcl0udGFza3Muc3BsaWNlKHRhc2tOdW1iZXIsIDEpO1xuXG4gICAgICAgIERPTU1hbmlwLnJlZnJlc2hUYXNrU2lkZXMoKTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChgI3Byb2plY3QtJHtwcm9qZWN0TnVtYmVyfWApLmNsaWNrKCk7XG4gICAgICAgIGRhdGFTdG9yYWdlLnNhdmVEYXRhKCk7XG4gICAgfTtcblxuICAgIC8vcmVtb3ZlcyBhIHByb2plY3QgZnJvbSB0aGUgYWxsUHJvamVjdHMgYXJyYXkgYW5kIHNhdmVzIHRvIGxvY2Fsc3RvcmFnZVxuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdE51bWJlciA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIucHJvamVjdC1jb250YWluZXJcIikuZGF0YXNldC5wcm9qZWN0O1xuICAgICAgICBfcmVudW1iZXJQcm9qZWN0cyhwcm9qZWN0TnVtYmVyKTtcbiAgICAgICAgX2FsbFByb2plY3RzLnNwbGljZShwcm9qZWN0TnVtYmVyLCAxKTtcbiAgICAgICAgaWYgKERPTU1hbmlwLmdldEVsZW1lbnQoXCIjcHJvamVjdHMtdG9nZ2xlXCIpLmNsYXNzTGlzdC5jb250YWlucyhcImNsb3NlZFwiKSkge1xuICAgICAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNwcm9qZWN0cy10b2dnbGVcIikuY2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgICBET01NYW5pcC51cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgICAgICBET01NYW5pcC5yZWZyZXNoVGFza1NpZGVzKCk7XG4gICAgICAgIERPTU1hbmlwLnNob3dUb2RheSgpO1xuICAgICAgICBkYXRhU3RvcmFnZS5zYXZlRGF0YSgpO1xuICAgIH07XG5cbiAgICAvL2dldHMgd2hlbiBhIGNoZWNrYm94IGhhcyBiZWVuIGNsaWNrZWQgYW5kIGNoYW5nZXMgdGhlIHRhc2sncyBzdGF0dXMgdG8gY29tcGxldGUgaWYgaXQncyBub3RcbiAgICAvL2NvbXBsZXRlLCBhbmQgcmVtb3ZlcyB0aGF0IGlmIGl0J3MgYmVlbiB1bmNoZWNrZWQuXG4gICAgY29uc3QgdG9nZ2xlVGFza0NvbXBsZXRlID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBwcm9qZWN0TnVtYmVyID0gc2VsZWN0ZWRUYXNrLmRhdGFzZXQucHJvamVjdDtcbiAgICAgICAgY29uc3QgdGFza051bWJlciA9IHNlbGVjdGVkVGFzay5kYXRhc2V0LnRhc2s7XG4gICAgICAgIF9hbGxQcm9qZWN0c1twcm9qZWN0TnVtYmVyXS50YXNrc1t0YXNrTnVtYmVyXS50b2dnbGVDb21wbGV0ZSgpO1xuICAgICAgICBpZiAoRE9NTWFuaXAuZ2V0RWxlbWVudChcIi5zZWxlY3RlZFwiKS5pZCA9PSBcInRvZGF5cy10b2RvLXNpZGVcIikge1xuICAgICAgICAgICAgRE9NTWFuaXAuc2hvd1RvZGF5KGUpO1xuICAgICAgICB9IGVsc2UgaWYgKERPTU1hbmlwLmdldEVsZW1lbnQoXCIuc2VsZWN0ZWRcIikuaWQgPT0gXCJvdmVyZHVlLXRvZG8tc2lkZVwiKSB7XG4gICAgICAgICAgICBET01NYW5pcC5zaG93T3ZlcmR1ZShlKTtcbiAgICAgICAgfSBlbHNlIGlmIChET01NYW5pcC5nZXRFbGVtZW50KFwiLnNlbGVjdGVkXCIpLmlkID09IFwiZGF5cy10b2RvLXNpZGVcIikge1xuICAgICAgICAgICAgRE9NTWFuaXAuY2hhbmdlRGF5cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgRE9NTWFuaXAuc2hvd1Byb2plY3QoZSk7XG4gICAgICAgIH1cbiAgICAgICAgRE9NTWFuaXAucmVmcmVzaFRhc2tTaWRlcygpO1xuICAgICAgICBkYXRhU3RvcmFnZS5zYXZlRGF0YSgpO1xuICAgIH07XG5cbiAgICAvL3JldHVybnMgYSByZWFkLW9ubHkgY29weSBvZiB0aGUgcHJvamVjdHMgaW4gdGhlIGFsbFByb2plY3RzIGFycmF5XG4gICAgY29uc3QgZ2V0QWxsUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfYWxsUHJvamVjdHMubWFwKGVsZSA9PiBlbGUpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0Q3VycmVudERheXMgPSAoKSA9PiBfY3VycmVudERheXNSZXF1ZXN0ZWQ7XG4gICAgY29uc3Qgc2V0Q3VycmVudERheXMgPSBuZXdWYWx1ZSA9PiAoX2N1cnJlbnREYXlzUmVxdWVzdGVkID0gbmV3VmFsdWUpO1xuXG4gICAgLy9zYXZlcyB0aGUgbG9hZGVkIHByb2plY3RzIGZyb20gbG9jYWxzdG9yYWdlIGludG8gdGhlIGFsbHByb2plY3RzIGFycmF5XG4gICAgY29uc3QgbG9hZFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBfYWxsUHJvamVjdHMgPSBkYXRhU3RvcmFnZS5sb2FkRGF0YSgpO1xuICAgIH07XG4gICAgY29uc3QgY29uZmlybUFsbENsZWFyID0gKCkgPT4ge1xuICAgICAgICBkYXRhU3RvcmFnZS5jbGVhckRhdGEoKTtcbiAgICAgICAgX2FsbFByb2plY3RzID0gZGF0YVN0b3JhZ2UubG9hZERhdGEoKTtcbiAgICAgICAgRE9NTWFuaXAudXBkYXRlUHJvamVjdExpc3QoKTtcbiAgICAgICAgRE9NTWFuaXAucmVmcmVzaFRhc2tTaWRlcygpO1xuICAgICAgICBET01NYW5pcC5zaG93VG9kYXkoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkUHJvamVjdCxcbiAgICAgICAgYWRkVGFzayxcbiAgICAgICAgY29uZmlybVByb2plY3RFZGl0LFxuICAgICAgICBjb25maXJtVGFza0VkaXQsXG4gICAgICAgIGNvbmZpcm1UYXNrRGVsZXRlLFxuICAgICAgICBkZWxldGVQcm9qZWN0LFxuICAgICAgICB0b2dnbGVUYXNrQ29tcGxldGUsXG4gICAgICAgIGdldEFsbFByb2plY3RzLFxuICAgICAgICBsb2FkUHJvamVjdHMsXG4gICAgICAgIGdldEN1cnJlbnREYXlzLFxuICAgICAgICBzZXRDdXJyZW50RGF5cyxcbiAgICAgICAgY29uZmlybUFsbENsZWFyLFxuICAgIH07XG59KSgpO1xuXG4vL3J1bnMgYXQgdGhlIGxvYWQgb2YgdGhlIHdlYnNpdGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuY29uc3QgaW5pdFdlYnNpdGUgPSAoKCkgPT4ge1xuICAgIERPTU1hbmlwLnN0YXJ0UGFnZSgpO1xufSkoKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmVhYmU7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICMyZjYzNjM7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZkN2E3O1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBtYXJnaW4tdG9wOiA3MnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuI3NpZGUtcGFuZWwge1xcbiAgICBmbGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY2MzYzO1xcbiAgICBjb2xvcjogI2Y2ZDdhNztcXG4gICAgbWluLWhlaWdodDogODkuM3ZoO1xcbiAgICBwYWRkaW5nLXRvcDogMjhweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XFxufVxcbiNzaWRlLXBhbmVsID4gKiA6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zaWRlLWhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uc2lkZS1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnByb2plY3Qtc2lkZS1sYWJlbCxcXG4udGFzay1zaWRlLWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW46IDRweCAwcHggNHB4IDIwcHg7XFxuICAgIHBhZGRpbmc6IDRweCAxMHB4IDRweCAxMHB4O1xcbn1cXG4udGFzay1zaWRlLWxhYmVsIHtcXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAyMHB4O1xcbn1cXG4uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY1MjUyO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4IDAgMCAzMHB4O1xcbn1cXG4uZHJvcGRvd24tdG9nZ2xlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuLmRyb3Bkb3duLXRvZ2dsZS5hbmltIHtcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcbi5kcm9wZG93bi10b2dnbGUuY2xvc2VkIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKC05MGRlZyk7XFxufVxcblxcbiNtYWluLWRpc3BsYXkge1xcbiAgICBmbGV4OiA0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlM2Q0O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMmY2MzYzO1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgbWFyZ2luOiAwcHggOHB4IDFweDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xcbn1cXG4uYWRkLWJ1dHRvbjphY3RpdmUge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDVweCBibGFjaztcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMTAwcHg7XFxuICAgIHJpZ2h0OiA2MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9uLmFuaW0ge1xcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuI2FkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlcixcXG4jYWRkLXByb2plY3QtYnV0dG9uLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTIwcHg7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b24uYWN0aXZlIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idXR0b24gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMCU7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b24gc3Bhbi5hbmltIHtcXG4gICAgdHJhbnNpdGlvbjogMC4wNXM7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b246aG92ZXIgc3BhbixcXG4jYWRkLXByb2plY3QtYnV0dG9uIHNwYW4uYWN0aXZlIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOGUzZDQ7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMyZjYzNjM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IGJsYWNrO1xcbn1cXG4jbmV3LXByb2otYWRkLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmctdG9wOiA0cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4N2FhYWE7XFxuICAgIGNvbG9yOiAjMmY2MzYzO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmY2MzYzO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbiAgICBwYWRkaW5nOiA0cHggNnB4IDRweCA4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuc2VsZWN0IHtcXG4gICAgaGVpZ2h0OiAzMXB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbiNjbGVhci1hbGwtYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiA0MHB4O1xcbiAgICByaWdodDogNDBweDtcXG59XFxuI2NsZWFyLWFsbC1idXR0b24tY29udGFpbmVyIC5kZWxldGUge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1pbi13aWR0aDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxYWRhZDtcXG59XFxuI2NsZWFyLWFsbC1idXR0b24tY29udGFpbmVyID4gKiB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuLnByb2plY3QtdGl0bGUtd3JhcHBlciB7XFxuICAgIG1heC13aWR0aDogNDUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4udGl0bGUtZWRpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IDZweDtcXG4gICAgcGFkZGluZzogNnB4IDBweCAxMHB4O1xcbiAgICBmbGV4LWdyb3c6IDA7XFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lci5wcm9qZWN0IHtcXG4gICAgd2lkdGg6IDI3LjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuI2FkZC10YXNrLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogNXB4IDEycHg7XFxufVxcblxcbi5hZGQtdGFzay1pbmZvIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcbi50YXNrcy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbn1cXG4udGFzay1jb250YWluZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG4udGFzay1pbmZvIHtcXG4gICAgbWF4LXdpZHRoOiAzMHZ3O1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4udGFzay1wcm9qZWN0LWluZm8ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnRhc2stcHJvamVjdC1pbmZvOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVycm9yLW1lc3NhZ2Uge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGNvbG9yOiAjOTkzYzNjO1xcbiAgICB0cmFuc2l0aW9uOiAycztcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMXM7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIG1hcmdpbjogNnB4O1xcbn1cXG5cXG5bZGF0YS1wcmlvcml0eT1cXFwiTG93XFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFhZGFkO1xcbn1cXG5bZGF0YS1wcmlvcml0eT1cXFwiTWVkaXVtXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZjM4O1xcbn1cXG5bZGF0YS1wcmlvcml0eT1cXFwiSGlnaFxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlkY2Q4ZDtcXG59XFxuXFxuLmVkaXQtYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmY2MzYzO1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxuICAgIG1pbi13aWR0aDogMjcuNXB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5lZGl0LWJ1dHRvbjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xcbn1cXG5cXG4uZWRpdC1idXR0b24gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMCU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG4uZWRpdC1idXR0b246aG92ZXIgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgcGFkZGluZzogMHB4IDVweDtcXG59XFxuXFxuLmVkaXQtYnV0dG9uLmNvbmZpcm06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWRjZDhkO1xcbn1cXG4uZWRpdC1idXR0b24uZGVsZXRlOmhvdmVyLFxcbi5lZGl0LWJ1dHRvbi5jYW5jZWw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFhZGFkO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgaW5wdXQsXFxuLnRhc2stY29udGFpbmVyIHNlbGVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiAjMmY2MzYzO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmY2MzYzO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBwYWRkaW5nOiAycHggNHB4IDJweCA0cHg7XFxufVxcbi50YXNrLWNvbnRhaW5lciBzZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDIzcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiIGldIHtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIuY29tcGxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTFhMWExO1xcbn1cXG5cXG4jZGF5cy1zZWxlY3RvciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5kYXktYXdheS1sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMTAwcHg7XFxufVxcblxcbiNjbGVhci1hbGwtYnV0dG9uOmhvdmVyIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLyogU2Nyb2xsIEJhciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzg3YWFhYTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6ICMyZjYzNjM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyZjYzNjM7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMjY1MjUyO1xcbn1cXG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIHNjcm9sbGJhci1jb2xvcjogIzJmNjM2MyAjMjY1MjUyICM4N2FhYWE7XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RvZG8vc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsNERBQTREO0lBQzVELGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksT0FBTztJQUNQLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTs7SUFFSSxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksT0FBTztJQUNQLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLG1DQUFtQztBQUN2Qzs7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SSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTs7SUFFSSx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQSxlQUFlO0FBQ2Y7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0k7UUFDSSx3Q0FBd0M7SUFDNUM7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZWFiZTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmQ3YTc7XFxuICAgIGNvbG9yOiAjMmY2MzYzO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIG1hcmdpbi10b3A6IDcycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG4jc2lkZS1wYW5lbCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjYzNjM7XFxuICAgIGNvbG9yOiAjZjZkN2E3O1xcbiAgICBtaW4taGVpZ2h0OiA4OS4zdmg7XFxuICAgIHBhZGRpbmctdG9wOiAyOHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcXG59XFxuI3NpZGUtcGFuZWwgPiAqIDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNpZGUtaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5zaWRlLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ucHJvamVjdC1zaWRlLWxhYmVsLFxcbi50YXNrLXNpZGUtbGFiZWwge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbjogNHB4IDBweCA0cHggMjBweDtcXG4gICAgcGFkZGluZzogNHB4IDEwcHggNHB4IDEwcHg7XFxufVxcbi50YXNrLXNpZGUtbGFiZWwge1xcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDIwcHg7XFxufVxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjUyNTI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMCAwIDMwcHg7XFxufVxcbi5kcm9wZG93bi10b2dnbGUge1xcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcbn1cXG4uZHJvcGRvd24tdG9nZ2xlLmFuaW0ge1xcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuLmRyb3Bkb3duLXRvZ2dsZS5jbG9zZWQge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTkwZGVnKTtcXG59XFxuXFxuI21haW4tZGlzcGxheSB7XFxuICAgIGZsZXg6IDQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5hZGQtYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOGUzZDQ7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMyZjYzNjM7XFxuICAgIGNvbG9yOiAjMmY2MzYzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgICBtYXJnaW46IDBweCA4cHggMXB4O1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XFxufVxcblxcbi5hZGQtYnV0dG9uOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDcwJSk7XFxufVxcbi5hZGQtYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNXB4IGJsYWNrO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAxMDBweDtcXG4gICAgcmlnaHQ6IDYwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuI2FkZC1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b24uYW5pbSB7XFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyLFxcbiNhZGQtcHJvamVjdC1idXR0b24uYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMjBweDtcXG59XFxuI2FkZC1wcm9qZWN0LWJ1dHRvbi5hY3RpdmUge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ1dHRvbiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAwJTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuI2FkZC1wcm9qZWN0LWJ1dHRvbiBzcGFuLmFuaW0ge1xcbiAgICB0cmFuc2l0aW9uOiAwLjA1cztcXG59XFxuI2FkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciBzcGFuLFxcbiNhZGQtcHJvamVjdC1idXR0b24gc3Bhbi5hY3RpdmUge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbi5pbnB1dC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTNkNDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzJmNjM2MztcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggYmxhY2s7XFxufVxcbiNuZXctcHJvai1hZGQtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy10b3A6IDRweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg3YWFhYTtcXG4gICAgY29sb3I6ICMyZjYzNjM7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyZjYzNjM7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIHBhZGRpbmc6IDRweCA2cHggNHB4IDhweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5zZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDMxcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuI2NsZWFyLWFsbC1idXR0b24tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDQwcHg7XFxuICAgIHJpZ2h0OiA0MHB4O1xcbn1cXG4jY2xlYXItYWxsLWJ1dHRvbi1jb250YWluZXIgLmRlbGV0ZSB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWluLXdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFhZGFkO1xcbn1cXG4jY2xlYXItYWxsLWJ1dHRvbi1jb250YWluZXIgPiAqIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG4ucHJvamVjdC10aXRsZS13cmFwcGVyIHtcXG4gICAgbWF4LXdpZHRoOiA0NSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi50aXRsZS1lZGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogNnB4O1xcbiAgICBwYWRkaW5nOiA2cHggMHB4IDEwcHg7XFxuICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyLnByb2plY3Qge1xcbiAgICB3aWR0aDogMjcuNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG4uYnV0dG9uLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4jYWRkLXRhc2stYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcXG59XFxuXFxuLmFkZC10YXNrLWluZm8ge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuLnRhc2tzLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxufVxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcbi50YXNrLWluZm8ge1xcbiAgICBtYXgtd2lkdGg6IDMwdnc7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi50YXNrLXByb2plY3QtaW5mbyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4udGFzay1wcm9qZWN0LWluZm86aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZXJyb3ItbWVzc2FnZSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgY29sb3I6ICM5OTNjM2M7XFxuICAgIHRyYW5zaXRpb246IDJzO1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgbWFyZ2luOiA2cHg7XFxufVxcblxcbltkYXRhLXByaW9yaXR5PVxcXCJMb3dcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWFkYWQ7XFxufVxcbltkYXRhLXByaW9yaXR5PVxcXCJNZWRpdW1cXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmMzg7XFxufVxcbltkYXRhLXByaW9yaXR5PVxcXCJIaWdoXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWRjZDhkO1xcbn1cXG5cXG4uZWRpdC1idXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyZjYzNjM7XFxuICAgIGNvbG9yOiAjMmY2MzYzO1xcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcXG4gICAgbWluLXdpZHRoOiAyNy41cHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmVkaXQtYnV0dG9uOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDcwJSk7XFxufVxcblxcbi5lZGl0LWJ1dHRvbiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAwJTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcbi5lZGl0LWJ1dHRvbjpob3ZlciBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xcbn1cXG5cXG4uZWRpdC1idXR0b24uY29uZmlybTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZGNkOGQ7XFxufVxcbi5lZGl0LWJ1dHRvbi5kZWxldGU6aG92ZXIsXFxuLmVkaXQtYnV0dG9uLmNhbmNlbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWFkYWQ7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBpbnB1dCxcXG4udGFzay1jb250YWluZXIgc2VsZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgY29sb3I6ICMyZjYzNjM7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyZjYzNjM7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDJweCA0cHggMnB4IDRweDtcXG59XFxuLnRhc2stY29udGFpbmVyIHNlbGVjdCB7XFxuICAgIGhlaWdodDogMjNweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCIgaV0ge1xcbiAgICBmbGV4LWdyb3c6IDA7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci5jb21wbGV0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMWExYTE7XFxufVxcblxcbiNkYXlzLXNlbGVjdG9yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmRheS1hd2F5LWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMTBweCAwcHggMTBweCAxMDBweDtcXG59XFxuXFxuI2NsZWFyLWFsbC1idXR0b246aG92ZXIgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4vKiBTY3JvbGwgQmFyICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAycHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjODdhYWFhO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDogIzJmNjM2MztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzJmNjM2MztcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMyNjUyNTI7XFxufVxcbkAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgc2Nyb2xsYmFyLWNvbG9yOiAjMmY2MzYzICMyNjUyNTIgIzg3YWFhYTtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCIuL3RvZG8vaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcG9ydGZvbGlvXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3BvcnRmb2xpb1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnRpbWVfYXBpX2pzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9zb3VyLTgzOGY1ZVwiLFwic3JjX0hlYWRlcl9qc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90b2RvL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsicHJvamVjdEZ1bmN0aW9ucyIsIkV2ZW50SGFuZGxlciIsInRvRGF0ZSIsImZvcm1hdCIsImFkZCIsInBhcnNlSVNPIiwicGFyc2UiLCJpc0JlZm9yZSIsInN0YXJ0T2ZEYXkiLCJjcmVhdGVIZWFkZXIiLCJET01NYW5pcCIsImdldEVsZW1lbnQiLCJzZWxlY3RvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIl9tYWtlTmV3RWxlbWVudCIsInR5cGUiLCJpZCIsIkhUTUxDbGFzcyIsInRleHQiLCJuZXdFbGVtIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwiYXR0cmlidXRlcyIsImxlbmd0aCIsImZvckVhY2giLCJhdHQiLCJPYmplY3QiLCJrZXlzIiwicmVtb3ZlVGV4dCIsImUiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJfaW5zZXJ0QWZ0ZXIiLCJuZXdOb2RlIiwiZXhpc3RpbmdOb2RlIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiX3JlbW92ZUFsbENoaWxkcmVuIiwiZWxlbWVudCIsInNraXAiLCJpIiwiY2hpbGROb2RlcyIsInJlbW92ZSIsInNvcnRBcnJheSIsInRhc2tBcnJheSIsInNvcnRlZEFycmF5IiwibWFwIiwiZWxlIiwiaiIsImZpcnN0VGFzayIsImdldERhdGUiLCJEYXRlIiwic2Vjb25kVGFzayIsInBsYWNlaG9sZGVyIiwiX2ZpeFN0YXJ0aW5nQW5pbWF0aW9ucyIsImFuaW1hdGFibGUiLCJjbGFzc0xpc3QiLCJfbWFrZVN0YXJ0aW5nUGFnZSIsImhlYWRlciIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNvbnRlbnQiLCJzaWRlUGFuZWwiLCJ0b2RheVNpZGVIZWFkZXJDb250YWluZXIiLCJ0b2RheXNUb2RvU2lkZSIsInRvZGF5U2lkZURyb3Bkb3duIiwib3ZlcmR1ZVNpZGVIZWFkZXJDb250YWluZXIiLCJvdmVyZHVlVG9kb1NpZGUiLCJvdmVyZHVlU2lkZURyb3Bkb3duIiwiZGF5c1NpZGVIZWFkZXJDb250YWluZXIiLCJkYXlzVG9kb1NpZGUiLCJwcm9qZWN0U2lkZUhlYWRlckNvbnRhaW5lciIsInByb2plY3RzU2lkZSIsInByb2plY3RTaWRlRHJvcGRvd24iLCJtYWluRGlzcGxheSIsImFkZFByb2plY3RCdXR0b25XcmFwcGVyIiwiYWRkUHJvamVjdEJ1dHRvbkNvbnRhaW5lciIsImFkZFByb2pjdEJ1dHRvbiIsImFkZFByb2pjdEJ1dHRvblRleHQiLCJjbGVhckFsbEJ1dHRvbkNvbnRhaW5lciIsImNsZWFyQWxsQnV0dG9uIiwiY2xlYXJBbGxJY29uIiwiY2xlYXJBbGxUZXh0IiwiX2dldFRhc2tzIiwib2Zmc2V0IiwidG9kYXlzVGFza3MiLCJkYXlSZXF1ZXN0ZWQiLCJkYXlzIiwiZ2V0QWxsUHJvamVjdHMiLCJwcm9qIiwidGFza3MiLCJ0YXNrIiwidGFza0RhdGUiLCJnZXRDb21wbGV0ZSIsInB1c2giLCJfZ2V0T3ZlcmR1ZVRhc2tzIiwib3ZlcmR1ZVRhc2tzIiwidG9kYXkiLCJfZGlzcGxheUVycm9ycyIsImlucHV0IiwiZXJyb3IiLCJwYXJlbnQiLCJwYXJlbnRFbGVtZW50Iiwic2V0VGltZW91dCIsInN0eWxlIiwib3BhY2l0eSIsIl90b2dnbGVBY3RpdmUiLCJlbGVtZW50SUQiLCJjb250YWlucyIsIl9yZXZlYWxBcnJheSIsImFycmF5IiwiZHVlIiwiZWxlbSIsImluZGV4IiwiaXNTZWxlY3RlZCIsImdldE5hbWUiLCJfZGlzcGxheVRvZGF5U2lkZSIsImFjdGl2YXRlVG9kYXkiLCJfZGlzcGxheU92ZXJkdWVTaWRlIiwiYWN0aXZhdGVPdmVyZHVlIiwicmVmcmVzaFRhc2tTaWRlcyIsIl9kaXNwbGF5UHJvamVjdHMiLCJfZ2V0UHJvamVjdE51bWJlciIsImRhdGFzZXQiLCJwcm9qZWN0IiwiX2Rpc3BsYXlUaXRsZSIsInByb2plY3ROdW1iZXIiLCJjdXJyZW50UHJvamVjdCIsInRpdGxlV3JhcHBlciIsInRpdGxlQnV0dG9uQ29udGFpbmVyIiwicHJvamVjdFRpdGxlIiwiZWRpdFRpdGxlQnV0dG9uIiwiZWRpdFRpdGxlSWNvbiIsImVkaXRUaXRsZVRleHQiLCJkZWxldGVQcm9qZWN0QnV0dG9uIiwiZGVsZXRlUHJvamVjdEljb24iLCJkZWxldGVQcm9qZWN0VGV4dCIsIl9jbGVhclNpZGVTZWxlY3Rpb24iLCJtYXJrU2VsZWN0ZWQiLCJfc2V0VGFza1NlbGVjdGlvbiIsIl9tYXJrU2VsZWN0ZWRQcm9qZWN0IiwidGFyZ2V0IiwiZ2V0VGFza0luZGV4IiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJpbmRleE9mIiwiX2Rpc3BsYXlUYXNrSW5wdXQiLCJwcm9qZWN0Q29udGFpbmVyIiwiYWRkVGFza0NvbnRhaW5lciIsImFkZFRhc2tOYW1lIiwiYWRkVGFza0Rlc2NyaXB0aW9uIiwiYWRkVGFza0RhdGUiLCJtaW4iLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwiYWRkVGFza1ByaW9yaXR5IiwiYWRkVGFza1ByaW9yaXR5RGVmYXVsdCIsImFkZFRhc2tQcmlvcml0eUxvdyIsImFkZFRhc2tQcmlvcml0eU1lZGl1bSIsImFkZFRhc2tQcmlvcml0eUhpZ2giLCJhZGRUYXNrQnV0dG9uIiwiY2xlYXJUZXh0Qm94IiwiYWN0aXZhdGVBZGRUYXNrQnV0dG9uIiwibGlua1Byb2plY3QiLCJwcm9qZWN0VG9nZ2xlIiwiY2xpY2siLCJfZmlsbEluVGFzayIsInRhc2tOdW1iZXIiLCJnZXRQcm9qZWN0IiwidGFza3NDb250YWluZXIiLCJuZXdUYXNrQ29udGFpbmVyIiwiZ2V0UHJpb3JpdHkiLCJuZXdUYXNrQ2hlY2tib3giLCJuZXdUYXNrTmFtZSIsIm5ld1Rhc2tEZXNjcmlwdGlvbiIsImdldERlc2NyaXB0aW9uIiwibmV3VGFza0RhdGUiLCJ0YXNrUHJvamVjdExhYmVsIiwibmV3VGFza0VkaXRCdXR0b24iLCJuZXdUYXNrRWRpdEljb24iLCJuZXdUYXNrRWRpdFRleHQiLCJuZXdUYXNrRGVsZXRlQnV0dG9uIiwibmV3VGFza0RlbGV0ZUljb24iLCJuZXdUYXNrRGVsZXRlVGV4dCIsImFjdGl2YXRlVGFza0J1dHRvbnMiLCJhY3RpdmF0ZUNoZWNrYm94IiwiaXNQcm9qZWN0U2VsZWN0ZWQiLCJhY3RpdmF0ZVByb2plY3RMaW5rIiwiX2Rpc3BsYXlDb25maXJtQ2FuY2VsIiwicHJvamVjdEJ1dHRvbkNvbnRhaW5lciIsImNvbmZpcm1Db250YWluZXIiLCJjb25maXJtUHJvamVjdEJ1dHRvbiIsImNvbmZpcm1Qcm9qZWN0SWNvbiIsImNvbmZpcm1Qcm9qZWN0VGV4dCIsImNhbmNlbFByb2plY3RCdXR0b24iLCJjYW5jZWxQcm9qZWN0SWNvbiIsImNhbmNlbFByb2plY3RUZXh0IiwiX2ZpbGxJbkRheXMiLCJudW1iZXJPZkRheXMiLCJvdmVyYWxsSW5kZXhDb3VudCIsImRpc3BsYXllZFRhc2siLCJ0YXNrQ291bnQiLCJnZXROdW1iZXIiLCJfY2hlY2tEYXlzIiwibnVtQ2hhbmdlZCIsImVycm9yTWVzc2FnZXMiLCJjaGFuZ2VEYXlzIiwic2V0Q3VycmVudERheXMiLCJnZXRDdXJyZW50RGF5cyIsInNldHVwTmV3UHJvamVjdCIsIm5ld1Byb2pJbnB1dENvbnRhaW5lciIsIm5ld1Byb2pJbnB1dCIsIm5ld1Byb2pBZGRCdXR0b24iLCJhZGRQcm9qZWN0U3VibWlzc2lvbiIsImNhbmNlbE5ld1Byb2plY3QiLCJhY3RpdmF0ZUFkZEJ1dHRvbiIsImdldE5ld1Byb2pJbmZvIiwibmFtZSIsImNoZWNrTmV3UHJvamVjdCIsInVwZGF0ZVByb2plY3RMaXN0IiwiYWN0aXZhdGVQcm9qZWN0QnV0dG9ucyIsImFjdGl2YXRlUHJvamVjdHMiLCJkaXNwbGF5RWRpdFByb2plY3QiLCJwcm9qZWNUaXRsZSIsInByb2plY3RUaXRsZUlucHV0IiwibGFzdEVsZW1lbnRDaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwiYWN0aXZhdGVDb25maXJtUHJvamVjdEVkaXQiLCJhY3RpdmF0ZUNhbmNlbEJ1dHRvbiIsImRpc3BsYXlEZWxldGVQcm9qZWN0IiwiYWN0aXZhdGVEZWxldGVQcm9qZWN0IiwiY2FuY2VsUHJvamVjdEVkaXQiLCJleHBhbmRUb2dnbGUiLCJhY3RpdmF0ZVNpZGVzIiwidG9nZ2xlIiwic3RvcFByb3BhZ2F0aW9uIiwiZ2V0VGFza0luZm8iLCJmb3JtSW5mbyIsInVuZGVmaW5lZCIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsInByaW9yaXR5IiwibnVtYmVyIiwiY2hlY2tOZXdUYXNrIiwidXBkYXRlVGFza0xpc3QiLCJzaG93VG9kYXkiLCJzaG93T3ZlcmR1ZSIsIl9jb25maXJtQ2FuY2VsVGFzayIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJkaXNwbGF5RWRpdFRhc2siLCJlZGl0QnV0dG9uIiwiZGVsZXRlQnV0dG9uIiwiZWRpdFRhc2siLCJnZXRUYXNrcyIsImVkaXRUYXNrTmFtZSIsImVkaXRUYXNrRGVzY3JpcHRpb24iLCJlZGl0VGFza0RhdGUiLCJlZGl0VGFza1ByaW9yaXR5IiwiZWRpdFRhc2tQcmlvcml0eUxvdyIsImVkaXRUYXNrUHJpb3JpdHlNZWRpdW0iLCJlZGl0VGFza1ByaW9yaXR5SGlnaCIsImVkaXRUYXNrQ29udGFpbmVyIiwicHJldmlvdXNTaWJsaW5nIiwiYWN0aXZhdGVDb25maXJtVGFza0VkaXQiLCJkaXNwbGF5RGVsZXRlVGFzayIsImFjdGl2YXRlQ29uZmlybVRhc2tEZWxldGUiLCJjYW5jZWxFZGl0IiwiX2J1aWxkUGFnZSIsImZpcnN0Q2hpbGQiLCJwYWdlQ29udGFpbmVyIiwidGFza3NXcmFwcGVyIiwic3BhY2VyIiwic2hvd1Byb2plY3QiLCJ0b2RheVRpdGxlIiwib3ZlcmR1ZVRpdGxlIiwic2hvd0RheXMiLCJkYXlzU2VsZWN0b3IiLCJtYXgiLCJkYXlzVGl0bGUiLCJhY3RpdmF0ZURheXNTZWxlY3RvciIsImNvbmZpcm1DbGVhckFsbCIsImFjdGl2YXRlQ29uZmlybUNsZWFyQWxsIiwiY2FuY2VsQ2xlYXJBbGwiLCJhY3RpdmF0ZUNsZWFyQWxsQnV0dG9uIiwic3RhcnRQYWdlIiwiaW5pdFN0YXJ0aW5nTGlzdGVuZXJzIiwibG9hZFByb2plY3RzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uZmlybUFsbENsZWFyIiwiY2FwdHVyZSIsImFkZFByb2plY3QiLCJhY3RpdmF0ZURheXMiLCJidXR0b24iLCJjb25maXJtUHJvamVjdEVkaXQiLCJkZWxldGVQcm9qZWN0IiwiYWRkVGFzayIsIl9hY3RpdmF0ZUVkaXRUYXNrQnV0dG9uIiwiY29uZmlybVRhc2tFZGl0IiwiX2FjdGl2YXRlRGVsZXRlVGFza0J1dHRvbiIsImNvbmZpcm1UYXNrRGVsZXRlIiwiZWRpdCIsImRlbCIsInRvZ2dsZVRhc2tDb21wbGV0ZSIsIlByb2plY3QiLCJpbml0VGl0bGUiLCJjb21wbGV0ZWQiLCJzZWxlY3RlZCIsIm5ld05hbWUiLCJuZXdUYXNrIiwiVGFzayIsImR1ZURhdGUiLCJub3RlcyIsImRhdGFTdG9yYWdlIiwic2F2ZURhdGEiLCJhbGxQcm9qIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2FkRGF0YSIsImdldEl0ZW0iLCJsb2FkZWREYXRhIiwicmV0dXJuRGF0YSIsImxvYWRQcm9qZWN0VGl0bGUiLCJsb2FkUHJvamVjdHNUYXNrcyIsImxvYWRQcm9qZWN0Q29tcGxldGVkIiwiY2xlYXJEYXRhIiwiX2FsbFByb2plY3RzIiwiX2N1cnJlbnREYXlzUmVxdWVzdGVkIiwiX3JlbnVtYmVyUHJvamVjdHMiLCJyZWR1Y2VQcm9qZWN0IiwiX3JlbnVtYmVyVGFza3MiLCJyZWR1Y2VUYXNrIiwiX3NvcnRUYXNrcyIsInNvcnRlZFRhc2tzIiwibmV3UHJvamVjdEluZm8iLCJnb29kUHJvamVjdCIsIm5ld1Rhc2tJbmZvIiwiZ29vZFRhc2siLCJlZGl0VGl0bGUiLCJzZXROYW1lIiwiZWRpdFRhc2tJbmZvIiwic3BsaWNlIiwic2VsZWN0ZWRUYXNrIiwidG9nZ2xlQ29tcGxldGUiLCJuZXdWYWx1ZSIsImluaXRXZWJzaXRlIl0sInNvdXJjZVJvb3QiOiIifQ==