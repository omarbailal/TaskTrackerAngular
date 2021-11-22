import { Injectable } from '@angular/core';
import {Task} from '../Task';
import {Observable, observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'aplication/json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiURL = "http://localhost:5000/tasks";
  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiURL);
  }
  deleteTask(task){
    const url = this.apiURL + "/" + task.id;
    return this.http.delete<Task>(url);
  }
  updateTaskReminder(task): Observable<Task>{
    const url = this.apiURL + "/" + task.id;
    return this.http.put<Task>(url, task);
  }
  addTask(task): Observable<Task>{
    return this.http.post<Task>(this.apiURL, task);
  }
}
