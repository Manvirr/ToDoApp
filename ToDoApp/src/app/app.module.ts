import { NgModule, Injectable }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';

import { TaskListComponent } from './TaskList/tasklist.component';
import { TaskNewComponent } from './TaskNew/tasknew.component'

import { TaskService } from './Services/TaskService'

/*const appRoutes: Routes = [
    { path: 'Playground', component: PlayGroundComponent },
    { path: 'Other', component: OtherComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent],
    bootstrap: [AppComponent]    
})*/

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, TaskListComponent, TaskNewComponent],
    bootstrap: [AppComponent],
    providers: [TaskService]
})

export class AppModule { }
