"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TaskService = (function () {
    function TaskService() {
        this.tasks = [
            { title: "First Task", completed: false },
            { title: "Second Task", completed: false },
            { title: "Third Task", completed: false }
        ];
    }
    TaskService.prototype.getTasks = function () {
        return this.tasks;
    };
    TaskService.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    return TaskService;
}());
TaskService = __decorate([
    core_1.Injectable()
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=TaskService.js.map