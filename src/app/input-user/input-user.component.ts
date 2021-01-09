import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Data } from '../model/data';
// import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-input-user',
  templateUrl: './input-user.component.html',
  styleUrls: ['./input-user.component.css']
})
export class InputUserComponent implements OnInit {
  data: Data[];

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.data = this.userDataService.getData();
  }

}
