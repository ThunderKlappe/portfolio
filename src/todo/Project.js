export class Project {
    constructor(initTitle, tasks = [], completed = false) {
        this.name = initTitle;
        this.tasks = tasks;
        this.completed = completed;
        this.selected = false;
    }
    getName() {
        return this.name;
    }
    getTasks() {
        return this.tasks;
    }
    isCompleted() {
        return this.completed;
    }
    isSelected() {
        return this.selected;
    }
    setName(newName) {
        this.name = newName;
    }
    addTask(newTask) {
        this.tasks.push(newTask);
    }
    markComplete(value) {
        this.completed = value;
    }
    markSelected(value) {
        this.selected = value;
    }
}
