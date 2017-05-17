import { Component } from '@angular/core';
import { TaskService } from '../Services/TaskService';

@Component({
    selector: 'task-new',
    templateUrl: './tasknew.component.html',

})

export class TaskNewComponent {

    task:any;

    constructor(public taskService: TaskService) {
        this.task = {title:"",completed:false};
    }

    addTask(task: any) {
        this.taskService.addTask(task);
        this.task = { title: "", completed: false };
    }
}
