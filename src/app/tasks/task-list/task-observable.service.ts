import { Injectable } from '@angular/core';
import { Task } from '../../shared/task';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TaskObservableService {

  private tasksUrl = './assets/items.json';

  constructor(private http: Http) { }

  getTasks(): Observable<Task[]> {
    return this.http.get(this.tasksUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
      const body = res.json();
      return body.data || { };
  }

  private handleError (error: Response | any) {
      const errMsg = error.message ? error.message : error.toString();
      console.log(errMsg);
      return Observable.throw(errMsg);
  }

}
