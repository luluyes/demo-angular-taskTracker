import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Task } from '../Task';
import { environment } from '../../environments/environment'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = `${environment.apiUrl}/tasks`;
  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{
    //return TASKS;
    //const tasks = of(TASKS);
    //return tasks

    //Mock getting data from backend
    console.log(this.baseUrl)
    return this.http.get<Task[]>(this.baseUrl)
  }

  deleteTask(task:Task):Observable<Task> {
    const url = `${this.baseUrl}/${task.id}`;
    return this.http.delete<Task>(url);   
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.baseUrl}/${task.id}`
    return this.http.put<Task>(url,task,httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl,task,httpOptions)
  }
}
