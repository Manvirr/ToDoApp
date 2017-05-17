import { Component } from '@angular/core';
import { TaskService } from '../Services/TaskService'

@Component({
    selector: 'task-list',
    templateUrl: './tasklist.component.html',
})

export class TaskListComponent {

    constructor(public taskService: TaskService) { }

    completeTask(task: any) {
        task.completed = true;
    }

}
