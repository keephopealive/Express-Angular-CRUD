import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    tasks: any;
    task: any;

    constructor(private _dataService: DataService) {
        this.tasks = []; // 12 (this variable is updated)
        this.task = null; // A12
        // this.getTasks();
        // this.getTask();
    }

    getTasks() { // 3
        console.log('getTasks is working');
        const tempObservable = this._dataService.getTasks(); // 4
        // 7
        tempObservable.subscribe( // 8
            (tasksReturned) => { // 9 if the request was responded succeffully
                console.log('response: ', tasksReturned); // 10
                this.tasks = tasksReturned; // 11
            }, (err) => { // 9 if the request failed
                console.log('err: ', err); // 10
            });
    }

    getTask() { // A2
        console.log('COMPONENT : getTask invoked'); // A3
        const tempObservable = this._dataService.getOneTask('5b294b2e4577e0388761d8c5'); // A4
        tempObservable.subscribe( // A8
            (taskReturned) => { // A9 IF SUCCESSFUL RESPONSE
                console.log('SERVER RESPONSE TO COMPONENT: ', taskReturned); // A10
                this.task = taskReturned; // A11
            }, (err) => { // A9 IF FAILED RESPONSE
                console.log('err: ', err);
            });
    }





}
