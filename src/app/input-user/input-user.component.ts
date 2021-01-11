import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Data } from '../model/data';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-input-user',
  templateUrl: './input-user.component.html',
  styleUrls: ['./input-user.component.css']
})
export class InputUserComponent implements OnInit {
  data: Data[];
  myControl = new FormControl();
  filteredUsers: Observable<Data[]>;

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
     this.data = this.userDataService.getData();
     this.filteredUsers = this.myControl.valueChanges.pipe(
      // startWith(''),
      map(item => this.filterSearch(item))
    );
  }

  private filterSearch(item: string): Data[] {
    let filterKey = item.toLowerCase();

    
    return this.data.filter(user => (user.name.toLowerCase().indexOf(filterKey) === 0) || (user.name.split(' ')[1].toLowerCase().indexOf(filterKey) === 0));
  }

}
