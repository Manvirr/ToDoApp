"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TaskService_1 = require("../Services/TaskService");
var TaskListComponent = (function () {
    function TaskListComponent(taskService) {
        this.taskService = taskService;
    }
    TaskListComponent.prototype.completeTask = function (task) {
        task.completed = true;
    };
    return TaskListComponent;
}());
TaskListComponent = __decorate([
    core_1.Component({
        selector: 'task-list',
        templateUrl: './tasklist.component.html',
    }),
    __metadata("design:paramtypes", [TaskService_1.TaskService])
], TaskListComponent);
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=tasklist.component.js.map