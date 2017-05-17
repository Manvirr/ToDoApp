import { Injectable } from '@angular/core'

@Injectable()
export class TaskService {
    tasks = [
        {title: "First Task", completed: false},
        {title:"Second Task",completed:false},
        {title: "Third Task", completed: false}
    ];

    getTasks() {
        return this.tasks;
    }

    addTask(task: any) {
        this.tasks.push(task);
    }
}