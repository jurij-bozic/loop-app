import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Data } from '../model/data';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  data: Data[];

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    //added for testing
    console.log(this.userDataService.getData());
  }

}
