import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  public getData() {
    let data = [
      {
        name: 'John Smith',
        email: 'john.smith@email.com'
      },
      {
        name: 'Jane Doe',
        email: 'jane.doe@email.com'
      },
      {
        name: 'William Shakespeare',
        email: 'william.shakespeare@email.com'
      },
      {
        name: 'Williamm Shakespeare',
        email: 'williamm.shakespeare@email.com'
      }
    ];
    return data;
  }
}
