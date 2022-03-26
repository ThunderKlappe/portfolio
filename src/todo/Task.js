export class Task {
    constructor(name, description, dueDate, priority, notes, project, number, completed = false) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.project = project;
        this.number = number;
        this.completed = completed;
    }

    getName = () => this.name;
    getDescription = () => this.description;
    getDate = () => this.dueDate;
    getPriority = () => this.priority;
    getNotes = () => this.notes;
    getProject = () => this.project;
    getComplete = () => this.completed;
    getNumber = () => this.number;

    toggleComplete = () => (this.completed = !this.completed);
    reduceProject = () => this.project--;
    reduceTask = () => this.task--;
}
