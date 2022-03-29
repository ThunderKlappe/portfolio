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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parse/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isBefore/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/add/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header */ "./src/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Footer */ "./src/Footer.js");
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
        var firstTask = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(sortedArray[j].getDate(), "MM/dd/yyyy", new Date());
        var secondTask = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(sortedArray[j + 1].getDate(), "MM/dd/yyyy", new Date());

        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(secondTask, firstTask)) {
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

    var footer = (0,_Footer__WEBPACK_IMPORTED_MODULE_3__["default"])();

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
    document.body.appendChild(footer);
  }; //goes through all of the projects and if a task's due date is offset by a certain days from today
  //it adds that task to an array


  var _getTasks = function _getTasks(offset) {
    var todaysTasks = [];
    var dayRequested = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date()), {
      days: offset
    }), "MM/dd/yyyy");
    ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects().forEach(function (proj) {
      proj.tasks.forEach(function (task) {
        var taskDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(task.getDate(), "MM/dd/yyyy", new Date()), "MM/dd/yyyy");

        if (taskDate == dayRequested && task.getComplete() == false) {
          todaysTasks.push(task);
        }
      });
    });
    return todaysTasks;
  }; //gets all tasks that are due earlier than today


  var _getOverdueTasks = function _getOverdueTasks() {
    var overdueTasks = [];
    var today = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date());
    ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects().forEach(function (proj) {
      proj.tasks.forEach(function (task) {
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(task.getDate(), "MM/dd/yyyy", new Date()), today) && task.getComplete() == false) {
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
      min: (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date()).toISOString().split("T")[0]
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
        _insertAfter(_makeNewElement("div", "day-".concat(i, "-away-label"), "day-away-label", (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date()), {
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
      date: formInfo[2].value ? (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(formInfo[2].value)), "MM/dd/yyyy") : "",
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
      min: (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date()).toISOString().split("T")[0]
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

    var today = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date()), "MM/dd/yyyy");

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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #f6eabe;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #2f6363;\n}\n\n#header,\n#footer {\n    background-color: #f6d7a7;\n    color: #2f6363;\n}\n\n#content {\n    margin-top: 72px;\n    display: flex;\n    width: -webkit-fill-available;\n    background-color: inherit;\n}\n#side-panel {\n    flex: 1;\n    background-color: #2f6363;\n    color: #f6d7a7;\n    min-height: 89.3vh;\n    padding-top: 28px;\n    border-top-right-radius: 30px;\n}\n#side-panel > * :hover {\n    cursor: pointer;\n}\n.side-header-container {\n    display: flex;\n    flex-direction: column;\n}\n.side-header {\n    font-size: 24px;\n    padding-left: 20px;\n    padding-bottom: 8px;\n    display: flex;\n}\n.project-side-label,\n.task-side-label {\n    font-size: 18px;\n    margin: 4px 0px 4px 20px;\n    padding: 4px 10px 4px 10px;\n}\n.task-side-label {\n    margin: 0px 0px 0px 20px;\n}\n.selected {\n    background-color: #265252;\n    border-radius: 30px 0 0 30px;\n}\n.dropdown-toggle {\n    margin-left: 8px;\n}\n.dropdown-toggle.anim {\n    transition: 0.25s;\n}\n.dropdown-toggle.closed {\n    transform: rotateZ(-90deg);\n}\n\n#main-display {\n    flex: 4;\n    background-color: inherit;\n}\n\n.add-button {\n    border-radius: 100px;\n    background-color: #c8e3d4;\n    border: 3px solid #2f6363;\n    color: #2f6363;\n    text-align: center;\n    padding: 0px 10px;\n    margin: 0px 8px 1px;\n    filter: brightness(100%);\n}\n\n.add-button:hover {\n    filter: brightness(70%);\n}\n.add-button:active {\n    box-shadow: inset 0px 0px 5px black;\n}\n\n#add-project-button-container {\n    position: fixed;\n    top: 100px;\n    right: 60px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    z-index: 1;\n}\n#add-project-button {\n    height: 50px;\n    width: 50px;\n    font-size: 40px;\n    font-weight: bold;\n    z-index: 1;\n}\n#add-project-button.anim {\n    transition: 0.25s;\n}\n#add-project-button:hover,\n#add-project-button.active {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 120px;\n}\n#add-project-button.active {\n    filter: brightness(80%);\n}\n\n#add-project-button span {\n    font-size: 0%;\n    opacity: 0;\n}\n#add-project-button span.anim {\n    transition: 0.05s;\n}\n#add-project-button:hover span,\n#add-project-button span.active {\n    font-size: 20px;\n    opacity: 1;\n}\n.input-container {\n    padding: 8px 15px;\n    background-color: #c8e3d4;\n    border: 3px solid #2f6363;\n    border-radius: 100px;\n    box-shadow: 2px 2px black;\n}\n#new-proj-add-button {\n    font-size: 18px;\n    font-weight: bold;\n    padding-top: 4px;\n    padding-bottom: 4px;\n}\n\ninput,\nselect {\n    background-color: #87aaaa;\n    color: #2f6363;\n    border-style: none;\n    border-bottom: 1px solid #2f6363;\n    flex-grow: 1;\n    font-size: 16px;\n    height: 22px;\n    padding: 4px 6px 4px 8px;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\nselect {\n    height: 31px;\n    font-size: 18px;\n}\n\n#clear-all-button-container {\n    position: fixed;\n    bottom: 40px;\n    right: 40px;\n}\n#clear-all-button-container .delete {\n    height: 50px;\n    min-width: 50px;\n    background-color: #e1adad;\n}\n#clear-all-button-container > * {\n    font-size: 30px;\n}\n.project-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 30px;\n    background-color: inherit;\n}\n.project-title-wrapper {\n    max-width: 45%;\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n    align-items: center;\n    background-color: inherit;\n    margin-bottom: 30px;\n}\n\n.project-title {\n    font-size: 36px;\n    font-weight: bold;\n    overflow-y: auto;\n    white-space: nowrap;\n    text-decoration: underline;\n    margin-top: 10px;\n}\n.title-edit {\n    background-color: inherit;\n    font-size: 36px;\n    font-weight: bold;\n    margin-top: 6px;\n    padding: 6px 0px 10px;\n    flex-grow: 0;\n    border-bottom-width: 0px;\n    border-radius: 30px;\n    text-align: center;\n    text-decoration: none;\n    filter: brightness(80%);\n    overflow-y: auto;\n}\n\n.button-container.project {\n    width: 27.5px;\n    background-color: inherit;\n}\n.button-container button {\n    margin-top: 10px;\n}\n\n#add-task-button {\n    font-size: 18px;\n    padding: 5px 12px;\n}\n\n.add-task-info {\n    border-radius: 20px;\n    margin: 5px;\n}\n.tasks-wrapper {\n    display: flex;\n    flex-direction: column;\n    margin-left: 60px;\n    margin-bottom: 40px;\n    width: -webkit-fill-available;\n}\n.task-container {\n    border-radius: 10px;\n    padding: 4px 12px;\n    display: flex;\n    gap: 20px;\n    max-width: fit-content;\n}\n.task-info {\n    max-width: 30vw;\n    white-space: nowrap;\n    overflow-y: auto;\n}\n.task-project-info {\n    font-weight: bold;\n}\n.task-project-info:hover {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.error-message {\n    font-size: 18px;\n    color: #993c3c;\n    transition: 2s;\n    transition-delay: 1s;\n    opacity: 1;\n    margin: 6px;\n}\n\n[data-priority=\"Low\"] {\n    background-color: #e1adad;\n}\n[data-priority=\"Medium\"] {\n    background-color: #efef38;\n}\n[data-priority=\"High\"] {\n    background-color: #9dcd8d;\n}\n\n.edit-button {\n    border-radius: 10px;\n    background-color: inherit;\n    filter: brightness(100%);\n    border: 1px solid #2f6363;\n    color: #2f6363;\n    transition: 0.25s;\n    min-width: 27.5px;\n    height: 20px;\n    white-space: nowrap;\n}\n\n.edit-button:hover {\n    filter: brightness(70%);\n}\n\n.edit-button span {\n    font-size: 0%;\n    opacity: 0;\n    transition: 0.25s;\n}\n.edit-button:hover span {\n    font-size: 14px;\n    opacity: 1;\n    padding: 0px 5px;\n}\n\n.edit-button.confirm:hover {\n    background-color: #9dcd8d;\n}\n.edit-button.delete:hover,\n.edit-button.cancel:hover {\n    background-color: #e1adad;\n}\n\n.task-container input,\n.task-container select {\n    background-color: inherit;\n    color: #2f6363;\n    border-style: none;\n    border-bottom: 1px solid #2f6363;\n    flex-grow: 1;\n    font-size: 14px;\n    height: 18px;\n    padding: 2px 4px 2px 4px;\n}\n.task-container select {\n    height: 23px;\n    font-size: 15px;\n}\n\ninput[type=\"checkbox\" i] {\n    flex-grow: 0;\n    height: 15px;\n    width: 15px;\n}\n\n.task-container.complete {\n    background-color: #a1a1a1;\n}\n\n#days-selector {\n    background-color: inherit;\n    border-bottom: none;\n    font-size: 36px;\n    width: 50px;\n    margin-top: 10px;\n    filter: brightness(80%);\n    border-radius: 30px;\n    text-align: center;\n    padding: 10px;\n}\n\n.day-away-label {\n    font-size: 20px;\n    font-weight: bold;\n    padding: 10px 0px 10px 100px;\n}\n\n#clear-all-button:hover span {\n    font-size: 30px;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n/* Scroll Bar */\n::-webkit-scrollbar {\n    width: 20px;\n    height: 10px;\n    padding-top: 2px;\n}\n\n::-webkit-scrollbar-track {\n    border: 3px solid #87aaaa;\n    border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n    background: #2f6363;\n    border-radius: 10px;\n    border: 2px solid #2f6363;\n}\n\n::-webkit-scrollbar-thumb:hover {\n    background: #265252;\n}\n@-moz-document url-prefix() {\n    body {\n        scrollbar-color: #2f6363 #265252 #87aaaa;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/todo/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #f6eabe;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #2f6363;\n}\n\n#header,\n#footer {\n    background-color: #f6d7a7;\n    color: #2f6363;\n}\n\n#content {\n    margin-top: 72px;\n    display: flex;\n    width: -webkit-fill-available;\n    background-color: inherit;\n}\n#side-panel {\n    flex: 1;\n    background-color: #2f6363;\n    color: #f6d7a7;\n    min-height: 89.3vh;\n    padding-top: 28px;\n    border-top-right-radius: 30px;\n}\n#side-panel > * :hover {\n    cursor: pointer;\n}\n.side-header-container {\n    display: flex;\n    flex-direction: column;\n}\n.side-header {\n    font-size: 24px;\n    padding-left: 20px;\n    padding-bottom: 8px;\n    display: flex;\n}\n.project-side-label,\n.task-side-label {\n    font-size: 18px;\n    margin: 4px 0px 4px 20px;\n    padding: 4px 10px 4px 10px;\n}\n.task-side-label {\n    margin: 0px 0px 0px 20px;\n}\n.selected {\n    background-color: #265252;\n    border-radius: 30px 0 0 30px;\n}\n.dropdown-toggle {\n    margin-left: 8px;\n}\n.dropdown-toggle.anim {\n    transition: 0.25s;\n}\n.dropdown-toggle.closed {\n    transform: rotateZ(-90deg);\n}\n\n#main-display {\n    flex: 4;\n    background-color: inherit;\n}\n\n.add-button {\n    border-radius: 100px;\n    background-color: #c8e3d4;\n    border: 3px solid #2f6363;\n    color: #2f6363;\n    text-align: center;\n    padding: 0px 10px;\n    margin: 0px 8px 1px;\n    filter: brightness(100%);\n}\n\n.add-button:hover {\n    filter: brightness(70%);\n}\n.add-button:active {\n    box-shadow: inset 0px 0px 5px black;\n}\n\n#add-project-button-container {\n    position: fixed;\n    top: 100px;\n    right: 60px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    z-index: 1;\n}\n#add-project-button {\n    height: 50px;\n    width: 50px;\n    font-size: 40px;\n    font-weight: bold;\n    z-index: 1;\n}\n#add-project-button.anim {\n    transition: 0.25s;\n}\n#add-project-button:hover,\n#add-project-button.active {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 120px;\n}\n#add-project-button.active {\n    filter: brightness(80%);\n}\n\n#add-project-button span {\n    font-size: 0%;\n    opacity: 0;\n}\n#add-project-button span.anim {\n    transition: 0.05s;\n}\n#add-project-button:hover span,\n#add-project-button span.active {\n    font-size: 20px;\n    opacity: 1;\n}\n.input-container {\n    padding: 8px 15px;\n    background-color: #c8e3d4;\n    border: 3px solid #2f6363;\n    border-radius: 100px;\n    box-shadow: 2px 2px black;\n}\n#new-proj-add-button {\n    font-size: 18px;\n    font-weight: bold;\n    padding-top: 4px;\n    padding-bottom: 4px;\n}\n\ninput,\nselect {\n    background-color: #87aaaa;\n    color: #2f6363;\n    border-style: none;\n    border-bottom: 1px solid #2f6363;\n    flex-grow: 1;\n    font-size: 16px;\n    height: 22px;\n    padding: 4px 6px 4px 8px;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\nselect {\n    height: 31px;\n    font-size: 18px;\n}\n\n#clear-all-button-container {\n    position: fixed;\n    bottom: 40px;\n    right: 40px;\n}\n#clear-all-button-container .delete {\n    height: 50px;\n    min-width: 50px;\n    background-color: #e1adad;\n}\n#clear-all-button-container > * {\n    font-size: 30px;\n}\n.project-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 30px;\n    background-color: inherit;\n}\n.project-title-wrapper {\n    max-width: 45%;\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n    align-items: center;\n    background-color: inherit;\n    margin-bottom: 30px;\n}\n\n.project-title {\n    font-size: 36px;\n    font-weight: bold;\n    overflow-y: auto;\n    white-space: nowrap;\n    text-decoration: underline;\n    margin-top: 10px;\n}\n.title-edit {\n    background-color: inherit;\n    font-size: 36px;\n    font-weight: bold;\n    margin-top: 6px;\n    padding: 6px 0px 10px;\n    flex-grow: 0;\n    border-bottom-width: 0px;\n    border-radius: 30px;\n    text-align: center;\n    text-decoration: none;\n    filter: brightness(80%);\n    overflow-y: auto;\n}\n\n.button-container.project {\n    width: 27.5px;\n    background-color: inherit;\n}\n.button-container button {\n    margin-top: 10px;\n}\n\n#add-task-button {\n    font-size: 18px;\n    padding: 5px 12px;\n}\n\n.add-task-info {\n    border-radius: 20px;\n    margin: 5px;\n}\n.tasks-wrapper {\n    display: flex;\n    flex-direction: column;\n    margin-left: 60px;\n    margin-bottom: 40px;\n    width: -webkit-fill-available;\n}\n.task-container {\n    border-radius: 10px;\n    padding: 4px 12px;\n    display: flex;\n    gap: 20px;\n    max-width: fit-content;\n}\n.task-info {\n    max-width: 30vw;\n    white-space: nowrap;\n    overflow-y: auto;\n}\n.task-project-info {\n    font-weight: bold;\n}\n.task-project-info:hover {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.error-message {\n    font-size: 18px;\n    color: #993c3c;\n    transition: 2s;\n    transition-delay: 1s;\n    opacity: 1;\n    margin: 6px;\n}\n\n[data-priority=\"Low\"] {\n    background-color: #e1adad;\n}\n[data-priority=\"Medium\"] {\n    background-color: #efef38;\n}\n[data-priority=\"High\"] {\n    background-color: #9dcd8d;\n}\n\n.edit-button {\n    border-radius: 10px;\n    background-color: inherit;\n    filter: brightness(100%);\n    border: 1px solid #2f6363;\n    color: #2f6363;\n    transition: 0.25s;\n    min-width: 27.5px;\n    height: 20px;\n    white-space: nowrap;\n}\n\n.edit-button:hover {\n    filter: brightness(70%);\n}\n\n.edit-button span {\n    font-size: 0%;\n    opacity: 0;\n    transition: 0.25s;\n}\n.edit-button:hover span {\n    font-size: 14px;\n    opacity: 1;\n    padding: 0px 5px;\n}\n\n.edit-button.confirm:hover {\n    background-color: #9dcd8d;\n}\n.edit-button.delete:hover,\n.edit-button.cancel:hover {\n    background-color: #e1adad;\n}\n\n.task-container input,\n.task-container select {\n    background-color: inherit;\n    color: #2f6363;\n    border-style: none;\n    border-bottom: 1px solid #2f6363;\n    flex-grow: 1;\n    font-size: 14px;\n    height: 18px;\n    padding: 2px 4px 2px 4px;\n}\n.task-container select {\n    height: 23px;\n    font-size: 15px;\n}\n\ninput[type=\"checkbox\" i] {\n    flex-grow: 0;\n    height: 15px;\n    width: 15px;\n}\n\n.task-container.complete {\n    background-color: #a1a1a1;\n}\n\n#days-selector {\n    background-color: inherit;\n    border-bottom: none;\n    font-size: 36px;\n    width: 50px;\n    margin-top: 10px;\n    filter: brightness(80%);\n    border-radius: 30px;\n    text-align: center;\n    padding: 10px;\n}\n\n.day-away-label {\n    font-size: 20px;\n    font-weight: bold;\n    padding: 10px 0px 10px 100px;\n}\n\n#clear-all-button:hover span {\n    font-size: 30px;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n/* Scroll Bar */\n::-webkit-scrollbar {\n    width: 20px;\n    height: 10px;\n    padding-top: 2px;\n}\n\n::-webkit-scrollbar-track {\n    border: 3px solid #87aaaa;\n    border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n    background: #2f6363;\n    border-radius: 10px;\n    border: 2px solid #2f6363;\n}\n\n::-webkit-scrollbar-thumb:hover {\n    background: #265252;\n}\n@-moz-document url-prefix() {\n    body {\n        scrollbar-color: #2f6363 #265252 #87aaaa;\n    }\n}\n"],"sourceRoot":""}]);
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-838f5e","src_Footer_js-src_Header_js"], () => (__webpack_require__("./src/todo/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFL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YW5pcC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvdG9kby9FdmVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3RvZG8vUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvdG9kby9UYXNrLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy90b2RvL2RhdGFTdG9yYWdlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy90b2RvL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy90b2RvL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvdG9kby9zdHlsZS5jc3M/MzJlMCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmV4cGVjdGVkLW11bHRpbGluZSAqL1xuaW1wb3J0IHsgcHJvamVjdEZ1bmN0aW9ucyB9IGZyb20gXCIuXCI7XG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gXCIuL0V2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHsgdG9EYXRlLCBmb3JtYXQsIGFkZCwgcGFyc2VJU08sIHBhcnNlLCBpc0JlZm9yZSwgc3RhcnRPZkRheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi4vSGVhZGVyXCI7XG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gXCIuLi9Gb290ZXJcIjtcblxuY29uc3QgRE9NTWFuaXAgPSAoKCkgPT4ge1xuICAgIC8vc2hvcnRoYW5kIHRvIGdldCBlbGVtZW50cyBlYXNpZXJcbiAgICBjb25zdCBnZXRFbGVtZW50ID0gc2VsZWN0b3IgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgY29uc3QgZ2V0RWxlbWVudHMgPSBzZWxlY3RvciA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICAgIC8vc2hvcnRoYW5kIHRvIG1ha2UgYSBuZXcgZWxlbWVudCBhbmQgYWRkIGF0dHJpYnV0ZXMgdG8gaXRcbiAgICBjb25zdCBfbWFrZU5ld0VsZW1lbnQgPSAodHlwZSwgaWQgPSBcIlwiLCBIVE1MQ2xhc3MgPSBcIlwiLCB0ZXh0ID0gXCJcIiwgLi4uYXR0cmlidXRlcykgPT4ge1xuICAgICAgICBjb25zdCBuZXdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgaWYgKGlkICE9IFwiXCIpIHtcbiAgICAgICAgICAgIG5ld0VsZW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChIVE1MQ2xhc3MgIT0gXCJcIikge1xuICAgICAgICAgICAgbmV3RWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBIVE1MQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICAgIG5ld0VsZW0udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBpZiAoYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goYXR0ID0+IG5ld0VsZW0uc2V0QXR0cmlidXRlKE9iamVjdC5rZXlzKGF0dClbMF0sIGF0dFtPYmplY3Qua2V5cyhhdHQpXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld0VsZW07XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVUZXh0ID0gZSA9PiB7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC52YWx1ZSA9IFwiXCI7XG4gICAgfTtcblxuICAgIC8vaW5zZXJ0cyBhIERPTSBlbGVtZW50IGFmdGVyIGFub3RoZXIgZWxlbWVudFxuICAgIGNvbnN0IF9pbnNlcnRBZnRlciA9IChuZXdOb2RlLCBleGlzdGluZ05vZGUpID0+IHtcbiAgICAgICAgZXhpc3RpbmdOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIGV4aXN0aW5nTm9kZS5uZXh0U2libGluZyk7XG4gICAgfTtcblxuICAgIC8vY2xlYXJzIG91dCBhbGwgY2hpbGQgbm9kZXMgb2YgYW4gZWxlbWVudCwgc2tpcHMgYXMgbWFueSBlbGVtZW50cyBhcyByZXF1ZXN0ZWRcbiAgICBjb25zdCBfcmVtb3ZlQWxsQ2hpbGRyZW4gPSAoZWxlbWVudCwgc2tpcCA9IDApID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkgPiBza2lwOyBpLS0pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1tpIC0gMV0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9zb3J0cyBhbiBhcnJheSBvZiB0YXNrcyBieSB0aGUgZGF0ZTtcbiAgICBjb25zdCBzb3J0QXJyYXkgPSB0YXNrQXJyYXkgPT4ge1xuICAgICAgICBsZXQgc29ydGVkQXJyYXkgPSB0YXNrQXJyYXkubWFwKGVsZSA9PiBlbGUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNvcnRlZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNvcnRlZEFycmF5Lmxlbmd0aCAtIDE7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0VGFzayA9IHBhcnNlKHNvcnRlZEFycmF5W2pdLmdldERhdGUoKSwgXCJNTS9kZC95eXl5XCIsIG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZFRhc2sgPSBwYXJzZShzb3J0ZWRBcnJheVtqICsgMV0uZ2V0RGF0ZSgpLCBcIk1NL2RkL3l5eXlcIiwgbmV3IERhdGUoKSk7XG4gICAgICAgICAgICAgICAgaWYgKGlzQmVmb3JlKHNlY29uZFRhc2ssIGZpcnN0VGFzaykpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gc29ydGVkQXJyYXlbal07XG4gICAgICAgICAgICAgICAgICAgIHNvcnRlZEFycmF5W2pdID0gc29ydGVkQXJyYXlbaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICBzb3J0ZWRBcnJheVtqICsgMV0gPSBwbGFjZWhvbGRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNvcnRlZEFycmF5O1xuICAgIH07XG5cbiAgICAvL2ZpeGVzIHN0cmFuZ2UgYnVnIHdoZXJlIGVsZW1lbnRzIGFuaW1hdGVkIGZyb20gdGhlaXIgZGVmYXVsdCBzdGF0ZSB0byB0aGVpciBjc3Mgc3R5bGVkIHN0YXRlXG4gICAgY29uc3QgX2ZpeFN0YXJ0aW5nQW5pbWF0aW9ucyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYW5pbWF0YWJsZSA9IGdldEVsZW1lbnRzKFwiLmZpeC1hbmltXCIpO1xuICAgICAgICBhbmltYXRhYmxlLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKFwiYW5pbVwiKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZml4LWFuaW1cIik7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvL2FkZHMgYWxsIG9mIHRoZSBzdGFydGluZyBlbGVtZW50IHRvIHRoZSBwYWdlIHdoZW4gZmlyc3QgbG9hZGluZyB0aGUgcGFnZVxuICAgIGNvbnN0IF9tYWtlU3RhcnRpbmdQYWdlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoXCJUby1EbyBMaXN0XCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJjb250ZW50XCIpO1xuICAgICAgICBjb25zdCBmb290ZXIgPSBjcmVhdGVGb290ZXIoKTtcbiAgICAgICAgY29uc3Qgc2lkZVBhbmVsID0gX21ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwic2lkZS1wYW5lbFwiKTtcblxuICAgICAgICBjb25zdCB0b2RheVNpZGVIZWFkZXJDb250YWluZXIgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJzaWRlLWhlYWRlci1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHRvZGF5c1RvZG9TaWRlID0gX21ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwidG9kYXlzLXRvZG8tc2lkZVwiLCBcInNpZGUtaGVhZGVyIHRvZGF5XCIsIFwiVG9kYXlcIik7XG4gICAgICAgIGNvbnN0IHRvZGF5U2lkZURyb3Bkb3duID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFwidG9kYXktdG9nZ2xlXCIsXG4gICAgICAgICAgICBcImRyb3Bkb3duLXRvZ2dsZSBmaXgtYW5pbSBmYS1zb2xpZCBmYS1jYXJldC1kb3duXCJcbiAgICAgICAgKTtcbiAgICAgICAgdG9kYXlzVG9kb1NpZGUuYXBwZW5kQ2hpbGQodG9kYXlTaWRlRHJvcGRvd24pO1xuICAgICAgICB0b2RheVNpZGVIZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXlzVG9kb1NpZGUpO1xuXG4gICAgICAgIGNvbnN0IG92ZXJkdWVTaWRlSGVhZGVyQ29udGFpbmVyID0gX21ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwic2lkZS1oZWFkZXItY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBvdmVyZHVlVG9kb1NpZGUgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJvdmVyZHVlLXRvZG8tc2lkZVwiLCBcInNpZGUtaGVhZGVyIG92ZXJkdWVcIiwgXCJPdmVyZHVlXCIpO1xuICAgICAgICBjb25zdCBvdmVyZHVlU2lkZURyb3Bkb3duID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFwib3ZlcmR1ZS10b2dnbGVcIixcbiAgICAgICAgICAgIFwiZHJvcGRvd24tdG9nZ2xlIGZpeC1hbmltIGNsb3NlZCBmYS1zb2xpZCBmYS1jYXJldC1kb3duXCJcbiAgICAgICAgKTtcbiAgICAgICAgb3ZlcmR1ZVRvZG9TaWRlLmFwcGVuZENoaWxkKG92ZXJkdWVTaWRlRHJvcGRvd24pO1xuICAgICAgICBvdmVyZHVlU2lkZUhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChvdmVyZHVlVG9kb1NpZGUpO1xuXG4gICAgICAgIGNvbnN0IGRheXNTaWRlSGVhZGVyQ29udGFpbmVyID0gX21ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwic2lkZS1oZWFkZXItY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBkYXlzVG9kb1NpZGUgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJkYXlzLXRvZG8tc2lkZVwiLCBcInNpZGUtaGVhZGVyIGRheXNcIiwgXCJEYXlzIEF3YXlcIik7XG4gICAgICAgIGRheXNTaWRlSGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRheXNUb2RvU2lkZSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFNpZGVIZWFkZXJDb250YWluZXIgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJzaWRlLWhlYWRlci1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHByb2plY3RzU2lkZSA9IF9tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInByb2plY3RzLXNpZGVcIiwgXCJzaWRlLWhlYWRlclwiLCBcIlByb2plY3RzXCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0U2lkZURyb3Bkb3duID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFwicHJvamVjdHMtdG9nZ2xlXCIsXG4gICAgICAgICAgICBcImRyb3Bkb3duLXRvZ2dsZSBmaXgtYW5pbSBmYS1zb2xpZCBmYS1jYXJldC1kb3duXCJcbiAgICAgICAgKTtcbiAgICAgICAgcHJvamVjdHNTaWRlLmFwcGVuZENoaWxkKHByb2plY3RTaWRlRHJvcGRvd24pO1xuICAgICAgICBwcm9qZWN0U2lkZUhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c1NpZGUpO1xuXG4gICAgICAgIHNpZGVQYW5lbC5hcHBlbmRDaGlsZCh0b2RheVNpZGVIZWFkZXJDb250YWluZXIpO1xuICAgICAgICBzaWRlUGFuZWwuYXBwZW5kQ2hpbGQob3ZlcmR1ZVNpZGVIZWFkZXJDb250YWluZXIpO1xuICAgICAgICBzaWRlUGFuZWwuYXBwZW5kQ2hpbGQoZGF5c1NpZGVIZWFkZXJDb250YWluZXIpO1xuICAgICAgICBzaWRlUGFuZWwuYXBwZW5kQ2hpbGQocHJvamVjdFNpZGVIZWFkZXJDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IG1haW5EaXNwbGF5ID0gX21ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwibWFpbi1kaXNwbGF5XCIpO1xuXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b25XcmFwcGVyID0gX21ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiYWRkLXByb2plY3QtYnV0dG9uLXdyYXBwZXJcIik7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b25Db250YWluZXIgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJhZGQtcHJvamVjdC1idXR0b24tY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBhZGRQcm9qY3RCdXR0b24gPSBfbWFrZU5ld0VsZW1lbnQoXCJidXR0b25cIiwgXCJhZGQtcHJvamVjdC1idXR0b25cIiwgXCJhZGQtYnV0dG9uIGZpeC1hbmltXCIsIFwiK1wiKTtcbiAgICAgICAgY29uc3QgYWRkUHJvamN0QnV0dG9uVGV4dCA9IF9tYWtlTmV3RWxlbWVudChcInNwYW5cIiwgXCJhZGQtcHJvamVjdC1idXR0b24tdGV4dFwiLCBcImZpeC1hbmltXCIsIFwiUHJvamVjdFwiKTtcbiAgICAgICAgYWRkUHJvamN0QnV0dG9uLmFwcGVuZENoaWxkKGFkZFByb2pjdEJ1dHRvblRleHQpO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2pjdEJ1dHRvbik7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b25Db250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IGNsZWFyQWxsQnV0dG9uQ29udGFpbmVyID0gX21ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiY2xlYXItYWxsLWJ1dHRvbi1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGNsZWFyQWxsQnV0dG9uID0gX21ha2VOZXdFbGVtZW50KFwiYnV0dG9uXCIsIFwiY2xlYXItYWxsLWJ1dHRvblwiLCBcImVkaXQtYnV0dG9uIGRlbGV0ZSBmaXgtYW5pbVwiKTtcbiAgICAgICAgY29uc3QgY2xlYXJBbGxJY29uID0gX21ha2VOZXdFbGVtZW50KFwiaVwiLCBcIlwiLCBcImZhLXNvbGlkIGZhLXRyYXNoLWNhbiBlZGl0LWljb25cIik7XG4gICAgICAgIGNvbnN0IGNsZWFyQWxsVGV4dCA9IF9tYWtlTmV3RWxlbWVudChcInNwYW5cIiwgXCJjbGVhci1hbGwtYnV0dG9uLXRleHRcIiwgXCJmaXgtYW5pbVwiLCBcIkNsZWFyIEFsbCBEYXRhXCIpO1xuICAgICAgICBjbGVhckFsbEJ1dHRvbi5hcHBlbmRDaGlsZChjbGVhckFsbEljb24pO1xuICAgICAgICBjbGVhckFsbEJ1dHRvbi5hcHBlbmRDaGlsZChjbGVhckFsbFRleHQpO1xuICAgICAgICBjbGVhckFsbEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjbGVhckFsbEJ1dHRvbik7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChzaWRlUGFuZWwpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5EaXNwbGF5KTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uV3JhcHBlcik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2xlYXJBbGxCdXR0b25Db250YWluZXIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgfTtcblxuICAgIC8vZ29lcyB0aHJvdWdoIGFsbCBvZiB0aGUgcHJvamVjdHMgYW5kIGlmIGEgdGFzaydzIGR1ZSBkYXRlIGlzIG9mZnNldCBieSBhIGNlcnRhaW4gZGF5cyBmcm9tIHRvZGF5XG4gICAgLy9pdCBhZGRzIHRoYXQgdGFzayB0byBhbiBhcnJheVxuICAgIGNvbnN0IF9nZXRUYXNrcyA9IG9mZnNldCA9PiB7XG4gICAgICAgIGxldCB0b2RheXNUYXNrcyA9IFtdO1xuICAgICAgICBjb25zdCBkYXlSZXF1ZXN0ZWQgPSBmb3JtYXQoYWRkKHRvRGF0ZShuZXcgRGF0ZSgpKSwgeyBkYXlzOiBvZmZzZXQgfSksIFwiTU0vZGQveXl5eVwiKTtcbiAgICAgICAgcHJvamVjdEZ1bmN0aW9ucy5nZXRBbGxQcm9qZWN0cygpLmZvckVhY2gocHJvaiA9PiB7XG4gICAgICAgICAgICBwcm9qLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBmb3JtYXQocGFyc2UodGFzay5nZXREYXRlKCksIFwiTU0vZGQveXl5eVwiLCBuZXcgRGF0ZSgpKSwgXCJNTS9kZC95eXl5XCIpO1xuICAgICAgICAgICAgICAgIGlmICh0YXNrRGF0ZSA9PSBkYXlSZXF1ZXN0ZWQgJiYgdGFzay5nZXRDb21wbGV0ZSgpID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZGF5c1Rhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdG9kYXlzVGFza3M7XG4gICAgfTtcblxuICAgIC8vZ2V0cyBhbGwgdGFza3MgdGhhdCBhcmUgZHVlIGVhcmxpZXIgdGhhbiB0b2RheVxuICAgIGNvbnN0IF9nZXRPdmVyZHVlVGFza3MgPSAoKSA9PiB7XG4gICAgICAgIGxldCBvdmVyZHVlVGFza3MgPSBbXTtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBzdGFydE9mRGF5KG5ldyBEYXRlKCkpO1xuICAgICAgICBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKCkuZm9yRWFjaChwcm9qID0+IHtcbiAgICAgICAgICAgIHByb2oudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGlzQmVmb3JlKHBhcnNlKHRhc2suZ2V0RGF0ZSgpLCBcIk1NL2RkL3l5eXlcIiwgbmV3IERhdGUoKSksIHRvZGF5KSAmJlxuICAgICAgICAgICAgICAgICAgICB0YXNrLmdldENvbXBsZXRlKCkgPT0gZmFsc2VcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmR1ZVRhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3ZlcmR1ZVRhc2tzO1xuICAgIH07XG5cbiAgICAvL3Rha2VzIGluIGFuIGFycmF5IG9mIGVycm9yIG1lc3NhZ2VzIGFuZCBwdXRzIHRoZW0gZGlyZWN0bHkgYWJvdmUgdGhlIHBhcmVudCBvZiB0aGF0IGVsZW1lbnRcbiAgICAvL21ha2VzIHRoZSBlcnJvciBtZXNzYWdlcyBkaXNzYXBwZWFyIGFmdGVyIHRoZXkndmUgYmVlbiByZWFkXG4gICAgY29uc3QgX2Rpc3BsYXlFcnJvcnMgPSAoZSwgaW5wdXQpID0+IHtcbiAgICAgICAgaW5wdXQuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJlcnJvci1tZXNzYWdlXCIsIGVsZSk7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIHBhcmVudC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShlcnJvciwgcGFyZW50KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gKGVycm9yLnN0eWxlLm9wYWNpdHkgPSAwKSwgMjAwMCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGVycm9yLnJlbW92ZSgpLCA0MDAwKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvL3RvZ2dsZXMgd2hldGhlciBvciBub3QgYW4gZWxlbWVudCBoYXMgdGhlIGNsYXNzIFwiYWN0aXZlXCIuXG4gICAgY29uc3QgX3RvZ2dsZUFjdGl2ZSA9IGVsZW1lbnRJRCA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KGVsZW1lbnRJRCk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICA/IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICAgICAgOiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfTtcblxuICAgIC8vcHV0cyBhbiBhcnJheSBvZiBlbGVtZW50cyB1bmRlcm5lYXRoIGEgcGFyZW50IGVsZW1lbnRcbiAgICBjb25zdCBfcmV2ZWFsQXJyYXkgPSAocGFyZW50LCBhcnJheSwgdHlwZSwgZHVlID0gXCJcIikgPT4ge1xuICAgICAgICBfcmVtb3ZlQWxsQ2hpbGRyZW4ocGFyZW50LCAxKTtcbiAgICAgICAgYXJyYXkuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICBgJHt0eXBlfS0ke2luZGV4fWAsXG4gICAgICAgICAgICAgICAgICAgIGAke3R5cGV9LXNpZGUtbGFiZWwgJHtkdWV9ICR7dHlwZSA9PSBcInByb2plY3RcIiAmJiBlbGVtLmlzU2VsZWN0ZWQoKSA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9YCxcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHsgXCJkYXRhLWluZGV4XCI6IGAke2luZGV4fWAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy9zaG93cyB0aGUgdGFza3MgdGhhdCBhcmUgZHVlIHRvZGF5IG9uIHRoZSBzaWRlIHBhbmVsXG4gICAgY29uc3QgX2Rpc3BsYXlUb2RheVNpZGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICghZ2V0RWxlbWVudChcIiN0b2RheS10b2dnbGVcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2VkXCIpKSB7XG4gICAgICAgICAgICBfcmV2ZWFsQXJyYXkoZ2V0RWxlbWVudChcIiN0b2RheXMtdG9kby1zaWRlXCIpLnBhcmVudEVsZW1lbnQsIF9nZXRUYXNrcygwKSwgXCJ0YXNrXCIsIFwidG9kYXlcIik7XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlVG9kYXkoKTtcbiAgICB9O1xuICAgIC8vc2hvd3MgdGhlIHRhc2tzIHRoYXQgYXJlIHBhc3QgZHVlIG9uIHRoZSBzaWRlIHBhbmVsXG4gICAgY29uc3QgX2Rpc3BsYXlPdmVyZHVlU2lkZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFnZXRFbGVtZW50KFwiI292ZXJkdWUtdG9nZ2xlXCIpLmNsYXNzTGlzdC5jb250YWlucyhcImNsb3NlZFwiKSkge1xuICAgICAgICAgICAgX3JldmVhbEFycmF5KFxuICAgICAgICAgICAgICAgIGdldEVsZW1lbnQoXCIjb3ZlcmR1ZS10b2RvLXNpZGVcIikucGFyZW50RWxlbWVudCxcbiAgICAgICAgICAgICAgICBfZ2V0T3ZlcmR1ZVRhc2tzKCksXG4gICAgICAgICAgICAgICAgXCJ0YXNrXCIsXG4gICAgICAgICAgICAgICAgXCJvdmVyZHVlXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlT3ZlcmR1ZSgpO1xuICAgIH07XG4gICAgLy91cGRhdGVzIGFsbCBvZiB0aGUgdGFzayBjb250YWluaW5nIHNpZGUgcGFuZWwgY2F0ZWdvcmllc1xuICAgIGNvbnN0IHJlZnJlc2hUYXNrU2lkZXMgPSAoKSA9PiB7XG4gICAgICAgIF9kaXNwbGF5T3ZlcmR1ZVNpZGUoKTtcbiAgICAgICAgX2Rpc3BsYXlUb2RheVNpZGUoKTtcbiAgICB9O1xuICAgIC8vc2hvd3MgYWxsIHByb2plY3RzIG9uIHRoZSBzaWRlIHBhbmVsXG4gICAgY29uc3QgX2Rpc3BsYXlQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgX3JldmVhbEFycmF5KFxuICAgICAgICAgICAgZ2V0RWxlbWVudChcIiNwcm9qZWN0cy1zaWRlXCIpLnBhcmVudEVsZW1lbnQsXG4gICAgICAgICAgICBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKCksXG4gICAgICAgICAgICBcInByb2plY3RcIlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICAvL3JldHVybnMgd2hhdCB0aGUgY3VycmVudCBzZWxlY3RlZCBwcm9qZWN0IG51bWJlciBpc1xuICAgIGNvbnN0IF9nZXRQcm9qZWN0TnVtYmVyID0gKCkgPT4ge1xuICAgICAgICBpZiAoZ2V0RWxlbWVudChcIiNwcm9qZWN0cy10b2dnbGVcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2VkXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RWxlbWVudChcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5kYXRhc2V0LnByb2plY3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RWxlbWVudChcIi5zZWxlY3RlZFwiKS5kYXRhc2V0LmluZGV4O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vcHV0cyB0aGUgdGl0bGUgb2YgdGhlIHByb2plY3QgYW5kIHRoZSBlZGl0IGJ1dHRvbnMgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZVxuICAgIGNvbnN0IF9kaXNwbGF5VGl0bGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROdW1iZXIgPSBfZ2V0UHJvamVjdE51bWJlcigpO1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RGdW5jdGlvbnMuZ2V0QWxsUHJvamVjdHMoKVtwcm9qZWN0TnVtYmVyXTtcbiAgICAgICAgY29uc3QgdGl0bGVXcmFwcGVyID0gZ2V0RWxlbWVudChcIi5wcm9qZWN0LXRpdGxlLXdyYXBwZXJcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlQnV0dG9uQ29udGFpbmVyID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIGBwcm9qZWN0LSR7cHJvamVjdE51bWJlcn0tdGl0bGUtYnV0dG9uLWNvbnRhaW5lcmAsXG4gICAgICAgICAgICBcImJ1dHRvbi1jb250YWluZXIgcHJvamVjdFwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRpdGxlYCxcbiAgICAgICAgICAgIFwicHJvamVjdC10aXRsZVwiLFxuICAgICAgICAgICAgYCR7Y3VycmVudFByb2plY3QuZ2V0TmFtZSgpfWBcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBlZGl0VGl0bGVCdXR0b24gPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS1lZGl0LWJ1dHRvbmAsXG4gICAgICAgICAgICBcImVkaXQtYnV0dG9uIHRpdGxlXCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZWRpdFRpdGxlSWNvbiA9IF9tYWtlTmV3RWxlbWVudChcImlcIiwgXCJcIiwgXCJmYS1zb2xpZCBmYS1wZW5jaWwgZWRpdC1pY29uXCIpO1xuICAgICAgICBjb25zdCBlZGl0VGl0bGVUZXh0ID0gX21ha2VOZXdFbGVtZW50KFwic3BhblwiLCBcIlwiLCBcImVkaXQtdGV4dFwiLCBcIkVkaXQgVGl0bGVcIik7XG4gICAgICAgIGVkaXRUaXRsZUJ1dHRvbi5hcHBlbmRDaGlsZChlZGl0VGl0bGVJY29uKTtcbiAgICAgICAgZWRpdFRpdGxlQnV0dG9uLmFwcGVuZENoaWxkKGVkaXRUaXRsZVRleHQpO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS1kZWxldGUtYnV0dG9uYCxcbiAgICAgICAgICAgIFwiZWRpdC1idXR0b24gZGVsZXRlXCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEljb24gPSBfbWFrZU5ld0VsZW1lbnQoXCJpXCIsIFwiXCIsIFwiZmEtc29saWQgZmEtdHJhc2ggZWRpdC1pY29uXCIpO1xuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0VGV4dCA9IF9tYWtlTmV3RWxlbWVudChcInNwYW5cIiwgXCJcIiwgXCJlZGl0LXRleHRcIiwgXCJEZWxldGUgUHJvamVjdFwiKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0SWNvbik7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdFRleHQpO1xuXG4gICAgICAgIHRpdGxlQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRUaXRsZUJ1dHRvbik7XG4gICAgICAgIHRpdGxlQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuXG4gICAgICAgIGlmICh0aXRsZVdyYXBwZXIuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfcmVtb3ZlQWxsQ2hpbGRyZW4odGl0bGVXcmFwcGVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aXRsZVdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICAgICAgdGl0bGVXcmFwcGVyLmFwcGVuZENoaWxkKHRpdGxlQnV0dG9uQ29udGFpbmVyKTtcbiAgICB9O1xuXG4gICAgLy9jbGVhcnMgdGhlIHNlbGVjdGlvbiBvbiB0aGUgc2lkZSBwYW5lbFxuICAgIGNvbnN0IF9jbGVhclNpZGVTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGdldEVsZW1lbnRzKFwiLnByb2plY3Qtc2lkZS1sYWJlbFwiKS5mb3JFYWNoKGVsZSA9PiBlbGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpKTtcbiAgICAgICAgZ2V0RWxlbWVudChcIiN0b2RheXMtdG9kby1zaWRlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgZ2V0RWxlbWVudChcIiNvdmVyZHVlLXRvZG8tc2lkZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGdldEVsZW1lbnQoXCIjZGF5cy10b2RvLXNpZGVcIikuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKCkuZm9yRWFjaChwcm9qID0+IHByb2oubWFya1NlbGVjdGVkKGZhbHNlKSk7XG4gICAgfTtcblxuICAgIC8vY2xlYXJzIGFuZCBtYXJrcyB0aGUgc2VsZWN0aW9uIGZvciBhIGdpdmVuIHRhc2sgY2F0ZWdvcnlcbiAgICBjb25zdCBfc2V0VGFza1NlbGVjdGlvbiA9IHR5cGUgPT4ge1xuICAgICAgICBfY2xlYXJTaWRlU2VsZWN0aW9uKCk7XG4gICAgICAgIGdldEVsZW1lbnQoYCMke3R5cGV9LXRvZG8tc2lkZWApLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICB9O1xuXG4gICAgLy9oaWdobGlnaHRzIHdoYXQgcHJvamVjdCAob3IgdG9kYXlzIHRhc2tzKSBpcyBzZWxlY3RlZC4gRGVmYXVsdHMgdG8gdGhlIGZpcnN0IHByb2plY3RcbiAgICBjb25zdCBfbWFya1NlbGVjdGVkUHJvamVjdCA9IGUgPT4ge1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0LXNpZGUtbGFiZWxcIikpIHtcbiAgICAgICAgICAgICAgICBfY2xlYXJTaWRlU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdEZ1bmN0aW9ucy5nZXRBbGxQcm9qZWN0cygpW2UudGFyZ2V0LmRhdGFzZXQuaW5kZXhdLm1hcmtTZWxlY3RlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b2RheVwiKSkge1xuICAgICAgICAgICAgICAgIF9zZXRUYXNrU2VsZWN0aW9uKFwidG9kYXlzXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3ZlcmR1ZVwiKSkge1xuICAgICAgICAgICAgICAgIF9zZXRUYXNrU2VsZWN0aW9uKFwib3ZlcmR1ZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRheXNcIikpIHtcbiAgICAgICAgICAgICAgICBfc2V0VGFza1NlbGVjdGlvbihcImRheXNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfc2V0VGFza1NlbGVjdGlvbihcInRvZGF5c1wiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvL3JldHVybnMgd2hpY2ggbnVtYmVyIGVsZW1lbnQgYSB0YXNrIGlzIGluIGEgZ2l2ZW4gbGlzdC5cbiAgICBjb25zdCBnZXRUYXNrSW5kZXggPSBlID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIEFycmF5LmZyb20oZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZHJlbikuaW5kZXhPZihlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZSkgLSAxXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIC8vYWRkcyB0aGUgQWRkIFRhc2sgZW50cnkgdG8gdGhlIGJvdHRvbSBvZiB0aGUgcHJvamVjdFxuICAgIGNvbnN0IF9kaXNwbGF5VGFza0lucHV0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZ2V0RWxlbWVudChcIi5wcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0NvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImFkZC10YXNrLWNvbnRhaW5lclwiLCBcImlucHV0LWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgYWRkVGFza05hbWUgPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImlucHV0XCIsXG4gICAgICAgICAgICBcImFkZC10YXNrLW5hbWUtaW5wdXRcIixcbiAgICAgICAgICAgIFwiYWRkLXRhc2staW5mb1wiLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiVGFzayBOYW1lXCIgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBhZGRUYXNrRGVzY3JpcHRpb24gPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImlucHV0XCIsXG4gICAgICAgICAgICBcImFkZC10YXNrLWRlc2NyaXB0aW9uLWlucHV0XCIsXG4gICAgICAgICAgICBcImFkZC10YXNrLWluZm9cIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlRhc2sgRGVzY3JpcHRpb25cIiB9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tEYXRlID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgICAgXCJhZGQtdGFzay1kYXRlLWlucHV0XCIsXG4gICAgICAgICAgICBcImFkZC10YXNrLWluZm9cIixcbiAgICAgICAgICAgIFwiRHVlIERhdGVcIixcbiAgICAgICAgICAgIHsgdHlwZTogXCJkYXRlXCIgfSxcbiAgICAgICAgICAgIHsgbWluOiBzdGFydE9mRGF5KG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgYWRkVGFza1ByaW9yaXR5ID0gX21ha2VOZXdFbGVtZW50KFwic2VsZWN0XCIsIFwiYWRkLXRhc2stcHJpb3JpdHktaW5wdXRcIiwgXCJhZGQtdGFzay1pbmZvXCIsIFwiXCIpO1xuICAgICAgICBjb25zdCBhZGRUYXNrUHJpb3JpdHlEZWZhdWx0ID0gX21ha2VOZXdFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIFwiXCIsIFwiUHJpb3JpdHlcIiwgeyB2YWx1ZTogMCB9KTtcbiAgICAgICAgY29uc3QgYWRkVGFza1ByaW9yaXR5TG93ID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgXCJMb3dcIixcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiTG93XCIgfSxcbiAgICAgICAgICAgIHsgc3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjojRTFBREFEXCIgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBhZGRUYXNrUHJpb3JpdHlNZWRpdW0gPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICBcIk1lZGl1bVwiLFxuICAgICAgICAgICAgeyB2YWx1ZTogXCJNZWRpdW1cIiB9LFxuICAgICAgICAgICAgeyBzdHlsZTogXCJiYWNrZ3JvdW5kLWNvbG9yOiNFRkVGMzhcIiB9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tQcmlvcml0eUhpZ2ggPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICBcIkhpZ2hcIixcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiSGlnaFwiIH0sXG4gICAgICAgICAgICB7IHN0eWxlOiBcImJhY2tncm91bmQtY29sb3I6IzlEQ0Q4RFwiIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IF9tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcImFkZC10YXNrLWJ1dHRvblwiLCBcImFkZC1idXR0b25cIiwgXCJBZGQgTmV3IFRhc2tcIik7XG5cbiAgICAgICAgYWRkVGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKGFkZFRhc2tQcmlvcml0eURlZmF1bHQpO1xuICAgICAgICBhZGRUYXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQoYWRkVGFza1ByaW9yaXR5TG93KTtcbiAgICAgICAgYWRkVGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKGFkZFRhc2tQcmlvcml0eU1lZGl1bSk7XG4gICAgICAgIGFkZFRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChhZGRUYXNrUHJpb3JpdHlIaWdoKTtcblxuICAgICAgICBhZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tOYW1lKTtcbiAgICAgICAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrRGVzY3JpcHRpb24pO1xuICAgICAgICBhZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tEYXRlKTtcbiAgICAgICAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrUHJpb3JpdHkpO1xuICAgICAgICBhZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0NvbnRhaW5lcik7XG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLmNsZWFyVGV4dEJveCgpO1xuICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVBZGRUYXNrQnV0dG9uKCk7XG4gICAgfTtcbiAgICAvL3doZW4gYSBwcm9qZWN0IG5hbWUgaXMgY2xpY2tlZCBvbiBhIHRhc2ssIGJyaW5ncyB1cCB0aGUgc2VsZWN0ZWQgcHJvamVjdFxuICAgIGNvbnN0IGxpbmtQcm9qZWN0ID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUb2dnbGUgPSBnZXRFbGVtZW50KFwiI3Byb2plY3RzLXRvZ2dsZVwiKTtcbiAgICAgICAgaWYgKHByb2plY3RUb2dnbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2VkXCIpKSB7XG4gICAgICAgICAgICBwcm9qZWN0VG9nZ2xlLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0RWxlbWVudHMoXCIucHJvamVjdC1zaWRlLWxhYmVsXCIpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbS50ZXh0Q29udGVudCA9PSBlLmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtLmNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvL3Rha2VzIGEgZ2l2ZW4gdGFzayBhbmQgYWRkcyBhIERPTSBlbnRyeSBpbiBhIHNwZWNpZmljIGdpdmVuIGluZGV4IG9mIHRoZSB0YXNrIGxpc3RcbiAgICBjb25zdCBfZmlsbEluVGFzayA9ICh0YXNrLCB0YXNrTnVtYmVyLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TnVtYmVyID0gdGFzay5nZXRQcm9qZWN0KCk7XG4gICAgICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZ2V0RWxlbWVudChcIi50YXNrcy1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3QgbmV3VGFza0NvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1jb250YWluZXJgLFxuICAgICAgICAgICAgYHRhc2stY29udGFpbmVyICR7dGFzay5nZXRDb21wbGV0ZSgpID8gXCJjb21wbGV0ZVwiIDogXCJcIn1gLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIHsgXCJkYXRhLXByaW9yaXR5XCI6IHRhc2suZ2V0UHJpb3JpdHkoKSB9LFxuICAgICAgICAgICAgeyBcImRhdGEtdGFza1wiOiB0YXNrTnVtYmVyIH0sXG4gICAgICAgICAgICB7IFwiZGF0YS1wcm9qZWN0XCI6IHByb2plY3ROdW1iZXIgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBuZXdUYXNrQ2hlY2tib3ggPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImlucHV0XCIsXG4gICAgICAgICAgICBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1jaGVja2JveGAsXG4gICAgICAgICAgICBcInRhc2stY2hlY2tib3hcIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgeyBcImRhdGEtcHJvamVjdFwiOiBwcm9qZWN0TnVtYmVyIH0sXG4gICAgICAgICAgICB7IFwiZGF0YS10YXNrXCI6IHRhc2tOdW1iZXIgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBuZXdUYXNrTmFtZSA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1uYW1lYCxcbiAgICAgICAgICAgIFwidGFzay1uYW1lIHRhc2staW5mb1wiLFxuICAgICAgICAgICAgdGFzay5nZXROYW1lKClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIGBwcm9qZWN0LSR7cHJvamVjdE51bWJlcn0tdGFzay0ke3Rhc2tOdW1iZXJ9LWRlc2NyaXB0aW9uYCxcbiAgICAgICAgICAgIFwidGFzay1kZXNjcmlwdGlvbiB0YXNrLWluZm9cIixcbiAgICAgICAgICAgIHRhc2suZ2V0RGVzY3JpcHRpb24oKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBuZXdUYXNrRGF0ZSA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1kYXRlYCxcbiAgICAgICAgICAgIFwidGFzay1kYXRlIHRhc2staW5mb1wiLFxuICAgICAgICAgICAgdGFzay5nZXREYXRlKClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgdGFza1Byb2plY3RMYWJlbCA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LWxhYmVsYCxcbiAgICAgICAgICAgIFwidGFzay1wcm9qZWN0LWluZm8gdGFzay1pbmZvXCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbmV3VGFza0VkaXRCdXR0b24gPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tZWRpdC1idXR0b25gLFxuICAgICAgICAgICAgXCJlZGl0LWJ1dHRvblwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tFZGl0SWNvbiA9IF9tYWtlTmV3RWxlbWVudChcImlcIiwgXCJcIiwgXCJmYS1zb2xpZCBmYS1wZW5jaWwgZWRpdC1pY29uXCIpO1xuICAgICAgICBjb25zdCBuZXdUYXNrRWRpdFRleHQgPSBfbWFrZU5ld0VsZW1lbnQoXCJzcGFuXCIsIFwiXCIsIFwiZWRpdC10ZXh0XCIsIFwiRWRpdCBUYXNrXCIpO1xuICAgICAgICBjb25zdCBuZXdUYXNrRGVsZXRlQnV0dG9uID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIGBwcm9qZWN0LSR7cHJvamVjdE51bWJlcn0tdGFzay0ke3Rhc2tOdW1iZXJ9LWRlbGV0ZS1idXR0b25gLFxuICAgICAgICAgICAgXCJlZGl0LWJ1dHRvbiBkZWxldGVcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBuZXdUYXNrRGVsZXRlSWNvbiA9IF9tYWtlTmV3RWxlbWVudChcImlcIiwgXCJcIiwgXCJmYS1zb2xpZCBmYS10cmFzaCBlZGl0LWljb25cIik7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEZWxldGVUZXh0ID0gX21ha2VOZXdFbGVtZW50KFwic3BhblwiLCBcIlwiLCBcImRlbGV0ZS10ZXh0XCIsIFwiRGVsZXRlIFRhc2tcIik7XG5cbiAgICAgICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrQ2hlY2tib3gpO1xuICAgICAgICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tOYW1lKTtcbiAgICAgICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrRGVzY3JpcHRpb24pO1xuICAgICAgICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tEYXRlKTtcbiAgICAgICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrUHJvamVjdExhYmVsKTtcbiAgICAgICAgbmV3VGFza0VkaXRCdXR0b24uYXBwZW5kQ2hpbGQobmV3VGFza0VkaXRJY29uKTtcbiAgICAgICAgbmV3VGFza0VkaXRCdXR0b24uYXBwZW5kQ2hpbGQobmV3VGFza0VkaXRUZXh0KTtcbiAgICAgICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrRWRpdEJ1dHRvbik7XG4gICAgICAgIG5ld1Rhc2tEZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQobmV3VGFza0RlbGV0ZUljb24pO1xuICAgICAgICBuZXdUYXNrRGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKG5ld1Rhc2tEZWxldGVUZXh0KTtcbiAgICAgICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrRGVsZXRlQnV0dG9uKTtcblxuICAgICAgICBfaW5zZXJ0QWZ0ZXIobmV3VGFza0NvbnRhaW5lciwgdGFza3NDb250YWluZXIuY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVUYXNrQnV0dG9ucyhuZXdUYXNrRWRpdEJ1dHRvbiwgbmV3VGFza0RlbGV0ZUJ1dHRvbik7XG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZUNoZWNrYm94KGluZGV4ICsgMSk7XG4gICAgICAgIGlmICh0YXNrLmdldENvbXBsZXRlKCkpIHtcbiAgICAgICAgICAgIG5ld1Rhc2tDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiY2hlY2tlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaXNQcm9qZWN0U2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgZ2V0RWxlbWVudHMoXCIucHJvamVjdC1zaWRlLWxhYmVsXCIpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICAgICAgICAgIGlzUHJvamVjdFNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghaXNQcm9qZWN0U2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRhc2tQcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKClbcHJvamVjdE51bWJlcl0uZ2V0TmFtZSgpO1xuICAgICAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlUHJvamVjdExpbmsodGFza1Byb2plY3RMYWJlbCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9zaG93cyB0aGUgY29uZmlybSBhbmQgY2FuY2VsIGJ1dHRvbnMgZm9yIGVkaXRpbmcgYSBwcm9qZWN0XG4gICAgY29uc3QgX2Rpc3BsYXlDb25maXJtQ2FuY2VsID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uQ29udGFpbmVyID0gZ2V0RWxlbWVudChcIi5idXR0b24tY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TnVtYmVyID0gX2dldFByb2plY3ROdW1iZXIoKTtcbiAgICAgICAgY29uc3QgY29uZmlybUNvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LWRlbGV0ZS1idXR0b24tY29udGFpbmVyYCxcbiAgICAgICAgICAgIFwiYnV0dG9uLWNvbnRhaW5lciBjb25jYW5cIlxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGNvbmZpcm1Qcm9qZWN0QnV0dG9uID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIGBwcm9qZWN0LSR7cHJvamVjdE51bWJlcn0tY29uZmlybS1kZWxldGUtYnV0dG9uYCxcbiAgICAgICAgICAgIFwiZWRpdC1idXR0b24gY29uZmlybVwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1Qcm9qZWN0SWNvbiA9IF9tYWtlTmV3RWxlbWVudChcImlcIiwgXCJcIiwgXCJmYS1zb2xpZCBmYS1jaGVjayBlZGl0LWljb25cIik7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1Qcm9qZWN0VGV4dCA9IF9tYWtlTmV3RWxlbWVudChcInNwYW5cIiwgXCJcIiwgXCJlZGl0LXRleHRcIiwgXCJDb25maXJtXCIpO1xuICAgICAgICBjb25maXJtUHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChjb25maXJtUHJvamVjdEljb24pO1xuICAgICAgICBjb25maXJtUHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChjb25maXJtUHJvamVjdFRleHQpO1xuXG4gICAgICAgIGNvbnN0IGNhbmNlbFByb2plY3RCdXR0b24gPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS1jYW5jZWwtZGVsZXRlLWJ1dHRvbmAsXG4gICAgICAgICAgICBcImVkaXQtYnV0dG9uIGNhbmNlbFwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGNhbmNlbFByb2plY3RJY29uID0gX21ha2VOZXdFbGVtZW50KFwiaVwiLCBcIlwiLCBcImZhLXNvbGlkIGZhLXhtYXJrIGVkaXQtaWNvblwiKTtcbiAgICAgICAgY29uc3QgY2FuY2VsUHJvamVjdFRleHQgPSBfbWFrZU5ld0VsZW1lbnQoXCJzcGFuXCIsIFwiXCIsIFwiZWRpdC10ZXh0XCIsIFwiQ2FuY2VsXCIpO1xuICAgICAgICBjYW5jZWxQcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKGNhbmNlbFByb2plY3RJY29uKTtcbiAgICAgICAgY2FuY2VsUHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChjYW5jZWxQcm9qZWN0VGV4dCk7XG5cbiAgICAgICAgY29uZmlybUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb25maXJtUHJvamVjdEJ1dHRvbik7XG4gICAgICAgIGNvbmZpcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsUHJvamVjdEJ1dHRvbik7XG5cbiAgICAgICAgcHJvamVjdEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb25maXJtQ29udGFpbmVyKTtcbiAgICB9O1xuXG4gICAgY29uc3QgX2ZpbGxJbkRheXMgPSBudW1iZXJPZkRheXMgPT4ge1xuICAgICAgICBsZXQgb3ZlcmFsbEluZGV4Q291bnQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBudW1iZXJPZkRheXM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRpc3BsYXllZFRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCB0YXNrQ291bnQgPSAwO1xuICAgICAgICAgICAgX2dldFRhc2tzKGkpLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgX2ZpbGxJblRhc2sodGFzaywgdGFzay5nZXROdW1iZXIoKSwgb3ZlcmFsbEluZGV4Q291bnQrKyk7XG4gICAgICAgICAgICAgICAgZGlzcGxheWVkVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGFza0NvdW50Kys7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChkaXNwbGF5ZWRUYXNrKSB7XG4gICAgICAgICAgICAgICAgX2luc2VydEFmdGVyKFxuICAgICAgICAgICAgICAgICAgICBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYGRheS0ke2l9LWF3YXktbGFiZWxgLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXktYXdheS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0KGFkZCh0b0RhdGUobmV3IERhdGUoKSksIHsgZGF5czogaSB9KSwgXCJNTS9kZC95eXl5XCIpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGdldEVsZW1lbnQoXCIudGFza3MtY29udGFpbmVyXCIpLmNoaWxkTm9kZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRFbGVtZW50KFwiLnRhc2tzLWNvbnRhaW5lclwiKS5jaGlsZE5vZGVzLmxlbmd0aCAtIHRhc2tDb3VudCAtIDFcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgb3ZlcmFsbEluZGV4Q291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgX2NoZWNrRGF5cyA9IChlLCBudW1DaGFuZ2VkKSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZXMgPSBbXTtcbiAgICAgICAgaWYgKG51bUNoYW5nZWQgPiAxNCkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlcy5wdXNoKFwiUGxlYXNlIGVudGVyIGxlc3MgdGhhbiAxNCBkYXlzXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKG51bUNoYW5nZWQgPCAxKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzLnB1c2goXCJQbGVhc2UgZW50ZXIgMSBkYXkgb3IgbW9yZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3JNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfZGlzcGxheUVycm9ycyhlLCBlcnJvck1lc3NhZ2VzKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBjaGFuZ2VEYXlzID0gZSA9PiB7XG4gICAgICAgIHByb2plY3RGdW5jdGlvbnMuc2V0Q3VycmVudERheXMoZ2V0RWxlbWVudChcIi5kYXlzLXNlbGVjdG9yXCIpLnZhbHVlKTtcbiAgICAgICAgaWYgKF9jaGVja0RheXMoZSwgcHJvamVjdEZ1bmN0aW9ucy5nZXRDdXJyZW50RGF5cygpKSkge1xuICAgICAgICAgICAgX3JlbW92ZUFsbENoaWxkcmVuKGdldEVsZW1lbnQoXCIudGFza3MtY29udGFpbmVyXCIpLCAxKTtcbiAgICAgICAgICAgIF9maWxsSW5EYXlzKHByb2plY3RGdW5jdGlvbnMuZ2V0Q3VycmVudERheXMoKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9kaXNwbGF5cyBhIG5ldyBwcm9qZWN0IHRoYXQgY2FuIGJlIHNlbGVjdGVkIHRvIHRoZSBzaWRlIHBhbmVsXG4gICAgY29uc3Qgc2V0dXBOZXdQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBfdG9nZ2xlQWN0aXZlKFwiI2FkZC1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICAgICAgX3RvZ2dsZUFjdGl2ZShcIiNhZGQtcHJvamVjdC1idXR0b24tdGV4dFwiKTtcbiAgICAgICAgY29uc3QgbmV3UHJvaklucHV0Q29udGFpbmVyID0gX21ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwibmV3LXByb2otaW5wdXQtY29udGFpbmVyXCIsIFwiaW5wdXQtY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBuZXdQcm9qSW5wdXQgPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImlucHV0XCIsXG4gICAgICAgICAgICBcIm5ldy1wcm9qLWlucHV0XCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiUHJvamVjdCBUaXRsZVwiIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbmV3UHJvakFkZEJ1dHRvbiA9IF9tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIm5ldy1wcm9qLWFkZC1idXR0b25cIiwgXCJhZGQtYnV0dG9uXCIsIFwiU3VibWl0XCIpO1xuXG4gICAgICAgIG5ld1Byb2pJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qSW5wdXQpO1xuICAgICAgICBuZXdQcm9qSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvakFkZEJ1dHRvbik7XG5cbiAgICAgICAgZ2V0RWxlbWVudChcIiNhZGQtcHJvamVjdC1idXR0b24tY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKG5ld1Byb2pJbnB1dENvbnRhaW5lcik7XG4gICAgICAgIEV2ZW50SGFuZGxlci5jbGVhclRleHRCb3goKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLmFkZFByb2plY3RTdWJtaXNzaW9uKCk7XG4gICAgfTtcbiAgICAvL2NhbmNlbHMgdGhlIG5ldyBQcm9qZWN0IGRpYWxvZ1xuICAgIGNvbnN0IGNhbmNlbE5ld1Byb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIF90b2dnbGVBY3RpdmUoXCIjYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuICAgICAgICBfdG9nZ2xlQWN0aXZlKFwiI2FkZC1wcm9qZWN0LWJ1dHRvbi10ZXh0XCIpO1xuICAgICAgICBnZXRFbGVtZW50KFwiI25ldy1wcm9qLWlucHV0LWNvbnRhaW5lclwiKS5yZW1vdmUoKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlQWRkQnV0dG9uKCk7XG4gICAgfTtcblxuICAgIC8vZ2V0cyB0aGUgaW5mb3JtYXRpb24gdGhhdCB3YXMgaW4gdGhlIG5ldyBwcm9qZWN0IGRpYWxvZ1xuICAgIGNvbnN0IGdldE5ld1Byb2pJbmZvID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4geyBuYW1lOiBET01NYW5pcC5nZXRFbGVtZW50KFwiI25ldy1wcm9qLWlucHV0XCIpLnZhbHVlIH07XG4gICAgfTtcblxuICAgIC8vY2hlY2tzIG92ZXIgdGhlIGluZm9ybWF0aW9uIGdpdmVuIGZvciBhIHByb2plY3QgYW5kIGRpc3BsYXlzIGVycm9yIG1lc3NhZ2VzIGlmIHRoZXJlIGlzIGFuIGlzc3VlXG4gICAgY29uc3QgY2hlY2tOZXdQcm9qZWN0ID0gKGUsIHByb2plY3QpID0+IHtcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZXMgPSBbXTtcbiAgICAgICAgaWYgKHByb2plY3QubmFtZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzLnB1c2goXCJQbGVhc2UgZW50ZXIgYSB0aXRsZSBmb3IgdGhlIHByb2plY3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yTWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX2Rpc3BsYXlFcnJvcnMoZSwgZXJyb3JNZXNzYWdlcyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy91cGRhdGVzIHRoZSBzaWRlIHBhbmVsIHRoYXQgZGlzcGxheXMgdGhlIGxpc3Qgb2YgYWxsIG9mIHRoZSBwcm9qZWN0c1xuICAgIGNvbnN0IHVwZGF0ZVByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoZ2V0RWxlbWVudChcIiNuZXctcHJvai1pbnB1dC1jb250YWluZXJcIikpIHtcbiAgICAgICAgICAgIGdldEVsZW1lbnQoXCIjbmV3LXByb2otaW5wdXQtY29udGFpbmVyXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgX3RvZ2dsZUFjdGl2ZShcIiNhZGQtcHJvamVjdC1idXR0b25cIik7XG4gICAgICAgICAgICBfdG9nZ2xlQWN0aXZlKFwiI2FkZC1wcm9qZWN0LWJ1dHRvbi10ZXh0XCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRFbGVtZW50KFwiLnRpdGxlLWVkaXRcIikpIHtcbiAgICAgICAgICAgIF9kaXNwbGF5VGl0bGUoKTtcbiAgICAgICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZVByb2plY3RCdXR0b25zKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFnZXRFbGVtZW50KFwiI3Byb2plY3RzLXRvZ2dsZVwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG9zZWRcIikpIHtcbiAgICAgICAgICAgIF9kaXNwbGF5UHJvamVjdHMoKTtcbiAgICAgICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZUFkZEJ1dHRvbigpO1xuICAgICAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlUHJvamVjdHMoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvL29wZW5zIHVwIHRoZSBlZGl0IHByb2plY3QgZGlhbG9nXG4gICAgY29uc3QgZGlzcGxheUVkaXRQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TnVtYmVyID0gX2dldFByb2plY3ROdW1iZXIoKTtcbiAgICAgICAgY29uc3QgcHJvamVjVGl0bGUgPSBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKClbcHJvamVjdE51bWJlcl0uZ2V0TmFtZSgpO1xuICAgICAgICBjb25zdCB0aXRsZVdyYXBwZXIgPSBnZXRFbGVtZW50KFwiLnByb2plY3QtdGl0bGUtd3JhcHBlclwiKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgICAgIGBwcm9qZWN0LSR7cHJvamVjdE51bWJlcn0tdGl0bGUtaW5wdXRgLFxuICAgICAgICAgICAgXCJ0aXRsZS1lZGl0XCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogcHJvamVjVGl0bGUgfSxcbiAgICAgICAgICAgIHsgXCJkYXRhLXByb2plY3RcIjogcHJvamVjdE51bWJlciB9XG4gICAgICAgICk7XG4gICAgICAgIHRpdGxlV3JhcHBlci5pbnNlcnRCZWZvcmUocHJvamVjdFRpdGxlSW5wdXQsIHRpdGxlV3JhcHBlci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgdGl0bGVXcmFwcGVyLmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b25Db250YWluZXIgPSBnZXRFbGVtZW50KFwiLmJ1dHRvbi1jb250YWluZXJcIik7XG4gICAgICAgIF9yZW1vdmVBbGxDaGlsZHJlbihwcm9qZWN0QnV0dG9uQ29udGFpbmVyKTtcblxuICAgICAgICBfZGlzcGxheUNvbmZpcm1DYW5jZWwoKTtcblxuICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVDb25maXJtUHJvamVjdEVkaXQoZ2V0RWxlbWVudChcIi5lZGl0LWJ1dHRvbi5jb25maXJtXCIpKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlQ2FuY2VsQnV0dG9uKGdldEVsZW1lbnQoXCIuZWRpdC1idXR0b24uY2FuY2VsXCIpKTtcbiAgICB9O1xuXG4gICAgLy9kaXNwbGF5cyB0aGUgY29uZmlybWF0aW9uIG9mIGRlbGV0aW5nIGEgcHJvamVjdFxuICAgIGNvbnN0IGRpc3BsYXlEZWxldGVQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uQ29udGFpbmVyID0gZ2V0RWxlbWVudChcIi5idXR0b24tY29udGFpbmVyXCIpO1xuICAgICAgICBfcmVtb3ZlQWxsQ2hpbGRyZW4ocHJvamVjdEJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgX2Rpc3BsYXlDb25maXJtQ2FuY2VsKCk7XG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlRGVsZXRlUHJvamVjdChnZXRFbGVtZW50KFwiLmVkaXQtYnV0dG9uLmNvbmZpcm1cIikpO1xuICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVDYW5jZWxCdXR0b24oZ2V0RWxlbWVudChcIi5lZGl0LWJ1dHRvbi5jYW5jZWxcIikpO1xuICAgIH07XG4gICAgLy9kaXNjYXJkcyB0aGUgZWRpdCBhbmQgZGlzcGxheXMgdGhlIGluaXRpYWwgcHJvamVjdCB0aXRsZVxuICAgIGNvbnN0IGNhbmNlbFByb2plY3RFZGl0ID0gKCkgPT4ge1xuICAgICAgICBfZGlzcGxheVRpdGxlKCk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZVByb2plY3RCdXR0b25zKCk7XG4gICAgfTtcblxuICAgIC8vb3BlbnMgYW5kIGNsb3NlcyB0aGUgZWxlbWVudHMgdW5kZXIgdGhlIHByb2plY3RzIGFuZCB0b2RheSBzaWRlIGhlYWRlcnMgd2hlbiB0aGUgdG9nZ2xlIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgY29uc3QgZXhwYW5kVG9nZ2xlID0gZSA9PiB7XG4gICAgICAgIGxldCBhcnJheSA9IFtdO1xuICAgICAgICBsZXQgdHlwZSA9IFwiXCI7XG4gICAgICAgIGxldCBkdWUgPSBcIlwiO1xuICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCA9PSBcInByb2plY3RzLXNpZGVcIikge1xuICAgICAgICAgICAgYXJyYXkgPSBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKCk7XG4gICAgICAgICAgICB0eXBlID0gXCJwcm9qZWN0XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b2RheVwiKSkge1xuICAgICAgICAgICAgYXJyYXkgPSBfZ2V0VGFza3MoMCk7XG4gICAgICAgICAgICB0eXBlID0gXCJ0YXNrXCI7XG4gICAgICAgICAgICBkdWUgPSBcInRvZGF5XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJvdmVyZHVlXCIpKSB7XG4gICAgICAgICAgICBhcnJheSA9IF9nZXRPdmVyZHVlVGFza3MoKTtcbiAgICAgICAgICAgIHR5cGUgPSBcInRhc2tcIjtcbiAgICAgICAgICAgIGR1ZSA9IFwib3ZlcmR1ZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG9zZWRcIikpIHtcbiAgICAgICAgICAgIF9yZXZlYWxBcnJheShlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQsIGFycmF5LCB0eXBlLCBkdWUpO1xuICAgICAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlU2lkZXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9yZW1vdmVBbGxDaGlsZHJlbihlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJjbG9zZWRcIik7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcblxuICAgIC8vcmV0dXJucyB0aGUgaW5mb3JtYXRpb24gZ2l2ZW4gYnkgdGhlIGFkZCB0YXNrIGRpYWxvZ1xuICAgIGNvbnN0IGdldFRhc2tJbmZvID0gKGluZGV4LCBwcm9qZWN0TnVtYmVyKSA9PiB7XG4gICAgICAgIGxldCBmb3JtSW5mbztcbiAgICAgICAgbGV0IHRhc2tOdW1iZXI7XG4gICAgICAgIGlmICghcHJvamVjdE51bWJlcikge1xuICAgICAgICAgICAgcHJvamVjdE51bWJlciA9IF9nZXRQcm9qZWN0TnVtYmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm9ybUluZm8gPSBnZXRFbGVtZW50cyhcIi5hZGQtdGFzay1pbmZvXCIpO1xuICAgICAgICAgICAgdGFza051bWJlciA9IHByb2plY3RGdW5jdGlvbnMuZ2V0QWxsUHJvamVjdHMoKVtwcm9qZWN0TnVtYmVyXS50YXNrcy5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3JtSW5mbyA9IGdldEVsZW1lbnRzKGAjcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHtpbmRleH0tY29udGFpbmVyIC5lZGl0LXRhc2staW5mb2ApO1xuICAgICAgICAgICAgdGFza051bWJlciA9IGluZGV4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBmb3JtSW5mb1swXS52YWx1ZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBmb3JtSW5mb1sxXS52YWx1ZSxcbiAgICAgICAgICAgIGRhdGU6IGZvcm1JbmZvWzJdLnZhbHVlID8gZm9ybWF0KHRvRGF0ZShwYXJzZUlTTyhmb3JtSW5mb1syXS52YWx1ZSkpLCBcIk1NL2RkL3l5eXlcIikgOiBcIlwiLFxuICAgICAgICAgICAgcHJpb3JpdHk6IGZvcm1JbmZvWzNdLnZhbHVlLFxuICAgICAgICAgICAgcHJvamVjdDogcHJvamVjdE51bWJlcixcbiAgICAgICAgICAgIG51bWJlcjogdGFza051bWJlcixcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLy9jaGVja3MgdGhlIGluZm9ybWF0aW9uIGdpdmVuIGluIGEgbmV3IG9yIHVwZGF0ZWQgdGFzayBhbmQgZGlzcGxheXMgZXJyb3IgbWVzc2FnZXMgaWYgYW55dGhpbmcgaXMgd3JvbmdcbiAgICBjb25zdCBjaGVja05ld1Rhc2sgPSAoZSwgdGFzaykgPT4ge1xuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlcyA9IFtdO1xuICAgICAgICBpZiAodGFzay5uYW1lID09IFwiXCIpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZXMucHVzaChcIlBsZWFzZSBlbnRlciBhIG5hbWUgZm9yIHRoZSB0YXNrXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXNrLmRlc2NyaXB0aW9uID09IFwiXCIpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZXMucHVzaChcIlBsZWFzZSBlbnRlciBhIGRlc2NyaXB0aW9uIGZvciB0aGUgdGFza1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFzay5kYXRlID09IFwiXCIpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZXMucHVzaChcIlBsZWFzZSBlbnRlciBhIGR1ZSBkYXRlIGZvciB0aGUgdGFza1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PSAwKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzLnB1c2goXCJQbGVhc2UgZW50ZXIgYSBwcmlvcml0eSBsZXZlbCBmb3IgdGhlIHRhc2tcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3JNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfZGlzcGxheUVycm9ycyhlLCBlcnJvck1lc3NhZ2VzKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vcmVmcmVzaGVzIHRoZSB0YXNrIGxpc3QgdG8gZGlzcGxheSBhIG5ldyBvciBlZGl0ZWQgdGFza1xuICAgIGNvbnN0IHVwZGF0ZVRhc2tMaXN0ID0gcHJvamVjdE51bWJlciA9PiB7XG4gICAgICAgIGlmIChnZXRFbGVtZW50KFwiI3RvZGF5cy10b2RvLXNpZGVcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgICAgIHNob3dUb2RheSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGdldEVsZW1lbnQoXCIjb3ZlcmR1ZS10b2RvLXNpZGVcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgICAgIHNob3dPdmVyZHVlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2V0RWxlbWVudChcIiNkYXlzLXRvZG8tc2lkZVwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICAgICAgY2hhbmdlRGF5cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2V0RWxlbWVudChgI3Byb2plY3QtJHtwcm9qZWN0TnVtYmVyfWApLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFnZXRFbGVtZW50KFwiI3RvZGF5LXRvZ2dsZVwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG9zZWRcIikpIHtcbiAgICAgICAgICAgIF9kaXNwbGF5VG9kYXlTaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFnZXRFbGVtZW50KFwiI292ZXJkdWUtdG9nZ2xlXCIpLmNsYXNzTGlzdC5jb250YWlucyhcImNsb3NlZFwiKSkge1xuICAgICAgICAgICAgX2Rpc3BsYXlPdmVyZHVlU2lkZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IF9jb25maXJtQ2FuY2VsVGFzayA9IChjb25maXJtQnV0dG9uLCBjYW5jZWxCdXR0b24pID0+IHtcbiAgICAgICAgY29uZmlybUJ1dHRvbi5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwiZmEtcGVuY2lsXCIpO1xuICAgICAgICBjb25maXJtQnV0dG9uLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJmYS1jaGVja1wiKTtcbiAgICAgICAgY29uZmlybUJ1dHRvbi5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XG4gICAgICAgIGNvbmZpcm1CdXR0b24uY2xhc3NMaXN0LmFkZChcImNvbmZpcm1cIik7XG5cbiAgICAgICAgY2FuY2VsQnV0dG9uLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJmYS10cmFzaFwiKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJmYS14bWFya1wiKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIH07XG5cbiAgICAvL3Nob3dzIHRoZSBlZGl0IHRhc2sgZGlhbG9nIHdoZW4gdGhlIGVkaXQgdGFzayBidXR0b24gaGFzIGJlZW4gcHJlc3NlZCwgZGVmYXVsdGluZyB3aXRoIHRoZVxuICAgIC8vY3VycmVudCB0YXNrIGluZm9ybWF0aW9uXG4gICAgY29uc3QgZGlzcGxheUVkaXRUYXNrID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGUuY3VycmVudFRhcmdldC5uZXh0U2libGluZztcbiAgICAgICAgY29uc3QgcHJvamVjdE51bWJlciA9IGVkaXRCdXR0b24ucGFyZW50RWxlbWVudC5kYXRhc2V0LnByb2plY3Q7XG4gICAgICAgIGNvbnN0IHRhc2tOdW1iZXIgPSBlZGl0QnV0dG9uLnBhcmVudEVsZW1lbnQuZGF0YXNldC50YXNrO1xuICAgICAgICBjb25zdCBlZGl0VGFzayA9IHByb2plY3RGdW5jdGlvbnMuZ2V0QWxsUHJvamVjdHMoKVtwcm9qZWN0TnVtYmVyXS5nZXRUYXNrcygpW3Rhc2tOdW1iZXJdO1xuXG4gICAgICAgIGNvbnN0IGVkaXRUYXNrTmFtZSA9IF9tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgICAgIFwiZWRpdC10YXNrLW5hbWUtaW5wdXRcIixcbiAgICAgICAgICAgIFwiZWRpdC10YXNrLWluZm9cIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBlZGl0VGFzay5nZXROYW1lKCkgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBlZGl0VGFza0Rlc2NyaXB0aW9uID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgICAgXCJlZGl0LXRhc2stZGVzY3JpcHRpb24taW5wdXRcIixcbiAgICAgICAgICAgIFwiZWRpdC10YXNrLWluZm9cIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBlZGl0VGFzay5nZXREZXNjcmlwdGlvbigpIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZWRpdFRhc2tEYXRlID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgICAgXCJlZGl0LXRhc2stZGF0ZS1pbnB1dFwiLFxuICAgICAgICAgICAgXCJlZGl0LXRhc2staW5mb1wiLFxuICAgICAgICAgICAgXCJEdWUgRGF0ZVwiLFxuICAgICAgICAgICAgeyB0eXBlOiBcImRhdGVcIiB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogbmV3IERhdGUoZWRpdFRhc2suZ2V0RGF0ZSgpKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXSB9LFxuICAgICAgICAgICAgeyBtaW46IHN0YXJ0T2ZEYXkobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF0gfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBlZGl0VGFza1ByaW9yaXR5ID0gX21ha2VOZXdFbGVtZW50KFwic2VsZWN0XCIsIFwiZWRpdC10YXNrLXByaW9yaXR5LWlucHV0XCIsIFwiZWRpdC10YXNrLWluZm9cIiwgXCJcIik7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrUHJpb3JpdHlMb3cgPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICBcIkxvd1wiLFxuICAgICAgICAgICAgeyB2YWx1ZTogXCJMb3dcIiB9LFxuICAgICAgICAgICAgeyBzdHlsZTogXCJiYWNrZ3JvdW5kLWNvbG9yOiNFMUFEQURcIiB9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrUHJpb3JpdHlNZWRpdW0gPSBfbWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICBcIk1lZGl1bVwiLFxuICAgICAgICAgICAgeyB2YWx1ZTogXCJNZWRpdW1cIiB9LFxuICAgICAgICAgICAgeyBzdHlsZTogXCJiYWNrZ3JvdW5kLWNvbG9yOiNFRkVGMzhcIiB9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrUHJpb3JpdHlIaWdoID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgXCJIaWdoXCIsXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkhpZ2hcIiB9LFxuICAgICAgICAgICAgeyBzdHlsZTogXCJiYWNrZ3JvdW5kLWNvbG9yOiM5RENEOERcIiB9XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGVkaXRUYXNrLmdldFByaW9yaXR5KCkgPT0gXCJMb3dcIikge1xuICAgICAgICAgICAgZWRpdFRhc2tQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcInNlbGVjdGVkXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGVkaXRUYXNrLmdldFByaW9yaXR5KCkgPT0gXCJNZWRpdW1cIikge1xuICAgICAgICAgICAgZWRpdFRhc2tQcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcInNlbGVjdGVkXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGVkaXRUYXNrLmdldFByaW9yaXR5KCkgPT0gXCJIaWdoXCIpIHtcbiAgICAgICAgICAgIGVkaXRUYXNrUHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0RWxlbWVudHMoYCNwcm9qZWN0LSR7cHJvamVjdE51bWJlcn0tdGFzay0ke3Rhc2tOdW1iZXJ9LWNvbnRhaW5lciAudGFzay1pbmZvYCkuZm9yRWFjaChlbGUgPT5cbiAgICAgICAgICAgIGVsZS5yZW1vdmUoKVxuICAgICAgICApO1xuXG4gICAgICAgIGVkaXRUYXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQoZWRpdFRhc2tQcmlvcml0eUxvdyk7XG4gICAgICAgIGVkaXRUYXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQoZWRpdFRhc2tQcmlvcml0eU1lZGl1bSk7XG4gICAgICAgIGVkaXRUYXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQoZWRpdFRhc2tQcmlvcml0eUhpZ2gpO1xuXG4gICAgICAgIGNvbnN0IGVkaXRUYXNrQ29udGFpbmVyID0gZ2V0RWxlbWVudChgI3Byb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tY29udGFpbmVyYCk7XG4gICAgICAgIGVkaXRUYXNrQ29udGFpbmVyLmluc2VydEJlZm9yZShlZGl0VGFza05hbWUsIGVkaXRUYXNrQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQucHJldmlvdXNTaWJsaW5nKTtcbiAgICAgICAgZWRpdFRhc2tDb250YWluZXIuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgZWRpdFRhc2tEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGVkaXRUYXNrQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQucHJldmlvdXNTaWJsaW5nXG4gICAgICAgICk7XG4gICAgICAgIGVkaXRUYXNrQ29udGFpbmVyLmluc2VydEJlZm9yZShlZGl0VGFza0RhdGUsIGVkaXRUYXNrQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQucHJldmlvdXNTaWJsaW5nKTtcbiAgICAgICAgZWRpdFRhc2tDb250YWluZXIuaW5zZXJ0QmVmb3JlKGVkaXRUYXNrUHJpb3JpdHksIGVkaXRUYXNrQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQucHJldmlvdXNTaWJsaW5nKTtcblxuICAgICAgICBfY29uZmlybUNhbmNlbFRhc2soZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uKTtcblxuICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVDb25maXJtVGFza0VkaXQoZWRpdEJ1dHRvbik7XG4gICAgfTtcblxuICAgIGNvbnN0IGRpc3BsYXlEZWxldGVUYXNrID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGUuY3VycmVudFRhcmdldC5wcmV2aW91c1NpYmxpbmc7XG5cbiAgICAgICAgX2NvbmZpcm1DYW5jZWxUYXNrKGVkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZUNvbmZpcm1UYXNrRGVsZXRlKGRlbGV0ZUJ1dHRvbik7XG4gICAgfTtcblxuICAgIC8vc2V0cyB0YXNrIGJhY2sgdG8gb3JpZ2luYWwgYmVmb3JlIGVkaXQgd2FzIHJlcXVlc3RlZFxuICAgIGNvbnN0IGNhbmNlbEVkaXQgPSBlID0+IHtcbiAgICAgICAgdXBkYXRlVGFza0xpc3QoZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0KTtcbiAgICB9O1xuXG4gICAgLy9idWlsZHMgdGhlIGJhc2ljIG91dGxpbmUgb2YgYW55IHBhZ2VcbiAgICBjb25zdCBfYnVpbGRQYWdlID0gdHlwZSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW5EaXNwbGF5ID0gZ2V0RWxlbWVudChcIiNtYWluLWRpc3BsYXlcIik7XG4gICAgICAgIGlmIChtYWluRGlzcGxheS5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG1haW5EaXNwbGF5LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZUNvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudChcImRpdlwiLCBgJHt0eXBlfS1jb250YWluZX1gLCBcInByb2plY3QtY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCB0aXRsZVdyYXBwZXIgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgYCR7dHlwZX0tdGl0bGUtd3JhcHBlcmAsIFwicHJvamVjdC10aXRsZS13cmFwcGVyXCIpO1xuICAgICAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudChcImRpdlwiLCBgJHt0eXBlfS10YXNrcy1jb250YWluZXJgLCBcInRhc2tzLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgdGFza3NXcmFwcGVyID0gX21ha2VOZXdFbGVtZW50KFwiZGl2XCIsIGAke3R5cGV9LXRhc2tzLXdyYXBwZXJgLCBcInRhc2tzLXdyYXBwZXJcIik7XG4gICAgICAgIGNvbnN0IHNwYWNlciA9IF9tYWtlTmV3RWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZVdyYXBwZXIpO1xuICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFjZXIpO1xuICAgICAgICB0YXNrc1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXIpO1xuICAgICAgICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tzV3JhcHBlcik7XG4gICAgICAgIG1haW5EaXNwbGF5LmFwcGVuZENoaWxkKHBhZ2VDb250YWluZXIpO1xuICAgIH07XG5cbiAgICAvL2Rpc3BsYXlzIGEgcHJvamVjdCBwYWdlIGJhc2VkIG9uIHdoYXQgcHJvamVjdCB3YXMgc2VsZWN0ZWRcbiAgICBjb25zdCBzaG93UHJvamVjdCA9IGUgPT4ge1xuICAgICAgICBfbWFya1NlbGVjdGVkUHJvamVjdChlKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE51bWJlciA9IF9nZXRQcm9qZWN0TnVtYmVyKCk7XG4gICAgICAgIF9idWlsZFBhZ2UoZSwgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfWApO1xuXG4gICAgICAgIGdldEVsZW1lbnQoXCIucHJvamVjdC1jb250YWluZXJcIikuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIsIHByb2plY3ROdW1iZXIpO1xuICAgICAgICBfZGlzcGxheVRpdGxlKCk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZVByb2plY3RCdXR0b25zKCk7XG4gICAgICAgIHByb2plY3RGdW5jdGlvbnNcbiAgICAgICAgICAgIC5nZXRBbGxQcm9qZWN0cygpXG4gICAgICAgICAgICBbcHJvamVjdE51bWJlcl0uZ2V0VGFza3MoKVxuICAgICAgICAgICAgLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiBfZmlsbEluVGFzayh0YXNrLCBpbmRleCwgaW5kZXgpKTtcbiAgICAgICAgX2Rpc3BsYXlUYXNrSW5wdXQoKTtcbiAgICB9O1xuXG4gICAgLy9zaG93cyB0aGUgVG9kYXkncyBUYXNrcyBwYWdlXG4gICAgY29uc3Qgc2hvd1RvZGF5ID0gZSA9PiB7XG4gICAgICAgIF9tYXJrU2VsZWN0ZWRQcm9qZWN0KGUpO1xuICAgICAgICBfYnVpbGRQYWdlKFwidG9kYXlcIik7XG5cbiAgICAgICAgY29uc3QgdG9kYXkgPSBmb3JtYXQodG9EYXRlKG5ldyBEYXRlKCkpLCBcIk1NL2RkL3l5eXlcIik7XG4gICAgICAgIGNvbnN0IHRvZGF5VGl0bGUgPSBfbWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ0b2RheS10aXRsZVwiLCBcInByb2plY3QtdGl0bGVcIiwgYFRvZGF5OiAke3RvZGF5fWApO1xuICAgICAgICBnZXRFbGVtZW50KFwiLnByb2plY3QtdGl0bGUtd3JhcHBlclwiKS5hcHBlbmRDaGlsZCh0b2RheVRpdGxlKTtcblxuICAgICAgICBfZ2V0VGFza3MoMCkuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IF9maWxsSW5UYXNrKHRhc2ssIHRhc2suZ2V0TnVtYmVyKCksIGluZGV4KSk7XG4gICAgfTtcblxuICAgIC8vYnJpbmdzIHVwIHRoZSBwYWdlIHRoYXQgc2hvd3MgYWxsIG9mIHRoZSBvdmVyZHVlIHRhc2tzXG4gICAgY29uc3Qgc2hvd092ZXJkdWUgPSBlID0+IHtcbiAgICAgICAgX21hcmtTZWxlY3RlZFByb2plY3QoZSk7XG4gICAgICAgIF9idWlsZFBhZ2UoXCJvdmVyZHVlXCIpO1xuXG4gICAgICAgIGNvbnN0IG92ZXJkdWVUaXRsZSA9IF9tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcIm92ZXJkdWUtdGl0bGVcIiwgXCJwcm9qZWN0LXRpdGxlXCIsIFwiT3ZlcmR1ZVwiKTtcbiAgICAgICAgZ2V0RWxlbWVudChcIi5wcm9qZWN0LXRpdGxlLXdyYXBwZXJcIikuYXBwZW5kQ2hpbGQob3ZlcmR1ZVRpdGxlKTtcblxuICAgICAgICBfZ2V0T3ZlcmR1ZVRhc2tzKCkuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IF9maWxsSW5UYXNrKHRhc2ssIHRhc2suZ2V0TnVtYmVyKCksIGluZGV4KSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNob3dEYXlzID0gZSA9PiB7XG4gICAgICAgIF9tYXJrU2VsZWN0ZWRQcm9qZWN0KGUpO1xuICAgICAgICBfYnVpbGRQYWdlKFwiZGF5c1wiKTtcblxuICAgICAgICBjb25zdCB0aXRsZVdyYXBwZXIgPSBnZXRFbGVtZW50KFwiLnByb2plY3QtdGl0bGUtd3JhcHBlclwiKTtcbiAgICAgICAgY29uc3QgZGF5c1NlbGVjdG9yID0gX21ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgICAgXCJkYXlzLXNlbGVjdG9yXCIsXG4gICAgICAgICAgICBcImRheXMtc2VsZWN0b3JcIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICB7IHR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgIHsgbWF4OiAxNCB9LFxuICAgICAgICAgICAgeyBtaW46IDEgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IHByb2plY3RGdW5jdGlvbnMuZ2V0Q3VycmVudERheXMoKSB9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGRheXNUaXRsZSA9IF9tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImRheXMtdGl0bGVcIiwgXCJwcm9qZWN0LXRpdGxlXCIsIFwiRGF5cyBBd2F5OiBcIik7XG4gICAgICAgIHRpdGxlV3JhcHBlci5hcHBlbmRDaGlsZChkYXlzVGl0bGUpO1xuICAgICAgICB0aXRsZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZGF5c1NlbGVjdG9yKTtcblxuICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVEYXlzU2VsZWN0b3IoKTtcblxuICAgICAgICBfZmlsbEluRGF5cyhwcm9qZWN0RnVuY3Rpb25zLmdldEN1cnJlbnREYXlzKCkpO1xuICAgIH07XG5cbiAgICBjb25zdCBjb25maXJtQ2xlYXJBbGwgPSBlID0+IHtcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0Lmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSBcIkNsaWNrIGhlcmUgYWdhaW4gdG8gY2xlYXIgYWxsIGRhdGFcIjtcbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlQ29uZmlybUNsZWFyQWxsKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNhbmNlbENsZWFyQWxsID0gZSA9PiB7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gXCJDbGVhciBBbGwgRGF0YVwiO1xuICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVDbGVhckFsbEJ1dHRvbigpO1xuICAgIH07XG4gICAgLy9pbml0YWxpemVzIHRoZSB3ZWJwYWdlIGFuZCBzdGFydHMgdGhlIGJhc2ljIGxpc3RlbmVyc1xuICAgIGNvbnN0IHN0YXJ0UGFnZSA9ICgpID0+IHtcbiAgICAgICAgX21ha2VTdGFydGluZ1BhZ2UoKTtcbiAgICAgICAgc2V0VGltZW91dChfZml4U3RhcnRpbmdBbmltYXRpb25zLCAxKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLmluaXRTdGFydGluZ0xpc3RlbmVycygpO1xuICAgICAgICBwcm9qZWN0RnVuY3Rpb25zLmxvYWRQcm9qZWN0cygpO1xuICAgICAgICBfZGlzcGxheVRvZGF5U2lkZSgpO1xuICAgICAgICBfZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZVNpZGVzKCk7XG4gICAgICAgIGdldEVsZW1lbnQoXCIjdG9kYXlzLXRvZG8tc2lkZVwiKS5jbGljaygpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRFbGVtZW50LFxuICAgICAgICBnZXRFbGVtZW50cyxcbiAgICAgICAgcmVtb3ZlVGV4dCxcbiAgICAgICAgY2hlY2tOZXdQcm9qZWN0LFxuICAgICAgICBzZXR1cE5ld1Byb2plY3QsXG4gICAgICAgIGNhbmNlbE5ld1Byb2plY3QsXG4gICAgICAgIHJlZnJlc2hUYXNrU2lkZXMsXG4gICAgICAgIGdldE5ld1Byb2pJbmZvLFxuICAgICAgICB1cGRhdGVQcm9qZWN0TGlzdCxcbiAgICAgICAgZXhwYW5kVG9nZ2xlLFxuICAgICAgICBzaG93UHJvamVjdCxcbiAgICAgICAgZGlzcGxheURlbGV0ZVByb2plY3QsXG4gICAgICAgIGdldFRhc2tJbmZvLFxuICAgICAgICBnZXRUYXNrSW5kZXgsXG4gICAgICAgIGNoZWNrTmV3VGFzayxcbiAgICAgICAgZGlzcGxheUVkaXRQcm9qZWN0LFxuICAgICAgICBkaXNwbGF5RWRpdFRhc2ssXG4gICAgICAgIGRpc3BsYXlEZWxldGVUYXNrLFxuICAgICAgICBsaW5rUHJvamVjdCxcbiAgICAgICAgdXBkYXRlVGFza0xpc3QsXG4gICAgICAgIGNhbmNlbEVkaXQsXG4gICAgICAgIGNhbmNlbFByb2plY3RFZGl0LFxuICAgICAgICBzaG93VG9kYXksXG4gICAgICAgIHNob3dPdmVyZHVlLFxuICAgICAgICBzaG93RGF5cyxcbiAgICAgICAgc3RhcnRQYWdlLFxuICAgICAgICBjaGFuZ2VEYXlzLFxuICAgICAgICBzb3J0QXJyYXksXG4gICAgICAgIGNvbmZpcm1DbGVhckFsbCxcbiAgICAgICAgY2FuY2VsQ2xlYXJBbGwsXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTU1hbmlwO1xuIiwiaW1wb3J0IERPTU1hbmlwIGZyb20gXCIuL0RPTU1hbmlwXCI7XG5pbXBvcnQgeyBwcm9qZWN0RnVuY3Rpb25zIH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuY29uc3QgRXZlbnRIYW5kbGVyID0gKCgpID0+IHtcbiAgICAvL2FjdGl2YXRlcyB0aGUgQWRkIHByb2plY3QgYnV0dG9uXG4gICAgY29uc3QgY2xlYXJUZXh0Qm94ID0gKCkgPT4ge1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50cyhcImlucHV0W3R5cGU9J3RleHQnIGldXCIpLmZvckVhY2goZWxlID0+XG4gICAgICAgICAgICBlbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTU1hbmlwLnJlbW92ZVRleHQsIHtcbiAgICAgICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudHMoXCJpbnB1dFt0eXBlPSd0ZXh0JyBpXVwiKS5mb3JFYWNoKGVsZSA9PlxuICAgICAgICAgICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5yZW1vdmVUZXh0LCB7IG9uY2U6IHRydWUgfSlcbiAgICAgICAgKTtcbiAgICB9O1xuICAgIC8vYWN0aXZhdGVzIHRoZSBhZGQgYnV0dG9uIGFuZCB0aGUgc2lkZSB0b2dnbGVzXG4gICAgY29uc3QgYWN0aXZhdGVBZGRCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIjYWRkLXByb2plY3QtYnV0dG9uXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5jYW5jZWxOZXdQcm9qZWN0KTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNhZGQtcHJvamVjdC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTU1hbmlwLnNldHVwTmV3UHJvamVjdCk7XG4gICAgfTtcbiAgICBjb25zdCBhY3RpdmF0ZUNsZWFyQWxsQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI2NsZWFyLWFsbC1idXR0b25cIikucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgRE9NTWFuaXAuY2FuY2VsQ2xlYXJBbGwpO1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI2NsZWFyLWFsbC1idXR0b25cIikucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTU1hbmlwLmNvbmZpcm1DbGVhckFsbCk7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIjY2xlYXItYWxsLWJ1dHRvblwiKS5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgcHJvamVjdEZ1bmN0aW9ucy5jb25maXJtQWxsQ2xlYXJcbiAgICAgICAgKTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNjbGVhci1hbGwtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5jb25maXJtQ2xlYXJBbGwpO1xuICAgIH07XG5cbiAgICAvL2FjdGl2YXRlcyB0aGUgbGlzdGVuZXJzIGZvciBhbGwgb2YgY2xpY2thYmxlIGJ1dHRvbnMgYXQgdGhlIHN0YXJ0IG9mIHRoZSBwYWdlIGxvYWRcbiAgICBjb25zdCBpbml0U3RhcnRpbmdMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIGFjdGl2YXRlQWRkQnV0dG9uKCk7XG4gICAgICAgIGFjdGl2YXRlQ2xlYXJBbGxCdXR0b24oKTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudHMoXCIuZHJvcGRvd24tdG9nZ2xlXCIpLmZvckVhY2goZWxlID0+XG4gICAgICAgICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTU1hbmlwLmV4cGFuZFRvZ2dsZSwge1xuICAgICAgICAgICAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH07XG5cbiAgICAvL2NoYW5nZXMgdGhlIGFkZCBwcm9qZWN0IGJ1dHRvbiB0byBjYW5jZWwgYWRkaW5nIHByb2plY3QgYW5kIGFjdGl2YXRlcyB0aGUgc3VibWl0IGJ1dHRvblxuICAgIGNvbnN0IGFkZFByb2plY3RTdWJtaXNzaW9uID0gKCkgPT4ge1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI2FkZC1wcm9qZWN0LWJ1dHRvblwiKS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuc2V0dXBOZXdQcm9qZWN0KTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNhZGQtcHJvamVjdC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTU1hbmlwLmNhbmNlbE5ld1Byb2plY3QpO1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI25ldy1wcm9qLWFkZC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3RGdW5jdGlvbnMuYWRkUHJvamVjdCk7XG4gICAgfTtcblxuICAgIC8vY2xpY2tpbmcgdGhlIFRvZGF5IGhlYWRlciBvciBhbnkgb2YgdGhlIHRhc2tzIGZvciB0b2RheSBicmluZ3MgdXAgdGhlIFRvZGF5IHBhZ2VcbiAgICBjb25zdCBhY3RpdmF0ZVRvZGF5ID0gKCkgPT4ge1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI3RvZGF5cy10b2RvLXNpZGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTU1hbmlwLnNob3dUb2RheSk7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnRzKFwiLnRhc2stc2lkZS1sYWJlbC50b2RheVwiKS5mb3JFYWNoKGVsZSA9PlxuICAgICAgICAgICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5zaG93VG9kYXkpXG4gICAgICAgICk7XG4gICAgfTtcbiAgICAvL2NsaWNraW5nIHRoZSBPdmVyZHVlIGhlYWRlciBvciBhbnkgb2YgdGhlIHRhc2sgdGhhdCBhcmUgT3ZlcmR1ZSBicmluZ3MgdXAgdGhlIE92ZXJkdWUgcGFnZVxuICAgIGNvbnN0IGFjdGl2YXRlT3ZlcmR1ZSA9ICgpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNvdmVyZHVlLXRvZG8tc2lkZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuc2hvd092ZXJkdWUpO1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50cyhcIi50YXNrLXNpZGUtbGFiZWwub3ZlcmR1ZVwiKS5mb3JFYWNoKGVsZSA9PlxuICAgICAgICAgICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5zaG93T3ZlcmR1ZSlcbiAgICAgICAgKTtcbiAgICB9O1xuICAgIC8vY2xpY2tpbmcgdGhlIE92ZXJkdWUgaGVhZGVyIG9yIGFueSBvZiB0aGUgdGFzayB0aGF0IGFyZSBPdmVyZHVlIGJyaW5ncyB1cCB0aGUgT3ZlcmR1ZSBwYWdlXG4gICAgY29uc3QgYWN0aXZhdGVEYXlzID0gKCkgPT4ge1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI2RheXMtdG9kby1zaWRlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5zaG93RGF5cyk7XG4gICAgfTtcblxuICAgIC8vbWFrZXMgdGhlIHByb2plY3RzIGNsaWNrYWJsZSwgbWFpbnRhaW5zIG9ubHkgb25lIGFjdGlvbiBsaXN0ZW5lciBvbiBlYWNoIHByb2plY3RcbiAgICBjb25zdCBhY3RpdmF0ZVByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50cyhcIi5wcm9qZWN0LXNpZGUtbGFiZWxcIikuZm9yRWFjaChlbGUgPT5cbiAgICAgICAgICAgIGVsZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuc2hvd1Byb2plY3QpXG4gICAgICAgICk7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnRzKFwiLnByb2plY3Qtc2lkZS1sYWJlbFwiKS5mb3JFYWNoKGVsZSA9PlxuICAgICAgICAgICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5zaG93UHJvamVjdClcbiAgICAgICAgKTtcbiAgICB9O1xuICAgIC8vdHVybnMgb24gYWxsIHNpZGUgcGFuZWwgcGFnZXNcbiAgICBjb25zdCBhY3RpdmF0ZVNpZGVzID0gKCkgPT4ge1xuICAgICAgICBhY3RpdmF0ZVRvZGF5KCk7XG4gICAgICAgIGFjdGl2YXRlT3ZlcmR1ZSgpO1xuICAgICAgICBhY3RpdmF0ZURheXMoKTtcbiAgICAgICAgYWN0aXZhdGVQcm9qZWN0cygpO1xuICAgIH07XG4gICAgLy9hY3RpdmF0ZXMgdGhlIGVkaXQgcHJvamVjdCBidXR0b25zXG4gICAgY29uc3QgYWN0aXZhdGVQcm9qZWN0QnV0dG9ucyA9ICgpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIi5lZGl0LWJ1dHRvbi50aXRsZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuZGlzcGxheUVkaXRQcm9qZWN0KTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIi5lZGl0LWJ1dHRvbi5kZWxldGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTU1hbmlwLmRpc3BsYXlEZWxldGVQcm9qZWN0KTtcbiAgICB9O1xuICAgIC8vYWN0aXZhdGVzIHRoZSBjYW5jZWwgcHJvamVjdC1lZGl0IGJ1dHRvblxuICAgIGNvbnN0IGFjdGl2YXRlQ2FuY2VsQnV0dG9uID0gYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5jYW5jZWxQcm9qZWN0RWRpdCk7XG4gICAgfTtcbiAgICAvL2NoYW5nZXMgdGhlIHByb2plY3QgdGl0bGUgZWRpdCBpbnRvIHRoZSBjb25maXJtIGJ1dHRvblxuICAgIGNvbnN0IGFjdGl2YXRlQ29uZmlybVByb2plY3RFZGl0ID0gYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5kaXNwbGF5RWRpdFByb2plY3QpO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3RGdW5jdGlvbnMuY29uZmlybVByb2plY3RFZGl0KTtcbiAgICB9O1xuICAgIC8vYWN0aXZhdGVzIHRoZSBkZWxldGUgcHJvamVjdCBidXR0b25cbiAgICBjb25zdCBhY3RpdmF0ZURlbGV0ZVByb2plY3QgPSBidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3RGdW5jdGlvbnMuZGVsZXRlUHJvamVjdCk7XG4gICAgfTtcblxuICAgIC8vYWN0aXZhdGVzIHRoZSBhZGQgbmV3IHRhc2sgYnV0dG9uXG4gICAgY29uc3QgYWN0aXZhdGVBZGRUYXNrQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI2FkZC10YXNrLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdEZ1bmN0aW9ucy5hZGRUYXNrKTtcbiAgICB9O1xuICAgIC8vYWN0aXZhdGVzIHRoZSBlZGl0IHRhc2sgYnV0dG9uIGZvciB0aGF0IHNwZWNpZmljIHRhc2tcbiAgICBjb25zdCBfYWN0aXZhdGVFZGl0VGFza0J1dHRvbiA9IGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdEZ1bmN0aW9ucy5jb25maXJtVGFza0VkaXQpO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTU1hbmlwLmRpc3BsYXlFZGl0VGFzayk7XG4gICAgfTtcbiAgICBjb25zdCBfYWN0aXZhdGVEZWxldGVUYXNrQnV0dG9uID0gYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0RnVuY3Rpb25zLmNvbmZpcm1UYXNrRGVsZXRlKTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5kaXNwbGF5RGVsZXRlVGFzayk7XG4gICAgfTtcbiAgICBjb25zdCBhY3RpdmF0ZVRhc2tCdXR0b25zID0gKGVkaXQsIGRlbCkgPT4ge1xuICAgICAgICBfYWN0aXZhdGVFZGl0VGFza0J1dHRvbihlZGl0KTtcbiAgICAgICAgX2FjdGl2YXRlRGVsZXRlVGFza0J1dHRvbihkZWwpO1xuICAgIH07XG4gICAgLy9tYWtlcyB0aGUgdGFzaydzIGNoZWNrIGJveCBjbGlja2FibGUgdG8gbWFyayB0YXNrcyBhcyBjb21wbGV0ZVxuICAgIGNvbnN0IGFjdGl2YXRlQ2hlY2tib3ggPSBpbmRleCA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIudGFza3MtY29udGFpbmVyXCIpLmNoaWxkTm9kZXNbaW5kZXhdLmZpcnN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICBwcm9qZWN0RnVuY3Rpb25zLnRvZ2dsZVRhc2tDb21wbGV0ZVxuICAgICAgICApO1xuICAgIH07XG4gICAgLy9JZiBhIHByb2plY3QgdGl0bGUgaXMgc2hvd24gb24gYSB0YXNrLCBjbGlja2luZyBpdCBnb2VzIHRvIHRoZSBhc3NvY2lhdGVkIHByb2plY3RcbiAgICBjb25zdCBhY3RpdmF0ZVByb2plY3RMaW5rID0gYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5saW5rUHJvamVjdCk7XG4gICAgfTtcbiAgICAvL2NoYW5nZXMgdGhlIGJ1dHRvbiB0byBlZGl0IGEgdGFzayBpbnRvIGEgY29uZmlybWF0aW9uIGJ1dHRvbiBhbmQgYWN0aXZhdGVzIHRoZSBjYW5jZWwgYnV0dG9uXG4gICAgY29uc3QgYWN0aXZhdGVDb25maXJtVGFza0VkaXQgPSBidXR0b24gPT4ge1xuICAgICAgICBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTU1hbmlwLmRpc3BsYXlFZGl0VGFzayk7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdEZ1bmN0aW9ucy5jb25maXJtVGFza0VkaXQpO1xuICAgICAgICBidXR0b24ubmV4dFNpYmxpbmcucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTU1hbmlwLmRpc3BsYXlEZWxldGVUYXNrKTtcbiAgICAgICAgYnV0dG9uLm5leHRTaWJsaW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5jYW5jZWxFZGl0KTtcbiAgICB9O1xuICAgIGNvbnN0IGFjdGl2YXRlQ29uZmlybVRhc2tEZWxldGUgPSBidXR0b24gPT4ge1xuICAgICAgICBidXR0b24ucHJldmlvdXNTaWJsaW5nLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5kaXNwbGF5RWRpdFRhc2spO1xuICAgICAgICBidXR0b24ucHJldmlvdXNTaWJsaW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0RnVuY3Rpb25zLmNvbmZpcm1UYXNrRGVsZXRlKTtcbiAgICAgICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01NYW5pcC5kaXNwbGF5RGVsZXRlVGFzayk7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NTWFuaXAuY2FuY2VsRWRpdCk7XG4gICAgfTtcbiAgICBjb25zdCBhY3RpdmF0ZURheXNTZWxlY3RvciA9ICgpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIi5kYXlzLXNlbGVjdG9yXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgRE9NTWFuaXAuY2hhbmdlRGF5cyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFjdGl2YXRlQ29uZmlybUNsZWFyQWxsID0gKCkgPT4ge1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI2NsZWFyLWFsbC1idXR0b25cIikucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTU1hbmlwLmNvbmZpcm1DbGVhckFsbCk7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIjY2xlYXItYWxsLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdEZ1bmN0aW9ucy5jb25maXJtQWxsQ2xlYXIpO1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI2NsZWFyLWFsbC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgRE9NTWFuaXAuY2FuY2VsQ2xlYXJBbGwpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhY3RpdmF0ZUFkZEJ1dHRvbixcbiAgICAgICAgaW5pdFN0YXJ0aW5nTGlzdGVuZXJzLFxuICAgICAgICBhZGRQcm9qZWN0U3VibWlzc2lvbixcbiAgICAgICAgYWN0aXZhdGVUb2RheSxcbiAgICAgICAgYWN0aXZhdGVQcm9qZWN0cyxcbiAgICAgICAgYWN0aXZhdGVPdmVyZHVlLFxuICAgICAgICBhY3RpdmF0ZVNpZGVzLFxuICAgICAgICBjbGVhclRleHRCb3gsXG4gICAgICAgIGFjdGl2YXRlUHJvamVjdEJ1dHRvbnMsXG4gICAgICAgIGFjdGl2YXRlQWRkVGFza0J1dHRvbixcbiAgICAgICAgYWN0aXZhdGVDaGVja2JveCxcbiAgICAgICAgYWN0aXZhdGVQcm9qZWN0TGluayxcbiAgICAgICAgYWN0aXZhdGVUYXNrQnV0dG9ucyxcbiAgICAgICAgYWN0aXZhdGVDb25maXJtUHJvamVjdEVkaXQsXG4gICAgICAgIGFjdGl2YXRlQ29uZmlybVRhc2tFZGl0LFxuICAgICAgICBhY3RpdmF0ZUNvbmZpcm1UYXNrRGVsZXRlLFxuICAgICAgICBhY3RpdmF0ZUNhbmNlbEJ1dHRvbixcbiAgICAgICAgYWN0aXZhdGVEZWxldGVQcm9qZWN0LFxuICAgICAgICBhY3RpdmF0ZURheXNTZWxlY3RvcixcbiAgICAgICAgYWN0aXZhdGVDbGVhckFsbEJ1dHRvbixcbiAgICAgICAgYWN0aXZhdGVDb25maXJtQ2xlYXJBbGwsXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50SGFuZGxlcjtcbiIsImV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0VGl0bGUsIHRhc2tzID0gW10sIGNvbXBsZXRlZCA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IGluaXRUaXRsZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbiAgICBnZXRUYXNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3M7XG4gICAgfVxuICAgIGlzQ29tcGxldGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZWQ7XG4gICAgfVxuICAgIGlzU2VsZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkO1xuICAgIH1cbiAgICBzZXROYW1lKG5ld05hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICB9XG4gICAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgICAgIHRoaXMudGFza3MucHVzaChuZXdUYXNrKTtcbiAgICB9XG4gICAgbWFya0NvbXBsZXRlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gdmFsdWU7XG4gICAgfVxuICAgIG1hcmtTZWxlY3RlZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIHByb2plY3QsIG51bWJlciwgY29tcGxldGVkID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIH1cblxuICAgIGdldE5hbWUgPSAoKSA9PiB0aGlzLm5hbWU7XG4gICAgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIGdldERhdGUgPSAoKSA9PiB0aGlzLmR1ZURhdGU7XG4gICAgZ2V0UHJpb3JpdHkgPSAoKSA9PiB0aGlzLnByaW9yaXR5O1xuICAgIGdldE5vdGVzID0gKCkgPT4gdGhpcy5ub3RlcztcbiAgICBnZXRQcm9qZWN0ID0gKCkgPT4gdGhpcy5wcm9qZWN0O1xuICAgIGdldENvbXBsZXRlID0gKCkgPT4gdGhpcy5jb21wbGV0ZWQ7XG4gICAgZ2V0TnVtYmVyID0gKCkgPT4gdGhpcy5udW1iZXI7XG5cbiAgICB0b2dnbGVDb21wbGV0ZSA9ICgpID0+ICh0aGlzLmNvbXBsZXRlZCA9ICF0aGlzLmNvbXBsZXRlZCk7XG4gICAgcmVkdWNlUHJvamVjdCA9ICgpID0+IHRoaXMucHJvamVjdC0tO1xuICAgIHJlZHVjZVRhc2sgPSAoKSA9PiB0aGlzLnRhc2stLTtcbn1cbiIsImltcG9ydCB7IHByb2plY3RGdW5jdGlvbnMgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL1Byb2plY3RcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi9UYXNrXCI7XG5cbmNvbnN0IGRhdGFTdG9yYWdlID0gKCgpID0+IHtcbiAgICAvL3RoaXMgdGFrZXMgdGhlIGN1cnJlbnQgYXJyYXkgb2YgcHJvamVjdHMgYW5kIHNhdmVzIHRoZSBjb250ZW50cyBpbnRvIGEgSlNPTiBmaWxlIGluIGxvY2Fsc3RvcmFnZVxuICAgIGNvbnN0IHNhdmVEYXRhID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhbGxQcm9qID0gcHJvamVjdEZ1bmN0aW9ucy5nZXRBbGxQcm9qZWN0cygpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGFsbFByb2opKTtcbiAgICB9O1xuXG4gICAgLy9maW5kcyB0aGUgZGF0YSBpbiBsb2NhbCBzdG9yYWdlLCBydW5zIHRocm91Z2ggdGhlIGFycmF5IGFuZCBjb252ZXJ0cyBlYWNoIGVudHJ5IGludG8gdGhlIGFwcHJvcHJpYXRlXG4gICAgLy9wcm9qZWN0IG9yIHRhc2sgaW4gb3JkZXIgdG8gbWFpbnRhaW4gb2JqZWN0IG1ldGhvZHMuIElmIHRoZXJlIGlzIG5vIGRhdGEsIHJldHVybnMgYW4gZW1wdHkgYXJyYXlcbiAgICBjb25zdCBsb2FkRGF0YSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdHNcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvYWRlZERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdHNcIikpO1xuICAgICAgICAgICAgY29uc3QgcmV0dXJuRGF0YSA9IFtdO1xuICAgICAgICAgICAgbG9hZGVkRGF0YS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9hZFByb2plY3RUaXRsZSA9IGVsZS5uYW1lO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRQcm9qZWN0c1Rhc2tzID0gW107XG4gICAgICAgICAgICAgICAgZWxlLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRQcm9qZWN0c1Rhc2tzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVGFzayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLm5vdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sucHJvamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLm51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRQcm9qZWN0Q29tcGxldGVkID0gZWxlLmNvbXBsZXRlZDtcbiAgICAgICAgICAgICAgICByZXR1cm5EYXRhLnB1c2gobmV3IFByb2plY3QobG9hZFByb2plY3RUaXRsZSwgbG9hZFByb2plY3RzVGFza3MsIGxvYWRQcm9qZWN0Q29tcGxldGVkKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXR1cm5EYXRhO1xuICAgICAgICB9IGVsc2UgcmV0dXJuIFtdO1xuICAgIH07XG5cbiAgICBjb25zdCBjbGVhckRhdGEgPSAoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdHNcIiwgXCJcIik7XG4gICAgfTtcblxuICAgIHJldHVybiB7IHNhdmVEYXRhLCBsb2FkRGF0YSwgY2xlYXJEYXRhIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkYXRhU3RvcmFnZTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgRE9NTWFuaXAgZnJvbSBcIi4vRE9NTWFuaXBcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi9UYXNrXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vUHJvamVjdFwiO1xuaW1wb3J0IGRhdGFTdG9yYWdlIGZyb20gXCIuL2RhdGFTdG9yYWdlXCI7XG5cbi8vVGhpcyBleHBvcnQgY29udGFpbnMgYWxsIG9mIHRoZSBmdW5jdGlvbnMgcmVsYXRlZCB0byBhY2Nlc3NpbmcgdGhlIHByb2plY3QgZGF0YVxuLy9hbmQgdGFzayBkYXRhIHRocm91Z2hvdXQgdGhlIHdlYnNpdGVcbmV4cG9ydCBjb25zdCBwcm9qZWN0RnVuY3Rpb25zID0gKCgpID0+IHtcbiAgICBsZXQgX2FsbFByb2plY3RzID0gW107XG5cbiAgICBsZXQgX2N1cnJlbnREYXlzUmVxdWVzdGVkID0gMTtcblxuICAgIC8vdXNlZCB3aGVuIGEgcHJvamVjdCBpcyBkZWxldGVkLCBtYWtlcyBhbGwgb2YgdGhlIHRhc2tzIHVuZGVyIGVhY2ggcHJvamVjdCBnbyB0byB0aGVpciBjdXJyZW50XG4gICAgLy9wcm9qZWN0J3MgaW5kZXggaW4gdGhlIGFsbFByb2plY3RzIGFycmF5XG4gICAgY29uc3QgX3JlbnVtYmVyUHJvamVjdHMgPSBwcm9qZWN0TnVtYmVyID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IF9hbGxQcm9qZWN0cy5sZW5ndGggLSAxOyBpID49IHByb2plY3ROdW1iZXI7IGktLSkge1xuICAgICAgICAgICAgX2FsbFByb2plY3RzW2ldLnRhc2tzLmZvckVhY2godGFzayA9PiB0YXNrLnJlZHVjZVByb2plY3QoKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IF9yZW51bWJlclRhc2tzID0gKHByb2plY3ROdW1iZXIsIHRhc2tOdW1iZXIpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IF9hbGxQcm9qZWN0c1twcm9qZWN0TnVtYmVyXS50YXNrcy5sZW5ndGggLSAxOyBpID49IHRhc2tOdW1iZXI7IGktLSkge1xuICAgICAgICAgICAgX2FsbFByb2plY3RzW3Byb2plY3ROdW1iZXJdLnRhc2tzW2ldLnJlZHVjZVRhc2soKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgX3NvcnRUYXNrcyA9IHByb2plY3ROdW1iZXIgPT4ge1xuICAgICAgICBjb25zdCBzb3J0ZWRUYXNrcyA9IERPTU1hbmlwLnNvcnRBcnJheShfYWxsUHJvamVjdHNbcHJvamVjdE51bWJlcl0uZ2V0VGFza3MoKSk7XG4gICAgICAgIF9hbGxQcm9qZWN0c1twcm9qZWN0TnVtYmVyXS50YXNrcyA9IHNvcnRlZFRhc2tzLm1hcChlbGUgPT4gZWxlKTtcbiAgICB9O1xuXG4gICAgLy9nZXRzIHRoZSBpbmZvIHRoYXQgd2FzIHB1dCBpbnRvIHRoZSBpbnB1dCwgY2hlY2tzIGlmIGl0IGlzIGFjY2VwdGFibGUsIGFkZHMgaXQgdG8gdGhlXG4gICAgLy9hbGxQcm9qZWN0cyBhcnJheSBpZiBpdCBpcywgYW5kIHNhdmVzIHRvIGxvY2Fsc3RvcmFnZVxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBlID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEluZm8gPSBET01NYW5pcC5nZXROZXdQcm9qSW5mbygpO1xuICAgICAgICBjb25zdCBnb29kUHJvamVjdCA9IERPTU1hbmlwLmNoZWNrTmV3UHJvamVjdChlLCBuZXdQcm9qZWN0SW5mbyk7XG4gICAgICAgIGlmIChnb29kUHJvamVjdCkge1xuICAgICAgICAgICAgX2FsbFByb2plY3RzLnB1c2gobmV3IFByb2plY3QobmV3UHJvamVjdEluZm8ubmFtZSkpO1xuICAgICAgICAgICAgRE9NTWFuaXAudXBkYXRlUHJvamVjdExpc3QoKTtcbiAgICAgICAgICAgIGRhdGFTdG9yYWdlLnNhdmVEYXRhKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vZ2V0cyB0aGUgaW5mbyB0aGF0IHdhcyBwdXQgaW50byB0aGUgaW5wdXRzLCBjaGVja3MgaWYgaXQgaXMgYWxsIGFjY2VwdGFibGUsIGFkZHMgaXQgdG8gdGhlXG4gICAgLy9hbGxQcm9qZWN0cyBhcnJheSB1bmRlciB0aGUgY29ycmVjdCBwcm9qZWN0IGlmIGl0IGlzLCBhbmQgc2F2ZXMgdG8gbG9jYWxzdG9yYWdlXG4gICAgY29uc3QgYWRkVGFzayA9IGUgPT4ge1xuICAgICAgICBjb25zdCBuZXdUYXNrSW5mbyA9IERPTU1hbmlwLmdldFRhc2tJbmZvKCk7XG4gICAgICAgIGNvbnN0IGdvb2RUYXNrID0gRE9NTWFuaXAuY2hlY2tOZXdUYXNrKGUsIG5ld1Rhc2tJbmZvKTtcbiAgICAgICAgaWYgKGdvb2RUYXNrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soXG4gICAgICAgICAgICAgICAgbmV3VGFza0luZm8ubmFtZSxcbiAgICAgICAgICAgICAgICBuZXdUYXNrSW5mby5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBuZXdUYXNrSW5mby5kYXRlLFxuICAgICAgICAgICAgICAgIG5ld1Rhc2tJbmZvLnByaW9yaXR5LFxuICAgICAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICAgICAgbmV3VGFza0luZm8ucHJvamVjdCxcbiAgICAgICAgICAgICAgICBuZXdUYXNrSW5mby5udW1iZXJcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROdW1iZXIgPSBuZXdUYXNrSW5mby5wcm9qZWN0O1xuICAgICAgICAgICAgX2FsbFByb2plY3RzW3Byb2plY3ROdW1iZXJdLnRhc2tzLnB1c2gobmV3VGFzayk7XG5cbiAgICAgICAgICAgIF9zb3J0VGFza3MocHJvamVjdE51bWJlcik7XG5cbiAgICAgICAgICAgIERPTU1hbmlwLnVwZGF0ZVRhc2tMaXN0KHByb2plY3ROdW1iZXIpO1xuICAgICAgICAgICAgZGF0YVN0b3JhZ2Uuc2F2ZURhdGEoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy9kb2VzIHRoZSBzYW1lIGFzIGEgbmV3IHByb2plY3QsIGJ1dCBnZXR0aW5nIHRoZSBpbmZvcm1hdGlvbiBmcm9tIGRpZmZlcmVudCBsb2NhdGlvbnMgYW5kXG4gICAgLy9pbnN0ZWFkIG9mIGFkZGluZyBhIG5ldyBwcm9qZWN0LCBhZGp1c3RzIHRoZSBwcm9qZWN0IGF0IGEgY2VydGFpbiBpbmRleFxuICAgIGNvbnN0IGNvbmZpcm1Qcm9qZWN0RWRpdCA9IGUgPT4ge1xuICAgICAgICBjb25zdCBlZGl0VGl0bGUgPSBET01NYW5pcC5nZXRFbGVtZW50KFwiLnRpdGxlLWVkaXRcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHByb2plY3ROdW1iZXIgPSBET01NYW5pcC5nZXRFbGVtZW50KFwiLnByb2plY3QtY29udGFpbmVyXCIpLmRhdGFzZXQucHJvamVjdDtcbiAgICAgICAgY29uc3QgZ29vZFByb2plY3QgPSBET01NYW5pcC5jaGVja05ld1Byb2plY3QoZSwgeyBuYW1lOiBlZGl0VGl0bGUgfSk7XG4gICAgICAgIGlmIChnb29kUHJvamVjdCkge1xuICAgICAgICAgICAgX2FsbFByb2plY3RzW3Byb2plY3ROdW1iZXJdLnNldE5hbWUoZWRpdFRpdGxlKTtcbiAgICAgICAgICAgIERPTU1hbmlwLnVwZGF0ZVByb2plY3RMaXN0KCk7XG4gICAgICAgICAgICBkYXRhU3RvcmFnZS5zYXZlRGF0YSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vZG9lcyB0aGUgc2FtZSBhcyBhIG5ldyB0YXNrLCBidXQgZ2V0dGluZyB0aGUgaW5mb3JtYXRpb24gZnJvbSBkaWZmZXJlbnQgbG9jYXRpb25zIGFuZFxuICAgIC8vaW5zdGVhZCBvZiBhZGRpbmcgYSBuZXcgdGFzaywgYWRqdXN0cyB0aGUgdGFzayBhdCBhIGNlcnRhaW4gaW5kZXggdW5kZXIgYSBzcGVjaWZpYyBwcm9qZWN0XG5cbiAgICBjb25zdCBjb25maXJtVGFza0VkaXQgPSBlID0+IHtcbiAgICAgICAgY29uc3QgZWRpdFRhc2sgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LnRhc2s7XG4gICAgICAgIGNvbnN0IHByb2plY3ROdW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LnByb2plY3Q7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrSW5mbyA9IERPTU1hbmlwLmdldFRhc2tJbmZvKGVkaXRUYXNrLCBwcm9qZWN0TnVtYmVyKTtcbiAgICAgICAgY29uc3QgZ29vZFRhc2sgPSBET01NYW5pcC5jaGVja05ld1Rhc2soZSwgZWRpdFRhc2tJbmZvKTtcbiAgICAgICAgaWYgKGdvb2RUYXNrKSB7XG4gICAgICAgICAgICBfYWxsUHJvamVjdHNbZWRpdFRhc2tJbmZvLnByb2plY3RdLnRhc2tzW2VkaXRUYXNrXSA9IG5ldyBUYXNrKFxuICAgICAgICAgICAgICAgIGVkaXRUYXNrSW5mby5uYW1lLFxuICAgICAgICAgICAgICAgIGVkaXRUYXNrSW5mby5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBlZGl0VGFza0luZm8uZGF0ZSxcbiAgICAgICAgICAgICAgICBlZGl0VGFza0luZm8ucHJpb3JpdHksXG4gICAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgICAgICBlZGl0VGFza0luZm8ucHJvamVjdCxcbiAgICAgICAgICAgICAgICBlZGl0VGFza0luZm8ubnVtYmVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgX3NvcnRUYXNrcyhwcm9qZWN0TnVtYmVyKTtcbiAgICAgICAgICAgIERPTU1hbmlwLnVwZGF0ZVRhc2tMaXN0KHByb2plY3ROdW1iZXIpO1xuICAgICAgICAgICAgZGF0YVN0b3JhZ2Uuc2F2ZURhdGEoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgY29uZmlybVRhc2tEZWxldGUgPSBlID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdE51bWJlciA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQucHJvamVjdDtcbiAgICAgICAgY29uc3QgdGFza051bWJlciA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQudGFzaztcbiAgICAgICAgX3JlbnVtYmVyVGFza3MocHJvamVjdE51bWJlciwgdGFza051bWJlcik7XG4gICAgICAgIF9hbGxQcm9qZWN0c1twcm9qZWN0TnVtYmVyXS50YXNrcy5zcGxpY2UodGFza051bWJlciwgMSk7XG5cbiAgICAgICAgRE9NTWFuaXAucmVmcmVzaFRhc2tTaWRlcygpO1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KGAjcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9YCkuY2xpY2soKTtcbiAgICAgICAgZGF0YVN0b3JhZ2Uuc2F2ZURhdGEoKTtcbiAgICB9O1xuXG4gICAgLy9yZW1vdmVzIGEgcHJvamVjdCBmcm9tIHRoZSBhbGxQcm9qZWN0cyBhcnJheSBhbmQgc2F2ZXMgdG8gbG9jYWxzdG9yYWdlXG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TnVtYmVyID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5kYXRhc2V0LnByb2plY3Q7XG4gICAgICAgIF9yZW51bWJlclByb2plY3RzKHByb2plY3ROdW1iZXIpO1xuICAgICAgICBfYWxsUHJvamVjdHMuc3BsaWNlKHByb2plY3ROdW1iZXIsIDEpO1xuICAgICAgICBpZiAoRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNwcm9qZWN0cy10b2dnbGVcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2VkXCIpKSB7XG4gICAgICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI3Byb2plY3RzLXRvZ2dsZVwiKS5jbGljaygpO1xuICAgICAgICB9XG4gICAgICAgIERPTU1hbmlwLnVwZGF0ZVByb2plY3RMaXN0KCk7XG4gICAgICAgIERPTU1hbmlwLnJlZnJlc2hUYXNrU2lkZXMoKTtcbiAgICAgICAgRE9NTWFuaXAuc2hvd1RvZGF5KCk7XG4gICAgICAgIGRhdGFTdG9yYWdlLnNhdmVEYXRhKCk7XG4gICAgfTtcblxuICAgIC8vZ2V0cyB3aGVuIGEgY2hlY2tib3ggaGFzIGJlZW4gY2xpY2tlZCBhbmQgY2hhbmdlcyB0aGUgdGFzaydzIHN0YXR1cyB0byBjb21wbGV0ZSBpZiBpdCdzIG5vdFxuICAgIC8vY29tcGxldGUsIGFuZCByZW1vdmVzIHRoYXQgaWYgaXQncyBiZWVuIHVuY2hlY2tlZC5cbiAgICBjb25zdCB0b2dnbGVUYXNrQ29tcGxldGUgPSBlID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHByb2plY3ROdW1iZXIgPSBzZWxlY3RlZFRhc2suZGF0YXNldC5wcm9qZWN0O1xuICAgICAgICBjb25zdCB0YXNrTnVtYmVyID0gc2VsZWN0ZWRUYXNrLmRhdGFzZXQudGFzaztcbiAgICAgICAgX2FsbFByb2plY3RzW3Byb2plY3ROdW1iZXJdLnRhc2tzW3Rhc2tOdW1iZXJdLnRvZ2dsZUNvbXBsZXRlKCk7XG4gICAgICAgIGlmIChET01NYW5pcC5nZXRFbGVtZW50KFwiLnNlbGVjdGVkXCIpLmlkID09IFwidG9kYXlzLXRvZG8tc2lkZVwiKSB7XG4gICAgICAgICAgICBET01NYW5pcC5zaG93VG9kYXkoZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoRE9NTWFuaXAuZ2V0RWxlbWVudChcIi5zZWxlY3RlZFwiKS5pZCA9PSBcIm92ZXJkdWUtdG9kby1zaWRlXCIpIHtcbiAgICAgICAgICAgIERPTU1hbmlwLnNob3dPdmVyZHVlKGUpO1xuICAgICAgICB9IGVsc2UgaWYgKERPTU1hbmlwLmdldEVsZW1lbnQoXCIuc2VsZWN0ZWRcIikuaWQgPT0gXCJkYXlzLXRvZG8tc2lkZVwiKSB7XG4gICAgICAgICAgICBET01NYW5pcC5jaGFuZ2VEYXlzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBET01NYW5pcC5zaG93UHJvamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgICBET01NYW5pcC5yZWZyZXNoVGFza1NpZGVzKCk7XG4gICAgICAgIGRhdGFTdG9yYWdlLnNhdmVEYXRhKCk7XG4gICAgfTtcblxuICAgIC8vcmV0dXJucyBhIHJlYWQtb25seSBjb3B5IG9mIHRoZSBwcm9qZWN0cyBpbiB0aGUgYWxsUHJvamVjdHMgYXJyYXlcbiAgICBjb25zdCBnZXRBbGxQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF9hbGxQcm9qZWN0cy5tYXAoZWxlID0+IGVsZSk7XG4gICAgfTtcbiAgICBjb25zdCBnZXRDdXJyZW50RGF5cyA9ICgpID0+IF9jdXJyZW50RGF5c1JlcXVlc3RlZDtcbiAgICBjb25zdCBzZXRDdXJyZW50RGF5cyA9IG5ld1ZhbHVlID0+IChfY3VycmVudERheXNSZXF1ZXN0ZWQgPSBuZXdWYWx1ZSk7XG5cbiAgICAvL3NhdmVzIHRoZSBsb2FkZWQgcHJvamVjdHMgZnJvbSBsb2NhbHN0b3JhZ2UgaW50byB0aGUgYWxscHJvamVjdHMgYXJyYXlcbiAgICBjb25zdCBsb2FkUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIF9hbGxQcm9qZWN0cyA9IGRhdGFTdG9yYWdlLmxvYWREYXRhKCk7XG4gICAgfTtcbiAgICBjb25zdCBjb25maXJtQWxsQ2xlYXIgPSAoKSA9PiB7XG4gICAgICAgIGRhdGFTdG9yYWdlLmNsZWFyRGF0YSgpO1xuICAgICAgICBfYWxsUHJvamVjdHMgPSBkYXRhU3RvcmFnZS5sb2FkRGF0YSgpO1xuICAgICAgICBET01NYW5pcC51cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgICAgICBET01NYW5pcC5yZWZyZXNoVGFza1NpZGVzKCk7XG4gICAgICAgIERPTU1hbmlwLnNob3dUb2RheSgpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICBhZGRUYXNrLFxuICAgICAgICBjb25maXJtUHJvamVjdEVkaXQsXG4gICAgICAgIGNvbmZpcm1UYXNrRWRpdCxcbiAgICAgICAgY29uZmlybVRhc2tEZWxldGUsXG4gICAgICAgIGRlbGV0ZVByb2plY3QsXG4gICAgICAgIHRvZ2dsZVRhc2tDb21wbGV0ZSxcbiAgICAgICAgZ2V0QWxsUHJvamVjdHMsXG4gICAgICAgIGxvYWRQcm9qZWN0cyxcbiAgICAgICAgZ2V0Q3VycmVudERheXMsXG4gICAgICAgIHNldEN1cnJlbnREYXlzLFxuICAgICAgICBjb25maXJtQWxsQ2xlYXIsXG4gICAgfTtcbn0pKCk7XG5cbi8vcnVucyBhdCB0aGUgbG9hZCBvZiB0aGUgd2Vic2l0ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5jb25zdCBpbml0V2Vic2l0ZSA9ICgoKSA9PiB7XG4gICAgRE9NTWFuaXAuc3RhcnRQYWdlKCk7XG59KSgpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZWFiZTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG59XFxuXFxuI2hlYWRlcixcXG4jZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZDdhNztcXG4gICAgY29sb3I6ICMyZjYzNjM7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgbWFyZ2luLXRvcDogNzJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcbiNzaWRlLXBhbmVsIHtcXG4gICAgZmxleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmNjM2MztcXG4gICAgY29sb3I6ICNmNmQ3YTc7XFxuICAgIG1pbi1oZWlnaHQ6IDg5LjN2aDtcXG4gICAgcGFkZGluZy10b3A6IDI4cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xcbn1cXG4jc2lkZS1wYW5lbCA+ICogOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2lkZS1oZWFkZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnNpZGUtaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wcm9qZWN0LXNpZGUtbGFiZWwsXFxuLnRhc2stc2lkZS1sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luOiA0cHggMHB4IDRweCAyMHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMTBweCA0cHggMTBweDtcXG59XFxuLnRhc2stc2lkZS1sYWJlbCB7XFxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMjBweDtcXG59XFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NTI1MjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAwIDAgMzBweDtcXG59XFxuLmRyb3Bkb3duLXRvZ2dsZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcbi5kcm9wZG93bi10b2dnbGUuYW5pbSB7XFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG4uZHJvcGRvd24tdG9nZ2xlLmNsb3NlZCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWigtOTBkZWcpO1xcbn1cXG5cXG4jbWFpbi1kaXNwbGF5IHtcXG4gICAgZmxleDogNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTNkNDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzJmNjM2MztcXG4gICAgY29sb3I6ICMyZjYzNjM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XFxuICAgIG1hcmdpbjogMHB4IDhweCAxcHg7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKTtcXG59XFxuXFxuLmFkZC1idXR0b246aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNzAlKTtcXG59XFxuLmFkZC1idXR0b246YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA1cHggYmxhY2s7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idXR0b24tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDEwMHB4O1xcbiAgICByaWdodDogNjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuI2FkZC1wcm9qZWN0LWJ1dHRvbi5hbmltIHtcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b246aG92ZXIsXFxuI2FkZC1wcm9qZWN0LWJ1dHRvbi5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9uLmFjdGl2ZSB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnV0dG9uIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9uIHNwYW4uYW5pbSB7XFxuICAgIHRyYW5zaXRpb246IDAuMDVzO1xcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyIHNwYW4sXFxuI2FkZC1wcm9qZWN0LWJ1dHRvbiBzcGFuLmFjdGl2ZSB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlM2Q0O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMmY2MzYzO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCBibGFjaztcXG59XFxuI25ldy1wcm9qLWFkZC1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODdhYWFhO1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJmNjM2MztcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgcGFkZGluZzogNHB4IDZweCA0cHggOHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcbnNlbGVjdCB7XFxuICAgIGhlaWdodDogMzFweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4jY2xlYXItYWxsLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogNDBweDtcXG4gICAgcmlnaHQ6IDQwcHg7XFxufVxcbiNjbGVhci1hbGwtYnV0dG9uLWNvbnRhaW5lciAuZGVsZXRlIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtaW4td2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWFkYWQ7XFxufVxcbiNjbGVhci1hbGwtYnV0dG9uLWNvbnRhaW5lciA+ICoge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcbi5wcm9qZWN0LXRpdGxlLXdyYXBwZXIge1xcbiAgICBtYXgtd2lkdGg6IDQ1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLnRpdGxlLWVkaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tdG9wOiA2cHg7XFxuICAgIHBhZGRpbmc6IDZweCAwcHggMTBweDtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIucHJvamVjdCB7XFxuICAgIHdpZHRoOiAyNy41cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcbi5idXR0b24tY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbiNhZGQtdGFzay1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xcbn1cXG5cXG4uYWRkLXRhc2staW5mbyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG4udGFza3Mtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuLnRhc2staW5mbyB7XFxuICAgIG1heC13aWR0aDogMzB2dztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLnRhc2stcHJvamVjdC1pbmZvIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi50YXNrLXByb2plY3QtaW5mbzpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lcnJvci1tZXNzYWdlIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjb2xvcjogIzk5M2MzYztcXG4gICAgdHJhbnNpdGlvbjogMnM7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDFzO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBtYXJnaW46IDZweDtcXG59XFxuXFxuW2RhdGEtcHJpb3JpdHk9XFxcIkxvd1xcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxYWRhZDtcXG59XFxuW2RhdGEtcHJpb3JpdHk9XFxcIk1lZGl1bVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWYzODtcXG59XFxuW2RhdGEtcHJpb3JpdHk9XFxcIkhpZ2hcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZGNkOGQ7XFxufVxcblxcbi5lZGl0LWJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJmNjM2MztcXG4gICAgY29sb3I6ICMyZjYzNjM7XFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcbiAgICBtaW4td2lkdGg6IDI3LjVweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uZWRpdC1idXR0b246aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNzAlKTtcXG59XFxuXFxuLmVkaXQtYnV0dG9uIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuLmVkaXQtYnV0dG9uOmhvdmVyIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBhZGRpbmc6IDBweCA1cHg7XFxufVxcblxcbi5lZGl0LWJ1dHRvbi5jb25maXJtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlkY2Q4ZDtcXG59XFxuLmVkaXQtYnV0dG9uLmRlbGV0ZTpob3ZlcixcXG4uZWRpdC1idXR0b24uY2FuY2VsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxYWRhZDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIGlucHV0LFxcbi50YXNrLWNvbnRhaW5lciBzZWxlY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJmNjM2MztcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgcGFkZGluZzogMnB4IDRweCAycHggNHB4O1xcbn1cXG4udGFzay1jb250YWluZXIgc2VsZWN0IHtcXG4gICAgaGVpZ2h0OiAyM3B4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIiBpXSB7XFxuICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICB3aWR0aDogMTVweDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLmNvbXBsZXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ExYTFhMTtcXG59XFxuXFxuI2RheXMtc2VsZWN0b3Ige1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZGF5LWF3YXktbGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDEwMHB4O1xcbn1cXG5cXG4jY2xlYXItYWxsLWJ1dHRvbjpob3ZlciBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi8qIFNjcm9sbCBCYXIgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDJweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM4N2FhYWE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMmY2MzYzO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMmY2MzYzO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzI2NTI1MjtcXG59XFxuQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcXG4gICAgYm9keSB7XFxuICAgICAgICBzY3JvbGxiYXItY29sb3I6ICMyZjYzNjMgIzI2NTI1MiAjODdhYWFhO1xcbiAgICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy90b2RvL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLDREQUE0RDtJQUM1RCxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxPQUFPO0lBQ1AseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBOztJQUVJLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNB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eUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSTtRQUNJLHdDQUF3QztJQUM1QztBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZlYWJlO1xcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjMmY2MzYzO1xcbn1cXG5cXG4jaGVhZGVyLFxcbiNmb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZkN2E3O1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBtYXJnaW4tdG9wOiA3MnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuI3NpZGUtcGFuZWwge1xcbiAgICBmbGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY2MzYzO1xcbiAgICBjb2xvcjogI2Y2ZDdhNztcXG4gICAgbWluLWhlaWdodDogODkuM3ZoO1xcbiAgICBwYWRkaW5nLXRvcDogMjhweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XFxufVxcbiNzaWRlLXBhbmVsID4gKiA6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zaWRlLWhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uc2lkZS1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnByb2plY3Qtc2lkZS1sYWJlbCxcXG4udGFzay1zaWRlLWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW46IDRweCAwcHggNHB4IDIwcHg7XFxuICAgIHBhZGRpbmc6IDRweCAxMHB4IDRweCAxMHB4O1xcbn1cXG4udGFzay1zaWRlLWxhYmVsIHtcXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAyMHB4O1xcbn1cXG4uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY1MjUyO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4IDAgMCAzMHB4O1xcbn1cXG4uZHJvcGRvd24tdG9nZ2xlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuLmRyb3Bkb3duLXRvZ2dsZS5hbmltIHtcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcbi5kcm9wZG93bi10b2dnbGUuY2xvc2VkIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKC05MGRlZyk7XFxufVxcblxcbiNtYWluLWRpc3BsYXkge1xcbiAgICBmbGV4OiA0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlM2Q0O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMmY2MzYzO1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgbWFyZ2luOiAwcHggOHB4IDFweDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xcbn1cXG4uYWRkLWJ1dHRvbjphY3RpdmUge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDVweCBibGFjaztcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMTAwcHg7XFxuICAgIHJpZ2h0OiA2MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9uLmFuaW0ge1xcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuI2FkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlcixcXG4jYWRkLXByb2plY3QtYnV0dG9uLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTIwcHg7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b24uYWN0aXZlIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idXR0b24gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMCU7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b24gc3Bhbi5hbmltIHtcXG4gICAgdHJhbnNpdGlvbjogMC4wNXM7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b246aG92ZXIgc3BhbixcXG4jYWRkLXByb2plY3QtYnV0dG9uIHNwYW4uYWN0aXZlIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOGUzZDQ7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMyZjYzNjM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IGJsYWNrO1xcbn1cXG4jbmV3LXByb2otYWRkLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmctdG9wOiA0cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4N2FhYWE7XFxuICAgIGNvbG9yOiAjMmY2MzYzO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmY2MzYzO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbiAgICBwYWRkaW5nOiA0cHggNnB4IDRweCA4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuc2VsZWN0IHtcXG4gICAgaGVpZ2h0OiAzMXB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbiNjbGVhci1hbGwtYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiA0MHB4O1xcbiAgICByaWdodDogNDBweDtcXG59XFxuI2NsZWFyLWFsbC1idXR0b24tY29udGFpbmVyIC5kZWxldGUge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1pbi13aWR0aDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxYWRhZDtcXG59XFxuI2NsZWFyLWFsbC1idXR0b24tY29udGFpbmVyID4gKiB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuLnByb2plY3QtdGl0bGUtd3JhcHBlciB7XFxuICAgIG1heC13aWR0aDogNDUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4udGl0bGUtZWRpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IDZweDtcXG4gICAgcGFkZGluZzogNnB4IDBweCAxMHB4O1xcbiAgICBmbGV4LWdyb3c6IDA7XFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lci5wcm9qZWN0IHtcXG4gICAgd2lkdGg6IDI3LjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuI2FkZC10YXNrLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogNXB4IDEycHg7XFxufVxcblxcbi5hZGQtdGFzay1pbmZvIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcbi50YXNrcy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbn1cXG4udGFzay1jb250YWluZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG4udGFzay1pbmZvIHtcXG4gICAgbWF4LXdpZHRoOiAzMHZ3O1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4udGFzay1wcm9qZWN0LWluZm8ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnRhc2stcHJvamVjdC1pbmZvOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVycm9yLW1lc3NhZ2Uge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGNvbG9yOiAjOTkzYzNjO1xcbiAgICB0cmFuc2l0aW9uOiAycztcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMXM7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIG1hcmdpbjogNnB4O1xcbn1cXG5cXG5bZGF0YS1wcmlvcml0eT1cXFwiTG93XFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFhZGFkO1xcbn1cXG5bZGF0YS1wcmlvcml0eT1cXFwiTWVkaXVtXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZjM4O1xcbn1cXG5bZGF0YS1wcmlvcml0eT1cXFwiSGlnaFxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlkY2Q4ZDtcXG59XFxuXFxuLmVkaXQtYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmY2MzYzO1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxuICAgIG1pbi13aWR0aDogMjcuNXB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5lZGl0LWJ1dHRvbjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xcbn1cXG5cXG4uZWRpdC1idXR0b24gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMCU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG4uZWRpdC1idXR0b246aG92ZXIgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgcGFkZGluZzogMHB4IDVweDtcXG59XFxuXFxuLmVkaXQtYnV0dG9uLmNvbmZpcm06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWRjZDhkO1xcbn1cXG4uZWRpdC1idXR0b24uZGVsZXRlOmhvdmVyLFxcbi5lZGl0LWJ1dHRvbi5jYW5jZWw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFhZGFkO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgaW5wdXQsXFxuLnRhc2stY29udGFpbmVyIHNlbGVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiAjMmY2MzYzO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmY2MzYzO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBwYWRkaW5nOiAycHggNHB4IDJweCA0cHg7XFxufVxcbi50YXNrLWNvbnRhaW5lciBzZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDIzcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiIGldIHtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIuY29tcGxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTFhMWExO1xcbn1cXG5cXG4jZGF5cy1zZWxlY3RvciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5kYXktYXdheS1sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMTAwcHg7XFxufVxcblxcbiNjbGVhci1hbGwtYnV0dG9uOmhvdmVyIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLyogU2Nyb2xsIEJhciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzg3YWFhYTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6ICMyZjYzNjM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyZjYzNjM7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMjY1MjUyO1xcbn1cXG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIHNjcm9sbGJhci1jb2xvcjogIzJmNjM2MyAjMjY1MjUyICM4N2FhYWE7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiLi90b2RvL2luZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3BvcnRmb2xpb1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwb3J0Zm9saW9cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX2FwaV9qcy1ub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnRpbWVfc291ci04MzhmNWVcIixcInNyY19Gb290ZXJfanMtc3JjX0hlYWRlcl9qc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90b2RvL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsicHJvamVjdEZ1bmN0aW9ucyIsIkV2ZW50SGFuZGxlciIsInRvRGF0ZSIsImZvcm1hdCIsImFkZCIsInBhcnNlSVNPIiwicGFyc2UiLCJpc0JlZm9yZSIsInN0YXJ0T2ZEYXkiLCJjcmVhdGVIZWFkZXIiLCJjcmVhdGVGb290ZXIiLCJET01NYW5pcCIsImdldEVsZW1lbnQiLCJzZWxlY3RvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIl9tYWtlTmV3RWxlbWVudCIsInR5cGUiLCJpZCIsIkhUTUxDbGFzcyIsInRleHQiLCJuZXdFbGVtIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwiYXR0cmlidXRlcyIsImxlbmd0aCIsImZvckVhY2giLCJhdHQiLCJPYmplY3QiLCJrZXlzIiwicmVtb3ZlVGV4dCIsImUiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJfaW5zZXJ0QWZ0ZXIiLCJuZXdOb2RlIiwiZXhpc3RpbmdOb2RlIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiX3JlbW92ZUFsbENoaWxkcmVuIiwiZWxlbWVudCIsInNraXAiLCJpIiwiY2hpbGROb2RlcyIsInJlbW92ZSIsInNvcnRBcnJheSIsInRhc2tBcnJheSIsInNvcnRlZEFycmF5IiwibWFwIiwiZWxlIiwiaiIsImZpcnN0VGFzayIsImdldERhdGUiLCJEYXRlIiwic2Vjb25kVGFzayIsInBsYWNlaG9sZGVyIiwiX2ZpeFN0YXJ0aW5nQW5pbWF0aW9ucyIsImFuaW1hdGFibGUiLCJjbGFzc0xpc3QiLCJfbWFrZVN0YXJ0aW5nUGFnZSIsImhlYWRlciIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNvbnRlbnQiLCJmb290ZXIiLCJzaWRlUGFuZWwiLCJ0b2RheVNpZGVIZWFkZXJDb250YWluZXIiLCJ0b2RheXNUb2RvU2lkZSIsInRvZGF5U2lkZURyb3Bkb3duIiwib3ZlcmR1ZVNpZGVIZWFkZXJDb250YWluZXIiLCJvdmVyZHVlVG9kb1NpZGUiLCJvdmVyZHVlU2lkZURyb3Bkb3duIiwiZGF5c1NpZGVIZWFkZXJDb250YWluZXIiLCJkYXlzVG9kb1NpZGUiLCJwcm9qZWN0U2lkZUhlYWRlckNvbnRhaW5lciIsInByb2plY3RzU2lkZSIsInByb2plY3RTaWRlRHJvcGRvd24iLCJtYWluRGlzcGxheSIsImFkZFByb2plY3RCdXR0b25XcmFwcGVyIiwiYWRkUHJvamVjdEJ1dHRvbkNvbnRhaW5lciIsImFkZFByb2pjdEJ1dHRvbiIsImFkZFByb2pjdEJ1dHRvblRleHQiLCJjbGVhckFsbEJ1dHRvbkNvbnRhaW5lciIsImNsZWFyQWxsQnV0dG9uIiwiY2xlYXJBbGxJY29uIiwiY2xlYXJBbGxUZXh0IiwiX2dldFRhc2tzIiwib2Zmc2V0IiwidG9kYXlzVGFza3MiLCJkYXlSZXF1ZXN0ZWQiLCJkYXlzIiwiZ2V0QWxsUHJvamVjdHMiLCJwcm9qIiwidGFza3MiLCJ0YXNrIiwidGFza0RhdGUiLCJnZXRDb21wbGV0ZSIsInB1c2giLCJfZ2V0T3ZlcmR1ZVRhc2tzIiwib3ZlcmR1ZVRhc2tzIiwidG9kYXkiLCJfZGlzcGxheUVycm9ycyIsImlucHV0IiwiZXJyb3IiLCJwYXJlbnQiLCJwYXJlbnRFbGVtZW50Iiwic2V0VGltZW91dCIsInN0eWxlIiwib3BhY2l0eSIsIl90b2dnbGVBY3RpdmUiLCJlbGVtZW50SUQiLCJjb250YWlucyIsIl9yZXZlYWxBcnJheSIsImFycmF5IiwiZHVlIiwiZWxlbSIsImluZGV4IiwiaXNTZWxlY3RlZCIsImdldE5hbWUiLCJfZGlzcGxheVRvZGF5U2lkZSIsImFjdGl2YXRlVG9kYXkiLCJfZGlzcGxheU92ZXJkdWVTaWRlIiwiYWN0aXZhdGVPdmVyZHVlIiwicmVmcmVzaFRhc2tTaWRlcyIsIl9kaXNwbGF5UHJvamVjdHMiLCJfZ2V0UHJvamVjdE51bWJlciIsImRhdGFzZXQiLCJwcm9qZWN0IiwiX2Rpc3BsYXlUaXRsZSIsInByb2plY3ROdW1iZXIiLCJjdXJyZW50UHJvamVjdCIsInRpdGxlV3JhcHBlciIsInRpdGxlQnV0dG9uQ29udGFpbmVyIiwicHJvamVjdFRpdGxlIiwiZWRpdFRpdGxlQnV0dG9uIiwiZWRpdFRpdGxlSWNvbiIsImVkaXRUaXRsZVRleHQiLCJkZWxldGVQcm9qZWN0QnV0dG9uIiwiZGVsZXRlUHJvamVjdEljb24iLCJkZWxldGVQcm9qZWN0VGV4dCIsIl9jbGVhclNpZGVTZWxlY3Rpb24iLCJtYXJrU2VsZWN0ZWQiLCJfc2V0VGFza1NlbGVjdGlvbiIsIl9tYXJrU2VsZWN0ZWRQcm9qZWN0IiwidGFyZ2V0IiwiZ2V0VGFza0luZGV4IiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJpbmRleE9mIiwiX2Rpc3BsYXlUYXNrSW5wdXQiLCJwcm9qZWN0Q29udGFpbmVyIiwiYWRkVGFza0NvbnRhaW5lciIsImFkZFRhc2tOYW1lIiwiYWRkVGFza0Rlc2NyaXB0aW9uIiwiYWRkVGFza0RhdGUiLCJtaW4iLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwiYWRkVGFza1ByaW9yaXR5IiwiYWRkVGFza1ByaW9yaXR5RGVmYXVsdCIsImFkZFRhc2tQcmlvcml0eUxvdyIsImFkZFRhc2tQcmlvcml0eU1lZGl1bSIsImFkZFRhc2tQcmlvcml0eUhpZ2giLCJhZGRUYXNrQnV0dG9uIiwiY2xlYXJUZXh0Qm94IiwiYWN0aXZhdGVBZGRUYXNrQnV0dG9uIiwibGlua1Byb2plY3QiLCJwcm9qZWN0VG9nZ2xlIiwiY2xpY2siLCJfZmlsbEluVGFzayIsInRhc2tOdW1iZXIiLCJnZXRQcm9qZWN0IiwidGFza3NDb250YWluZXIiLCJuZXdUYXNrQ29udGFpbmVyIiwiZ2V0UHJpb3JpdHkiLCJuZXdUYXNrQ2hlY2tib3giLCJuZXdUYXNrTmFtZSIsIm5ld1Rhc2tEZXNjcmlwdGlvbiIsImdldERlc2NyaXB0aW9uIiwibmV3VGFza0RhdGUiLCJ0YXNrUHJvamVjdExhYmVsIiwibmV3VGFza0VkaXRCdXR0b24iLCJuZXdUYXNrRWRpdEljb24iLCJuZXdUYXNrRWRpdFRleHQiLCJuZXdUYXNrRGVsZXRlQnV0dG9uIiwibmV3VGFza0RlbGV0ZUljb24iLCJuZXdUYXNrRGVsZXRlVGV4dCIsImFjdGl2YXRlVGFza0J1dHRvbnMiLCJhY3RpdmF0ZUNoZWNrYm94IiwiaXNQcm9qZWN0U2VsZWN0ZWQiLCJhY3RpdmF0ZVByb2plY3RMaW5rIiwiX2Rpc3BsYXlDb25maXJtQ2FuY2VsIiwicHJvamVjdEJ1dHRvbkNvbnRhaW5lciIsImNvbmZpcm1Db250YWluZXIiLCJjb25maXJtUHJvamVjdEJ1dHRvbiIsImNvbmZpcm1Qcm9qZWN0SWNvbiIsImNvbmZpcm1Qcm9qZWN0VGV4dCIsImNhbmNlbFByb2plY3RCdXR0b24iLCJjYW5jZWxQcm9qZWN0SWNvbiIsImNhbmNlbFByb2plY3RUZXh0IiwiX2ZpbGxJbkRheXMiLCJudW1iZXJPZkRheXMiLCJvdmVyYWxsSW5kZXhDb3VudCIsImRpc3BsYXllZFRhc2siLCJ0YXNrQ291bnQiLCJnZXROdW1iZXIiLCJfY2hlY2tEYXlzIiwibnVtQ2hhbmdlZCIsImVycm9yTWVzc2FnZXMiLCJjaGFuZ2VEYXlzIiwic2V0Q3VycmVudERheXMiLCJnZXRDdXJyZW50RGF5cyIsInNldHVwTmV3UHJvamVjdCIsIm5ld1Byb2pJbnB1dENvbnRhaW5lciIsIm5ld1Byb2pJbnB1dCIsIm5ld1Byb2pBZGRCdXR0b24iLCJhZGRQcm9qZWN0U3VibWlzc2lvbiIsImNhbmNlbE5ld1Byb2plY3QiLCJhY3RpdmF0ZUFkZEJ1dHRvbiIsImdldE5ld1Byb2pJbmZvIiwibmFtZSIsImNoZWNrTmV3UHJvamVjdCIsInVwZGF0ZVByb2plY3RMaXN0IiwiYWN0aXZhdGVQcm9qZWN0QnV0dG9ucyIsImFjdGl2YXRlUHJvamVjdHMiLCJkaXNwbGF5RWRpdFByb2plY3QiLCJwcm9qZWNUaXRsZSIsInByb2plY3RUaXRsZUlucHV0IiwibGFzdEVsZW1lbnRDaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwiYWN0aXZhdGVDb25maXJtUHJvamVjdEVkaXQiLCJhY3RpdmF0ZUNhbmNlbEJ1dHRvbiIsImRpc3BsYXlEZWxldGVQcm9qZWN0IiwiYWN0aXZhdGVEZWxldGVQcm9qZWN0IiwiY2FuY2VsUHJvamVjdEVkaXQiLCJleHBhbmRUb2dnbGUiLCJhY3RpdmF0ZVNpZGVzIiwidG9nZ2xlIiwic3RvcFByb3BhZ2F0aW9uIiwiZ2V0VGFza0luZm8iLCJmb3JtSW5mbyIsInVuZGVmaW5lZCIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsInByaW9yaXR5IiwibnVtYmVyIiwiY2hlY2tOZXdUYXNrIiwidXBkYXRlVGFza0xpc3QiLCJzaG93VG9kYXkiLCJzaG93T3ZlcmR1ZSIsIl9jb25maXJtQ2FuY2VsVGFzayIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJkaXNwbGF5RWRpdFRhc2siLCJlZGl0QnV0dG9uIiwiZGVsZXRlQnV0dG9uIiwiZWRpdFRhc2siLCJnZXRUYXNrcyIsImVkaXRUYXNrTmFtZSIsImVkaXRUYXNrRGVzY3JpcHRpb24iLCJlZGl0VGFza0RhdGUiLCJlZGl0VGFza1ByaW9yaXR5IiwiZWRpdFRhc2tQcmlvcml0eUxvdyIsImVkaXRUYXNrUHJpb3JpdHlNZWRpdW0iLCJlZGl0VGFza1ByaW9yaXR5SGlnaCIsImVkaXRUYXNrQ29udGFpbmVyIiwicHJldmlvdXNTaWJsaW5nIiwiYWN0aXZhdGVDb25maXJtVGFza0VkaXQiLCJkaXNwbGF5RGVsZXRlVGFzayIsImFjdGl2YXRlQ29uZmlybVRhc2tEZWxldGUiLCJjYW5jZWxFZGl0IiwiX2J1aWxkUGFnZSIsImZpcnN0Q2hpbGQiLCJwYWdlQ29udGFpbmVyIiwidGFza3NXcmFwcGVyIiwic3BhY2VyIiwic2hvd1Byb2plY3QiLCJ0b2RheVRpdGxlIiwib3ZlcmR1ZVRpdGxlIiwic2hvd0RheXMiLCJkYXlzU2VsZWN0b3IiLCJtYXgiLCJkYXlzVGl0bGUiLCJhY3RpdmF0ZURheXNTZWxlY3RvciIsImNvbmZpcm1DbGVhckFsbCIsImFjdGl2YXRlQ29uZmlybUNsZWFyQWxsIiwiY2FuY2VsQ2xlYXJBbGwiLCJhY3RpdmF0ZUNsZWFyQWxsQnV0dG9uIiwic3RhcnRQYWdlIiwiaW5pdFN0YXJ0aW5nTGlzdGVuZXJzIiwibG9hZFByb2plY3RzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uZmlybUFsbENsZWFyIiwiY2FwdHVyZSIsImFkZFByb2plY3QiLCJhY3RpdmF0ZURheXMiLCJidXR0b24iLCJjb25maXJtUHJvamVjdEVkaXQiLCJkZWxldGVQcm9qZWN0IiwiYWRkVGFzayIsIl9hY3RpdmF0ZUVkaXRUYXNrQnV0dG9uIiwiY29uZmlybVRhc2tFZGl0IiwiX2FjdGl2YXRlRGVsZXRlVGFza0J1dHRvbiIsImNvbmZpcm1UYXNrRGVsZXRlIiwiZWRpdCIsImRlbCIsInRvZ2dsZVRhc2tDb21wbGV0ZSIsIlByb2plY3QiLCJpbml0VGl0bGUiLCJjb21wbGV0ZWQiLCJzZWxlY3RlZCIsIm5ld05hbWUiLCJuZXdUYXNrIiwiVGFzayIsImR1ZURhdGUiLCJub3RlcyIsImRhdGFTdG9yYWdlIiwic2F2ZURhdGEiLCJhbGxQcm9qIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2FkRGF0YSIsImdldEl0ZW0iLCJsb2FkZWREYXRhIiwicmV0dXJuRGF0YSIsImxvYWRQcm9qZWN0VGl0bGUiLCJsb2FkUHJvamVjdHNUYXNrcyIsImxvYWRQcm9qZWN0Q29tcGxldGVkIiwiY2xlYXJEYXRhIiwiX2FsbFByb2plY3RzIiwiX2N1cnJlbnREYXlzUmVxdWVzdGVkIiwiX3JlbnVtYmVyUHJvamVjdHMiLCJyZWR1Y2VQcm9qZWN0IiwiX3JlbnVtYmVyVGFza3MiLCJyZWR1Y2VUYXNrIiwiX3NvcnRUYXNrcyIsInNvcnRlZFRhc2tzIiwibmV3UHJvamVjdEluZm8iLCJnb29kUHJvamVjdCIsIm5ld1Rhc2tJbmZvIiwiZ29vZFRhc2siLCJlZGl0VGl0bGUiLCJzZXROYW1lIiwiZWRpdFRhc2tJbmZvIiwic3BsaWNlIiwic2VsZWN0ZWRUYXNrIiwidG9nZ2xlQ29tcGxldGUiLCJuZXdWYWx1ZSIsImluaXRXZWJzaXRlIl0sInNvdXJjZVJvb3QiOiIifQ==