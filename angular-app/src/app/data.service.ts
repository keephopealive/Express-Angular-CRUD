import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    console.log('Data Service (data.serice.ts) is running...');
    this.getTasks();
    // this.getOneTask('hg398jg082j90jg902jg0');
    // this.deleteTask('hg398jg082j90jg902jg0');
    // this.createTask({title:'test', name:'hi'});

  }

  getTasks() {
    console.log('getTasks invoked');
    const tempObservable = this.http.get('/tasks');
    tempObservable.subscribe(
      function(response) {
        console.log('response: ', response);
      }, function(err) {
        console.log('err: ', err);
      });
  }

  // getOneTask(id) {
  //   console.log('getOneTask invoked');
  //   const tempObservable = this.http.get('/tasks/'+id);
  //   tempObservable.subscribe(
  //     function(response) {
  //       console.log('response: ', response);
  //     }, function(err) {
  //       console.log('err: ', err);
  //     });
  // }

  // deleteTask(id) {
  //   const tempObservable = this.http.delete('/tasks/'+id);
  //   tempObservable.subscribe(
  //     function(response) {
  //       console.log('response: ', response);
  //     }, function(err) {
  //       console.log('err: ', err);
  //     });
  // }

  // createTask(obj) {
  //   const tempObservable = this.http.post('/tasks', obj);
  //   tempObservable.subscribe(
  //     function(response) {
  //       console.log('response: ', response);
  //     }, function(err) {
  //       console.log('err: ', err);
  //     });
  // }

}
