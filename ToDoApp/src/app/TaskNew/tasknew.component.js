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
var TaskNewComponent = (function () {
    function TaskNewComponent(taskService) {
        this.taskService = taskService;
        this.task = { title: "", completed: false };
    }
    TaskNewComponent.prototype.addTask = function (task) {
        this.taskService.addTask(task);
        this.task = { title: "", completed: false };
    };
    return TaskNewComponent;
}());
TaskNewComponent = __decorate([
    core_1.Component({
        selector: 'task-new',
        templateUrl: './tasknew.component.html',
    }),
    __metadata("design:paramtypes", [TaskService_1.TaskService])
], TaskNewComponent);
exports.TaskNewComponent = TaskNewComponent;
//# sourceMappingURL=tasknew.component.js.map