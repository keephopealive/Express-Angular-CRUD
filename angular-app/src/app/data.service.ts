import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    getTasks() { // (#5 - the call to the service)
        return this.http.get('/tasks'); // (#6 - the HTTP request and the Observable returned to the component)
    }

    getOneTask(id) {
        console.log('SERVICE : getOneTask invoked');
        return this.http.get('/tasks/' + id);
    }

    deleteTask(id) {
        const tempObservable = this.http.delete('/tasks/' + id);
        tempObservable.subscribe(
            function (response) {
                console.log('response: ', response);
            }, function (err) {
                console.log('err: ', err);
            });
    }

    createTask(obj) {
        const tempObservable = this.http.post('/tasks', obj);
        tempObservable.subscribe(
            function (response) {
                console.log('response: ', response);
            }, function (err) {
                console.log('err: ', err);
            });
    }

    updateTask(id, obj) {
        const tempObservable = this.http.put('/tasks/' + id, obj);
        tempObservable.subscribe(
            function (response) {
                console.log('response: ', response);
            }, function (err) {
                console.log('err: ', err);
            });
    }

}
