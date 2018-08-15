import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    datastuff;

    constructor(private http: HttpClient) {
        console.log('Data Service (data.serice.ts) is running...');
        // this.getTasks();
        // this.getOneTask( 'hg398jg082j90jg902jg0' );
        // this.deleteTask( 'hg398jg082j90jg902jg0' );
        // this.createTask( {title: 'test', name: 'hi'} );
        // this.updateTask( 'u42h9th92ht890240', {title: 'test', name: 'hi'} );        
    }

    getTasks() { // 5
        return this.http.get('/tasks'); // 6
    }

    getOneTask(id) { // A5
        console.log('SERVICE : getOneTask invoked'); // A6
        return this.http.get('/tasks/' + id); // A7
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
