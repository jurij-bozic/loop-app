import { Injectable } from '@angular/core';
import { Data } from './model/data';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  submissionSubject: string;
  submissionUsers: string;
  submissionComment: string;

  

  constructor() { }

  public getData() {
    let data = [
      {
        name: 'John Smith',
        email: 'john.smith@email.com',
        added: false
      },
      {
        name: 'Jane Doe',
        email: 'jane.doe@email.com',
        added: false
      },
      {
        name: 'William Shakespeare',
        email: 'william.shakespeare@email.com',
        added: false
      },
      {
        name: 'Williamm Shakespeare',
        email: 'williamm.shakespeare@email.com',
        added: false
      }
    ];
    return data;
  }

  public submissionDataSet(users, comment){
        this.submissionUsers = users;
        this.submissionComment = comment;
 
  }
}
