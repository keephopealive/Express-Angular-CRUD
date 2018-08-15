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
        this.tasks = [];
        this.task = null;
    }

    getTasks() { // (#3 - the function that will run when we click the button)
        const tempObservable = this._dataService.getTasks(); // (#4 - the call to our SERVICE to get an observable)
        tempObservable.subscribe(
            (tasksReturned) => { // (#10 - the callback function that will be triggered when the server finally responds to us)
                console.log('response: ', tasksReturned);
                this.tasks = tasksReturned; // (#11 - redefining our component's 'task' variable to be set to the value the server responded with).
            }, (err) => {
                console.log('err: ', err);
            });
    }

    getTask() {
        console.log('COMPONENT : getTask invoked');
        const tempObservable = this._dataService.getOneTask('5b294b2e4577e0388761d8c5');
        tempObservable.subscribe(
            (taskReturned) => {
                console.log('SERVER RESPONSE TO COMPONENT: ', taskReturned);
                this.task = taskReturned;
            }, (err) => {
                console.log('err: ', err);
            });
    }
}
