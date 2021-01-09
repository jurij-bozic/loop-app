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
        name: 'WIlliam Shakespeare',
        email: 'jane.doe@email.com'
      }
    ];
    return data;
  }
}
