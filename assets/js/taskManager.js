class TaskManager {
    constructor(tasks) {
        this._tasks = [];
    }

    complete() {
        console.log(`${this._tasks} are complete`);
    }
}