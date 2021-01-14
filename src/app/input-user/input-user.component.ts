import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Data } from '../model/data';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map }  from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-input-user',
  templateUrl: './input-user.component.html',
  styleUrls: ['./input-user.component.css']
})
export class InputUserComponent implements OnInit {
  myMainForm: FormGroup;
  data: Data[];
  myControl = new FormControl();
  filteredUsers: Observable<Data[]>;
  selectedUsers = [];


  constructor(private userDataService: UserDataService, private fb: FormBuilder) { }


  ngOnInit(): void {
    //saves subject value to service
    this.myMainForm = this.fb.group({
      subject: ''
    })
    this.myMainForm.valueChanges.subscribe(item => this.userDataService.submissionSubject = item.subject);
  
    //filters users and displays the selected one
    this.data = this.userDataService.getData();
    this.filteredUsers = this.getFilteredUser();

    this.parseUser();
  }

  private filterSearch(item: string): Data[] {
    let filterKey = (item[0] == ' ' ? item.trim().toLowerCase() : item.toLowerCase());
    let splitFilterKey = filterKey.split(', ');

    if(splitFilterKey[splitFilterKey.length-1]){
      filterKey = splitFilterKey[splitFilterKey.length-1];
    }
    else {
      return;
    }

    return this.data.filter(user => ((user.name.toLowerCase().indexOf(filterKey) === 0) || (user.name.split(' ')[1].toLowerCase().indexOf(filterKey) === 0)) && !user.added);
  }

  private getFilteredUser(): any {
    let filteredUser = this.myControl.valueChanges.pipe(
      map(item => this.filterSearch(item))
    );
  
    return filteredUser;
  }

  private setUserAdded(user: string): any {
    this.data[this.data.indexOf(this.data.filter(item => item.name == user)[0])].added = true;
    this.userDataService.submissionUsers = (this.userDataService.submissionUsers  ? this.userDataService.submissionUsers + ', ' + user : this.userDataService.submissionUsers  + user);
    this.setInputValue();
    this.selectedUsers[this.selectedUsers.length-1] = {
      userName: user,
      nameFinished: true
    };
  }

  private parseUser(): void {
    this.myControl.valueChanges.subscribe(user => (this.data[this.data.indexOf(this.data.filter(item => item.name == user)[0])] 
    && !this.data[this.data.indexOf(this.data.filter(item => item.name == user)[0])].added ?
    this.setUserAdded(user) : this.setFakeInputValue(user)));
  }

  private setInputValue(): any {
    this.myControl.setValue(' '); 
    
  }

  private setFakeInputValue(text: string): any {
    let splitText = text.split(', ');

    if(this.selectedUsers.length == 0 || this.selectedUsers[this.selectedUsers.length-1].nameFinished){
        this.selectedUsers.push({
          userName: splitText[splitText.length-1],
          nameFinished: false
        });
    }
    else {
      this.selectedUsers[this.selectedUsers.length-1] = {
        userName: splitText[splitText.length-1].trim(),
        nameFinished: false
      };
    }
  }
} 





