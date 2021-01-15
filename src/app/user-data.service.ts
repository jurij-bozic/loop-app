import { Injectable } from '@angular/core';
import { Data } from './model/data';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  submissionSubject: string = '';
  submissionUsers: string = '';
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
        name: 'John Dryden',
        email: 'john.dryden@email.com',
        added: false
      },
      {
        name: 'Alan Turing',
        email: 'alan.Turing@email.com',
        added: false
      },
      {
        name: 'Alonzo Church',
        email: 'alonzo.church@email.com',
        added: false
      },
      {
        name: 'Noam Chomsky',
        email: 'alonzo.church@email.com',
        added: false
      },
      {
        name: 'James Joyce',
        email: 'james.joyce@email.com',
        added: false
      },
      {
        name: 'Richard Montague',
        email: 'richard.montague@email.com',
        added: false
      },
      {
        name: 'Rene Descartes',
        email: 'rene.descartes@email.com',
        added: false
      }
    ];
    return data;
  }
}
