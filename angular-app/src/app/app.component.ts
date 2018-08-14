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
        this.tasks = [ {id: 1, title: 'first', dsecription: 'first desc'}];
        this.task = null;
    }

    getTasks() {
        console.log('getTasks is working');
        const tempObservable = this._dataService.getTasks();
        tempObservable.subscribe(
            (tasksReturned) => {
                console.log('response: ', tasksReturned);
                this.tasks = tasksReturned;
            }, (err) => {
                console.log('isplerr: ', err);
            });
    }

    getTask() {
        console.log('getTask is working');
        const tempObservable = this._dataService.getOneTask('5b294b2e4577e0388761d8c5');
        tempObservable.subscribe(
            (taskReturned) => {
                console.log('response: ', taskReturned);
                this.task = taskReturned;
            }, (err) => {
                console.log('err: ', err);
            });
    }





}
