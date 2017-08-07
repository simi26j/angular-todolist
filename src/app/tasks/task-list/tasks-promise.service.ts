import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Task } from '../../shared/task';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TasksPromiseService {

  private tasksUrl = 'assets/items.json';

  constructor(private http: Http) { }

  getTasks(): Promise<Task[]> {
    return this.http.get(this.tasksUrl)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || { };
  }

  private handleError(error: Response | any) {
    const errMsg = error.message ? error.message : error.toString();
    console.log(errMsg);
    return Promise.reject(errMsg);
  }

}
