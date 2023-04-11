import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public messageSource = new BehaviorSubject('');
  public idSource = new BehaviorSubject(0);
  currentValue=this.messageSource.asObservable();

  currentId=this.idSource.asObservable();
  constructor() { }

  changeMessage(message:any)
  {
    this.messageSource.next(message);
  }

  getId(id:number)
  {
    this.idSource.next(id);
  }
}
